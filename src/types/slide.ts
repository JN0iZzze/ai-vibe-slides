import React from 'react';

export type ThemeName = 'poster-red' | 'poster-blue' | 'poster-glided';

export interface SlideConfig {
  component: React.ComponentType;
  theme: ThemeName;
  /**
   * Краткое название слайда для отображения в меню.
   */
  title?: string;
  /**
   * Список путей к ресурсам (изображения, видео), которые нужно
   * предзагрузить перед показом этого слайда.
   * Пути указываются относительно корня сайта (например, `/images/foo.png`).
   */
  preloadAssets?: string[];
}
