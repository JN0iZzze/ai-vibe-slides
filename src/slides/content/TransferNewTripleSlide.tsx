import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const images = {
  logo: '/images/transfer_new/logo.png',
  ref: '/images/transfer_new/ref.jpg',
  out: '/images/transfer_new/out.png',
};

const prompt = `Use logo and each letter from Image 1 as separated 3d Object

Recombine letters to create a composition in style of Image 2

Apply textures from Image 2`;

export const TransferNewTripleSlide: React.FC = () => {
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

      <div className="w-[400px] h-full flex flex-col justify-center pr-8 pt-16">
        <AnimatedBlock delay={0.2}>
          <p className="font-mono text-3xl text-retro-dim leading-[1.25] whitespace-pre-line">
            {prompt}
          </p>
        </AnimatedBlock>
      </div>

      <div className="flex-1 min-h-0 min-w-0 flex justify-end">
        <div className="grid grid-cols-[380px_1fr] gap-6 min-h-0 h-full w-full max-w-6xl items-start">
          <div className="flex flex-col gap-6 min-h-0 w-full min-w-0 justify-start">
            <AnimatedBlock
              delay={0.3}
              className="rounded-[2rem] overflow-hidden relative flex w-full min-w-0 justify-center"
            >
              <img
                src={images.logo}
                alt=""
                className="w-full h-auto object-contain rounded-[2rem]"
              />
            </AnimatedBlock>
            <AnimatedBlock
              delay={0.35}
              className="rounded-[2rem] overflow-hidden relative flex w-full min-w-0 justify-center"
            >
              <img
                src={images.ref}
                alt=""
                className="w-full h-auto object-contain rounded-[2rem]"
              />
            </AnimatedBlock>
          </div>

          <AnimatedBlock
            delay={0.5}
            className="rounded-[2rem] overflow-hidden min-h-0 h-full min-w-0 w-full relative flex items-center justify-center"
          >
            <img
              src={images.out}
              alt=""
              className="w-full h-auto max-h-full object-contain rounded-[2rem]"
            />
          </AnimatedBlock>
        </div>
      </div>
    </div>
  );
};
