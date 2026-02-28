import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Vibe01Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-16">
      <AnimatedBlock delay={0.1} direction="up" className="text-center">
        <h1 className="font-serif text-[10vw] leading-none text-retro-text mb-8 tracking-tight">
          ВАЙБКОДИНГ
        </h1>
      </AnimatedBlock>
    </div>
  );
};
