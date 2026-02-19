import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const FigmaAlfa: React.FC = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/figma-alfa.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Top Metadata */}
      <div className="absolute top-12 left-12 right-12 z-20 flex justify-between text-retro-dim font-sans text-sm font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.2}>Figma</AnimatedBlock>
        <AnimatedBlock delay={0.3} className="flex gap-12">
          <span>Design</span>
          <span>Vector<br/>Export</span>
        </AnimatedBlock>
        <AnimatedBlock delay={0.4} className="text-right">
          SVG
        </AnimatedBlock>
      </div>

      {/* Bottom Metadata */}
      <div className="absolute bottom-12 left-12 right-12 z-20 flex justify-between items-end text-retro-dim font-sans text-xs font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.6} className="max-w-xs">
          <p>Figma<br/>Components</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.7} className="text-center">
          <div className="h-px w-32 bg-retro-dim mx-auto mb-4" />
          <p>Супер кэшбэк</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.8} className="text-right max-w-xs">
          <p>SVG<br/>Scalable</p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
