import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

type IconComponent = React.ComponentType<{ size?: number; className?: string }>;

export interface TaskModelShowcaseCard {
  name: string;
  note: string;
  badge: string;
  icon: IconComponent;
  image?: {
    src: string;
    alt: string;
    fit?: 'cover' | 'contain';
  };
  accent?: boolean;
}

interface TaskModelShowcaseSlideProps {
  eyebrow: string;
  title: string;
  intro: string;
  cards: TaskModelShowcaseCard[];
}

export const TaskModelShowcaseSlide: React.FC<TaskModelShowcaseSlideProps> = ({
  eyebrow,
  title,
  intro,
  cards,
}) => {
  const gridClassName =
    cards.length === 3 ? 'grid-cols-3' : 'grid-cols-4';
  const titleClassName = cards.length === 3 ? 'text-5xl' : 'text-[2.7rem]';
  const noteClassName = cards.length === 3 ? 'text-xl' : 'text-lg';
  const imageMarginClassName = cards.length === 3 ? 'mt-6' : 'mt-5';

  return (
    <div className="h-full w-full overflow-hidden p-10">
      <div className="flex h-full flex-col">
        <AnimatedBlock delay={0.08} className="shrink-0">
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-retro-dim">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-serif text-7xl leading-none text-retro-text">{title}</h1>
          <p className="mt-5 max-w-5xl font-sans text-2xl leading-tight text-retro-dim">
            {intro}
          </p>
        </AnimatedBlock>

        <div className={`mt-8 grid min-h-0 flex-1 gap-5 ${gridClassName}`}>
          {cards.map((card, index) => (
            <AnimatedBlock
              key={card.name}
              delay={0.16 + index * 0.05}
              className="h-full min-h-0"
            >
              <div
                className={`flex h-full min-h-0 flex-col overflow-hidden rounded-[2rem] p-6 ${
                  card.accent
                    ? 'bg-retro-text text-retro-bg'
                    : 'border border-retro-dim/20 bg-retro-bg/35 text-retro-text'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <p
                      className={`font-mono text-xs uppercase tracking-[0.3em] ${
                        card.accent ? 'text-retro-bg/70' : 'text-retro-dim'
                      }`}
                    >
                      {card.badge}
                    </p>
                    <h2 className={`mt-3 font-sans leading-none tracking-tight ${titleClassName}`}>
                      {card.name}
                    </h2>
                  </div>

                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.2rem] ${
                      card.accent ? 'bg-retro-bg/15' : 'bg-retro-text/10'
                    }`}
                  >
                    <card.icon size={28} />
                  </div>
                </div>

                <p
                  className={`mt-5 max-w-[26rem] font-sans leading-tight ${
                    noteClassName
                  } ${
                    card.accent ? 'text-retro-bg/80' : 'text-retro-dim'
                  }`}
                >

                </p>

                {card.image ? (
                  <div
                    className={`${imageMarginClassName} min-h-0 flex-1 overflow-hidden rounded-[1.75rem] ${
                      card.accent ? 'bg-retro-bg/12' : 'bg-retro-bg/50'
                    }`}
                  >
                    <img
                      src={card.image.src}
                      alt={card.image.alt}
                      className={`h-full w-full ${
                        card.image.fit === 'contain' ? 'object-contain' : 'object-cover'
                      }`}
                    />
                  </div>
                ) : null}
              </div>
            </AnimatedBlock>
          ))}
        </div>
      </div>
    </div>
  );
};
