import React from 'react';

export const SlideClimax: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20 text-center">
      <h2 className="font-serif italic text-7xl mb-8">Кульминация и Развязка</h2>
      <div className="text-3xl leading-relaxed max-w-3xl font-sans">
        <p className="mb-8">Точка наивысшего напряжения, где герой сталкивается с антагонистом.</p>
        <p className="text-retro-dim font-serif italic text-4xl mt-12">За которой следует новая норма.</p>
      </div>
    </div>
  );
};
