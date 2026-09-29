import React, { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, FileText, ArrowRight, Layers, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * GalleryLightbox - Fullscreen editorial photographic viewer
 * 
 * - Deep dark backdrop (rgba(10,10,10,0.95)) with backdrop blur
 * - Responsive contained image viewing with smooth Framer Motion scaling
 * - Full metadata panel: Name, Category, SKU, Key Specs, Variant notes
 * - Keyboard navigation (ESC, ArrowLeft, ArrowRight)
 * - Mobile touch swipe gestures
 * - Interactive quotation integration (reusing existing quotation workflow)
 */
export default function GalleryLightbox({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
  onSelectIndex,
  onRequestQuote
}) {
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
      else if (e.key === 'ArrowLeft') onPrev?.();
      else if (e.key === 'ArrowRight') onNext?.();
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentItem = images[currentIndex] || images[0];

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;

    // Detect horizontal swipe if larger than vertical movement
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 45) {
      if (diffX > 0) {
        onPrev?.(); // Swiped right -> Previous
      } else {
        onNext?.(); // Swiped left -> Next
      }
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label="Product photography lightbox"
        className="fixed inset-0 z-[1200] flex flex-col justify-between bg-[#0A0A0A]/95 backdrop-blur-md p-3 sm:p-6 overflow-hidden select-none"
      >
        {/* TOP BAR: Info Header & Close */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 flex items-center justify-between gap-4 text-white border-b border-white/10 pb-3 sm:pb-4"
        >
          {/* Index Counter & Product Overview */}
          <div className="flex items-center gap-2 sm:gap-4 overflow-hidden">
            <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-sm bg-white/10 text-[#1687E8] border border-white/10 flex-shrink-0">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>

            <div className="min-w-0 flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase text-[#1687E8] font-semibold tracking-wider">
                  {currentItem.category}
                </span>
                {currentItem.model && (
                  <span className="text-[10px] font-mono text-white/50 bg-white/5 px-1.5 py-0.5 rounded-xs">
                    {currentItem.model}
                  </span>
                )}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white truncate">
                {currentItem.productName}
              </h3>
            </div>
          </div>

          {/* Action & Close Controls */}
          <div className="flex items-center gap-2 flex-shrink-0">
            {currentItem.product && onRequestQuote && (
              <button
                type="button"
                onClick={() => {
                  onClose?.();
                  onRequestQuote?.(currentItem.product);
                }}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#2567A8] hover:bg-[#1F558C] text-white text-xs font-medium transition-colors shadow-xs"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Enquire Specs</span>
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close image lightbox"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#2567A8]"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* CENTER VIEWPORT: Contained Image & Arrows */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={(e) => e.stopPropagation()}
          className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden"
        >
          {/* Previous Arrow */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev?.();
              }}
              aria-label="Previous image"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-[#2567A8]"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}

          {/* Main Large Image with motion transition */}
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="relative max-w-full max-h-full flex items-center justify-center"
          >
            <img
              src={currentItem.src}
              alt={currentItem.alt}
              className="max-h-[68vh] sm:max-h-[74vh] max-w-[92vw] sm:max-w-[85vw] object-contain select-none rounded-sm shadow-2xl"
            />
          </motion.div>

          {/* Next Arrow */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext?.();
              }}
              aria-label="Next image"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/20 transition-all hover:scale-105 outline-none focus-visible:ring-2 focus-visible:ring-[#2567A8]"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>
          )}
        </div>

        {/* BOTTOM METADATA & THUMBNAILS STRIP */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative z-10 flex flex-col gap-2.5 border-t border-white/10 pt-3"
        >
          {/* Metadata Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white/80 text-xs px-1">
            <div className="flex items-center gap-2 flex-wrap">
              {currentItem.variant && (
                <span className="font-mono text-[11px] text-white/90 bg-white/10 px-2 py-0.5 rounded-xs">
                  {currentItem.variant}
                </span>
              )}
              {currentItem.keySpec && (
                <span className="text-[11px] text-white/70 hidden md:inline">
                  • {currentItem.keySpec}
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] text-white/50">
                Source: {currentItem.sourceLabel}
              </span>
              {currentItem.product && onRequestQuote && (
                <button
                  type="button"
                  onClick={() => {
                    onClose?.();
                    onRequestQuote?.(currentItem.product);
                  }}
                  className="sm:hidden text-xs font-semibold text-[#1687E8] underline"
                >
                  Enquire Quote
                </button>
              )}
            </div>
          </div>

          {/* Interactive Thumbnails Rail */}
          {images.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 px-1">
              {images.map((item, idx) => {
                const isSelected = idx === currentIndex;
                return (
                  <button
                    key={`thumb-${item.id}-${idx}`}
                    type="button"
                    onClick={() => onSelectIndex?.(idx)}
                    aria-label={`Jump to image ${idx + 1}`}
                    className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-md overflow-hidden flex-shrink-0 transition-all border-2 ${
                      isSelected
                        ? 'border-[#1687E8] scale-105 shadow-md opacity-100'
                        : 'border-white/10 opacity-50 hover:opacity-85'
                    }`}
                  >
                    <img
                      src={item.src}
                      alt={item.productName}
                      className="w-full h-full object-cover bg-white/5"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
