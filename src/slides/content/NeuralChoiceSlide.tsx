import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const NeuralChoiceSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-16 overflow-hidden">
      <AnimatedBlock delay={0.1} className="mb-8">
        <p className="font-mono text-2xl uppercase tracking-[0.3em] text-retro-dim">
          Выбор модели
        </p>
      </AnimatedBlock>

      <AnimatedBlock delay={0.2} className="text-center">
        <h1 className="font-serif text-[8rem] leading-[0.82] text-retro-text tracking-tight">
          Какая нейронка<br />для какой задачи
        </h1>
      </AnimatedBlock>
    </div>
  );
};
