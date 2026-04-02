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
// import { MkdirSlide } from './content/MkdirSlide';
import { CombShaped } from './content/CombShaped';
import { ToolsGrowthSlide } from './content/ToolsGrowthSlide';
import { BigFour } from './content/BigFour';
// import { NanoBananaProCase } from './content/NanoBananaProCase';
// import { ThinkingModeExample } from './content/ThinkingModeExample';
import { StructuredPrompts } from './content/StructuredPrompts';
import { LongStructuredPromptSlide } from './content/LongStructuredPromptSlide';
import { JsonImagesSlide } from './content/JsonImagesSlide';
import { PhotoPromptSlide } from './content/PhotoPromptSlide';
import { JsonPrompting } from './content/JsonPrompting';
import { JsonPromptingDefinitionSlide } from './content/JsonPromptingDefinitionSlide';
import { ReferenceTypes } from './content/ReferenceTypes';
// import { Multilingualism } from './content/Multilingualism';
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
// import { AlfaMarkersSlide } from './content/AlfaMarkersSlide';
import { AlfaVideoGenSlide } from './content/AlfaVideoGenSlide';
import { NeuralChoiceSlide } from './content/NeuralChoiceSlide';
import { EditingModelsSlide } from './content/EditingModelsSlide';
import { IllustrationModelsSlide } from './content/IllustrationModelsSlide';
import { PhotorealModelsSlide } from './content/PhotorealModelsSlide';
import { BenchmarksSlide } from './content/BenchmarksSlide';
import { SeedreamGallerySlide } from './content/SeedreamGallerySlide';
import { GrokGallerySlide } from './content/GrokGallerySlide';
import { PromoCodeSlide } from './content/PromoCodeSlide';
import { ThankYouSlide } from './content/ThankYouSlide';
import { HiigsfieldSlide } from './content/HiigsfieldSlide';
import { NodeBasedSlide } from './content/NodeBasedSlide';
import { FlouxDemoSlide } from './content/FlouxDemoSlide';
// import { PhotoRealismComparisonSlide } from './content/PhotoRealismComparisonSlide';
import { NanoBananaComparisonSlide } from './content/NanoBananaComparisonSlide';
import { ReferenceContextSlide } from './content/ReferenceContextSlide';
import { DisclaimerSlide } from './content/DisclaimerSlide';
import { GamepadStyleTransferSlide } from './content/GamepadStyleTransferSlide';
import { TransferDemogorgonSlide } from './content/TransferDemogorgonSlide';
import { TransferNewTripleSlide } from './content/TransferNewTripleSlide';
import { TransferNewPairSlide } from './content/TransferNewPairSlide';
import { MaxWorkflowSlide } from './content/MaxWorkflowSlide';
import { FlouxWorkflowSlide } from './content/FlouxWorkflowSlide';
import { GlassLogoVideoSlide } from './content/GlassLogoVideoSlide';
import { InteractiveSlide } from './content/InteractiveSlide';
import { InteractiveGeminiResultSlide } from './content/InteractiveGeminiResultSlide';
import { CombSkillsPollSlide } from './content/CombSkillsPollSlide';
import { CombSkillsGeminiResultSlide } from './content/CombSkillsGeminiResultSlide';
import { AttentionModels2026Slide } from './content/AttentionModels2026Slide';
import { NeuralWorkflowIdeaSlide } from './content/NeuralWorkflowIdeaSlide';
import { PromptWritingCoverSlide } from './content/PromptWritingCoverSlide';
import { PromptInstructionSlide } from './content/PromptInstructionSlide';
import { PromptFormulaSlide } from './content/PromptFormulaSlide';
import { PromptOrderFlexSlide } from './content/PromptOrderFlexSlide';
import { EditingPromptPrinciplesSlide } from './content/EditingPromptPrinciplesSlide';
import { NanoBananaEditingSlide } from './content/NanoBananaEditingSlide';
import { ImageAnnotationsSlide } from './content/ImageAnnotationsSlide';
import { ImageWorkflowSlide } from './content/ImageWorkflowSlide';
import { MultireferenceIntroSlide } from './content/MultireferenceIntroSlide';
import { ReferenceRolesSlide } from './content/ReferenceRolesSlide';

