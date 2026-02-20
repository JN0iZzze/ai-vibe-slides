import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const StyleTransfer: React.FC = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/style-transfer.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Top Metadata */}
      <div className="absolute top-12 left-12 right-12 z-20 flex justify-between text-retro-dim font-sans text-sm font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.2}>Generative AI</AnimatedBlock>
        <AnimatedBlock delay={0.4} className="text-right">
          2026
        </AnimatedBlock>
      </div>

      {/* Central Typography */}
      <div className="absolute left-12 z-30 text-left translate-y-[280px]">
        <AnimatedBlock delay={0.5} direction="up">
          <h1 className="font-serif text-[10rem] leading-[0.65] text-[#ffffff] tracking-tight">
            Style Transfer
          </h1>
        </AnimatedBlock>
        <AnimatedBlock delay={0.6} direction="up" className="mt-8 ml-[350px]">
          <p className="font-sans text-2xl text-retro-dim uppercase tracking-widest">
            Zero-shot перенос стиля
          </p>
        </AnimatedBlock>
      </div>

      {/* Bottom Metadata */}
      <div className="absolute bottom-12 left-12 right-12 z-20 flex justify-between items-end text-retro-dim font-sans text-xs font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.6} className="max-w-xs">
          <p>Style Consistency<br/>Visual Transfer</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.7} className="text-center">
          <p>Moscow, 105120<br/>UX/UI 2026</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.8} className="text-right max-w-xs">
          <p>Zero-shot Transfer<br/>Native Conditioning</p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
