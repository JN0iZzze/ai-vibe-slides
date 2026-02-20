import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize, Menu } from 'lucide-react';
import { usePresentation } from '../hooks/usePresentation';
import { useSlidePreloader } from '../hooks/useSlidePreloader';
import { slides as defaultSlides } from '../slides/registry';
import type { SlideConfig } from '../types/slide';
import { SlideListSidebar } from './SlideListSidebar';

// Базовое разрешение презентации (Full HD 16:9)
const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

interface PresentationLayoutProps {
  slides?: SlideConfig[];
}

export const PresentationLayout: React.FC<PresentationLayoutProps> = ({ slides = defaultSlides }) => {
  const { currentSlide, nextSlide, prevSlide, goToSlide, isFirst, isLast } = usePresentation(slides.length);
  
  // Предзагрузка всех ассетов с отслеживанием прогресса
  const { progress } = useSlidePreloader(slides);
  
  const currentSlideConfig = slides[currentSlide];
  const CurrentSlideComponent = currentSlideConfig.component;
  
  const themeClass = `theme-${currentSlideConfig.theme}`;

  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true);
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Расчет масштаба для фиксированного соотношения сторон
  useEffect(() => {
    const handleResize = () => {
      const scaleX = window.innerWidth / BASE_WIDTH;
      const scaleY = window.innerHeight / BASE_HEIGHT;
      // Выбираем меньший коэффициент, чтобы слайд целиком поместился в экран
      const newScale = Math.min(scaleX, scaleY);
      setScale(newScale);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Первичный расчет при монтировании

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await document.documentElement.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  // Common styles for all control buttons
  const controlButtonStyles = `
    z-30 p-3 rounded-full 
    bg-white/10 backdrop-blur-md 
    text-retro-text 
    transition-all duration-300 
    hover:scale-110 hover:bg-white/30 
    cursor-pointer
  `;

  return (
    <div className={`relative h-screen w-screen bg-black text-retro-text overflow-hidden selection:bg-retro-text selection:text-retro-bg flex items-center justify-center ${themeClass}`}>
      {/* Scanline effect overlay - REMOVED */}
      {/* <div className="pointer-events-none absolute inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] bg-repeat opacity-20" /> */}

      {/* Масштабируемый контейнер с фиксированным соотношением сторон */}
      <div
        style={{
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
        }}
        className="relative bg-retro-bg shadow-2xl overflow-hidden flex-shrink-0 transition-colors duration-500"
      >
        {/* Main Content */}
        <main className="h-full w-full relative z-10">
          <CurrentSlideComponent />
        </main>
      </div>

      {/* Menu Button */}
      <button
        className={`absolute top-8 left-8 ${controlButtonStyles} ${
          showControls ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(true)}
        aria-label="Открыть меню слайдов"
      >
        <Menu size={24} />
      </button>

      {/* Fullscreen Toggle */}
      <button
        className={`absolute top-8 right-8 ${controlButtonStyles} ${
          showControls ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleFullscreen}
        aria-label="Toggle fullscreen"
      >
        {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
      </button>

      {/* Navigation Controls */}
      {!isFirst && (
        <button
          className={`absolute top-1/2 left-8 -translate-y-1/2 ${controlButtonStyles} ${
            showControls ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft size={48} className="text-retro-text" />
        </button>
      )}

      {!isLast && (
        <button
          className={`absolute top-1/2 right-8 -translate-y-1/2 ${controlButtonStyles} ${
            showControls ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight size={48} className="text-retro-text" />
        </button>
      )}

      {/* Slide Counter - bottom-left */}
      <div
        className={`absolute bottom-8 left-8 z-20 transition-opacity duration-300 ${
          showControls ? 'opacity-80' : 'opacity-0'
        }`}
      >
        <div className="font-mono text-sm tracking-[0.2em] text-retro-text px-6 py-2 rounded-full bg-white/10 backdrop-blur-md">
          {String(currentSlide + 1).padStart(2, '0')} <span className="opacity-50 mx-2">/</span> {String(slides.length).padStart(2, '0')}
        </div>
      </div>

      {/* Media Progress - bottom-right */}
      <div
        className={`absolute bottom-8 right-8 z-20 transition-opacity duration-300 ${
          showControls ? 'opacity-80' : 'opacity-0'
        }`}
      >
        <div className="font-mono text-sm tracking-[0.2em] text-retro-text px-6 py-2 rounded-full bg-white/10 backdrop-blur-md">
          Media {Math.round(progress * 100)}%
        </div>
      </div>

      {/* Slide List Sidebar */}
      <SlideListSidebar
        open={sidebarOpen}
        slides={slides}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
        onClose={() => setSidebarOpen(false)}
      />
    </div>
  );
};
