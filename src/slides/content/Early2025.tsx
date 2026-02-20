import { AnimatedBlock } from '../../components/AnimatedBlock';

export const Early2025 = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-12 flex flex-col justify-center items-center text-retro-text overflow-hidden relative">
      <div className="w-full max-w-7xl z-10 -translate-y-8">
        <AnimatedBlock delay={0.1}>
          <h2 className="text-6xl font-serif italic mb-12 text-center">Начало 2025</h2>
        </AnimatedBlock>
        
        <div className="grid grid-cols-3 gap-8 items-stretch">
          {/* Midjourney v6 */}
          <AnimatedBlock delay={0.3} direction="up" className="h-full">
            <div className="border-2 border-retro-text p-8 rounded-[2rem] h-full flex flex-col bg-retro-bg/80 backdrop-blur-sm">
              <h3 className="text-5xl font-bold mb-6">Midjourney v6</h3>
              <p className="text-xl font-sans opacity-80 leading-relaxed flex-1">
                Новая версия с улучшенным пониманием промптов и более точной генерацией изображений
              </p>
            </div>
          </AnimatedBlock>

          {/* Krea */}
          <AnimatedBlock delay={0.5} direction="up" className="h-full">
            <div className="border-2 border-retro-text p-8 rounded-[2rem] h-full flex flex-col bg-retro-bg/80 backdrop-blur-sm">
              <h3 className="text-5xl font-bold mb-6">Krea</h3>
              <p className="text-xl font-sans opacity-80 leading-relaxed flex-1">
                Инструмент для создания и редактирования изображений с продвинутыми возможностями
              </p>
            </div>
          </AnimatedBlock>

          {/* Flux 1 */}
          <AnimatedBlock delay={0.7} direction="up" className="h-full">
            <div className="border-2 border-retro-text p-8 rounded-[2rem] h-full flex flex-col bg-retro-bg/80 backdrop-blur-sm">
              <h3 className="text-5xl font-bold mb-6">Flux 1</h3>
              <p className="text-xl font-sans opacity-80 leading-relaxed flex-1">
                Открытая модель генерации изображений с высоким качеством и скоростью работы
              </p>
            </div>
          </AnimatedBlock>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute bottom-[14vw] left-0 right-0 flex justify-center pointer-events-none z-0">
        <AnimatedBlock delay={0.8}>
          <h1 className="text-[18vw] leading-none font-serif text-retro-dim opacity-20 uppercase tracking-tight select-none whitespace-nowrap">
            PastGen
          </h1>
        </AnimatedBlock>
      </div>
    </div>
  );
};
