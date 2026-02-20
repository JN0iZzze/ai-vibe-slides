import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const prompt1 = 'describe composition of image, action, pose, camera angle. Do not describe woman appearance, outfit, hair color, eyes. Add to prompt: gaze in slightly right';

const prompt2 = 'Create comprehensive JSON prompt based on this image: describe composition of image, action, pose, camera angle, setting, environment, lighting and other details. Do not describe woman appearance, outfit, hair color, eyes. Return only structured JSON prompt, no additional text';

export const PhotoPromptSlide: React.FC = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-8 flex flex-row overflow-hidden relative">
      <AnimatedBlock delay={0.1} className="absolute top-8 left-8 z-10">
        <h2 className="font-sans text-lg font-bold text-retro-dim uppercase tracking-widest">
          Фото + промпт
        </h2>
      </AnimatedBlock>

      <AnimatedBlock delay={0.1} className="absolute bottom-0 left-8 z-10">
        <span className="font-sans text-7xl text-retro-dim leading-[0.25]">®©</span>
      </AnimatedBlock>

      {/* Left: Prompts — два разных промпта с заголовками */}
      <div className="w-1/3 h-full flex flex-col justify-center pr-8 pt-16 gap-12">
        <AnimatedBlock delay={0.2}>
          <h3 className="font-sans text-md font-bold text-retro-text uppercase tracking-widest mb-4">
            Промпт 1
          </h3>
          <p className="font-mono text-2xl text-retro-dim leading-[1.25]">
            {prompt1}
          </p>
        </AnimatedBlock>
        <AnimatedBlock delay={0.3}>
          <h3 className="font-sans text-md font-bold text-retro-text uppercase tracking-widest mb-4">
            Промпт 2
          </h3>
          <p className="font-mono text-2xl text-retro-dim leading-[1.25]">
            {prompt2}
          </p>
        </AnimatedBlock>
      </div>

      {/* Right: Photo — выравнивание по верху, справа */}
      <div className="flex-1 flex justify-end items-start min-h-0 h-full">
        <AnimatedBlock delay={0.4} className="max-w-6xl min-h-0 h-full flex items-start">
          <img
            src="/images/composition/ref.jpg"
            alt=""
            className="max-w-full max-h-full object-contain rounded-[2rem]"
          />
        </AnimatedBlock>
      </div>
    </div>
  );
};
