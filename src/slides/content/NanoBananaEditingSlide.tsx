import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const images = {
  marks: '/images/editing/inp1.png',
  out: '/images/editing/inp2.png',
};

export const NanoBananaEditingSlide: React.FC = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-8 flex flex-row overflow-hidden relative">
      <AnimatedBlock delay={0.1} className="absolute top-8 left-8 z-10">
        <h2 className="font-sans text-lg font-bold text-retro-dim uppercase tracking-widest">
          NB Pro / 2 для редактирования
        </h2>
      </AnimatedBlock>

      <AnimatedBlock delay={0.1} className="absolute bottom-0 left-8 z-10">
        <span className="font-sans text-7xl text-retro-dim leading-[0.25]">®©</span>
      </AnimatedBlock>

      <div className="w-[400px] h-full flex flex-col justify-center pr-8 pt-16">
        <AnimatedBlock delay={0.2}>
          <div className="border-l-4 border-retro-accent pl-6">
            <p className="font-mono text-2xl text-retro-dim leading-[1.25]">
              Удали вторую лишнюю ракетку из указанной области 
            </p>
          </div>
        </AnimatedBlock>
      </div>

      <div className="flex-1 min-w-0 grid grid-cols-2 grid-rows-[minmax(0,1fr)] gap-6 min-h-0 h-full">
        <AnimatedBlock delay={0.3} className="min-h-0 min-w-0 rounded-[2rem] overflow-hidden flex items-center justify-center">
          <img
            src={images.marks}
            alt=""
            className="h-full w-full min-h-0 min-w-0 object-contain object-center rounded-[2rem]"
          />
        </AnimatedBlock>

        <AnimatedBlock delay={0.45} className="min-h-0 min-w-0 rounded-[2rem] overflow-hidden flex items-center justify-center">
          <img
            src={images.out}
            alt=""
            className="h-full w-full min-h-0 min-w-0 object-contain object-center rounded-[2rem]"
          />
        </AnimatedBlock>
      </div>
    </div>
  );
};
