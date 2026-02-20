import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import axios from 'axios';
import { insertVote, getVoteStats, getAllVotes } from './db.js';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Gemini Proxy конфигурация
const GEMINI_PROXY_URL = (process.env.GEMINI_PROXY_URL || 'https://main-7lhef6v6xa-lz.a.run.app').replace(/\/$/, ''); // Убираем trailing slash
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';

// Состояние анализа для каждого опроса
// Ключ: sessionId:pollId
const pollStates = {};

// REST API для статистики (на будущее)
app.get('/api/votes/stats', (req, res) => {
  const { session, poll } = req.query;
  
  if (!session || !poll) {
    return res.status(400).json({ error: 'session and poll parameters are required' });
  }
  
  try {
    const stats = getVoteStats(session, poll);
    res.json(stats);
  } catch (error) {
    console.error('Error getting vote stats:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

/**
 * Функция для обработки анализа ответов через Gemini
 */
async function processAnalysis(sessionId, pollId) {
  const key = `${sessionId}:${pollId}`;
  const state = pollStates[key];
  
  if (!state) {
    console.log(`No state found for ${key}`);
    return;
  }
  
  // Если уже идет обработка, выходим
  if (state.isProcessing) {
    console.log(`Analysis already processing for ${key}`);
    return;
  }
  
  // Если нет системного промпта, выходим
  if (!state.systemPrompt) {
    console.log(`No system prompt registered for ${key}`);
    return;
  }
  
  // Получаем все голоса из БД
  const votes = getAllVotes(sessionId, pollId);
  
  if (!votes || votes.length === 0) {
    console.log(`No votes found for ${key}`);
    return;
  }
  
  // Устанавливаем флаг обработки
  state.isProcessing = true;
  
  try {
    // Формируем промпт с ответами пользователей
    const answersText = votes.map((vote, index) => `${index + 1}. ${vote.content}`).join('\n');
    const prompt = `Вот ответы аудитории на вопрос:\n\n${answersText}`;
    
    console.log(`Sending analysis request to Gemini for ${key} (${votes.length} votes)`);
    
    const requestPayload = {
      prompt: prompt,
      system_prompt: state.systemPrompt,
      model: GEMINI_MODEL,
      temperature: 0.6,
      max_tokens: 2000
    };
    
    // Отправляем запрос к Gemini Proxy с retry логикой
    let response;
    let lastError;
    const maxRetries = 3;
    const retryDelay = 2000; // 2 секунды между попытками
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        // axios автоматически устанавливает Content-Type: application/json при передаче объекта
        // Используем точно такой же формат, как в Python requests.post с json=
        response = await axios.post(
          `${GEMINI_PROXY_URL}/proxy/gemini`,
          requestPayload,
          {
            timeout: 60000 // 60 секунд таймаут (как timeout=60 в Python)
          }
        );
        
        // Успешный запрос
        break;
      } catch (error) {
        lastError = error;
        
        // Если это последняя попытка или ошибка не связана с сетью/таймаутом, выходим
        if (attempt === maxRetries || (error.response?.status && error.response.status !== 502 && error.response.status !== 503 && error.response.status !== 504)) {
          throw error;
        }
        
        // Ждем перед следующей попыткой
        if (attempt < maxRetries) {
          await new Promise(resolve => setTimeout(resolve, retryDelay * attempt));
        }
      }
    }
    
    if (!response) {
      throw lastError || new Error('Failed to get response from Gemini');
    }
    
    // Сохраняем результат
    const result = response.data;
    state.lastResult = typeof result === 'string' ? result : JSON.stringify(result);
    state.isProcessing = false;
    
    // Отправляем результат всем клиентам в сессии
    io.to(sessionId).emit('analysis_update', {
      pollId,
      result: state.lastResult
    });
    
    console.log(`✅ Analysis completed for ${key}`);
    
    // Если были новые голоса пока мы обрабатывали, запускаем анализ снова
    if (state.hasPendingUpdate) {
      state.hasPendingUpdate = false;
      // Небольшая задержка перед повторным запуском
      setTimeout(() => {
        processAnalysis(sessionId, pollId);
      }, 1000);
    }
  } catch (error) {
    const errorDetails = error.response?.data || error.message;
    console.error(`❌ Error processing analysis for ${key}:`, error.message);
    
    // Если это ошибка прокси-сервера (502/503/504), логируем детали
    if (error.response?.status >= 500) {
      console.error(`   Proxy server error: ${error.response.status} ${error.response.statusText}`);
      console.error(`   Response data:`, JSON.stringify(errorDetails));
    }
    
    state.isProcessing = false;
    state.hasPendingUpdate = false; // Сбрасываем флаг при ошибке, чтобы не уйти в бесконечную рекурсию
  }
}

// Socket.io обработка
io.on('connection', (socket) => {
  console.log('Client connected:', socket.id);
  
  // Присоединение к комнате сессии
  socket.on('join_session', (sessionId) => {
    socket.join(sessionId);
    console.log(`Socket ${socket.id} joined session: ${sessionId}`);
  });
  
  // Получение голоса от мобильного клиента
  socket.on('submit_vote', async (data) => {
    const { sessionId, pollId, content } = data;
    
    if (!sessionId || !pollId || !content || content.trim() === '') {
      socket.emit('vote_error', { message: 'Invalid vote data' });
      return;
    }
    
    try {
      // Сохраняем в БД
      const voteId = insertVote(sessionId, pollId, content.trim());
      
      // Отправляем всем подписчикам этой сессии
      io.to(sessionId).emit('new_bubble', {
        id: voteId,
        content: content.trim(),
      });
      
      console.log(`Vote saved: session=${sessionId}, poll=${pollId}, content=${content.trim()}`);
      
      // Триггерим анализ ответов
      const key = `${sessionId}:${pollId}`;
      const state = pollStates[key];
      
      if (state) {
        if (state.isProcessing) {
          // Если уже идет обработка, ставим флаг что данные обновились
          state.hasPendingUpdate = true;
        } else {
          // Запускаем анализ
          processAnalysis(sessionId, pollId);
        }
      }
    } catch (error) {
      console.error('Error saving vote:', error);
      socket.emit('vote_error', { message: 'Failed to save vote' });
    }
  });
  
  // Регистрация системного промпта для опроса
  socket.on('register_poll_prompt', (data) => {
    const { sessionId, pollId, systemPrompt } = data;
    
    if (!sessionId || !pollId || !systemPrompt) {
      socket.emit('register_error', { message: 'sessionId, pollId, and systemPrompt are required' });
      return;
    }
    
    const key = `${sessionId}:${pollId}`;
    
    // Инициализируем или обновляем состояние
    if (!pollStates[key]) {
      pollStates[key] = {
        systemPrompt: '',
        isProcessing: false,
        hasPendingUpdate: false,
        lastResult: null
      };
    }
    
    pollStates[key].systemPrompt = systemPrompt;
    console.log(`Registered prompt for ${key}`);
    
    // Если уже есть голоса, можно сразу запустить анализ
    const votes = getAllVotes(sessionId, pollId);
    if (votes && votes.length > 0 && !pollStates[key].isProcessing) {
      processAnalysis(sessionId, pollId);
    }
  });
  
  // Получение текущего результата анализа
  socket.on('get_analysis', (data) => {
    const { sessionId, pollId } = data;
    
    if (!sessionId || !pollId) {
      socket.emit('analysis_error', { message: 'sessionId and pollId are required' });
      return;
    }
    
    const key = `${sessionId}:${pollId}`;
    const state = pollStates[key];
    
    if (state) {
      socket.emit('analysis_result', {
        pollId,
        result: state.lastResult
      });
    } else {
      socket.emit('analysis_result', {
        pollId,
        result: null
      });
    }
  });
  
  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
