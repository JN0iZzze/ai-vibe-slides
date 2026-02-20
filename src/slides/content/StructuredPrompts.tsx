import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const StructuredPrompts: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center p-20">
      <AnimatedBlock delay={0.2} className="w-full max-w-5xl">
        <div className="w-full border-2 border-retro-text rounded-3xl overflow-hidden bg-retro-bg/50 backdrop-blur-sm">
          {/* Window Header */}
          <div className="bg-retro-text text-retro-bg px-6 py-3 flex items-center justify-between font-mono text-2xl">
            <span>structured_prompt.json</span>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-retro-bg opacity-50"></div>
              <div className="w-4 h-4 rounded-full bg-retro-bg opacity-50"></div>
              <div className="w-4 h-4 rounded-full bg-retro-bg opacity-50"></div>
            </div>
          </div>

          {/* Editor Content */}
          <div className="p-12 font-mono text-3xl leading-relaxed">
            <AnimatedBlock delay={0.4}>
              <div className="opacity-50 mb-8">// Вместо длинного текста — четкая структура</div>
            </AnimatedBlock>
            
            <AnimatedBlock delay={0.6}>
              <pre className="text-retro-text whitespace-pre-wrap break-words">
{`{
  "Subject":  "Cyberpunk Samurai",
  "Action":   "Fighting in the rain",
  "Lighting": "Neon blue and pink",
  "Style":    "Cinematic, 35mm film",
  "Mood":     "Dark, intense"
}`}
              </pre>
            </AnimatedBlock>

            <AnimatedBlock delay={0.8}>
              <div className="mt-10 pl-6 border-l-4 border-retro-dim">
                <p className="opacity-80 text-2xl text-retro-dim">
                  Модель не «угадывает» связи слов, а получает четкие инструкции для каждого аспекта изображения.
                </p>
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </AnimatedBlock>
    </div>
  );
};
