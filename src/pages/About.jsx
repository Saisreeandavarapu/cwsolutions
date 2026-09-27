import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Building2,
  ShieldCheck,
  Layers,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

// Authentic Industrial Assets from the Project
import imgHero from '../assets/environments/hero-aluminium-access.jpg';
import imgIntro from '../assets/environments/image copy.png';
import imgSolutions from '../assets/environments/image.png';
import imgQuality from '../assets/environments/hero-lifting-equipment.jpg';
import imgEnvironment from '../assets/environments/env-warehouse.jpg';
import catAluminium from '../assets/environments/hero-aluminium-access.jpg';
import catFrp from '../assets/environments/env-infrastructure.jpg';
import catTower from '../assets/environments/image.png';
import catLifting from '../assets/environments/hero-lifting-equipment.jpg';
import catMaterial from '../assets/environments/env-manufacturing.jpg';

// 5 Core Equipment Capability Categories with Genuine Project Data
const CAPABILITY_CATEGORIES = [
  {
    num: '01',
    title: 'Aluminium Access Equipment',
    description: 'Single, platform, and extension ladders engineered from structural aluminium alloys with anti-slip rungs for commercial and facility maintenance.',
    link: '/products?category=Aluminium+Ladders',
    image: catAluminium,
    alt: 'Aluminium Platform and Step Ladders on Polished Factory Floor'
  },
  {
    num: '02',
    title: 'FRP Access Equipment',
    description: 'Non-conductive fiberglass-reinforced plastic ladders engineered for high-voltage power substations, switchyards, and electrical maintenance isolation.',
    link: '/products?category=FRP+Ladders',
    image: catFrp,
    alt: 'FRP Non-Conductive Industrial Ladders in Substation Environment'
  },
  {
    num: '03',
    title: 'Tower & Platform Equipment',
    description: 'Heavy-duty tiltable and telescopic tower systems offering high-reach working access up to 50+ feet with steel base chassis and outriggers.',
    link: '/products?category=Tower+Ladders',
    image: catTower,
    alt: 'High-Reach Tiltable Aluminium Tower Ladders in Manufacturing Plant'
  },
  {
    num: '04',
    title: 'Lifting Equipment',
    description: 'Hydraulic scissor lifting platforms and electric dual-mast vertical aerial work platforms engineered for high-payload vertical elevation.',
    link: '/products?category=Lifting+Equipment',
    image: catLifting,
    alt: 'Mobile Hydraulic Scissor Lift in Industrial High-Bay Logistics Bay'
  },
  {
    num: '05',
    title: 'Material Handling Equipment',
    description: 'Hydraulic 360° drum lifters and 500kg heavy-duty steel goods transport platform trolleys built for rugged warehouse and shop-floor material distribution.',
    link: '/products?category=Material+Handling',
    image: catMaterial,
    alt: 'Heavy-Duty Industrial Material Handling Equipment in Production Facility'
  }
];

