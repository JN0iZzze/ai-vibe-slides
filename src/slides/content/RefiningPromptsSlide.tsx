import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const phrases = [
  {
    en: 'Keep character exactly the same',
    ru: 'Сохрани персонажа без изменений',
  },
  {
    en: 'Use Image 1 as the main identity reference',
    ru: 'Используй Image 1 как основной референс персонажа',
  },
  {
    en: 'Use Image 3 only for style',
    ru: 'Используй Image 3 только как стилевой референс',
  },
  {
    en: 'Do not change composition',
    ru: 'Не меняй композицию',
  },
];

export const RefiningPromptsSlide: React.FC = () => {
  return (
    <div className="h-full w-full p-16">
      <div className="flex h-full flex-col p-10">
        <AnimatedBlock delay={0.1}>
          <h1 className="mb-10 font-serif italic text-7xl text-retro-text">Уточняющие фразы</h1>
        </AnimatedBlock>

        <div className="grid flex-1 grid-cols-2 gap-6">
          {phrases.map((phrase, index) => (
            <AnimatedBlock
              key={phrase.en}
              delay={0.15 + index * 0.08}
              className="rounded-[2rem] border border-retro-dim/20 bg-retro-bg/40 p-8"
            >
              <div className="font-mono text-3xl leading-snug text-retro-text">{phrase.en}</div>
              <div className="my-6 h-px w-24 bg-retro-dim/30" />
              <div className="font-sans text-3xl leading-snug text-retro-dim">{phrase.ru}</div>
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </div>
  );
};
