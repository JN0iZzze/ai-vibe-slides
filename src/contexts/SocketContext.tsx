import React, { createContext, useContext, useEffect, useRef, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';

interface SocketContextType {
  socket: Socket | null;
  subscribeBubbles: (sessionId: string, pollId: string, callback: (data: { id: number; content: string }) => void) => () => void;
  emitVote: (sessionId: string, pollId: string, content: string) => void;
  registerPollPrompt: (sessionId: string, pollId: string, systemPrompt: string) => void;
  subscribeAnalysis: (pollId: string, callback: (data: { pollId: string; result: string | null }) => void) => () => void;
  getAnalysis: (sessionId: string, pollId: string) => Promise<string | null>;
}

const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const SocketProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const socketRef = useRef<Socket | null>(null);
  const subscriptionsRef = useRef<Map<string, (data: { id: number; content: string }) => void>>(new Map());
  const analysisSubscriptionsRef = useRef<Map<string, (data: { pollId: string; result: string | null }) => void>>(new Map());

  useEffect(() => {
    // Определяем URL сокета
    const socketUrl = import.meta.env.VITE_SOCKET_URL || window.location.origin;
    
    // Создаём подключение
    const socket = io(socketUrl, {
      transports: ['websocket', 'polling'],
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      console.log('Socket connected:', socket.id);
    });

    socket.on('disconnect', () => {
      console.log('Socket disconnected');
    });

    // Обработчик для всех подписок
    socket.on('new_bubble', (data: { id: number; content: string }) => {
      // Вызываем все активные колбэки
      subscriptionsRef.current.forEach((callback) => {
        callback(data);
      });
    });

    // Обработчик для обновлений анализа
    socket.on('analysis_update', (data: { pollId: string; result: string | null }) => {
      // Вызываем колбэки для соответствующего pollId
      const callback = analysisSubscriptionsRef.current.get(data.pollId);
      if (callback) {
        callback(data);
      }
    });

    return () => {
      socket.disconnect();
      socketRef.current = null;
      subscriptionsRef.current.clear();
      analysisSubscriptionsRef.current.clear();
    };
  }, []);

  const subscribeBubbles = useCallback((
    sessionId: string,
    pollId: string,
    callback: (data: { id: number; content: string }) => void
  ) => {
    const socket = socketRef.current;
    if (!socket) {
      return () => {}; // Пустая функция отписки
    }

    // Присоединяемся к комнате сессии
    socket.emit('join_session', sessionId);

    // Сохраняем колбэк
    const key = `${sessionId}-${pollId}`;
    subscriptionsRef.current.set(key, callback);

    // Возвращаем функцию отписки
    return () => {
      subscriptionsRef.current.delete(key);
    };
  }, []);

  const emitVote = useCallback((sessionId: string, pollId: string, content: string) => {
    const socket = socketRef.current;
    if (!socket) {
      console.error('Socket not connected');
      return;
    }

    socket.emit('submit_vote', { sessionId, pollId, content });
  }, []);

  const registerPollPrompt = useCallback((sessionId: string, pollId: string, systemPrompt: string) => {
    const socket = socketRef.current;
    if (!socket) {
      console.error('Socket not connected');
      return;
    }

    socket.emit('register_poll_prompt', { sessionId, pollId, systemPrompt });
  }, []);

  const subscribeAnalysis = useCallback((
    pollId: string,
    callback: (data: { pollId: string; result: string | null }) => void
  ) => {
    analysisSubscriptionsRef.current.set(pollId, callback);

    // Возвращаем функцию отписки
    return () => {
      analysisSubscriptionsRef.current.delete(pollId);
    };
  }, []);

  const getAnalysis = useCallback((sessionId: string, pollId: string): Promise<string | null> => {
    return new Promise((resolve) => {
      const socket = socketRef.current;
      if (!socket) {
        console.error('Socket not connected');
        resolve(null);
        return;
      }

      const handler = (data: { pollId: string; result: string | null }) => {
        if (data.pollId === pollId) {
          socket.off('analysis_result', handler);
          resolve(data.result);
        }
      };

      socket.on('analysis_result', handler);
      socket.emit('get_analysis', { sessionId, pollId });
    });
  }, []);

  return (
    <SocketContext.Provider value={{ 
      socket: socketRef.current, 
      subscribeBubbles, 
      emitVote,
      registerPollPrompt,
      subscribeAnalysis,
      getAnalysis
    }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within SocketProvider');
  }
  return context;
};
