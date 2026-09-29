import React, { useState } from 'react';
import { Maximize2, Tag, Layers } from 'lucide-react';
import GallerySkeleton from './GallerySkeleton';

/**
 * GalleryImage - Individual refined photo card frame
 * 
 * - Rounded 16-24px (rounded-2xl)
 * - Clean neutral backdrop with object-contain for distortion-free industrial equipment viewing
 * - Subtle hover lift & gentle scale
 * - Informative overlay layer showing real product name, category & SKU
 * - Keyboard accessible (Space/Enter to trigger lightbox)
 */
export default function GalleryImage({
  item,
  onClick,
  onImageFocus,
  onImageBlur,
  index = 0
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick?.(item);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={item.alt || `View ${item.productName || 'product photography'}`}
      onClick={() => onClick?.(item)}
      onKeyDown={handleKeyDown}
      onFocus={onImageFocus}
      onBlur={onImageBlur}
      className="group relative flex-shrink-0 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-[#2567A8] focus-visible:ring-offset-2 rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1.5"
      style={{
        // Maintain refined aspect ratio across breakpoints
        width: 'clamp(180px, 20vw, 290px)',
        height: 'clamp(160px, 22vw, 270px)'
      }}
    >
      {/* Outer Card Frame */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white border border-[#D9E0E7] shadow-[0_2px_8px_rgba(11,22,35,0.04)] group-hover:shadow-[0_12px_28px_rgba(11,22,35,0.12)] group-hover:border-[#BCC7D3] transition-all duration-300">
        
        {/* Skeleton while loading */}
        {!isLoaded && !hasError && (
          <GallerySkeleton className="absolute inset-0 w-full h-full z-10" />
        )}

        {/* Clean Neutral Inner Stage */}
        <div className="relative w-full h-full p-2.5 sm:p-4 flex items-center justify-center bg-gradient-to-b from-[#FBFDFE] to-[#F5F8FA] overflow-hidden">
          
          {/* Subtle watermark badge: Archive vs Current Photography */}
          <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
            <span
              className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md font-mono text-[9px] font-semibold tracking-wider uppercase backdrop-blur-xs transition-opacity duration-200 ${
                item.source === 'current-cwsolutions'
                  ? 'bg-white/80 text-[#2567A8] border border-[#2567A8]/20 shadow-2xs'
                  : 'bg-[#0B1623]/70 text-white/90 border border-white/10'
              }`}
            >
              {item.source === 'current-cwsolutions' ? '2026 FIELD' : 'ARCHIVE'}
            </span>
          </div>

          {/* Quick expand icon hint */}
          <div className="absolute top-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            <div className="w-6 h-6 rounded-full bg-[#0B1623]/80 backdrop-blur-xs text-white flex items-center justify-center shadow-xs">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Product Image */}
          {!hasError ? (
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              onLoad={() => setIsLoaded(true)}
              onError={() => {
                setIsLoaded(true);
                setHasError(true);
              }}
              className={`w-full h-full object-contain object-center transition-all duration-500 ease-out will-change-transform group-hover:scale-105 ${
                isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.02]'
              }`}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-[#F2F4F7]">
              <Layers className="w-6 h-6 text-[#8E9AA8] mb-1" />
              <p className="text-[11px] font-medium text-[#667085]">Catalogue Photo</p>
            </div>
          )}

          {/* Subtle Bottom Vignette Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          {/* Hover Info Overlay Layer */}
          <div className="absolute inset-x-0 bottom-0 p-3 text-white transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">
            {item.product ? (
              <>
                <p className="text-[11px] font-mono tracking-wider uppercase text-[#1687E8] font-bold truncate">
                  {item.category}
                </p>
                <p className="text-xs font-semibold text-white leading-tight truncate">
                  {item.productName}
                </p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] font-mono text-white/80 bg-white/15 px-1.5 py-0.2 rounded-xs">
                    {item.model}
                  </span>
                  {item.variant && (
                    <span className="text-[9px] text-white/70 truncate">
                      • {item.variant}
                    </span>
                  )}
                </div>
              </>
            ) : (
              <div>
                <p className="text-[10px] font-mono uppercase text-[#1687E8] font-bold">
                  {item.category}
                </p>
                <p className="text-xs font-medium text-white truncate">
                  {item.productName}
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
