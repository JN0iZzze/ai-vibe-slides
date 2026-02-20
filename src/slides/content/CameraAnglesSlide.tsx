import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const CameraAnglesSlide: React.FC = () => {
  return (
    <div className="h-full w-full relative flex px-16 py-16 items-center justify-center">
      <img
        src="/comb.png"
        alt=""
        className="absolute bottom-4 left-0 w-auto h-72 object-contain rotate-12"
      />
      <div className="flex gap-16 items-center justify-center h-full max-w-full">
        <AnimatedBlock delay={0.1} direction="left" className="h-full flex flex-col items-center justify-center gap-4">
          <span className="font-sans text-2xl font-bold text-retro-text uppercase tracking-widest">Camera Angles</span>
          <img
            src="/images/angles/001.png"
            alt=""
            className="max-h-full w-auto object-contain rounded-[2rem]"
          />
        </AnimatedBlock>

        <AnimatedBlock delay={0.2} direction="right" className="h-full flex flex-col items-center justify-center gap-4">
          <span className="font-sans text-2xl font-bold text-retro-text uppercase tracking-widest">Lighting</span>
          <img
            src="/images/angles/002.png"
            alt=""
            className="max-h-full w-auto object-contain rounded-[2rem]"
          />
        </AnimatedBlock>
      </div>
    </div>
  );
};
