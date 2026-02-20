import React, { useState, useEffect, useRef } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSession } from '../../contexts/SessionContext';
import { useSocket } from '../../contexts/SocketContext';
import { AnimatedBlock } from '../../components/AnimatedBlock';

interface Bubble {
  id: number;
  content: string;
  left: number;
  top: number;
  color: string;
}

const MAX_BUBBLES = 60;

// Системный промпт для анализа ответов через Gemini
const SYSTEM_PROMPT = `Ты эксперт по дизайну будущего. На основе ответов аудитории сделай короткое саммари: какой он, дизайнер будущего. Учитывай все ответы, даже шуточные и абсурдные — они тоже часть образа. Кратко и по делу. Максимум 250 символов. Выделяй жирным главное.`;

// Пастельные цвета более насыщенные
const PASTEL_COLORS = [
  '#fda4af', // Розовый (rose-300)
  '#6ee7b7', // Зеленый (emerald-300)
  '#fcd34d', // Желтый (yellow-300)
  '#93c5fd', // Синий (blue-300)
  '#c4b5fd', // Фиолетовый (purple-300)
  '#f9a8d4', // Розовый (pink-300)
  '#5eead4', // Бирюзовый (teal-300)
  '#fcd34d', // Кремовый (amber-300)
];

export const CombSkillsPollSlide: React.FC = () => {
  const { sessionId } = useSession();
  const { subscribeBubbles, registerPollPrompt } = useSocket();
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const bubblesRef = useRef<Bubble[]>([]);

  // Уникальный ID для этого опроса
  const pollId = 'comb-skills';

  // Генерируем URL для голосования
  const baseUrl = window.location.origin;
  const voteUrl = `${baseUrl}/vote?session=${sessionId}&poll=${pollId}`;

  useEffect(() => {
    // Регистрируем системный промпт для анализа ответов
    registerPollPrompt(sessionId, pollId, SYSTEM_PROMPT);
  }, [sessionId, pollId, registerPollPrompt]);

  useEffect(() => {
    // Подписываемся на новые баблы
    const unsubscribe = subscribeBubbles(sessionId, pollId, (data) => {
      const newBubble: Bubble = {
        id: data.id,
        content: data.content,
        left: Math.random() * 80 + 10, // 10-90%
        top: Math.random() * 75 + 10, // 10-85% (распределение по всему экрану)
        color: PASTEL_COLORS[Math.floor(Math.random() * PASTEL_COLORS.length)],
      };

      setBubbles((prev) => {
        const updated = [...prev, newBubble];
        bubblesRef.current = updated;
        
        // Ограничиваем количество баблов (FIFO)
        if (updated.length > MAX_BUBBLES) {
          return updated.slice(-MAX_BUBBLES);
        }
        return updated;
      });
    });

    return unsubscribe;
  }, [sessionId, pollId, subscribeBubbles]);

  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col items-center justify-center">
      {/* Top Meta */}
      <div className="absolute top-12 left-12 right-12 flex justify-between items-start z-20 px-16">
        <AnimatedBlock delay={0.1}>
          <div className="flex flex-col">
            <span className="font-mono text-xl text-retro-dim tracking-widest uppercase font-bold">BHSAD 2026</span>
            <span className="font-mono text-xs text-retro-dim/60 uppercase mt-1 tracking-wider">Interactive Poll</span>
          </div>
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.2}>
          <div className="flex items-center gap-2 font-mono text-xs text-retro-dim/60 uppercase tracking-[0.2em]">
            <span className="w-2 h-2 bg-retro-accent rounded-full animate-pulse" />
            Session_Active
          </div>
        </AnimatedBlock>
      </div>

      {/* Main Content - Centered */}
      <div className="flex flex-col items-center justify-center z-50 relative px-16">
        <AnimatedBlock delay={0.3} direction="up">
          <h1 className="font-serif text-6xl mb-12 text-center text-retro-text max-w-5xl leading-tight">
            Какими навыками должен обладать Comb-shaped дизайнер будущего?
          </h1>
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.4} direction="up">
          <div className="bg-retro-bg/50 rounded-[2rem]">
            <QRCodeSVG
              value={voteUrl}
              size={350}
              level="H"
              includeMargin={true}
              fgColor="var(--color-retro-text)"
              bgColor="var(--color-retro-bg)"
            />
          </div>
        </AnimatedBlock>
      </div>

      {/* Bubbles - Full screen positioning */}
      <AnimatePresence>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute px-5 py-3 rounded-full z-40"
            style={{
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              backgroundColor: bubble.color,
            }}
          >
            <span className="font-sans text-black text-2xl whitespace-nowrap">
              {bubble.content}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Bottom Meta */}
      <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end z-20 px-16">
        <AnimatedBlock delay={0.6}>
          <div className="font-mono text-xs text-retro-dim/40 tracking-wider">
            // ANSWERS: {bubbles.length}
          </div>
        </AnimatedBlock>

        <AnimatedBlock delay={0.7}>
          <div className="font-mono text-xs text-retro-dim/40 tracking-wider">
            Session: {sessionId.slice(0, 8)}...
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
