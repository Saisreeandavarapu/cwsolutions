import React, { useRef, useState, useEffect } from 'react';
import MobileProductCard from './MobileProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductRail({ products = [], onQuickView, className = '' }) {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = products.length;

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
    const amount = direction === 'next' ? 220 : -220;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  if (products.length === 0) return null;

  const progressPercent = total > 1 ? ((currentIndex) / (total - 1)) * 100 : 100;

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      {/* Mobile Horizontal Product Rail */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-3 py-2 px-4 no-scrollbar"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {products.map((product) => (
          <MobileProductCard
            key={product.id}
            product={product}
            onQuickView={onQuickView}
          />
        ))}
      </div>

      {/* Progress & Quick Navigation Controls */}
      <div className="flex items-center justify-between px-4 mt-3 pt-2">
        {/* Numeric Progress Counter: 01 / 08 */}
        <div className="flex items-center gap-2 font-mono text-xs text-gray-500 font-semibold">
          <span className="text-industrial-dark font-bold">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span>/</span>
          <span>{String(total).padStart(2, '0')}</span>
        </div>

        {/* Visual Progress Bar Track */}
        <div className="flex-1 mx-4 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-industrial-steel transition-all duration-200 rounded-full"
            style={{ width: `${Math.max(progressPercent, 12)}%` }}
          />
        </div>

        {/* Manual Arrow Controls (touch-friendly) */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => scrollByAmount('prev')}
            disabled={currentIndex === 0}
            className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-industrial-dark disabled:opacity-35 disabled:cursor-not-allowed active:bg-gray-100 shadow-2xs"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount('next')}
            disabled={currentIndex === total - 1}
            className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-industrial-dark disabled:opacity-35 disabled:cursor-not-allowed active:bg-gray-100 shadow-2xs"
            aria-label="Next product"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
