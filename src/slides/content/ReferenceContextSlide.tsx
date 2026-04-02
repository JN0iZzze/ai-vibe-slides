import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const ReferenceContextSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-16 overflow-hidden">
      <AnimatedBlock delay={0.05} className="mb-8">
        <p className="font-mono text-2xl text-retro-dim tracking-widest uppercase text-center">
          Работа с референсами
        </p>
      </AnimatedBlock>

      <AnimatedBlock delay={0.1} className="text-center mb-12">
        <h1 className="font-serif text-7xl md:text-8xl text-retro-text tracking-tight">
          Image-Context-Engineering
        </h1>
      </AnimatedBlock>

      <AnimatedBlock delay={0.2} className="text-center max-w-6xl">
        <p className="font-sans text-4xl text-retro-dim leading-relaxed">
          Умение собрать{' '}
          <span className="text-retro-text font-medium">«слоеный пирог»</span>
          {' '}из base, style, object, composition и промежуточных генераций,
          чтобы у модели не осталось{' '}
          <span className="text-retro-text">пространства для дрейфа</span>
        </p>
      </AnimatedBlock>

      <AnimatedBlock delay={0.3} className="mt-12 grid grid-cols-4 gap-4">
        {['Base', 'Style', 'Object', 'Composition'].map((item) => (
          <div
            key={item}
            className="rounded-[2rem] border border-retro-dim/30 bg-retro-dim/5 px-6 py-4 text-center font-mono text-xl uppercase tracking-[0.25em] text-retro-dim"
          >
            {item}
          </div>
        ))}
      </AnimatedBlock>
    </div>
  );
};
