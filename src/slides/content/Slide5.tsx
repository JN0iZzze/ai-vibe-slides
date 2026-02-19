import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Slide5: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20">
      <AnimatedBlock delay={0.1}>
        <h2 className="font-serif italic text-8xl mb-12">Конец эпохи костылей</h2>
      </AnimatedBlock>
      
      <div className="grid grid-cols-2 gap-12 w-full max-w-7xl font-sans items-stretch">
        <AnimatedBlock delay={0.3} direction="left" className="h-full">
          <div className="border-2 border-retro-text p-10 rounded-[2rem] h-full flex flex-col opacity-60">
            <div className="text-4xl font-bold mb-6 border-b border-retro-text pb-4">ControlNet (2024)</div>
            <p className="text-3xl italic mb-4">"Сложно, медленно, фрагментарно"</p>
            <ul className="list-disc list-inside text-2xl space-y-2 mt-auto">
              <li>Требует настройки под каждую модель</li>
              <li>Замедляет генерацию</li>
              <li>Конфликтует с освещением</li>
            </ul>
          </div>
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.5} direction="right" className="h-full">
          <div className="border-2 border-retro-text p-10 bg-retro-text text-retro-bg rounded-[2rem] h-full flex flex-col shadow-[0_0_30px_rgba(74,246,38,0.2)]">
            <div className="text-4xl font-bold mb-6 border-b border-retro-bg pb-4">Native Conditioning</div>
            <p className="text-3xl italic mb-4">"Бесшовно, быстро, нативно"</p>
            <ul className="list-disc list-inside text-2xl space-y-2 mt-auto font-bold">
              <li>Встроено в архитектуру модели</li>
              <li>Zero-Shot перенос стиля</li>
              <li>Единый механизм внимания (Attention)</li>
            </ul>
          </div>
        </AnimatedBlock>
      </div>

      <AnimatedBlock delay={0.7}>
        <p className="mt-12 text-4xl opacity-70 text-center">Больше не нужно обучать LoRA часами. Загрузи референс и работай.</p>
      </AnimatedBlock>
    </div>
  );
};
