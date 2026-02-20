import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const phrases = [
  'Keep character exactly the same',
  'Character identity',
  'The same person from [Image 1]',
  'Keep face identity',
];

export const RefiningPromptsSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20">
      <div>
        <AnimatedBlock delay={0.1}>
          <h1 className="font-serif italic text-7xl mb-12 text-left text-retro-text">
            Уточняющие фразы
          </h1>
        </AnimatedBlock>
        <AnimatedBlock delay={0.2} className="w-full max-w-6xl">
          <ul className="font-mono text-5xl text-retro-text space-y-6 list-none">
            {phrases.map((phrase, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-retro-dim shrink-0">//</span>
                <span>{phrase}</span>
              </li>
            ))}
          </ul>
        </AnimatedBlock>
      </div>
    </div>
  );
};
