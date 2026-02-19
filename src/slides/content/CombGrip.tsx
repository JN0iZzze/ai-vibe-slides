import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const skills: { label: string; top: string; left: string }[] = [
  { label: 'разработчиком', top: '8rem', left: '2rem' },
  { label: 'видеографом', top: '14rem', left: '6rem' },
  { label: 'моушн дизайнером', top: '6rem', left: '20rem' },
  { label: 'режиссёром', top: '20rem', left: '3rem' },
  { label: '3D-шником', top: '12rem', left: '22rem' },
  { label: 'фотографом', top: '19rem', left: '19rem' },
];

export const CombGrip: React.FC = () => {
  return (
    <div className="h-full w-full relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src="/images/comb-surf.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Top-left: header */}
      <div className="absolute top-12 left-12 z-20">
        <AnimatedBlock delay={0.1}>
          <h2 className="font-serif text-8xl text-retro-text mb-6">
            Держаться<br/>за гребень
          </h2>
        </AnimatedBlock>
        <AnimatedBlock delay={0.1}>
          <h3 className="font-sans text-4xl text-retro-dim mb-6">
            Быть чуть чуть
          </h3>
        </AnimatedBlock>
      </div>

      {/* Skills as tags — scattered in top-left, общий отступ сверху */}
      <div className="absolute top-64 left-0 w-full h-full z-20">
        {skills.map((skill, i) => (
          <AnimatedBlock key={skill.label} delay={0.2 + i * 0.08}>
            <span
              className="absolute font-sans text-3xl text-white border-2 border-white rounded-full px-6 py-3 bg-transparent whitespace-nowrap"
              style={{ top: skill.top, left: skill.left }}
            >
              {skill.label}
            </span>
          </AnimatedBlock>
        ))}
      </div>
    </div>
  );
};
