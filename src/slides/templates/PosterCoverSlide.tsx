import { AnimatedBlock } from '../../components/AnimatedBlock';

export const PosterCoverSlide = () => {
  return (
    <div className="h-full w-full relative p-12 flex flex-col justify-between">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/bg/bg1.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Top Section */}
      <div className="relative z-10 flex justify-between items-start">
        <AnimatedBlock delay={0.2} className="w-full">
          <h1 className="font-serif text-[15rem] leading-[0.8] tracking-tighter text-retro-text uppercase mix-blend-multiply">
            DARK
          </h1>
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.4} className="absolute top-4 right-0 text-right">
          <p className="font-sans text-xl font-bold text-retro-dim tracking-widest uppercase">
            About<br/>Collection<br/>Tour Dates<br/>Shop
          </p>
        </AnimatedBlock>
      </div>

      {/* Bottom Section */}
      <div className="relative z-10 grid grid-cols-3 items-end">
        <AnimatedBlock delay={0.5}>
          <span className="font-serif text-[8rem] leading-none text-retro-text">
            025
          </span>
        </AnimatedBlock>

        <AnimatedBlock delay={0.6} className="text-center">
          <h2 className="font-sans text-6xl font-black text-retro-text uppercase leading-none tracking-tighter">
            From<br/>Dusk Till<br/>Dawn
          </h2>
          <div className="mt-4 inline-block border-2 border-retro-text rounded-full p-2">
            <span className="font-sans font-bold text-xl px-2">R</span>
          </div>
        </AnimatedBlock>

        <AnimatedBlock delay={0.7} className="text-right">
          <p className="font-sans text-sm font-bold text-retro-dim uppercase tracking-widest mb-2">
            World is<br/>Dark
          </p>
          <p className="font-sans text-sm font-bold text-retro-dim uppercase tracking-widest">
            Must
          </p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
