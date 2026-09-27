import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import imgQuality from '../assets/environments/env-manufacturing.jpg';

export default function QualitySection({ onRequestQuote, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  const qualityPoints = [
    'Documented Working Heights & Load Ratings',
    'Extruded High-Grade Aluminium & Anti-Conductive FRP',
    'Dual Wire-Rope Winches & Positive Pawl Rung Locks',
    'Factory Ground Traction & Tested Stabilizers',
  ];

  return (
    <section
      id="quality"
      className={`bg-[#0B1623] text-white py-20 sm:py-28 lg:py-36 border-b border-[#1F2933] overflow-hidden ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Content with Animated Thin Vertical Line */}
          <div className="lg:col-span-6 relative pl-6 sm:pl-8">

            {/* Thin vertical line animated when section enters viewport */}
            <motion.div
              initial={shouldReduceMotion ? { height: '100%' } : { height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#2567A8]"
              aria-hidden="true"
            />

            <div className="space-y-6">
              {/* Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#1687E8] uppercase tracking-[0.22em]">
                  QUALITY & MECHANICAL INTEGRITY
                </span>
              </div>

              {/* Large Editorial Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
                Confidence in Every <br />
                <span className="text-[#1687E8]">Working Height.</span>
              </h2>

              {/* Minimal Supporting Copy */}
              <p className="text-sm sm:text-base text-[#8E9AA8] leading-relaxed max-w-xl">
                In industrial access and material handling operations, safety depends on rigid mechanical construction, verified dimensional parameters, and equipment specified precisely to the working environment.
              </p>

              {/* Verified Quality Attributes */}
              <div className="space-y-3 pt-2">
                {qualityPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#2567A8] flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-gray-300 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Primary Action Button */}
              {onRequestQuote && (
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => onRequestQuote()}
                    className="group rounded-full px-6 py-3.5 bg-[#2567A8] hover:bg-[#1F558C] text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Consult Technical Team</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Large Industrial Image */}
          <div className="lg:col-span-6">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[16/11] rounded-sm overflow-hidden border border-[#1F2933] shadow-lg group"
            >
              <img
                src={imgQuality}
                alt="Creative Work Solutions Industrial Manufacturing and Engineering Fabrication Quality"
                className="w-full h-full object-cover filter brightness-[0.82] contrast-[1.08] transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Corner Metadata Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0B1623]/85 backdrop-blur-sm border border-[#1F2933] p-3 rounded-xs flex items-center justify-between text-xs font-mono">
                <span className="text-white font-semibold">SAIDABAD FACILITY INSPECTION</span>
                <span className="text-[#1687E8]">VERIFIED SPECIFICATIONS</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
