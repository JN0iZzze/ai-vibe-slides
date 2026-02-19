import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const data = [
  { name: 'Nano Banana Pro', model: '(Gemini 3 Pro)', count: 'до 14' },
  { name: 'Seedream v4.5', model: '(ByteDance)', count: 'до 14' },
  { name: 'Flux 2 Max / Flex', model: '(Black Forest Labs)', count: 'до 10' },
  { name: 'GPT Image 1.5', model: '(OpenAI)', count: 'до 16' },
];

export const ReferenceCounts: React.FC = () => {
  return (
    <div className="h-full w-full p-16 flex flex-row gap-16 overflow-hidden">
      {/* Left: картинка-заглушка */}
      <AnimatedBlock delay={0.1} className="flex-1 min-w-0 rounded-[2rem] overflow-hidden border border-retro-dim flex items-center justify-center bg-retro-dim/10">
        <span className="font-serif text-4xl text-retro-dim italic opacity-50">Изображение</span>
      </AnimatedBlock>

      {/* Right: список строчками */}
      <div className="flex-1 flex flex-col justify-center gap-8 min-w-0">
        {data.map((item, i) => (
          <AnimatedBlock key={item.name} delay={0.2 + i * 0.1} className="flex items-baseline justify-between gap-8 border-b border-retro-dim/30 pb-6 last:border-0 last:pb-0">
            <div className="flex flex-col">
              <span className="font-sans text-4xl font-bold text-retro-text tracking-tight">
                {item.name}
              </span>
            </div>
            <span className="font-mono text-5xl font-bold text-retro-dim shrink-0">
              {item.count}
            </span>
          </AnimatedBlock>
        ))}
      </div>
    </div>
  );
};
