import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import breakImage from '../assets/environments/hero-aluminium-access.jpg';

export default function IndustrialImageBreak() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Industrial Equipment Visual Showcase"
      className="relative w-full overflow-hidden bg-[#071A2B] border-t border-b border-[#D9E1E8]"
    >
      <div className="relative h-[320px] sm:h-[420px] lg:h-[500px] w-full overflow-hidden group">
        
        {/* Full-width Real Product Image (Section 16: Multiple ladders in industrial warehouse) */}
        <motion.img
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-20px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          src={breakImage}
          alt="Creative Work Solutions Aluminium Ladders, Platforms and Scaffolding in Warehouse"
          className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.05] transition-transform duration-700 group-hover:scale-103"
        />

        {/* Elegant Wipe Reveal Overlay (Section 17: subtle mask wipe that gracefully reveals the photo) */}
        {!shouldReduceMotion && (
          <motion.div
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-[#071A2B] origin-right pointer-events-none z-10"
          />
        )}

        {/* Cinematic Film Overlay & Subtle Technical Grid */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/90 via-[#071A2B]/30 to-transparent pointer-events-none z-15" />
        <div className="absolute inset-0 technical-grid-dark opacity-15 pointer-events-none z-15" />

        {/* Minimal Typography Overlay (Section 16: ACCESS, LIFTING, MATERIAL HANDLING) */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16 max-w-7xl mx-auto z-20">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-3"
          >
            {/* Subtle Blue Accent Line */}
            <div className="w-10 h-[2px] bg-[#1597E5]" />

            {/* Small Typography Statement */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono font-bold tracking-[0.28em] text-white uppercase">
              <span className="text-white hover:text-[#1597E5] transition-colors">ACCESS</span>
              <span className="text-[#1597E5]">•</span>
              <span className="text-white hover:text-[#1597E5] transition-colors">LIFTING</span>
              <span className="text-[#1597E5]">•</span>
              <span className="text-white hover:text-[#1597E5] transition-colors">MATERIAL HANDLING</span>
            </div>

            <p className="text-xs text-gray-300 max-w-sm font-sans leading-relaxed">
              Industrial ladders, mobile scaffolding towers, and powered aerial platforms engineered for high-elevation worksites.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
