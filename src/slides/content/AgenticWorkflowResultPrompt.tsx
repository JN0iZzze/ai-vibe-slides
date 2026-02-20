import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const AgenticWorkflowResultPrompt: React.FC = () => {
  return (
    <div className="h-full w-full flex p-12 gap-12 items-stretch overflow-hidden">
      {/* Left Column: Prompt */}
      <AnimatedBlock delay={0.1} direction="left" className="w-[600px] flex flex-col justify-center shrink-0">
        <h2 className="text-2xl font-mono text-retro-dim uppercase tracking-widest mb-6">
          Промпт
        </h2>
        <blockquote className="text-2xl font-sans border-l-4 border-retro-accent pl-6 text-retro-text leading-tight">
          «Сделай так, что три фигуры под угрозой расплющивания:
          <br />I — уже расплющило и придавило AI-волной
          <br />T — почти расплющило
          <br />M — нависла угроза тень
          <br />
          <br />Только последняя фигура счастлива и остается на вершине»
        </blockquote>
      </AnimatedBlock>

      {/* Right Column: Grid Layout */}
      <AnimatedBlock delay={0.3} direction="right" className="flex-1 h-full min-w-0 grid grid-rows-[1.5fr_1fr] gap-4">
        {/* Top: Large Image */}
        <div className="rounded-[2rem] overflow-hidden">
          <img src="/images/nbpro/003.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        
        {/* Bottom: Two Smaller Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-[2rem] overflow-hidden">
            <img src="/images/nbpro/001.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-[2rem] overflow-hidden">
            <img src="/images/nbpro/002.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
      </AnimatedBlock>
    </div>
  );
};
