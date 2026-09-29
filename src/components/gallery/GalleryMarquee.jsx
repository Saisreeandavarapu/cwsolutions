import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import GalleryRow from './GalleryRow';

/**
 * GalleryMarquee - Orchestrates 3 continuous multi-speed visual rows
 * 
 * Row 1: Left-to-right (slow movement ~72s)
 * Row 2: Right-to-left (medium movement ~56s)
 * Row 3: Left-to-right (smooth movement ~64s)
 * 
 * Features soft edge masks and sequential Framer Motion entrance.
 */
export default function GalleryMarquee({
  images = [],
  isPaused = false,
  onImageClick
}) {
  // Distribute items evenly into 3 distinct visual rows
  const [row1, row2, row3] = useMemo(() => {
    if (!images || images.length === 0) return [[], [], []];

    const r1 = [];
    const r2 = [];
    const r3 = [];

    images.forEach((item, index) => {
      const mod = index % 3;
      if (mod === 0) r1.push(item);
      else if (mod === 1) r2.push(item);
      else r3.push(item);
    });

    return [r1, r2, r3];
  }, [images]);

  if (images.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-sm font-mono text-[#667085]">
          No catalogue images available for this selection.
        </p>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden gallery-edge-mask py-2">
      {/* Visual Rows with Staggered Entrance */}
      <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
        
        {/* ROW 1: Moves Left, 72s */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <GalleryRow
            items={row1}
            direction="left"
            speed={72}
            isPaused={isPaused}
            onImageClick={onImageClick}
            rowIndex={1}
          />
        </motion.div>

        {/* ROW 2: Moves Right, 56s */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <GalleryRow
            items={row2}
            direction="right"
            speed={56}
            isPaused={isPaused}
            onImageClick={onImageClick}
            rowIndex={2}
          />
        </motion.div>

        {/* ROW 3: Moves Left, 64s */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <GalleryRow
            items={row3}
            direction="left"
            speed={64}
            isPaused={isPaused}
            onImageClick={onImageClick}
            rowIndex={3}
          />
        </motion.div>

      </div>
    </div>
  );
}
