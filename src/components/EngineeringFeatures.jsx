import React from 'react';
import { ShieldCheck, Anchor, ZapOff, CheckCircle2, Lock, Disc, Sliders } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionReveal from './SectionReveal';

const TECHNICAL_FEATURES = [
  {
    num: '01',
    title: 'Anti-Slip Serrated Steps',
    description:
      'Extruded ribbed and serrated step treads provide sure footing in wet, oily, or dusty industrial working environments.',
    attribute: 'Extruded Aluminium 6063-T6',
    icon: ShieldCheck,
  },
  {
    num: '02',
    title: 'Dual Wire-Rope & Pawl Locking Mechanism',
    description:
      'Special positive gravity-pawl locking mechanisms secure telescopic rungs and tower extension stages at each incremental foot height.',
    attribute: 'Mechanical Positive Engagement',
    icon: Lock,
  },
  {
    num: '03',
    title: 'Molded Rubber Grip Feet & Upper Bumpers',
    description:
      'Durable anti-skid rubber feet provide high ground traction while upper non-marking bumpers protect architectural walls and machinery.',
    attribute: 'High-Density Synthetic Rubber',
    icon: CheckCircle2,
  },
  {
    num: '04',
    title: 'Adjustable Stabilizers & Outrigger Screw Jacks',
    description:
      'Mechanical 4-point outrigger legs and heavy-duty screw jacks expand the base footprint to prevent tipping on unlevel plant floors.',
    attribute: 'Four-Point Wide Footprint',
    icon: Anchor,
  },
  {
    num: '05',
    title: 'Dielectric Non-Conductive FRP Construction',
    description:
      'Fiberglass reinforced plastic side rails prevent electrical conductivity for operator safety around live substations and switchgear.',
    attribute: 'Dielectric High-Voltage Safety',
    icon: ZapOff,
  },
  {
    num: '06',
    title: 'Controlled Hydraulic Ascent & Emergency Lowering',
    description:
      'Precision hydraulic cylinders with overload relief and manual descent valves ensure smooth platform lift and failsafe emergency lowering.',
    attribute: 'Failsafe Valve Redundancy',
    icon: Sliders,
  },
];

export default function EngineeringFeatures() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F7F8FA] py-16 sm:py-24 lg:py-32 border-b border-[#D9E0E7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionReveal withAccentWipe={true}>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2567A8] uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 bg-[#2567A8]" />
              <span>MECHANICAL ATTRIBUTES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1623] tracking-tight leading-[1.12]">
              Designed Around <br />
              <span className="text-[#2567A8]">Practical Engineering.</span>
            </h2>
            <p className="text-xs sm:text-sm lg:text-base text-[#667085] mt-3 leading-relaxed">
              Every ladder, tower system, and material handling unit is built with documented mechanical safety features intended for rigorous industrial environments.
            </p>
          </div>
        </SectionReveal>

        {/* Technical Editorial Vertical List (Section 19) */}
        <div className="border-t border-[#D9E0E7] divide-y divide-[#D9E0E7]">
          {TECHNICAL_FEATURES.map((feature, idx) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.num}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="py-6 sm:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start hover:bg-white/70 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-sm transition-colors duration-200 group"
              >
                {/* 01 Number + Small Purposeful Icon */}
                <div className="md:col-span-3 flex items-center gap-4">
                  <span className="font-mono text-base sm:text-lg font-bold text-[#2567A8] group-hover:text-[#1687E8] transition-colors">
                    {feature.num}
                  </span>
                  <div className="w-8 h-8 rounded-sm bg-white border border-[#D9E0E7] text-[#2567A8] flex items-center justify-center flex-shrink-0 group-hover:border-[#2567A8] transition-colors shadow-2xs">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-[#0B1623] group-hover:text-[#2567A8] transition-colors md:hidden">
                    {feature.title}
                  </h3>
                </div>

                {/* Feature Title (Desktop) */}
                <div className="hidden md:block md:col-span-4">
                  <h3 className="font-bold text-base text-[#0B1623] group-hover:text-[#2567A8] transition-colors">
                    {feature.title}
                  </h3>
                  <span className="inline-block mt-1 font-mono text-[10px] uppercase tracking-wider text-[#667085]">
                    {feature.attribute}
                  </span>
                </div>

                {/* Feature Description & Verification */}
                <div className="md:col-span-5 space-y-2">
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {feature.description}
                  </p>
                  <span className="inline-block md:hidden font-mono text-[10px] uppercase tracking-wider text-[#667085]">
                    {feature.attribute}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
