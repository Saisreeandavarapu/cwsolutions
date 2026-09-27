import React, { useEffect } from 'react';
import ClientHero from '../components/ClientHero';
import IndustryEnvironmentSection from '../components/IndustryEnvironmentSection';
import EquipmentRail from '../components/EquipmentRail';
import CapabilitySection from '../components/CapabilitySection';
import ClientCTA from '../components/ClientCTA';

export default function Clients({ onRequestQuote }) {
  useEffect(() => {
    document.title = 'Clients & Application Environments | Creative Work Solutions';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white min-h-screen">
      {/* 1. Large Editorial Industrial Client Hero */}
      <ClientHero onRequestQuote={onRequestQuote} />

      {/* 2. Industry Environment Showcase ("WHERE OUR EQUIPMENT FITS") */}
      <IndustryEnvironmentSection />

      {/* 3. Horizontal Featured Equipment Rail ("EQUIPMENT FOR THE WORK AHEAD") */}
      <EquipmentRail />

      {/* 4. Trust / Capability Editorial Section ("Equipment designed around access, height and movement.") */}
      <CapabilitySection />

      {/* 5. High-Impact Dark Editorial CTA ("Looking for the right equipment for your work environment?") */}
      <ClientCTA onRequestQuote={onRequestQuote} />
    </main>
  );
}
