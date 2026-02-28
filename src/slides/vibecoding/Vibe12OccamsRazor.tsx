import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Vibe12OccamsRazor = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-16">
      <AnimatedBlock delay={0.1} direction="up" className="text-center">
        <h1 className="font-serif text-[7vw] leading-tight text-retro-text mb-8 tracking-tight">
          БРИТВА ОККАМА
        </h1>
      </AnimatedBlock>
    </div>
  );
};
