import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const MkdirSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center p-20">
      <AnimatedBlock delay={0.2} className="w-full max-w-6xl">
        <div className="w-full border-2 border-retro-text rounded-2xl overflow-hidden bg-retro-bg/90 backdrop-blur-sm shadow-[0_0_30px_rgba(74,246,38,0.1)]">
          {/* Window Header */}
          <div className="bg-retro-text text-retro-bg px-4 py-2 flex items-center justify-between font-mono text-xl">
            <span>bash — 80x24</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-retro-bg opacity-50"></div>
              <div className="w-3 h-3 rounded-full bg-retro-bg opacity-50"></div>
              <div className="w-3 h-3 rounded-full bg-retro-bg opacity-50"></div>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-16 font-mono text-6xl leading-relaxed min-h-[400px] flex flex-col justify-center">
            <AnimatedBlock delay={0.4}>
              <div className="flex items-center gap-4">
                <span className="text-retro-dim">$</span>
                <span className="text-retro-text">mkdir</span>
                <span className="text-retro-text opacity-70">new_project</span>
              </div>
            </AnimatedBlock>
            
            <AnimatedBlock delay={0.8}>
              <div className="flex items-center gap-4 mt-4">
                <span className="text-retro-dim">$</span>
                <span className="animate-pulse bg-retro-text w-4 h-10 inline-block align-middle"></span>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </AnimatedBlock>
    </div>
  );
};
