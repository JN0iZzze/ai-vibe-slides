import type { SlideConfig } from '../types/slide';
import { BentoGallerySlide } from './templates/BentoGallerySlide';
import { BentoGridSlide } from './templates/BentoGridSlide';
import { SimpleCenterSlide } from './templates/SimpleCenterSlide';
import { SplitCardsSlide } from './templates/SplitCardsSlide';
import { SplitContrastSlide } from './templates/SplitContrastSlide';
import { SplitImageSlide } from './templates/SplitImageSlide';
import { TerminalSlide } from './templates/TerminalSlide';
import { ThreeColumnSlide } from './templates/ThreeColumnSlide';
import { TitleSlide } from './templates/TitleSlide';
import { PosterCoverSlide } from './templates/PosterCoverSlide';
import { PosterCenterSlide } from './templates/PosterCenterSlide';
import { PosterGridSlide } from './templates/PosterGridSlide';
import { SimpleChartSlide } from './templates/SimpleChartSlide';

import { NeuralTaskSplitSlide } from './templates/NeuralTaskSplitSlide';
import { NeuralTaskSplitSlideIcons } from './templates/NeuralTaskSplitSlideIcons';

export const templates: SlideConfig[] = [
  { component: SimpleChartSlide, theme: 'poster-blue' },
  { component: PosterCoverSlide, theme: 'poster-red' },
  { component: PosterCenterSlide, theme: 'poster-blue' },
  { component: PosterGridSlide, theme: 'poster-glided' },
  { component: TitleSlide, theme: 'poster-red' },
  { component: SimpleCenterSlide, theme: 'poster-blue' },
  { component: ThreeColumnSlide, theme: 'poster-glided' },
  { component: SplitContrastSlide, theme: 'poster-red' },
  { component: SplitCardsSlide, theme: 'poster-blue' },
  { component: SplitImageSlide, theme: 'poster-glided' },
  { component: BentoGridSlide, theme: 'poster-red' },
  { component: BentoGallerySlide, theme: 'poster-blue' },
  { component: TerminalSlide, theme: 'poster-glided' },
  { component: NeuralTaskSplitSlide, theme: 'poster-glided' },
  { component: NeuralTaskSplitSlideIcons, theme: 'poster-glided' },
];
