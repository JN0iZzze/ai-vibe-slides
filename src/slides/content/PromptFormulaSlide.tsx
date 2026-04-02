import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const parts = [
  'Тип кадра',
  'Кто / Что',
  'Детали / Действие',
  'Где / Фон',
  'Свет / Камера',
];

export const PromptFormulaSlide: React.FC = () => {
  return (
    <div className="h-full w-full p-14">
      <div className="flex h-full flex-col p-10">
        <AnimatedBlock delay={0.1}>
          <h1 className="font-serif text-7xl text-retro-text">Базовая формула промпта</h1>
        </AnimatedBlock>

        <AnimatedBlock delay={0.18}>
          <p className="mt-4 max-w-4xl font-sans text-3xl leading-tight text-retro-dim">
            Рабочая схема, чтобы не забыть важные части инструкции. Полезна как старт, но не высечена в камне.
          </p>
        </AnimatedBlock>

        <div className="mt-12 grid flex-1 grid-cols-5 gap-4">
          {parts.map((part, index) => (
            <AnimatedBlock
              key={part}
              delay={0.25 + index * 0.06}
              className="relative flex items-center justify-center rounded-[2rem] border border-retro-dim/20 bg-retro-bg/40 px-6 py-8 text-center"
            >
              <div className="font-sans text-3xl leading-tight text-retro-text">{part}</div>
              {index < parts.length - 1 ? (
                <div className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 font-mono text-4xl text-retro-dim">
                  →
                </div>
              ) : null}
            </AnimatedBlock>
          ))}
        </div>

        <AnimatedBlock delay={0.65} className="mt-8 rounded-[2rem] border border-retro-accent/30 bg-retro-accent/10 px-8 py-6">
          <p className="font-mono text-2xl leading-snug text-retro-text">
            Full shot, young designer in silver jacket, oversized headphones, brutalist studio interior, hard side light, 35mm camera.
          </p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
