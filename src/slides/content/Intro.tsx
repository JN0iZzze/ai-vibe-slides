import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Intro: React.FC = () => {
  return (
    <div className="h-full w-full relative overflow-hidden p-12 flex flex-col justify-between">
      
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-retro-accent/5 rounded-full blur-[100px]" />
      </div>

      {/* Top Meta */}
      <div className="flex justify-between items-start z-10 w-full">
        <AnimatedBlock delay={0.1}>
          <div className="flex flex-col">
            <span className="font-mono text-xl text-retro-dim tracking-widest uppercase font-bold">BHSAD 2026</span>
            <span className="font-mono text-xs text-retro-dim/60 uppercase mt-1 tracking-wider">British Higher School of Art & Design</span>
          </div>
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.2}>
           <div className="flex items-center gap-2 font-mono text-xs text-retro-dim/60 uppercase tracking-[0.2em]">
             <span className="w-2 h-2 bg-retro-accent rounded-full animate-pulse" />
             System_Online
           </div>
        </AnimatedBlock>
      </div>

      {/* Main Title - Centered & HUGE */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none translate-y-16 p-8">
        {/* Background Image behind text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[550px] w-[30%] h-[30%] z-[-1] opacity-60">
          <img 
            src="/bg-intro.png" 
            alt="" 
            className="w-full h-full object-contain"
          />
        </div>

        <AnimatedBlock delay={0.3} className="flex flex-col items-center leading-none select-none">
        

          <h1 className="font-serif text-[11vw] leading-[0.8] text-retro-text text-center tracking-tighter">
            GENERATIVE
          </h1>
          
          <div className="flex items-center gap-4 md:gap-12 my-2">
             <h1 className="font-serif text-[12vw] leading-[0.8] text-retro-text text-center italic tracking-tighter">
               GRAPHICS
             </h1>
          </div>

          <div className="relative">
             <h1 className="font-sans font-bold text-[10vw] leading-[0.8] text-retro-text mt-2 tracking-tighter">
               2026©®
             </h1>
             {/* Russian subtitle overlay or below */}
             <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <p className="font-mono text-sm text-retro-dim/40 tracking-[1em] uppercase">
                    ГЕНЕРАТИВНАЯ ГРАФИКА
                </p>
             </div>
          </div>

        </AnimatedBlock>
      </div>

      {/* Bottom Meta */}
      <div className="flex justify-between items-end z-10 w-full">
        <AnimatedBlock delay={0.5}>
           <div className="font-mono text-[10px] md:text-xs text-retro-dim/40 max-w-[200px] leading-relaxed tracking-wider">
             // ARCHITECTURE<br/>
             // NEURAL_NETWORKS<br/>
             // VISUAL_SYNTHESIS<br/>
             // PROMPT_ENGINEERING
           </div>
        </AnimatedBlock>

        <AnimatedBlock delay={0.6}>
          <div className="flex flex-col items-end text-right">
            <span className="font-mono text-[10px] text-retro-dim/50 uppercase tracking-[0.2em] mb-2">Author</span>
            <span className="font-sans text-2xl md:text-4xl text-retro-text font-bold tracking-tight">Evseichev Anton</span>
          </div>
        </AnimatedBlock>
      </div>

    </div>
  );
};
