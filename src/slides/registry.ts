import type { SlideConfig } from '../types/slide';
import { Intro } from './content/Intro';
import { AboutMe } from './content/AboutMe';
import { HowDidWeGetHere } from './content/HowDidWeGetHere';
import { ToolsSlide } from './content/ToolsSlide';
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
import { AgenticWorkflowResultPrompt } from './content/AgenticWorkflowResultPrompt';
import { AgenticWorkflowResultGrid } from './content/AgenticWorkflowResultGrid';
import { ReasoningModelsSlide } from './content/ReasoningModelsSlide';
import { InterfaceLoop } from './content/InterfaceLoop';
import { MkdirSlide } from './content/MkdirSlide';
import { CombShaped } from './content/CombShaped';
import { ToolsGrowthSlide } from './content/ToolsGrowthSlide';
import { BigFour } from './content/BigFour';
import { NanoBananaProCase } from './content/NanoBananaProCase';
import { ThinkingModeExample } from './content/ThinkingModeExample';
import { StructuredPrompts } from './content/StructuredPrompts';
import { LongStructuredPromptSlide } from './content/LongStructuredPromptSlide';
import { JsonImagesSlide } from './content/JsonImagesSlide';
import { PhotoPromptSlide } from './content/PhotoPromptSlide';
import { JsonPrompting } from './content/JsonPrompting';
import { ReferenceTypes } from './content/ReferenceTypes';
import { Multilingualism } from './content/Multilingualism';
import { StyleTransfer } from './content/StyleTransfer';
import { Identity } from './content/Identity';
import { IdentityGridSlide } from './content/IdentityGridSlide';
import { OrderSlide } from './content/OrderSlide';
import { Photorealism } from './content/Photorealism';
import { CompositionSlide } from './content/CompositionSlide';
import { TexturingModeling } from './content/TexturingModeling';
import { SpeakerChannelSlide } from './content/SpeakerChannelSlide';
import { Grid4Slide } from './content/Grid4Slide';
import { ProWorkflow } from './content/ProWorkflow';
import { SvgTo3dWorkflow } from './content/SvgTo3dWorkflow';
import { TextureWorkflowSlide } from './content/TextureWorkflowSlide';
import { GradientWorkflowSlide } from './content/GradientWorkflowSlide';
import { WorkflowComparison } from './content/WorkflowComparison';
import { FlouxPro } from './content/FlouxPro';
import { FigmaAlfa } from './content/FigmaAlfa';
import { AlfaVideo } from './content/AlfaVideo';
import { StyleTransferLettersSlide } from './content/StyleTransferLettersSlide';
import { BHSAD } from './content/BHSAD';
import { BHSADVideo } from './content/BHSADVideo';
import { ReferenceAnalysisSlide } from './content/ReferenceAnalysisSlide';
import { RefiningPromptsSlide } from './content/RefiningPromptsSlide';
import { CameraAnglesSlide } from './content/CameraAnglesSlide';
import { ProjectNeoSlide } from './content/ProjectNeoSlide';
import { FlouxVideoSlide } from './content/FlouxVideoSlide';
import { AlfaWorkflowSlide } from './content/AlfaWorkflowSlide';
import { AlfaTexturingSlide } from './content/AlfaTexturingSlide';
import { AlfaDetailsSlide } from './content/AlfaDetailsSlide';
import { AlfaMarkersSlide } from './content/AlfaMarkersSlide';
import { AlfaVideoGenSlide } from './content/AlfaVideoGenSlide';
import { NeuralChoiceSlide } from './content/NeuralChoiceSlide';
import { BenchmarksSlide } from './content/BenchmarksSlide';
import { StyledModelsSlide } from './content/StyledModelsSlide';
import { SeedreamGallerySlide } from './content/SeedreamGallerySlide';
import { GrokGallerySlide } from './content/GrokGallerySlide';
import { GenComparisonSlide } from './content/GenComparisonSlide';
import { HiigsfieldSlide } from './content/HiigsfieldSlide';
import { NodeBasedSlide } from './content/NodeBasedSlide';
import { FlouxDemoSlide } from './content/FlouxDemoSlide';
import { PhotoRealismComparisonSlide } from './content/PhotoRealismComparisonSlide';
import { NanoBananaComparisonSlide } from './content/NanoBananaComparisonSlide';
import { ReferenceContextSlide } from './content/ReferenceContextSlide';
import { DisclaimerSlide } from './content/DisclaimerSlide';
import { GamepadStyleTransferSlide } from './content/GamepadStyleTransferSlide';
import { TransferDemogorgonSlide } from './content/TransferDemogorgonSlide';
import { MaxWorkflowSlide } from './content/MaxWorkflowSlide';
import { FlouxWorkflowSlide } from './content/FlouxWorkflowSlide';
import { GlassLogoVideoSlide } from './content/GlassLogoVideoSlide';
import { InteractiveSlide } from './content/InteractiveSlide';
import { InteractiveGeminiResultSlide } from './content/InteractiveGeminiResultSlide';
import { CombSkillsPollSlide } from './content/CombSkillsPollSlide';
import { CombSkillsGeminiResultSlide } from './content/CombSkillsGeminiResultSlide';

