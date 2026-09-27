import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import cinematicImage from '../assets/environments/hero-lifting-equipment.jpg';

export default function ContactImageSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Industrial Equipment Visual"
      className="relative w-full overflow-hidden bg-[#071A2B] border-t border-[#1268B3]/20"
    >
      <div className="relative h-[340px] sm:h-[420px] lg:h-[500px] w-full overflow-hidden group">
        {/* Cinematic Photograph */}
        <motion.img
          initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          src={cinematicImage}
          alt="Creative Work Solutions Industrial Lifting & Material Handling Equipment"
          className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.75] transition-transform duration-700 group-hover:scale-103"
          loading="lazy"
        />

        {/* Cinematic Film Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-black/40 to-transparent" />
        <div className="absolute inset-0 technical-grid-dark opacity-20 pointer-events-none" />

        {/* Statement Overlay (Section 16) */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-14 max-w-7xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            {/* Minimal Accent line */}
            <div className="w-12 h-[2px] bg-[#1597E5]" />

            {/* Subtle Editorial Statement */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm font-mono font-bold tracking-[0.25em] text-white uppercase">
              <span className="text-white hover:text-[#1597E5] transition-colors">ACCESS</span>
              <span className="text-[#1597E5]">•</span>
              <span className="text-white hover:text-[#1597E5] transition-colors">LIFTING</span>
              <span className="text-[#1597E5]">•</span>
              <span className="text-white hover:text-[#1597E5] transition-colors">MATERIAL HANDLING</span>
            </div>

            <p className="text-xs text-gray-300 max-w-md font-sans leading-relaxed">
              Industrial grade access ladders, lifting platforms, and site logistics equipment supplied directly from Hyderabad.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
