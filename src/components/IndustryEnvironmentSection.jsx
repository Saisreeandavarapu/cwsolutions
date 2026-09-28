import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Building2, Package, Wrench, Building, Zap, Boxes, Factory, Hammer } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionReveal from './SectionReveal';

// Genuine environments and product photography
import imgInfrastructure from '../assets/environments/env-infrastructure.jpg';
import imgWarehouse from '../assets/environments/env-warehouse.jpg';
import imgConstruction from '../assets/environments/hero-aluminium-access.jpg';
import imgManufacturing from '../assets/environments/env-manufacturing.jpg';
import imgMaintenance from '../assets/environments/hero-access-facility.jpg';
import { PRODUCT_IMAGES } from '../data/productImages';

const imgElectrical = imgInfrastructure;
const imgFacility = PRODUCT_IMAGES.aStep1White;
import imgMaterialHandling from '../assets/environments/hero-lifting-equipment.jpg';

const ENVIRONMENTS = [
  {
    id: 'industrial-facilities',
    num: '01',
    title: 'Industrial Facilities',
    subtitle: 'High-Reach Plant & Overhead Piping',
    description: 'Heavy continuous-duty access towers and tiltable ladders engineered to service overhead pipelines, lighting systems, and structural framing across manufacturing plants.',
    equipment: 'Tiltable Tower Ladders, Telescopic Aerial Platforms',
    categoryLink: '/products?category=Tower+Ladders',
    image: imgInfrastructure,
    icon: Factory,
    isLarge: true,
  },
  {
    id: 'warehouses',
    num: '02',
    title: 'Warehouses & Logistics',
    subtitle: 'High-Bay Racking & Inventory Audits',
    description: 'Mobile trolley ladders with spring-loaded auto-grounding brakes and dual-mast personnel lifts configured for narrow aisle maneuverability.',
    equipment: 'Trolley Ladders, Dual Mast Vertical Lifts',
    categoryLink: '/products?category=Trolley+Ladders',
    image: imgWarehouse,
    icon: Package,
    isLarge: false,
  },
  {
    id: 'construction',
    num: '03',
    title: 'Construction & Façades',
    subtitle: 'Modular Staging & Exterior Elevation',
    description: 'Modular double-width aluminium scaffolding frames with 5-meter wide outriggers and trapdoor platform decks designed for exterior cladding and commercial construction.',
    equipment: 'Double Width 14m Towers, Zigzag Modular Scaffolding',
    categoryLink: '/products?category=Scaffolding',
    image: imgConstruction,
    icon: Building2,
    isLarge: true,
  },
  {
    id: 'factory-operations',
    num: '04',
    title: 'Factory Operations',
    subtitle: 'Assembly Lines & Tooling Changeovers',
    description: 'Rigid platform step ladders and self-supporting extension units built to provide stable access around active production lines, stamping presses, and machining centers.',
    equipment: 'Platform Step Ladders, Heavy Stool Ladders',
    categoryLink: '/products?category=Aluminium+Ladders',
    image: imgManufacturing,
    icon: Hammer,
    isLarge: false,
  },
  {
    id: 'building-maintenance',
    num: '05',
    title: 'Building Maintenance',
    subtitle: 'HVAC Servicing & Architectural Access',
    description: 'Lightweight tiltable towers and telescopic ladders designed for quick mobilization through standard double doors, elevators, and facility corridors.',
    equipment: 'Telescopic Maintenance Lifts, Compact Towers',
    categoryLink: '/products?category=Tower+Ladders',
    image: imgMaintenance,
    icon: Wrench,
    isLarge: false,
  },
  {
    id: 'electrical-maintenance',
    num: '06',
    title: 'Electrical Environments',
    subtitle: '220kV Substations & Utility Safety',
    description: 'Fiberglass Reinforced Plastic (FRP) ladders with non-sparking, dielectric side rails, tested to provide electrical insulation for line maintenance and switchgear.',
    equipment: 'FRP Wall Extension Ladders, FRP Trestles',
    categoryLink: '/products?category=FRP+Ladders',
    image: imgElectrical,
    icon: Zap,
    isLarge: true,
  },
  {
    id: 'facility-management',
    num: '07',
    title: 'Facility Management',
    subtitle: 'Malls, Airports & Commercial Properties',
    description: 'Self-supporting platform step ladders, stool ladders, and compact foldable ladders for daily light repairs, sign installations, and janitorial operations.',
    equipment: 'A-Type Platform Ladders, Extension Ladders with Wheels',
    categoryLink: '/products?category=Aluminium+Ladders',
    image: imgFacility,
    icon: Building,
    isLarge: false,
  },
  {
    id: 'material-handling',
    num: '08',
    title: 'Material Handling',
    subtitle: 'Drum Tilting & Warehouse Freight',
    description: 'Hydraulic drum lifters with 360° gear tilt and heavy-gauge steel platform goods trolleys for floor material distribution without physical strain.',
    equipment: 'CWS 307 Drum Lifters (210L), Heavy Duty Goods Trolleys',
    categoryLink: '/products?category=Material+Handling',
    image: imgMaterialHandling,
    icon: Boxes,
    isLarge: true,
  },
];

