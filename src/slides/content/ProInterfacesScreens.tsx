import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const ProInterfacesScreens: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-20">
      <AnimatedBlock delay={0.1}>
        <h1 className="font-serif text-7xl mb-8 text-center text-retro-text">
          Сложные интерфейсы
        </h1>
      </AnimatedBlock>
      <AnimatedBlock delay={0.3}>
        <p className="text-4xl opacity-80 max-w-4xl text-center font-sans text-retro-dim">
          Adobe, Blender и прочее — профессионалы привыкли работать со сложными UI
        </p>
      </AnimatedBlock>
    </div>
  );
};
