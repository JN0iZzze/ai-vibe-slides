import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const TextAsMainTool2026: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20">
      <AnimatedBlock delay={0.1}>
        <h1 className="font-serif text-[16rem] leading-[0.75] text-retro-text text-center tracking-tighter">
          ТЕКСТ
        </h1>
      </AnimatedBlock>
      <AnimatedBlock delay={0.3}>
        <p className="text-4xl opacity-80 max-w-5xl text-center font-sans text-retro-dim mt-8">
          Как основной инструмент в 2026 — навыки постановки задачи, арт-дирекшена и дирежирования
        </p>
      </AnimatedBlock>
    </div>
  );
};
