import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';

const nodes = [
  { src: '/images/nodes/freepik.png', name: 'Freepik Spaces' },
  { src: '/images/nodes/krea.png', name: 'Krea Nodes' },
  { src: '/images/nodes/weavy.png', name: 'Weavy.ai' },
];

export const NodeBasedSlide: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center py-8 px-8 overflow-hidden">
      <AnimatedBlock delay={0.1} className="w-full h-full flex flex-col justify-center gap-6">
        <h1 className="font-serif text-7xl text-retro-text text-center mb-4">Нодовые системы</h1>
        <div className="grid grid-cols-3 gap-6 w-full">
          {nodes.map((node) => (
            <div key={node.name} className="flex flex-col items-center rounded-[2rem] overflow-hidden">
              <div className="w-full h-[70vh] rounded-[2rem] overflow-hidden flex items-center justify-center">
                <img
                  src={node.src}
                  alt=""
                  className="max-w-full max-h-full object-contain rounded-[2rem]"
                />
              </div>
              <div className="font-mono text-3xl text-retro-dim uppercase tracking-widest mt-6">
                {node.name}
              </div>
            </div>
          ))}
        </div>
      </AnimatedBlock>
    </div>
  );
};
