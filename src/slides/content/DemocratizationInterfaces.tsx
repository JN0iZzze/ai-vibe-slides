import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const DemocratizationInterfaces: React.FC = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/images/democ.png" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Decorative grid overlay */}
      <div className="absolute inset-0 z-[5] opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Top Metadata */}
      <div className="absolute top-12 left-12 right-12 z-20 flex justify-between text-retro-bg font-sans text-sm font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.2}>Доступ для всех</AnimatedBlock>
        <AnimatedBlock delay={0.4} className="text-right">
          Демократизация
        </AnimatedBlock>
      </div>

      {/* Central typography */}
      <div className="relative z-30 text-center translate-y-[160px]">
        <AnimatedBlock delay={0.5} direction="up">
          <h1 className="font-serif text-[11rem] leading-[0.75] text-retro-bg tracking-tight">
            <span className=''>Демократизация</span><br />
            <span className="italic font-garamond font-medium">интерфейсов</span>
          </h1>
        </AnimatedBlock>
      </div>

      {/* Bottom Metadata */}
      <div className="absolute bottom-12 left-12 right-12 z-20 flex justify-between items-end text-retro-bg font-sans text-xs font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.6} className="max-w-xs">
          <p>CLI → GUI → LUI</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.7} className="text-center">
          <div className="h-px w-32 bg-retro-bg mx-auto mb-4" />
          <p>От команд к диалогу</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.8} className="text-right max-w-xs">
          <p>Доступ для всех<br/>Естественный ввод</p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
