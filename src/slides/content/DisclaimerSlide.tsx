import React from 'react';
import { Scale } from 'lucide-react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const DisclaimerSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center p-8 relative overflow-hidden">
      <AnimatedBlock 
        className="max-w-7xl w-full border-4 border-retro-accent/30 rounded-[3rem] p-20 bg-retro-bg/50 backdrop-blur-sm relative flex flex-col items-center text-center gap-12 shadow-[0_0_100px_rgba(34,197,94,0.05)]"
        delay={0.1}
      >
        {/* Icon */}
        <div className="relative">
            <div className="absolute inset-0 bg-retro-accent blur-3xl opacity-20 rounded-full animate-pulse" />
            <Scale className="w-32 h-32 text-retro-accent relative z-10" strokeWidth={1} />
        </div>

        {/* Title */}
        <div className="space-y-6 w-full flex flex-col items-center">
            <h1 className="font-serif text-7xl text-retro-text tracking-wider">
                DISCLAIMER
            </h1>
            <div className="h-1 w-48 bg-retro-dim/30 rounded-full" />
        </div>

        {/* Text */}
        <p className="font-sans text-3xl leading-relaxed text-retro-dim max-w-4xl font-medium">
            Материалы, используемые в презентации, могут нарушать авторские права и представлены исключительно в&nbsp;образовательных целях.
        </p>

        {/* Footer/Code decoration */}
        <div className="font-mono text-lg text-retro-dim/30 mt-8 tracking-[0.3em] uppercase">
            // EDUCATIONAL_USE_ONLY // NON_COMMERCIAL
        </div>

      </AnimatedBlock>
    </div>
  );
};
