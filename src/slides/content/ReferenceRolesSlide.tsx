import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const roles = [
  { label: 'Character', src: '/multiref/Character.png' },
  { label: 'Horse', src: '/multiref/Horse.jpg' },
  { label: 'Clothes', src: '/multiref/Clothes.jpg' },
];

const RESULT_SRC = '/multiref/result.jpg';
const PROMPT = `Cinematic shot. The girl from [Image 1] on the horse from [Image 2], wearing outfit from [Image 3]. Riding in yorkshire dales.

Medium close up shot, film grain`;

export const ReferenceRolesSlide: React.FC = () => {
  return (
    <div className="h-full w-full overflow-hidden p-14">
      <div className="flex h-full flex-col">
        <div>
          <AnimatedBlock delay={0.1}>
            <h1 className="font-serif text-7xl text-retro-text">Роли референсов</h1>
          </AnimatedBlock>
        </div>

        <div className="mt-8 grid min-h-0 flex-1 grid-cols-[1.08fr_0.92fr] gap-6">
          <div className="grid min-h-0 grid-cols-[0.92fr_1.08fr] grid-rows-2 gap-4">
            <AnimatedBlock
              delay={0.24}
              className="row-span-2 flex min-h-0 flex-col"
            >
              <div className="relative min-h-0 flex-1">
                <img
                  src={roles[0].src}
                  alt={roles[0].label}
                  className="h-full w-full object-contain object-top"
                />
              </div>
            </AnimatedBlock>

            {roles.slice(1).map((role, index) => (
              <AnimatedBlock
                key={role.label}
                delay={0.32 + index * 0.08}
                className="flex min-h-0 flex-col"
              >
                <div className="relative min-h-0 flex-1">
                  <img
                    src={role.src}
                    alt={role.label}
                    className="h-full w-full object-contain object-center"
                  />
                </div>
              </AnimatedBlock>
            ))}
          </div>

          <div className="grid min-h-0 grid-rows-[auto_1fr] gap-4">
            <AnimatedBlock
              delay={0.34}
              className="flex flex-col rounded-[2.5rem] bg-retro-accent/10 p-8"
            >
              <p className="whitespace-pre-line font-mono text-2xl leading-snug text-retro-text">
                {PROMPT}
              </p>
            </AnimatedBlock>

            <AnimatedBlock
              delay={0.42}
              className="flex min-h-0 flex-col rounded-[2.5rem] bg-retro-dim/5 p-4"
            >
              <div className="relative min-h-0 flex-1 overflow-hidden rounded-[2rem]">
                <img
                  src={RESULT_SRC}
                  alt="Result"
                  className="h-full w-full rounded-[2rem] object-cover"
                />
              </div>
            </AnimatedBlock>
          </div>
        </div>
      </div>
    </div>
  );
};
