import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const inputs = [
  { label: 'База', src: '/images/composition/person.png' },
  { label: 'Объект', src: '/images/composition/person1.png' },
  { label: 'Стиль', src: '/images/transfer/ref.jpg' },
  { label: 'Композиция', src: '/images/composition/ref.jpg' },
];

export const MultireferenceIntroSlide: React.FC = () => {
  return (
    <div className="h-full w-full p-10">
      <div className="flex h-full gap-8">
        <div className="grid w-[48%] grid-cols-2 gap-5">
          {inputs.map((input, index) => (
            <AnimatedBlock
              key={input.label}
              delay={0.12 + index * 0.06}
              className="flex min-h-0 flex-col"
            >
              <div className="mb-3 font-mono text-sm uppercase tracking-[0.3em] text-retro-dim">
                {input.label}
              </div>
              <div className="relative min-h-0 flex-1 overflow-hidden rounded-[2rem]">
                <img src={input.src} alt="" className="h-full w-full object-cover" />
              </div>
            </AnimatedBlock>
          ))}
        </div>

        <div className="flex flex-1 flex-col justify-center">
          <AnimatedBlock delay={0.2}>
            <p className="font-mono text-sm uppercase tracking-[0.35em] text-retro-dim">Мультиреференсность</p>
          </AnimatedBlock>
          <AnimatedBlock delay={0.28}>
            <h1 className="mt-5 font-serif text-7xl leading-none text-retro-text">
              Несколько картинок,
              <br />
              несколько ролей
            </h1>
          </AnimatedBlock>
          <AnimatedBlock delay={0.36}>
            <p className="mt-7 max-w-3xl font-sans text-[2rem] leading-tight text-retro-dim">
              Мультиреференсность начинается не с загрузки четырёх картинок,
              а с назначения каждой из них собственной роли и приоритета.
            </p>
          </AnimatedBlock>
          <AnimatedBlock delay={0.44}>
            <div className="my-7 h-px w-40 bg-retro-dim/30" />
          </AnimatedBlock>
          <AnimatedBlock delay={0.52} className="overflow-hidden rounded-[2rem]">
            <img src="/images/composition/out.png" alt="" className="h-[21rem] w-full object-cover" />
          </AnimatedBlock>
        </div>
      </div>
    </div>
  );
};
