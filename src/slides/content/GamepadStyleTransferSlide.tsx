import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const images = {
  ref: '/images/yndx/ref.png',
  gamepad: '/images/yndx/gampad.png',
};

const prompt = 'Playstation DualSense gamepad in this style, ignore round coin-shaped object';

export const GamepadStyleTransferSlide: React.FC = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-8 flex flex-row overflow-hidden relative">
      <AnimatedBlock delay={0.1} className="absolute top-8 left-8 z-10">
        <h2 className="font-sans text-lg font-bold text-retro-dim uppercase tracking-widest">
          Перенос стиля
        </h2>
      </AnimatedBlock>

      <AnimatedBlock delay={0.1} className="absolute bottom-0 left-8 z-10">
        <span className="font-sans text-7xl text-retro-dim leading-[0.25]">®©</span>
      </AnimatedBlock>

      {/* Left: Prompt */}
      <div className="w-[400px] h-full flex flex-col justify-center pr-8 pt-16">
        <AnimatedBlock delay={0.2}>
          <p className="font-mono text-3xl text-retro-dim leading-[1.25]">
            {prompt}
          </p>
        </AnimatedBlock>
      </div>

      {/* Right: Gallery */}
      <div className="flex-1 grid grid-cols-[380px_1fr] gap-6 min-h-0 h-full max-w-6xl items-start">
        {/* Left: small ref image */}
        <div className="flex flex-col gap-6 min-h-0 w-full justify-start">
          <AnimatedBlock delay={0.3} className="rounded-[2rem] overflow-hidden relative flex items-center justify-center">
            <img
              src={images.ref}
              alt=""
              className="max-w-full max-h-full object-contain rounded-[2rem]"
            />
          </AnimatedBlock>
        </div>

        {/* Right: large square gamepad image */}
        <AnimatedBlock delay={0.5} className="rounded-[2rem] overflow-hidden aspect-square h-full relative flex items-center justify-center">
          <img
            src={images.gamepad}
            alt=""
            className="w-full h-full object-cover rounded-[2rem]"
          />
        </AnimatedBlock>
      </div>
    </div>
  );
};
