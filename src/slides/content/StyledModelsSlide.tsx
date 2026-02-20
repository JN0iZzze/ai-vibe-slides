import React from 'react';
import Flux from '@lobehub/icons/es/Flux';
import Grok from '@lobehub/icons/es/Grok';
import ByteDance from '@lobehub/icons/es/ByteDance';
import Midjourney from '@lobehub/icons/es/Midjourney';
import { Zap } from 'lucide-react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const StyledModelsSlide: React.FC = () => {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-7xl font-serif italic mb-8 text-retro-text">Стилизованная графика</h2>
      </AnimatedBlock>
      
      <div className="flex-1 grid grid-cols-4 grid-rows-2 gap-6">
        {/* 1. Midjourney — 1x2 (Vertical) */}
        <AnimatedBlock delay={0.2} className="h-full col-span-1 row-span-2">
          <div className="bg-retro-text text-retro-bg rounded-[2rem] p-6 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-10 translate-y-1/4 translate-x-1/4">
              <Midjourney size={200} />
            </div>
            <div className="p-4 bg-retro-bg/20 rounded-full w-fit mb-4 z-10">
              <Midjourney size={48} className="opacity-80" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-4 text-retro-bg leading-none">Midjourney</h3>
              <p className="opacity-80 font-sans text-2xl leading-tight">Король эстетики и стиля</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 2. Seedream — 2x1 (Horizontal) */}
        <AnimatedBlock delay={0.3} className="h-full col-span-2 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-1/4 translate-x-1/4">
              <ByteDance size={120} />
            </div>
            <div className="p-3 bg-retro-text/10 rounded-full w-fit mb-2 z-10">
              <ByteDance size={40} />
            </div>
            <div className="z-10">
              <h3 className="text-4xl font-bold mb-2 text-retro-text">Seedream</h3>
              <p className="opacity-60 font-sans text-2xl leading-tight">Стильные фото без референсов</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 3. Z-Image — 1x1 */}
        <AnimatedBlock delay={0.4} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="p-3 bg-retro-text/10 rounded-full w-fit mb-2">
              <Zap size={40} className="text-retro-text" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2 text-retro-text">Z-Image</h3>
              <p className="opacity-60 font-sans text-xl leading-tight">Быстро и дёшево</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 4. Grok Imagine — 2x1 (Horizontal) */}
        <AnimatedBlock delay={0.5} className="h-full col-span-2 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-1/4 translate-x-1/4">
              <Grok size={120} />
            </div>
            <div className="p-3 bg-retro-text/10 rounded-full w-fit mb-2 z-10">
              <Grok size={40} />
            </div>
            <div className="z-10">
              <h3 className="text-4xl font-bold mb-2 text-retro-text">Grok Imagine</h3>
              <p className="opacity-60 font-sans text-2xl leading-tight">Альтернатива MJ (6 вариаций)</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 5. Flux / Flux 2 — 1x1 */}
        <AnimatedBlock delay={0.6} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm">
            <div className="p-3 bg-retro-text/10 rounded-full w-fit mb-2">
              <Flux size={40} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2 text-retro-text">Flux / Flux 2</h3>
              <p className="opacity-60 font-sans text-xl leading-tight">Простые задачи, персонажи, арт</p>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
