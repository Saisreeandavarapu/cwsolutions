import React from 'react';

const HIGHLIGHT_PHRASES = [
  'QUALITY PRODUCTS',
  'COMPETITIVE PRICING',
  'INDUSTRIAL ACCESS SOLUTIONS',
  'LIFTING EQUIPMENT',
  'MATERIAL HANDLING',
  'PROFESSIONAL SUPPORT',
];

export default function TrustHighlights() {
  return (
    <section
      aria-label="Core Capabilities and Capabilities"
      className="bg-[#F7F8FA] border-y border-[#D9E0E7] py-4 sm:py-5 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">

          {/* Left Side: Stationary Introduction Statement */}
          <div className="lg:w-auto lg:min-w-[300px] lg:max-w-[340px] flex-shrink-0 lg:border-r lg:border-[#D9E0E7] lg:pr-8">
            <div className="space-y-1">
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#2567A8] uppercase tracking-widest block">
                CREATIVE WORK SOLUTIONS
              </span>
              <h2 className="text-xs sm:text-sm font-extrabold text-[#0B1623] tracking-tight leading-snug">
                Precision Equipment & Reliable Support
              </h2>
            </div>
          </div>

          {/* Right Side: Continuous Horizontal Marquee Rail */}
          <div className="flex-1 min-w-0 relative overflow-hidden py-1">
            <div className="relative w-full marquee-mask overflow-hidden">
              <div
                className="animate-marquee-left flex items-center"
                tabIndex={0}
                role="region"
                aria-label="Core Capabilities Marquee"
              >
                {/* Primary Sequence */}
                <div className="flex items-center flex-shrink-0" aria-hidden="false">
                  {HIGHLIGHT_PHRASES.map((phrase, idx) => (
                    <div key={`track1-${idx}`} className="flex items-center flex-shrink-0">
                      <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#1F2933] whitespace-nowrap px-5 sm:px-7 transition-colors hover:text-[#2567A8]">
                        {phrase}
                      </span>
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#2567A8] flex-shrink-0 ring-4 ring-[#2567A8]/15"
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>

                {/* Duplicate Sequence for seamless infinite loop */}
                <div className="flex items-center flex-shrink-0" aria-hidden="true">
                  {HIGHLIGHT_PHRASES.map((phrase, idx) => (
                    <div key={`track2-${idx}`} className="flex items-center flex-shrink-0">
                      <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#1F2933] whitespace-nowrap px-5 sm:px-7 transition-colors hover:text-[#2567A8]">
                        {phrase}
                      </span>
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-[#2567A8] flex-shrink-0 ring-4 ring-[#2567A8]/15"
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