export default function About({ onRequestQuote }) {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = 'About Us — Creative Work Solutions | Industrial Equipment Hyderabad';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFFFFF] text-[#111827] min-h-screen selection:bg-[#2567A8] selection:text-white">

      {/* =========================================================================
          1. ABOUT HERO (Cinematic, Editorial, Large Whitespace, Asymmetrical)
          ========================================================================= */}
      <section
        aria-label="About Hero"
        className="relative min-h-[75vh] lg:min-h-[88vh] flex items-center bg-[#FFFFFF] border-b border-[#D9DEE5] overflow-hidden py-16 lg:py-24"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left Content (Editorial Alignment & Generous Whitespace) */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 xl:col-span-5 space-y-6 lg:space-y-8"
            >
              {/* Eyebrow with Expanding Thin Blue Line */}
              <div className="flex items-center gap-3">
                <motion.span
                  initial={shouldReduceMotion ? { width: 32 } : { width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-[2px] bg-[#2567A8] flex-shrink-0"
                />
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.20em] uppercase text-[#2567A8]">
                  ABOUT CREATIVE WORK SOLUTIONS
                </span>
              </div>

              {/* Large Editorial Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-light text-[#111827] tracking-tight leading-[1.08]">
                Built Around Better <br />
                <span className="font-medium text-[#111827]">Access Solutions.</span>
              </h1>

              {/* Supporting Factual Copy */}
              <p className="text-base sm:text-lg text-[#667085] leading-relaxed max-w-xl font-normal">
                Creative Work Solutions focuses on industrial access, height-access towers, hydraulic lifting machinery, modular scaffolding, and heavy-duty material-handling equipment. Built around practical mechanical durability and verified structural safety for demanding facility operations.
              </p>

              {/* Minimal CTAs & Vertical Accent */}
              <div className="pt-2 flex flex-wrap items-center gap-5 sm:gap-8">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#2567A8] hover:bg-[#1687E8] px-6 sm:px-7 py-3.5 rounded-xs transition-colors shadow-sm group"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                {onRequestQuote ? (
                  <button
                    type="button"
                    onClick={onRequestQuote}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#111827] hover:text-[#2567A8] py-3.5 transition-colors border-b border-[#111827]/30 hover:border-[#2567A8]"
                  >
                    <span>Request Quotation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#111827] hover:text-[#2567A8] py-3.5 transition-colors border-b border-[#111827]/30 hover:border-[#2567A8]"
                  >
                    <span>Get in Touch</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </motion.div>

            {/* Right Large Industrial Photography */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 xl:col-span-7"
            >
              <div className="relative overflow-hidden rounded-xs border border-[#D9DEE5] shadow-lg group">
                <img
                  src={imgHero}
                  alt="Creative Work Solutions High-Reach Aluminium Tower and Access Systems in Industrial Facility"
                  className="w-full aspect-[4/3] lg:aspect-[16/11] object-cover object-center filter brightness-[0.96] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  loading="eager"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#111827]/70 via-transparent to-transparent p-5 sm:p-6 text-white flex items-end justify-between">
                  <span className="text-[10px] sm:text-xs font-mono font-medium tracking-widest uppercase">
                    HYDERABAD INDUSTRIAL BASE
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono text-white/80">
                    CWS ENGINEERING
                  </span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          2. COMPANY INTRODUCTION (Dark Charcoal Editorial, Two-Column)
          ========================================================================= */}
      <section
        aria-label="Company Introduction"
        className="bg-[#171A1F] text-white py-20 sm:py-24 lg:py-32 border-b border-[#111827] overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Left Column: Editorial Statement */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6 lg:space-y-8"
            >
              <div>
                <span className="text-xs font-mono font-bold tracking-[0.20em] uppercase text-[#1687E8] block mb-2">
                  WHO WE ARE
                </span>
                <span className="w-10 h-[2px] bg-[#1687E8] block" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-[1.12]">
                Solutions designed <br />
                <span className="font-medium text-white">for every working height.</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#D9DEE5]/80 leading-relaxed font-normal">
                <p>
                  Based at Saidabad, Hyderabad, Creative Work Solutions delivers comprehensive access and vertical handling solutions tailored to manufacturing plants, warehousing facilities, construction sites, and electrical utilities.
                </p>
                <p>
                  Our equipment offering is developed around practical mechanical durability, stable operator support, and verified structural specifications. Rather than unsupported marketing claims, our approach is strictly product-focused: documented equipment dimensions, heavy structural alloys, and direct technical communication.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center gap-4 text-xs font-mono text-[#D9DEE5]/70">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#1687E8]" />
                  <span>Saidabad, Hyderabad, Telangana – 500 059</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Large Industrial Image Visually Dominating */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden rounded-xs border border-white/10 shadow-2xl group">
                <img
                  src={imgIntro}
                  alt="Creative Work Solutions Genuine Industrial Ladders and Access Equipment on Polished Floor"
                  className="w-full aspect-[4/3] lg:aspect-[16/11] object-cover object-center filter brightness-[0.92] contrast-[1.06] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          3. INDUSTRIAL ACCESS SOLUTIONS (Asymmetrical Editorial, Light Section)
          ========================================================================= */}
      <section
        aria-label="Industrial Access Solutions"
        className="bg-[#FFFFFF] py-20 sm:py-24 lg:py-32 border-b border-[#D9DEE5] overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

          {/* Large Section Statement Heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75 }}
            className="max-w-3xl mb-12 sm:mb-16"
          >
            <span className="text-xs font-mono font-bold tracking-[0.20em] uppercase text-[#2567A8] block mb-3">
              INDUSTRIAL SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#111827] tracking-tight leading-[1.1]">
              Access equipment <br />
              <span className="font-medium text-[#111827]">built around the work.</span>
            </h2>
          </motion.div>

          {/* Asymmetrical Layout (60% Image, 40% Editorial Content) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left: Large Product / Environment Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="relative overflow-hidden rounded-xs border border-[#D9DEE5] shadow-md group">
                <img
                  src={imgSolutions}
                  alt="Industrial Access Equipment and Mobile Tower Ladders in Warehouse Bay"
                  className="w-full aspect-[16/10] lg:aspect-[16/10] object-cover object-center filter brightness-[0.95] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right: Editorial Narrative & Minimal Outlined Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-6"
            >
              <h3 className="text-2xl sm:text-3xl font-normal text-[#111827] tracking-tight leading-snug">
                Engineered stability at elevation.
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#667085] leading-relaxed font-normal">
                <p>
                  Working at height requires positive mechanical locks, balanced chassis geometries, and stable operator outriggers. We specify equipment based on physical parameters: working height, safe working load, platform dimensions, and facility environmental constraints.
                </p>
                <p>
                  From single-section aluminium step ladders to tiltable tower systems reaching up to 50+ feet, every product is engineered to deliver reliable support under continuous shift demands.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#111827] text-[#111827] hover:bg-[#111827] hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors rounded-xs group"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          4. QUALITY & ENGINEERING (Alternating Layout, Subtle Background)
          ========================================================================= */}
      <section
        aria-label="Quality and Engineering"
        className="bg-[#F7F8FA] py-20 sm:py-24 lg:py-32 border-b border-[#D9DEE5] overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

            {/* Left: Large Industrial Equipment Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6"
            >
              <div className="relative overflow-hidden rounded-xs border border-[#D9DEE5] shadow-md group">
                <img
                  src={imgQuality}
                  alt="Industrial Lifting and Scissor Platform Machinery"
                  className="w-full aspect-[4/3] lg:aspect-[5/4] object-cover object-center filter brightness-[0.96] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right: Content with Thin Vertical Line beside it */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-6 border-l-2 border-[#2567A8] pl-6 sm:pl-8 lg:pl-10 space-y-6"
            >
              <span className="text-xs font-mono font-bold tracking-[0.20em] uppercase text-[#2567A8] block">
                QUALITY
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#111827] tracking-tight leading-[1.12]">
                Designed for demanding <br />
                <span className="font-medium text-[#111827]">working environments.</span>
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#667085] leading-relaxed font-normal">
                <p>
                  In industrial access and material-handling operations, quality is defined by structural integrity, accurate specifications, and equipment suited precisely to the operational conditions of the facility.
                </p>
                <p>
                  We prioritize heavy-gauge structural aluminium alloys, anti-skid step profiles, industrial-grade caster wheels with positive wheel locks, and non-conductive FRP composite channels for electrical safety. Every design detail is chosen for real-world mechanical reliability.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#2567A8] hover:text-[#1687E8] transition-colors"
                >
                  <span>View Equipment Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          5. PRODUCT CAPABILITY SECTION (Large Photography + Interactive Category List)
          ========================================================================= */}
      <section
        aria-label="Product Capability"
        className="bg-[#FFFFFF] py-20 sm:py-24 lg:py-32 border-b border-[#D9DEE5] overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.75 }}
            className="max-w-3xl mb-12 sm:mb-16"
          >
            <span className="text-xs font-mono font-bold tracking-[0.20em] uppercase text-[#2567A8] block mb-3">
              PRODUCT CAPABILITY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#111827] tracking-tight leading-[1.12]">
              From everyday access <br />
              <span className="font-medium text-[#111827]">to specialized industrial equipment.</span>
            </h2>
          </motion.div>

          {/* Split Screen: Active Large Photography (Left) + Vertical Category List (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left: Dynamic Large Category Photograph with Smooth Crossfade */}
            <div className="lg:col-span-6 lg:sticky lg:top-28">
              <div className="relative aspect-[4/3] lg:aspect-[16/11] rounded-xs overflow-hidden border border-[#D9DEE5] shadow-md bg-[#F7F8FA]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={CAPABILITY_CATEGORIES[activeCategoryIdx].num}
                    src={CAPABILITY_CATEGORIES[activeCategoryIdx].image}
                    alt={CAPABILITY_CATEGORIES[activeCategoryIdx].alt}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full object-cover filter brightness-[0.96] contrast-[1.04]"
                  />
                </AnimatePresence>

                {/* Micro Tag Overlay */}
                <div className="absolute top-4 left-4 bg-[#111827]/90 text-white font-mono text-[11px] px-3 py-1 rounded-xs tracking-wider uppercase">
                  CATEGORY {CAPABILITY_CATEGORIES[activeCategoryIdx].num}
                </div>
              </div>
            </div>

            {/* Right: Clean Editorial Vertical Category List */}
            <div className="lg:col-span-6 divide-y divide-[#D9DEE5] border-y border-[#D9DEE5]">
              {CAPABILITY_CATEGORIES.map((cat, idx) => {
                const isActive = activeCategoryIdx === idx;

                return (
                  <Link
                    key={cat.num}
                    to={cat.link}
                    onMouseEnter={() => setActiveCategoryIdx(idx)}
                    onClick={() => setActiveCategoryIdx(idx)}
                    className={`block py-6 sm:py-8 px-2 sm:px-4 transition-all group ${
                      isActive ? 'bg-[#F7F8FA]/80' : 'hover:bg-[#F7F8FA]/40'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-2">
                        {/* Number & Indicator */}
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-mono text-xs sm:text-sm font-bold transition-colors ${
                              isActive ? 'text-[#2567A8]' : 'text-[#667085] group-hover:text-[#2567A8]'
                            }`}
                          >
                            {cat.num}
                          </span>
                          <span
                            className={`h-[1.5px] transition-all duration-300 ${
                              isActive ? 'w-8 bg-[#2567A8]' : 'w-0 bg-transparent group-hover:w-4 group-hover:bg-[#2567A8]'
                            }`}
                          />
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-normal text-[#111827] group-hover:text-[#2567A8] transition-colors tracking-tight">
                          {cat.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[#667085] leading-relaxed max-w-lg font-normal pt-1">
                          {cat.description}
                        </p>
                      </div>

                      {/* Arrow Icon */}
                      <div className="pt-2 flex-shrink-0">
                        <div className="w-8 h-8 rounded-full border border-[#D9DEE5] flex items-center justify-center text-[#111827] group-hover:border-[#2567A8] group-hover:text-[#2567A8] transition-all">
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          6. INDUSTRIAL ENVIRONMENT / VISUAL STORY (Full-Width Cinematic Section)
          ========================================================================= */}
      <section
        aria-label="Industrial Environment"
        className="relative w-full h-[60vh] sm:h-[70vh] lg:h-[75vh] flex items-center overflow-hidden border-b border-[#111827]"
      >
        {/* Full-Bleed High-Res Environment Background */}
        <img
          src={imgEnvironment}
          alt="High-Bay Industrial Warehouse Facility Logistics and Handling"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.08] select-none pointer-events-none"
          loading="lazy"
        />

        {/* Subtle Dark Directional Overlay for Refined Readability */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#111827]/85 via-[#111827]/60 to-[#111827]/25 pointer-events-none"
          aria-hidden="true"
        />

        {/* Minimal Editorial Text */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-4 sm:space-y-6 text-white"
          >
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#1687E8]" />
              <span className="text-xs font-mono font-bold tracking-[0.20em] uppercase text-[#1687E8]">
                BUILT FOR THE WORKPLACE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white tracking-tight leading-[1.1]">
              Equipment that supports <br />
              <span className="font-medium text-white">access, movement and productivity.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#D9DEE5]/85 leading-relaxed max-w-xl font-normal pt-1">
              From continuous warehouse logistics to critical utility power installations, Creative Work Solutions equips facilities with robust, stable access platforms.
            </p>
          </motion.div>
        </div>
      </section>


      {/* =========================================================================
          7. FINAL COMPANY STATEMENT / MINIMAL CTA (White, Spacious, Zero Clutter)
          ========================================================================= */}
      <section
        aria-label="Final Company Statement"
        className="bg-[#FFFFFF] py-24 sm:py-28 lg:py-36 text-center overflow-hidden"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.85 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Small Uppercase Eyebrow */}
            <span className="text-xs font-mono font-bold tracking-[0.20em] uppercase text-[#2567A8] block">
              CREATIVE WORK SOLUTIONS
            </span>

            {/* Large Statement Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-light text-[#111827] tracking-tight leading-[1.12]">
              Better equipment. <br />
              Better access. <br />
              <span className="font-medium text-[#111827]">Better work.</span>
            </h2>

            {/* Short Supporting Paragraph */}
            <p className="text-sm sm:text-base lg:text-lg text-[#667085] max-w-2xl mx-auto leading-relaxed font-normal">
              Based at Saidabad, Hyderabad, our team assists industrial procurement managers, safety engineers, and facility teams with direct factory quotes, specification sheets, and scheduled dispatches.
            </p>

            {/* Minimal Clean Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <Link
                to="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-[#2567A8] hover:bg-[#1687E8] px-8 py-4 rounded-xs transition-colors shadow-sm group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {onRequestQuote ? (
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#111827] hover:text-[#2567A8] px-8 py-4 border border-[#D9DEE5] hover:border-[#2567A8] rounded-xs transition-colors"
                >
                  <span>Request a Quotation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              ) : (
                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#111827] hover:text-[#2567A8] px-8 py-4 border border-[#D9DEE5] hover:border-[#2567A8] rounded-xs transition-colors"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
