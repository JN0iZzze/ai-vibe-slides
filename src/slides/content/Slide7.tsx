import React from 'react';
import { Clapperboard, Lightbulb, Shirt, Video } from 'lucide-react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Slide7: React.FC = () => {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-8xl font-serif italic mb-12">Мизансцена</h2>
      </AnimatedBlock>
      
      <div className="flex-1 grid grid-cols-4 grid-rows-2 gap-6">
        {/* Large Block - Acting */}
        <AnimatedBlock delay={0.3} className="col-span-2 row-span-2 h-full">
          <div className="border border-retro-text rounded-[2rem] p-8 relative overflow-hidden h-full flex flex-col">
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-6">
              <Clapperboard size={64} className="opacity-80" />
            </div>
            <h3 className="text-6xl font-bold mb-4">Актерская игра</h3>
            <p className="text-3xl opacity-80 leading-relaxed font-sans">
              Язык тела, мимика и перемещение актеров в кадре создают динамику отношений без слов.
            </p>
            <div className="absolute bottom-4 left-8 opacity-20 text-9xl font-serif italic">01</div>
          </div>
        </AnimatedBlock>

        {/* Medium Block - Lighting */}
        <AnimatedBlock delay={0.5} className="col-span-2 h-full">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full">
            <div className="p-4 bg-retro-text/10 rounded-full w-fit">
              <Lightbulb size={40} />
            </div>
            <div>
              <h3 className="text-5xl font-bold mb-2">Освещение</h3>
              <p className="opacity-70 font-sans text-2xl">Свет и тень задают настроение и фокусируют внимание.</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* Small Block - Decor */}
        <AnimatedBlock delay={0.7} className="col-span-1 h-full">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full">
            <div className="p-4 bg-retro-text/10 rounded-full w-fit">
              <Video size={32} />
            </div>
            <h3 className="text-5xl font-bold">Декорации</h3>
          </div>
        </AnimatedBlock>

        {/* Small Block - Costume */}
        <AnimatedBlock delay={0.9} className="col-span-1 h-full">
          <div className="bg-retro-text text-retro-bg rounded-[2rem] p-6 flex flex-col justify-between h-full">
            <div className="p-4 bg-retro-bg/20 rounded-full w-fit">
              <Shirt size={32} />
            </div>
            <h3 className="text-5xl font-bold">Костюм</h3>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
