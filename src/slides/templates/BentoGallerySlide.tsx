import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const BentoGallerySlide: React.FC = () => {
  return (
    <div className="h-full w-full p-12 grid grid-cols-4 grid-rows-3 gap-4">
      {/* Main Large Block - Top Left (2x2) */}
      <AnimatedBlock 
        delay={0.1} 
        className="col-span-2 row-span-2 relative rounded-[2rem] overflow-hidden"
      >
        <div className="absolute inset-0 bg-retro-dim/10" />
        {/* Placeholder for Main Image */}
        <div className="w-full h-full flex items-center justify-center bg-retro-dim/5">
          <span className="font-serif italic text-4xl opacity-50">Main Image</span>
        </div>
      </AnimatedBlock>

      {/* Secondary Vertical Block - Top Right (1x2) */}
      <AnimatedBlock 
        delay={0.2} 
        className="col-span-1 row-span-2 relative rounded-[2rem] overflow-hidden"
      >
        <div className="absolute inset-0 bg-retro-dim/10" />
        {/* Placeholder for Secondary Image 1 */}
        <div className="w-full h-full flex items-center justify-center bg-retro-dim/5">
          <span className="font-serif italic text-3xl opacity-50">Image 2</span>
        </div>
      </AnimatedBlock>

      {/* Title/Text Block - Top Far Right (1x1) */}
      <AnimatedBlock 
        delay={0.3} 
        className="col-span-1 row-span-1 relative rounded-[2rem] overflow-hidden border-2 border-retro-accent flex items-center justify-center p-6 bg-retro-dim/10"
      >
        <div className="text-center">
          <h2 className="font-serif italic text-5xl mb-2">Галерея</h2>
          <p className="font-sans text-2xl opacity-70">Визуальный стиль</p>
        </div>
      </AnimatedBlock>

      {/* Small Image Block - Middle Far Right (1x1) */}
      <AnimatedBlock 
        delay={0.4} 
        className="col-span-1 row-span-1 relative rounded-[2rem] overflow-hidden"
      >
        <div className="absolute inset-0 bg-retro-dim/10" />
        {/* Placeholder for Small Image */}
        <div className="w-full h-full flex items-center justify-center bg-retro-dim/5">
          <span className="font-serif italic text-2xl opacity-50">Img 3</span>
        </div>
      </AnimatedBlock>

      {/* Wide Bottom Block - Bottom Left (2x1) */}
      <AnimatedBlock 
        delay={0.5} 
        className="col-span-2 row-span-1 relative rounded-[2rem] overflow-hidden"
      >
        <div className="absolute inset-0 bg-retro-dim/10" />
        {/* Placeholder for Wide Image */}
        <div className="w-full h-full flex items-center justify-center bg-retro-dim/5">
          <span className="font-serif italic text-3xl opacity-50">Wide Image 4</span>
        </div>
      </AnimatedBlock>

      {/* Bottom Right Block (2x1) */}
      <AnimatedBlock 
        delay={0.6} 
        className="col-span-2 row-span-1 relative rounded-[2rem] overflow-hidden border-2 border-retro-dim flex items-center justify-center p-8"
      >
        <p className="font-sans text-3xl text-center opacity-80">
          "Эстетика ретро-футуризма в каждой детали интерфейса."
        </p>
      </AnimatedBlock>
    </div>
  );
};
