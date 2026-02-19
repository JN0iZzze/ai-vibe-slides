import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const SeedreamCase: React.FC = () => {
  return (
    <div className="h-full w-full flex p-12 gap-12 items-stretch">
      {/* Left Column: Image placeholder */}
      <AnimatedBlock delay={0.1} direction="left" className="flex-1 h-full">
        <div className="h-full min-h-[400px] relative rounded-[2rem] overflow-hidden border-2 border-retro-dim flex items-center justify-center bg-retro-dim/5">
          <span className="font-serif italic text-2xl opacity-50 text-center px-8">
            Placeholder: Multi-step Logic / Web Search
          </span>
        </div>
      </AnimatedBlock>

      {/* Right Column: Text */}
      <div className="flex-1 flex flex-col justify-center p-8">
        <AnimatedBlock delay={0.3}>
          <h2 className="text-6xl font-serif italic mb-12 leading-tight text-retro-text">
            Seedream 5.0 — Визуальная логика
          </h2>
        </AnimatedBlock>

        <AnimatedBlock delay={0.5} direction="right">
          <div className="space-y-8 text-2xl font-sans border-l-2 border-retro-text pl-8">
            <p>
              Multi-step logic: вазы — идентификация объектов на одном фото, классификация и логическое распределение по другому. Не «нарисовать рядом», а выполнить команду по условию.
            </p>
            <p className="opacity-90">
              Web-Search Integration: поиск в реальном времени. «Концепт нового iPhone» — не старые данные из обучения, а актуальные утечки и чертежи в момент генерации.
            </p>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
