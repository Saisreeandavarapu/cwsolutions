import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../data/company';

export default function FloatingActions({ onRequestQuote }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = 'Hello Creative Work Solutions, I would like to enquire about your industrial access & lifting equipment.';
  const whatsappUrl = `https://wa.me/917989651726?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-40 flex flex-col items-end gap-2"
    >
      {/* Scroll to Top Button with Smooth AnimatePresence */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            type="button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="w-8 h-8 sm:w-9 sm:h-9 bg-white text-industrial-dark border border-gray-300 rounded-full flex items-center justify-center shadow-md transition-colors"
            title="Scroll to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-industrial-dark" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Action */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2.5 rounded-full shadow-lg border border-white/20 text-xs font-bold font-mono tracking-wide transition-colors"
        aria-label="Chat on WhatsApp with Creative Work Solutions"
      >
        <MessageCircle className="w-4 h-4 text-white" />
        <span className="hidden sm:inline">WhatsApp</span>
      </motion.a>

      {/* Floating Call Action */}
      <motion.a
        href={`tel:${COMPANY_INFO.phoneClean}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="flex items-center gap-2 bg-industrial-steel hover:bg-industrial-steel-hover text-white px-3.5 py-2.5 rounded-full shadow-lg border border-white/20 text-xs font-bold font-mono tracking-wide transition-colors"
        aria-label={`Call Creative Work Solutions at ${COMPANY_INFO.phone}`}
      >
        <Phone className="w-4 h-4 text-white" />
        <span className="hidden sm:inline">{COMPANY_INFO.phone}</span>
        <span className="sm:hidden font-sans uppercase text-[11px]">Call</span>
      </motion.a>
    </aside>
  );
}
