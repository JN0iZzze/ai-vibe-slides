import React from 'react';
import Grok from '@lobehub/icons/es/Grok';
import Gemini from '@lobehub/icons/es/Gemini';
import { AnimatedBlock } from '../../components/AnimatedBlock';

type Stage = {
  step: string;
  title: string;
  model: string;
  note: string;
  mediaType: 'image' | 'video';
  mediaSrc: string;
  mediaAlt: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  accent?: boolean;
};

const stages: Stage[] = [
  {
    step: '01',
    title: 'Собрать образ',
    model: 'Grok Imagine',
    note: 'Сначала задаем настроение, форму и общий вид будущей сцены.',
    mediaType: 'image',
    mediaSrc: '/flow_ex/grokImagine.jpg',
    mediaAlt: 'Первый результат Grok Imagine для воркфлоу',
    icon: Grok,
  },
  {
    step: '02',
    title: 'Уточнить картинку',
    model: 'Nano Banana',
    note: 'Потом улучшаем детали, делаем изображение чище и убедительнее.',
    mediaType: 'image',
    mediaSrc: '/flow_ex/nano_banana_2.png',
    mediaAlt: 'Результат обработки в Nano Banana',
    icon: Gemini,
    accent: true,
  },
  {
    step: '03',
    title: 'Перевести в видео',
    model: 'Grok Imagine',
    note: 'В конце превращаем готовый кадр в видео, сохраняя ту же сцену.',
    mediaType: 'video',
    mediaSrc: '/flow_ex/grokImagine_video.mp4',
    mediaAlt: 'Видео-результат Grok Imagine',
    icon: Grok,
  },
];

export const NeuralWorkflowIdeaSlide: React.FC = () => {
  return (
    <div className="h-full w-full overflow-hidden p-10">
      <div className="relative flex h-full flex-col">
        <div className="pointer-events-none absolute left-[-6rem] top-[-5rem] h-56 w-56 rounded-full bg-retro-accent/10 blur-[100px]" />
        <div className="pointer-events-none absolute bottom-[-7rem] right-[-5rem] h-64 w-64 rounded-full bg-retro-text/10 blur-[120px]" />

        <AnimatedBlock delay={0.08} className="shrink-0">
          <p className="font-mono text-sm uppercase tracking-[0.35em] text-retro-dim">
            Workflow logic
          </p>
          <h1 className="mt-4 font-serif text-7xl leading-none text-retro-text">
            Воркфлоу
          </h1>
          <p className="mt-5 max-w-5xl font-sans text-2xl leading-tight text-retro-dim">
            Качественный результат - это не одна "лучшая" нейросеть. Это оркестрация современными моделями,
            для выполнения одной комплексной задачи.
          </p>
        </AnimatedBlock>

        <div className="mt-8 grid min-h-0 flex-1 grid-cols-[1fr_auto_1fr_auto_1fr] gap-4">
          {stages.map((stage, index) => (
            <React.Fragment key={stage.step}>
              <AnimatedBlock delay={0.16 + index * 0.08} className="min-h-0">
                <div
                  className={`flex h-full min-h-0 flex-col overflow-hidden rounded-[2rem] p-6 ${
                    stage.accent
                      ? 'bg-retro-text text-retro-bg'
                      : 'border border-retro-dim/20 bg-retro-bg/35 text-retro-text'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h2 className="font-sans text-[2.8rem] leading-none tracking-tight">
                        {stage.title}
                      </h2>
                    </div>

                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.2rem] ${
                        stage.accent ? 'bg-retro-bg/12' : 'bg-retro-text/10'
                      }`}
                    >
                      <stage.icon size={28} />
                    </div>
                  </div>

                  <div
                    className={`mt-5 inline-flex w-fit rounded-[1.2rem] px-4 py-3 ${
                      stage.accent
                        ? 'bg-retro-bg/10 text-retro-bg'
                        : 'border border-retro-accent/30 bg-retro-accent/10 text-retro-text'
                    }`}
                  >
                    <p className="font-mono text-sm uppercase tracking-[0.24em]">
                      {stage.model}
                    </p>
                  </div>

                  <p
                    className={`mt-5 max-w-[26rem] font-sans text-xl leading-tight ${
                      stage.accent ? 'text-retro-bg/80' : 'text-retro-dim'
                    }`}
                  >
                    {stage.note}
                  </p>

                  <div
                    className={`mt-6 min-h-0 flex-1 overflow-hidden rounded-[1.75rem] ${
                      stage.accent ? 'bg-retro-bg/12' : 'bg-retro-bg/50'
                    }`}
                  >
                    {stage.mediaType === 'image' ? (
                      <img
                        src={stage.mediaSrc}
                        alt={stage.mediaAlt}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <video
                        src={stage.mediaSrc}
                        className="h-full w-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        aria-label={stage.mediaAlt}
                      />
                    )}
                  </div>

                </div>
              </AnimatedBlock>

              {index < stages.length - 1 ? (
                <AnimatedBlock
                  delay={0.2 + index * 0.08}
                  direction="up"
                  className="relative flex items-center justify-center"
                >
                  <span className="font-serif text-6xl italic text-retro-text bg-retro-bg px-4">
                    →
                  </span>
                </AnimatedBlock>
              ) : null}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};
