import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const models = [
  { src: '/images/nbpro/flux2.png', name: 'Flux 2' },
  { src: '/images/nbpro/gptimage1_5', name: 'GPT Image 1.5' },
  { src: '/images/nbpro/seedream4_5.jpeg', name: 'Seedream 4.5' },
];

export const AgenticWorkflowResultGrid: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center overflow-hidden px-8 py-8">
      <AnimatedBlock delay={0.1} className="flex w-full min-h-0 flex-col items-center justify-center">
        <div className="grid w-full grid-cols-3 items-center gap-6">
          {models.map((model) => (
            <div key={model.name} className="flex min-h-0 flex-col items-center justify-center">
              <div className="aspect-[3/2] w-full min-h-0 overflow-hidden rounded-[2rem]">
                <img
                  src={model.src}
                  alt=""
                  className="h-full w-full rounded-[2rem] object-cover"
                />
              </div>
              <div className="mt-6 font-mono text-3xl uppercase tracking-widest text-retro-dim">
                {model.name}
              </div>
            </div>
          ))}
        </div>
      </AnimatedBlock>
    </div>
  );
};
