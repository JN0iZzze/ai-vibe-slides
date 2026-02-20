import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const SvgTo3dWorkflow: React.FC = () => {
  return (
    <div className="h-full w-full p-16 flex flex-col">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-4xl font-serif italic mb-12">SVG → 3D</h2>
      </AnimatedBlock>
      
      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
        {/* 1. SVG — карточка с фоновой картинкой */}
        <AnimatedBlock delay={0.2} className="h-full">
          <div 
            className="rounded-[2rem] p-6 flex flex-col justify-between h-full relative bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: 'url(/images/workflow/001.png)' }}
          >
            <div className="relative z-10 flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl text-retro-dim font-bold bg-retro-bg/30 backdrop-blur-md">1</div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-retro-text drop-shadow-lg">SVG</h3>
            </div>
          </div>
        </AnimatedBlock>

        {/* 2. SVG -> 3D — инструменты */}
        <AnimatedBlock delay={0.3} className="h-full">
          <div 
            className="rounded-[2rem] p-6 flex flex-col justify-between h-full relative bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: 'url(/images/workflow/002.png)' }}
          >
            <div className="relative z-10 flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl text-retro-dim font-bold bg-retro-bg/30 backdrop-blur-md">2</div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-retro-text drop-shadow-lg max-w-[300px]">Adobe Project Neo<br/>или Floux.pro</h3>
            </div>
          </div>
        </AnimatedBlock>

        {/* 3. NanoBananaPro */}
        <AnimatedBlock delay={0.4} className="h-full">
          <div 
            className="rounded-[2rem] p-6 flex flex-col justify-between h-full relative bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: 'url(/images/workflow/003.png)' }}
          >
            <div className="relative z-10 flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl text-retro-dim font-bold bg-retro-bg/30 backdrop-blur-md">3</div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-retro-text drop-shadow-lg">NanoBananaPro</h3>
            </div>
          </div>
        </AnimatedBlock>

        {/* 4. Результат */}
        <AnimatedBlock delay={0.5} className="h-full">
          <div 
            className="rounded-[2rem] p-6 flex flex-col justify-between h-full relative bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: 'url(/images/workflow/004.png)' }}
          >
            <div className="relative z-10 flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl text-retro-dim font-bold bg-retro-bg/30 backdrop-blur-md">4</div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2 text-retro-text drop-shadow-lg">Результат</h3>
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
