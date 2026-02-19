import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const JsonPrompting: React.FC = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/bg/bg2.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-retro-bg/80 z-10" />
      </div>

      {/* Top Metadata */}
      <div className="absolute top-12 left-12 right-12 z-20 flex justify-between text-retro-dim font-sans text-sm font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.2}>Generative AI</AnimatedBlock>
        <AnimatedBlock delay={0.3} className="flex gap-12">
          <span>Moscow</span>
          <span>Artplay<br/>Design Center</span>
        </AnimatedBlock>
        <AnimatedBlock delay={0.4} className="text-right">
          2026
        </AnimatedBlock>
      </div>

      {/* Central Typography */}
      <div className="relative z-30 text-center translate-y-[220px]">
        <AnimatedBlock delay={0.5} direction="up">
          <h1 className="font-serif text-[14rem] leading-[0.65] text-retro-text tracking-tight">
            JSON<br/>промптинг
          </h1>
        </AnimatedBlock>
      </div>

      {/* Bottom Metadata */}
      <div className="absolute bottom-12 left-12 right-12 z-20 flex justify-between items-end text-retro-dim font-sans text-xs font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.6} className="max-w-xs">
          <p>Structured Data<br/>JSON Format</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.7} className="text-center">
          <p>Moscow, 105120<br/>UX/UI 2026</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.8} className="text-right max-w-xs">
          <p>High Fidelity<br/>Parameter Control</p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
