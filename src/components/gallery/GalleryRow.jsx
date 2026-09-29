import React, { useRef } from 'react';
import GalleryImage from './GalleryImage';

/**
 * GalleryRow - Continuously moving horizontal marquee row
 * 
 * - Seamless infinite loop using duplicated image sequences
 * - Ultra-performant GPU transform: translate3d
 * - Alternating directional glide (left or right)
 * - Automatically pauses on hover, focus, or when global isPaused is true
 */
export default function GalleryRow({
  items = [],
  direction = 'left',
  speed = 65, // Duration in seconds
  isPaused = false,
  onImageClick,
  rowIndex = 0
}) {
  const containerRef = useRef(null);

  if (!items || items.length === 0) return null;

  // Ensure enough items to create a continuous seamless loop across ultrawide monitors
  // If item count is low (e.g. filtered category), repeat multiple times
  let loopItems = items;
  if (items.length < 8) {
    loopItems = [...items, ...items, ...items, ...items];
  } else if (items.length < 15) {
    loopItems = [...items, ...items];
  }

  const animationClass = direction === 'left' ? 'gallery-track-left' : 'gallery-track-right';

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden py-1.5 sm:py-2 select-none"
    >
      <div
        className={`${animationClass} ${isPaused ? 'gallery-track-paused' : 'gallery-track-hover-pause'} flex items-center gap-3.5 sm:gap-5`}
        style={{
          '--marquee-speed': `${speed}s`,
          animationPlayState: isPaused ? 'paused' : undefined
        }}
      >
        {/* Set 1 */}
        {loopItems.map((item, idx) => (
          <GalleryImage
            key={`r${rowIndex}-s1-${item.id}-${idx}`}
            item={item}
            index={idx}
            onClick={onImageClick}
          />
        ))}

        {/* Set 2 (for 100% seamless infinite wrap) */}
        {loopItems.map((item, idx) => (
          <GalleryImage
            key={`r${rowIndex}-s2-${item.id}-${idx}`}
            item={item}
            index={idx + loopItems.length}
            onClick={onImageClick}
          />
        ))}
      </div>
    </div>
  );
}
