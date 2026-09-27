import React from 'react';
import { ArrowDown, Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { COMPANY_INFO } from '../data/company';
import heroImage from '../assets/environments/env-warehouse.jpg';

export default function ContactHero({ onScrollToForm }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Contact Creative Work Solutions Hero"
      className="relative bg-[#071A2B] text-white overflow-hidden border-b border-[#D9E1E8]/10"
    >
      {/* Background subtle technical grid */}
      <div className="absolute inset-0 technical-grid-dark opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[520px] lg:min-h-[580px] items-stretch">
          
          {/* LEFT: 52% Editorial Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center py-12 sm:py-16 lg:py-24 pr-0 lg:pr-12 space-y-6 sm:space-y-7 z-10">
            
            {/* Small Eyebrow */}
            <div className="flex items-center gap-3">
              <motion.span
                initial={shouldReduceMotion ? { width: 36 } : { width: 0 }}
                animate={{ width: 36 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="h-[2px] bg-[#1268B3] flex-shrink-0"
              />
              <motion.span
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs font-mono font-bold tracking-[0.24em] text-[#1597E5] uppercase"
              >
                GET IN TOUCH
              </motion.span>
            </div>

            {/* Large Heading */}
            <motion.h1
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]"
            >
              Let’s Talk About <br />
              <span className="text-[#1597E5]">Your Equipment</span> <br className="hidden sm:inline" />
              Requirement.
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-sm sm:text-base lg:text-lg text-[#8E9AA8] max-w-xl leading-relaxed"
            >
              Tell us what equipment you need and our team can help you identify the right solution for your work environment.
            </motion.p>

            {/* Direct CTA Buttons */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2"
            >
              <button
                type="button"
                onClick={onScrollToForm}
                className="group px-7 py-3.5 bg-[#1268B3] hover:bg-[#1597E5] text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm min-h-[50px] cursor-pointer"
              >
                <span>REQUEST A QUOTATION</span>
                <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="group px-7 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/40 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2 min-h-[50px]"
              >
                <Phone className="w-3.5 h-3.5 text-[#1597E5]" />
                <span>+91 79896 51726</span>
              </a>
            </motion.div>

          </div>

          {/* RIGHT: 48% Edge-to-Edge Industrial Photography */}
          <div className="lg:col-span-5 relative flex items-center justify-center my-6 lg:my-0">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-72 sm:h-96 lg:h-full max-h-[540px] overflow-hidden rounded-sm border border-white/15 shadow-2xl bg-[#091522] group"
            >
              <img
                src={heroImage}
                alt="Creative Work Solutions Industrial Warehouse Equipment"
                className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08] transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B] via-transparent to-transparent lg:hidden" />
              
              {/* Minimal caption badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 bg-[#071A2B]/90 border border-white/10 backdrop-blur-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#1597E5] uppercase block">
                    INDUSTRIAL FLEET SUPPLY
                  </span>
                  <span className="text-xs text-white font-medium">
                    Saidabad, Hyderabad • Direct Factory Quotations
                  </span>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
