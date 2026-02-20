import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const items = [
  { src: '/images/photorealism/flux_2_pro.png', name: 'Flux 2 Pro' },
  { src: '/images/photorealism/gpt_image_1_5.png', name: 'GPT Image 1.5' },
  { src: '/images/photorealism/seedream_v4_5.png', name: 'Seedream v4.5' },
];

export const IdentityGridSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center py-8 px-8 overflow-hidden">
      <AnimatedBlock delay={0.1} className="w-full h-full flex flex-col justify-center gap-6">
        <div className="grid grid-cols-3 gap-6 w-full">
          {items.map((item) => (
            <div key={item.name} className="flex flex-col items-center rounded-[2rem] overflow-hidden">
              <div className="aspect-2/3 w-full rounded-[2rem] overflow-hidden">
                <img
                  src={item.src}
                  alt=""
                  className="w-full h-full object-cover rounded-[2rem]"
                />
              </div>
              <div className="font-mono text-3xl text-retro-dim uppercase tracking-widest mt-6">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </AnimatedBlock>
    </div>
  );
};
