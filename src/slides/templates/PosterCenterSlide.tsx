import { AnimatedBlock } from '../../components/AnimatedBlock';

export const PosterCenterSlide = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/bg/bg2.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-retro-bg/80 z-10" />
      </div>

      {/* Top Metadata */}
      <div className="absolute top-12 left-12 right-12 z-20 flex justify-between text-retro-dim font-sans text-sm font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.2}>Beyond™</AnimatedBlock>
        <AnimatedBlock delay={0.3} className="flex gap-12">
          <span>Milan</span>
          <span>New Schedule<br/>15 Designers</span>
        </AnimatedBlock>
        <AnimatedBlock delay={0.4} className="text-right">
          Look Book
        </AnimatedBlock>
      </div>

      {/* Central Typography */}
      <div className="relative z-30 text-center translate-y-[100px]">
        <AnimatedBlock delay={0.5} direction="up">
          <h1 className="font-serif text-[18rem] leading-[0.65] text-retro-text tracking-tighter">
            JSON<br/>промптинг
          </h1>
        </AnimatedBlock>
      </div>

      {/* Bottom Metadata */}
      <div className="absolute bottom-12 left-12 right-12 z-20 flex justify-between items-end text-retro-dim font-sans text-xs font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.6} className="max-w-xs">
          <p>Fashion Collection, Studio<br/>and Artists</p>
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.7} className="text-center">
          <p className="mb-8">Next up — Paris, London, New York</p>
          <div className="h-px w-32 bg-retro-dim mx-auto mb-4" />
          <p>Summer 2024<br/>Estéban Fernández</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.8} className="text-right max-w-xs">
          <p>789 Maplewood Drive<br/>Springfield, IL 62704, USA</p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
