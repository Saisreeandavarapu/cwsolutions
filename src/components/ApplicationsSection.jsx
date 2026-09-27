import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Zap, Building2, Wrench, Package, Building, Boxes, Factory } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import SectionReveal from './SectionReveal';

// Genuine high-res environment and product imagery
import imgInfrastructure from '../assets/environments/env-infrastructure.jpg';
import imgWarehouse from '../assets/environments/env-warehouse.jpg';
import imgManufacturing from '../assets/environments/env-manufacturing.jpg';
import imgConstruction from '../assets/environments/hero-aluminium-access.jpg';
import imgMaintenance from '../assets/environments/hero-access-facility.jpg';
import imgLifting from '../assets/environments/hero-lifting-equipment.jpg';
import imgElectrical from '../assets/products/frp/cws-244-frp-wall-extension-ladder.jpeg';

const APPLICATION_SECTORS = [
  {
    id: 'industrial-facilities',
    num: '01',
    title: 'Industrial Facilities',
    tagline: 'High-Reach Plant & Overhead Infrastructure',
    description:
      'Continuous-duty access towers, tiltable ladders, and cantilevered platforms engineered to access overhead piping, cable trays, and lighting across industrial manufacturing plants.',
    equipment: 'Tiltable Tower Ladders (up to 50ft), Telescopic Aerial Lifts, Heavy Duty Scaffolding',
    categoryFilter: 'Tower Ladders',
    image: imgInfrastructure,
    icon: Factory,
  },
  {
    id: 'warehouses',
    num: '02',
    title: 'Warehouses & Logistics',
    tagline: 'Order Picking & High-Density Storage Access',
    description:
      'Mobile trolley ladders with spring-loaded brake casters, dual-mast vertical personnel lifts, and platform goods trolleys configured for narrow rack aisles and distribution centers.',
    equipment: 'CWS 115 Trolley Ladders, Dual Mast Vertical Lifts, Platform Goods Handlers',
    categoryFilter: 'Trolley Ladders',
    image: imgWarehouse,
    icon: Package,
  },
  {
    id: 'manufacturing',
    num: '03',
    title: 'Manufacturing & Assembly',
    tagline: 'Heavy Machine Access & Maintenance',
    description:
      'Rigid platform step ladders, self-supporting extension ladders, and custom mobile platforms built to provide safe machinery inspection, tooling changeovers, and plant maintenance.',
    equipment: 'A-Type Platform Ladders, Double Sided Trestles, Machine Service Stands',
    categoryFilter: 'Aluminium Ladders',
    image: imgManufacturing,
    icon: Building,
  },
  {
    id: 'construction',
    num: '04',
    title: 'Construction & Façades',
    tagline: 'Exterior High-Elevation Work Systems',
    description:
      'Modular double-width aluminium scaffolding frames, zigzag scaffold towers with 5m broad outriggers, and heavy-duty staging platforms designed for exterior cladding and civil sites.',
    equipment: 'Double Width 14m Towers, Zigzag Modular Scaffolding, Mobile Outrigger Platforms',
    categoryFilter: 'Scaffolding',
    image: imgConstruction,
    icon: Building2,
  },
  {
    id: 'maintenance',
    num: '05',
    title: 'Plant Maintenance',
    tagline: 'Daily Facility Repairs & Inspections',
    description:
      'Versatile self-supporting extension ladders, foldable step units, and telescopic mobile ladders designed for rapid deployment across multi-building commercial complexes and airports.',
    equipment: 'Extension Ladders with Wheels, Stool Ladders, Telescopic Maintenance Units',
    categoryFilter: 'Aluminium Ladders',
    image: imgMaintenance,
    icon: Wrench,
  },
  {
    id: 'electrical',
    num: '06',
    title: 'Electrical Environments',
    tagline: 'Non-Conductive High-Voltage Safety',
    description:
      'Fiberglass Reinforced Plastic (FRP) ladders with non-sparking, dielectric side rails, tested to provide operator insulation around 220kV switchyards, sub-stations, and utility poles.',
    equipment: 'FRP Wall Extension Ladders, Self-Supported FRP Trestles, Non-Conductive Platforms',
    categoryFilter: 'FRP Ladders',
    image: imgElectrical,
    icon: Zap,
  },
  {
    id: 'material-handling',
    num: '07',
    title: 'Material Handling',
    tagline: 'Heavy Load Transport & Drum Tilting',
    description:
      'Hydraulic drum lifters with 360-degree gear rotation, heavy-gauge sheet platform trolleys, and hydraulic scissor work tables engineered to reduce manual transport hazards.',
    equipment: 'CWS 307 Drum Lifters (210L), CWS 308 500kg Platform Trolleys, Hydraulic Lifters',
    categoryFilter: 'Material Handling',
    image: imgLifting,
    icon: Boxes,
  },
];

