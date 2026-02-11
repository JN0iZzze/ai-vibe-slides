import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const SimpleCenterSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20 text-center">
      <AnimatedBlock delay={0.1}>
        <h2 className="font-serif italic text-9xl mb-8">Кульминация и Развязка</h2>
      </AnimatedBlock>
      
      <div className="text-5xl leading-relaxed max-w-5xl font-sans">
        <AnimatedBlock delay={0.3}>
          <p className="mb-8">Точка наивысшего напряжения, где герой сталкивается с антагонистом.</p>
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.6}>
          <p className="text-retro-dim font-serif italic text-6xl mt-12">За которой следует новая норма.</p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
