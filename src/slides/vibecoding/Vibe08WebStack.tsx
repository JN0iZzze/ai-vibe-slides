import { AnimatedBlock } from '../../components/AnimatedBlock';
import { Code2, Server, FileCode2, Paintbrush } from 'lucide-react';

export const Vibe08WebStack = () => {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-8xl font-serif italic mb-8 text-retro-text">WEB СТЕК</h2>
      </AnimatedBlock>
      
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
        {/* React */}
        <AnimatedBlock delay={0.2} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-1/4 translate-x-1/4">
              <Code2 size={200} className="text-retro-text" />
            </div>
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-2 z-10">
              <Code2 size={40} className="text-retro-text" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-2 text-retro-text leading-none">React</h3>
              <p className="opacity-70 font-sans text-2xl leading-tight">База для любых интерфейсов</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* Next.js */}
        <AnimatedBlock delay={0.3} className="h-full col-span-1 row-span-1">
          <div className="bg-retro-text text-retro-bg rounded-[2rem] p-6 flex flex-col justify-between h-full relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-10 translate-y-1/4 translate-x-1/4">
              <Server size={200} />
            </div>
            <div className="p-4 bg-retro-bg/20 rounded-full w-fit mb-2 z-10">
              <Server size={48} className="opacity-80" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-4 text-retro-bg leading-none">Next.js</h3>
              <p className="opacity-80 font-sans text-2xl leading-tight">Полноценные приложения из коробки</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* Python */}
        <AnimatedBlock delay={0.4} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-1/4 translate-x-1/4">
              <FileCode2 size={200} className="text-retro-text" />
            </div>
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-2 z-10">
              <FileCode2 size={40} className="text-retro-text" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-2 text-retro-text leading-none">Python</h3>
              <p className="opacity-70 font-sans text-2xl leading-tight">Бэкенд и AI-агенты</p>
            </div>
          </div>
        </AnimatedBlock>

        {/* Tailwind */}
        <AnimatedBlock delay={0.5} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col justify-between h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-1/4 translate-x-1/4">
              <Paintbrush size={200} className="text-retro-text" />
            </div>
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-2 z-10">
              <Paintbrush size={40} className="text-retro-text" />
            </div>
            <div className="z-10">
              <h3 className="text-5xl font-bold mb-2 text-retro-text leading-none">Tailwind</h3>
              <p className="opacity-70 font-sans text-2xl leading-tight">Utility-first CSS для быстрой верстки</p>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
