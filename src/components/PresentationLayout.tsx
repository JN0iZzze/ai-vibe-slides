import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import { usePresentation } from '../hooks/usePresentation';
import { slides } from '../slides/registry';

export const PresentationLayout: React.FC = () => {
  const { currentSlide, nextSlide, prevSlide, isFirst, isLast } = usePresentation(slides.length);
  const CurrentSlideComponent = slides[currentSlide];

  const [showControls, setShowControls] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
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
    <div className="relative h-screen w-screen bg-retro-bg text-retro-text overflow-hidden selection:bg-retro-text selection:text-retro-bg">
      {/* Scanline effect overlay - REMOVED */}
      {/* <div className="pointer-events-none absolute inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] bg-repeat opacity-20" /> */}

      {/* Main Content */}
      <main className="h-full w-full relative z-10">
        <CurrentSlideComponent />
      </main>

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

      {/* Slide Counter */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 font-mono text-sm tracking-[0.2em] text-retro-text px-6 py-2 rounded-full bg-white/10 backdrop-blur-md transition-opacity duration-300 ${
          showControls ? 'opacity-80' : 'opacity-0'
        }`}
      >
        {String(currentSlide + 1).padStart(2, '0')} <span className="opacity-50 mx-2">/</span> {String(slides.length).padStart(2, '0')}
      </div>
    </div>
  );
};
