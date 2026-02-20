import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const FlouxVideoSlide: React.FC = () => {
  return (
    <div className="h-full w-full relative flex px-20 py-12 gap-12 items-center bg-retro-bg">

      {/* Left Column: Text */}
      <div className="flex-1 flex flex-col justify-between h-full items-start pl-12 py-24">
        <img
          src="/images/floux-logo.svg"
          alt="Floux"
          className="h-24 w-auto object-contain"
        />
        
        <div>
          <AnimatedBlock delay={0.1}>
            <h1 className="text-[8rem] font-sans font-bold mb-8 leading-[0.85] text-retro-dim tracking-tight">
              Твой новый творческий флоу
            </h1>
          </AnimatedBlock>
          <AnimatedBlock delay={0.3}>
            <p className="text-3xl font-sans text-retro-dim leading-relaxed opacity-70">
              Все популярные модели в одном интерфейсе<br/>
              От Nano Banana до Sora 2 Pro
            </p>
          </AnimatedBlock>
        </div>
      </div>

      {/* Right Column: Video */}
      <AnimatedBlock delay={0.2} direction="up" className="flex-1 h-full flex items-center justify-center">
        <div className="h-full w-full">
          <video
            src="/floux.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </AnimatedBlock>
    </div>
  );
};
