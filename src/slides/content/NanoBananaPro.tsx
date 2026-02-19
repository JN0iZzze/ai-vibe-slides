import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const NanoBananaPro: React.FC = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/bg/banana2.png"
          alt=""
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/80 z-10" />
      </div>

      {/* Top Metadata */}
      <div className="absolute top-12 left-12 right-12 z-20 flex justify-between text-retro-dim font-sans text-sm font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.2}>Text-to-Image</AnimatedBlock>
        <AnimatedBlock delay={0.3} className="flex gap-12">
          <span>Benchmark</span>
          <span>98% Adherence<br/>2026</span>
        </AnimatedBlock>
        <AnimatedBlock delay={0.4} className="text-right">
          Pro Edition
        </AnimatedBlock>
      </div>

      {/* Central Typography */}
      <div className="relative z-30 text-center translate-y-[100px]">
        <AnimatedBlock delay={0.5} direction="up">
          <h1 className="font-serif text-[18rem] leading-[0.65] text-retro-text tracking-tighter">
            &nbsp;&nbsp;Nano Banana<br/>pro
          </h1>
        </AnimatedBlock>
      </div>

      {/* Bottom Metadata */}
      <div className="absolute bottom-12 left-12 right-12 z-20 flex justify-between items-end text-retro-dim font-sans text-xs font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.6} className="max-w-xs">
          <p>Prompt Adherence<br/>Top Tier</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.7} className="text-center">
          <div className="h-px w-32 bg-retro-dim mx-auto mb-4" />
          <p>Gen Graphics 2026</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.8} className="text-right max-w-xs">
          <p>Accuracy<br/>Consistency</p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
