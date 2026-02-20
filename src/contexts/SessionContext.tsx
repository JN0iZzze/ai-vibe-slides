import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

interface SessionContextType {
  sessionId: string;
  pollId: string;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchParams] = useSearchParams();
  const [sessionId, setSessionId] = useState<string>('');
  const pollId = 'design'; // Для первого вопроса "Из какой сферы пришли в дизайн?"

  useEffect(() => {
    // Пытаемся получить sessionId из URL
    const urlSessionId = searchParams.get('session');
    
    if (urlSessionId) {
      setSessionId(urlSessionId);
    } else {
      // Генерируем новый sessionId при первом визите
      const storedSessionId = sessionStorage.getItem('presentation_session_id');
      
      if (storedSessionId) {
        setSessionId(storedSessionId);
      } else {
        const newSessionId = crypto.randomUUID();
        sessionStorage.setItem('presentation_session_id', newSessionId);
        setSessionId(newSessionId);
      }
    }
  }, [searchParams]);

  if (!sessionId) {
    return null; // Ждём генерации sessionId
  }

  return (
    <SessionContext.Provider value={{ sessionId, pollId }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = (): SessionContextType => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error('useSession must be used within SessionProvider');
  }
  return context;
};
