import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const jsonSkeleton = `{
  "subject": "...",
  "composition": "...",
  "setting": "...",
  "lighting": "...",
  "style": "...",
  "camera": "..."
}`;

const useCases = [
  'Когда в сцене много деталей и важно ничего не забыть',
  'Когда нужно задать много условий одновременно',
  'Когда важно отдельно описать свет, камеру, стиль и композицию',
  'Когда этот же промпт нужно потом дорабатывать и переиспользовать',
];

export const JsonPromptingDefinitionSlide: React.FC = () => {
  return (
    <div className="h-full w-full p-12">
      <div className="grid h-full grid-cols-[1fr_0.9fr] gap-8">
        <AnimatedBlock delay={0.12} className="overflow-hidden rounded-3xl border-2 border-retro-text bg-retro-bg/50 backdrop-blur-sm">
          <div className="bg-retro-text px-6 py-3 text-retro-bg font-mono text-2xl flex items-center justify-between">
            <span>prompt.json</span>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-retro-bg opacity-50"></div>
              <div className="w-4 h-4 rounded-full bg-retro-bg opacity-50"></div>
              <div className="w-4 h-4 rounded-full bg-retro-bg opacity-50"></div>
            </div>
          </div>
          <pre className="h-full p-8 font-mono text-3xl leading-relaxed text-retro-text">{jsonSkeleton}</pre>
        </AnimatedBlock>

        <div className="flex h-full flex-col rounded-[2rem] bg-retro-dim/5 p-8">
          <div>
            <AnimatedBlock delay={0.2}>
            <h1 className="font-serif text-6xl leading-none text-retro-text">
              Что такое
              <br />
              JSON-промптинг
            </h1>
            </AnimatedBlock>
            <AnimatedBlock delay={0.3}>
              <p className="mt-6 font-sans text-3xl leading-tight text-retro-dim">
                Это не другой магический режим, а более строгая упаковка той же инструкции:
                модель получает явные поля вместо неразмеченного текста.
              </p>
            </AnimatedBlock>
          </div>

          <div className="mt-auto grid grid-cols-2 gap-4 pt-8">
            {useCases.map((useCase, index) => (
              <AnimatedBlock
                key={useCase}
                delay={0.38 + index * 0.05}
                className="flex min-h-32 items-start rounded-[1rem] border border-retro-dim/20 bg-retro-bg/40 px-5 py-4 font-sans text-2xl leading-tight text-retro-dim"
              >
                {useCase}
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
