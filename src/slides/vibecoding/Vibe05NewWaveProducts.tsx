import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Vibe05NewWaveProducts = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-16">
      <AnimatedBlock delay={0.1} direction="up" className="text-center">
        <h1 className="font-serif text-[7vw] leading-tight text-retro-text mb-8 tracking-tight">
          ПРОДАКТЫ<br/>НОВОЙ ВОЛНЫ
        </h1>
      </AnimatedBlock>
      <AnimatedBlock delay={0.3} direction="up">
        <p className="font-sans text-2xl text-retro-dim max-w-4xl text-center">
          Граница между дизайнером, продактом и разработчиком стирается
          <br/>
          Команда из одного человека
        </p>
      </AnimatedBlock>
    </div>
  );
};
