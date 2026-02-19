import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const MultireferenceCover: React.FC = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/images/riding.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-retro-bg/50 z-10" />
      </div>

      {/* Top Metadata */}
      <div className="absolute top-12 left-12 right-12 z-20 flex justify-between text-retro-dim font-sans text-sm font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.2}>Generative AI</AnimatedBlock>
        <AnimatedBlock delay={0.4} className="text-right">
          2026
        </AnimatedBlock>
      </div>

      {/* Central Typography */}
      <div className="relative z-30 text-center translate-y-[280px]">
        <AnimatedBlock delay={0.5} direction="up">
          <h1 className="font-serif text-[8rem] leading-[0.85] text-retro-dim tracking-tight">
            Мульти<br/>референсность
          </h1>
        </AnimatedBlock>
      </div>

      {/* Bottom Metadata */}
      <div className="absolute bottom-12 left-12 right-12 z-20 flex justify-between items-end text-retro-dim font-sans text-xs font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.6} className="max-w-xs">
          <p>Style & Character<br/>Consistency</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.7} className="text-center">
          <p>Moscow, 105120<br/>UX/UI 2026</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.8} className="text-right max-w-xs">
          <p>Complex Composition<br/>Control</p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
