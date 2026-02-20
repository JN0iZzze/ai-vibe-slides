import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';
import { Zap, Monitor, Image, Type, Globe } from 'lucide-react';

const comparisonData = [
  {
    icon: Zap,
    label: 'Философия',
    left: 'Fast',
    right: 'Reasoning',
  },
  {
    icon: Monitor,
    label: 'Разрешение',
    left: '1K',
    right: '4K',
  },
  {
    icon: Image,
    label: 'Контекст',
    left: '4 img',
    right: '14 img',
  },
  {
    icon: Type,
    label: 'Текст',
    left: 'Плохо',
    right: 'Отлично',
  },
  {
    icon: Globe,
    label: 'Поиск',
    left: '—',
    right: 'Да',
  },
];

export const NanoBananaComparisonSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col p-20 overflow-hidden justify-center">
      
      {/* Headers */}
      <AnimatedBlock delay={0.1} className="grid grid-cols-3 mb-12 items-end border-b-4 border-retro-dim/20 pb-8">
        <div className="text-center opacity-0">Feature</div> {/* Spacer */}
        <div className="text-center">
          <div className="font-sans text-5xl text-retro-dim mb-2">Nano Banana</div>
          <div className="font-mono text-md text-retro-dim uppercase tracking-widest">Gemini 2.5 Flash Image</div>
        </div>
        <div className="text-center relative">
          <div className="absolute -inset-4 bg-retro-accent/5 rounded-2xl blur-xl" />
          <div className="font-sans text-5xl text-retro-text mb-2 relative">Nano Banana Pro</div>
          <div className="font-mono text-md text-retro-text uppercase tracking-widest relative">Gemini 3 Pro Image</div>
        </div>
      </AnimatedBlock>

      {/* Rows */}
      <div className="flex flex-col gap-8">
        {comparisonData.map((item, i) => (
          <AnimatedBlock 
            key={item.label} 
            delay={0.2 + i * 0.1}
            className="grid grid-cols-3 items-center py-4 border-b border-retro-dim/10 last:border-0"
          >
            {/* Label Column */}
            <div className="flex items-center gap-8">
              <div className="w-20 h-20 rounded-3xl bg-retro-dim/10 flex items-center justify-center text-retro-dim shrink-0">
                <item.icon size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-sans text-3xl text-retro-dim font-medium tracking-tight">{item.label}</span>
              </div>
            </div>

            {/* Left Value */}
            <div className="text-center font-sans text-5xl text-retro-dim opacity-60">
              {item.left}
            </div>

            {/* Right Value */}
            <div className="text-center font-sans text-5xl font-bold text-retro-text">
              {item.right}
            </div>
          </AnimatedBlock>
        ))}
      </div>

    </div>
  );
};
