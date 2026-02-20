import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const images = {
  cover: '/images/alfa/cover.png',
  svg: '/images/alfa/svg.png',
  out: '/images/alfa/out.jpg',
};

export const AlfaTexturingSlide: React.FC = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-8 flex flex-row overflow-hidden relative">
      <AnimatedBlock delay={0.1} className="absolute top-8 left-8 z-10">
        <h2 className="font-sans text-lg font-bold text-retro-dim uppercase tracking-widest">
          Текстурирование карты
        </h2>
      </AnimatedBlock>

      <AnimatedBlock delay={0.1} className="absolute bottom-0 left-8 z-10">
        <span className="font-sans text-7xl text-retro-dim leading-[0.25]">®©</span>
      </AnimatedBlock>

      {/* Left: Prompt */}
      <div className="w-[400px] h-full flex flex-col justify-center pr-8 pt-16">
        <AnimatedBlock delay={0.2}>
          <p className="font-mono text-2xl text-retro-dim leading-[1.25]">
            based on <span className="text-retro-text font-bold">[Image 1]</span>, keep card&apos;s perspective exactly the same. Use <span className="text-retro-text font-bold">[Image 2]</span> as surface for card in <span className="text-retro-text font-bold">[Image 1]</span>, Black background
          </p>
        </AnimatedBlock>
      </div>

      {/* Right: Gallery */}
      <div className="flex-1 grid grid-cols-[380px_1fr] gap-6 min-h-0 h-full max-w-6xl items-start">
        <div className="flex flex-col gap-6 min-h-0 w-full justify-start">
          <AnimatedBlock delay={0.4} className="aspect-video w-full relative flex items-start justify-center">
            <img
              src={images.svg}
              alt=""
              className="max-w-full max-h-full object-contain rounded-[2rem]"
            />
          </AnimatedBlock>
          <AnimatedBlock delay={0.3} className="aspect-video w-full relative flex items-start justify-center">
            <img
              src={images.cover}
              alt=""
              className="max-w-full max-h-full object-contain rounded-[2rem]"
            />
          </AnimatedBlock>
        </div>

        {/* Right: large square out image */}
        <AnimatedBlock delay={0.5} className="aspect-square h-full relative flex items-center justify-center">
          <img
            src={images.out}
            alt=""
            className="w-full h-full object-cover rounded-[2rem]"
          />
        </AnimatedBlock>
      </div>
    </div>
  );
};
