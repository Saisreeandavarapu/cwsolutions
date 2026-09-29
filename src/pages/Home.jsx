import React, { useEffect } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Hero from '../components/Hero';
import TrustHighlights from '../components/TrustHighlights';
import CategoryStrip from '../components/CategoryStrip';
import LadderShowcase from '../components/LadderShowcase';
import FeaturedProducts from '../components/FeaturedProducts';
import ProductGallery from '../components/gallery/ProductGallery';
import AboutCompanySection from '../components/AboutCompanySection';
import QualitySection from '../components/QualitySection';
import ApplicationsSection from '../components/ApplicationsSection';
import EngineeringFeatures from '../components/EngineeringFeatures';
import ClientsSection from '../components/ClientsSection';
import ContactCTA from '../components/ContactCTA';
import { COMPANY_INFO } from '../data/company';

export default function Home({ onRequestQuote }) {
  useEffect(() => {
    document.title = 'Creative Work Solutions | Industrial Ladders, Access Equipment & Material Handling';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* 1. HERO WITH PREMIUM LINE-BY-LINE & MICRO-INTERACTIONS */}
      <Hero onRequestQuote={onRequestQuote} />

      {/* 2. PREMIUM TRUST HIGHLIGHTS / BRAND BENEFITS CONTINUOUS MARQUEE */}
      <TrustHighlights />

      {/* 2. TRUST / CATEGORY STRIP & PRODUCT CATEGORIES */}
      {/* <CategoryStrip /> */}

      {/* 3. DEDICATED LADDER SHOWCASE: 5 GENUINE MODELS WITH SPECS & ENQUIRY */}
      {/* <LadderShowcase onRequestQuote={onRequestQuote} /> */}

      {/* 4. FEATURED ACCESS & MATERIAL EQUIPMENT */}
      <FeaturedProducts onRequestQuote={onRequestQuote} />

      {/* 4B. PREMIUM WEARNEAR PRODUCT GALLERY - 3-ROW CONTINUOUS MOVING IMAGE WALL */}
      <ProductGallery onRequestQuote={onRequestQuote} />

      {/* 5. ABOUT CREATIVE WORK SOLUTIONS: OVERVIEW, OFFERINGS, APPROACH & VERIFIED INFO */}
      <AboutCompanySection isStandalonePage={false} />

      {/* 6. QUALITY IN EVERY DETAIL: 4 CORE QUALITY THEMES & ADVISORY */}
      <QualitySection onRequestQuote={onRequestQuote} />

      {/* 7. INDUSTRIAL APPLICATIONS & WORK ENVIRONMENTS */}
      <ApplicationsSection />

      {/* 8. ENGINEERING & DOCUMENTED SAFETY FEATURES */}
      <EngineeringFeatures />

      {/* 9. OUR CLIENTS: INDUSTRIAL PROCUREMENT & COMMERCIAL ENGAGEMENT */}
      <ClientsSection onRequestQuote={onRequestQuote} />

      {/* 10. PRODUCT RANGE ENQUIRY CTA */}
      <ContactCTA onRequestQuote={onRequestQuote} />

      {/* 11. CONTACT INFORMATION STRIP */}
      <section className="bg-white py-14 sm:py-20 border-b border-[#D9E0E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="p-6 bg-[#F7F8FA] border border-[#D9E0E7] rounded-sm flex items-start gap-4 shadow-2xs">
              <div className="w-10 h-10 bg-[#0B1623] text-[#2567A8] rounded-sm flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono uppercase text-[#0B1623]">Office & Facility</h4>
                <p className="text-xs text-[#667085] mt-1 leading-relaxed">
                  17-1-388, Road No. 14, Saidabad,<br />
                  Hyderabad, Telangana - 500 059
                </p>
              </div>
            </div>

            <div className="p-6 bg-[#F7F8FA] border border-[#D9E0E7] rounded-sm flex items-start gap-4 shadow-2xs">
              <div className="w-10 h-10 bg-[#0B1623] text-[#2567A8] rounded-sm flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono uppercase text-[#0B1623]">Telephone Procurement</h4>
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="text-xs font-mono font-bold text-[#2567A8] hover:underline block mt-1"
                >
                  {COMPANY_INFO.phone}
                </a>
                <p className="text-[11px] text-[#667085] mt-0.5">Mon–Sat: 9:00 AM – 7:00 PM</p>
              </div>
            </div>

            <div className="p-6 bg-[#F7F8FA] border border-[#D9E0E7] rounded-sm flex items-start gap-4 shadow-2xs">
              <div className="w-10 h-10 bg-[#0B1623] text-[#2567A8] rounded-sm flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono uppercase text-[#0B1623]">Email Quotations</h4>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-xs font-medium text-[#2567A8] hover:underline block mt-1 break-all"
                >
                  {COMPANY_INFO.email}
                </a>
                <p className="text-[11px] text-[#667085] mt-0.5">Fast technical drawings & quotes</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

