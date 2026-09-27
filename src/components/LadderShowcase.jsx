import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../data/products';
import SectionReveal from './SectionReveal';

// The 5 genuine ladder models requested with verified assets and specifications
const SHOWCASE_PRODUCT_IDS = [
  'product-01-aluminium-tower-ladder',
  'product-03-aluminium-tiltable-tower-ladder-cws-111',
  'product-09-frp-wall-extension-ladder-cws-244',
  'product-04-aluminium-trolley-ladder-cws-115',
  'product-20-aluminium-step-ladder-3-meter-cws-108'
];

export default function LadderShowcase({ onRequestQuote }) {
  const ladderProducts = SHOWCASE_PRODUCT_IDS.map((id) =>
    PRODUCTS.find((p) => p.id === id)
  ).filter(Boolean);

  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = ladderProducts.length;

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollLeft = el.scrollLeft;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) return;

    const ratio = Math.min(Math.max(scrollLeft / maxScroll, 0), 1);
    const calculatedIndex = Math.min(Math.round(ratio * (total - 1)), total - 1);
    setCurrentIndex(calculatedIndex);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', handleScroll, { passive: true });
    return () => el.removeEventListener('scroll', handleScroll);
  }, [total]);

  const scrollByAmount = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 260;
    const amount = direction === 'next' ? cardWidth : -cardWidth;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <section className="bg-industrial-bg-subtle py-12 sm:py-16 lg:py-20 border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading & Subtitle */}
        <SectionReveal withAccentWipe={true}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-industrial-steel uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 bg-industrial-steel" />
                <span>SPECIALIZED HEIGHT ACCESS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-industrial-dark tracking-tight">
                Explore Our Ladder Range
              </h2>
              <p className="text-xs sm:text-sm text-industrial-text-muted mt-2 max-w-2xl leading-relaxed">
                Discover ladder and access equipment options for different working environments and applications.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 bg-white hover:bg-industrial-bg-subtle text-industrial-dark border border-gray-300 hover:border-industrial-steel px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs group"
              >
                <span>View All Products</span>
                <ArrowRight className="w-3.5 h-3.5 text-industrial-steel group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </SectionReveal>

        {/* Desktop Presentation: Balanced 5-Column Responsive Grid (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {ladderProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -3 }}
              className="bg-white border border-gray-200 hover:border-industrial-steel rounded-sm overflow-hidden flex flex-col justify-between shadow-subtle hover:shadow-industrial transition-all duration-200 group"
            >
              <div>
                {/* Header Tag: Category & Model */}
                <div className="px-3.5 py-2 bg-industrial-bg-subtle border-b border-gray-100 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-industrial-steel font-bold truncate uppercase">
                    {product.category}
                  </span>
                  {product.model && product.model !== 'Model: Not specified' ? (
                    <span className="bg-white text-industrial-dark font-semibold px-2 py-0.5 rounded-xs border border-gray-200 text-[10px] flex-shrink-0">
                      {product.model}
                    </span>
                  ) : null}
                </div>

                {/* Product Image Frame with Object Contain */}
                <Link
                  to={`/products/${product.slug}`}
                  className="relative aspect-[4/3] bg-white p-3 flex items-center justify-center overflow-hidden border-b border-gray-100 group/img"
                  aria-label={`View details for ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={`Creative Work Solutions ${product.name}`}
                    className="w-full h-full object-contain transition-transform duration-300 ease-out group-hover/img:scale-[1.04]"
                    loading="lazy"
                  />
                  {/* Subtle Accent Corner Indicator */}
                  <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-industrial-steel/80" />
                </Link>

                {/* Information Block */}
                <div className="p-3.5 space-y-2.5">
                  <Link
                    to={`/products/${product.slug}`}
                    className="block text-sm font-bold text-industrial-dark hover:text-industrial-steel transition-colors line-clamp-2 leading-snug"
                  >
                    {product.name}
                  </Link>

                  {/* Key Specification */}
                  {product.keySpec && (
                    <div className="p-2 bg-industrial-bg-subtle rounded-xs border border-gray-200 text-[11px] font-mono">
                      <span className="text-[10px] text-gray-500 uppercase block">Specification</span>
                      <span className="font-bold text-industrial-dark line-clamp-1 mt-0.5">
                        {product.keySpec}
                      </span>
                    </div>
                  )}

                  {/* Short Verified Description */}
                  <p className="text-xs text-industrial-text-muted line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-3.5 pt-0 border-t border-gray-100 mt-2 space-y-2">
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <Link
                    to={`/products/${product.slug}`}
                    className="text-center text-xs font-semibold text-industrial-dark hover:text-industrial-steel hover:bg-gray-50 border border-gray-300 py-2 rounded-sm transition-colors flex items-center justify-center gap-1 group/btn"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3 h-3 text-industrial-steel transition-transform duration-150 group-hover/btn:translate-x-0.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => onRequestQuote && onRequestQuote(product)}
                    className="text-center text-xs font-bold text-white bg-industrial-dark hover:bg-industrial-steel py-2 rounded-sm transition-colors uppercase tracking-wider active:scale-95 shadow-2xs"
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Presentation: Touch-Friendly Horizontal Swipe Rail (< md) */}
        <div className="block md:hidden -mx-4">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-3 py-2 px-4 no-scrollbar"
            style={{
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {ladderProducts.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col justify-between shadow-subtle snap-start transition-transform active:scale-[0.98]"
                style={{ width: 'clamp(220px, 68vw, 280px)' }}
              >
                <div>
                  {/* Category & Model Strip */}
                  <div className="px-3 py-1.5 bg-industrial-bg-subtle border-b border-gray-100 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-industrial-steel font-bold truncate uppercase">
                      {product.category}
                    </span>
                    {product.model && product.model !== 'Model: Not specified' && (
                      <span className="bg-white text-gray-700 px-1.5 py-0.5 rounded-xs border border-gray-200 font-semibold">
                        {product.model}
                      </span>
                    )}
                  </div>

                  {/* Genuine Image Frame */}
                  <Link
                    to={`/products/${product.slug}`}
                    className="relative aspect-[4/3] bg-white p-3 flex items-center justify-center overflow-hidden border-b border-gray-100 block"
                  >
                    <img
                      src={product.image}
                      alt={`Creative Work Solutions ${product.name}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </Link>

                  {/* Product Details */}
                  <div className="p-3 space-y-2">
                    <Link
                      to={`/products/${product.slug}`}
                      className="block text-xs font-bold text-industrial-dark line-clamp-2 leading-snug hover:text-industrial-steel"
                    >
                      {product.name}
                    </Link>

                    {product.keySpec && (
                      <div className="p-1.5 bg-industrial-bg-subtle rounded-xs border border-gray-200 text-[10px] font-mono">
                        <span className="text-gray-500 uppercase block text-[9px]">Spec</span>
                        <span className="font-bold text-industrial-dark line-clamp-1">
                          {product.keySpec}
                        </span>
                      </div>
                    )}

                    <p className="text-[11px] text-industrial-text-muted line-clamp-2 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Mobile Actions */}
                <div className="p-3 pt-0 border-t border-gray-100">
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <Link
                      to={`/products/${product.slug}`}
                      className="text-center text-xs font-semibold text-industrial-dark border border-gray-300 py-2 rounded-sm flex items-center justify-center gap-1 active:bg-gray-100"
                    >
                      <span>Details</span>
                      <ArrowRight className="w-3 h-3 text-industrial-steel" />
                    </Link>
                    <button
                      type="button"
                      onClick={() => onRequestQuote && onRequestQuote(product)}
                      className="text-center text-xs font-bold text-white bg-industrial-dark active:bg-industrial-steel py-2 rounded-sm uppercase tracking-wider"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Progress Bar & Nav Buttons */}
          <div className="flex items-center justify-between px-4 mt-3 pt-2">
            <div className="flex items-center gap-2 font-mono text-xs text-gray-500 font-semibold">
              <span className="text-industrial-dark font-bold">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <span>/</span>
              <span>{String(total).padStart(2, '0')}</span>
            </div>

            <div className="flex-1 mx-4 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-industrial-steel transition-all duration-200 rounded-full"
                style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
              />
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollByAmount('prev')}
                disabled={currentIndex === 0}
                className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-industrial-dark disabled:opacity-35 disabled:cursor-not-allowed active:bg-gray-100 shadow-2xs"
                aria-label="Previous ladder"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByAmount('next')}
                disabled={currentIndex === total - 1}
                className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-industrial-dark disabled:opacity-35 disabled:cursor-not-allowed active:bg-gray-100 shadow-2xs"
                aria-label="Next ladder"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
