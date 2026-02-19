import React from 'react';
import { AnimatedBlock } from './AnimatedBlock';
import { Star } from 'lucide-react';

export interface Tool {
  name: string;
  description?: string;
}

export interface NeuralToolsDockProps {
  leader: Tool;
  alternatives: Tool[];
}

export const NeuralToolsDock: React.FC<NeuralToolsDockProps> = ({ leader, alternatives }) => {
  return (
    <div className="grid grid-cols-12 gap-6 h-full">
      {/* Карточка Лидера (Акцентная) */}
      <AnimatedBlock delay={0.2} className="col-span-4 h-full">
        <div className="bg-retro-text text-retro-bg rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden h-full">
          <div className="absolute top-4 right-4 opacity-20">
            <Star size={64} fill="currentColor" />
          </div>
          <div>
            <span className="text-xl font-bold uppercase tracking-widest opacity-60 mb-2 block">Лидер рынка</span>
            <h3 className="text-5xl font-bold leading-none">{leader.name}</h3>
          </div>
          {leader.description && (
            <p className="text-2xl font-sans leading-tight opacity-80 mt-2">{leader.description}</p>
          )}
        </div>
      </AnimatedBlock>

      {/* Карточки Альтернатив (Контурные) */}
      <div className="col-span-8 grid grid-cols-2 gap-4 h-full">
        {alternatives.map((tool, idx) => (
          <AnimatedBlock key={idx} delay={0.3 + idx * 0.1} className="h-full">
            <div className="border border-retro-dim rounded-[1.5rem] p-6 flex flex-col justify-center relative group h-full hover:bg-retro-dim/5 transition-colors duration-300">
              <span className="text-xl font-bold uppercase tracking-widest text-retro-dim mb-2 opacity-50">Альтернатива {idx + 1}</span>
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-4xl font-bold text-retro-text/90">{tool.name}</h4>
                {tool.description && (
                   <span className="text-xl font-sans text-retro-dim max-w-[50%] text-right leading-tight opacity-70">{tool.description}</span>
                )}
              </div>
            </div>
          </AnimatedBlock>
        ))}
      </div>
    </div>
  );
};
