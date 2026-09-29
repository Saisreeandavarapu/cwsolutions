import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, ArrowRight, X, Menu, Images } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { COMPANY_INFO } from '../data/company';
import CreativeWorkSolutionsLogo from './CreativeWorkSolutionsLogo';
import HeaderGalleryLink from './gallery/HeaderGalleryLink';

export default function Header({ onRequestQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Gallery', path: '/gallery', icon: Images, isGallery: true },
    { name: 'Clients', path: '/clients' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path.includes('#')) {
      return location.pathname + location.hash === path;
    }
    return location.pathname === path;
  };

  // Header positioning:
  // On HomePage: floats transparently directly ABOVE the hero image at the top, becomes solid dark navy with subtle backdrop on scroll.
  // On other pages: sticky dark header with solid background.
  const headerContainerClasses = isHomePage
    ? isScrolled
      ? 'fixed top-0 left-0 right-0 z-[1000] bg-[#0B1623]/95 backdrop-blur-md border-b border-[#D9E0E7]/10 shadow-sm py-3 transition-all duration-300'
      : 'absolute top-0 left-0 right-0 z-[1000] bg-transparent border-b border-white/10 py-4 sm:py-5 transition-all duration-300'
    : 'sticky top-0 z-[1000] bg-[#0B1623] border-b border-white/10 shadow-sm py-3.5 transition-all duration-300';

  return (
    <header className={headerContainerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">

          {/* 1. HORIZONTAL TWO-TONE (TOP 50% BLUE / BOTTOM 50% WHITE) WORDMARK */}
          <CreativeWorkSolutionsLogo className="mr-3 sm:mr-6 lg:mr-8" />

          {/* 2. CENTER NAVIGATION LINKS (With blue underline indicator) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              if (link.isGallery) {
                return <HeaderGalleryLink key={link.name} />;
              }
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-medium transition-colors py-1 ${isActive(link.path)
                    ? 'text-[#1687E8] font-semibold'
                    : 'text-white/85 hover:text-white'
                    }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#2567A8] rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* 3. RIGHT ACTIONS: Search Icon + Enquire Now Button */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            {/* Search Icon */}
            <Link
              to="/products"
              className="text-white/80 hover:text-white p-2 transition-colors hidden sm:flex items-center justify-center rounded-full hover:bg-white/10"
              aria-label="Search Equipment"
            >
              <Search className="w-4 h-4" />
            </Link>

            {/* Enquire Now Button with 4-6px Arrow hover and subtle transition */}
            <motion.button
              type="button"
              onClick={onRequestQuote}
              whileTap={{ scale: 0.98 }}
              className="group relative rounded-full px-5 sm:px-6 py-2 sm:py-2.5 bg-[#2567A8] hover:bg-[#1F558C] text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-all duration-300 cursor-pointer flex-shrink-0"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </motion.button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/85 hover:text-white rounded-sm hover:bg-white/10 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU DROPDOWN DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#0B1623]/98 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-5 pt-4 pb-7 space-y-2.5">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.25 }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded-sm text-sm font-semibold transition-colors ${isActive(link.path)
                      ? 'bg-[#2567A8]/20 text-[#1687E8]'
                      : 'text-white/85 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.icon && <link.icon className="w-4 h-4 text-[#1687E8]" />}
                    <span>{link.name}</span>
                  </Link>
                </motion.div>
              ))}

              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.phoneClean}`}
                  className="block px-3 py-1.5 text-xs font-mono text-[#1687E8] hover:underline"
                >
                  Direct Call: {COMPANY_INFO.phone}
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onRequestQuote();
                  }}
                  className="group w-full rounded-full py-3 bg-[#2567A8] hover:bg-[#1F558C] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
