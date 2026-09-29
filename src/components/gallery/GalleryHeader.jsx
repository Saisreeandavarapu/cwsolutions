import React from 'react';
import { Play, Pause, Camera, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * GalleryHeader - Editorial heading and controls above the image wall
 * 
 * - Section accent index: CATALOGUE / GALLERY
 * - Editorial headline & description
 * - Live photo count indicator
 * - Pause / Resume interactive toggle
 */
export default function GalleryHeader({
  totalImages = 0,
  isPaused = false,
  onTogglePause
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#E2E8F0]">
        
        {/* Left Side: Editorial Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          {/* Micro Index Accent */}
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#2567A8]" />
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#2567A8]">
              02 / PRODUCT GALLERY
            </span>
            <span className="text-[#D9E0E7]">•</span>
            <span className="font-mono text-[11px] text-[#667085] uppercase tracking-wider">
              Complete Visual Directory
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1623] tracking-tight">
            Explore the WearNear Catalogue
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-sm sm:text-base text-[#667085] leading-relaxed">
            High-resolution visual directory featuring verified field photography and technical catalogue archives across all industrial access lines.
          </p>
        </motion.div>

        {/* Right Side: Meta indicators & Marquee Motion Control */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-3 sm:gap-4 self-start md:self-end flex-wrap"
        >
          {/* Total Photos Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F7F8FA] border border-[#D9E0E7] rounded-full text-xs font-mono text-[#0B1623]">
            <Camera className="w-3.5 h-3.5 text-[#2567A8]" />
            <span className="font-bold">{totalImages}</span>
            <span className="text-[#667085]">Photos</span>
          </div>

          {/* Marquee Play/Pause Toggle */}
          <button
            type="button"
            onClick={onTogglePause}
            aria-label={isPaused ? 'Resume auto-scrolling gallery' : 'Pause auto-scrolling gallery'}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D9E0E7] bg-white hover:bg-[#F7F8FA] text-xs font-medium text-[#0B1623] transition-colors shadow-2xs outline-none focus-visible:ring-2 focus-visible:ring-[#2567A8]"
          >
            {isPaused ? (
              <>
                <Play className="w-3.5 h-3.5 text-[#2567A8] fill-[#2567A8]" />
                <span className="font-mono text-[11px]">Resume Flow</span>
              </>
            ) : (
              <>
                <Pause className="w-3.5 h-3.5 text-[#667085]" />
                <span className="font-mono text-[11px] text-[#667085]">Pause Flow</span>
              </>
            )}
          </button>
        </motion.div>

      </div>
    </div>
  );
}
