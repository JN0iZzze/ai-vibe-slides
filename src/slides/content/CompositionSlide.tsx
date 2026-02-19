import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const images = {
  leftTop: '/images/composition/person.png',
  leftMiddle: '/images/composition/person1.png',
  leftBottom: '/images/composition/ref.jpg',
  right: '/images/composition/out.png',
};

export const CompositionSlide: React.FC = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-8 flex flex-row overflow-hidden relative">
      <AnimatedBlock delay={0.1} className="absolute top-8 left-8 z-10">
        <h2 className="font-sans text-lg font-bold text-retro-dim uppercase tracking-widest">
          Композиция
        </h2>
      </AnimatedBlock>

      <AnimatedBlock delay={0.1} className="absolute bottom-0 left-8 z-10">
        <span className="font-sans text-7xl text-retro-dim leading-[0.25]">®©</span>
      </AnimatedBlock>

      {/* Left: Prompt text */}
      <div className="w-1/3 h-full flex flex-col justify-center pr-8 pt-16">
        <AnimatedBlock delay={0.2}>
          <p className="font-mono text-3xl text-retro-dim leading-[1.25]">
            Make character from <span className="text-retro-text font-bold">[Image 1]</span><span className="text-retro-text font-bold">[Image 2]</span> in composition and pose from <span className="text-retro-text font-bold">[Image 3]</span>, keep exact character identity and outfit from <span className="text-retro-text font-bold">[Image 1]</span>
          </p>
        </AnimatedBlock>
      </div>

      {/* Right: Gallery */}
      <div className="flex-1 grid grid-cols-[380px_1fr] gap-6 min-h-0 h-full max-w-6xl">
        <div className="flex flex-col gap-6 min-h-0 h-full w-full justify-center">
          {/* person + person1 в один ряд */}
          <div className="flex-[0.35] min-h-0 flex flex-row gap-6">
            <AnimatedBlock delay={0.3} className="flex-1 min-h-0 rounded-[2rem] overflow-hidden relative flex items-center justify-center">
              <img
                src={images.leftTop}
                alt=""
                className="max-w-full max-h-full object-contain rounded-[2rem]"
              />
            </AnimatedBlock>
            <AnimatedBlock delay={0.35} className="flex-1 min-h-0 rounded-[2rem] overflow-hidden relative flex items-center justify-center">
              <img
                src={images.leftMiddle}
                alt=""
                className="max-w-full max-h-full object-contain rounded-[2rem]"
              />
            </AnimatedBlock>
          </div>
          <AnimatedBlock delay={0.4} className="flex-1 min-h-0 rounded-[2rem] overflow-hidden relative flex items-center justify-center">
            <img
              src={images.leftBottom}
              alt=""
              className="w-full h-full object-cover rounded-[2rem]"
            />
          </AnimatedBlock>
        </div>

        <AnimatedBlock delay={0.5} className="rounded-[2rem] overflow-hidden min-h-0 h-full w-full relative flex items-center justify-center">
          <img
            src={images.right}
            alt=""
            className="w-full h-full object-cover rounded-[2rem]"
          />
        </AnimatedBlock>
      </div>
    </div>
  );
};
