import type { SlideConfig } from '../types/slide';
import { Vibe01Intro } from './vibecoding/Vibe01Intro';
import { Vibe02FigmaPrototypes } from './vibecoding/Vibe02FigmaPrototypes';
import { Vibe02ProcessColumns } from './vibecoding/Vibe02ProcessColumns';
import { Vibe02NewProcessColumns } from './vibecoding/Vibe02NewProcessColumns';
import { Vibe03NoFigmaDesign } from './vibecoding/Vibe03NoFigmaDesign';
import { Vibe04PersonalApps } from './vibecoding/Vibe04PersonalApps';
import { Vibe05NewWaveProducts } from './vibecoding/Vibe05NewWaveProducts';
import { Vibe06FutureSaaS } from './vibecoding/Vibe06FutureSaaS';
import { Vibe07CursorVsAll } from './vibecoding/Vibe07CursorVsAll';
import { Vibe07CursorScreenshot } from './vibecoding/Vibe07CursorScreenshot';
import { Vibe08WebStack } from './vibecoding/Vibe08WebStack';
import { Vibe08MobileStack } from './vibecoding/Vibe08MobileStack';
import { Vibe08QuoteReact } from './vibecoding/Vibe08QuoteReact';
import { Vibe09AiModels } from './vibecoding/Vibe09AiModels';
import { Vibe09ModelsModes } from './vibecoding/Vibe09ModelsModes';
import { Vibe10CursorModes } from './vibecoding/Vibe10CursorModes';
import { Vibe10PlanScreenshot } from './vibecoding/Vibe10PlanScreenshot';
import { Vibe11RulesContext } from './vibecoding/Vibe11RulesContext';
import { Vibe11MarkdownDocs } from './vibecoding/Vibe11MarkdownDocs';
import { Vibe12OccamsRazor } from './vibecoding/Vibe12OccamsRazor';

export const vibecodingSlides: SlideConfig[] = [
  { component: Vibe01Intro, theme: 'poster-glided', title: 'Вайбкодинг' },
  { component: Vibe02FigmaPrototypes, theme: 'poster-red', title: 'Кризис прототипирования' },
  { component: Vibe02ProcessColumns, theme: 'poster-blue', title: 'Старый процесс' },
  { component: Vibe02NewProcessColumns, theme: 'poster-glided', title: 'Новый процесс' },
  { component: Vibe03NoFigmaDesign, theme: 'poster-glided', title: 'No-Figma Design' },
  { component: Vibe05NewWaveProducts, theme: 'poster-red', title: 'Продукты новой волны' },
  { component: Vibe04PersonalApps, theme: 'poster-glided', title: 'Эра персональных приложений' },
  { component: Vibe06FutureSaaS, theme: 'poster-blue', title: 'Будущее SaaS' },
  { component: Vibe07CursorVsAll, theme: 'poster-glided', title: 'Cursor vs Figma Make / Lovable' },
  { component: Vibe07CursorScreenshot, theme: 'poster-glided', title: 'Cursor', preloadAssets: ['/images/vibe/cursor.png'] },
  { component: Vibe08WebStack, theme: 'poster-red', title: 'Web Стек' },
  { component: Vibe08MobileStack, theme: 'poster-glided', title: 'Mobile Стек' },
  { component: Vibe08QuoteReact, theme: 'poster-red', title: 'Цитата' },
  { component: Vibe09AiModels, theme: 'poster-glided', title: 'Claude / Gemini / GPT' },
  { component: Vibe09ModelsModes, theme: 'poster-blue', title: 'Models & Modes', preloadAssets: ['/images/vibe/models.png', '/images/vibe/modes.png'] },
  { component: Vibe12OccamsRazor, theme: 'poster-glided', title: 'Бритва Оккама' },
  { component: Vibe11RulesContext, theme: 'poster-blue', title: 'Правила и контекст' },
  { component: Vibe11MarkdownDocs, theme: 'poster-glided', title: 'Markdown как документация' },
  { component: Vibe10CursorModes, theme: 'poster-red', title: 'Agent / Plan / Debug / Ask' },
  { component: Vibe10PlanScreenshot, theme: 'poster-glided', title: 'Plan', preloadAssets: ['/images/vibe/plan.png'] },
];
