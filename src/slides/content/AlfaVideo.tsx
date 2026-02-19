import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const AlfaVideo: React.FC = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      {/* Background: video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/alfa_video.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Top Metadata */}
      <div className="absolute top-12 left-12 right-12 z-20 flex justify-between text-retro-dim font-sans text-sm font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.2}>Кэшбэк</AnimatedBlock>
        <AnimatedBlock delay={0.3} className="flex gap-12">
          <span>Возврат с покупок</span>
          <span>Daily Banking<br/>Повседневные операции</span>
        </AnimatedBlock>
        <AnimatedBlock delay={0.4} className="text-right">
          Бонусы и награды
        </AnimatedBlock>
      </div>

      {/* Bottom Metadata */}
      <div className="absolute bottom-12 left-12 right-12 z-20 flex justify-between items-end text-retro-dim font-sans text-xs font-bold tracking-widest uppercase">
        <AnimatedBlock delay={0.6} className="max-w-xs">
          <p>Кэшбэк на всё<br/>Карта лояльности</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.7} className="text-center">
          <div className="h-px w-32 bg-retro-dim mx-auto mb-4" />
          <p>Daily Banking</p>
        </AnimatedBlock>

        <AnimatedBlock delay={0.8} className="text-right max-w-xs">
          <p>Платежи и переводы<br/>Управление счётом</p>
        </AnimatedBlock>
      </div>
    </div>
  );
};
