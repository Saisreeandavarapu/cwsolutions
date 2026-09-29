import React, { useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * GalleryFilters - Compact editorial category filter chips
 * 
 * - Only real categories from existing project product data
 * - Dynamic count badges
 * - Framer motion smooth layoutId indicator
 * - Mobile horizontal scrollable with zero page overflow
 */
export default function GalleryFilters({
  categories = [],
  activeCategory = 'All',
  onSelectCategory,
  categoryCounts = {}
}) {
  const scrollRef = useRef(null);

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
      {/* Scrollable Container on Mobile, Flex on Desktop */}
      <div
        ref={scrollRef}
        className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 scroll-smooth"
        role="tablist"
        aria-label="Filter gallery by equipment category"
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const count = categoryCounts[category];

          return (
            <button
              key={category}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(category)}
              className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors duration-200 flex items-center gap-1.5 outline-none focus-visible:ring-2 focus-visible:ring-[#2567A8] ${
                isActive
                  ? 'text-white'
                  : 'text-[#475467] hover:text-[#0B1623] hover:bg-[#F2F4F7]'
              }`}
            >
              {/* Active Background Pill with Framer Motion */}
              {isActive && (
                <motion.div
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 bg-[#0B1623] rounded-full shadow-xs"
                  transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                />
              )}

              {/* Label */}
              <span className="relative z-10 font-sans tracking-wide">
                {category}
              </span>

              {/* Dynamic Count Badge */}
              {count !== undefined && (
                <span
                  className={`relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-[#EAECF0] text-[#667085]'
                  }`}
                >
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
