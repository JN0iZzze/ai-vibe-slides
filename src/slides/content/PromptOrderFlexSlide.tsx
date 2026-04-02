import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const promptA =
  'Full shot, fashion model in silver jacket, brutalist studio interior, hard side light, 35mm lens, clean editorial mood.';

const promptB =
  'Brutalist studio interior, hard side light, clean editorial mood, fashion model in silver jacket, full shot, 35mm lens.';

export const PromptOrderFlexSlide: React.FC = () => {
  return (
    <div className="h-full w-full p-14">
      <div className="flex h-full flex-col p-10">
        <AnimatedBlock delay={0.1}>
          <h1 className="font-serif text-7xl text-retro-text">Формула не догма</h1>
        </AnimatedBlock>

        <div className="mt-10 grid flex-1 grid-cols-2 gap-6">
          <AnimatedBlock delay={0.2} className="rounded-[2rem] border border-retro-dim/20 bg-retro-bg/40 p-8">
            <div className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-retro-dim">Вариант A</div>
            <p className="font-mono text-3xl leading-snug text-retro-text">{promptA}</p>
          </AnimatedBlock>

          <AnimatedBlock delay={0.28} className="rounded-[2rem] border border-retro-dim/20 bg-retro-bg/40 p-8">
            <div className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-retro-dim">Вариант B</div>
            <p className="font-mono text-3xl leading-snug text-retro-text">{promptB}</p>
          </AnimatedBlock>
        </div>

        <AnimatedBlock delay={0.38} className="mt-8 rounded-[2rem] bg-retro-text px-8 py-6 text-retro-bg">
          <p className="font-sans text-3xl leading-tight">
            Важнее не священный порядок, а полнота инструкции, ясные приоритеты и отсутствие противоречий.
          </p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
