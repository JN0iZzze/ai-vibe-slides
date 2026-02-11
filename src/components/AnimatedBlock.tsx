import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedBlockProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

export const AnimatedBlock: React.FC<AnimatedBlockProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 20, opacity: 0 };
      case 'down':
        return { y: -20, opacity: 0 };
      case 'left':
        return { x: 20, opacity: 0 };
      case 'right':
        return { x: -20, opacity: 0 };
      case 'none':
      default:
        return { opacity: 0 };
    }
  };

  const initial = getInitialPosition();
  const animate = { x: 0, y: 0, opacity: 1 };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for smooth "apple-like" motion
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
