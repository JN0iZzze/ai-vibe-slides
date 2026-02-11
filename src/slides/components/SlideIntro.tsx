import React from 'react';

export const SlideIntro: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20">
      <h1 className="font-serif italic text-8xl mb-8">Завязка</h1>
      <p className="text-2xl opacity-80 max-w-2xl text-center font-sans">
        Каждая великая история начинается с вопроса, требующего ответа.
      </p>
    </div>
  );
};
