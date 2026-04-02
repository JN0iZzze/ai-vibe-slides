import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';
import { Brain, Globe, Image, Monitor, Type, Zap } from 'lucide-react';

const comparisonData = [
  {
    icon: Zap,
    label: 'Философия',
    classic: 'Быстрая',
    pro: 'Точная',
    two: 'Бланас',
  },
  {
    icon: Monitor,
    label: 'Разрешение',
    classic: '1K',
    pro: '4K',
    two: '4K',
  },
  {
    icon: Image,
    label: 'Кол-во референсов',
    classic: '4 шт',
    pro: '14 шт',
    two: '14 шт',
  },
  {
    icon: Type,
    label: 'Текст',
    classic: 'Плохо',
    pro: 'Отлично',
    two: 'Отлично',
  },
  {
    icon: Globe,
    label: 'Поиск',
    classic: '—',
    pro: 'Да',
    two: 'Да',
  },
  {
    icon: Brain,
    label: 'Следование инструкции',
    classic: 'Базово',
    pro: 'Хорошо',
    two: 'Отлично',
  },
];

const headerCellClass =
  'rounded-[1.75rem] border border-retro-dim/20 bg-retro-dim/5 px-4 py-4 text-center';

export const NanoBananaComparisonSlide: React.FC = () => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden p-16">
      <AnimatedBlock delay={0.05} className="mb-4 flex items-end justify-between gap-6">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-retro-dim">
            Gemini Image Line
          </p>
          <h1 className="mt-2 font-serif text-6xl leading-none text-retro-text">
            Nano Banana
          </h1>
        </div>
        <p className="max-w-2xl text-right font-sans text-xl leading-tight text-retro-dim">
          У каждой версии свой баланс
          скорости, точности и возможностей
        </p>
      </AnimatedBlock>

      <AnimatedBlock delay={0.1} className="mb-4 grid grid-cols-[1.05fr_1fr_1fr_1fr] gap-3">
        <div className={`${headerCellClass} opacity-0`}>placeholder</div>
        <div className={headerCellClass}>
          <div className="font-sans text-4xl text-retro-dim">Nano Banana</div>
          <div className="mt-1 font-mono text-xs uppercase tracking-[0.3em] text-retro-dim">
            Fast / Flash
          </div>
        </div>
        <div className={headerCellClass}>
          <div className="font-sans text-4xl text-retro-text">Nano Banana Pro</div>
          <div className="mt-1 font-mono text-xs uppercase tracking-[0.3em] text-retro-dim">
            Better control
          </div>
        </div>
        <div className={headerCellClass}>
          <div className="font-sans text-4xl text-retro-text">Nano Banana 2</div>
          <div className="mt-1 font-mono text-xs uppercase tracking-[0.3em] text-retro-dim">
            Next step
          </div>
        </div>
      </AnimatedBlock>

      <div className="grid min-h-0 flex-1 grid-rows-6 gap-3">
        {comparisonData.map((item, index) => (
          <AnimatedBlock
            key={item.label}
            delay={0.15 + index * 0.06}
            className="grid grid-cols-[1.05fr_1fr_1fr_1fr] gap-3"
          >
            <div className="flex items-center gap-3 rounded-[1.75rem] border border-retro-dim/20 bg-retro-bg/40 px-4 py-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-retro-dim/10 text-retro-dim">
                <item.icon size={22} strokeWidth={1.7} />
              </div>
              <span className="font-sans text-2xl leading-tight text-retro-text">{item.label}</span>
            </div>
            <div className="flex items-center justify-center rounded-[1.75rem] border border-retro-dim/20 bg-retro-bg/30 px-3 py-3 text-center font-sans text-2xl text-retro-dim">
              {item.classic}
            </div>
            <div className="flex items-center justify-center rounded-[1.75rem] border border-retro-dim/20 bg-retro-bg/30 px-3 py-3 text-center font-sans text-2xl text-retro-text">
              {item.pro}
            </div>
            <div className="flex items-center justify-center rounded-[1.75rem] border border-retro-dim/20 bg-retro-bg/30 px-3 py-3 text-center font-sans text-2xl text-retro-text">
              {item.two}
            </div>
          </AnimatedBlock>
        ))}
      </div>
    </div>
  );
};
