import React from 'react';
import { Brain, Search, Atom } from 'lucide-react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const AgenticWorkflow: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col p-12 font-sans">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-6xl font-serif italic mb-12 leading-[0.9] max-w-[80%]">
          Nano Banana Pro - как агент
        </h2>
      </AnimatedBlock>

      <div className="flex-1 flex gap-8 items-stretch min-h-0">
        {/* Step 1 */}
        <AnimatedBlock delay={0.1} direction="left" className="flex-1 h-full">
          <div className="h-full bg-retro-text text-retro-bg rounded-[2rem] p-12 flex flex-col relative overflow-hidden">
            <div className="p-3 bg-retro-bg/20 rounded-full w-fit mb-8">
              <Brain size={40} />
            </div>
            <h2 className="text-6xl font-serif italic mb-4">Сначала думает</h2>
            <p className="text-xl font-mono uppercase tracking-widest opacity-60 mb-8">Разбирает задачу</p>
            <p className="text-2xl font-medium opacity-90 leading-relaxed mt-auto">
              Разбирает запрос, понимает сцену, композицию и что именно нужно получить на выходе
            </p>
          </div>
        </AnimatedBlock>

        {/* Center Divider 1 */}
        <div className="flex items-center justify-center w-12 shrink-0 relative">
          <AnimatedBlock delay={0.5} direction="up" className="absolute z-20">
            <span className="font-serif italic text-6xl text-retro-text bg-retro-bg px-4">→</span>
          </AnimatedBlock>
        </div>

        {/* Step 2 */}
        <AnimatedBlock delay={0.3} direction="up" className="flex-1 h-full">
          <div className="h-full bg-retro-bg border-2 border-retro-text text-retro-text rounded-[2rem] p-12 flex flex-col relative overflow-hidden">
            <div className="p-3 bg-retro-text/10 rounded-full w-fit mb-8">
              <Search size={40} />
            </div>
            <h2 className="text-6xl font-serif italic mb-4">Потом проверяет</h2>
            <p className="text-xl font-mono uppercase tracking-widest opacity-60 mb-8">Ищет факты и контекст</p>
            <p className="text-2xl opacity-60 mb-8">(Доступно не на всех платформах)</p>
            <p className="text-2xl font-medium opacity-90 leading-relaxed mt-auto">
              При необходимости ищет нужные подробности и опирается не только на догадку, но и на реальные данные
            </p>
          </div>
        </AnimatedBlock>

        {/* Center Divider 2 */}
        <div className="flex items-center justify-center w-12 shrink-0 relative">
          <AnimatedBlock delay={0.5} direction="up" className="absolute z-20">
            <span className="font-serif italic text-6xl text-retro-text bg-retro-bg px-4">→</span>
          </AnimatedBlock>
        </div>

        {/* Step 3 */}
        <AnimatedBlock delay={0.3} direction="right" className="flex-1 h-full">
          <div className="h-full bg-retro-text text-retro-bg rounded-[2rem] p-12 flex flex-col relative overflow-hidden">
            <div className="p-3 bg-retro-bg/20 rounded-full w-fit mb-8">
              <Atom size={40} />
            </div>
            <h2 className="text-6xl font-serif italic mb-4">И только потом рисует</h2>
            <p className="text-xl font-mono uppercase tracking-widest opacity-60 mb-8">Собирает сцену целиком</p>
            <p className="text-2xl font-medium opacity-90 leading-relaxed mt-auto">
              Собирает кадр, удерживает логику сцены, свет, материал и текст внутри изображения
            </p>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
