import React from 'react';
import Gemini from '@lobehub/icons/es/Gemini';
import OpenAI from '@lobehub/icons/es/OpenAI';
import Flux from '@lobehub/icons/es/Flux';
import { TaskModelShowcaseSlide } from '../templates/TaskModelShowcaseSlide';
import type { TaskModelShowcaseCard } from '../templates/TaskModelShowcaseSlide';

const cards = [
  {
    name: 'Nano Banana Pro / 2',
    badge: 'Основной выбор',
    note: 'Лучше всего держит сцену и последовательные локальные правки без пересборки всего кадра.',
    icon: Gemini,
    accent: true,
  },
  {
    name: 'GPT Image 1.5',
    badge: 'Альтернатива',
    note: 'Хорошо понимает инструктивные edit-промпты и удобен для быстрых рабочих правок.',
    icon: OpenAI,
  },
  {
    name: 'Flux 2',
    badge: 'Production-вариант',
    note: 'Подходит, когда редактирование встроено в более широкий production-пайплайн.',
    icon: Flux,
  },
] satisfies TaskModelShowcaseCard[];

export const EditingModelsSlide: React.FC = () => {
  return (
    <TaskModelShowcaseSlide
      eyebrow="Ответ 1 / редактирование"
      title="Редактирование"
      intro=""
      cards={cards}
    />
  );
};
