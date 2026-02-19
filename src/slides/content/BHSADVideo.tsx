import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const BHSADVideo: React.FC = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      {/* Background: video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/bhsad_video.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Left: заголовок и ®© как в BHSAD */}
      <AnimatedBlock delay={0.2} className="absolute top-8 left-8 z-20">
        <h2 className="font-sans text-lg font-bold text-retro-dim uppercase tracking-widest">
          BHSAD
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
          Moscow · Since 2003
        </span>
      </AnimatedBlock>
    </div>
  );
};
