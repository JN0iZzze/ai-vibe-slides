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
    <div style={{ display: 'none' }} aria-hidden="true">
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
              // Небольшой хак: запускаем загрузку, но не воспроизведение
              onLoadedData={(e) => {
                // Можно добавить логику, если нужно знать, что загрузилось
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
