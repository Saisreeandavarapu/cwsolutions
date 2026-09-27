import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionReveal from './SectionReveal';

// Genuine Creative Work Solutions Product Images
import imgAluminium from '../assets/products/aluminium/cws-105-platform-step-ladder-extension.jpeg';
import imgFRP from '../assets/products/frp/cws-244-frp-wall-extension-ladder.jpeg';
import imgTower from '../assets/products/tower/cws-111-aluminium-tiltable-tower-ladder.jpeg';
import imgScissor from '../assets/products/lifting/cws-303-16m-hydraulic-scissor-lift.jpeg';
import imgHandling from '../assets/products/material-handling/cws-307-hydraulic-drum-lifter.jpeg';
import imgScaffold from '../assets/products/scaffolding/cws-101-aluminium-scaffolding-zigzag-double-width.jpeg';

const EQUIPMENT_CATEGORIES = [
  {
    id: 'aluminium-ladders',
    num: '01',
    name: 'Aluminium Ladders',
    tag: 'LIGHTWEIGHT ACCESS',
    link: '/products?category=Aluminium+Ladders',
    image: imgAluminium,
  },
  {
    id: 'frp-ladders',
    num: '02',
    name: 'FRP Ladders',
    tag: 'NON-CONDUCTIVE',
    link: '/products?category=FRP+Ladders',
    image: imgFRP,
  },
  {
    id: 'tower-ladders',
    num: '03',
    name: 'Tower Ladders',
    tag: 'UP TO 50 FT REACH',
    link: '/products?category=Tower+Ladders',
    image: imgTower,
  },
  {
    id: 'scissor-lifts',
    num: '04',
    name: 'Scissor Lifts',
    tag: 'POWERED VERTICAL',
    link: '/products?category=Scissor+Lifts',
    image: imgScissor,
  },
  {
    id: 'material-handling',
    num: '05',
    name: 'Material Handling',
    tag: 'DRUM & FREIGHT',
    link: '/products?category=Material+Handling',
    image: imgHandling,
  },
  {
    id: 'scaffolding',
    num: '06',
    name: 'Scaffolding Towers',
    tag: 'DOUBLE WIDTH STABILITY',
    link: '/products?category=Scaffolding',
    image: imgScaffold,
  },
];

export default function EquipmentRail() {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(1);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
    setScrollProgress(progress);

    // Calculate approximate active card index
    const total = EQUIPMENT_CATEGORIES.length;
    const idx = Math.min(
      total,
      Math.max(1, Math.round((scrollLeft / (maxScroll || 1)) * (total - 1)) + 1)
    );
    setActiveItemIndex(idx);
  };

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === 'left' ? -340 : 340;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#D9E1E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionReveal withAccentWipe={true}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 bg-[#1268B3]" />
                <span>HARDWARE SPECTRUM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
                Equipment for the Work Ahead
              </h2>
            </div>

            {/* Controls & Progress Indicator (01 / 06) */}
            <div className="flex items-center gap-4">
              <div className="font-mono text-xs font-bold text-[#667085] flex items-center gap-1.5">
                <span className="text-[#111827]">0{activeItemIndex}</span>
                <span>/</span>
                <span>0{EQUIPMENT_CATEGORIES.length}</span>
              </div>

              {/* Desktop Scroll Arrow Controls */}
              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  aria-label="Scroll equipment left"
                  className="w-8 h-8 rounded-full border border-[#D9E1E8] hover:border-[#1268B3] bg-white flex items-center justify-center text-[#111827] hover:text-[#1268B3] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  aria-label="Scroll equipment right"
                  className="w-8 h-8 rounded-full border border-[#D9E1E8] hover:border-[#1268B3] bg-white flex items-center justify-center text-[#111827] hover:text-[#1268B3] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Horizontal Editorial Rail */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar snap-x snap-mandatory"
        >
          {EQUIPMENT_CATEGORIES.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group flex-shrink-0 w-[240px] sm:w-[280px] lg:w-[310px] snap-start bg-[#F5F7F9] hover:bg-white border border-[#D9E1E8] hover:border-[#1268B3] rounded-sm p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 shadow-2xs"
            >
              {/* Product Photograph Canvas */}
              <div>
                <div className="relative aspect-[4/3] bg-white rounded-xs border border-[#D9E1E8]/70 p-3 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-contain filter contrast-[1.02] transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 font-mono text-[10px] font-bold text-[#667085] bg-[#F5F7F9] px-1.5 py-0.5 rounded-xs">
                    {item.num}
                  </div>
                </div>

                {/* Category & Tag */}
                <div className="mt-4 space-y-1">
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#1268B3]">
                    {item.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-[#111827] group-hover:text-[#1268B3] transition-colors">
                    {item.name}
                  </h3>
                </div>
              </div>

              {/* Explore Link */}
              <div className="mt-4 pt-3 border-t border-[#D9E1E8]/80 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#111827] group-hover:text-[#1268B3] transition-colors">
                <span>Explore Range</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5 text-[#1268B3]" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
