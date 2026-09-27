import React from 'react';
import { ArrowRight, Layers, Sliders, Boxes, ShieldCheck } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionReveal from './SectionReveal';

const CAPABILITIES = [
  {
    title: 'INDUSTRIAL ACCESS',
    icon: Layers,
    description:
      'Single and multi-stage extension ladders, self-supporting platform ladders, and heavy-duty stool units manufactured with serrated non-slip steps and rubber base traction.',
    specs: 'Aluminium 6063-T6 & Dielectric FRP side rails',
  },
  {
    title: 'LIFTING EQUIPMENT',
    icon: Sliders,
    description:
      'Electro-hydraulic scissor platforms and dual mast aerial lifts designed for vertical operator elevation with dual base and cage push-button controls and emergency lowering valves.',
    specs: 'Up to 16m working heights with 300–500kg payloads',
  },
  {
    title: 'MATERIAL HANDLING',
    icon: Boxes,
    description:
      'Mechanical and hydraulic drum lifters with 360-degree worm-gear rotation, and heavy-gauge sheet platform trolleys for floor material distribution without physical strain.',
    specs: '210L standard drum handling & 500kg platform capacities',
  },
  {
    title: 'SCAFFOLDING SYSTEMS',
    icon: ShieldCheck,
    description:
      'Modular double-width aluminium mobile scaffold towers with ribbed non-slip rungs, trapdoor platform decks, and broad outrigger stabilizers for building facades and plants.',
    specs: 'Quick-erect zigzag double width up to 14m working elevation',
  },
];

export default function CapabilitySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F5F7F9] py-16 sm:py-24 lg:py-32 border-b border-[#D9E1E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT: Large Editorial Typography */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-[#1268B3]" />
              <span>CORE CAPABILITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.12]">
              Equipment designed around <br />
              <span className="text-[#1268B3]">access, height</span> and movement.
            </h2>

            <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
              Every equipment model manufactured and supplied from our Saidabad facility is focused on solving practical elevation and material movement challenges without unsupported claims.
            </p>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono text-[#667085] border-l-2 border-[#1268B3] pl-3 py-1">
                Verified Mechanical Construction • Direct Hyderabad Support
              </span>
            </div>
          </div>

          {/* RIGHT: Structured Capability Blocks with Subtle Dividers */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#D9E1E8] border-y border-[#D9E1E8] bg-white rounded-sm shadow-2xs">
              {CAPABILITIES.map((cap, idx) => {
                const Icon = cap.icon;

                return (
                  <motion.div
                    key={cap.title}
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="p-6 sm:p-7 space-y-2 hover:bg-[#F5F7F9]/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-sm bg-[#071A2B] text-[#1597E5] flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-mono text-sm font-bold tracking-wider text-[#111827] uppercase">
                          {cap.title}
                        </h3>
                      </div>
                      <span className="font-mono text-xs text-[#667085]">
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#667085] leading-relaxed pt-1 pl-11">
                      {cap.description}
                    </p>

                    <div className="pt-2 pl-11">
                      <span className="inline-block font-mono text-[11px] text-[#1268B3] font-semibold">
                        {cap.specs}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