export default function ApplicationsSection() {
  const [activeSectorId, setActiveSectorId] = useState('industrial-facilities');
  const shouldReduceMotion = useReducedMotion();

  const activeSector =
    APPLICATION_SECTORS.find((s) => s.id === activeSectorId) || APPLICATION_SECTORS[0];

  return (
    <section id="applications" className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#D9E0E7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionReveal withAccentWipe={true}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2567A8] uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 bg-[#2567A8]" />
                <span>SECTOR WORKFLOWS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1623] tracking-tight">
                Industrial Applications
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-[#667085] mt-2 max-w-2xl leading-relaxed">
                Equipment configured to meet stringent operational demands across production plants, high-bay warehouses, exterior construction, and electrical installations.
              </p>
            </div>

            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1623] hover:text-[#2567A8] transition-colors"
            >
              <span>View Full Equipment Catalog</span>
              <ArrowRight className="w-4 h-4 text-[#2567A8] transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </SectionReveal>

        {/* IMMERSIVE LARGE VISUAL CANVAS (Section 18) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column: Interactive Category List */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
            <div className="divide-y divide-[#D9E0E7]/80 border-y border-[#D9E0E7]">
              {APPLICATION_SECTORS.map((sector) => {
                const isActive = sector.id === activeSectorId;
                const Icon = sector.icon;

                return (
                  <button
                    key={sector.id}
                    type="button"
                    onMouseEnter={() => setActiveSectorId(sector.id)}
                    onClick={() => setActiveSectorId(sector.id)}
                    className={`w-full text-left py-4 sm:py-5 px-3 sm:px-4 flex items-center justify-between transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-[#F7F8FA] border-l-4 border-l-[#2567A8]'
                        : 'hover:bg-gray-50/80 border-l-4 border-l-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="font-mono text-xs font-bold text-[#8E9AA8]">
                        {sector.num}
                      </span>
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-[#2567A8]' : 'text-[#667085]'}`} />
                        <span
                          className={`text-sm sm:text-base font-bold transition-colors ${
                            isActive ? 'text-[#0B1623]' : 'text-[#667085] hover:text-[#0B1623]'
                          }`}
                        >
                          {sector.title}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`h-[2px] bg-[#2567A8] transition-all duration-300 ${
                          isActive ? 'w-6 opacity-100' : 'w-0 opacity-0'
                        }`}
                      />
                      <ChevronRight
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isActive ? 'text-[#2567A8] translate-x-1' : 'text-gray-300'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Immersive Visual Canvas with Smooth Crossfade */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[420px] sm:h-[480px] lg:h-full min-h-[460px] rounded-sm overflow-hidden border border-[#D9E0E7] bg-[#0B1623] flex flex-col justify-end p-6 sm:p-10 shadow-sm">
              
              {/* Background Image with Smooth Crossfade */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSector.id}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 z-0"
                >
                  <img
                    src={activeSector.image}
                    alt={activeSector.title}
                    className="w-full h-full object-cover filter brightness-[0.68] contrast-[1.06]"
                  />
                  {/* Dark navy overlay for crisp legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1623] via-[#0B1623]/70 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Foreground Sector Information */}
              <div className="relative z-10 space-y-4 max-w-xl text-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${activeSector.id}`}
                    initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-[2px] bg-[#1687E8]" />
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1687E8]">
                        {activeSector.tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {activeSector.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#8E9AA8] leading-relaxed">
                      {activeSector.description}
                    </p>

                    <div className="pt-2 border-t border-white/15">
                      <span className="text-[10px] font-mono text-[#8E9AA8] uppercase tracking-wider block">
                        Typical Equipment Deployed
                      </span>
                      <p className="text-xs font-mono text-white mt-1">
                        {activeSector.equipment}
                      </p>
                    </div>

                    <div className="pt-3">
                      <Link
                        to={`/products?category=${encodeURIComponent(activeSector.categoryFilter)}`}
                        className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-[#2567A8] hover:bg-[#1F558C] text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
                      >
                        <span>Explore Matching Range</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
