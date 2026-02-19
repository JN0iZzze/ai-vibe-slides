import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const MemeNeuralControl: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 bg-retro-bg">
      <AnimatedBlock delay={0.1} className="h-full flex items-center justify-center">
        <img 
          src="/mem.jpg" 
          alt="Meme" 
          className="h-full w-auto object-contain rounded-[2rem]"
        />
      </AnimatedBlock>
    </div>
  );
};