// Unused but available for future use or alternative flows
import { DiffusionVsReasoning } from './content/DiffusionVsReasoning';
import { SeedreamCase } from './content/SeedreamCase';

export const slides: SlideConfig[] = [
  // Intro / Fast changes
  { component: Intro, theme: 'poster-glided', title: 'Intro', preloadAssets: ['/bg-intro.png'] },

  // Обо мне
  { component: AboutMe, theme: 'poster-glided', title: 'Обо мне' },

  // Мем про управление нейронками
  { component: MemeNeuralControl, theme: 'poster-glided', title: 'Мем про нейронки', preloadAssets: ['/mem.jpg'] },

  // Interactive Poll Slide
  { component: InteractiveSlide, theme: 'poster-glided', title: 'Интерактивный опрос' },

  // Gemini Analysis: Design profession poll
  { component: InteractiveGeminiResultSlide, theme: 'poster-glided', title: 'Анализ: Профессии в дизайне' },

  // Floux.pro
  { component: FlouxPro, theme: 'poster-glided', title: 'Floux.pro', preloadAssets: ['/floux-screen.png'] },

  // Как менялось кол-во нейросетей для графики за последние 4 года 
  { component: ToolsGrowthSlide, theme: 'poster-red', title: 'Рост инструментов' },

  // CLI -> LUI
  { component: InterfaceLoop, theme: 'poster-red', title: 'CLI → LUI', preloadAssets: ['/images/cli.png', '/images/lui.png'] },

  { component: HowDidWeGetHere, theme: 'poster-glided', title: 'Как мы сюда пришли' },

  // Сложные интерфейсы (Adobe, Blender)
  { component: ProInterfacesScreens, theme: 'poster-red', title: 'Профессиональные интерфейсы' },

  // Democratization
  { component: DemocratizationInterfaces, theme: 'poster-blue', title: 'Демократизация', preloadAssets: ['/images/democ.png'] },

  // Основной инструмент в 2026 — текст
  { component: TextAsMainTool2026, theme: 'poster-red', title: 'Текст как инструмент' },

  // T-shaped / Comb-shaped — навыки профессионала будущего и настоящего
  { component: CombShaped, theme: 'poster-blue', title: 'Comb-shaped', preloadAssets: ['/images/comb.png'] },

  // Interactive Poll: Comb-shaped skills
  { component: CombSkillsPollSlide, theme: 'poster-glided', title: 'Опрос: Навыки Comb-shaped дизайнера' },

  // Gemini Analysis: Comb-shaped skills
  { component: CombSkillsGeminiResultSlide, theme: 'poster-glided', title: 'Анализ: Навыки Comb-shaped дизайнера' },

  // Держаться за гребень — навыки Comb-shaped
  { component: CombGrip, theme: 'poster-blue', title: 'Держаться за гребень', preloadAssets: ['/images/comb-surf.jpg'] },

  // Mkdir — сложность текста, который понимает ИИ в любом формате
  // { component: MkdirSlide, theme: 'poster-glided', title: 'Mkdir' },

  // Tools
  { component: ToolsSlide, theme: 'poster-glided', title: 'Tools' },

  // Начало 2025 года и что случилось в 2025 году
  { component: Early2025, theme: 'poster-glided', title: 'Начало 2025', preloadAssets: ['/bg/bg1.png'] },

  // Top AI 2026 (Big Four)
  { component: BigFour, theme: 'poster-red', title: 'Большая шестерка' },

    // Hiigsfield
  { component: HiigsfieldSlide, theme: 'poster-glided', title: 'Higgsfield', preloadAssets: ['/images/higgsfield.png'] },

  // Node-based системы
  { component: NodeBasedSlide, theme: 'poster-glided', title: 'Node-based системы', preloadAssets: ['/images/nodes/freepik.png', '/images/nodes/krea.png', '/images/nodes/weavy.png'] },

  // Демо Floux.pro
  { component: FlouxDemoSlide, theme: 'poster-glided', title: 'Демо Floux.pro', preloadAssets: ['/flow.mp4'] },

  // Nano Banana / NB Pro
  { component: NanoBananaPro, theme: 'poster-blue', title: 'Nano Banana Pro', preloadAssets: ['/bg/banana2.png'] },

  // Сравнение версий Nano Banana
  { component: NanoBananaComparisonSlide, theme: 'poster-blue', title: 'Сравнение версий Nano Banana' },

  // Nano Banana как агент — схема работы
  { component: AgenticWorkflow, theme: 'poster-red', title: 'Агентный workflow' },

  // Nano Banana как агент — результат
  { component: AgenticWorkflowResult, theme: 'poster-glided', title: 'Результат агента', preloadAssets: ['/images/stranger.jpg'] },

  // Nano Banana: промпт + три результата
  { component: AgenticWorkflowResultPrompt, theme: 'poster-glided', title: 'Промпт и результаты', preloadAssets: ['/images/nbpro/001.jpg', '/images/nbpro/002.jpg', '/images/nbpro/003.jpg'] },

  // Nano Banana: грид результатов (без промпта)
  { component: AgenticWorkflowResultGrid, theme: 'poster-glided', title: 'Грид результатов', preloadAssets: ['/images/nbpro/flux2.png', '/images/nbpro/gptimage1_5', '/images/nbpro/seedream4_5.jpeg'] },

  // Reasoning модели
  { component: ReasoningModelsSlide, theme: 'poster-glided', title: 'Reasoning модели' },

  // Use Cases (Thinking Mode)
  // { component: ThinkingModeExample, theme: 'poster-blue' },

  // Обложка про Мультиреференсность
  { component: MultireferenceCover, theme: 'poster-glided', title: 'Мультиреференсность', preloadAssets: ['/images/riding.png'] },

  // Лимиты референсов
  { component: ReferenceCounts, theme: 'poster-glided', title: 'Лимиты референсов' },

  // Управление референсами
  { component: ReferenceContextSlide, theme: 'poster-blue', title: 'Управление референсами' },

  // Как можно использовать референсы?
  { component: ReferenceTypes, theme: 'poster-red', title: 'Типы референсов' },

  // Дисклеймер
  { component: DisclaimerSlide, theme: 'poster-glided', title: 'Дисклеймер' },

  // Identity
  { component: Identity, theme: 'poster-glided', title: 'Identity', preloadAssets: ['/bg/bg1.png'] },

  // Identity grid (3 images)
  { component: IdentityGridSlide, theme: 'poster-glided', title: 'Identity Grid', preloadAssets: ['/images/photorealism/flux_2_pro.png', '/images/photorealism/gpt_image_1_5.png', '/images/photorealism/seedream_v4_5.png'] },

  // Photorealism
  { component: Photorealism, theme: 'poster-red', title: 'Фотореализм', preloadAssets: ['/images/fashion/person.png', '/images/fashion/ref.png', '/images/fashion/out.png'] },

  // Порядок изображений
  { component: OrderSlide, theme: 'poster-glided', title: 'Порядок изображений', preloadAssets: ['/images/order/001.png', '/images/order/002.png'] },

  // Анализ референсов
  { component: ReferenceAnalysisSlide, theme: 'poster-red', title: 'Анализ референсов', preloadAssets: ['/images/face/001.jpg', '/images/face/002.jpg'] },

  // Уточняющие промпты
  { component: RefiningPromptsSlide, theme: 'poster-glided', title: 'Уточняющие промпты' },

  // Composition (images from composition folder)
  { component: CompositionSlide, theme: 'poster-red', title: 'Композиция', preloadAssets: ['/images/composition/person.png', '/images/composition/person1.png', '/images/composition/ref.jpg', '/images/composition/out.png'] },

  // Ракурсы и углы камеры
  { component: CameraAnglesSlide, theme: 'poster-red', title: 'Ракурсы и углы камеры', preloadAssets: ['/images/angles/001.png', '/images/angles/002.png'] },

  // Style Transfer
  { component: StyleTransfer, theme: 'poster-blue', title: 'Style Transfer', preloadAssets: ['/style-transfer.jpg'] },

  // Перенос стиля геймпада
{ component: GamepadStyleTransferSlide, theme: 'poster-red', title: 'Перенос стиля геймпада', preloadAssets: ['/images/yndx/ref.png', '/images/yndx/gampad.png'] },

  // Demogorgon style transfer
  { component: TransferDemogorgonSlide, theme: 'poster-red', title: 'Перенос стиля Demogorgon', preloadAssets: ['/images/transfer.png'] },

  // Перенос стиля (БВШД)
  { component: StyleTransferLettersSlide, theme: 'poster-red', title: 'Перенос стиля', preloadAssets: ['/images/transfer/text.png', '/images/transfer/ref.jpg'] },

  // BHSAD
  { component: BHSAD, theme: 'poster-blue', title: 'BHSAD', preloadAssets: ['/bg/bhsad.png'] },

  // Воркфлоу Макса Кукушкина
  { component: MaxWorkflowSlide, theme: 'poster-blue', title: 'Воркфлоу Макса Кукушкина', preloadAssets: ['/images/max-tg.jpg', '/images/max-style/ref.png', '/images/max-style/ref2.png', '/images/max-style/out.png'] },

  // BHSAD Video
  { component: BHSADVideo, theme: 'poster-blue', title: 'BHSAD Video', preloadAssets: ['/bhsad_video.mp4'] },

  // Texturing & Modeling
  { component: TexturingModeling, theme: 'poster-red', title: 'Текстурирование', preloadAssets: ['/images/creme.png'] },

  // Спикер / Канал
  { component: SpeakerChannelSlide, theme: 'poster-blue', title: 'Спикер / Канал', preloadAssets: ['/images/max-tg.jpg', '/images/max.png'] },

  // Сетка 4 картинок
  { component: Grid4Slide, theme: 'poster-blue', title: 'Сетка 4 картинок', preloadAssets: ['/images/max/001.jpg', '/images/max/002.jpg', '/images/max/003.jpg', '/images/max/004.mp4'] },

  // Pro Workflow
  { component: ProWorkflow, theme: 'poster-blue', title: 'Pro Workflow' },

  // Project Neo
  { component: ProjectNeoSlide, theme: 'poster-blue', title: 'Project Neo', preloadAssets: ['/images/neo.png'] },

  // Воркфлоу Floux.pro
  { component: FlouxWorkflowSlide, theme: 'poster-blue', title: 'Воркфлоу Floux.pro', preloadAssets: ['/images/floux-extrude.png'] },

  // SVG → 3D Workflow
  { component: SvgTo3dWorkflow, theme: 'poster-blue', title: 'SVG → 3D' },

  // Texture workflow
  { component: TextureWorkflowSlide, theme: 'poster-blue', title: 'Texture workflow', preloadAssets: ['/images/workflow/002.png', '/images/workflow/003.png'] },

  // Видео со стеклянным логотипом
  { component: GlassLogoVideoSlide, theme: 'poster-blue', title: 'Видео со стеклянным логотипом', preloadAssets: ['/floux-stranger.mp4'] },

  // Workflow Comparison
  { component: WorkflowComparison, theme: 'poster-blue', title: 'Сравнение workflow', preloadAssets: ['/images/workflow/extra-v.mp4', '/images/workflow/extra1.png', '/images/workflow/extra2.png'] },

  // Gradient workflow
  { component: GradientWorkflowSlide, theme: 'poster-blue', title: 'Gradient', preloadAssets: ['/images/workflow/gradient.png'] },

  // Floux Video
  { component: FlouxVideoSlide, theme: 'poster-glided', title: 'Floux Video', preloadAssets: ['/floux.mp4'] },

  // Alfa Bank Case
  { component: FigmaAlfa, theme: 'poster-red', title: 'Alfa Bank Case', preloadAssets: ['/images/figma-alfa.png'] },

  // Alfa Video
  { component: AlfaVideo, theme: 'poster-blue', title: 'Alfa Video', preloadAssets: ['/alfa_video.mp4'] },

  // Альфабанк: Воркфлоу
  { component: AlfaWorkflowSlide, theme: 'poster-glided', title: 'Альфабанк: Воркфлоу', preloadAssets: ['/images/alfa/workflow.png'] },

  // Альфабанк: Текстурирование карты
  { component: AlfaTexturingSlide, theme: 'poster-red', title: 'Альфабанк: Текстурирование карты', preloadAssets: ['/images/alfa/cover.png', '/images/alfa/svg.png', '/images/alfa/out.jpg'] },

  // Альфабанк: Добавление деталей
  { component: AlfaDetailsSlide, theme: 'poster-red', title: 'Альфабанк: Добавление деталей', preloadAssets: ['/images/alfa/marks.png', '/images/alfa/products.png', '/images/alfa/out-details-marks.jpg', '/images/alfa/out-details-no-marks.jpg'] },

  // Альфабанк: Маркеры на фото
  //{ component: AlfaMarkersSlide, theme: 'poster-red', title: 'Альфабанк: Маркеры на фото' },

  // Альфабанк: Видео генерация
  { component: AlfaVideoGenSlide, theme: 'poster-red', title: 'Альфабанк: Видео генерация', preloadAssets: ['/images/alfa/kling1.png', '/images/alfa/kling2.png'] },

    // JSON-промптинг
  { component: JsonPrompting, theme: 'poster-blue', title: 'JSON-промптинг', preloadAssets: ['/bg/bg2.png'] },

  // Structured Prompts
  { component: StructuredPrompts, theme: 'poster-glided', title: 'Structured Prompts' },

  // Фото + промпт (заглушка)
  { component: PhotoPromptSlide, theme: 'poster-glided', title: 'Фото + промпт', preloadAssets: ['/images/composition/ref.jpg'] },

  // Long Structured Prompt (Auto-scroll)
  { component: LongStructuredPromptSlide, theme: 'poster-glided', title: 'Длинный JSON промпт' },

  // JSON Images
  { component: JsonImagesSlide, theme: 'poster-glided', title: 'Результат JSON промпта', preloadAssets: ['/images/json/001.jpg', '/images/json/002.jpg', '/images/composition/ref.jpg'] },

  // Когда какую нейронку использовать?
  { component: NeuralChoiceSlide, theme: 'poster-blue', title: 'Когда какую нейронку использовать?' },

  // Бенчмарки
  { component: BenchmarksSlide, theme: 'poster-blue', title: 'arena.ai', preloadAssets: ['/images/arena.png'] },

  // Сравнение генераций
  { component: GenComparisonSlide, theme: 'poster-red', title: 'Сравнение генераций', preloadAssets: ['/images/compare_styled/flux_2_pro.png', '/images/compare_styled/gpt_image_1_5.png', '/images/compare_styled/midjourney.png', '/images/compare_styled/nano_banana_flash.png', '/images/compare_styled/nano_banana_pro.png', '/images/compare_styled/seedream_v4_5.png'] },

    // Сравнение генераций
  { component: StyledModelsSlide, theme: 'poster-red', title: 'Альтернативные модели' },

  // Seedream Gallery
  { component: SeedreamGallerySlide, theme: 'poster-red', title: 'Seedream Gallery', preloadAssets: ['/images/seedream/001.jpg', '/images/seedream/002.jpg', '/images/seedream/003.jpg'] },

  // Grok Gallery
  { component: GrokGallerySlide, theme: 'poster-red', title: 'Grok Gallery', preloadAssets: ['/images/grok/001.jpg', '/images/grok/002.jpg', '/images/grok/003.jpg', '/images/grok/004.jpg', '/images/grok/005.jpg', '/images/grok/006.jpg'] },
];
