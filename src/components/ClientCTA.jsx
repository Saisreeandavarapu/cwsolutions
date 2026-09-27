import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { COMPANY_INFO } from '../data/company';
import bgEquipment from '../assets/environments/hero-aluminium-access.jpg';

export default function ClientCTA({ onRequestQuote }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-[#071A2B] py-20 sm:py-28 lg:py-32 text-white overflow-hidden border-t border-[#1268B3]/20">
      {/* Subtle background product imagery with deep dark wash */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <img
          src={bgEquipment}
          alt=""
          className="w-full h-full object-cover filter brightness-[0.2] contrast-[1.15] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071A2B]/95 via-[#071A2B]/85 to-[#071A2B]/95" />
        <div className="absolute inset-0 technical-grid-dark opacity-20" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle Accent Line */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 48 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[2px] bg-[#1597E5] mx-auto mb-6"
        />

        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-mono font-bold tracking-[0.25em] text-[#1597E5] uppercase mb-4"
        >
          TECHNICAL SPECIFICATION & SUPPLY
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.12] max-w-3xl mx-auto"
        >
          Looking for the right equipment <br className="hidden sm:inline" />
          for your work environment?
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mt-5 leading-relaxed"
        >
          Explore our equipment range or contact Creative Work Solutions for your requirement.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/products"
            className="group px-7 py-3.5 bg-[#1268B3] hover:bg-[#1597E5] text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm w-full sm:w-auto min-h-[44px]"
          >
            <span>EXPLORE PRODUCTS</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={onRequestQuote}
            className="group px-7 py-3.5 bg-transparent hover:bg-white/10 border border-white/20 hover:border-white/50 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px] cursor-pointer"
          >
            <span>REQUEST QUOTATION</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Direct Supply Verification */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-gray-400">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Hyderabad Manufacturing & Distribution Base
          </span>
          <span>•</span>
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#1597E5]" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
