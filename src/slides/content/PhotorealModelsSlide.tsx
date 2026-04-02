import React from 'react';
import ByteDance from '@lobehub/icons/es/ByteDance';
import OpenAI from '@lobehub/icons/es/OpenAI';
import Gemini from '@lobehub/icons/es/Gemini';
import Flux from '@lobehub/icons/es/Flux';
import { TaskModelShowcaseSlide } from '../templates/TaskModelShowcaseSlide';
import type { TaskModelShowcaseCard } from '../templates/TaskModelShowcaseSlide';

const cards = [
  {
    name: 'NB Pro / 2',
    badge: 'Основной выбор',
    note: 'Главный выбор, когда нужен убедительный фотореализм вместе с сильным процессом редактирования и возможностью последовательно доводить сцену.',
    icon: Gemini,
    image: {
      src: '/images/realism/nano_banana_2.png',
      alt: 'Пример изображения для NB Pro / 2',
      fit: 'cover' as const,
    },
    accent: true,
  },
  {
    name: 'GPT Image 1.5',
    badge: 'Альтернатива',
    note: 'Хорошо реагирует на инструктивные промпты и выдает правдоподобный повседневный реализм.',
    icon: OpenAI,
    image: {
      src: '/images/realism/gpt_image.png',
      alt: 'Пример изображения для GPT Image 1.5',
      fit: 'cover' as const,
    },
  },
  {
    name: 'Seedream 4.5',
    badge: 'Альтернатива',
    note: 'Силен в фотореализме, деталях высокого разрешения и коммерчески чистой картинке без лишней стилизации.',
    icon: ByteDance,
    image: {
      src: '/images/realism/seedream_v4_5.jpg',
      alt: 'Пример изображения для Seedream 4.5',
      fit: 'cover' as const,
    },
  },
  {
    name: 'Flux 2',
    badge: 'Универсальный запас',
    note: 'Нормальный рабочий выбор для широких производственных сценариев, где нужна одна модель на разные типы задач.',
    icon: Flux,
    image: {
      src: '/images/realism/flux_2.png',
      alt: 'Пример изображения для Flux 2',
      fit: 'cover' as const,
    },
  },
] satisfies TaskModelShowcaseCard[];

export const PhotorealModelsSlide: React.FC = () => {
  return (
    <TaskModelShowcaseSlide
      eyebrow="Ответ 3 / фотореализм"
      title="Фотореализм"
      intro="Когда задача про убедительный фотообраз, важнее натуральные материалы, свет и правдоподобие, чем выразительный авторский стиль."
      cards={cards}
    />
  );
};
