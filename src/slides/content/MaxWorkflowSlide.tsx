import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const images = {
  ref: '/images/max-style/ref.png',
  ref2: '/images/max-style/ref2.png',
  out: '/images/max-style/out.png',
};

const avatarSrc = '/images/max-tg.jpg';

export const MaxWorkflowSlide: React.FC = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-8 flex flex-row overflow-hidden relative">
      <AnimatedBlock delay={0.1} className="absolute top-8 left-8 z-10 flex flex-col gap-4">
        <h2 className="font-sans text-lg font-bold text-retro-dim uppercase tracking-widest">
          Воркфлоу Макса Кукушкина
        </h2>
        <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center shrink-0">
          <img
            src={avatarSrc}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </AnimatedBlock>

      <AnimatedBlock delay={0.1} className="absolute bottom-0 left-8 z-10">
        <span className="font-sans text-7xl text-retro-dim leading-[0.25]">®©</span>
      </AnimatedBlock>

      {/* Left: Prompt */}
      <div className="w-[400px] h-full flex flex-col justify-center pr-8 pt-16">
        <AnimatedBlock delay={0.2}>
          <p className="font-mono text-2xl text-retro-dim leading-[1.25]">
            Make this letters &quot;БВШД&quot; <span className="text-retro-text font-bold">[Image 1]</span> in 3D composition style from <span className="text-retro-text font-bold">[Image 2]</span>, keep colors from <span className="text-retro-text font-bold">[Image 2]</span>
          </p>
        </AnimatedBlock>
      </div>

      {/* Right: Gallery */}
      <div className="flex-1 grid grid-cols-[380px_1fr] gap-6 min-h-0 h-full max-w-6xl items-start">
        <div className="flex flex-col gap-6 min-h-0 w-full justify-start">
          <AnimatedBlock delay={0.3} className="rounded-[2rem] overflow-hidden aspect-square w-full relative flex items-center justify-center">
            <img
              src={images.ref}
              alt=""
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </AnimatedBlock>
          <AnimatedBlock delay={0.4} className="rounded-[2rem] overflow-hidden aspect-square w-full relative flex items-center justify-center">
            <img
              src={images.ref2}
              alt=""
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </AnimatedBlock>
        </div>

        {/* Right: large square out image */}
        <AnimatedBlock delay={0.5} className="rounded-[2rem] overflow-hidden aspect-square h-full relative flex items-center justify-center">
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
