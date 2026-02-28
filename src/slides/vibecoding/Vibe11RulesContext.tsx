import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Vibe11RulesContext = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-16">
      <AnimatedBlock delay={0.1} direction="up" className="text-center flex flex-col items-center">
        <h1 className="font-serif text-[10vw] leading-none text-retro-text tracking-tight">
          ПРАВИЛА
        </h1>
        <span className="font-serif text-5xl text-retro-text my-3">и</span>
        <h1 className="font-serif text-[10vw] leading-none text-retro-text tracking-tight">
          КОНТЕКСТ
        </h1>
      </AnimatedBlock>
      <AnimatedBlock delay={0.3} direction="up">
        <p className="font-mono text-xl text-retro-dim max-w-3xl text-center">
          .cursorrules
        </p>
      </AnimatedBlock>
      <AnimatedBlock delay={0.4} direction="up">
        <p className="font-sans text-2xl text-retro-dim max-w-3xl text-center mt-6">
          Как заставить нейросеть писать то что нужно
        </p>
      </AnimatedBlock>
    </div>
  );
};
