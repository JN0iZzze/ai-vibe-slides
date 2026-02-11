import React from 'react';

export const SlideVisualStorytelling: React.FC = () => {
  return (
    <div className="h-full w-full flex p-12 gap-12 items-stretch">
      {/* Left Column: Image */}
      <div className="flex-1 relative rounded-[2rem] overflow-hidden border-2 border-retro-dim">
        <img 
          src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop" 
          alt="Cinema Projector" 
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-75"
        />
        <div className="absolute inset-0 bg-retro-text/10 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Right Column: Text */}
      <div className="flex-1 flex flex-col justify-center p-8">
        <h2 className="text-7xl font-serif italic mb-12 leading-tight">
          Показывай, <br/> 
          <span className="text-retro-dim">а не рассказывай</span>
        </h2>
        <div className="space-y-8 text-xl font-sans border-l-2 border-retro-text pl-8">
          <p>
            Визуальное повествование передает эмоции быстрее слов.
          </p>
          <p className="opacity-70">
            Цвет, свет и композиция кадра рассказывают историю еще до того, как персонаж откроет рот.
          </p>
        </div>
      </div>
    </div>
  );
};
