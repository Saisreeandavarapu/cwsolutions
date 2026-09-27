import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function ContactInfo({ onScrollToLocation }) {
  const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${COMPANY_INFO.name}, ${COMPANY_INFO.address.full}`
  )}`;

  return (
    <div className="space-y-8">
      {/* Header Eyebrow & Title */}
      <div>
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#1268B3] uppercase tracking-wider mb-2">
          <span className="w-1.5 h-1.5 bg-[#1268B3]" />
          <span>OFFICIAL DIRECTORY</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
          Direct Contact Information
        </h2>
        <p className="text-xs sm:text-sm text-[#667085] mt-2 leading-relaxed">
          Reach our engineering desk directly for commercial quotes, working height assessments, or on-site equipment sizing.
        </p>
      </div>

      {/* Minimal Information Rows with Thin Dividers */}
      <div className="divide-y divide-[#D9E1E8] border-y border-[#D9E1E8]">
        
        {/* ROW 1: PHONE */}
        <div className="py-6 group">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-[#F5F7F9] border border-[#D9E1E8] text-[#1268B3] flex items-center justify-center flex-shrink-0 group-hover:border-[#1268B3] transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#667085] block">
                  PHONE
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-base sm:text-lg font-bold text-[#111827] hover:text-[#1268B3] font-mono tracking-tight block mt-0.5 transition-colors"
                >
                  +91 79896 51726
                </a>
                <p className="text-xs text-[#667085] mt-0.5">
                  Direct line for procurement & technical sales
                </p>
              </div>
            </div>
            <a
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1268B3] hover:text-[#1597E5] uppercase tracking-wider transition-colors pt-2 self-start"
            >
              <span>Call us</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* ROW 2: EMAIL */}
        <div className="py-6 group">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-[#F5F7F9] border border-[#D9E1E8] text-[#1268B3] flex items-center justify-center flex-shrink-0 group-hover:border-[#1268B3] transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#667085] block">
                  EMAIL
                </span>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-base sm:text-lg font-bold text-[#111827] hover:text-[#1268B3] font-mono tracking-tight block mt-0.5 transition-colors break-all"
                >
                  cwsolutions.in@gmail.com
                </a>
                <p className="text-xs text-[#667085] mt-0.5">
                  Official RFQ, tender & drawing submissions
                </p>
              </div>
            </div>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1268B3] hover:text-[#1597E5] uppercase tracking-wider transition-colors pt-2 self-start"
            >
              <span>Send enquiry</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* ROW 3: LOCATION */}
        <div className="py-6 group">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-[#F5F7F9] border border-[#D9E1E8] text-[#1268B3] flex items-center justify-center flex-shrink-0 group-hover:border-[#1268B3] transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#667085] block">
                  LOCATION
                </span>
                <div className="text-sm sm:text-base font-bold text-[#111827] block mt-0.5 leading-snug">
                  Creative Work Solutions
                </div>
                <p className="text-xs text-[#667085] mt-1 leading-relaxed max-w-sm">
                  17-1-388, Road No. 14, Saidabad,<br />
                  Hyderabad, Telangana – 500 059
                </p>
              </div>
            </div>
            {onScrollToLocation ? (
              <button
                type="button"
                onClick={onScrollToLocation}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1268B3] hover:text-[#1597E5] uppercase tracking-wider transition-colors pt-2 self-start cursor-pointer"
              >
                <span>View location</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            ) : (
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1268B3] hover:text-[#1597E5] uppercase tracking-wider transition-colors pt-2 self-start"
              >
                <span>View location</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            )}
          </div>
        </div>

        {/* ROW 4: OPERATING HOURS */}
        <div className="py-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-sm bg-[#F5F7F9] border border-[#D9E1E8] text-[#667085] flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#667085] block">
                OPERATING HOURS
              </span>
              <p className="text-sm font-bold text-[#111827] mt-0.5">
                Monday – Saturday: 9:00 AM – 7:30 PM
              </p>
              <p className="text-xs text-[#667085] mt-0.5">
                Sunday: Closed (Online RFQ logged 24/7)
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Engineering Supply Assurance */}
      <div className="p-5 bg-[#F5F7F9] border border-[#D9E1E8] rounded-sm flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#1268B3] flex-shrink-0 mt-0.5" />
        <div className="text-xs leading-relaxed text-[#667085]">
          <strong className="text-[#111827] block font-semibold mb-0.5">
            GST & Tender Documentation Compliance
          </strong>
          Official tax invoicing, dimensional drawings, and material conformity certificates supplied with institutional orders.
        </div>
      </div>
    </div>
  );
}
