import React from 'react';
import { MapPin, Phone, Mail, ExternalLink, Navigation } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function LocationSection() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${COMPANY_INFO.name}, ${COMPANY_INFO.address.full}`
  )}`;

  return (
    <section
      id="location-section"
      aria-label="Contact Information and Location"
      className="py-16 sm:py-24 bg-[#F5F7F9] border-b border-[#D9E1E8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (Section 14) */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 bg-[#1268B3]" />
            <span>CONTACT & LOCATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-tight">
            CONTACT CREATIVE WORK SOLUTIONS
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] mt-2 leading-relaxed">
            Direct coordination for equipment specifications, dimensions, dispatch logistics, and official procurement.
          </p>
        </div>

        {/* Location & Information Grid (Section 15) */}
        <div className="bg-white border border-[#D9E1E8] rounded-sm shadow-subtle overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* LEFT: VISIT US & Verified Details */}
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#1268B3] block mb-1">
                  FACILITY & CORPORATE BASE
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#111827]">
                  VISIT US
                </h3>
              </div>

              {/* Company & Address (Section 14) */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#F5F7F9] border border-[#D9E1E8] text-[#1268B3] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-sm font-bold text-[#111827]">
                    Creative Work Solutions
                  </strong>
                  <p className="text-xs text-[#667085] mt-1 leading-relaxed">
                    17-1-388, Road No. 14,<br />
                    Saidabad,<br />
                    Hyderabad,<br />
                    Telangana – 500 059
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#F5F7F9] border border-[#D9E1E8] text-[#1268B3] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#667085] block">
                    PHONE
                  </span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneClean}`}
                    className="text-sm font-bold text-[#111827] hover:text-[#1268B3] font-mono block mt-0.5 transition-colors"
                  >
                    +91 79896 51726
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-[#F5F7F9] border border-[#D9E1E8] text-[#1268B3] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#667085] block">
                    EMAIL
                  </span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-bold text-[#111827] hover:text-[#1268B3] font-mono block mt-0.5 transition-colors break-all"
                  >
                    cwsolutions.in@gmail.com
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Action Dial */}
            <div className="pt-4 border-t border-[#D9E1E8] flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.phoneClean}`}
                className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-wider text-[#1268B3] hover:text-[#071A2B] transition-colors"
              >
                <span>Call +91 79896 51726 →</span>
              </a>
            </div>

          </div>

          {/* RIGHT: Map & Location Visual (Section 15) */}
          <div className="lg:col-span-6 bg-[#071A2B] text-white p-8 sm:p-10 lg:p-12 relative flex flex-col justify-between overflow-hidden">
            {/* Technical grid overlay */}
            <div className="absolute inset-0 technical-grid-dark opacity-35 pointer-events-none" aria-hidden="true" />
            
            {/* Architectural concentric radial map marks */}
            <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full border border-[#1597E5]/20 pointer-events-none" />
            <div className="absolute -right-12 -bottom-12 w-56 h-56 rounded-full border border-[#1597E5]/25 pointer-events-none" />
            <div className="absolute right-0 bottom-0 w-32 h-32 rounded-full border border-[#1597E5]/30 pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-xs text-[10px] font-mono font-bold text-[#1597E5] tracking-widest uppercase">
                <Navigation className="w-3 h-3" />
                <span>HYDERABAD FACILITY</span>
              </span>

              <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Saidabad, Hyderabad
              </h4>

              <p className="text-xs sm:text-sm text-gray-300 max-w-sm leading-relaxed">
                Telangana – 500 059.<br />
                Direct dispatch center supporting commercial and industrial requirements across South India and nationwide.
              </p>
            </div>

            {/* Button: OPEN IN GOOGLE MAPS → */}
            <div className="relative z-10 pt-8 mt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-gray-400">
                <span className="block text-[10px] uppercase tracking-wider text-gray-400">Location Point</span>
                <span className="text-white font-bold">Road No. 14, Saidabad</span>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#1268B3] hover:bg-[#1597E5] text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all duration-300 shadow-sm"
              >
                <span>OPEN IN GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
