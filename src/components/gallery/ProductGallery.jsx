import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  MASTER_GALLERY_IMAGES,
  GALLERY_CATEGORIES,
  GALLERY_VALIDATION
} from '../../data/galleryData';
import GalleryHeader from './GalleryHeader';
import GalleryFilters from './GalleryFilters';
import GalleryMarquee from './GalleryMarquee';
import GalleryLightbox from './GalleryLightbox';

/**
 * ProductGallery - Premium Executive Product Photography & Catalogue Showcase
 * 
 * - Integrates complete collection of 72 verified photographs
 * - Combines 2026 High-Resolution Field Photography + Catalogue Archive
 * - Continuous 3-row multi-speed horizontal image wall
 * - Category filtering derived from real product inventory
 * - Fullscreen interactive lightbox with quote action integration
 * - Performance optimized: GPU translates, off-viewport pause, zero state re-renders per frame
 */
export default function ProductGallery({
  images = MASTER_GALLERY_IMAGES,
  onRequestQuote
}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [isOffscreen, setIsOffscreen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const sectionRef = useRef(null);

  // Compute category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: images.length };
    images.forEach((item) => {
      if (item.category) {
        counts[item.category] = (counts[item.category] || 0) + 1;
      }
    });
    return counts;
  }, [images]);

  // Filtered collection based on active category
  const filteredImages = useMemo(() => {
    if (activeCategory === 'All') return images;
    return images.filter((img) => img.category === activeCategory);
  }, [images, activeCategory]);

  // Pause marquee when off-screen to preserve CPU/GPU performance
  useEffect(() => {
    if (!sectionRef.current || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOffscreen(!entry.isIntersecting);
      },
      { rootMargin: '200px' }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Total pause state: manual toggle OR lightbox open OR scrolled far off-screen
  const isMarqueePaused = isManualPaused || lightboxIndex !== null || isOffscreen;

  // Handle clicking an image to open the Lightbox
  const handleImageClick = (item) => {
    const index = filteredImages.findIndex((img) => img.id === item.id);
    setLightboxIndex(index >= 0 ? index : 0);
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
    <section
      ref={sectionRef}
      id="product-gallery"
      aria-label="WearNear Product Gallery"
      className="relative py-16 sm:py-24 bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#FFFFFF] border-y border-[#D9E0E7] overflow-hidden"
    >
      {/* Subtle Background Technical Dot Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40 technical-grid-pattern" />

      <div className="relative z-10 w-full">
        {/* 1. EDITORIAL HEADER */}
        <GalleryHeader
          totalImages={images.length}
          isPaused={isManualPaused}
          onTogglePause={() => setIsManualPaused((prev) => !prev)}
        />

        {/* 2. REAL CATEGORY FILTERS */}
        <GalleryFilters
          categories={GALLERY_CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          categoryCounts={categoryCounts}
        />

        {/* 3. CONTINUOUS 3-ROW IMAGE MARQUEE */}
        <GalleryMarquee
          images={filteredImages}
          isPaused={isMarqueePaused}
          onImageClick={handleImageClick}
        />

        {/* Subtle Bottom Accent Indicator */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 flex items-center justify-between text-xs text-[#8E9AA8] font-mono">
          <span className="hidden sm:inline">
            Hover to inspect details • Click any photograph for technical lightbox
          </span>
          <span className="sm:hidden">
            Tap photo to open full view
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1687E8]" />
            Showing {filteredImages.length} of {images.length} catalogue photographs
          </span>
        </div>
      </div>

      {/* 4. FULLSCREEN PHOTOGRAPHIC LIGHTBOX */}
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
    </section>
  );
}

// Export validation data for internal verification
export { GALLERY_VALIDATION };
