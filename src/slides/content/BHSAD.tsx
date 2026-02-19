import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const BHSAD: React.FC = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src="/bg/bhsad.png"
          alt=""
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/80 z-10" /> */}
      </div>

      {/* Left: заголовок и ®© как в StyleTransferLettersSlide */}
      <AnimatedBlock delay={0.2} className="absolute top-8 left-8 z-20">
        <h2 className="font-sans text-lg font-bold text-retro-dim uppercase tracking-widest">
          Перенос стиля
        </h2>
      </AnimatedBlock>
      <AnimatedBlock delay={0.2} className="absolute bottom-0 left-8 z-20">
        <span className="font-sans text-7xl text-retro-dim leading-[0.25]">®©</span>
      </AnimatedBlock>

      {/* Right: для равновесия */}
      <AnimatedBlock delay={0.2} className="absolute top-8 right-8 z-20 text-right">
        <span className="font-sans text-sm font-bold text-retro-dim uppercase tracking-widest">
          Art & Design
        </span>
      </AnimatedBlock>
      <AnimatedBlock delay={0.2} className="absolute bottom-8 right-8 z-20 text-right">
        <span className="font-sans text-sm font-bold text-retro-dim uppercase tracking-widest">
          Moscow · 2026
        </span>
      </AnimatedBlock>
    </div>
  );
};
