import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';

export default function MobileProductCard({ product, onQuickView }) {
  return (
    <div
      className="flex-shrink-0 bg-white border border-gray-200 rounded-sm overflow-hidden flex flex-col justify-between shadow-subtle snap-start transition-transform active:scale-[0.98]"
      style={{ width: 'clamp(155px, 46vw, 205px)' }}
    >
      {/* Product Image Frame (55-65% of card) */}
      <div
        onClick={() => onQuickView ? onQuickView(product) : null}
        className="relative aspect-[4/3] bg-industrial-bg-subtle p-3 flex items-center justify-center overflow-hidden border-b border-gray-100 cursor-pointer group"
      >
        <img
          src={product.image}
          alt={`Creative Work Solutions ${product.name}`}
          className="w-full h-full object-contain"
          loading="lazy"
        />

        {/* Quick View Pill Indicator */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (onQuickView) onQuickView(product);
          }}
          className="absolute bottom-2 right-2 bg-industrial-dark/80 text-white text-[10px] px-2 py-1 rounded-xs flex items-center gap-1 font-mono shadow-sm"
          aria-label={`Quick view ${product.name}`}
        >
          <Eye className="w-3 h-3 text-industrial-steel" />
          <span>Quick</span>
        </button>
      </div>

      {/* Product Information */}
      <div className="p-3 flex-1 flex flex-col justify-between space-y-2">
        <div>
          {/* Category & Model */}
          <div className="flex items-center justify-between gap-1 text-[10px] font-mono text-gray-500 mb-1">
            <span className="text-industrial-steel font-bold truncate uppercase">
              {product.category}
            </span>
            <span className="font-semibold bg-gray-100 px-1.5 py-0.5 rounded-xs flex-shrink-0">
              {product.model}
            </span>
          </div>

          {/* Product Name */}
          <Link
            to={`/products/${product.slug}`}
            className="block text-xs font-bold text-industrial-dark line-clamp-2 leading-tight hover:text-industrial-steel transition-colors"
          >
            {product.name}
          </Link>
        </div>

        {/* View Details Link */}
        <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
          <Link
            to={`/products/${product.slug}`}
            className="text-[11px] font-bold text-industrial-steel flex items-center gap-1 hover:underline min-h-[36px] items-center"
          >
            <span>View Details</span>
            <ArrowRight className="w-3 h-3 text-industrial-steel" />
          </Link>
        </div>
      </div>
    </div>
  );
}