// Unused but available for future use or alternative flows
// import { DiffusionVsReasoning } from './content/DiffusionVsReasoning';
// import { SeedreamCase } from './content/SeedreamCase';

export const slides: SlideConfig[] = [
  // 1 — Intro / Fast changes
  { component: Intro, theme: 'poster-glided', title: 'Intro', preloadAssets: ['/bg-intro.png'] },

  // 2 — Обо мне
  { component: AboutMe, theme: 'poster-glided', title: 'Обо мне' },

  // 3 — Мем про управление нейронками
  { component: MemeNeuralControl, theme: 'poster-glided', title: 'Мем про нейронки', preloadAssets: ['/mem.jpg'] },

  // 4 — Floux.pro
  { component: FlouxPro, theme: 'poster-glided', title: 'Floux.pro', preloadAssets: ['/floux-screen.png'] },

  // 5 — Interactive Poll Slide
  { component: InteractiveSlide, theme: 'poster-glided', title: 'Интерактивный опрос' },

  // 6 — Gemini Analysis: Design profession poll
  { component: InteractiveGeminiResultSlide, theme: 'poster-glided', title: 'Анализ: Профессии в дизайне' },

  // 7 — Как менялось кол-во нейросетей для графики за последние 4 года
  { component: ToolsGrowthSlide, theme: 'poster-red', title: 'Рост инструментов' },

  // 8 — CLI -> LUI
  { component: InterfaceLoop, theme: 'poster-red', title: 'CLI → LUI', preloadAssets: ['/images/cli.png', '/images/lui.png'] },

  // 9 — Как мы сюда пришли
  { component: HowDidWeGetHere, theme: 'poster-glided', title: 'Как мы сюда пришли' },

  // 10 — Сложные интерфейсы (Adobe, Blender)
  { component: ProInterfacesScreens, theme: 'poster-red', title: 'Профессиональные интерфейсы' },

  // 11 — Democratization
  { component: DemocratizationInterfaces, theme: 'poster-blue', title: 'Демократизация', preloadAssets: ['/images/democ.png'] },

  // 12 — Основной инструмент в 2026 — текст
  { component: TextAsMainTool2026, theme: 'poster-red', title: 'Текст как навык' },

  // 13 — T-shaped / Comb-shaped — навыки профессионала будущего и настоящего
  { component: CombShaped, theme: 'poster-blue', title: 'Comb-shaped', preloadAssets: ['/images/comb.png'] },

  // 14 — Interactive Poll: Comb-shaped skills
  { component: CombSkillsPollSlide, theme: 'poster-glided', title: 'Опрос: Навыки Comb-shaped дизайнера' },

  // 15 — Gemini Analysis: Comb-shaped skills
  { component: CombSkillsGeminiResultSlide, theme: 'poster-glided', title: 'Анализ: Навыки Comb-shaped дизайнера' },

  // 16 — Держаться за гребень — навыки Comb-shaped
  { component: CombGrip, theme: 'poster-blue', title: 'Держаться за гребень', preloadAssets: ['/images/comb-surf.jpg'] },

  // Mkdir — сложность текста, который понимает ИИ в любом формате
  // { component: MkdirSlide, theme: 'poster-glided', title: 'Mkdir' },

  // 17 — Инструменты
  { component: ToolsSlide, theme: 'poster-glided', title: 'Инструменты' },

  // 18 — Начало 2025 года и что случилось в 2025 году
  { component: Early2025, theme: 'poster-glided', title: 'Начало 2025', preloadAssets: ['/bg/bg1.png'] },

  // 19 — Top AI 2026 (Big Four)
  { component: BigFour, theme: 'poster-red', title: 'Большая шестерка' },

  // 20 — Hiigsfield
  { component: HiigsfieldSlide, theme: 'poster-glided', title: 'Higgsfield', preloadAssets: ['/images/higgsfield.png'] },

  // 21 — Node-based системы
  { component: NodeBasedSlide, theme: 'poster-glided', title: 'Node-based системы', preloadAssets: ['/images/nodes/freepik.png', '/images/nodes/krea.png', '/images/nodes/weavy.png'] },

  // 22 — Демо Floux.pro
  { component: FlouxDemoSlide, theme: 'poster-glided', title: 'Демо Floux.pro', preloadAssets: ['/flow.mp4'] },

  // 23 — На что смотреть в 2026
  { component: AttentionModels2026Slide, theme: 'poster-red', title: 'На что обратить внимание' },

  // 24 — Какую модель выбирать
  { component: NeuralChoiceSlide, theme: 'poster-blue', title: 'Какая нейронка для какой задачи?' },

  // 25 — Редактирование
  { component: EditingModelsSlide, theme: 'poster-blue', title: 'Редактирование', preloadAssets: ['/images/alfa/cover.png', '/images/alfa/marks.png', '/images/alfa/out-details-marks.jpg'] },

  // 26 — Иллюстрации / стилизованная графика
  { component: IllustrationModelsSlide, theme: 'poster-red', title: 'Иллюстрации', preloadAssets: ['/images/compare_styled/nano_banana_pro.png', '/images/compare_styled/seedream_v4_5.png', '/images/compare_styled/flux_2_pro.png'] },

  // 93 — Grok Gallery
  { component: GrokGallerySlide, theme: 'poster-red', title: 'Grok Gallery', preloadAssets: ['/images/alt/g1.jpg', '/images/alt/g2.jpg', '/images/alt/g3.jpg', '/images/alt/g4.jpg', '/images/alt/g5.jpg', '/images/alt/g6.jpg'] },

  // 27 — Фотореализм
  { component: PhotorealModelsSlide, theme: 'poster-blue', title: 'Фотореализм', preloadAssets: ['/images/composition/person.png', '/images/realism/gpt_image.png', '/images/realism/seedream_v4_5.jpg', '/images/realism/flux_2.png'] },

  // 55 — Identity grid (3 images)
  { component: IdentityGridSlide, theme: 'poster-glided', title: 'Identity Grid', preloadAssets: ['/images/photorealism/flux_2_pro.png', '/images/photorealism/gpt_image_1_5.png', '/images/photorealism/seedream_v4_5.png'] },

    // 92 — Seedream Gallery
  { component: SeedreamGallerySlide, theme: 'poster-red', title: 'Seedream Gallery', preloadAssets: ['/images/alt/s1.jpg', '/images/alt/s2.jpg', '/images/alt/s3.jpg'] },

  // 28 — Бенчмарки
  { component: BenchmarksSlide, theme: 'poster-blue', title: 'arena.ai', preloadAssets: ['/images/arena.png'] },

  // 29 — Сравнение генераций - УДАЛЕНО
  // { component: GenComparisonSlide, theme: 'poster-red', title: 'Сравнение генераций', preloadAssets: ['/images/compare_styled/flux_2_pro.png', '/images/compare_styled/gpt_image_1_5.png', '/images/compare_styled/midjourney.png', '/images/compare_styled/nano_banana_flash.png', '/images/compare_styled/nano_banana_pro.png', '/images/compare_styled/seedream_v4_5.png'] },

  // 30 — Оркестрация нейросетей
  { component: NeuralWorkflowIdeaSlide, theme: 'poster-blue', title: 'Оркестрация нейросетей', preloadAssets: ['/flow_ex/grokImagine.jpg', '/flow_ex/nano_banana_2.png', '/flow_ex/grokImagine_video.mp4'] },

  // 31 — Nano Banana / NB Pro
  { component: NanoBananaPro, theme: 'poster-blue', title: 'Nano Banana Pro', preloadAssets: ['/bg/banana2.png'] },

  // 32 — Сравнение версий Nano Banana
  { component: NanoBananaComparisonSlide, theme: 'poster-blue', title: 'Сравнение версий Nano Banana' },

  // 33 — Nano Banana как агент — схема работы
  { component: AgenticWorkflow, theme: 'poster-red', title: 'Агентный workflow' },

  // 34 — Nano Banana как агент — результат
  { component: AgenticWorkflowResult, theme: 'poster-glided', title: 'Результат агента', preloadAssets: ['/images/stranger.jpg'] },

  // 35 — Nano Banana: промпт + три результата
  { component: AgenticWorkflowResultPrompt, theme: 'poster-glided', title: 'Промпт и результаты', preloadAssets: ['/images/nbpro/001.jpg', '/images/nbpro/002.jpg', '/images/nbpro/003.jpg'] },

  // 36 — Nano Banana: грид результатов (без промпта)
  { component: AgenticWorkflowResultGrid, theme: 'poster-glided', title: 'Грид результатов', preloadAssets: ['/images/nbpro/flux2.png', '/images/nbpro/gptimage1_5', '/images/nbpro/seedream4_5.jpeg'] },

  // 37 — Reasoning модели
  { component: ReasoningModelsSlide, theme: 'poster-glided', title: 'Reasoning модели' },

  // 38 — Prompt Writing cover
  { component: PromptWritingCoverSlide, theme: 'poster-glided', title: 'Как писать промпты' },

  // 39 — Это не разговор, а инструкция
  { component: PromptInstructionSlide, theme: 'poster-glided', title: 'Инструкция, а не разговор' },

  // 40 — Базовая формула промпта
  { component: PromptFormulaSlide, theme: 'poster-glided', title: 'Базовая формула промпта' },

  // 41 — Формула не догма
  { component: PromptOrderFlexSlide, theme: 'poster-glided', title: 'Формула не догма' },

  // 42 — Уточняющие промпты
  { component: RefiningPromptsSlide, theme: 'poster-glided', title: 'Уточняющие промпты' },

  // 43 — Промпт на редактирование
  { component: EditingPromptPrinciplesSlide, theme: 'poster-red', title: 'Промпт на изменение', preloadAssets: ['/images/editing/input.png', '/images/editing/output.png'] },

  // 44 — Nano Banana для редактирования
  { component: NanoBananaEditingSlide, theme: 'poster-red', title: 'NB Pro / 2 для редактирования', preloadAssets: ['/images/alfa/marks.png', '/images/alfa/out-details-marks.jpg'] },

  // 45 — Пометки на изображении
  { component: ImageAnnotationsSlide, theme: 'poster-red', title: 'Пометки на изображении', preloadAssets: ['/images/alfa/marks.png', '/images/alfa/out-details-marks.jpg'] },

  // 46 — Воркфлоу (схема)
  { component: ImageWorkflowSlide, theme: 'poster-red', title: 'Воркфлоу', preloadAssets: ['/images/alfa/workflow.png'] },

  // 47 — Обложка про Мультиреференсность
  { component: MultireferenceCover, theme: 'poster-glided', title: 'Мультиреференсность', preloadAssets: ['/images/riding.png'] },

  // 48 — Введение в мультиреференсность
  // { component: MultireferenceIntroSlide, theme: 'poster-blue', title: 'Что такое мультиреференсность', preloadAssets: ['/images/composition/person.png', '/images/composition/person1.png', '/images/transfer/ref.jpg', '/images/composition/ref.jpg', '/images/composition/out.png'] },

  // 49 — Роли изображений
  { component: ReferenceRolesSlide, theme: 'poster-blue', title: 'Роли изображений', preloadAssets: ['/multiref/Character.png', '/multiref/Horse.jpg', '/multiref/Clothes.jpg', '/images/riding.png'] },

  // 50 — Лимиты референсов
  { component: ReferenceCounts, theme: 'poster-glided', title: 'Лимиты референсов' },

  // 51 — Управление референсами
  { component: ReferenceContextSlide, theme: 'poster-blue', title: 'Управление референсами' },

  // 52 — Как можно использовать референсы?
  { component: ReferenceTypes, theme: 'poster-red', title: 'Роли референсов' },

  // 53 — Дисклеймер
  { component: DisclaimerSlide, theme: 'poster-glided', title: 'Дисклеймер' },

  // 54 — Identity
  { component: Identity, theme: 'poster-glided', title: 'Identity', preloadAssets: ['/bg/bg1.png'] },

  // 56 — Photorealism
  { component: Photorealism, theme: 'poster-red', title: 'Фотореализм', preloadAssets: ['/images/fashion/person.png', '/images/fashion/ref.png', '/images/fashion/out.png'] },

  // 57 — Порядок изображений
  { component: OrderSlide, theme: 'poster-glided', title: 'Порядок и приоритет', preloadAssets: ['/images/order/001.png', '/images/order/002.png'] },

  // 58 — Анализ референсов
  { component: ReferenceAnalysisSlide, theme: 'poster-red', title: 'Анализ референсов', preloadAssets: ['/images/face/001.jpg', '/images/face/002.jpg'] },

  // 59 — Composition (images from composition folder)
  { component: CompositionSlide, theme: 'poster-red', title: 'Композиция', preloadAssets: ['/images/composition/person.png', '/images/composition/person1.png', '/images/composition/ref.jpg', '/images/composition/out.png'] },

  // 60 — Ракурсы и углы камеры
  { component: CameraAnglesSlide, theme: 'poster-red', title: 'Ракурсы и углы камеры', preloadAssets: ['/images/angles/001.png', '/images/angles/002.png'] },

  // 61 — Style Transfer
  { component: StyleTransfer, theme: 'poster-blue', title: 'Style Transfer', preloadAssets: ['/style-transfer.jpg'] },

  // 62 — Перенос стиля геймпада
  { component: GamepadStyleTransferSlide, theme: 'poster-red', title: 'Перенос стиля геймпада', preloadAssets: ['/images/yndx/ref.png', '/images/yndx/gampad.png'] },

  // 63 — Demogorgon style transfer
  { component: TransferDemogorgonSlide, theme: 'poster-red', title: 'Перенос стиля Demogorgon', preloadAssets: ['/images/transfer.png'] },

  // 63a — Перенос стиля: два рефа + результат
  {
    component: TransferNewTripleSlide,
    theme: 'poster-red',
    title: 'Перенос стиля: референсы',
    preloadAssets: ['/images/transfer_new/logo.png', '/images/transfer_new/ref.jpg', '/images/transfer_new/out.png'],
  },

  // 63b — Перенос стиля: два кадра
  {
    component: TransferNewPairSlide,
    theme: 'poster-red',
    title: 'Перенос стиля: метки и финал',
    preloadAssets: ['/images/transfer_new/marks.png', '/images/transfer_new/final.png'],
  },

  // ТУТ НОВЫЕ СЛАЙДЫ

  // 64 — Перенос стиля (БВШД)
  // { component: StyleTransferLettersSlide, theme: 'poster-red', title: 'Перенос стиля', preloadAssets: ['/images/transfer/text.png', '/images/transfer/ref.jpg'] },

  // 65 — BHSAD УДАЛЕНО
  // { component: BHSAD, theme: 'poster-blue', title: 'BHSAD', preloadAssets: ['/bg/bhsad.png'] },

  // 66 — Воркфлоу Макса Кукушкина УДАЛЕНО
  // { component: MaxWorkflowSlide, theme: 'poster-blue', title: 'Воркфлоу Макса Кукушкина', preloadAssets: ['/images/max-tg.jpg', '/images/max-style/ref.png', '/images/max-style/ref2.png', '/images/max-style/out.png'] },

  // 67 — BHSAD Video УДАЛЕНО
  // { component: BHSADVideo, theme: 'poster-blue', title: 'BHSAD Video', preloadAssets: ['/bhsad_video.mp4'] },

  // 68 — Texturing & Modeling
  { component: TexturingModeling, theme: 'poster-red', title: 'Текстурирование', preloadAssets: ['/images/creme.png'] },

  // 69 — Спикер / Канал
  { component: SpeakerChannelSlide, theme: 'poster-blue', title: 'Спикер / Канал', preloadAssets: ['/images/max-tg.jpg', '/images/max.png'] },

  // 70 — Сетка 4 картинок
  { component: Grid4Slide, theme: 'poster-blue', title: 'Сетка 4 картинок', preloadAssets: ['/images/max/001.jpg', '/images/max/002.jpg', '/images/max/003.jpg', '/images/max/004.mp4'] },

  // 71 — Pro Workflow
  { component: ProWorkflow, theme: 'poster-blue', title: 'Pro Workflow' },

  // 72 — Project Neo
  { component: ProjectNeoSlide, theme: 'poster-blue', title: 'Project Neo', preloadAssets: ['/images/neo.png'] },

  // 73 — Воркфлоу Floux.pro
  { component: FlouxWorkflowSlide, theme: 'poster-blue', title: 'Воркфлоу Floux.pro', preloadAssets: ['/images/floux-extrude.png'] },

  // 74 — SVG → 3D Workflow
  { component: SvgTo3dWorkflow, theme: 'poster-blue', title: 'SVG → 3D' },

  // 75 — Texture workflow
  { component: TextureWorkflowSlide, theme: 'poster-blue', title: 'Texture workflow', preloadAssets: ['/images/workflow/002.png', '/images/workflow/003.png'] },

  // 76 — Видео со стеклянным логотипом
  { component: GlassLogoVideoSlide, theme: 'poster-blue', title: 'Видео со стеклянным логотипом', preloadAssets: ['/floux-stranger.mp4'] },

  // 77 — Workflow Comparison
  { component: WorkflowComparison, theme: 'poster-blue', title: 'Сравнение workflow', preloadAssets: ['/images/workflow/extra-v.mp4', '/images/workflow/extra1.png', '/images/workflow/extra2.png'] },

  // 78 — Gradient workflow
  { component: GradientWorkflowSlide, theme: 'poster-blue', title: 'Gradient', preloadAssets: ['/images/workflow/gradient.png'] },

  // 79 — Floux Video
  { component: FlouxVideoSlide, theme: 'poster-glided', title: 'Floux Video', preloadAssets: ['/floux.mp4'] },

  // 80 — Alfa Bank Case
  { component: FigmaAlfa, theme: 'poster-red', title: 'Alfa Bank Case', preloadAssets: ['/images/figma-alfa.png'] },

  // 81 — Alfa Video
  { component: AlfaVideo, theme: 'poster-blue', title: 'Alfa Video', preloadAssets: ['/alfa_video.mp4'] },

  // 82 — Альфабанк: Воркфлоу
  { component: AlfaWorkflowSlide, theme: 'poster-glided', title: 'Альфабанк: Воркфлоу', preloadAssets: ['/images/alfa/workflow.png'] },

  // 83 — Альфабанк: Текстурирование карты
  { component: AlfaTexturingSlide, theme: 'poster-red', title: 'Альфабанк: Текстурирование карты', preloadAssets: ['/images/alfa/cover.png', '/images/alfa/svg.png', '/images/alfa/out.jpg'] },

  // 84 — Альфабанк: Добавление деталей
  { component: AlfaDetailsSlide, theme: 'poster-red', title: 'Альфабанк: Добавление деталей', preloadAssets: ['/images/alfa/marks.png', '/images/alfa/products.png', '/images/alfa/out-details-marks.jpg', '/images/alfa/out-details-no-marks.jpg'] },

  // Альфабанк: Маркеры на фото
  //{ component: AlfaMarkersSlide, theme: 'poster-red', title: 'Альфабанк: Маркеры на фото' },

  // 85 — Альфабанк: Видео генерация
  { component: AlfaVideoGenSlide, theme: 'poster-red', title: 'Альфабанк: Видео генерация', preloadAssets: ['/images/alfa/kling1.png', '/images/alfa/kling2.png'] },

  // 86 — JSON-промптинг
  { component: JsonPrompting, theme: 'poster-blue', title: 'JSON-промптинг', preloadAssets: ['/bg/bg2.png'] },

  // 87 — Что такое JSON
  { component: JsonPromptingDefinitionSlide, theme: 'poster-glided', title: 'Что такое JSON-промптинг' },

  // 88 — Structured Prompts
  { component: StructuredPrompts, theme: 'poster-glided', title: 'Structured Prompts' },

  // 89 — Фото + промпт
  { component: PhotoPromptSlide, theme: 'poster-glided', title: 'Фото -> промпт -> JSON', preloadAssets: ['/images/composition/ref.jpg'] },

  // 90 — Long Structured Prompt (Auto-scroll)
  { component: LongStructuredPromptSlide, theme: 'poster-glided', title: 'Длинный JSON промпт' },

  // 91 — JSON Images
  { component: JsonImagesSlide, theme: 'poster-glided', title: 'Результат JSON промпта', preloadAssets: ['/images/json/001.jpg', '/images/json/002.jpg', '/images/composition/ref.jpg'] },

  // 94 — Спасибо!
  { component: ThankYouSlide, theme: 'poster-glided', title: 'Спасибо!', preloadAssets: ['/bg-intro.png'] },

  // 95 — Промокод
  { component: PromoCodeSlide, theme: 'poster-glided', title: 'Промокод' },
];
