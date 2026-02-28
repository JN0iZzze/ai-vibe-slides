import { AnimatedBlock } from '../../components/AnimatedBlock';
import { Smartphone, Layers } from 'lucide-react';

export const Vibe08MobileStack = () => {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-8xl font-serif italic mb-8 text-retro-text">MOBILE СТЕК</h2>
      </AnimatedBlock>
      
      <div className="flex-1 grid grid-cols-2 grid-rows-1 gap-4">
        {/* Native */}
        <AnimatedBlock delay={0.2} className="h-full col-span-1 row-span-1">
          <div className="border border-retro-text rounded-[2rem] p-6 flex flex-col h-full bg-retro-bg/50 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-5 translate-y-1/4 translate-x-1/4">
              <Smartphone size={200} className="text-retro-text" />
            </div>
            <div className="p-4 bg-retro-text/10 rounded-full w-fit mb-4 z-10">
              <Smartphone size={40} className="text-retro-text" />
            </div>
            <h3 className="text-7xl font-serif font-bold mb-8 text-retro-text leading-none z-10">Native</h3>
            <p className="opacity-70 font-sans text-3xl leading-tight z-10 mt-auto">Swift & Kotlin — максимальная производительность</p>
          </div>
        </AnimatedBlock>

        {/* Flutter */}
        <AnimatedBlock delay={0.3} className="h-full col-span-1 row-span-1">
          <div className="bg-retro-text text-retro-bg rounded-[2rem] p-6 flex flex-col h-full relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-4 opacity-10 translate-y-1/4 translate-x-1/4">
              <Layers size={200} />
            </div>
            <div className="p-4 bg-retro-bg/20 rounded-full w-fit mb-4 z-10">
              <Layers size={48} className="opacity-80" />
            </div>
            <h3 className="text-7xl font-serif font-bold mb-8 text-retro-bg leading-none z-10">Flutter</h3>
            <p className="opacity-80 font-sans text-3xl leading-tight z-10 mt-auto">Кроссплатформа — один код для iOS и Android</p>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
