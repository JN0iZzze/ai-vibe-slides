import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const avatarSrc = '/images/max-tg.jpg';
const postSrc = '/images/max.png';

export const SpeakerChannelSlide: React.FC = () => {
  return (
    <div className="h-full w-full bg-retro-bg p-16 flex flex-row gap-16 overflow-hidden">
      {/* Left: аватарка + подпись + ссылка */}
      <div className="flex-1 flex flex-col items-center justify-center min-w-0 gap-8">
        <AnimatedBlock delay={0.1} className="flex flex-col items-center gap-6">
          <div className="w-56 h-56 rounded-full overflow-hidden border-2 border-retro-text flex items-center justify-center shrink-0">
            <img
              src={avatarSrc}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-serif text-5xl text-retro-text text-center max-w-xl leading-relaxed mb-2">
            Макс Кукушкин
            </p>
            <p className="font-sans text-2xl text-retro-text text-center max-w-xl leading-relaxed">
              арт-директор в дизайн-студии ЦЕХ
            </p>
          </div>
          <span className="font-mono text-3xl text-retro-dim opacity-80">
            t.me/maxkukushkin
          </span>
        </AnimatedBlock>
      </div>

      {/* Right: скриншот поста */}
      <AnimatedBlock delay={0.2} className="flex-1 min-w-0 rounded-[2rem] overflow-hidden flex items-center justify-center">
        <img
          src={postSrc}
          alt=""
          className="max-w-full max-h-full object-contain rounded-[2rem]"
        />
      </AnimatedBlock>
    </div>
  );
};
