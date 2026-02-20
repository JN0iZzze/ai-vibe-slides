import React from 'react';
import Gemini from '@lobehub/icons/es/Gemini';
import OpenAI from '@lobehub/icons/es/OpenAI';
import Flux from '@lobehub/icons/es/Flux';
import Grok from '@lobehub/icons/es/Grok';
import ByteDance from '@lobehub/icons/es/ByteDance';
import Midjourney from '@lobehub/icons/es/Midjourney';
import { Clapperboard, Palette, Workflow } from 'lucide-react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const BigFour: React.FC = () => {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-8xl font-serif italic mb-8">2026</h2>
      </AnimatedBlock>
      
      <div className="flex-1 grid grid-cols-4 grid-rows-3 gap-4">
        {/* 1. Nano Banana Pro — 1x2 (Vertical) */}
        <AnimatedBlock delay={0.2} className="h-full col-span-1 row-span-2">
          <div className="bg-retro-text text-retro-bg rounded-[2rem] p-6 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-10 translate-y-1/4 translate-x-1/4">
              <Gemini size={200} />
            </div>
            <div className="p-4 bg-retro-bg/20 rounded-full w-fit mb-2 z-10">
              <Gemini size={48} className="opacity-80" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-4 text-retro-bg leading-none">Nano Banana Pro</h3>
              <p className="opacity-80 font-sans text-2xl leading-tight">Главный геймчейнджер</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 2. Higgsfield — 1x2 (Vertical) */}
        <AnimatedBlock delay={0.3} className="h-full col-span-1 row-span-2">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-1/4 translate-x-1/4">
              <Clapperboard size={200} className="text-retro-text" />
            </div>
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-2 z-10">
              <Clapperboard size={40} className="text-retro-text" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-2 text-retro-text leading-none">Higgsfield</h3>
              <p className="opacity-70 font-sans text-2xl leading-tight">Cinema Studio 2.0, AI Influencer, Vibe Motion</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 3. Waavy.ai — 1x2 (Vertical) */}
        <AnimatedBlock delay={0.4} className="h-full col-span-1 row-span-2">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-1/4 translate-x-1/4">
              <Workflow size={200} className="text-retro-text" />
            </div>
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-2 z-10">
              <Workflow size={40} className="text-retro-text" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-2 text-retro-text leading-none">Weavy.ai</h3>
              <p className="opacity-70 font-sans text-2xl leading-tight">Нодовая платформа (теперь во владении Figma)</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 4. Freepik — 1x1 */}
        <AnimatedBlock delay={0.5} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-5 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm">
            <div className="p-3 bg-retro-text/10 rounded-full w-fit mb-2">
              <Palette size={32} className="text-retro-text" />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-1 text-retro-text">Freepik</h3>
              <p className="opacity-60 font-sans text-xl leading-tight">Node-based spaces</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 5. GPT Image 1.5 — 1x1 */}
        <AnimatedBlock delay={0.6} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-5 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm">
            <div className="p-3 bg-retro-text/10 rounded-full w-fit mb-2">
              <OpenAI size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-1 text-retro-text">GPT Image 1.5</h3>
              <p className="opacity-60 font-sans text-xl leading-tight">Обновленная флагманская модель</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 6. Flux 2 — 1x1 */}
        <AnimatedBlock delay={0.7} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-5 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm">
            <div className="p-3 bg-retro-text/10 rounded-full w-fit mb-2">
              <Flux size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-1 text-retro-text">Flux 2</h3>
              <p className="opacity-60 font-sans text-xl leading-tight">Старый добрый Flux с новыми возможностями</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 7. Grok Imagine — 1x1 */}
        <AnimatedBlock delay={0.8} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-5 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm">
            <div className="p-3 bg-retro-text/10 rounded-full w-fit mb-2">
              <Grok size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-1 text-retro-text">Grok Imagine</h3>
              <p className="opacity-60 font-sans text-xl leading-tight">Новый игрок</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 8. Seedream 4.5 — 1x1 */}
        <AnimatedBlock delay={0.9} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-5 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm">
            <div className="p-3 bg-retro-text/10 rounded-full w-fit mb-2">
              <ByteDance size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-1 text-retro-text">Seedream 4.5</h3>
              <p className="opacity-60 font-sans text-xl leading-tight">Типографика и 4K</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 9. Midjourney v7 — 1x1 */}
        <AnimatedBlock delay={1.0} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-5 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm">
            <div className="p-3 bg-retro-text/10 rounded-full w-fit mb-2">
              <Midjourney size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-1 text-retro-text">Midjourney v7</h3>
              <p className="opacity-60 font-sans text-xl leading-tight">Эстетика и Omni Ref</p>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
