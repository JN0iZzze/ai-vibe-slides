import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const images = {
  rightTop: '/images/transfer/text.png',
  rightBottom: '/images/transfer/ref.jpg',
};

export const StyleTransferLettersSlide: React.FC = () => {
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

      {/* Left: Prompt text */}
      <div className="w-1/3 h-full flex flex-col justify-center pr-8 pt-16">
        <AnimatedBlock delay={0.2}>
          <p className="font-mono text-4xl text-retro-dim leading-[1.25]">
            Make this letters &quot;БВШД&quot; <span className="text-retro-text font-bold">[Image 1]</span> in 3D composition style from <span className="text-retro-text font-bold">[Image 2]</span>, keep colors from <span className="text-retro-text font-bold">[Image 2]</span>, ignore white text in Image 2
          </p>
        </AnimatedBlock>
      </div>

      {/* Right: two images in a row */}
      <div className="flex-1 flex flex-row gap-6 min-h-0 h-full max-w-6xl">
        <AnimatedBlock delay={0.3} className="flex-1 min-h-0 rounded-[2rem] overflow-hidden relative flex items-center justify-center">
          <img
            src={images.rightTop}
            alt=""
            className="max-w-full max-h-full object-contain rounded-[2rem]"
          />
        </AnimatedBlock>
        <AnimatedBlock delay={0.4} className="flex-1 min-h-0 rounded-[2rem] overflow-hidden relative flex items-center justify-center">
          <img
            src={images.rightBottom}
            alt=""
            className="max-w-full max-h-full object-contain rounded-[2rem]"
          />
        </AnimatedBlock>
      </div>
    </div>
  );
};
