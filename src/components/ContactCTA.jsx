import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { COMPANY_INFO } from '../data/company';
import bgTexture from '../assets/environments/env-infrastructure.jpg';

export default function ContactCTA({ onRequestQuote }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-[#0B1623] py-20 sm:py-28 lg:py-36 text-white overflow-hidden border-t border-[#1F2933]">
      
      {/* Subtle Industrial Background Texture (Heavy dark wash, no giant gradient) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <img
          src={bgTexture}
          alt=""
          className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1] opacity-20"
        />
        <div className="absolute inset-0 bg-[#0B1623]/90" />
        <div className="absolute inset-0 technical-grid-dark opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-6 h-[2px] bg-[#1687E8]" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#1687E8]">
            DIRECT CONSULTATION & INQUIRIES
          </span>
          <span className="w-6 h-[2px] bg-[#1687E8]" />
        </div>

        {/* Large Editorial Heading (Section 21) */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] max-w-3xl mx-auto">
          Let’s Find the <br />
          <span className="text-[#1687E8]">Right Equipment.</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-sm sm:text-base lg:text-lg text-[#8E9AA8] max-w-2xl mx-auto mt-5 leading-relaxed">
          Connect with our Saidabad facility team for technical guidance, working height evaluations, custom specifications, and formal institutional quotations.
        </p>

        {/* Action Buttons: Enquire Now + View Products */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onRequestQuote}
            className="group rounded-full px-8 py-4 bg-[#2567A8] hover:bg-[#1F558C] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer w-full sm:w-auto"
          >
            <span>Enquire Now</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>

          <Link
            to="/products"
            className="rounded-full px-8 py-4 bg-transparent hover:bg-white/10 border border-white/20 hover:border-white/50 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <span>View Products</span>
          </Link>
        </div>

        {/* Direct Telephone Coordination */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-[#8E9AA8]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Direct Hyderabad Supply & Fabrication
          </span>
          <span>•</span>
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="text-white hover:text-[#1687E8] transition-colors"
          >
            Call {COMPANY_INFO.phone}
          </a>
        </div>

      </div>
    </section>
  );
}
