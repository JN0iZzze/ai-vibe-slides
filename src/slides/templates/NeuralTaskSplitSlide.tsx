import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const NeuralTaskSplitSlide: React.FC = () => {
  return (
    <div className="h-full w-full p-10 flex flex-col gap-6 overflow-hidden">
      {/* Верхняя часть: 2 колонки */}
      <div className="flex-1 min-h-0 grid grid-cols-12 gap-6">
        {/* Текст */}
        <div className="col-span-5 flex flex-col justify-center">
          <AnimatedBlock delay={0.1}>
            <div className="w-16 h-1 bg-retro-text mb-6" />
            <h2 className="text-8xl font-serif text-retro-text mb-6 leading-[0.9]">Analysis Title</h2>
          </AnimatedBlock>
          <AnimatedBlock delay={0.2}>
            <p className="text-3xl font-sans text-retro-dim leading-relaxed">
              This layout is perfect for explaining complex concepts with a visual example on the side.
            </p>
          </AnimatedBlock>
        </div>

        {/* Картинка */}
        <AnimatedBlock delay={0.3} className="col-span-7 h-full min-h-0">
          <div className="h-full w-full rounded-[2rem] overflow-hidden border border-retro-dim relative">
             <div className="absolute inset-0 bg-retro-dim/10 flex items-center justify-center">
               <span className="font-serif italic text-5xl opacity-50">Example Image</span>
             </div>
             {/* Декоративная рамка */}
             <div className="absolute inset-4 border border-retro-bg/20 rounded-[1.5rem]" />
          </div>
        </AnimatedBlock>
      </div>

      {/* Нижняя часть: Горизонтальная полоса — Leader | Alt1 | Alt2 в один ряд */}
      <div className="h-64 shrink-0">
        <AnimatedBlock delay={0.4} className="h-full flex gap-4">
          <div className="flex-1 min-w-0 bg-retro-text text-retro-bg rounded-[2rem] p-5 flex flex-col justify-center relative overflow-hidden">
            <span className="text-xl font-bold uppercase tracking-widest opacity-60 mb-2 block">Лидер</span>
            <h3 className="text-4xl font-bold leading-none">Leader Tool</h3>
            <p className="text-2xl font-sans opacity-80 mt-2">Best in class</p>
          </div>
          <div className="flex-1 min-w-0 border border-retro-dim rounded-[2rem] p-5 flex flex-col justify-center">
            <span className="text-xl font-bold uppercase tracking-widest text-retro-dim mb-2 opacity-50">Альтернатива 1</span>
            <h4 className="text-4xl font-bold text-retro-text/90">Alt Tool 1</h4>
            <p className="text-xl font-sans text-retro-dim opacity-70 mt-1">Good alternative</p>
          </div>
          <div className="flex-1 min-w-0 border border-retro-dim rounded-[2rem] p-5 flex flex-col justify-center">
            <span className="text-xl font-bold uppercase tracking-widest text-retro-dim mb-2 opacity-50">Альтернатива 2</span>
            <h4 className="text-4xl font-bold text-retro-text/90">Alt Tool 2</h4>
            <p className="text-xl font-sans text-retro-dim opacity-70 mt-1">Another option</p>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
