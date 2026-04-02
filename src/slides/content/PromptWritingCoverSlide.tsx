import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const PromptWritingCoverSlide: React.FC = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-retro-bg" />
      <div className="absolute left-[15%] top-[18%] h-80 w-80 rounded-full bg-retro-accent/10 blur-[120px]" />
      <div className="absolute bottom-[12%] right-[10%] h-96 w-96 rounded-full bg-retro-text/10 blur-[140px]" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center p-16 text-center">
        <AnimatedBlock delay={0.1}>
          <p className="font-mono text-2xl uppercase tracking-[0.35em] text-retro-dim">
            Prompt Writing
          </p>
        </AnimatedBlock>
        <AnimatedBlock delay={0.2}>
          <h1 className="mt-8 font-serif text-[8.5rem] leading-[0.85] text-retro-text">
            Как писать
            <br />
            промпты
          </h1>
        </AnimatedBlock>
        <AnimatedBlock delay={0.35}>
          <p className="mt-10 max-w-4xl font-sans text-3xl leading-tight text-retro-dim">
            Не разговор с чат-ботом, а инструкция для визуальной системы:
            что сделать, что сохранить и чему дать приоритет.
          </p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
