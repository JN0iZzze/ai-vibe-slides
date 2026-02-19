import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const items = [
  { type: 'image' as const, src: '/images/max/001.jpg' },
  { type: 'image' as const, src: '/images/max/002.jpg' },
  { type: 'image' as const, src: '/images/max/003.jpg' },
  { type: 'video' as const, src: '/images/max/004.mp4' },
];

export const Grid4Slide: React.FC = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-16 flex items-center justify-center overflow-hidden">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full aspect-square">
        {items.map((item, i) => (
          <AnimatedBlock key={item.src} delay={0.1 + i * 0.1} className="aspect-square rounded-[2rem] overflow-hidden">
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </AnimatedBlock>
        ))}
      </div>
    </div>
  );
};
