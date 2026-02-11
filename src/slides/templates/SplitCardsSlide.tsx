import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const SplitCardsSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20">
      <AnimatedBlock delay={0.1}>
        <h2 className="font-serif italic text-8xl mb-12">Провоцирующий инцидент</h2>
      </AnimatedBlock>
      
      <div className="grid grid-cols-2 gap-12 w-full max-w-6xl font-sans">
        <AnimatedBlock delay={0.3} direction="left" className="h-full">
          <div className="border-2 border-retro-text p-12 flex items-center justify-center rounded-[2rem] h-full">
            <span className="text-6xl font-bold">Статус-кво</span>
          </div>
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.5} direction="right" className="h-full">
          <div className="border-2 border-retro-text p-12 flex items-center justify-center bg-retro-text text-retro-bg rounded-[2rem] h-full">
            <span className="text-6xl font-bold">Срыв</span>
          </div>
        </AnimatedBlock>
      </div>

      <AnimatedBlock delay={0.7}>
        <p className="mt-12 text-4xl opacity-70">Момент, когда жизнь меняется навсегда.</p>
      </AnimatedBlock>
    </div>
  );
};
