import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const WorkflowComparison: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-row gap-8 p-16 overflow-hidden">
      {/* Left: video — 1/3 width, no distortion */}
      <AnimatedBlock delay={0.1} className="w-1/2 shrink-0 rounded-[2rem] overflow-hidden flex items-center justify-center">
        <video
          src="/images/workflow/extra-v.mp4"
          className="max-w-full max-h-full object-contain rounded-[2rem]"
          autoPlay
          loop
          muted
          playsInline
        />
      </AnimatedBlock>

      {/* Right: images stacked vertically */}
      <div className="flex-1 flex flex-col gap-6 min-h-0">
        <AnimatedBlock delay={0.2} className="flex-1 min-h-0 rounded-[2rem] overflow-hidden flex items-center justify-center">
          <img
            src="/images/workflow/extra1.png"
            alt=""
            className="max-w-full max-h-full object-contain rounded-[2rem]"
          />
        </AnimatedBlock>
        <AnimatedBlock delay={0.3} className="flex-1 min-h-0 rounded-[2rem] overflow-hidden flex items-center justify-center">
          <img
            src="/images/workflow/extra2.png"
            alt=""
            className="max-w-full max-h-full object-contain rounded-[2rem]"
          />
        </AnimatedBlock>
      </div>
    </div>
  );
};
