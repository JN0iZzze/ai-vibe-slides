import React from 'react';
import type { SlideConfig } from '../types/slide';

interface SlideListSidebarProps {
  open: boolean;
  slides: SlideConfig[];
  currentSlide: number;
  goToSlide: (index: number) => void;
  onClose: () => void;
}

export const SlideListSidebar: React.FC<SlideListSidebarProps> = ({
  open,
  slides,
  currentSlide,
  goToSlide,
  onClose,
}) => {
  const handleSlideClick = (index: number) => {
    goToSlide(index);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed left-0 top-0 bottom-0 w-96 bg-retro-bg border-r border-retro-dim z-50 overflow-y-auto transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8">
          {/* Header */}
          <h2 className="text-3xl font-serif mb-8 text-retro-text">Слайды</h2>

          {/* Slide List */}
          <div className="flex flex-col gap-2">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <button
                  key={index}
                  onClick={() => handleSlideClick(index)}
                  className={`
                    text-left px-6 py-4 rounded-[2rem] 
                    font-mono text-lg tracking-[0.1em]
                    transition-all duration-200
                    ${
                      isActive
                        ? 'bg-retro-text/20 border-2 border-retro-accent text-retro-text'
                        : 'bg-retro-text/5 border-2 border-transparent text-retro-text/70 hover:bg-retro-text/10 hover:text-retro-text'
                    }
                  `}
                  aria-label={`Перейти к слайду ${String(index + 1).padStart(2, '0')}${slide.title ? `: ${slide.title}` : ''}`}
                >
                  {String(index + 1).padStart(2, '0')}
                  {slide.title && <span className="ml-3 font-sans">{slide.title}</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
