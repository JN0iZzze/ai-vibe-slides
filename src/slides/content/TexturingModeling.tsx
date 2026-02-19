import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const TexturingModeling: React.FC = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/images/creme.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-retro-bg z-10" />
      </div>

      {/* Top Metadata */}
      <div className="absolute top-12 left-12 right-12 z-20 flex justify-between text-retro-dim font-sans text-sm font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.2}>AI 3D</AnimatedBlock>
        <AnimatedBlock delay={0.3} className="flex gap-12">
          <span>Моделинг</span>
          <span>Материалы<br/>Генерация</span>
        </AnimatedBlock>
        <AnimatedBlock delay={0.4} className="text-right">
          Нейросети
        </AnimatedBlock>
      </div>

      {/* Center — main title */}
      <div className="relative z-30 flex items-center justify-center translate-y-[220px]">
        <AnimatedBlock delay={0.5} direction="up">
          <h1 className="font-serif text-[10rem] leading-[0.9] text-pink-400 tracking-tight text-center">
            Текстурирование<br />и моделинг
          </h1>
        </AnimatedBlock>
      </div>

      {/* Bottom Metadata */}
      <div className="absolute bottom-12 left-12 right-12 z-20 flex justify-between items-end text-retro-dim font-sans text-xs font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.6} className="max-w-xs">
          <p>Промпты<br/>Параметры</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.7} className="text-center">
          <div className="h-px w-32 bg-retro-dim mx-auto mb-4" />
          <p>Текстуры и геометрия</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.8} className="text-right max-w-xs">
          <p>Диффузия<br/>Текст</p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
