import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye } from 'lucide-react';

export default function ProductCard({ product, onRequestQuote, onQuickView }) {
  return (
    <div className="bg-white border border-[#D9E0E7] hover:border-[#2567A8] rounded-sm overflow-hidden flex flex-col transition-colors duration-300 group relative">

      {/* Card Header Tag */}
      <div className="px-4 py-2 bg-[#F7F8FA] border-b border-[#D9E0E7] flex items-center justify-between text-[11px] font-mono">
        <div className="flex items-center gap-1.5">
          {/* Category label: small blue line expands */}
          <span className="w-1.5 h-1.5 bg-[#2567A8] group-hover:w-3.5 transition-all duration-300 rounded-xs" />
          <span className="text-[#2567A8] font-bold tracking-wider uppercase">
            {product.category}
          </span>
        </div>
        <span className="text-[#667085] font-semibold bg-white px-2 py-0.5 rounded-xs border border-[#D9E0E7]">
          {product.model}
        </span>
      </div>

      {/* Product Image Frame with scale 1 -> 1.025 & subtle brightness transition */}
      <Link
        to={`/products/${product.slug}`}
        className="relative aspect-[4/3] bg-white p-4 flex items-center justify-center overflow-hidden border-b border-[#D9E0E7]/60 group/img"
        aria-label={`View details for ${product.name}`}
      >
        <img
          src={product.image}
          alt={`Creative Work Solutions ${product.model} ${product.name}`}
          className="w-full h-full object-contain transition-all duration-300 ease-out group-hover:scale-[1.025] group-hover:brightness-[1.02]"
          loading="lazy"
        />

        {/* Quick view overlay */}
        <div className="absolute inset-0 bg-[#0B1623]/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <span className="bg-white text-[#0B1623] text-xs font-semibold px-3 py-1.5 rounded-sm shadow-sm flex items-center gap-1.5 font-mono">
            <Eye className="w-3.5 h-3.5 text-[#2567A8]" />
            Inspect Specs
          </span>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <Link
            to={`/products/${product.slug}`}
            className="block text-base font-bold text-[#0B1623] group-hover:text-[#2567A8] transition-colors duration-200 line-clamp-1"
          >
            {product.name}
          </Link>

          {/* Key Spec Badge */}
          <div className="mt-2.5 p-2 bg-[#F7F8FA] rounded-sm border border-[#D9E0E7]">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-[#667085]">
              Key Specification
            </span>
            <span className="block text-xs font-bold font-mono text-[#0B1623] truncate mt-0.5">
              {product.keySpec}
            </span>
          </div>

          <p className="mt-2 text-xs text-[#667085] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 border-t border-[#D9E0E7]/70 grid grid-cols-2 gap-2">
          <Link
            to={`/products/${product.slug}`}
            className="w-full text-center text-xs font-semibold text-[#0B1623] hover:text-[#2567A8] hover:bg-[#F7F8FA] border border-[#D9E0E7] py-2.5 rounded-sm transition-colors flex items-center justify-center gap-1 group/btn"
          >
            <span>View Details</span>
            <ArrowRight className="w-3 h-3 text-[#2567A8] transition-transform duration-200 group-hover/btn:translate-x-1" />
          </Link>
          <button
            type="button"
            onClick={() => onRequestQuote ? onRequestQuote(product) : null}
            className="w-full text-center text-xs font-bold text-white bg-[#0B1623] hover:bg-[#2567A8] py-2.5 rounded-sm transition-colors uppercase tracking-wider active:scale-95 shadow-2xs"
          >
            Quote
          </button>
        </div>
      </div>

    </div>
  );
}
