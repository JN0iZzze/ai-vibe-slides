import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const ProWorkflow: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20 text-center">
      <AnimatedBlock delay={0.1}>
        <h2 className="font-serif italic text-9xl mb-16">Pro Workflow</h2>
      </AnimatedBlock>
      
      <div className="text-4xl leading-relaxed max-w-6xl font-sans w-full">
        <div className="grid grid-cols-4 gap-8">
          <AnimatedBlock delay={0.3} className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-retro-text flex items-center justify-center text-4xl mb-6 text-retro-text">1</div>
            <h3 className="text-3xl font-bold mb-4">SVG</h3>
          </AnimatedBlock>

          <AnimatedBlock delay={0.5} className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-retro-text flex items-center justify-center text-4xl mb-6 text-retro-text">2</div>
            <h3 className="text-3xl font-bold mb-4">3D Модель</h3>
          </AnimatedBlock>

          <AnimatedBlock delay={0.7} className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-retro-text flex items-center justify-center text-4xl mb-6 text-retro-text">3</div>
            <h3 className="text-3xl font-bold mb-4">Текстурирование</h3>
          </AnimatedBlock>

          <AnimatedBlock delay={0.9} className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-2 border-retro-text flex items-center justify-center text-4xl mb-6 text-retro-text">4</div>
            <h3 className="text-3xl font-bold mb-4">Добавление деталей</h3>
          </AnimatedBlock>
        </div>
      </div>
    </div>
  );
};
