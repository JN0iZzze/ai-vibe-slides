import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Slide5: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col p-16">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-7xl font-serif italic mb-16 text-center">Структура трех актов</h2>
      </AnimatedBlock>
      
      <div className="flex-1 grid grid-cols-3 gap-8 items-stretch">
        {/* Act 1 */}
        <AnimatedBlock delay={0.3} direction="up" className="h-full">
          <div className="border-2 border-retro-text rounded-[2rem] p-8 flex flex-col relative mt-4 h-full">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-retro-text text-retro-bg px-6 py-2 font-mono text-2xl rounded-full z-10">
              ACT_01
            </div>
            <h3 className="text-6xl font-bold mb-6 mt-4">Экспозиция</h3>
            <ul className="space-y-4 font-sans opacity-80 list-disc list-inside text-3xl">
              <li>Знакомство с героем</li>
              <li>Мир истории</li>
              <li>Провоцирующий инцидент</li>
            </ul>
            <div className="mt-auto pt-8 text-2xl font-mono text-retro-dim">
              ~25% времени
            </div>
          </div>
        </AnimatedBlock>

        {/* Act 2 */}
        <AnimatedBlock delay={0.5} direction="up" className="h-full">
          <div className="border-2 border-retro-text rounded-[2rem] p-8 flex flex-col relative mt-4 h-full">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-retro-text text-retro-bg px-6 py-2 font-mono text-2xl rounded-full z-10">
              ACT_02
            </div>
            <h3 className="text-6xl font-bold mb-6 mt-4">Конфронтация</h3>
            <ul className="space-y-4 font-sans opacity-80 list-disc list-inside text-3xl">
              <li>Нарастание ставок</li>
              <li>Точка невозврата</li>
              <li>Ложная победа/поражение</li>
            </ul>
            <div className="mt-auto pt-8 text-2xl font-mono text-retro-dim">
              ~50% времени
            </div>
          </div>
        </AnimatedBlock>

        {/* Act 3 */}
        <AnimatedBlock delay={0.7} direction="up" className="h-full">
          <div className="border-2 border-retro-text rounded-[2rem] p-8 flex flex-col relative mt-4 h-full">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-retro-text text-retro-bg px-6 py-2 font-mono text-2xl rounded-full z-10">
              ACT_03
            </div>
            <h3 className="text-6xl font-bold mb-6 mt-4">Развязка</h3>
            <ul className="space-y-4 font-sans opacity-80 list-disc list-inside text-3xl">
              <li>Кульминация</li>
              <li>Новое равновесие</li>
              <li>Катарсис</li>
            </ul>
            <div className="mt-auto pt-8 text-2xl font-mono text-retro-dim">
              ~25% времени
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
