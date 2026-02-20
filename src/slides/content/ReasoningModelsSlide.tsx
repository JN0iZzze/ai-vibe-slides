import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const ReasoningModelsSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-16 overflow-hidden">
      {/* Мелкий заголовок сверху */}
      <AnimatedBlock delay={0.05} className="mb-8">
        <p className="font-mono text-2xl text-retro-dim tracking-widest uppercase text-center">
          Reasoning модели
        </p>
      </AnimatedBlock>

      {/* Крупный текст по центру */}
      <AnimatedBlock delay={0.1} className="text-center">
        <p className="font-serif italic text-[5rem] text-retro-text leading-tight">
          Огромное отличие{' '}
          <span className="text-retro-accent font-medium">думающих</span>
          {' '}(Reasoning) моделей — способность к&nbsp;решению абстрактных задач
        </p>
      </AnimatedBlock>
    </div>
  );
};
