import React, { useEffect } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext,
  productTitle = ''
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Lightbox Top Header */}
      <div
        className="flex items-center justify-between text-white border-b border-gray-800 pb-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold bg-industrial-dark px-2.5 py-1 rounded text-industrial-steel border border-gray-700">
            SHEET {currentIndex + 1} OF {images.length}
          </span>
          <span className="text-xs sm:text-sm font-semibold truncate max-w-md">
            {productTitle}
          </span>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-sm bg-gray-800 hover:bg-gray-700 text-white transition-colors"
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Lightbox Center Image View */}
      <div
        className="relative flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage}
          alt={productTitle}
          className="max-h-[82vh] max-w-[90vw] object-contain select-none shadow-2xl rounded-xs bg-white/5"
        />

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full transition-all border border-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full transition-all border border-white/20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Lightbox Bottom Strip */}
      <div
        className="flex items-center justify-center gap-2 pt-2"
        onClick={(e) => e.stopPropagation()}
      >
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (idx > currentIndex) onNext();
              else if (idx < currentIndex) onPrev();
            }}
            className={`w-12 h-12 rounded-xs border-2 overflow-hidden bg-white/10 transition-all ${
              idx === currentIndex
                ? 'border-industrial-steel scale-110 shadow-md'
                : 'border-transparent opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt="thumbnail" className="w-full h-full object-contain" />
          </button>
        ))}
      </div>
    </div>
  );
}
