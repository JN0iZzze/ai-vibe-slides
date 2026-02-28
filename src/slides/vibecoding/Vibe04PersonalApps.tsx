import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Vibe04PersonalApps = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-16">
      <AnimatedBlock delay={0.1} direction="up" className="text-center">
        <h1 className="font-serif text-[7vw] leading-tight text-retro-text mb-8 tracking-tight">
          ЭРА ПЕРСОНАЛЬНЫХ ПРИЛОЖЕНИЙ
        </h1>
      </AnimatedBlock>
      <AnimatedBlock delay={0.3} direction="up">
        <p className="font-sans text-2xl text-retro-dim max-w-3xl text-center">
          Стоимость разработки падает до нуля
          <br/>
          У каждого будет софт под его задачи, созданный за 5 минут
        </p>
      </AnimatedBlock>
    </div>
  );
};
