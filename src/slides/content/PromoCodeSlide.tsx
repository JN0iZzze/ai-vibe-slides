import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const PromoCodeSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20 bg-retro-bg">
      <AnimatedBlock delay={0.1}>
        <h1 className="font-serif italic text-[8vw] leading-none text-retro-text text-center mb-12">
          floux.pro
        </h1>
      </AnimatedBlock>
      
      <AnimatedBlock delay={0.3}>
        <div className="border-4 border-retro-text rounded-[2rem] px-16 py-8 bg-retro-text/5 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-retro-text/5 animate-pulse" />
          <h2 className="font-mono text-[6vw] font-bold text-retro-text tracking-widest relative z-10">
            FLOUX2026
          </h2>
        </div>
      </AnimatedBlock>
    </div>
  );
};
