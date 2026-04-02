import React from 'react';
import Gemini from '@lobehub/icons/es/Gemini';
import ByteDance from '@lobehub/icons/es/ByteDance';
import Flux from '@lobehub/icons/es/Flux';
import Grok from '@lobehub/icons/es/Grok';
import Midjourney from '@lobehub/icons/es/Midjourney';
import OpenAI from '@lobehub/icons/es/OpenAI';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const cards = [
  {
    title: 'Nano Banana Pro / 2',
    note: 'Редактирование, последовательные правки и точное удержание сцены.',
    icon: Gemini,
    accent: true,
  },
  {
    title: 'Seedream 4.5',
    note: 'Типографика, высокое разрешение и коммерческая чистота картинки.',
    icon: ByteDance,
  },
  {
    title: 'Midjourney v7(v8)',
    note: 'Стилизация, эстетика и сильная работа с Omni Ref.',
    icon: Midjourney,
  },
  {
    title: 'GPT Image 1.5',
    note: 'Текст в кадре, инструктивность и повседневные рабочие задачи.',
    icon: OpenAI,
  },
  {
    title: 'Flux 2',
    note: 'Гибкий универсальный выбор для арта, персонажей и production-задач.',
    icon: Flux,
  },
  {
    title: 'Grok Imagine',
    note: 'Быстрые вариации, сильная стилизация и свежая альтернатива Midjourney.',
    icon: Grok,
  },
];

export const AttentionModels2026Slide: React.FC = () => {
  return (
    <div className="h-full w-full overflow-hidden p-10">
      <div className="flex h-full flex-col">
        <AnimatedBlock delay={0.1} className="mb-8">
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-retro-dim">
            2026 / Рабочий стек
          </p>
          <h1 className="mt-4 max-w-5xl font-serif text-7xl leading-none text-retro-text">
             Что актуально сейчас
          </h1>
          <p className="mt-5 max-w-7xl font-sans text-2xl leading-tight text-retro-dim">
            Не рейтинг победителей, но краткая карта моделей, которые уже
            полезны в ежедневной работе.
          </p>
        </AnimatedBlock>

        <div className="grid flex-1 grid-cols-3 grid-rows-2 gap-5">
          {cards.map((card, index) => (
            <AnimatedBlock
              key={card.title}
              delay={0.18 + index * 0.05}
              className={`relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-6 ${
                card.accent
                  ? 'bg-retro-text text-retro-bg'
                  : 'border border-retro-dim/20 bg-retro-bg/35 text-retro-text'
              }`}
            >
              <div
                className={`absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10 ${
                  card.accent ? 'text-retro-bg' : 'text-retro-text'
                }`}
              >
                <card.icon size={160} />
              </div>

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-[1.25rem] ${
                  card.accent ? 'bg-retro-bg/15' : 'bg-retro-text/10'
                }`}
              >
                <card.icon size={34} />
              </div>

              <div className="relative z-10 mt-10">
                <h2 className="font-sans text-4xl leading-none">{card.title}</h2>
                <p
                  className={`mt-4 font-sans text-2xl leading-tight ${
                    card.accent ? 'text-retro-bg/80' : 'text-retro-dim'
                  }`}
                >
                  {card.note}
                </p>
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </div>
  );
};
