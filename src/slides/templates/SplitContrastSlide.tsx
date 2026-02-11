import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const SplitContrastSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex p-12 gap-8 items-stretch font-sans">
      {/* Left Column: Green BG, Dark Text */}
      <AnimatedBlock delay={0.1} direction="left" className="flex-1 h-full">
        <div className="h-full bg-retro-text text-retro-bg rounded-[2rem] p-12 flex flex-col justify-center items-center relative overflow-hidden">
          <h2 className="text-8xl font-serif italic mb-6 z-10">Протагонист</h2>
          <p className="text-3xl text-center max-w-md z-10 font-bold opacity-90">
            Движущая сила истории. Тот, чьи желания создают сюжет.
          </p>
          <div className="absolute -bottom-4 -left-4 text-[12rem] opacity-10 font-serif italic pointer-events-none">
            Герой
          </div>
        </div>
      </AnimatedBlock>

      {/* Center Divider */}
      <div className="flex items-center justify-center w-24 relative">
        <AnimatedBlock delay={0.5} direction="up" className="absolute z-20">
          <span className="font-serif italic text-8xl bg-retro-bg px-4">VS</span>
        </AnimatedBlock>
        <div className="h-full w-px bg-retro-dim absolute z-10"></div>
      </div>

      {/* Right Column: Dark BG, Green Text */}
      <AnimatedBlock delay={0.3} direction="right" className="flex-1 h-full">
        <div className="h-full bg-retro-bg border-2 border-retro-text text-retro-text rounded-[2rem] p-12 flex flex-col justify-center items-center relative overflow-hidden">
          <h2 className="text-8xl font-serif italic mb-6 z-10">Антагонист</h2>
          <p className="text-3xl text-center max-w-md z-10 opacity-90">
            Сила сопротивления. Тот, кто заставляет героя меняться.
          </p>
          <div className="absolute -bottom-4 -right-4 text-[12rem] opacity-10 font-serif italic pointer-events-none">
            Злодей
          </div>
        </div>
      </AnimatedBlock>
    </div>
  );
};
