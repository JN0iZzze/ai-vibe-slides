import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const ThinkingModeExample: React.FC = () => {
  return (
    <div className="h-full w-full flex p-12 gap-12 items-stretch">
      {/* Left Column: Prompt */}
      <AnimatedBlock delay={0.1} direction="left" className="flex-1 flex flex-col justify-center p-8">
        <h2 className="text-3xl font-mono text-retro-dim uppercase tracking-widest mb-8">
          Промпт
        </h2>
        <blockquote className="text-5xl font-sans border-l-4 border-retro-accent pl-8 text-retro-text leading-tight">
          «Нарисуй инфографику «Курс золота на сегодня» с историей изменения цены за год»
        </blockquote>
      </AnimatedBlock>

      {/* Right Column: Result placeholder */}
      <AnimatedBlock delay={0.3} direction="right" className="flex-1 h-full">
        <div className="h-full min-h-[400px] relative rounded-[2rem] overflow-hidden border-2 border-retro-dim flex items-center justify-center bg-retro-dim/5">
          <span className="font-serif italic text-4xl opacity-50 text-center px-8">
            Placeholder: инфографика
          </span>
        </div>
      </AnimatedBlock>
    </div>
  );
};
