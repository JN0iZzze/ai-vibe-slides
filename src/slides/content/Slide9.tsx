import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Slide9: React.FC = () => {
  return (
    <div className="h-full w-full p-12 grid grid-cols-4 grid-rows-3 gap-4">
      {/* Main Large Block - Top Left (2x2) */}
      <AnimatedBlock 
        delay={0.1} 
        className="col-span-2 row-span-2 relative rounded-[2rem] overflow-hidden"
      >
        <div className="absolute inset-0 bg-retro-dim/10 z-10 mix-blend-overlay" />
        <img 
          src="/images/nano_banana_pro/nano_banana_pro_app_mockup.png" 
          alt="App Mockup" 
          className="w-full h-full object-cover"
        />
      </AnimatedBlock>

      {/* Secondary Vertical Block - Top Right (1x2) */}
      <AnimatedBlock 
        delay={0.2} 
        className="col-span-1 row-span-2 relative rounded-[2rem] overflow-hidden"
      >
        <div className="absolute inset-0 bg-retro-dim/10 z-10 mix-blend-overlay" />
        <img 
          src="/images/nano_banana_pro/nano_banana_pro_5a3a725c-b130-4a84-af74-c9f85302ea25.png" 
          alt="Interface Detail" 
          className="w-full h-full object-cover"
        />
      </AnimatedBlock>

      {/* Title/Text Block - Top Far Right (1x1) */}
      <AnimatedBlock 
        delay={0.3} 
        className="col-span-1 row-span-1 relative rounded-[2rem] overflow-hidden border-2 border-retro-accent flex items-center justify-center p-6 bg-retro-dim/10"
      >
        <div className="text-center z-20">
          <h2 className="font-serif italic text-5xl mb-2">Эстетика</h2>
          <p className="font-sans text-2xl opacity-70">Nano Banana Pro</p>
        </div>
      </AnimatedBlock>

      {/* Small Image Block - Middle Far Right (1x1) */}
      <AnimatedBlock 
        delay={0.4} 
        className="col-span-1 row-span-1 relative rounded-[2rem] overflow-hidden"
      >
        <div className="absolute inset-0 bg-retro-dim/10 z-10 mix-blend-overlay" />
        <img 
          src="/images/nano_banana_pro/nano_banana_pro_7505f2ca-92de-4acb-8eca-9ad18a2d1b8a.png" 
          alt="Icon Detail" 
          className="w-full h-full object-cover"
        />
      </AnimatedBlock>

      {/* Wide Bottom Block - Bottom Left (2x1) */}
      <AnimatedBlock 
        delay={0.5} 
        className="col-span-2 row-span-1 relative rounded-[2rem] overflow-hidden"
      >
        <div className="absolute inset-0 bg-retro-dim/10 z-10 mix-blend-overlay" />
        <img 
          src="/images/nano_banana_pro/nano_banana_pro_variations_574ac9b9-4be1-4b74-999e-5d2927e45a92.png" 
          alt="Variations" 
          className="w-full h-full object-cover"
        />
      </AnimatedBlock>

      {/* Bottom Right Block (2x1) */}
      <AnimatedBlock 
        delay={0.6} 
        className="col-span-2 row-span-1 relative rounded-[2rem] overflow-hidden border-2 border-retro-dim flex items-center justify-center p-8 bg-retro-dim/5"
      >
        <p className="font-sans text-3xl text-center opacity-80">
          "Гармония формы и функции в каждом пикселе."
        </p>
      </AnimatedBlock>
    </div>
  );
};
