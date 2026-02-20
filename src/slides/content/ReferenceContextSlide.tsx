import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const ReferenceContextSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-16 overflow-hidden">
      {/* Мелкий заголовок сверху */}
      <AnimatedBlock delay={0.05} className="mb-8">
        <p className="font-mono text-2xl text-retro-dim tracking-widest uppercase text-center">
          Работа с референсами
        </p>
      </AnimatedBlock>

      {/* Термин — самый крупный по центру */}
      <AnimatedBlock delay={0.1} className="text-center mb-12">
        <h1 className="font-serif text-7xl md:text-8xl text-retro-text tracking-tight">
          Image-Context-Engineering
        </h1>
      </AnimatedBlock>

      {/* Пояснение */}
      <AnimatedBlock delay={0.2} className="text-center max-w-5xl">
        <p className="font-sans text-4xl text-retro-dim leading-relaxed">
          Умение собрать{' '}
          <span className="text-retro-text font-medium">«слоеный пирог»</span>
          {' '}из референсов и&nbsp;промежуточных генераций, чтобы у модели не осталось{' '}
          <span className="text-retro-text">пространства для дрейфа</span>
        </p>
      </AnimatedBlock>
    </div>
  );
};
