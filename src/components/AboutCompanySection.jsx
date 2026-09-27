import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Building2,
  Layers,
  Compass,
} from 'lucide-react';
import SectionReveal from './SectionReveal';
import { COMPANY_INFO } from '../data/company';
import imgProfile from '../assets/products/tower/cws-111-aluminium-tiltable-tower-ladder.jpeg';

export default function AboutCompanySection({ isStandalonePage = false }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#D9E0E7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Accent Wipe Animation */}
        <SectionReveal withAccentWipe={true}>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2567A8] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 bg-[#2567A8]" />
              <span>WHO WE ARE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1623] tracking-tight leading-[1.1]">
              Built Around Better <br />
              <span className="text-[#2567A8]">Access Solutions.</span>
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#667085] mt-3 leading-relaxed">
              Operating from Saidabad, Hyderabad, Creative Work Solutions delivers dependable height-access ladders, tower systems, hydraulic lifting platforms, and material handling hardware engineered for industrial manufacturing, warehousing, and commercial infrastructure.
            </p>
          </div>
        </SectionReveal>

        {/* Asymmetric Editorial Grid (Section 16) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column: Factual Editorial Overview & Equipment Groups */}
          <div className="lg:col-span-7 space-y-8">

            {/* Approach Statement */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 border-b border-[#D9E0E7] pb-2">
                <Compass className="w-4 h-4 text-[#2567A8]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B1623]">
                  Industrial Focus & Methodology
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#1F2933] leading-relaxed">
                We believe practical industrial safety is rooted in physical reliability rather than superficial marketing. Every ladder, scaffolding frame, and vertical platform is documented with verified working heights, mechanical locking arrangements, and rated load capacities so engineers can specify equipment with complete certainty.
              </p>
            </motion.div>

            {/* Equipment Groups Grid */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2 border-b border-[#D9E0E7] pb-2">
                <Layers className="w-4 h-4 text-[#2567A8]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B1623]">
                  Equipment Spectrum
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {COMPANY_INFO.equipmentGroups.map((group, idx) => (
                  <Link
                    key={idx}
                    to={group.categoryLink}
                    className="p-3.5 bg-[#F7F8FA] rounded-sm border border-[#D9E0E7] hover:border-[#2567A8] hover:bg-white transition-all duration-300 group/item shadow-2xs"
                  >
                    <div className="flex items-center justify-between text-xs font-bold text-[#0B1623] group-hover/item:text-[#2567A8] mb-1">
                      <span>{group.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#2567A8] transition-transform duration-200 group-hover/item:translate-x-1" />
                    </div>
                    <p className="text-[11px] text-[#667085] line-clamp-2 leading-relaxed">
                      {group.description}
                    </p>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Minimal CTA */}
            {!isStandalonePage && (
              <div className="pt-2">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1623] hover:text-[#2567A8] transition-colors"
                >
                  <span>Read Detailed Company Background</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#2567A8] transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            )}

          </div>

          {/* Right Column: Genuine Equipment Photography & Facility Contact Desk */}
          <div className="lg:col-span-5 space-y-6">

            {/* Genuine Equipment Photography */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#F7F8FA] border border-[#D9E0E7] p-5 rounded-sm shadow-2xs space-y-3"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-[#667085] border-b border-[#D9E0E7] pb-2">
                <span className="font-semibold text-[#0B1623]">AUTHENTIC HARDWARE</span>
                <span>MODEL CWS 111</span>
              </div>

              <div className="aspect-[4/3] bg-white rounded-xs p-4 flex items-center justify-center border border-[#D9E0E7] overflow-hidden group">
                <img
                  src={imgProfile}
                  alt="Creative Work Solutions CWS 111 Tower Ladder"
                  className="w-full h-full object-contain filter contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="text-[11px] text-[#667085] font-mono flex items-center justify-between pt-1">
                <span>Tiltable High-Reach Tower Ladder</span>
                <span className="text-[#2567A8] font-bold">Hyderabad Facility</span>
              </div>
            </motion.div>

            {/* Facility Desk Information */}
            <div className="bg-white border border-[#D9E0E7] p-5 sm:p-6 rounded-sm shadow-2xs space-y-3 text-xs">
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#0B1623] border-b border-[#D9E0E7] pb-2">
                Saidabad Facility Desk
              </h4>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#2567A8] flex-shrink-0 mt-0.5" />
                <span className="text-[#667085] leading-relaxed">
                  {COMPANY_INFO.address.full}
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1 border-t border-[#D9E0E7]/60">
                <Phone className="w-4 h-4 text-[#2567A8] flex-shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-[#2567A8] font-mono font-bold hover:underline"
                >
                  {COMPANY_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5 pt-1 border-t border-[#D9E0E7]/60">
                <Mail className="w-4 h-4 text-[#2567A8] flex-shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-[#2567A8] hover:underline truncate"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
