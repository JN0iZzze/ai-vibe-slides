import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Vibe09ModelsModes = () => {
  return (
    <div className="h-full w-full p-16 flex flex-row items-center justify-center gap-8">
      <AnimatedBlock delay={0.1} direction="right" className="flex-1 h-full flex items-center justify-center min-h-0">
        <img
          src="/images/vibe/models.png"
          alt="Models"
          className="max-h-full w-auto object-contain rounded-[2rem]"
        />
      </AnimatedBlock>
      <AnimatedBlock delay={0.2} direction="left" className="flex-1 h-full flex items-center justify-center min-h-0">
        <img
          src="/images/vibe/modes.png"
          alt="Modes"
          className="max-h-full w-auto object-contain rounded-[2rem]"
        />
      </AnimatedBlock>
    </div>
  );
};
