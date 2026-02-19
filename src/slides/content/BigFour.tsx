import React from 'react';
import { Type, Layout, FlaskConical, Sparkles, Bot, Rocket } from 'lucide-react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const BigFour: React.FC = () => {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-8xl font-serif italic mb-12">Большая шестерка</h2>
      </AnimatedBlock>
      
      <div className="flex-1 grid grid-cols-4 grid-rows-3 gap-4">
        {/* 1. Nano Banana Pro — доминирующая (2x2) */}
        <AnimatedBlock delay={0.2} className="h-full col-span-2 row-span-2">
          <div className="bg-retro-text text-retro-bg rounded-[2rem] p-6 flex flex-col justify-between h-full">
            <div className="p-6 bg-retro-bg/20 rounded-full w-fit mb-4">
              <FlaskConical size={48} className="opacity-80" />
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2 text-retro-bg">Nano Banana Pro</h3>
              <p className="opacity-80 font-sans text-2xl">Инженерная точность. Нативное 4K, физика света.</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 2. GPT Image 1.5 — средняя (1x2) */}
        <AnimatedBlock delay={0.3} className="h-full col-span-1 row-span-2">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full">
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-4">
              <Bot size={32} />
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2 text-retro-text">GPT Image 1.5</h3>
              <p className="opacity-70 font-sans text-xl">Понимание сложных инструкций и контекста.</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 3. Flux 2 — маленькая (1x1) */}
        <AnimatedBlock delay={0.4} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full">
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-4">
              <Layout size={32} />
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2 text-retro-text">Flux 2</h3>
              <p className="opacity-60 text-xl font-sans">Производство (HEX). Открытые веса.</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 4. Grok Imagine — маленькая (1x1) */}
        <AnimatedBlock delay={0.5} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full">
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-4">
              <Rocket size={32} />
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2 text-retro-text">Grok Imagine</h3>
              <p className="opacity-70 font-sans text-xl">Креатив и низкая цензура</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 5. Seedream 4.5 — средняя (2x1) */}
        <AnimatedBlock delay={0.6} className="h-full col-span-2 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full">
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-4">
              <Type size={32} />
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2 text-retro-text">Seedream 4.5</h3>
              <p className="opacity-70 font-sans text-xl">Мастер типографики и рекламных постеров.</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 6. Midjourney v7 — маленькая (2x1) */}
        <AnimatedBlock delay={0.7} className="h-full col-span-2 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full">
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-4">
              <Sparkles size={32} />
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2 text-retro-text">Midjourney v7</h3>
              <p className="opacity-60 text-xl font-sans">Эстетика. Художественный вкус.</p>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
