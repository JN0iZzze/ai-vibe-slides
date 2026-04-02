import React from 'react';
import Gemini from '@lobehub/icons/es/Gemini';
import ByteDance from '@lobehub/icons/es/ByteDance';
import Flux from '@lobehub/icons/es/Flux';
import Grok from '@lobehub/icons/es/Grok';
import { TaskModelShowcaseSlide } from '../templates/TaskModelShowcaseSlide';
import type { TaskModelShowcaseCard } from '../templates/TaskModelShowcaseSlide';

const cards = [
  {
    name: 'Nano Banana Pro (2)',
    badge: 'Основной выбор',
    note: 'Уверенно держит стилизованную графику, настроение и последовательные правки без развала композиции.',
    icon: Gemini,
    image: {
      src: '/images/editing/input.png',
      alt: 'Пример изображения для Nano Banana Pro (2)',
      fit: 'cover' as const,
    },
    accent: true,
  },
  {
    name: 'Seedream 4.5',
    badge: 'Сильная альтернатива',
    note: 'Дает чистую коммерческую картинку и уверенную стилизацию, когда нужен polished результат.',
    icon: ByteDance,
    image: {
      src: '/images/compare_styled/seedream_v4_5.png',
      alt: 'Пример изображения для Seedream 4.5',
      fit: 'cover' as const,
    },
  },
  {
    name: 'Flux 2',
    badge: 'Гибкий выбор',
    note: 'Подходит для арта, персонажей и production-сценариев, где важна универсальность.',
    icon: Flux,
    image: {
      src: '/images/compare_styled/flux_2_pro.png',
      alt: 'Пример изображения для Flux 2',
      fit: 'cover' as const,
    },
  },
  {
    name: 'Grok Imagine',
    badge: 'Быстрые вариации',
    note: 'Полезен, когда нужно быстро перебрать несколько стилистических направлений и тональностей.',
    icon: Grok,
    image: {
      src: '/images/alt/g1.jpg',
      alt: 'Пример изображения для Grok Imagine',
      fit: 'cover' as const,
    },
  },
] satisfies TaskModelShowcaseCard[];

export const IllustrationModelsSlide: React.FC = () => {
  return (
    <TaskModelShowcaseSlide
      eyebrow="Ответ 2 / стилизованная графика"
      title="Иллюстрации"
      intro="Если задача про выразительный визуальный язык, здесь важнее эстетика, настроение и устойчивый стиль, а не общая универсальность."
      cards={cards}
    />
  );
};
