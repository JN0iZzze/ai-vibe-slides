import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const frames = [
  { src: '/images/alfa/kling1.png', label: 'Start Frame' },
  { src: '/images/alfa/kling2.png', label: 'End Frame' },
];

export const AlfaVideoGenSlide: React.FC = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-8 flex flex-row overflow-hidden">
      {/* Left: Title + Prompt */}
      <div className="w-[400px] h-full flex flex-col justify-center pr-8">
        <AnimatedBlock delay={0.1}>
          <h1 className="font-serif text-7xl text-retro-text mb-8">
            Kling 01
          </h1>
          <p className="font-mono text-3xl text-retro-text leading-[1.25]">
            Промпт:
          </p>
          <p className="font-mono text-3xl text-retro-dim leading-[1.25]">
            liquid shapes morphing transition
          </p>
        </AnimatedBlock>
      </div>

      {/* Right: Two images with labels */}
      <div className="flex-1 flex flex-col gap-4 min-h-0 overflow-hidden">
        {frames.map((frame, i) => (
          <AnimatedBlock key={frame.src} delay={0.2 + i * 0.1} className="flex items-center gap-4 flex-1 min-h-0 justify-end">
            <span className="font-mono text-xl text-retro-dim uppercase tracking-widest shrink-0">
              {frame.label}
            </span>
            <div className="rounded-[2rem] overflow-hidden h-full flex items-center min-w-0 shrink-0">
              <img
                src={frame.src}
                alt=""
                className="max-h-full max-w-full object-contain rounded-[2rem]"
              />
            </div>
          </AnimatedBlock>
        ))}
      </div>
    </div>
  );
};
