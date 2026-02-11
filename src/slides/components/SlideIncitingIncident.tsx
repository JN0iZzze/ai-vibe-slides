import React from 'react';

export const SlideIncitingIncident: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20">
      <h2 className="font-serif italic text-6xl mb-12">Провоцирующий инцидент</h2>
      <div className="grid grid-cols-2 gap-12 w-full max-w-4xl font-sans">
        <div className="border-2 border-retro-text p-12 flex items-center justify-center rounded-[2rem]">
          <span className="text-4xl font-bold">Статус-кво</span>
        </div>
        <div className="border-2 border-retro-text p-12 flex items-center justify-center bg-retro-text text-retro-bg rounded-[2rem]">
          <span className="text-4xl font-bold">Срыв</span>
        </div>
      </div>
      <p className="mt-12 text-xl opacity-70">Момент, когда жизнь меняется навсегда.</p>
    </div>
  );
};
