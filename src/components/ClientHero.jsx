import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import heroImg from '../assets/environments/hero-aluminium-access.jpg';

export default function ClientHero({ onRequestQuote }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Industries We Support Hero"
      className="relative bg-[#071A2B] text-white overflow-hidden py-20 sm:py-28 lg:py-36 border-b border-[#D9E1E8]/10"
    >
      {/* Background subtle technical grid */}
      <div className="absolute inset-0 technical-grid-dark opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* LEFT: Editorial Content */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            
            {/* Eyebrow & Animated Accent Line */}
            <div className="flex items-center gap-3">
              <motion.span
                initial={shouldReduceMotion ? { width: 48 } : { width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-[2px] bg-[#1268B3] flex-shrink-0"
              />
              <motion.span
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs font-mono font-bold tracking-[0.22em] text-[#1597E5] uppercase"
              >
                INDUSTRIES WE SUPPORT
              </motion.span>
            </div>

            {/* Large Heading */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]"
            >
              Built for <br />
              <span className="text-[#1597E5]">Demanding</span> <br />
              Work Environments
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base lg:text-lg text-[#8E9AA8] max-w-xl leading-relaxed"
            >
              Creative Work Solutions provides industrial access, lifting and material-handling equipment designed for demanding work environments across manufacturing, warehousing, and infrastructure.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <Link to="/products" className="sm:w-auto">
                <div className="group rounded-full px-7 py-3.5 sm:py-4 bg-[#1268B3] hover:bg-[#0e5491] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all duration-300">
                  <span>Explore Equipment Range</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </Link>

              {onRequestQuote && (
                <button
                  type="button"
                  onClick={onRequestQuote}
                  className="rounded-full px-7 py-3.5 sm:py-4 bg-transparent hover:bg-white/10 border border-white/20 hover:border-white/50 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Consultation</span>
                </button>
              )}
            </motion.div>

          </div>

          {/* RIGHT: Large Cinematic Industrial Visual */}
          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden border border-[#D9E1E8]/15 bg-[#071A2B] shadow-2xl group">
              <motion.div
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden"
              >
                <img
                  src={heroImg}
                  alt="Creative Work Solutions High-Reach Access Equipment Deployed in Demanding Industrial Facility"
                  className="w-full h-full object-cover filter brightness-[0.82] contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Soft dark vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/90 via-transparent to-transparent pointer-events-none" />

                {/* Corner Technical Metadata */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90 bg-[#071A2B]/80 backdrop-blur-sm p-3 rounded-xs border border-white/10">
                  <span className="font-semibold text-white">ACCESS & LIFTING HARDWARE</span>
                  <span className="text-[#1597E5]">FIELD TESTED</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
