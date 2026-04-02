import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const images = {
  marks: '/images/transfer_new/marks.png',
  final: '/images/transfer_new/final.png',
};

const prompt =
  'Replace object in pointed yellow ovals to another shaped abstract object in the same style';

export const TransferNewPairSlide: React.FC = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-8 flex flex-row overflow-hidden relative">
      <AnimatedBlock delay={0.1} className="absolute top-8 left-8 z-10">
        <h2 className="font-sans text-lg font-bold text-retro-dim uppercase tracking-widest">
          Перенос стиля
        </h2>
      </AnimatedBlock>

      <AnimatedBlock delay={0.1} className="absolute bottom-0 left-8 z-10">
        <span className="font-sans text-7xl text-retro-dim leading-[0.25]">®©</span>
      </AnimatedBlock>

      <div className="w-[400px] h-full flex flex-col justify-center pr-8 pt-16">
        <AnimatedBlock delay={0.2}>
          <p className="font-mono text-3xl text-retro-dim leading-[1.25]">{prompt}</p>
        </AnimatedBlock>
      </div>

      <div className="flex-1 min-h-0 min-w-0 flex justify-end">
        <div className="grid grid-cols-2 gap-6 min-h-0 h-full w-full max-w-6xl items-stretch">
          <AnimatedBlock
            delay={0.3}
            className="rounded-[2rem] overflow-hidden min-h-0 min-w-0 relative flex items-center justify-center"
          >
            <img
              src={images.marks}
              alt=""
              className="w-full h-auto max-h-full object-contain rounded-[2rem]"
            />
          </AnimatedBlock>
          <AnimatedBlock
            delay={0.4}
            className="rounded-[2rem] overflow-hidden min-h-0 min-w-0 relative flex items-center justify-center"
          >
            <img
              src={images.final}
              alt=""
              className="w-full h-auto max-h-full object-contain rounded-[2rem]"
            />
          </AnimatedBlock>
        </div>
      </div>
    </div>
  );
};
