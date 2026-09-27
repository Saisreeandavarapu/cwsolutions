import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { COMPANY_INFO } from '../data/company';

export default function FinalContactCTA({ onScrollToForm }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Final Equipment Requirement Call to Action"
      className="relative bg-[#071A2B] py-20 sm:py-24 lg:py-28 text-white overflow-hidden border-t border-[#1268B3]/20"
    >
      {/* Subtle industrial line/grid pattern (Section 18: minimal decoration, no large gradient) */}
      <div className="absolute inset-0 technical-grid-dark opacity-20 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Subtle Accent Line */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1, width: 40 } : { opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 40 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[2px] bg-[#1597E5] mx-auto mb-6"
        />

        {/* Heading (Section 18) */}
        <motion.h2
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12]"
        >
          Have an equipment requirement?
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto mt-4 leading-relaxed"
        >
          Let’s discuss the right solution for your application.
        </motion.p>

        {/* Buttons (Section 18) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/products"
            className="group px-7 py-3.5 bg-[#1268B3] hover:bg-[#1597E5] text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto min-h-[50px]"
          >
            <span>EXPLORE PRODUCTS</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={onScrollToForm}
            className="group px-7 py-3.5 bg-transparent hover:bg-white/10 border border-white/20 hover:border-white/50 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto min-h-[50px] cursor-pointer"
          >
            <span>CONTACT OUR TEAM</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Direct Call Coordination */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-gray-400">
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#1597E5]" />
            <span>Call direct: {COMPANY_INFO.phone}</span>
          </a>
          <span>•</span>
          <span>Saidabad, Hyderabad Base</span>
        </div>

      </div>
    </section>
  );
}
