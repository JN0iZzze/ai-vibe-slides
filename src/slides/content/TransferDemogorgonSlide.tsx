import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const TransferDemogorgonSlide: React.FC = () => {
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
          <p className="font-mono text-2xl text-retro-dim leading-[1.25]">
            Make a demogorgon <span className="text-retro-text font-bold">[Image&nbsp;1]</span>
            &nbsp;In style of <span className="text-retro-text font-bold">[Image 2]</span> figure
          </p>
        </AnimatedBlock>
      </div>

      {/* Right: Image */}
      <div className="flex-1 min-h-0 h-full flex items-center justify-center">
        <AnimatedBlock delay={0.3} className="rounded-[2rem] overflow-hidden w-full h-full flex items-center justify-center">
          <img
            src="/images/transfer.png"
            alt=""
            className="max-w-full max-h-full object-contain rounded-[2rem]"
          />
        </AnimatedBlock>
      </div>
    </div>
  );
};
