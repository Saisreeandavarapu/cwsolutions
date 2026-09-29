import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { MASTER_GALLERY_IMAGES } from '../../data/galleryData';

/**
 * GalleryPreview - Miniature desktop floating lookbook preview on hovering "Gallery"
 * 
 * - 4 curated real product photos across categories
 * - Soft spring entrance (opacity: 0 -> 1, y: -6 -> 0, scale: 0.97 -> 1)
 * - Compact editorial micro-card with "Explore Collection →"
 */
export default function GalleryPreview({ onClose }) {
  // Select 4 distinct genuine product photos from the collection
  const previewItems = React.useMemo(() => {
    // 1. Aluminium Step Ladder
    const item1 = MASTER_GALLERY_IMAGES.find((img) =>
      img.rawPath?.toLowerCase().includes('step ladder') || img.category === 'Aluminium Ladders'
    );
    // 2. Tower Ladder
    const item2 = MASTER_GALLERY_IMAGES.find((img) =>
      img.category === 'Tower Ladders' && img.src !== item1?.src
    );
    // 3. Scaffolding
    const item3 = MASTER_GALLERY_IMAGES.find((img) =>
      img.category === 'Scaffolding' && img.src !== item1?.src && img.src !== item2?.src
    );
    // 4. FRP / Lifting / Material
    const item4 = MASTER_GALLERY_IMAGES.find((img) =>
      (img.category === 'FRP Ladders' || img.category === 'Scissor Lifts' || img.category === 'Trolley Ladders') &&
      img.src !== item1?.src && img.src !== item2?.src && img.src !== item3?.src
    );

    return [item1, item2, item3, item4].filter(Boolean);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -6, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -6, scale: 0.97 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 sm:w-88 bg-[#0B1623]/98 backdrop-blur-xl border border-white/15 rounded-xl shadow-2xl p-3 z-[1100] text-white"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between px-1 pb-2 border-b border-white/10 mb-2.5">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1687E8]" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-white/90">
            Visual Lookbook
          </span>
        </div>
        <span className="font-mono text-[9px] text-[#8E9AA8]">
          72 Photographs
        </span>
      </div>

      {/* Miniature 4-Image Grid */}
      <div className="grid grid-cols-4 gap-1.5 mb-2.5">
        {previewItems.map((item, idx) => (
          <div
            key={item.id || idx}
            className="group/thumb relative aspect-square rounded-lg overflow-hidden bg-white/5 border border-white/10 p-1 flex items-center justify-center transition-all duration-200 hover:border-[#1687E8]/60 hover:bg-white/10"
          >
            <img
              src={item.src}
              alt={item.productName || 'WearNear product'}
              className="w-full h-full object-contain transition-transform duration-200 group-hover/thumb:scale-108"
            />
          </div>
        ))}
      </div>

      {/* Bottom CTA Bar */}
      <Link
        to="/gallery"
        onClick={onClose}
        className="group/cta flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#2567A8]/30 border border-white/10 transition-colors"
      >
        <span className="text-xs font-semibold text-white/90 group-hover/cta:text-white">
          Explore Collection
        </span>
        <div className="flex items-center gap-1 text-[11px] font-mono text-[#1687E8]">
          <span>View Wall</span>
          <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover/cta:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
}
