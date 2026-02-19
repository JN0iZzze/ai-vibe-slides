import React from 'react';
import { RefreshCw } from 'lucide-react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const InterfaceLoop: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col p-12">
      <AnimatedBlock delay={0.1}>
        <h2 className="text-6xl font-serif mb-12 leading-tight max-w-7xl">
          Мы потратили 40 лет на окна, иконки и тачскрины, чтобы снова вернуться к мигающему курсору<span className="animate-pulse font-sans">|</span>
        </h2>
      </AnimatedBlock>

      <div className="flex-1 flex gap-8 items-stretch font-sans">
        {/* Left Column: 1980s */}
        <AnimatedBlock delay={0.1} direction="left" className="flex-1 h-full">
          <div className="h-full bg-retro-text text-retro-bg rounded-[2rem] p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-8 w-96 h-96 rounded-2xl overflow-hidden aspect-square z-10">
              <img src="/images/cli.png" alt="CLI" className="w-full h-full object-cover" />
            </div>
            <div className="z-10">
              <div className="flex justify-between items-start">
                 <div>
                    <h2 className="text-8xl font-serif italic mb-2">CLI</h2>
                    <p className="text-xl font-mono uppercase tracking-widest opacity-60">Command Line Interface</p>
                 </div>
              </div>
            </div>
            <div className="absolute bottom-56 left-12 right-12 z-10 space-y-4">
              <h3 className="text-4xl font-bold">Синтаксис</h3>
              <p className="text-3xl font-medium opacity-90 leading-relaxed max-w-2xl">
                Человек подстраивается под машину.
                <br/>
                Ошибка в символе = ошибка выполнения
              </p>
            </div>

            <div className="absolute -bottom-4 -left-4 text-[12rem] opacity-10 font-serif italic pointer-events-none text-retro-bg">
              1980s
            </div>
          </div>
        </AnimatedBlock>

        {/* Center Divider */}
        <div className="flex items-center justify-center w-24 relative">
          <AnimatedBlock delay={0.5} direction="up" className="absolute z-20">
            <div className="bg-retro-bg p-3 rounded-full border-2 border-retro-text">
              <RefreshCw size={48} className="text-retro-text" />
            </div>
          </AnimatedBlock>
          <div className="h-full w-px bg-retro-dim absolute z-10" />
        </div>

        {/* Right Column: 2025 */}
        <AnimatedBlock delay={0.3} direction="right" className="flex-1 h-full">
          <div className="h-full bg-retro-bg border-2 border-retro-text text-retro-text rounded-[2rem] p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -top-6 right-8 w-96 h-96 rounded-2xl overflow-hidden aspect-square z-10">
              <img src="/images/lui.png" alt="LUI" className="w-full h-full object-cover" />
            </div>
            <div className="z-10">
               <div className="flex justify-between items-start">
                 <div>
                    <h2 className="text-8xl font-serif italic mb-2">LUI</h2>
                    <p className="text-xl font-mono uppercase tracking-widest opacity-60">Language User Interface</p>
                 </div>
              </div>
            </div>
            <div className="absolute bottom-56 left-12 right-12 z-10 space-y-4">
              <h3 className="text-4xl font-bold">Смысл</h3>
              <p className="text-3xl font-medium opacity-90 leading-relaxed max-w-2xl">
                Машина подстраивается под человека.
                <br/>
                Важен интент, а не команда
              </p>
            </div>

            <div className="absolute -bottom-4 -right-4 text-[12rem] opacity-10 font-serif italic pointer-events-none text-retro-text">
              2025
            </div>
          </div>
        </AnimatedBlock>
      </div>
    </div>
  );
};
