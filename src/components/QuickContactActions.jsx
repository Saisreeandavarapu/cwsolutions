import React from 'react';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function QuickContactActions({ onScrollToLocation }) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${COMPANY_INFO.name}, ${COMPANY_INFO.address.full}`
  )}`;

  return (
    <section
      aria-label="Quick Contact Actions"
      className="bg-[#F5F7F9] border-b border-[#D9E1E8]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#D9E1E8]">
          
          {/* ITEM 1: PHONE */}
          <a
            href={`tel:${COMPANY_INFO.phoneClean}`}
            className="group flex items-center justify-between py-5 md:py-3 px-0 md:px-8 first:pl-0 last:pr-0 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-sm bg-white border border-[#D9E1E8] text-[#1268B3] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:border-[#1268B3]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#667085] block">
                  PHONE
                </span>
                <span className="text-base font-bold text-[#111827] font-mono tracking-tight block mt-0.5 transition-colors group-hover:text-[#1268B3]">
                  {COMPANY_INFO.phone}
                </span>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase text-[#1268B3] tracking-wider">
              <span className="hidden sm:inline">Call</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </a>

          {/* ITEM 2: EMAIL */}
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="group flex items-center justify-between py-5 md:py-3 px-0 md:px-8 first:pl-0 last:pr-0 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-sm bg-white border border-[#D9E1E8] text-[#1268B3] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:border-[#1268B3]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#667085] block">
                  EMAIL
                </span>
                <span className="text-base font-bold text-[#111827] font-mono tracking-tight block mt-0.5 transition-colors group-hover:text-[#1268B3] break-all">
                  {COMPANY_INFO.email}
                </span>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase text-[#1268B3] tracking-wider">
              <span className="hidden sm:inline">Send Email</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </a>

          {/* ITEM 3: LOCATION */}
          <div
            onClick={onScrollToLocation}
            className="group flex items-center justify-between py-5 md:py-3 px-0 md:px-8 first:pl-0 last:pr-0 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-sm bg-white border border-[#D9E1E8] text-[#1268B3] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:border-[#1268B3]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#667085] block">
                  LOCATION
                </span>
                <span className="text-base font-bold text-[#111827] tracking-tight block mt-0.5 transition-colors group-hover:text-[#1268B3]">
                  Saidabad, Hyderabad
                </span>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold font-mono uppercase text-[#1268B3] tracking-wider">
              <span className="hidden sm:inline">View Location</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
