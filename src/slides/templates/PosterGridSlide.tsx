import { AnimatedBlock } from '../../components/AnimatedBlock';

export const PosterGridSlide = () => {
  return (
    <div className="h-full w-full relative p-16 flex flex-col justify-between">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/bg/bg3.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Top Grid Info */}
      <div className="relative z-10 grid grid-cols-12 gap-4 text-retro-dim font-sans text-sm font-bold tracking-widest uppercase border-t border-retro-dim/30 pt-4">
        <AnimatedBlock delay={0.2} className="col-span-3">
          <h2>Gilded Stride</h2>
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.3} className="col-span-6 text-center">
          <span>London • Milan • Paris</span>
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.4} className="col-span-3 text-right">
          <span>Connect<br/>hello@glidedstudio.com</span>
        </AnimatedBlock>
      </div>

      {/* Middle Content */}
      <div className="relative z-10 grid grid-cols-12 gap-4 flex-grow items-center">
        <AnimatedBlock delay={0.5} className="col-span-3 text-retro-dim font-sans text-xs font-bold uppercase tracking-widest">
          <p>01 / 03</p>
          <br/>
          <p>FW 2025, Milan</p>
          <p>Directed by — Léon Beaumont</p>
        </AnimatedBlock>

        <div className="col-span-6" /> {/* Spacer for image */}

        <AnimatedBlock delay={0.6} className="col-span-3 text-right text-retro-dim font-sans text-xs font-bold uppercase tracking-widest">
          <p>7:30 pm NYC</p>
          <p>Victor Saint-Clair</p>
        </AnimatedBlock>
      </div>

      {/* Bottom Huge Title */}
      <div className="relative z-20 -mb-10">
        <AnimatedBlock delay={0.7} direction="up">
          <h1 className="font-serif text-[24rem] leading-none text-retro-text tracking-tighter text-center mix-blend-hard-light">
            Glided
          </h1>
        </AnimatedBlock>
      </div>

      {/* Footer Info */}
      <div className="relative z-30 grid grid-cols-12 gap-4 text-retro-dim font-sans text-[10px] font-bold tracking-widest uppercase border-b border-retro-dim/30 pb-4">
        <AnimatedBlock delay={0.8} className="col-span-3">
          Instagram
        </AnimatedBlock>
        
        <AnimatedBlock delay={0.9} className="col-span-6 text-center">
          18 Collection — by 327 Designers, Milan 18 Feb '25
        </AnimatedBlock>
        
        <AnimatedBlock delay={1.0} className="col-span-3 text-right">
          Terms & Conditions
        </AnimatedBlock>
      </div>
    </div>
  );
};
