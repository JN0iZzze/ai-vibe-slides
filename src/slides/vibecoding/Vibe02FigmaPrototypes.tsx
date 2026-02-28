import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Vibe02FigmaPrototypes = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-16">
      <AnimatedBlock delay={0.1} direction="up" className="text-center">
        <h1 className="font-serif text-[8vw] leading-tight text-retro-text mb-8 tracking-tight">
          КРИЗИС ПРОТОТИПИРОВАНИЯ
        </h1>
      </AnimatedBlock>
      <AnimatedBlock delay={0.3} direction="up">
        <p className="font-sans text-2xl text-retro-dim max-w-3xl text-center">
          С AI-инструментами разработки прототипирование превращается в лишний и медленный этап.
        </p>
      </AnimatedBlock>
    </div>
  );
};
