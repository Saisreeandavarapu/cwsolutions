import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

/**
 * CreativeWorkSolutionsLogo - Premium Two-Tone Horizontal Split Wordmark
 * 
 * EVERY SINGLE CHARACTER is divided horizontally by height:
 * - TOP 50% of each letter -> Industrial Blue (#1597E5)
 * - BOTTOM 50% of each letter -> Pure Crisp White (#FFFFFF)
 * 
 * Implemented via two pixel-perfect matching text layers using CSS clip-path: inset(0 0 50% 0).
 * Guaranteed strictly ONE SINGLE LINE across all viewports (320px to 4K).
 */
export default function CreativeWorkSolutionsLogo({
  className = '',
  showMark = true,
  onClick
}) {
  const brandName = 'Creative Work Solutions';

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Creative Work Solutions"
      className={`group inline-flex items-center gap-2 sm:gap-2.5 lg:gap-3 min-h-[44px] py-1 select-none flex-shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-[#1597E5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1623] rounded-sm transition-transform duration-200 ease-out hover:-translate-y-[1px] whitespace-nowrap ${className}`}
      style={{
        whiteSpace: 'nowrap',
        flexShrink: 0
      }}
    >
      {/* 1. Authentic CWS Brand Emblem (Vertically Aligned) */}
      {showMark && (
        <div className="relative w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 flex-shrink-0 flex items-center justify-center">
          <BrandLogo iconOnly size="sm" />
        </div>
      )}

      {/* 2. Precision Dual-Layer Two-Tone Wordmark (Strictly ONE SINGLE LINE) */}
      <div
        className="relative inline-block font-sans font-extrabold tracking-[-0.025em] leading-none whitespace-nowrap flex-shrink-0 select-none"
        style={{
          whiteSpace: 'nowrap',
          flexShrink: 0
        }}
      >
        {/* BASE LAYER: Pure White (#FFFFFF) - Visible on bottom 50% */}
        <span
          className="block text-[15.5px] xs:text-[17px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-[#FFFFFF] font-extrabold tracking-[-0.025em] leading-none select-none whitespace-nowrap"
          style={{ whiteSpace: 'nowrap' }}
        >
          {brandName}
        </span>

        {/* TOP LAYER: Industrial Blue (#1597E5) - Clipped to Top 50% */}
        <span
          aria-hidden="true"
          className="absolute inset-0 text-[15.5px] xs:text-[17px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-[#1597E5] group-hover:text-[#38BDF8] font-extrabold tracking-[-0.025em] leading-none select-none pointer-events-none transition-colors duration-200 ease-out whitespace-nowrap"
          style={{
            clipPath: 'inset(0 0 50% 0)',
            WebkitClipPath: 'inset(0 0 50% 0)',
            whiteSpace: 'nowrap'
          }}
        >
          {brandName}
        </span>
      </div>
    </Link>
  );
}