export default function IndustryEnvironmentSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-[#F5F7F9] py-16 sm:py-24 lg:py-32 border-b border-[#D9E1E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionReveal withAccentWipe={true}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4 border-b border-[#D9E1E8] pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 bg-[#1268B3]" />
                <span>APPLICATION ENVIRONMENTS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight">
                Where Our Equipment Fits
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-[#667085] mt-2.5 leading-relaxed">
                Creative Work Solutions supplies access, lifting, and handling machinery engineered for specific operational environments across industrial plants, distribution hubs, and commercial construction.
              </p>
            </div>

            <div className="font-mono text-xs text-[#667085] uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>08 Application Sectors</span>
            </div>
          </div>
        </SectionReveal>

        {/* DESKTOP ASYMMETRIC EDITORIAL GRID (Section 5 & 6) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {ENVIRONMENTS.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white border border-[#D9E1E8] hover:border-[#1268B3] rounded-sm overflow-hidden flex flex-col transition-all duration-300 shadow-2xs hover:shadow-subtle"
              >
                {/* Image Frame with 350-500ms smooth hover scale 1 -> 1.04 & dark overlay */}
                <div
                  className={`relative w-full overflow-hidden bg-[#071A2B] ${
                    item.isLarge ? 'aspect-[16/11]' : 'aspect-[16/9]'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={`Work environment: ${item.title}`}
                    className="w-full h-full object-cover filter contrast-[1.04] brightness-[0.92] transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />

                  {/* Overlay transition opacity 0 -> 0.15 */}
                  <div className="absolute inset-0 bg-[#071A2B] opacity-0 group-hover:opacity-15 transition-opacity duration-400 pointer-events-none" />

                  {/* Gradient vignette for text badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071A2B]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Micro Index & Sector Badge */}
                  <div className="absolute top-4 left-4 bg-[#071A2B]/80 backdrop-blur-sm px-2.5 py-1 rounded-xs border border-white/10 text-[10px] font-mono font-bold text-white flex items-center gap-2">
                    <span className="text-[#1597E5]">{item.num}</span>
                    <span>{item.subtitle}</span>
                  </div>

                  <div className="absolute top-4 right-4 w-8 h-8 rounded-sm bg-[#071A2B]/80 text-[#1597E5] flex items-center justify-center border border-white/10">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content Panel with text translation & arrow translation */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-[#111827] group-hover:text-[#1268B3] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#667085] mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Equipment Tag & Link */}
                  <div className="pt-3 border-t border-[#D9E1E8]/70 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] font-mono uppercase text-[#667085]">
                        Typical Equipment
                      </span>
                      <span className="text-xs font-mono font-semibold text-[#111827]">
                        {item.equipment}
                      </span>
                    </div>

                    <Link
                      to={item.categoryLink}
                      className="group/link inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1268B3] hover:text-[#0e5491] transition-colors py-1 flex-shrink-0"
                    >
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* MOBILE TOUCH-SCROLLABLE RAIL (Section 19: card width 240-290px, no huge 8-card vertical stack) */}
        <div className="block md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 pt-2 -mx-4 px-4 no-scrollbar snap-x snap-mandatory">
            {ENVIRONMENTS.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={`mobile-${item.id}`}
                  className="w-[260px] flex-shrink-0 snap-start bg-white border border-[#D9E1E8] rounded-sm overflow-hidden flex flex-col justify-between shadow-2xs"
                >
                  <div className="relative aspect-[16/10] bg-[#071A2B] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#071A2B]/85 px-2 py-0.5 rounded-xs text-[10px] font-mono text-[#1597E5]">
                      {item.num}
                    </div>
                  </div>

                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base font-bold text-[#111827]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#667085] line-clamp-2 mt-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-[#D9E1E8]/70">
                      <Link
                        to={item.categoryLink}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1268B3]"
                      >
                        <span>Explore Range</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-[11px] font-mono text-center text-[#667085] mt-3">
            ← Swipe to view all 8 application environments →
          </p>
        </div>

      </div>
    </section>
  );
}
