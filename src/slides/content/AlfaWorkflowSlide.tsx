import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const AlfaWorkflowSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col p-20 bg-retro-bg">
      <AnimatedBlock delay={0.1}>
        <h1 className="font-serif italic text-6xl mb-8 text-retro-text">
          Workflow
        </h1>
      </AnimatedBlock>

      <AnimatedBlock delay={0.2} direction="up" className="flex-1 min-h-0">
        <div className="h-full w-full flex items-center justify-center">
          <img
            src="/images/alfa/workflow.png"
            alt="Альфабанк workflow"
            className="max-w-full max-h-full object-contain rounded-[2rem]"
          />
        </div>
      </AnimatedBlock>
    </div>
  );
};
