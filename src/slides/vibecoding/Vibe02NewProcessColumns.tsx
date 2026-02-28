import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Vibe02NewProcessColumns = () => {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-8xl font-serif italic mb-12 text-retro-text">НОВЫЙ ПРОЦЕСС</h2>
      </AnimatedBlock>
      
      <div className="flex-1 flex items-end justify-center gap-12">
        {/* Придумать идею */}
        <AnimatedBlock delay={0.2} className="flex flex-col items-center flex-1 max-w-[280px]">
          <div className="w-full bg-retro-dim/20 border border-retro-dim/40 rounded-t-[2rem] h-[18vh] mb-4" />
          <div className="h-16 flex items-center justify-center w-full">
            <p className="font-sans text-2xl text-retro-text text-center font-medium">Придумать идею</p>
          </div>
        </AnimatedBlock>

        {/* Провести исследование */}
        <AnimatedBlock delay={0.3} className="flex flex-col items-center flex-1 max-w-[280px]">
          <div className="w-full bg-retro-dim/20 border border-retro-dim/40 rounded-t-[2rem] h-[42vh] mb-4" />
          <div className="h-16 flex items-center justify-center w-full">
            <p className="font-sans text-2xl text-retro-text text-center font-medium">Провести исследование</p>
          </div>
        </AnimatedBlock>

        {/* Реализовать в коде + AI */}
        <AnimatedBlock delay={0.4} className="flex flex-col items-center flex-1 max-w-[280px]">
          <span className="font-mono text-3xl text-retro-accent tracking-widest mb-2">AI</span>
          <div className="w-full bg-retro-text text-retro-bg border border-retro-text rounded-t-[2rem] h-[18vh] mb-4" />
          <div className="h-16 flex items-center justify-center w-full">
            <p className="font-sans text-2xl text-retro-text text-center font-medium">Реализовать в коде</p>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
