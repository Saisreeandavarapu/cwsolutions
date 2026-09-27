import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionReveal from './SectionReveal';
import ProductQuickView from './ProductQuickView';
import { PRODUCTS } from '../data/products';

// 4 Flagship Editorial Showcase Items from verified project products
const EDITORIAL_ITEMS = [
  {
    num: '01',
    category: 'TOWER ACCESS SYSTEMS',
    model: 'CWS 111',
    slug: 'aluminium-tiltable-tower-ladder-cws-111',
    title: 'Aluminium Tiltable Tower Ladder',
    headline: 'Engineered for Practical High-Reach Maintenance',
    description:
      'Multi-stage telescopic tower ladder with gravity-assisted tilt mechanism, dual wire-rope winch system, and positive rung locks designed for plant lighting, HVAC, and overhead utilities.',
    keySpecs: [
      { label: 'Working Height', val: 'Up to 50 ft' },
      { label: 'Structure', val: 'Extruded Aluminium 6063-T6' },
      { label: 'Mobility', val: '4 Heavy Nylon Swivel Wheels' },
    ],
    product: PRODUCTS.find((p) => p.slug.includes('tiltable-tower-ladder') || p.id.includes('111')) || PRODUCTS[0],
  },
  {
    num: '02',
    category: 'MODULAR SCAFFOLDING',
    model: 'CWS 101',
    slug: 'aluminium-scaffolding-zigzag-double-width-cws-101',
    title: 'Double Width Modular Scaffolding',
    headline: 'Stable Platform Architecture for Demanding Work',
    description:
      'Quick-erect double width scaffold system with ribbed cross-braces, trapdoor platform decks, and broad stabilizer outriggers for exterior facades and large-scale industrial construction.',
    keySpecs: [
      { label: 'Working Height', val: 'Up to 14 Meters' },
      { label: 'Platform Size', val: '1.35m × 2.0m Deck' },
      { label: 'Safety', val: 'Full Perimeter Toe-Boards & Rails' },
    ],
    product: PRODUCTS.find((p) => p.slug.includes('zigzag') || p.category === 'Scaffolding') || PRODUCTS[1],
  },
  {
    num: '03',
    category: 'POWERED VERTICAL ACCESS',
    model: 'CWS 303',
    slug: 'cws-303-16m-hydraulic-scissor-lift',
    title: 'Hydraulic Scissor Work Platform',
    headline: 'Controlled Elevation with Heavy Working Payload',
    description:
      'Electro-hydraulic vertical scissor lift with heavy-gauge tubular link arms, overload relief valves, and emergency manual release for factory maintenance and high-bay storage facilities.',
    keySpecs: [
      { label: 'Platform Elevation', val: 'Up to 16 Meters' },
      { label: 'Rated Payload', val: '300–500 kg Capacity' },
      { label: 'Control', val: 'Dual Base & Cage Pushbuttons' },
    ],
    product: PRODUCTS.find((p) => p.slug.includes('scissor-lift') || p.category === 'Lifting Equipment') || PRODUCTS[2],
  },
  {
    num: '04',
    category: 'WAREHOUSE LOGISTICS',
    model: 'CWS 115',
    slug: 'aluminium-trolley-ladder-14ft-cws-115',
    title: 'Mobile Aluminium Trolley Ladder',
    headline: 'Agile Order Picking & Inventory Access',
    description:
      'Lightweight rigid trolley ladder fitted with spring-loaded retractable brake casters that ground automatically upon operator step, wide serrated treads, and high waist safety handrails.',
    keySpecs: [
      { label: 'Platform Height', val: '8 ft to 14 ft Options' },
      { label: 'Step Treads', val: 'Anti-Slip Extruded Serrations' },
      { label: 'Brake Mechanism', val: 'Spring-Loaded Auto Step Lock' },
    ],
    product: PRODUCTS.find((p) => p.slug.includes('trolley-ladder') || p.category === 'Trolley Ladders') || PRODUCTS[3],
  },
];

