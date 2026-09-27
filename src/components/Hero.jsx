import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

// Hero Industrial Image Assets from src/assets/environments/
import imgSlide1 from '../assets/environments/image.png';
import imgSlide2 from '../assets/environments/image copy.png';
import imgSlide3 from '../assets/environments/hero-aluminium-access.jpg';
import imgSlide4 from '../assets/environments/hero-lifting-equipment.jpg';
import imgSlide5 from '../assets/environments/hero-access-facility.jpg';

// 5 Industrial Visual Story Themes (Strictly factual data from existing project)
const HERO_SLIDES = [
  {
    id: 'slide-01',
    num: '01',
    eyebrow: 'INDUSTRIAL ACCESS SOLUTIONS',
    titleLine1: 'Quality Access',
    titleLine2: 'For Every Working Height',
    description: 'Durable, safe, and reliable ladders and access systems for industrial, commercial, and construction facilities. Built to support work at every elevation.',
    image: imgSlide1,
    imageAlt: 'Creative Work Solutions Industrial Tower Ladders and Access Equipment in Manufacturing Plant',
    primaryCtaText: 'Explore Our Ladders',
    primaryCtaLink: '/products?category=Aluminium+Ladders',
    secondaryCtaText: 'View All Products',
    secondaryCtaLink: '/products',
  },
  {
    id: 'slide-02',
    num: '02',
    eyebrow: 'ALUMINIUM EQUIPMENT',
    titleLine1: 'Built for',
    titleLine2: 'Practical Access',
    description: 'Heavy-duty aluminium step ladders, platform ladders, and mobile access systems engineered for continuous facility maintenance.',
    image: imgSlide2,
    imageAlt: 'Aluminium Ladders, Step Ladders, Scissor Lift and Mobile Access Towers on Polished Warehouse Floor',
    primaryCtaText: 'Explore Aluminium Range',
    primaryCtaLink: '/products?category=Aluminium+Ladders',
    secondaryCtaText: 'View All Products',
    secondaryCtaLink: '/products',
  },
  {
    id: 'slide-03',
    num: '03',
    eyebrow: 'TOWER & PLATFORM SYSTEMS',
    titleLine1: 'Reach Higher.',
    titleLine2: 'Work Smarter.',
    description: 'Tiltable tower ladders, dual mast aerial lifts, and self-supporting mobile scaffolding towers reaching working heights up to 50+ feet.',
    image: imgSlide3,
    imageAlt: 'Mobile Aluminium Tower Ladder and Platform Access Systems in Industrial Facility',
    primaryCtaText: 'Explore Tower Ladders',
    primaryCtaLink: '/products?category=Tower+Ladders',
    secondaryCtaText: 'View All Products',
    secondaryCtaLink: '/products',
  },
  {
    id: 'slide-04',
    num: '04',
    eyebrow: 'LIFTING EQUIPMENT',
    titleLine1: 'Controlled Vertical',
    titleLine2: 'Access',
    description: 'Battery-operated mobile hydraulic scissor platforms, industrial vertical lifts, and heavy-duty goods handling systems.',
    image: imgSlide4,
    imageAlt: 'Industrial Hydraulic Scissor Lift and Material Handling Equipment in High-Bay Warehouse',
    primaryCtaText: 'Explore Lifting Equipment',
    primaryCtaLink: '/products?category=Lifting+Equipment',
    secondaryCtaText: 'View All Products',
    secondaryCtaLink: '/products',
  },
  {
    id: 'slide-05',
    num: '05',
    eyebrow: 'MATERIAL HANDLING',
    titleLine1: 'Move Equipment.',
    titleLine2: 'Move Work Forward.',
    description: 'Hydraulic drum lifters with 360° gear tilt and heavy-gauge goods platform trolleys for floor material distribution.',
    image: imgSlide5,
    imageAlt: 'Modular Aluminium Scaffolding Tower and Industrial Platform Ladders in Equipment Facility',
    primaryCtaText: 'Explore Handling Range',
    primaryCtaLink: '/products?category=Material+Handling',
    secondaryCtaText: 'View All Products',
    secondaryCtaLink: '/products',
  },
];

const AUTOPLAY_INTERVAL = 4500; // 4.5 seconds autoplay

