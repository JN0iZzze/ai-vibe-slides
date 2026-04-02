import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const principles = [
  'меньше разговорности',
  'больше конкретных ограничений',
  'явно задавать приоритеты',
  'отдельно указывать, что не менять',
];

export const PromptInstructionSlide: React.FC = () => {
  return (
    <div className="h-full w-full p-16">
      <div className="flex h-full flex-col items-center justify-center px-14 py-16 text-center">
        <AnimatedBlock delay={0.1}>
          <p className="font-mono text-2xl uppercase tracking-[0.35em] text-retro-dim">
            Core Principle
          </p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.2}>
          <h1 className="mt-8 font-serif text-[7.5rem] leading-[0.84] text-retro-text">
            Это не ChatGPT,
            <br />
            это инструкция
          </h1>
        </AnimatedBlock>

        <AnimatedBlock delay={0.32}>
          <p className="mt-8 max-w-5xl font-sans text-3xl leading-tight text-retro-dim">
            Модель не нужно уговаривать. Ей нужно точно поставить задачу:
            что генерировать, что сохранять и что считать главным.
          </p>
        </AnimatedBlock>

        <div className="mt-14 grid grid-cols-2 gap-5">
          {principles.map((principle, index) => (
            <AnimatedBlock
              key={principle}
              delay={0.4 + index * 0.06}
              className="rounded-[2rem] border border-retro-dim/20 bg-retro-bg/40 px-7 py-5 font-mono text-xl uppercase tracking-[0.24em] text-retro-dim"
            >
              {principle}
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </div>
  );
};
