import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';
import { ArrowRight } from 'lucide-react';

export const DiffusionVsReasoning: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col p-12">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-6xl font-serif italic mb-12 leading-[0.9] max-w-[80%]">
          От угадывания пикселей к&nbsp;планированию кадра
        </h2>
      </AnimatedBlock>

      <div className="flex-1 flex gap-8 items-stretch font-sans">
        {/* Left Column: Diffusion */}
        <AnimatedBlock delay={0.1} direction="left" className="flex-1 h-full">
          <div className="h-full bg-retro-text text-retro-bg rounded-[2rem] p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="z-10">
              <div className="flex justify-between items-start mb-8">
                 <div>
                    <h2 className="text-8xl font-serif italic mb-2">Diffusion</h2>
                    <p className="text-xl font-mono uppercase tracking-widest opacity-60">Stochastic Process</p>
                 </div>
              </div>
            </div>

            <div className="z-10 mt-auto">
              <div className="flex flex-row items-center gap-4 text-xl font-bold opacity-90 w-full max-w-4xl">
                <div className="flex-1 p-3 border-2 border-retro-bg rounded-xl text-center">Промпт</div>
                <ArrowRight className="opacity-50 flex-shrink-0" />
                <div className="flex-1 p-3 border-2 border-retro-bg rounded-xl text-center">Шум</div>
                <ArrowRight className="opacity-50 flex-shrink-0" />
                <div className="flex-1 p-3 border-2 border-retro-bg rounded-xl text-center">Пиксели</div>
              </div>
              <div className="mt-12">
                <h3 className="text-4xl font-bold mb-4">Угадывание</h3>
                <p className="text-3xl font-medium opacity-90 leading-relaxed max-w-2xl">
                  Модель не «знает», что рисует — угадывает паттерны.
                </p>
              </div>
            </div>
          </div>
        </AnimatedBlock>

        {/* Center Divider */}
        <div className="flex items-center justify-center w-24 relative">
          <AnimatedBlock delay={0.5} direction="up" className="absolute z-20">
            <span className="font-serif italic text-6xl text-retro-text bg-retro-bg px-4">→</span>
          </AnimatedBlock>
          <div className="h-full w-px bg-retro-dim absolute z-10" />
        </div>

        {/* Right Column: Reasoning */}
        <AnimatedBlock delay={0.3} direction="right" className="flex-1 h-full">
          <div className="h-full bg-retro-bg border-2 border-retro-text text-retro-text rounded-[2rem] p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="z-10">
               <div className="flex justify-between items-start mb-8">
                 <div>
                    <h2 className="text-8xl font-serif italic mb-2">Reasoning</h2>
                    <p className="text-xl font-mono uppercase tracking-widest opacity-60">Deterministic Planning</p>
                 </div>
              </div>
            </div>

            <div className="z-10 mt-auto">
              <div className="flex flex-row items-center gap-4 text-xl font-bold opacity-90 w-full max-w-4xl">
                <div className="flex-1 p-3 border-2 border-retro-text rounded-xl text-center">Промпт</div>
                <ArrowRight className="opacity-50 flex-shrink-0" />
                <div className="flex-1 p-3 border-2 border-retro-text rounded-xl text-center">Интент</div>
                <ArrowRight className="opacity-50 flex-shrink-0" />
                <div className="flex-1 p-3 border-2 border-retro-text rounded-xl text-center">План</div>
                <ArrowRight className="opacity-50 flex-shrink-0" />
                <div className="flex-1 p-3 border-2 border-retro-text rounded-xl text-center">Генерация</div>
              </div>
              <div className="mt-12">
                <h3 className="text-4xl font-bold mb-4">Планирование</h3>
                <p className="text-3xl font-medium opacity-90 leading-relaxed max-w-2xl">
                  Chain-of-Thought: сначала решает задачу «в уме», потом рисует.
                </p>
              </div>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