export default function Hero({ onRequestQuote }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Reset autoplay progress key whenever slide changes
  const changeSlide = useCallback((index) => {
    setCurrentSlide(index);
    setProgressKey((prev) => prev + 1);
  }, []);

  const handleNext = useCallback(() => {
    changeSlide((currentSlide + 1) % HERO_SLIDES.length);
  }, [currentSlide, changeSlide]);

  const handlePrev = useCallback(() => {
    changeSlide((currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, [currentSlide, changeSlide]);

  // Autoplay timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      }
    },
    [handleNext, handlePrev]
  );

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Hero Industrial Equipment Showcase"
      className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[680px] xl:min-h-[720px] bg-[#0B1623] text-white overflow-hidden flex items-center outline-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* 1. CINEMATIC FULL-BLEED BACKGROUND IMAGE WITH EDITORIAL CROSSFADE */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#0B1623]" aria-hidden="true">
        <AnimatePresence mode="sync">
          <motion.img
            key={slide.id}
            src={slide.image}
            alt={slide.imageAlt}
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 1.04, x: 10 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, scale: 1, x: 0 }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, scale: 1.01, x: -6 }
            }
            transition={{
              duration: shouldReduceMotion ? 0.35 : 0.95,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute inset-0 w-full h-full object-cover object-[78%_center] sm:object-[75%_center] lg:object-[82%_center] select-none pointer-events-none filter brightness-[0.72] contrast-[1.08]"
            loading={currentSlide === 0 ? 'eager' : 'lazy'}
          />
        </AnimatePresence>

        {/* 2. DIRECTIONAL DARK NAVY OVERLAYS */}
        {/* Multiplying industrial wash for deep tone */}
        <div
          className="absolute inset-0 z-[5] pointer-events-none bg-[#0B1623]/40 mix-blend-multiply"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 z-[6] pointer-events-none bg-black/25"
          aria-hidden="true"
        />

        {/* Left-to-right gradient: deep dark navy for left editorial typography, edge-to-edge photography visibility on right */}
        <div
          className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0B1623] via-[#0B1623]/92 sm:via-[#0B1623]/82 lg:via-[#0B1623]/70 to-[#0B1623]/30"
          aria-hidden="true"
        />

        {/* Top & bottom subtle gradient vignettes for header and section transitions */}
        <div
          className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#0B1623]/85 via-transparent to-[#0B1623]/80"
          aria-hidden="true"
        />
      </div>

      {/* 3. HERO CONTENT WRAPPER */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20">
        <div className="max-w-2xl lg:max-w-xl xl:max-w-2xl">

          {/* Staggered Independent Animated Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="space-y-2.5 sm:space-y-3.5"
            >
              {/* Eyebrow: Fade + Slide */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-2"
              >
                <span className="w-7 h-[2px] bg-[#2567A8] flex-shrink-0" />
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] text-[#8E9AA8] uppercase">
                  {slide.eyebrow}
                </span>
              </motion.div>

              {/* Main Heading: Staggered Line-by-Line Reveal */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-white"
                >
                  {slide.titleLine1}
                </motion.span>
                <motion.span
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
                  className="block text-[#1687E8] mt-0.5 sm:mt-1"
                >
                  {slide.titleLine2}
                </motion.span>
              </h1>

              {/* Supporting Factual Description: Fade + translateY */}
              <motion.p
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
                className="text-sm sm:text-base text-[#8E9AA8] max-w-lg leading-normal sm:leading-relaxed"
              >
                {slide.description}
              </motion.p>

              {/* CTA Buttons: Fade + translateY */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 sm:pt-2.5"
              >
                <Link to={slide.primaryCtaLink} className="sm:w-auto">
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    className="group w-full sm:w-auto rounded-full px-6 py-3 sm:py-3.5 bg-[#2567A8] hover:bg-[#1F558C] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all duration-300 cursor-pointer"
                  >
                    <span>{slide.primaryCtaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </motion.div>
                </Link>

                {onRequestQuote ? (
                  <motion.button
                    type="button"
                    onClick={onRequestQuote}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    className="w-full sm:w-auto rounded-full px-6 py-3 sm:py-3.5 bg-transparent hover:bg-white/10 border border-white/25 hover:border-white/50 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Quotation</span>
                  </motion.button>
                ) : (
                  <Link to={slide.secondaryCtaLink} className="sm:w-auto">
                    <motion.div
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      className="w-full sm:w-auto rounded-full px-6 py-3 sm:py-3.5 bg-transparent hover:bg-white/10 border border-white/25 hover:border-white/50 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{slide.secondaryCtaText}</span>
                    </motion.div>
                  </Link>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* 4. REFINED HERO NAVIGATION & PROGRESS BAR */}
          <div className="pt-6 sm:pt-8 flex items-center gap-5">

            {/* Slide Index Counter (01 / 05) */}
            <div className="font-mono text-xs text-[#8E9AA8] font-bold tracking-widest flex items-center gap-1.5 select-none">
              <span className="text-white">{slide.num}</span>
              <span className="text-[#8E9AA8]/50">/</span>
              <span>0{HERO_SLIDES.length}</span>
            </div>

            {/* Autoplay Horizontal Timing Indicator Bar */}
            <div className="w-20 sm:w-28 h-[2px] bg-white/20 rounded-full overflow-hidden relative" aria-hidden="true">
              <div
                key={`progress-${progressKey}-${isPaused}`}
                className={`h-full bg-[#1687E8] rounded-full origin-left ${
                  isPaused ? 'w-full opacity-60' : 'animate-hero-progress'
                }`}
              />
            </div>

            {/* Navigation Arrows & Dots */}
            <div className="flex items-center gap-3">
              {/* Prev Button */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous equipment slide"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2567A8]"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div
                className="flex items-center gap-2"
                role="tablist"
                aria-label="Hero slide indicators"
              >
                {HERO_SLIDES.map((item, idx) => {
                  const isActive = idx === currentSlide;
                  return (
                    <button
                      key={`dot-${item.id}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`Go to slide ${idx + 1}: ${item.eyebrow}`}
                      onClick={() => changeSlide(idx)}
                      className="p-1 focus:outline-none cursor-pointer"
                    >
                      <span
                        className={`block rounded-full transition-all duration-300 ${
                          isActive
                            ? 'w-2.5 h-2.5 bg-[#2567A8]'
                            : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next equipment slide"
                className="w-8 h-8 rounded-full border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/15 flex items-center justify-center text-white transition-colors cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#2567A8]"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
