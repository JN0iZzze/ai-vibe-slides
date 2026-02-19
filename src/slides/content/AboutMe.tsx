import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const AboutMe: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20">
      <div className="flex flex-col items-center gap-4 text-center">
        <AnimatedBlock delay={0.1}>
          <h1 className="font-serif text-7xl text-retro-dim tracking-tight">
            Евсеичев Антон
          </h1>
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.2}>
          <p className="font-serif text-7xl text-retro-text tracking-tight">
            Ex-Frontend Developer
          </p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.3}>
          <p className="font-serif text-7xl text-retro-text tracking-tight">
            Product Designer
          </p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.4}>
          <p className="font-serif text-7xl text-retro-text tracking-tight">
            Vibe Coder
          </p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.5}>
          <p className="font-serif text-7xl text-retro-text tracking-tight">
            Solopreneur
          </p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.6}>
          <p className="font-serif text-7xl text-retro-text tracking-tight">
            <span className='text-retro-accent'>Floux.pro</span> founder
          </p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
