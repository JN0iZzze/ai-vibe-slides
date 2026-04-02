import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const items = [
  { src: '/images/compare_styled/flux_2_pro.png', name: 'Flux 2 Pro' },
  { src: '/images/compare_styled/gpt_image_1_5.png', name: 'GPT Image 1.5' },
  { src: '/images/compare_styled/midjourney.png', name: 'Midjourney' },
  { src: '/images/compare_styled/nano_banana_flash.png', name: 'Nano Banana Flash' },
  { src: '/images/compare_styled/nano_banana_pro.png', name: 'Nano Banana Pro' },
  { src: '/images/compare_styled/seedream_v4_5.png', name: 'Seedream v4.5' },
];

export const GenComparisonSlide: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden p-16">
      <AnimatedBlock delay={0.1} className="w-full h-full flex flex-col gap-4">
        <h1 className="font-serif text-7xl text-retro-text text-center shrink-0">Стилизованная графика</h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-6 w-full flex-1 min-h-0">
          {items.map((item) => (
            <div key={item.name} className="flex flex-col items-center rounded-[2rem] overflow-hidden min-h-0">
              <div className="flex-1 w-full rounded-[2rem] overflow-hidden relative min-h-0">
                <img
                  src={item.src}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-[2rem]"
                />
              </div>
              <div className="font-mono text-xl text-retro-dim uppercase tracking-widest mt-4 shrink-0">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </AnimatedBlock>
    </div>
  );
};
