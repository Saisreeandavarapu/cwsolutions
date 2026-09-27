import React, { useEffect } from 'react';
import ContactHero from '../components/ContactHero';
import QuickContactActions from '../components/QuickContactActions';
import QuotationSection from '../components/QuotationSection';
import IndustrialImageBreak from '../components/IndustrialImageBreak';
import LocationSection from '../components/LocationSection';
import FinalContactCTA from '../components/FinalContactCTA';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact & Technical Quotations | Creative Work Solutions Hyderabad';
    window.scrollTo(0, 0);
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById('enquiry-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToLocation = () => {
    const el = document.getElementById('location-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white min-h-screen">
      {/* 1. HERO (Section 3 & 4) */}
      <ContactHero onScrollToForm={scrollToForm} />

      {/* 2. QUICK CONTACT ACTIONS (Section 5) */}
      <QuickContactActions onScrollToLocation={scrollToLocation} />

      {/* 3. MAIN ENQUIRY & QUOTATION FORM (Sections 6–13) */}
      <QuotationSection />

      {/* 4. INDUSTRIAL IMAGE BREAK (Sections 16 & 17) */}
      <IndustrialImageBreak />

      {/* 5. LOCATION & CONTACT INFORMATION (Sections 14 & 15) */}
      <LocationSection />

      {/* 6. FINAL CTA (Section 18) */}
      <FinalContactCTA onScrollToForm={scrollToForm} />
    </main>
  );
}
