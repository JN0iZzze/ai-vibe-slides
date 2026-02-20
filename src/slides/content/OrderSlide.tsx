import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const items = [
  { src: '/images/order/001.png', name: 'Higgsfield' },
  { src: '/images/order/002.png', name: 'Floux.pro' },
];

export const OrderSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center py-8 px-8 overflow-hidden">
      <AnimatedBlock delay={0.1} className="w-full h-full flex flex-col justify-center gap-6">
        <h1 className="font-serif text-7xl text-retro-text text-center mb-4">Порядок изображений</h1>
        <div className="grid grid-cols-2 gap-6 w-full">
          {items.map((item) => (
            <div key={item.name} className="flex flex-col items-center rounded-[2rem] overflow-hidden">
              <div className="w-full flex-1 min-h-0 flex items-center justify-center rounded-[2rem] overflow-hidden">
                <img
                  src={item.src}
                  alt=""
                  className="max-w-full max-h-full object-contain rounded-[2rem]"
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
