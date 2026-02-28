import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Vibe07CursorVsAll = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-16">
      <AnimatedBlock delay={0.1} direction="up" className="text-center">
        <h1 className="font-serif text-[8vw] leading-none text-retro-text tracking-tight">
          Cursor / Claude Code
        </h1>
        <p className="font-mono text-3xl text-retro-dim tracking-widest my-6">vs</p>
        <h1 className="font-serif text-[6vw] leading-none text-retro-dim tracking-tight mb-8">
          FIGMA MAKE / LOVABLE
        </h1>
      </AnimatedBlock>
      <AnimatedBlock delay={0.3} direction="up">
        <p className="font-sans text-2xl text-retro-dim max-w-3xl text-center">
          Где заканчивается визуальный конструктор и начинается настоящая мощь кода. Cursor — стандарт индустрии.
        </p>
      </AnimatedBlock>
    </div>
  );
};
