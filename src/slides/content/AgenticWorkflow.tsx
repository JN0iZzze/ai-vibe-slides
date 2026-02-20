import React from 'react';
import { Brain, Search, Atom } from 'lucide-react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const AgenticWorkflow: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col p-12 font-sans">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-6xl font-serif italic mb-12 leading-[0.9] max-w-[80%]">
          Nano Banana Pro &mdash; как агент
        </h2>
      </AnimatedBlock>

      <div className="flex-1 flex gap-8 items-stretch min-h-0">
        {/* Step 1: Thinking Mode */}
        <AnimatedBlock delay={0.1} direction="left" className="flex-1 h-full">
          <div className="h-full bg-retro-text text-retro-bg rounded-[2rem] p-12 flex flex-col relative overflow-hidden">
            <div className="p-3 bg-retro-bg/20 rounded-full w-fit mb-8">
              <Brain size={40} />
            </div>
            <h2 className="text-6xl font-serif italic mb-4">Thinking Mode</h2>
            <p className="text-xl font-mono uppercase tracking-widest opacity-60 mb-8">Размышление</p>
            <p className="text-2xl font-medium opacity-90 leading-relaxed mt-auto">
              Анализирует промт, определяет требования к композиции
            </p>
          </div>
        </AnimatedBlock>

        {/* Center Divider 1 */}
        <div className="flex items-center justify-center w-12 shrink-0 relative">
          <AnimatedBlock delay={0.5} direction="up" className="absolute z-20">
            <span className="font-serif italic text-6xl text-retro-text bg-retro-bg px-4">→</span>
          </AnimatedBlock>
        </div>

        {/* Step 2: Search Grounding */}
        <AnimatedBlock delay={0.3} direction="up" className="flex-1 h-full">
          <div className="h-full bg-retro-bg border-2 border-retro-text text-retro-text rounded-[2rem] p-12 flex flex-col relative overflow-hidden">
            <div className="p-3 bg-retro-text/10 rounded-full w-fit mb-8">
              <Search size={40} />
            </div>
            <h2 className="text-6xl font-serif italic mb-4">Search Grounding</h2>
            <p className="text-xl font-mono uppercase tracking-widest opacity-60 mb-8">Проверка реальности</p>
            <p className="text-2xl opacity-60 mb-8">(Доступно не на всех платформах)</p>
            <p className="text-2xl font-medium opacity-90 leading-relaxed mt-auto">
              Гуглит сюжет 5-го сезона, использует реальные факты и сюжет
            </p>
          </div>
        </AnimatedBlock>

        {/* Center Divider 2 */}
        <div className="flex items-center justify-center w-12 shrink-0 relative">
          <AnimatedBlock delay={0.5} direction="up" className="absolute z-20">
            <span className="font-serif italic text-6xl text-retro-text bg-retro-bg px-4">→</span>
          </AnimatedBlock>
        </div>

        {/* Step 3: Physics-Aware Reasoning */}
        <AnimatedBlock delay={0.3} direction="right" className="flex-1 h-full">
          <div className="h-full bg-retro-text text-retro-bg rounded-[2rem] p-12 flex flex-col relative overflow-hidden">
            <div className="p-3 bg-retro-bg/20 rounded-full w-fit mb-8">
              <Atom size={40} />
            </div>
            <h2 className="text-6xl font-serif italic mb-4">Physics-Aware</h2>
            <p className="text-xl font-mono uppercase tracking-widest opacity-60 mb-8">Знание физики</p>
            <p className="text-2xl font-medium opacity-90 leading-relaxed mt-auto">
              Составляет композицию и рендерит текст, просчитывает физику и свет
            </p>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
