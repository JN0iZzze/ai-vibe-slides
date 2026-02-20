import { useEffect, useState } from 'react';
import type { SlideConfig } from '../types/slide';

// Глобальный кэш для отслеживания уже загруженных ресурсов
const preloadedCache = new Set<string>();

/**
 * Предзагружает изображение в браузерный кэш с отслеживанием прогресса
 */
const preloadImage = (src: string, onLoad: () => void, onError: () => void) => {
  if (preloadedCache.has(src)) {
    onLoad();
    return;
  }

  const img = new Image();
  
  img.onload = () => {
    preloadedCache.add(src);
    onLoad();
  };
  
  img.onerror = () => {
    preloadedCache.add(src); // Добавляем в кэш даже при ошибке, чтобы не пытаться загрузить снова
    onError();
  };
  
  img.src = src;
};

/**
 * Предзагружает видео в браузерный кэш с отслеживанием прогресса
 */
const preloadVideo = (src: string, onLoad: () => void, onError: () => void) => {
  if (preloadedCache.has(src)) {
    onLoad();
    return;
  }

  const video = document.createElement('video');
  video.preload = 'auto';
  
  video.addEventListener('loadeddata', () => {
    preloadedCache.add(src);
    onLoad();
  }, { once: true });
  
  video.addEventListener('error', () => {
    preloadedCache.add(src); // Добавляем в кэш даже при ошибке
    onError();
  }, { once: true });
  
  video.src = src;
  video.load(); // Запускает буферизацию
};

/**
 * Хук для предзагрузки всех ассетов слайдов с отслеживанием прогресса
 * 
 * Предзагружает все ресурсы из всех слайдов при монтировании,
 * чтобы обеспечить плавное переключение без задержек.
 * 
 * @param slides - Массив конфигураций слайдов
 * @returns Объект с прогрессом загрузки: { progress: number (0-1), isComplete: boolean }
 */
export const useSlidePreloader = (slides: SlideConfig[]) => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    // Собираем все уникальные URL из всех слайдов
    const allAssets = new Set<string>();
    
    slides.forEach(slide => {
      const assets = slide.preloadAssets || [];
      assets.forEach(asset => {
        if (asset) {
          allAssets.add(asset);
        }
      });
    });

    const uniqueAssets = Array.from(allAssets);
    const total = uniqueAssets.length;

    // Если нет ресурсов для загрузки, сразу помечаем как завершено
    if (total === 0) {
      setTotalCount(0);
      setLoadedCount(0);
      return;
    }

    setTotalCount(total);
    setLoadedCount(0);

    let currentLoaded = 0;

    // Функция для обновления прогресса
    const updateProgress = () => {
      currentLoaded++;
      setLoadedCount(currentLoaded);
    };

    // Загружаем все ресурсы
    uniqueAssets.forEach(src => {
      const isVideo = /\.(mp4|webm|mov)$/i.test(src);

      if (isVideo) {
        preloadVideo(src, updateProgress, updateProgress);
      } else {
        preloadImage(src, updateProgress, updateProgress);
      }
    });
  }, [slides]);

  // Вычисляем прогресс: от 0 до 1
  const progress = totalCount === 0 ? 1 : loadedCount / totalCount;
  const isComplete = totalCount > 0 && loadedCount === totalCount;

  return {
    progress,
    isComplete,
  };
};
