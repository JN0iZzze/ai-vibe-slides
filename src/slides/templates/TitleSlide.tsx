import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const TitleSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20">
      <AnimatedBlock delay={0.1}>
        <h1 className="font-serif italic text-9xl mb-8">Завязка</h1>
      </AnimatedBlock>
      <AnimatedBlock delay={0.3}>
        <p className="text-5xl opacity-80 max-w-2xl text-center font-sans">
          Каждая великая история начинается с вопроса, требующего ответа.
        </p>
      </AnimatedBlock>
    </div>
  );
};
