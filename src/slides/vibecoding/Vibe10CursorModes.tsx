import { AnimatedBlock } from '../../components/AnimatedBlock';
import { Bot, Map, Bug, HelpCircle } from 'lucide-react';

export const Vibe10CursorModes = () => {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-8xl font-serif italic mb-8 text-retro-text">РЕЖИМЫ CURSOR</h2>
      </AnimatedBlock>
      
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
        {/* Agent */}
        <AnimatedBlock delay={0.2} className="h-full col-span-1 row-span-1">
          <div className="bg-retro-text text-retro-bg rounded-[2rem] p-6 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-10 translate-y-1/4 translate-x-1/4">
              <Bot size={200} />
            </div>
            <div className="p-4 bg-retro-bg/20 rounded-full w-fit mb-2 z-10">
              <Bot size={48} className="opacity-80" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-4 text-retro-bg leading-none">Agent</h3>
              <p className="opacity-80 font-sans text-2xl leading-tight">Автономное написание кода и выполнение задач</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* Plan */}
        <AnimatedBlock delay={0.3} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-1/4 translate-x-1/4">
              <Map size={200} className="text-retro-text" />
            </div>
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-2 z-10">
              <Map size={40} className="text-retro-text" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-2 text-retro-text leading-none">Plan</h3>
              <p className="opacity-70 font-sans text-2xl leading-tight">Проектирование архитектуры до написания кода</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* Debug */}
        <AnimatedBlock delay={0.4} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-1/4 translate-x-1/4">
              <Bug size={200} className="text-retro-text" />
            </div>
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-2 z-10">
              <Bug size={40} className="text-retro-text" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-2 text-retro-text leading-none">Debug</h3>
              <p className="opacity-70 font-sans text-2xl leading-tight">Поиск ошибок и анализ логов терминала</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* Ask */}
        <AnimatedBlock delay={0.5} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-1/4 translate-x-1/4">
              <HelpCircle size={200} className="text-retro-text" />
            </div>
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-2 z-10">
              <HelpCircle size={40} className="text-retro-text" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-2 text-retro-text leading-none">Ask</h3>
              <p className="opacity-70 font-sans text-2xl leading-tight">Вопросы по кодовой базе без внесения изменений</p>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
