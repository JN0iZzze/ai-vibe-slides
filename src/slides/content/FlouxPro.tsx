import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const FlouxPro: React.FC = () => {
  return (
    <div className="h-full w-full relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/floux-screen.png" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
      </div>

      {/* Text in corner */}
      <div className="absolute bottom-12 left-12 z-20">
        <AnimatedBlock delay={0.2}>
          <span className="font-serif text-5xl text-white">floux.pro</span>
        </AnimatedBlock>
      </div>
    </div>
  );
};
