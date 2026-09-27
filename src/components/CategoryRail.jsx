import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CategoryRail({ categories = [] }) {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = categories.length;

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
    const amount = direction === 'next' ? 180 : -180;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const progressPercent = total > 1 ? (currentIndex / (total - 1)) * 100 : 100;

  return (
    <div className="w-full overflow-hidden">
      {/* Category Horizontal Rail */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-3 py-2 px-4 no-scrollbar"
        style={{
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/products?category=${encodeURIComponent(cat.name)}`}
            className="flex-shrink-0 bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col justify-between shadow-subtle snap-start active:scale-[0.98] transition-transform"
            style={{ width: 'clamp(130px, 38vw, 155px)' }}
          >
            {/* Category Image Box */}
            <div className="relative aspect-[4/3] bg-industrial-bg-subtle p-2 flex items-center justify-center border-b border-gray-100 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-contain"
                loading="lazy"
              />
              <span className="absolute top-1.5 right-1.5 bg-industrial-dark/90 text-white font-mono text-[9px] px-1.5 py-0.5 rounded-xs font-semibold">
                {cat.itemCount}
              </span>
            </div>

            {/* Category Title & View */}
            <div className="p-2.5 flex-1 flex flex-col justify-between space-y-1.5">
              <h3 className="font-bold text-xs text-industrial-dark line-clamp-1">
                {cat.name}
              </h3>
              <div className="flex items-center text-[10px] font-bold text-industrial-steel">
                <span>Browse</span>
                <ArrowRight className="w-2.5 h-2.5 ml-1 text-industrial-steel" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="flex items-center justify-between px-4 mt-2">
        <div className="flex items-center gap-2 font-mono text-[11px] text-gray-500 font-semibold">
          <span className="text-industrial-dark font-bold">
            {String(currentIndex + 1).padStart(2, '0')}
          </span>
          <span>/</span>
          <span>{String(total).padStart(2, '0')}</span>
        </div>

        <div className="flex-1 mx-3 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-industrial-steel transition-all duration-200 rounded-full"
            style={{ width: `${Math.max(progressPercent, 14)}%` }}
          />
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => scrollByAmount('prev')}
            disabled={currentIndex === 0}
            className="w-7 h-7 rounded-full border border-gray-300 bg-white flex items-center justify-center text-industrial-dark disabled:opacity-35 disabled:cursor-not-allowed shadow-2xs"
            aria-label="Previous categories"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={() => scrollByAmount('next')}
            disabled={currentIndex === total - 1}
            className="w-7 h-7 rounded-full border border-gray-300 bg-white flex items-center justify-center text-industrial-dark disabled:opacity-35 disabled:cursor-not-allowed shadow-2xs"
            aria-label="Next categories"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
