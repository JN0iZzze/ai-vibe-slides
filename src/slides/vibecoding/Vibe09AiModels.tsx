import { AnimatedBlock } from '../../components/AnimatedBlock';
import { Bot, Sparkles, Cpu } from 'lucide-react';

export const Vibe09AiModels = () => {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-8xl font-serif italic mb-8 text-retro-text">МОДЕЛИ AI</h2>
      </AnimatedBlock>
      
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
        {/* Claude Sonnet */}
        <AnimatedBlock delay={0.2} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-1/4 translate-x-1/4">
              <Bot size={200} className="text-retro-text" />
            </div>
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-2 z-10">
              <Bot size={40} className="text-retro-text" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-2 text-retro-text leading-none">Claude Sonnet</h3>
              <p className="opacity-70 font-sans text-2xl leading-tight">Скорость и качество для повседневного кодинга</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* Claude Opus */}
        <AnimatedBlock delay={0.3} className="h-full col-span-1 row-span-1">
          <div className="bg-retro-text text-retro-bg rounded-[2rem] p-6 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-10 translate-y-1/4 translate-x-1/4">
              <Bot size={200} />
            </div>
            <div className="p-4 bg-retro-bg/20 rounded-full w-fit mb-2 z-10">
              <Bot size={48} className="opacity-80" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-4 text-retro-bg leading-none">Claude Opus</h3>
              <p className="opacity-80 font-sans text-2xl leading-tight">Сложная архитектура и рефакторинг</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* Gemini 3 */}
        <AnimatedBlock delay={0.4} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-1/4 translate-x-1/4">
              <Sparkles size={200} className="text-retro-text" />
            </div>
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-2 z-10">
              <Sparkles size={40} className="text-retro-text" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-2 text-retro-text leading-none">Gemini 3</h3>
              <p className="opacity-70 font-sans text-2xl leading-tight">Мультимодальность и контекст</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* GPT 5.3 Codex */}
        <AnimatedBlock delay={0.5} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-1/4 translate-x-1/4">
              <Cpu size={200} className="text-retro-text" />
            </div>
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-2 z-10">
              <Cpu size={40} className="text-retro-text" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-2 text-retro-text leading-none">GPT 5.3 Codex</h3>
              <p className="opacity-70 font-sans text-2xl leading-tight">Интеграция с экосистемой OpenAI</p>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
