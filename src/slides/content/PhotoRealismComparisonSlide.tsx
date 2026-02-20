import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const PhotoRealismComparisonSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20">
      <AnimatedBlock delay={0.1}>
        <h1 className="font-serif italic text-6xl mb-4 text-center text-retro-dim">
          [TBD] Сравнение генераций: Фотореализм
        </h1>
      </AnimatedBlock>
      <AnimatedBlock delay={0.2}>
        <p className="text-2xl text-retro-dim font-sans">Заполнить позже</p>
      </AnimatedBlock>
    </div>
  );
};
