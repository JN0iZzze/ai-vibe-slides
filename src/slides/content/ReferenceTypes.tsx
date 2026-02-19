import React from 'react';
import { User, Palette, LayoutTemplate, Box } from 'lucide-react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const ReferenceTypes: React.FC = () => {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-8xl font-serif italic mb-12">Типы референсов</h2>
      </AnimatedBlock>
      
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-8">
        {/* 1. Identity Reference */}
        <AnimatedBlock delay={0.2} className="h-full">
          <div className="bg-retro-text text-retro-bg rounded-[2rem] p-8 flex flex-col justify-between h-full">
            <div className="p-6 bg-retro-bg/20 rounded-full w-fit mb-4">
              <User size={48} className="opacity-80" />
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-4 text-retro-bg">Identity</h3>
              <p className="opacity-80 font-sans text-2xl">Персонаж / Лицо. Сохранение узнаваемости актера или маскота.</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 2. Style Reference */}
        <AnimatedBlock delay={0.3} className="h-full">
          <div className="border border-retro-text rounded-[2rem] p-8 flex flex-col justify-between h-full">
            <div className="p-6 bg-retro-text/10 rounded-full w-fit mb-4">
              <Palette size={48} />
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-4 text-retro-text">Style</h3>
              <p className="opacity-70 font-sans text-2xl">Стиль / Эстетика. Цветовая гамма, техника рисования, настроение.</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 3. Composition Reference */}
        <AnimatedBlock delay={0.4} className="h-full">
          <div className="border border-retro-text rounded-[2rem] p-8 flex flex-col justify-between h-full">
            <div className="p-6 bg-retro-text/10 rounded-full w-fit mb-4">
              <LayoutTemplate size={48} />
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-4 text-retro-text">Composition</h3>
              <p className="opacity-70 font-sans text-2xl">Композиция / Поза. Расположение объектов, ракурс камеры.</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 4. Material Reference */}
        <AnimatedBlock delay={0.5} className="h-full">
          <div className="border border-retro-text rounded-[2rem] p-8 flex flex-col justify-between h-full">
            <div className="p-6 bg-retro-text/10 rounded-full w-fit mb-4">
              <Box size={48} />
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-4 text-retro-text">Material</h3>
              <p className="opacity-70 font-sans text-2xl">Материал / Текстура. Фактура ткани, металла, кожи.</p>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
