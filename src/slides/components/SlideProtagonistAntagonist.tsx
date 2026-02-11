import React from 'react';

export const SlideProtagonistAntagonist: React.FC = () => {
  return (
    <div className="h-full w-full flex p-12 gap-8 items-stretch font-sans">
      {/* Left Column: Green BG, Dark Text */}
      <div className="flex-1 bg-retro-text text-retro-bg rounded-[2rem] p-12 flex flex-col justify-center items-center relative overflow-hidden">
        <h2 className="text-6xl font-serif italic mb-6 z-10">Протагонист</h2>
        <p className="text-xl text-center max-w-md z-10 font-bold opacity-90">
          Движущая сила истории. Тот, чьи желания создают сюжет.
        </p>
        <div className="absolute -bottom-4 -left-4 text-9xl opacity-10 font-serif italic pointer-events-none">
          Герой
        </div>
      </div>

      {/* Center Divider */}
      <div className="flex items-center justify-center w-24 relative">
        <span className="font-serif italic text-6xl absolute z-20 bg-retro-bg px-4">VS</span>
        <div className="h-full w-px bg-retro-dim absolute z-10"></div>
      </div>

      {/* Right Column: Dark BG, Green Text */}
      <div className="flex-1 bg-retro-bg border-2 border-retro-text text-retro-text rounded-[2rem] p-12 flex flex-col justify-center items-center relative overflow-hidden">
        <h2 className="text-6xl font-serif italic mb-6 z-10">Антагонист</h2>
        <p className="text-xl text-center max-w-md z-10 opacity-90">
          Сила сопротивления. Тот, кто заставляет героя меняться.
        </p>
        <div className="absolute -bottom-4 -right-4 text-9xl opacity-10 font-serif italic pointer-events-none">
          Злодей
        </div>
      </div>
    </div>
  );
};
