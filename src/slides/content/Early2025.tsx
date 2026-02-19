import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Early2025 = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-12 flex flex-col justify-center items-center text-retro-text relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('/bg/bg1.png')] bg-cover bg-center" />
      
      <div className="relative z-10 max-w-4xl w-full text-center">
        <AnimatedBlock direction="down">
          <h2 className="text-xl font-mono text-retro-dim mb-4 uppercase tracking-widest">Заглушка</h2>
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.1} direction="up">
          <h1 className="text-6xl md:text-8xl font-serif mb-12">
            Здесь будет про<br/>Начало 2025
          </h1>
        </AnimatedBlock>

        <AnimatedBlock delay={0.2} className="text-2xl font-sans text-retro-text/60">
          (Midjourney v6, Krea, Flux.1)
        </AnimatedBlock>
      </div>
    </div>
  );
};
