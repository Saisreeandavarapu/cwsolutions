import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Package, Images } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function ProductCard({
  product,
  onRequestQuote,
  onQuickView,
  priority = false
}) {
  const [imageError, setImageError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const hasImage = Boolean(product.image) && !imageError;
  const imageCount = (product.images && product.images.length > 0)
    ? product.images.length
    : (product.gallery && product.gallery.length > 0 ? product.gallery.length : (product.image ? 1 : 0));

  const altText = `${product.name} ${product.model && !product.model.includes('Not specified') ? product.model : ''} - Creative Work Solutions`.trim();

  return (
    <article
      className="bg-[#FFFFFF] border border-[#D9E1E8] hover:border-[#1268B3] rounded-xs overflow-hidden flex flex-col justify-between transition-colors duration-300 group relative shadow-2xs focus-within:ring-2 focus-within:ring-[#1268B3]/30"
    >
      {/* 1. Card Top Header: Category & Model */}
      <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-[#F5F7F9] border-b border-[#D9E1E8] flex items-center justify-between text-[10px] sm:text-[11px] font-mono gap-1">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="w-1.5 h-1.5 bg-[#1268B3] rounded-2xs shrink-0 group-hover:w-3 transition-all duration-300" />
          <span className="text-[#1268B3] font-bold tracking-wider uppercase truncate">
            {product.category}
          </span>
        </div>
        <span className="text-[#667085] font-semibold bg-[#FFFFFF] px-1.5 sm:px-2 py-0.5 rounded-2xs border border-[#D9E1E8] shrink-0 text-[9px] sm:text-[10px]">
          {product.model}
        </span>
      </div>

      {/* 2. Product Image Frame (Visual Focus, Clean #FFFFFF, Stable 4:3 Aspect Ratio) */}
      <div className="relative aspect-[4/3] bg-[#FFFFFF] p-3 sm:p-4 flex items-center justify-center overflow-hidden border-b border-[#D9E1E8]/70">
        {hasImage ? (
          <Link
            to={`/products/${product.slug}`}
            className="w-full h-full flex items-center justify-center overflow-hidden"
            aria-label={`View full specifications for ${altText}`}
          >
            <motion.img
              src={product.image}
              alt={altText}
              onError={() => setImageError(true)}
              loading={priority ? 'eager' : 'lazy'}
              className="w-full h-full object-contain filter contrast-[1.02] transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
          </Link>
        ) : (
          <Link
            to={`/products/${product.slug}`}
            className="w-full h-full bg-[#F5F7F9] rounded-2xs flex flex-col items-center justify-center text-center p-3 sm:p-4 group/placeholder"
            aria-label={`Image unavailable for ${altText}. View technical specification.`}
          >
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xs bg-[#FFFFFF] border border-[#D9E1E8] flex items-center justify-center text-[#667085] mb-2 group-hover/placeholder:border-[#1268B3] transition-colors">
              <Package className="w-5 h-5 text-[#667085]" />
            </div>
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-wider text-[#111827] uppercase">
              IMAGE UNAVAILABLE
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono text-[#667085] mt-0.5">
              TECHNICAL SPEC AVAILABLE
            </span>
          </Link>
        )}

        {/* Multi-image indicator badge */}
        {imageCount > 1 && (
          <div className="absolute top-2 right-2 bg-[#071A2B]/85 text-[#FFFFFF] text-[9px] sm:text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded-2xs flex items-center gap-1 backdrop-blur-xs shadow-2xs pointer-events-none">
            <Images className="w-3 h-3 text-[#1597E5]" />
            <span>{imageCount} Photos</span>
          </div>
        )}

        {/* Quick View Hover Pill on Desktop */}
        {onQuickView && (
          <div className="hidden sm:flex absolute inset-0 bg-[#071A2B]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-200 items-center justify-center pointer-events-none">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onQuickView(product);
              }}
              className="pointer-events-auto bg-[#FFFFFF] text-[#071A2B] hover:text-[#1268B3] text-xs font-semibold px-3 py-1.5 rounded-xs shadow-md border border-[#D9E1E8] flex items-center gap-1.5 font-mono cursor-pointer transition-transform active:scale-95"
              aria-label={`Quick view specifications for ${product.name}`}
            >
              <Eye className="w-3.5 h-3.5 text-[#1268B3]" />
              <span>Quick View</span>
            </button>
          </div>
        )}
      </div>

      {/* 3. Product Info: Name, Key Spec, Description */}
      <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <Link
            to={`/products/${product.slug}`}
            className="block text-xs sm:text-sm font-bold text-[#111827] group-hover:text-[#1268B3] transition-colors duration-200 line-clamp-2 leading-snug"
            title={product.name}
          >
            {product.name}
          </Link>

          {/* Key Spec Badge */}
          {product.keySpec && (
            <div className="mt-2 p-1.5 sm:p-2 bg-[#F5F7F9] rounded-2xs border border-[#D9E1E8]">
              <span className="block text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-[#667085]">
                Specification
              </span>
              <span className="block text-[10px] sm:text-xs font-bold font-mono text-[#111827] truncate mt-0.5">
                {product.keySpec}
              </span>
            </div>
          )}

          {/* Short Description */}
          {product.shortDescription && (
            <p className="mt-1.5 text-[11px] sm:text-xs text-[#667085] line-clamp-2 leading-relaxed font-sans">
              {product.shortDescription}
            </p>
          )}
        </div>

        {/* 4. Action Buttons (VIEW DETAILS & REQUEST QUOTE) */}
        <div className="pt-2.5 border-t border-[#D9E1E8]/70 grid grid-cols-2 gap-1.5 sm:gap-2">
          <Link
            to={`/products/${product.slug}`}
            className="w-full text-center text-[10px] sm:text-xs font-semibold text-[#111827] hover:text-[#1268B3] hover:bg-[#F5F7F9] border border-[#D9E1E8] py-2 sm:py-2.5 px-1 rounded-2xs transition-colors flex items-center justify-center gap-1 group/btn min-h-[38px]"
          >
            <span className="truncate">View Details</span>
            <ArrowRight className="w-3 h-3 text-[#1268B3] shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Link>

          <button
            type="button"
            onClick={() => onRequestQuote ? onRequestQuote(product) : null}
            className="w-full text-center text-[10px] sm:text-xs font-bold text-[#FFFFFF] bg-[#071A2B] hover:bg-[#1268B3] py-2 sm:py-2.5 px-1 rounded-2xs transition-colors uppercase tracking-wider active:scale-95 shadow-2xs cursor-pointer min-h-[38px] truncate"
            aria-label={`Request quotation for ${product.name}`}
          >
            Quote
          </button>
        </div>
      </div>
    </article>
  );
}
