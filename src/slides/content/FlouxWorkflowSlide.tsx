import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const FlouxWorkflowSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col p-12 bg-retro-bg">
      {/* Header */}
      <AnimatedBlock delay={0.1}>
        <h1 className="font-serif italic text-6xl mb-8 text-retro-text">
          Floux.pro
        </h1>
      </AnimatedBlock>

      {/* Image */}
      <AnimatedBlock delay={0.2} direction="up" className="flex-1 min-h-0">
        <div className="h-full w-full flex items-center justify-center">
          <img
            src="/images/floux-extrude.png"
            alt="Floux.pro"
            className="max-w-full max-h-full object-contain rounded-[2rem]"
          />
        </div>
      </AnimatedBlock>
    </div>
  );
};
