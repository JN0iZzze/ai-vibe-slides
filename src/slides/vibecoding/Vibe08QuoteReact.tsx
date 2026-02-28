import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Vibe08QuoteReact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-16">
      <AnimatedBlock delay={0.1} direction="up" className="text-center max-w-7xl">
        <blockquote className="font-serif text-[5vw] text-retro-text leading-tight italic">
          «Я дизайнер, я в этом ничего не понимаю, объясни кто этот ваш Реакт, почему именно он»
        </blockquote>
      </AnimatedBlock>
    </div>
  );
};
