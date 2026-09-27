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
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            className="bg-white border border-gray-200 rounded-sm p-4 animate-pulse space-y-4"
          >
            <div className="aspect-[4/3] bg-gray-100 rounded-xs"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-3 bg-gray-100 rounded w-1/2"></div>
            <div className="h-10 bg-gray-100 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-sm p-8 sm:p-12 text-center max-w-lg mx-auto space-y-4 shadow-subtle">
        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-industrial-bg-subtle text-gray-400 rounded-full flex items-center justify-center mx-auto border border-gray-200">
          <PackageOpen className="w-6 h-6 sm:w-7 sm:h-7 text-industrial-steel" />
        </div>
        <div className="space-y-1">
          <h3 className="text-sm sm:text-base font-bold text-industrial-dark">
            No products match your current filters.
          </h3>
          <p className="text-xs text-industrial-text-muted">
            Try adjusting your search query, selecting another category, or resetting all filters.
          </p>
        </div>
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-industrial-dark hover:bg-industrial-steel text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-colors active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5 text-industrial-steel" />
            <span>Clear All Filters</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onRequestQuote={onRequestQuote}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
}
