import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Vibe06FutureSaaS = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-16">
      <AnimatedBlock delay={0.1} direction="up" className="text-center">
        <h1 className="font-serif text-[10vw] leading-[1.2] text-retro-text mb-8 tracking-tight">
          БУДУЩЕЕ<br/>SaaS
        </h1>
      </AnimatedBlock>
      <AnimatedBlock delay={0.3} direction="up">
        <p className="font-mono text-3xl text-retro-dim/70 tracking-wider">(Software as a Service)</p>
      </AnimatedBlock>
    </div>
  );
};
