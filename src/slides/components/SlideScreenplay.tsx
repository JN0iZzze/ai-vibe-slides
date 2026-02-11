import React from 'react';

export const SlideScreenplay: React.FC = () => {
  return (
    <div className="h-full w-full flex items-center justify-center p-20">
      <div className="w-full max-w-4xl border-2 border-retro-text rounded-lg overflow-hidden bg-retro-bg/50 backdrop-blur-sm shadow-[0_0_30px_rgba(74,246,38,0.1)]">
        {/* Window Header */}
        <div className="bg-retro-text text-retro-bg px-4 py-2 flex items-center justify-between font-mono text-sm">
          <span>screenplay_final_v3.fountain</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-retro-bg opacity-50"></div>
            <div className="w-3 h-3 rounded-full bg-retro-bg opacity-50"></div>
            <div className="w-3 h-3 rounded-full bg-retro-bg opacity-50"></div>
          </div>
        </div>

        {/* Editor Content */}
        <div className="p-12 font-mono text-lg leading-relaxed">
          <div className="opacity-50 mb-8">ИНТ. КОСМИЧЕСКИЙ КОРАБЛЬ - НОЧЬ</div>
          
          <p className="mb-6">
            Тусклый свет аварийных ламп заливает коридор. <span className="text-retro-accent font-bold">РИПЛИ</span> (30) медленно продвигается вперед, сжимая в руках самодельный огнемет.
          </p>

          <p className="mb-6">
            Тяжелое дыхание эхом разносится по отсеку.
          </p>

          <div className="pl-32 pr-16 mb-6">
            <div className="font-bold mb-1">РИПЛИ</div>
            <div className="italic text-sm mb-2 opacity-70">(шепотом)</div>
            <div>Я знаю, что ты здесь. Покажись, тварь.</div>
          </div>

          <p>
            В темноте вентиляционной шахты что-то <span className="animate-pulse bg-retro-text text-retro-bg px-1">ДВИЖЕТСЯ</span><span className="animate-pulse">_</span>
          </p>
        </div>
      </div>
    </div>
  );
};
