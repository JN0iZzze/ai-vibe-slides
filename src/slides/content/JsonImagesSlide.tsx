import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const JsonImagesSlide: React.FC = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-20 flex items-center justify-center gap-12">
      <div className="flex gap-12 h-full w-full justify-center">
        <AnimatedBlock delay={0.1} className="h-full flex-1 flex items-center justify-center min-w-0 rounded-[2rem] overflow-hidden">
          <img
            src="/images/json/001.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </AnimatedBlock>
        <AnimatedBlock delay={0.3} className="h-full flex-1 flex items-center justify-center min-w-0 rounded-[2rem] overflow-hidden">
          <img
            src="/images/json/002.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.4} className="flex items-center justify-center">
          <span className="font-serif italic text-4xl text-retro-dim">VS</span>
        </AnimatedBlock>

        <AnimatedBlock delay={0.5} className="h-full flex-1 flex items-center justify-center min-w-0 rounded-[2rem] overflow-hidden">
          <img
            src="/images/composition/ref.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </AnimatedBlock>
      </div>
    </div>
  );
};
