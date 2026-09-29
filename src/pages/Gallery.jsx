import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Camera, Play, Pause, ArrowRight, ShieldCheck, Download, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  MASTER_GALLERY_IMAGES,
  GALLERY_CATEGORIES
} from '../data/galleryData';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryFilters from '../components/gallery/GalleryFilters';
import GalleryMarquee from '../components/gallery/GalleryMarquee';
import GalleryLightbox from '../components/gallery/GalleryLightbox';
import ContactCTA from '../components/ContactCTA';

/**
 * Gallery - Dedicated /gallery Page
 * 
 * - Editorial Lookbook + Modern E-commerce Showcase
 * - Complete 72-image archive (2026 Field Photography + Catalogue Archive)
 * - 3-Row Continuous Multi-Speed Infinite Marquee
 * - Real Category Filters
 * - Fullscreen Lightbox with technical specs & quote integration
 */
export default function Gallery({ onRequestQuote }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    document.title = 'Product Gallery | WearNear • Creative Work Solutions';
    window.scrollTo(0, 0);
  }, []);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: MASTER_GALLERY_IMAGES.length };
    MASTER_GALLERY_IMAGES.forEach((item) => {
      if (item.category) {
        counts[item.category] = (counts[item.category] || 0) + 1;
      }
    });
    return counts;
  }, []);

  // Filter images by active category
  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return MASTER_GALLERY_IMAGES;
    return MASTER_GALLERY_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const handleImageClick = (item) => {
    const idx = filteredImages.findIndex((img) => img.id === item.id);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  const handleLightboxClose = () => {
    setLightboxIndex(null);
  };

  const handleLightboxPrev = () => {
    setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
  };

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-white text-[#0B1623]">
      {/* 1. EDITORIAL GALLERY HERO */}
      <GalleryHero
        totalImages={MASTER_GALLERY_IMAGES.length}
        totalCategories={GALLERY_CATEGORIES.length - 1}
      />

      {/* 2. GALLERY INTERACTIVE WORKSPACE */}
      <section className="relative py-10 sm:py-16 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#FFFFFF] overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-40 technical-grid-pattern" />

        <div className="relative z-10 w-full">
          {/* Controls Bar: Categories & Flow Toggle */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

            {/* Category Filter Chips */}
            <div className="flex-1 min-w-0">
              <GalleryFilters
                categories={GALLERY_CATEGORIES}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                categoryCounts={categoryCounts}
              />
            </div>

            {/* Motion Pause/Resume Toggle */}
            <div className="flex-shrink-0 self-start sm:self-center px-4 sm:px-0">
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                aria-label={isPaused ? 'Resume image flow' : 'Pause image flow'}
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
            </div>

          </div>

          {/* Continuous Multi-Row Moving Image Wall */}
          <GalleryMarquee
            images={filteredImages}
            isPaused={isPaused || lightboxIndex !== null}
            onImageClick={handleImageClick}
          />

          {/* Bottom Counter & Guidance */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#8E9AA8] font-mono">
            <span>
              Hover image to view SKU • Click any photo for fullscreen specification lightbox
            </span>
            <span className="flex items-center gap-1.5 text-[#475467]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1687E8]" />
              Displaying {filteredImages.length} of {MASTER_GALLERY_IMAGES.length} photographs
            </span>
          </div>

        </div>
      </section>

      {/* 3. LIGHTBOX VIEWER */}
      <GalleryLightbox
        isOpen={lightboxIndex !== null}
        images={filteredImages}
        currentIndex={lightboxIndex || 0}
        onClose={handleLightboxClose}
        onPrev={handleLightboxPrev}
        onNext={handleLightboxNext}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
        onRequestQuote={onRequestQuote}
      />

      {/* 4. PROCUREMENT / ENQUIRY CTA SECTION */}
      <ContactCTA onRequestQuote={onRequestQuote} />
    </div>
  );
}
