import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Building2, FileCheck, PhoneCall, ShieldCheck } from 'lucide-react';
import SectionReveal from './SectionReveal';
import { COMPANY_INFO } from '../data/company';
import imgProcurement from '../assets/environments/hero-access-facility.jpg';

export default function ClientsSection({ onRequestQuote, className = '' }) {
  const shouldReduceMotion = useReducedMotion();

  const procurementPillars = [
    {
      num: '01',
      title: 'Direct Manufacturing Supply',
      description:
        'Fulfilling direct equipment orders for manufacturing plants, fabrication workshops, assembly units, and distribution hubs across Telangana and pan-India.',
      icon: Building2,
    },
    {
      num: '02',
      title: 'Contractor & Institutional RFQs',
      description:
        'Processing formal purchase orders, contractor bulk equipment schedules, and technical compliance sheets for commercial infrastructure and maintenance projects.',
      icon: FileCheck,
    },
    {
      num: '03',
      title: 'Approved Vendor Registration',
      description:
        'Available for direct onboarding as an approved access equipment vendor with documentation for audits, billing, and factory dispatch.',
      icon: PhoneCall,
    },
  ];

  return (
    <section className={`bg-white py-16 sm:py-24 lg:py-32 border-b border-[#D9E0E7] overflow-hidden ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionReveal withAccentWipe={true}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2567A8] uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 bg-[#2567A8]" />
                <span>INSTITUTIONAL PROCUREMENT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1623] tracking-tight">
                Our Clients & Procurement
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-[#667085] mt-2.5 leading-relaxed">
                Supplying verified access machinery, custom height towers, and material handling solutions to facility managers, infrastructure contractors, and industrial plants.
              </p>
            </div>

            {onRequestQuote && (
              <button
                type="button"
                onClick={() => onRequestQuote()}
                className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-[#0B1623] hover:bg-[#2567A8] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-2xs self-start md:self-auto"
              >
                <span>Submit Institutional RFQ</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#1687E8] transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>
            )}
          </div>
        </SectionReveal>

        {/* Editorial Layout: Large Cinematic Image + Minimal Procurement Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Column: Industrial Environment Image */}
          <div className="lg:col-span-6">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#D9E0E7] bg-[#F7F8FA] group shadow-2xs"
            >
              <img
                src={imgProcurement}
                alt="Creative Work Solutions Equipment Deployed in Industrial Facility"
                className="w-full h-full object-cover filter contrast-[1.04] transition-all duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1623]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono flex items-center justify-between">
                <span>COMMERCIAL SUPPLY & FABRICATION</span>
                <span className="text-[#1687E8]">HYDERABAD BASE</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3 Clean Technical Procurement Pillars */}
          <div className="lg:col-span-6 space-y-6">
            <div className="divide-y divide-[#D9E0E7]">
              {procurementPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.num}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="py-5 first:pt-0 last:pb-0 space-y-2"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-bold text-[#2567A8]">
                        {pillar.num}
                      </span>
                      <Icon className="w-4 h-4 text-[#2567A8]" />
                      <h3 className="font-bold text-base text-[#0B1623]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed pl-7">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Vendor Registration Direct Contact Strip */}
            <div className="p-4 bg-[#F7F8FA] rounded-sm border border-[#D9E0E7] flex items-center justify-between text-xs font-mono">
              <span className="text-[#667085]">Direct Procurement Desk</span>
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="font-bold text-[#2567A8] hover:underline"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
