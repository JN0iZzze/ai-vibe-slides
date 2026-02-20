import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const NeuralChoiceSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center p-20">
      <AnimatedBlock delay={0.1}>
        <h1 className="font-serif text-[10rem] leading-[0.85] text-retro-text text-center">
          Когда не&nbsp;нужна<br/>Nano Banana?
        </h1>
      </AnimatedBlock>
    </div>
  );
};
