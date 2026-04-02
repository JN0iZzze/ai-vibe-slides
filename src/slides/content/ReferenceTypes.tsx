import React from 'react';
import { User, Palette, LayoutTemplate, Box } from 'lucide-react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const ReferenceTypes: React.FC = () => {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-8xl font-serif italic mb-12">Роли референсов</h2>
      </AnimatedBlock>
      
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-8">
        {/* 1. Reference of identity */}
        <AnimatedBlock delay={0.2} className="h-full">
          <div className="bg-retro-text text-retro-bg rounded-[2rem] p-8 flex flex-col justify-between h-full">
            <div className="p-6 bg-retro-bg/20 rounded-full w-fit mb-4">
              <User size={48} className="opacity-80" />
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-4 text-retro-bg">Основа / Идентичность</h3>
              <p className="opacity-80 font-sans text-2xl">Главный источник персонажа, лица, одежды и всего, что нельзя потерять.</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 2. Reference of style */}
        <AnimatedBlock delay={0.3} className="h-full">
          <div className="border border-retro-text rounded-[2rem] p-8 flex flex-col justify-between h-full">
            <div className="p-6 bg-retro-text/10 rounded-full w-fit mb-4">
              <Palette size={48} />
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-4 text-retro-text">Стиль</h3>
              <p className="opacity-70 font-sans text-2xl">Цвет, фактура, эстетика, общее настроение. Обычно это мягкая инструкция, а не главный приоритет.</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 3. Reference of composition */}
        <AnimatedBlock delay={0.4} className="h-full">
          <div className="border border-retro-text rounded-[2rem] p-8 flex flex-col justify-between h-full">
            <div className="p-6 bg-retro-text/10 rounded-full w-fit mb-4">
              <LayoutTemplate size={48} />
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-4 text-retro-text">Композиция</h3>
              <p className="opacity-70 font-sans text-2xl">Поза, кадрирование, расположение объектов, перспектива и работа камеры.</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* 4. Reference of material */}
        <AnimatedBlock delay={0.5} className="h-full">
          <div className="border border-retro-text rounded-[2rem] p-8 flex flex-col justify-between h-full">
            <div className="p-6 bg-retro-text/10 rounded-full w-fit mb-4">
              <Box size={48} />
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-4 text-retro-text">Объект / Материал</h3>
              <p className="opacity-70 font-sans text-2xl">Дополнительный объект, реквизит или текстура, которые нужно встроить в итоговый кадр.</p>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
