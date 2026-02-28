import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Vibe03NoFigmaDesign = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-16">
      <AnimatedBlock delay={0.1} direction="up" className="text-center">
        <h1 className="font-serif text-[9vw] leading-none text-retro-text mb-8 tracking-tight">
          NO-FIGMA DESIGN
        </h1>
      </AnimatedBlock>
      <AnimatedBlock delay={0.3} direction="up">
        <p className="font-sans text-2xl text-retro-dim max-w-3xl text-center">
          Дизайн рождается сразу в браузере<br/>Пропускаем этап макетов и переходим сразу к продукту
        </p>
      </AnimatedBlock>
    </div>
  );
};
