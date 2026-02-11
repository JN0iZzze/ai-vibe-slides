import React from 'react';
import { Clapperboard, Lightbulb, Shirt, Video } from 'lucide-react';

export const SlideMiseEnScene: React.FC = () => {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <h2 className="text-6xl font-serif italic mb-12">Мизансцена</h2>
      
      <div className="flex-1 grid grid-cols-4 grid-rows-2 gap-6">
        {/* Large Block - Acting */}
        <div className="col-span-2 row-span-2 border border-retro-text rounded-[2rem] p-8 relative overflow-hidden">
          <Clapperboard size={64} className="mb-6 opacity-80" />
          <h3 className="text-4xl font-bold mb-4">Актерская игра</h3>
          <p className="text-xl opacity-80 leading-relaxed font-sans">
            Язык тела, мимика и перемещение актеров в кадре создают динамику отношений без слов.
          </p>
          <div className="absolute bottom-4 left-8 opacity-20 text-9xl font-serif italic">01</div>
        </div>

        {/* Medium Block - Lighting */}
        <div className="col-span-2 border border-retro-text rounded-[2rem] p-6 flex items-center gap-6">
          <div className="p-4 bg-retro-text/10 rounded-full">
            <Lightbulb size={40} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Освещение</h3>
            <p className="opacity-70 font-sans text-sm">Свет и тень задают настроение и фокусируют внимание.</p>
          </div>
        </div>

        {/* Small Block - Decor */}
        <div className="col-span-1 border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between">
          <Video size={32} className="mb-4" />
          <h3 className="text-xl font-bold">Декорации</h3>
        </div>

        {/* Small Block - Costume */}
        <div className="col-span-1 bg-retro-text text-retro-bg rounded-[2rem] p-6 flex flex-col justify-between">
          <Shirt size={32} className="mb-4" />
          <h3 className="text-xl font-bold">Костюм</h3>
        </div>
      </div>
    </div>
  );
};
