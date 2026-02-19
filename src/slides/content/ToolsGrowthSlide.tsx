import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';
import { motion } from 'framer-motion';

export const ToolsGrowthSlide: React.FC = () => {
  const years = [
    {
      year: '2023',
      count: '5-6',
      width: 40, // ~5.5/15 * 100
      tools: 'DALL-E 3, Midjourney v6, Stable Diffusion XL, Adobe Firefly, Imagen',
      highlight: false,
    },
    {
      year: '2024',
      count: '8-10',
      width: 60, // ~9/15 * 100
      tools: 'Flux.1, Stable Diffusion 3, Ideogram 2.0, Imagen 3, Leonardo.ai',
      highlight: false,
    },
    {
      year: '2025',
      count: '12-13',
      width: 83, // ~12.5/15 * 100
      tools: 'Seedream 4.5, GPT Image 1.5, Nano Banana Pro, Hunyuan Image, Qwen Image',
      highlight: false,
    },
    {
      year: '2026',
      count: '15+',
      width: 100,
      tools: 'GPT Image 1.5, Nano Banana Pro, Seedream 5.0, Midjourney v7, Flux 2, Recraft V3, Ideogram 3.0...',
      highlight: true,
    },
  ];

  return (
    <div className="h-full w-full p-16 flex flex-col justify-center items-center">
      <AnimatedBlock delay={0.1} className="w-full flex flex-col items-center">
        <h2 className="font-serif text-8xl mb-20 text-retro-text text-center">Популярные ИИ-модели</h2>
      </AnimatedBlock>

      <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
        {years.map((item, index) => (
          <AnimatedBlock key={index} delay={0.2 + index * 0.15} className="flex items-start gap-12">
            {/* Left Label: Year only — фиксированная ширина */}
            <div className="w-48 shrink-0 text-right flex flex-col justify-center">
              <span className={`font-serif text-6xl leading-none ${item.highlight ? 'text-retro-text' : 'text-retro-dim'}`}>
                {item.year}
              </span>
            </div>

            {/* Center: Bar + Tools — ограниченная ширина, не растягивается */}
            <div className="flex-1 min-w-0 max-w-4xl flex flex-col justify-center">
              {/* Bar — без бордера */}
              <div className="h-14 w-full bg-retro-dim/10 rounded-full overflow-hidden mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.width}%` }}
                  transition={{ duration: 1.2, delay: 0.5 + index * 0.15, ease: "easeOut" }}
                  className={`h-full rounded-full ${
                    item.highlight
                      ? 'bg-retro-text shadow-[0_0_30px_var(--color-retro-text)]'
                      : 'bg-retro-dim/50'
                  }`}
                />
              </div>
              {/* Tools List */}
              <p className={`font-sans text-xl pl-2 truncate max-w-[60%] ${item.highlight ? 'text-retro-text opacity-90' : 'text-retro-dim opacity-60'}`}>
                {item.tools}
              </p>
            </div>

            {/* Right: Count — фиксированная ширина */}
            <div className="w-42 shrink-0 flex justify-center py-4">
              <span className={`font-mono text-3xl font-bold ${item.highlight ? 'text-retro-text' : 'text-retro-dim'}`}>
                {item.count} шт.
              </span>
            </div>
          </AnimatedBlock>
        ))}
      </div>

      {/* Footer Note */}
      <AnimatedBlock delay={0.9} className="mt-12 border-t border-retro-dim/30 pt-6 w-full max-w-7xl mx-auto">
        <p className="font-sans text-3xl text-retro-dim opacity-70 max-w-7xl">
          За три года количество популярных нейросетей выросло с нескольких единиц до полноценной экосистемы из полутора десятков мощных инструментов.
        </p>
      </AnimatedBlock>
    </div>
  );
};
