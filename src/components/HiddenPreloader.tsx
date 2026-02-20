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
        position: 'absolute', 
        width: '1px', 
        height: '1px', 
        padding: 0, 
        margin: '-1px', 
        overflow: 'hidden', 
        clip: 'rect(0, 0, 0, 0)', 
        whiteSpace: 'nowrap', 
        border: 0,
        opacity: 0.01, // Не 0, чтобы браузер точно считал элемент "видимым"
        pointerEvents: 'none',
        zIndex: -9999
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
              // Важно: для видео иногда нужно явно вызвать load()
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
            decoding="async" // Асинхронное декодирование, чтобы не блокировать UI
          />
        );
      })}
    </div>
  );
};
