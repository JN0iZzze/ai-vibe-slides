import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const images = [
  '/images/alt/s1.jpg',
  '/images/alt/s2.jpg',
  '/images/alt/s3.jpg',
];

export const SeedreamGallerySlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center py-8 px-8 overflow-hidden">
      <AnimatedBlock delay={0.1} className="w-full h-full flex flex-col justify-center gap-4">
        <h1 className="font-serif text-7xl text-retro-text text-center shrink-0">Seedream</h1>
        <div className="grid grid-cols-3 gap-6 w-full flex-1 min-h-0">
          {images.map((src, i) => (
            <div key={i} className="flex flex-col items-center rounded-[2rem] overflow-hidden min-h-0 h-full">
              <div className="flex-1 w-full rounded-[2rem] overflow-hidden relative min-h-0">
                <img
                  src={src}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover rounded-[2rem]"
                />
              </div>
            </div>
          ))}
        </div>
      </AnimatedBlock>
    </div>
  );
};
