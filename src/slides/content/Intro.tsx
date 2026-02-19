import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Intro: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20">
      <AnimatedBlock delay={0.1}>
        <h1 className="font-serif italic text-8xl mb-8 text-center">Генеративная графика 2026</h1>
      </AnimatedBlock>
      <AnimatedBlock delay={0.3}>
        <p className="text-5xl opacity-80 max-w-4xl text-center font-sans">
          От промпт-лотереи к системному дизайну
        </p>
      </AnimatedBlock>
    </div>
  );
};
