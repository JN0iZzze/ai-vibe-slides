import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const TextAsMainTool2026: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20">
      <AnimatedBlock delay={0.1}>
        <h1 className="font-serif text-[16rem] leading-[0.75] text-retro-text text-center tracking-tighter">
          ТЕКСТ
        </h1>
      </AnimatedBlock>
      <AnimatedBlock delay={0.3}>
        <div className="mt-8 text-center">
          <p className="font-sans text-5xl leading-tight text-retro-text">
            это «новый» интерфейс
          </p>
          <p className="mt-3 font-sans text-4xl leading-tight text-retro-dim">
            и один из важнейших навыков
          </p>
        </div>
      </AnimatedBlock>
    </div>
  );
};
