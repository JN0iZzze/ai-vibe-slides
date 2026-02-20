import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSocket } from '../contexts/SocketContext';
import { motion } from 'framer-motion';

export const VotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { emitVote } = useSocket();
  const [answer, setAnswer] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const sessionId = searchParams.get('session');
  const pollId = searchParams.get('poll') || 'design';

  const POLL_CONFIG: Record<string, string> = {
    'design': 'Из какой сферы пришли в дизайн?',
    'comb-skills': 'Какими навыками должен обладать Comb-shaped дизайнер будущего?',
  };

  const question = POLL_CONFIG[pollId] || 'Вопрос не найден';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const trimmedAnswer = answer.trim();
    
    if (!trimmedAnswer) {
      setError('Пожалуйста, введите ответ');
      return;
    }

    if (!sessionId) {
      setError('Ошибка: отсутствует идентификатор сессии');
      return;
    }

    try {
      emitVote(sessionId, pollId, trimmedAnswer);
      setSubmitted(true);
      setError('');
    } catch (err) {
      setError('Ошибка при отправке ответа. Попробуйте еще раз.');
      console.error('Vote submission error:', err);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen w-full bg-retro-bg text-retro-text flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto rounded-full border-2 border-retro-text flex items-center justify-center mb-4">
              <span className="text-3xl">✓</span>
            </div>
          </div>
          <h1 className="font-serif text-4xl mb-4 text-retro-text">
            Спасибо!
          </h1>
          <p className="font-sans text-xl text-retro-dim mb-8">
            Посмотрите на экран
          </p>
          <div className="font-mono text-sm text-retro-dim/60 uppercase tracking-widest">
            // Ответ отправлен
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-retro-bg text-retro-text flex items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl mb-4 text-retro-text">
            {question}
          </h1>
          <div className="h-1 w-24 bg-retro-dim/30 rounded-full mx-auto" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="answer" className="block font-mono text-sm text-retro-dim/60 uppercase tracking-widest mb-3">
              Ваш ответ
            </label>
            <input
              id="answer"
              type="text"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value);
                setError('');
              }}
              placeholder="Например: Программирование"
              className="w-full px-6 py-4 rounded-[2rem] border-2 border-retro-dim/30 bg-retro-bg text-retro-text font-sans text-lg focus:outline-none focus:border-retro-text transition-colors"
              autoFocus
            />
            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-2 font-mono text-sm text-retro-accent"
              >
                {error}
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-[2rem] border-2 border-retro-text bg-retro-text text-retro-bg font-mono text-lg uppercase tracking-widest hover:bg-retro-accent hover:border-retro-accent transition-colors focus:outline-none"
          >
            Отправить
          </button>
        </form>

        <div className="mt-8 text-center">
          <div className="font-mono text-xs text-retro-dim/40 uppercase tracking-wider">
            // BHSAD 2026
          </div>
        </div>
      </motion.div>
    </div>
  );
};
