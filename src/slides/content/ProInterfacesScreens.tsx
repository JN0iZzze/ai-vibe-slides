import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

export const ProInterfacesScreens: React.FC = () => {
  return (
    <div className="h-full w-full relative">
      <AnimatedBlock delay={0.1} className="absolute top-8 right-16 bottom-8 left-48">
        <img 
          src="/images/tools/001.png" 
          alt="" 
          className="w-full h-full object-contain"
        />
      </AnimatedBlock>
      <AnimatedBlock delay={0.3} className="absolute left-16 top-0 h-full">
        <img 
          src="/images/tools/002.png" 
          alt="" 
          className="h-full object-contain"
          style={{ width: '800px' }}
        />
      </AnimatedBlock>
    </div>
  );
};
