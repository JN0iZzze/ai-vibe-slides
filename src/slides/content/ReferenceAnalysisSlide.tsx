import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const ReferenceAnalysisSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex px-16 py-12 items-center justify-center">
      <div className="flex gap-16 items-center justify-center h-full max-w-full">
        <AnimatedBlock delay={0.1} direction="left" className="h-full flex items-center">
          <img
            src="/images/face/001.jpg"
            alt=""
            className="max-h-full w-auto object-contain rounded-[2rem]"
          />
        </AnimatedBlock>

        <AnimatedBlock delay={0.2} direction="right" className="h-full flex items-center">
          <img
            src="/images/face/002.jpg"
            alt=""
            className="max-h-full w-auto object-contain rounded-[2rem]"
          />
        </AnimatedBlock>
      </div>
    </div>
  );
};
