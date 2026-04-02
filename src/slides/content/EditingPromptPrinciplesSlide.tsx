import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const images = {
  input: '/images/editing/input.png',
  output: '/images/editing/output.png',
};

const prompt = 'Сделай обувь в синем цвете вместо зеленого';

export const EditingPromptPrinciplesSlide: React.FC = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-8 flex flex-row overflow-hidden relative">
      <AnimatedBlock delay={0.1} className="absolute top-8 left-8 z-10">
        <h2 className="font-sans text-lg font-bold text-retro-dim uppercase tracking-widest">
          Промпт на изменение
        </h2>
      </AnimatedBlock>

      <AnimatedBlock delay={0.1} className="absolute bottom-0 left-8 z-10">
        <span className="font-sans text-7xl text-retro-dim leading-[0.25]">®©</span>
      </AnimatedBlock>

      <div className="w-[400px] h-full flex flex-col justify-center pr-8 pt-16">
        <AnimatedBlock delay={0.2}>
          <p className="font-mono text-xl text-retro-dim leading-[1.3] mb-6">
            Промпт на <span className="text-retro-text font-bold">изменение</span>
          </p>
          <div className="border-l-4 border-retro-accent pl-6">
            <pre className="whitespace-pre-wrap font-mono text-4xl text-retro-dim leading-snug">
              {prompt}
            </pre>
          </div>
        </AnimatedBlock>
      </div>

      <div className="flex-1 min-w-0 grid grid-cols-2 grid-rows-[minmax(0,1fr)] gap-6 min-h-0 h-full">
        <AnimatedBlock delay={0.3} className="min-h-0 min-w-0 overflow-hidden flex items-center justify-center">
          <img
            src={images.input}
            alt=""
            className="h-full w-full min-h-0 min-w-0 object-contain object-center"
          />
        </AnimatedBlock>

        <AnimatedBlock delay={0.45} className="min-h-0 min-w-0 overflow-hidden flex items-center justify-center">
          <img
            src={images.output}
            alt=""
            className="h-full w-full min-h-0 min-w-0 object-contain object-center"
          />
        </AnimatedBlock>
      </div>
    </div>
  );
};