export default function FeaturedProducts({ onRequestQuote }) {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const handleOpenQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const handleCloseQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32 border-b border-[#D9E0E7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header with Accent Wipe */}
        <SectionReveal withAccentWipe={true}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-4 border-b border-[#D9E0E7] pb-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2567A8] uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 bg-[#2567A8]" />
                <span>FEATURED EQUIPMENT SHOWCASE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1623] tracking-tight">
                Engineered for High-Demand Operations
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-[#667085] mt-3 leading-relaxed">
                Representative industrial machinery manufactured and supplied by Creative Work Solutions across tower systems, modular scaffolding, hydraulic lifts, and mobile warehouse access.
              </p>
            </div>

            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0B1623] hover:text-[#2567A8] transition-colors flex-shrink-0"
            >
              <span>Explore All 30 Catalog Models</span>
              <ArrowRight className="w-4 h-4 text-[#2567A8] transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </SectionReveal>

        {/* Alternating Editorial Showcase Rows */}
        <div className="space-y-20 lg:space-y-28">
          {EDITORIAL_ITEMS.map((item, idx) => {
            const isEven = idx % 2 === 1;
            const targetProduct = item.product || PRODUCTS[0];

            return (
              <motion.div
                key={item.num}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Image Canvas (Left on odd, Right on even) */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <Link
                    to={`/products/${targetProduct.slug}`}
                    className="group block relative aspect-[4/3] bg-[#F7F8FA] border border-[#D9E0E7] hover:border-[#2567A8] p-6 sm:p-10 rounded-sm overflow-hidden transition-colors duration-300 shadow-2xs"
                    aria-label={`View ${item.title}`}
                  >
                    {/* Index Watermark */}
                    <div className="absolute top-4 left-6 font-mono text-xs sm:text-sm font-bold text-[#667085]/60 tracking-wider">
                      {item.num} // SPECIFICATION
                    </div>

                    <div className="absolute top-4 right-6 bg-white px-2.5 py-1 border border-[#D9E0E7] rounded-xs font-mono text-[11px] font-bold text-[#0B1623]">
                      {item.model}
                    </div>

                    {/* Product Image with Hover Scale 1 -> 1.025 & subtle brightness */}
                    <div className="w-full h-full flex items-center justify-center pt-4">
                      <img
                        src={targetProduct.image}
                        alt={`Creative Work Solutions ${item.title}`}
                        className="w-full h-full object-contain filter contrast-[1.02] transition-all duration-500 ease-out group-hover:scale-[1.025] group-hover:brightness-[1.02]"
                        loading="lazy"
                      />
                    </div>

                    {/* Subtle Bottom Accent Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#2567A8] transition-colors duration-300" />
                  </Link>
                </div>

                {/* Editorial Details (Right on odd, Left on even) */}
                <div
                  className={`lg:col-span-5 space-y-5 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Category with Expanding Blue Accent Line */}
                  <div className="group/cat flex items-center gap-2">
                    <span className="w-6 h-[2px] bg-[#2567A8] group-hover/cat:w-10 transition-all duration-300" />
                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#2567A8]">
                      {item.category}
                    </span>
                  </div>

                  {/* Title & Headline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1623] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-[#1F2933] mt-1">
                      "{item.headline}"
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {item.description}
                  </p>

                  {/* Specifications List */}
                  <div className="pt-2 border-t border-[#D9E0E7] divide-y divide-[#D9E0E7]/60">
                    {item.keySpecs.map((spec, sIdx) => (
                      <div key={sIdx} className="py-2 flex items-center justify-between text-xs">
                        <span className="font-mono text-[#667085] uppercase text-[10px]">
                          {spec.label}
                        </span>
                        <span className="font-mono font-semibold text-[#0B1623]">
                          {spec.val}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Link
                      to={`/products/${targetProduct.slug}`}
                      className="group/btn inline-flex items-center gap-2 rounded-full px-5 py-2.5 bg-[#0B1623] hover:bg-[#2567A8] text-white font-semibold text-xs uppercase tracking-wider transition-colors duration-300 shadow-2xs"
                    >
                      <span>Explore Model Range</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#1687E8] transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                    </Link>

                    {onRequestQuote && (
                      <button
                        type="button"
                        onClick={() => onRequestQuote(targetProduct)}
                        className="rounded-full px-5 py-2.5 bg-transparent hover:bg-[#F7F8FA] border border-[#D9E0E7] text-[#0B1623] font-semibold text-xs uppercase tracking-wider transition-colors"
                      >
                        Request Quote
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Consultation Strip */}
        <div className="mt-20 lg:mt-28 p-6 sm:p-8 bg-[#F7F8FA] rounded-sm border border-[#D9E0E7] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left max-w-2xl">
            <h3 className="text-base font-bold text-[#0B1623]">
              Require specific working height, cage capacity, or custom base footprint?
            </h3>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              Certain tower and trolley ladders support custom platform elevations and footprint adjustments per your facility layout.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onRequestQuote && onRequestQuote()}
            className="w-full sm:w-auto bg-[#0B1623] hover:bg-[#2567A8] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-colors whitespace-nowrap active:scale-95 shadow-sm"
          >
            Consult Engineering Team
          </button>
        </div>

      </div>

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={handleCloseQuickView}
        onRequestQuote={onRequestQuote}
      />
    </section>
  );
}
