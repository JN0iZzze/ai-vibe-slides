import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const AgenticWorkflowResult: React.FC = () => {
  return (
    <div className="h-full w-full flex p-12 gap-12 items-stretch">
      {/* Left Column: Prompt */}
      <AnimatedBlock delay={0.1} direction="left" className="w-1/4 flex flex-col justify-center shrink-0">
        <h2 className="text-2xl font-mono text-retro-dim uppercase tracking-widest mb-6">
          Промпт
        </h2>
        <blockquote className="text-3xl font-sans border-l-4 border-retro-accent pl-6 text-retro-text leading-tight">
          «Нарисуй инфографику с кратким содержанием первой части 5-го сезона Stranger Things»
        </blockquote>
      </AnimatedBlock>

      {/* Right Column: Result */}
      <AnimatedBlock delay={0.3} direction="right" className="flex-1 h-full min-w-0">
        <div className="h-full min-h-[400px] relative rounded-[2rem] overflow-hidden flex items-center justify-center">
          <img 
            src="/images/stranger.jpg" 
            alt="Stranger Things Season 5 Infographic" 
            className="w-full h-full object-contain"
          />
        </div>
      </AnimatedBlock>
    </div>
  );
};
