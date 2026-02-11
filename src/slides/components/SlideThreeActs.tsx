import React from 'react';

export const SlideThreeActs: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col p-16">
      <h2 className="text-5xl font-serif italic mb-16 text-center">Структура трех актов</h2>
      
      <div className="flex-1 grid grid-cols-3 gap-8 items-stretch">
        {/* Act 1 */}
        <div className="border-2 border-retro-text rounded-[2rem] p-8 flex flex-col relative mt-4">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-retro-text text-retro-bg px-4 font-mono text-sm rounded-full z-10">
            ACT_01
          </div>
          <h3 className="text-3xl font-bold mb-6 mt-4">Экспозиция</h3>
          <ul className="space-y-4 font-sans opacity-80 list-disc list-inside">
            <li>Знакомство с героем</li>
            <li>Мир истории</li>
            <li>Провоцирующий инцидент</li>
          </ul>
          <div className="mt-auto pt-8 text-sm font-mono text-retro-dim">
            ~25% времени
          </div>
        </div>

        {/* Act 2 */}
        <div className="border-2 border-retro-text rounded-[2rem] p-8 flex flex-col relative mt-4">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-retro-text text-retro-bg px-4 font-mono text-sm rounded-full z-10">
            ACT_02
          </div>
          <h3 className="text-3xl font-bold mb-6 mt-4">Конфронтация</h3>
          <ul className="space-y-4 font-sans opacity-80 list-disc list-inside">
            <li>Нарастание ставок</li>
            <li>Точка невозврата</li>
            <li>Ложная победа/поражение</li>
          </ul>
          <div className="mt-auto pt-8 text-sm font-mono text-retro-dim">
            ~50% времени
          </div>
        </div>

        {/* Act 3 */}
        <div className="border-2 border-retro-text rounded-[2rem] p-8 flex flex-col relative mt-4">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-retro-text text-retro-bg px-4 font-mono text-sm rounded-full z-10">
            ACT_03
          </div>
          <h3 className="text-3xl font-bold mb-6 mt-4">Развязка</h3>
          <ul className="space-y-4 font-sans opacity-80 list-disc list-inside">
            <li>Кульминация</li>
            <li>Новое равновесие</li>
            <li>Катарсис</li>
          </ul>
          <div className="mt-auto pt-8 text-sm font-mono text-retro-dim">
            ~25% времени
          </div>
        </div>
      </div>
    </div>
  );
};
