import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Vibe11MarkdownDocs = () => {
  return (
    <div className="h-full w-full relative overflow-hidden">
      {/* Скриншот на всю высоту экрана справа */}
      <div className="absolute top-0 right-0 bottom-0 w-[58%]">
        <img
          src="/images/vibe/md.png"
          alt="Markdown документация"
          className="w-full h-full object-cover object-left"
        />
      </div>

      {/* Текст слева */}
      <div className="relative z-10 w-1/2 p-16 flex flex-col justify-center">
        <AnimatedBlock delay={0.1} direction="right">
          <h1 className="font-serif text-retro-text tracking-tight mb-8">
            <span className="block text-[7vw] leading-none">MARKDOWN</span>
            <span className="block text-[4vw] leading-tight mt-4 text-retro-dim">как документация</span>
          </h1>
        </AnimatedBlock>
        <AnimatedBlock delay={0.3} direction="right">
          <p className="font-sans text-2xl text-retro-dim max-w-xl">
            .md файлы — рабочая документация проекта.
            <br/>
            AI читает их как базу знаний.
          </p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
