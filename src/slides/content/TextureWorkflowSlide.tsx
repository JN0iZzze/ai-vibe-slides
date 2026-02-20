import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const images = {
  small: '/images/workflow/002.png',
  large: '/images/workflow/003.png',
};

const prompt = 'texture this shapes with acrylic holographic transparent texture';

export const TextureWorkflowSlide: React.FC = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-8 flex flex-row overflow-hidden relative">
      <AnimatedBlock delay={0.1} className="absolute top-8 left-8 z-10">
        <h2 className="font-sans text-lg font-bold text-retro-dim uppercase tracking-widest">
          Texture workflow
        </h2>
      </AnimatedBlock>

      <AnimatedBlock delay={0.1} className="absolute bottom-0 left-8 z-10">
        <span className="font-sans text-7xl text-retro-dim leading-[0.25]">®©</span>
      </AnimatedBlock>

      {/* Left: Prompt text */}
      <div className="w-[400px] h-full flex flex-col justify-center pr-8 pt-16">
        <AnimatedBlock delay={0.2}>
          <p className="font-mono text-3xl text-retro-dim leading-[1.25]">
            {prompt}
          </p>
        </AnimatedBlock>
      </div>

      {/* Right: small + large square */}
      <div className="flex-1 grid grid-cols-[380px_1fr] gap-6 min-h-0 h-full max-w-6xl items-start">
        <AnimatedBlock delay={0.3} className="rounded-[2rem] overflow-hidden relative flex items-center justify-center">
          <img
            src={images.small}
            alt=""
            className="max-w-full max-h-full object-contain rounded-[2rem]"
          />
        </AnimatedBlock>
        <AnimatedBlock delay={0.4} className="rounded-[2rem] overflow-hidden aspect-square h-full relative flex items-center justify-center">
          <img
            src={images.large}
            alt=""
            className="w-full h-full object-cover rounded-[2rem]"
          />
        </AnimatedBlock>
      </div>
    </div>
  );
};
