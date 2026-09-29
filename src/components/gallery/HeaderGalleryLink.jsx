import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import GalleryPreview from './GalleryPreview';

/**
 * HeaderGalleryLink - Refined desktop navigation item with animated underline and floating mini-lookbook preview
 * 
 * - Animated underline from width 0% -> 100% on hover (250-350ms transition)
 * - Persistent active indicator when on /gallery
 * - Miniature real-product image lookbook preview on hover
 */
export default function HeaderGalleryLink() {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === '/gallery';
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 180);
  };

  return (
    <div
      className="relative flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to="/gallery"
        className={`group relative text-sm font-medium transition-colors py-1 outline-none focus-visible:ring-2 focus-visible:ring-[#2567A8] rounded-xs ${
          isActive ? 'text-[#1687E8] font-semibold' : 'text-white/85 hover:text-white'
        }`}
      >
        <span>Gallery</span>

        {/* Persistent Active Indicator when on /gallery */}
        {isActive && (
          <motion.span
            layoutId="activeNavIndicator"
            className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-[#2567A8] rounded-full"
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}

        {/* Hover Animated Underline (0% -> 100% width, 250-350ms) */}
        {!isActive && (
          <span
            className={`absolute -bottom-1.5 left-0 h-[2px] bg-[#1687E8] rounded-full transition-all duration-300 ease-out ${
              isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'
            }`}
          />
        )}
      </Link>

      {/* Floating Lookbook Preview Underneath Navigation (Desktop Only) */}
      <AnimatePresence>
        {isHovered && (
          <GalleryPreview onClose={() => setIsHovered(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
