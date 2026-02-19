import type { SlideConfig } from '../types/slide';
import { Intro } from './content/Intro';
import { AboutMe } from './content/AboutMe';
import { HowDidWeGetHere } from './content/HowDidWeGetHere';
import { Early2025 } from './content/Early2025';
import { NanoBananaPro } from './content/NanoBananaPro';
import { DemocratizationInterfaces } from './content/DemocratizationInterfaces';
import { ProInterfacesScreens } from './content/ProInterfacesScreens';
import { TextAsMainTool2026 } from './content/TextAsMainTool2026';
import { MemeNeuralControl } from './content/MemeNeuralControl';
import { CombGrip } from './content/CombGrip';
import { MultireferenceCover } from './content/MultireferenceCover';
import { ReferenceCounts } from './content/ReferenceCounts';
import { AgenticWorkflow } from './content/AgenticWorkflow';
import { AgenticWorkflowResult } from './content/AgenticWorkflowResult';
import { InterfaceLoop } from './content/InterfaceLoop';
import { MkdirSlide } from './content/MkdirSlide';
import { CombShaped } from './content/CombShaped';
import { ToolsGrowthSlide } from './content/ToolsGrowthSlide';
import { BigFour } from './content/BigFour';
import { NanoBananaProCase } from './content/NanoBananaProCase';
import { ThinkingModeExample } from './content/ThinkingModeExample';
import { StructuredPrompts } from './content/StructuredPrompts';
import { JsonPrompting } from './content/JsonPrompting';
import { ReferenceTypes } from './content/ReferenceTypes';
import { Multilingualism } from './content/Multilingualism';
import { StyleTransfer } from './content/StyleTransfer';
import { Photorealism } from './content/Photorealism';
import { CompositionSlide } from './content/CompositionSlide';
import { TexturingModeling } from './content/TexturingModeling';
import { SpeakerChannelSlide } from './content/SpeakerChannelSlide';
import { Grid4Slide } from './content/Grid4Slide';
import { ProWorkflow } from './content/ProWorkflow';
import { FlouxPro } from './content/FlouxPro';
import { FigmaAlfa } from './content/FigmaAlfa';
import { AlfaVideo } from './content/AlfaVideo';
import { StyleTransferLettersSlide } from './content/StyleTransferLettersSlide';
import { BHSAD } from './content/BHSAD';
import { BHSADVideo } from './content/BHSADVideo';

// Unused but available for future use or alternative flows
import { DiffusionVsReasoning } from './content/DiffusionVsReasoning';
import { SeedreamCase } from './content/SeedreamCase';

export const slides: SlideConfig[] = [
  // Intro / Fast changes
  { component: Intro, theme: 'poster-red' },

  // Обо мне
  { component: AboutMe, theme: 'poster-glided' },

  // Floux.pro
  { component: FlouxPro, theme: 'poster-blue' },

  // Как менялось кол-во нейросетей для графики за последние 4 года 
  { component: ToolsGrowthSlide, theme: 'poster-red' },

  // CLI -> LUI
  { component: InterfaceLoop, theme: 'poster-red' },

  { component: HowDidWeGetHere, theme: 'poster-glided' },

  // Сложные интерфейсы (Adobe, Blender)
  { component: ProInterfacesScreens, theme: 'poster-blue' },

  // Democratization
  { component: DemocratizationInterfaces, theme: 'poster-blue' },

  // Основной инструмент в 2026 — текст
  { component: TextAsMainTool2026, theme: 'poster-red' },

  // Мем про управление нейронками
  { component: MemeNeuralControl, theme: 'poster-glided' },

  // T-shaped / Comb-shaped — навыки профессионала будущего и настоящего
  { component: CombShaped, theme: 'poster-blue' },

  // Держаться за гребень — навыки Comb-shaped
  { component: CombGrip, theme: 'poster-blue' },

  // Mkdir — сложность текста, который понимает ИИ в любом формате
  { component: MkdirSlide, theme: 'poster-glided' },

  // Начало 2025 года и что случилось в 2025 году
  { component: Early2025, theme: 'poster-glided' },

  // Nano Banana / NB Pro
  { component: NanoBananaPro, theme: 'poster-blue' },

  // Top AI 2026 (Big Four)
  { component: BigFour, theme: 'poster-red' },

  // Nano Banana как агент — схема работы
  { component: AgenticWorkflow, theme: 'poster-red' },

  // Nano Banana как агент — результат
  { component: AgenticWorkflowResult, theme: 'poster-glided' },

  // Use Cases (Thinking Mode)
  // { component: ThinkingModeExample, theme: 'poster-blue' },

  // JSON-промптинг
  { component: JsonPrompting, theme: 'poster-blue' },

  // Structured Prompts
  { component: StructuredPrompts, theme: 'poster-glided' },

  // Обложка про Мультиреференсность
  { component: MultireferenceCover, theme: 'poster-glided' },

  // Лимиты референсов
  { component: ReferenceCounts, theme: 'poster-glided' },

  // Как можно использовать референсы?
  { component: ReferenceTypes, theme: 'poster-red' },

  // Style Transfer
  { component: StyleTransfer, theme: 'poster-red' },

  // Photorealism
  { component: Photorealism, theme: 'poster-red' },

  // Composition (images from composition folder)
  { component: CompositionSlide, theme: 'poster-red' },

  // Texturing & Modeling
  { component: TexturingModeling, theme: 'poster-red' },

  // Спикер / Канал
  { component: SpeakerChannelSlide, theme: 'poster-blue' },

  // Сетка 4 картинок
  { component: Grid4Slide, theme: 'poster-blue' },

  // Pro Workflow
  { component: ProWorkflow, theme: 'poster-blue' },

  // Alfa Bank Case
  { component: FigmaAlfa, theme: 'poster-red' },

  // Alfa Video
  { component: AlfaVideo, theme: 'poster-blue' },

  // Перенос стиля (БВШД)
  { component: StyleTransferLettersSlide, theme: 'poster-red' },

  // BHSAD
  { component: BHSAD, theme: 'poster-blue' },

  // BHSAD Video
  { component: BHSADVideo, theme: 'poster-blue' },
];
