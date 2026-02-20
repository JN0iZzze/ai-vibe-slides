import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const FlouxDemoSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col p-12 bg-retro-bg">
      {/* Header */}
      <AnimatedBlock delay={0.1}>
        <h1 className="font-serif text-6xl mb-8 text-retro-dim">
          Floux.pro
        </h1>
      </AnimatedBlock>

      {/* Video */}
      <AnimatedBlock delay={0.2} direction="up" className="flex-1 min-h-0">
        <div className="h-full w-full flex items-center justify-center">
          <video
            src="/flow.mp4"
            className="max-w-full max-h-full object-contain rounded-[2rem]"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </AnimatedBlock>
    </div>
  );
};
