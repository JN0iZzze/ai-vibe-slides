import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const models = [
  { src: '/images/nbpro/flux2.png', name: 'Flux 2' },
  { src: '/images/nbpro/gptimage1_5', name: 'GPT Image 1.5' },
  { src: '/images/nbpro/seedream4_5.jpeg', name: 'Seedream 4.5' },
];

export const AgenticWorkflowResultGrid: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center py-8 px-8 overflow-hidden">
      <AnimatedBlock delay={0.1} className="w-full h-full flex flex-col justify-center gap-6">
        {/* Single row grid - full width, max size */}
        <div className="grid grid-cols-3 gap-6 w-full">
          {models.map((model) => (
            <div key={model.name} className="flex flex-col items-center rounded-[2rem] overflow-hidden">
              <div className="aspect-2/3 w-full rounded-[2rem] overflow-hidden">
                <img
                  src={model.src}
                  alt=""
                  className="w-full h-full object-cover rounded-[2rem]"
                />
              </div>
              <div className="font-mono text-3xl text-retro-dim uppercase tracking-widest mt-6">
                {model.name}
              </div>
            </div>
          ))}
        </div>
      </AnimatedBlock>
    </div>
  );
};
