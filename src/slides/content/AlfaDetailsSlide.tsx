import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const images = {
  marks: '/images/alfa/marks.png',
  products: '/images/alfa/products.png',
  outMarks: '/images/alfa/out-details-marks.jpg',
  outNoMarks: '/images/alfa/out-details-no-marks.jpg',
};

export const AlfaDetailsSlide: React.FC = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-8 flex flex-row overflow-hidden relative">
      <AnimatedBlock delay={0.1} className="absolute top-8 left-8 z-10">
        <h2 className="font-sans text-lg font-bold text-retro-dim uppercase tracking-widest">
          Добавление деталей
        </h2>
      </AnimatedBlock>

      <AnimatedBlock delay={0.1} className="absolute bottom-0 left-8 z-10">
        <span className="font-sans text-7xl text-retro-dim leading-[0.25]">®©</span>
      </AnimatedBlock>

      {/* Left: Prompt */}
      <div className="w-[400px] h-full flex flex-col justify-center pr-8 pt-16">
        <AnimatedBlock delay={0.2}>
          <p className="font-mono text-2xl text-retro-dim leading-[1.25]">
            Make nice composition based on <span className="text-retro-text font-bold">[Image 1]</span>, Add products from <span className="text-retro-text font-bold">[Image 2]</span> to exactly place instead yellow marks, The products placed behind and over the card
          </p>
        </AnimatedBlock>
      </div>

      {/* Right: Gallery — pushed to right edge, aligned to top */}
      <div className="flex-1 flex justify-end items-start min-h-0 h-full">
        <div className="grid grid-cols-[440px_1fr] gap-8 min-h-0 h-full max-w-[1360px] items-start">
        <div className="flex flex-col gap-6 min-h-0 w-full justify-start">
          <AnimatedBlock delay={0.3} className="aspect-video w-full relative flex items-start justify-center">
            <img
              src={images.marks}
              alt=""
              className="max-w-full max-h-full object-contain rounded-[2rem]"
            />
          </AnimatedBlock>
          <AnimatedBlock delay={0.4} className="aspect-video w-full relative flex items-start justify-center">
            <img
              src={images.products}
              alt=""
              className="max-w-full max-h-full object-contain rounded-[2rem]"
            />
          </AnimatedBlock>
        </div>

        {/* Right: large images stacked — no flex-1, stacked from top */}
        <div className="flex flex-col gap-6 min-h-0 w-full justify-start">
          <AnimatedBlock delay={0.5} className="relative flex items-start justify-center">
            <img
              src={images.outMarks}
              alt=""
              className="max-w-full max-h-full object-contain rounded-[2rem]"
            />
          </AnimatedBlock>
          <AnimatedBlock delay={0.6} className="relative flex items-start justify-center">
            <img
              src={images.outNoMarks}
              alt=""
              className="max-w-full max-h-full object-contain rounded-[2rem]"
            />
          </AnimatedBlock>
        </div>
        </div>
      </div>
    </div>
  );
};
