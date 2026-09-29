import React from 'react';
import { Camera, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * GalleryHero - Editorial Hero for the dedicated Gallery Page
 * 
 * - Restrained typography and fashion-lookbook aesthetics
 * - Title: "Explore the WearNear Collection"
 * - Subtitle: "Discover products across the WearNear catalogue."
 * - Key inventory metrics (72 Verified Photographs, 9 Equipment Categories)
 */
export default function GalleryHero({ totalImages = 72, totalCategories = 9 }) {
  return (
    <section className="relative pt-12 pb-8 sm:pt-20 sm:pb-12 bg-[#0B1623] text-white border-b border-white/10 overflow-hidden">
      {/* Background Subtle Gradient & Technical Grid */}
      <div className="absolute inset-0 bg-radial from-[#12283E] via-[#0B1623] to-[#08101A] opacity-80 pointer-events-none" />
      <div className="absolute inset-0 technical-grid-dark opacity-35 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

          {/* Left: Editorial Heading */}
          <div className="max-w-2xl">
            {/* Small Index Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-mono tracking-widest text-[#1687E8] uppercase mb-4"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>CATALOGUE / GALLERY</span>
              <span className="text-white/40">•</span>
              <span className="text-white/80">AUTHENTIC PHOTOGRAPHY</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              Explore the WearNear Collection
            </motion.h1>

            {/* Editorial Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-3 text-base sm:text-lg text-[#8E9AA8] leading-relaxed max-w-xl"
            >
              Discover products across the WearNear catalogue. A continuous visual archive combining 2026 field photography with historical technical documentation.
            </motion.p>
          </div>

          {/* Right: Key Verified Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center sm:justify-start gap-4 sm:gap-6 flex-wrap"
          >
            <div className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs text-left">
              <span className="block font-mono text-xl sm:text-2xl font-extrabold text-white">
                {totalImages}
              </span>
              <span className="text-[11px] font-mono uppercase text-[#8E9AA8] tracking-wider">
                Real Photos
              </span>
            </div>

            <div className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs text-left">
              <span className="block font-mono text-xl sm:text-2xl font-extrabold text-[#1687E8]">
                {totalCategories}
              </span>
              <span className="text-[11px] font-mono uppercase text-[#8E9AA8] tracking-wider">
                Categories
              </span>
            </div>

            <div className="px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-xs text-left hidden sm:block">
              <span className="block font-mono text-xl sm:text-2xl font-extrabold text-[#2567A8]">
                100%
              </span>
              <span className="text-[11px] font-mono uppercase text-[#8E9AA8] tracking-wider">
                Verified
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
