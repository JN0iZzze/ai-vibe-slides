import React from 'react';
import { AnimatedBlock } from '../../components/AnimatedBlock';
import { motion } from 'framer-motion';

interface ChartData {
  label: string;
  value: number; // 0 to 100
  displayValue?: string;
  highlight?: boolean;
}

// Example data if none provided
const defaultData: ChartData[] = [
  { label: 'DALL-E 3', value: 45, displayValue: '45%' },
  { label: 'Midjourney v6', value: 65, displayValue: '65%' },
  { label: 'Flux.1', value: 80, displayValue: '80%' },
  { label: 'Nano Banana Pro', value: 98, displayValue: '98%', highlight: true },
];

export const SimpleChartSlide: React.FC<{ title?: string; data?: ChartData[] }> = ({
  title = "Benchmark 2026",
  data = defaultData
}) => {
  return (
    <div className="h-full w-full p-16 flex flex-col justify-center items-center">
      <AnimatedBlock delay={0.1} className="w-full flex flex-col items-center">
        <h2 className="font-serif text-8xl mb-20 text-retro-text text-center">{title}</h2>
      </AnimatedBlock>

      <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
        {data.map((item, index) => (
          <AnimatedBlock key={index} delay={0.2 + index * 0.1} className="flex items-start gap-12">
            {/* Left Label — фиксированная ширина */}
            <div className="w-48 shrink-0 text-right flex flex-col justify-center">
              <span className={`font-sans text-xl font-bold uppercase tracking-widest ${item.highlight ? 'text-retro-text' : 'text-retro-dim'}`}>
                {item.label}
              </span>
            </div>

            {/* Center: Bar — без бордера, ограниченная ширина */}
            <div className="flex-1 min-w-0 max-w-4xl flex flex-col justify-center">
              <div className="h-14 w-full bg-retro-dim/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${item.value}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                  className={`h-full rounded-full ${
                    item.highlight
                      ? 'bg-retro-text shadow-[0_0_30px_var(--color-retro-text)]'
                      : 'bg-retro-dim/50'
                  }`}
                />
              </div>
            </div>

            {/* Right: Value — фиксированная ширина */}
            <div className="w-48 shrink-0 flex justify-center">
              <span className={`font-mono text-3xl font-bold ${item.highlight ? 'text-retro-text' : 'text-retro-dim'}`}>
                {item.displayValue}
              </span>
            </div>
          </AnimatedBlock>
        ))}
      </div>

      {/* Footer / Axis */}
      <AnimatedBlock delay={0.8} className="mt-12 border-t border-retro-dim/30 pt-6 w-full max-w-7xl mx-auto">
        <div className="flex justify-between text-retro-dim font-mono text-xl opacity-70">
          <span>0%</span>
          <span>Accuracy / Prompt Adherence</span>
          <span>100%</span>
        </div>
      </AnimatedBlock>
    </div>
  );
};
