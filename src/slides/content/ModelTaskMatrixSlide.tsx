import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const columns = ['Nano Banana', 'NB Pro / 2', 'Seedream', 'Midjourney', 'Flux', 'GPT Image'];

const rows = [
  {
    task: 'Фотореализм',
    values: ['нормально', 'сильно', 'очень сильно', 'скорее настроение', 'нормально', 'сильно'],
  },
  {
    task: 'Стилизация',
    values: ['чисто', 'контролируемо', 'чисто', 'лучше всех', 'гибко', 'нормально'],
  },
  {
    task: 'Редактирование',
    values: ['базово', 'лучший выбор', 'слабее', 'не основное', 'не основное', 'хорошо'],
  },
  {
    task: 'Мультиреференсы',
    values: ['ограниченно', 'очень хорошо', 'хорошо', 'Omni Ref', 'хорошо', 'сильно'],
  },
  {
    task: 'Текст в кадре',
    values: ['нестабильно', 'хорошо', 'хорошо', 'средне', 'средне', 'очень хорошо'],
  },
  {
    task: 'Скорость',
    values: ['быстро', 'средне', 'средне', 'медленнее', 'быстро', 'средне'],
  },
];

const getCellClass = (value: string) => {
  if (value === 'лучший выбор' || value === 'очень хорошо' || value === 'очень сильно') {
    return 'bg-retro-text text-retro-bg';
  }

  if (value === 'сильно' || value === 'хорошо' || value === 'Omni Ref') {
    return 'border border-retro-accent/40 bg-retro-accent/10 text-retro-text';
  }

  return 'border border-retro-dim/20 bg-retro-bg/30 text-retro-dim';
};

export const ModelTaskMatrixSlide: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden p-16">
      <AnimatedBlock delay={0.1} className="mb-6 shrink-0">
        <h1 className="font-serif text-7xl leading-none text-retro-text">Задача → модель</h1>
        <p className="mt-4 max-w-4xl font-sans text-2xl leading-tight text-retro-dim">
          Это не рейтинг победителей, а карта соответствия между типом задачи и сильной стороной модели.
        </p>
      </AnimatedBlock>

      <div className="grid min-h-0 flex-1 grid-cols-[1.2fr_repeat(6,1fr)] gap-3">
        <AnimatedBlock delay={0.15} className="rounded-[1.5rem] border border-retro-dim/20 bg-retro-bg/30 px-4 py-4 font-mono text-sm uppercase tracking-[0.3em] text-retro-dim">
          Задача
        </AnimatedBlock>
        {columns.map((column, index) => (
          <AnimatedBlock
            key={column}
            delay={0.18 + index * 0.04}
            className="rounded-[1.5rem] border border-retro-dim/20 bg-retro-bg/30 px-3 py-4 text-center font-mono text-sm uppercase tracking-[0.22em] text-retro-dim"
          >
            {column}
          </AnimatedBlock>
        ))}

        {rows.map((row, rowIndex) => (
          <React.Fragment key={row.task}>
            <AnimatedBlock
              delay={0.25 + rowIndex * 0.06}
              className="flex items-center rounded-[1.5rem] border border-retro-dim/20 bg-retro-bg/40 px-4 py-4 font-sans text-2xl text-retro-text"
            >
              {row.task}
            </AnimatedBlock>
            {row.values.map((value, valueIndex) => (
              <AnimatedBlock
                key={`${row.task}-${columns[valueIndex]}`}
                delay={0.28 + rowIndex * 0.06 + valueIndex * 0.02}
                className={`flex items-center justify-center rounded-[1.5rem] px-3 py-4 text-center font-sans text-xl leading-tight ${getCellClass(value)}`}
              >
                {value}
              </AnimatedBlock>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
