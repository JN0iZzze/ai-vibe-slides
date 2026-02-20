import React, { useEffect, useState } from 'react';

interface HiddenPreloaderProps {
  assets: string[];
}

export const HiddenPreloader: React.FC<HiddenPreloaderProps> = ({ assets }) => {
  // Используем Set для дедупликации, если один и тот же ассет используется несколько раз
  const uniqueAssets = Array.from(new Set(assets));

  if (uniqueAssets.length === 0) {
    return null;
  }

  return (
    <div 
      style={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        width: '100%', 
        height: '2px', // Увеличил высоту для теста
        display: 'flex',
        pointerEvents: 'none',
        zIndex: 999, // Максимальный z-index
        opacity: 1, // Полная видимость
      }} 
      aria-hidden="true"
    >
      {uniqueAssets.map((src) => {
        const isVideo = /\.(mp4|webm|mov)$/i.test(src);

        if (isVideo) {
          return (
            <video
              key={src}
              src={src}
              preload="auto"
              muted
              playsInline
              style={{ width: '2px', height: '2px', objectFit: 'cover' }}
              ref={(el) => {
                if (el) el.load();
              }}
            />
          );
        }

        return (
          <img
            key={src}
            src={src}
            alt=""
            decoding="async"
            style={{ width: '2px', height: '2px', objectFit: 'cover' }}
          />
        );
      })}
    </div>
  );
};
