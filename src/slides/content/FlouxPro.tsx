import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const FlouxPro: React.FC = () => {
  return (
    <div className="h-full w-full relative overflow-hidden bg-retro-bg flex items-center justify-center p-0">
      {/* Centered Image */}
      <AnimatedBlock delay={0.1} className="relative z-10 h-full w-auto overflow-hidden shadow-2xl">
        <img src="/floux-screen.png" alt="Floux.pro Interface" className="h-full w-auto object-cover" />
      </AnimatedBlock>

      {/* Text in corner */}
      <div className="absolute bottom-12 left-12 z-20">
        <AnimatedBlock delay={0.2}>
          <span className="font-serif text-5xl text-retro-text">floux.pro</span>
        </AnimatedBlock>
      </div>
    </div>
  );
};
