import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const blocks = [
  {
    title: 'I-shaped',
    desc: 'Эксперт в одной области знаний',
  },
  {
    title: 'T-shaped',
    desc: 'Одна область специализации + навыки в различных областях',
  },
  {
    title: 'M-shaped',
    desc: 'Эксперты в различных областях',
  },
  {
    title: 'Comb-shaped',
    desc: 'Многопрофильная экспертиза + навыки в различных областях',
  },
];

export const CombShaped: React.FC = () => {
  return (
    <div className="h-full w-full relative flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/images/comb.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Bottom: 4 blocks — Swiss design, full width, small margins */}
      <div className="relative z-20 flex-1 flex flex-col justify-end mx-12 mb-12">
        <div className="grid grid-cols-4 gap-12">
          {blocks.map((block, i) => (
            <AnimatedBlock key={block.title} delay={0.2 + i * 0.1}>
              <div className="text-left">
                <div className="h-1 w-full bg-retro-text mb-6" />
                <p className="font-sans text-5xl font-bold text-retro-text tracking-tight">
                  {block.title}
                </p>
                <p className="font-sans text-3xl text-retro-dim mt-4 leading-snug">
                  {block.desc}
                </p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </div>
  );
};
