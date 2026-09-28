import React from 'react';
import ProductCard from './ProductCard';
import { PackageOpen, RotateCcw } from 'lucide-react';

export default function ProductGrid({
  products = [],
  isLoading = false,
  onRequestQuote,
  onResetFilters,
  onQuickView
}) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            className="bg-[#FFFFFF] border border-[#D9E1E8] rounded-xs p-3 sm:p-4 animate-pulse space-y-3"
          >
            <div className="aspect-[4/3] bg-[#F5F7F9] rounded-2xs" />
            <div className="h-3.5 bg-[#E5E9EE] rounded-2xs w-3/4" />
            <div className="h-3 bg-[#E5E9EE] rounded-2xs w-1/2" />
            <div className="h-9 bg-[#E5E9EE] rounded-2xs" />
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="bg-[#FFFFFF] border border-[#D9E1E8] rounded-xs p-8 sm:p-12 text-center max-w-lg mx-auto space-y-4 shadow-2xs">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F5F7F9] text-[#667085] rounded-full flex items-center justify-center mx-auto border border-[#D9E1E8]">
          <PackageOpen className="w-6 h-6 sm:w-7 sm:h-7 text-[#1268B3]" />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm sm:text-base font-bold text-[#111827]">
            No equipment matches your current filters.
          </h3>
          <p className="text-xs text-[#667085] font-sans">
            Try adjusting your search keywords, switching categories, or resetting active filters.
          </p>
        </div>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#071A2B] hover:bg-[#1268B3] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider rounded-2xs transition-colors active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#1597E5]" />
            <span>Reset All Filters</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={index < 4}
          onRequestQuote={onRequestQuote}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
}
