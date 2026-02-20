import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const GradientWorkflowSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col p-12 bg-retro-bg">
      <AnimatedBlock delay={0.1}>
        <h1 className="font-serif italic text-6xl mb-8 text-retro-text">
          Gradient
        </h1>
      </AnimatedBlock>

      <AnimatedBlock delay={0.2} direction="up" className="flex-1 min-h-0">
        <div className="h-full w-full flex items-center justify-center">
          <img
            src="/images/workflow/gradient.png"
            alt="Gradient workflow"
            className="max-w-full max-h-full object-contain rounded-[2rem]"
          />
        </div>
      </AnimatedBlock>
    </div>
  );
};
