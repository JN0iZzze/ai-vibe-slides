import React from 'react';

export type ThemeName = 'poster-red' | 'poster-blue' | 'poster-glided';

export interface SlideConfig {
  component: React.ComponentType;
  theme: ThemeName;
}
