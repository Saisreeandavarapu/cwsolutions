import React from 'react';

/**
 * Authentic CWS (Creative Work Solutions) Vector Brand Logo
 * Accurately reproduces the official company brand identity with dual orbital swooshes,
 * bold industrial typography, and signature cyan chevron accents.
 */
export default function BrandLogo({ className = '', iconOnly = false, size = 'default' }) {
  const isSmall = size === 'sm';
  const iconSize = isSmall ? 'w-8 h-8' : 'w-9 h-9 sm:w-10 sm:h-10';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      {/* 1. AUTHENTIC CWS ORBITAL EMBLEM */}
      <div className={`relative ${iconSize} flex-shrink-0 flex items-center justify-center`}>
        {/* Subtle radial glow background */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#1687E8]/20 via-[#2567A8]/30 to-[#38BDF8]/20 blur-[3px] group-hover:scale-110 transition-transform duration-300" />
        
        {/* Crisp Vector Orbital CWS Emblem */}
        <svg
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)]"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="cwsTopSwoosh" x1="6" y1="20" x2="48" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
              <stop offset="35%" stopColor="#60A5FA" />
              <stop offset="70%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#93C5FD" />
            </linearGradient>
            <linearGradient id="cwsBottomSwoosh" x1="48" y1="34" x2="6" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.2" />
              <stop offset="35%" stopColor="#1687E8" />
              <stop offset="70%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
            <linearGradient id="cwsTextGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
            <radialGradient id="badgeBackdrop" cx="50%" cy="50%" r="50%">
              <stop offset="60%" stopColor="#0E1D2D" />
              <stop offset="100%" stopColor="#070E17" />
            </radialGradient>
          </defs>

          {/* Inner dark badge circle with industrial border */}
          <circle cx="27" cy="27" r="24.5" fill="url(#badgeBackdrop)" stroke="#2567A8" strokeWidth="1" strokeOpacity="0.5" />

          {/* Top Orbital Swoosh: Sweeps from 9 o'clock clockwise over 12 o'clock to 2 o'clock */}
          <path
            d="M 9.5 24 C 10.5 13.5 19 6 31.5 6.5 C 38 6.8 44 10.5 45.5 12.5 C 44 11 38 8.5 31.5 8.5 C 20.5 8.5 12.5 15.5 10.8 24 Z"
            fill="url(#cwsTopSwoosh)"
          />

          {/* Bottom Orbital Swoosh: Sweeps from 3 o'clock clockwise under 6 o'clock to 8 o'clock */}
          <path
            d="M 44.5 30 C 43.5 40.5 35 48 22.5 47.5 C 16 47.2 10 43.5 8.5 41.5 C 10 43 16 45.5 22.5 45.5 C 33.5 45.5 41.5 38.5 43.2 30 Z"
            fill="url(#cwsBottomSwoosh)"
          />

          {/* Bold Center Industrial CWS Monogram */}
          <text
            x="27"
            y="29.5"
            textAnchor="middle"
            dominantBaseline="central"
            fill="url(#cwsTextGrad)"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="900"
            fontStyle="italic"
            fontSize="14.5"
            letterSpacing="-0.5"
          >
            CWS
          </text>

          {/* Subtitle inside badge: CREATIVE WORK SOLUTIONS */}
          <text
            x="27"
            y="38.5"
            textAnchor="middle"
            fill="#93C5FD"
            fontFamily="system-ui, -apple-system, sans-serif"
            fontWeight="700"
            fontSize="3.8"
            letterSpacing="0.8"
          >
            SOLUTIONS
          </text>
        </svg>
      </div>

      {/* 2. COMPANY NAME & SUBTITLE */}
      {!iconOnly && (
        <div className="flex flex-col min-w-0 justify-center">
          {/* Main Brand Title: CREATIVE */}
          <div className="flex items-center gap-1.5">
            <span className="text-base sm:text-lg lg:text-xl font-black tracking-[0.06em] text-white leading-none group-hover:text-[#38BDF8] transition-colors">
              CREATIVE
            </span>
          </div>

          {/* Sub-brand with Signature Brand Chevrons: ◄ WORK SOLUTIONS ► */}
          <div className="flex items-center gap-1.5 mt-1">
            {/* Left Chevron Accent */}
            <svg className="w-2.5 h-2 text-[#38BDF8] flex-shrink-0" viewBox="0 0 10 8" fill="currentColor">
              <path d="M 9 0.5 L 1.5 4 L 9 7.5 Z" />
            </svg>

            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.22em] text-[#93C5FD] uppercase leading-none truncate">
              WORK SOLUTIONS
            </span>

            {/* Right Chevron Accent */}
            <svg className="w-2.5 h-2 text-[#38BDF8] flex-shrink-0" viewBox="0 0 10 8" fill="currentColor">
              <path d="M 1 0.5 L 8.5 4 L 1 7.5 Z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
