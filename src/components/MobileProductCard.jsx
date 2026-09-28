import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Eye, Package } from 'lucide-react';

export default function MobileProductCard({ product, onQuickView }) {
  const [imageError, setImageError] = useState(false);
  const hasImage = Boolean(product.image) && !imageError;
  const altText = `${product.name} ${product.model && !product.model.includes('Not specified') ? product.model : ''}`.trim();

  return (
    <div
      className="flex-shrink-0 bg-[#FFFFFF] border border-[#D9E1E8] rounded-xs overflow-hidden flex flex-col justify-between shadow-2xs snap-start transition-transform active:scale-[0.98]"
      style={{ width: 'clamp(155px, 46vw, 205px)' }}
    >
      {/* Product Image Frame */}
      <div
        onClick={() => onQuickView ? onQuickView(product) : null}
        className="relative aspect-[4/3] bg-[#FFFFFF] p-2.5 flex items-center justify-center overflow-hidden border-b border-[#D9E1E8]/70 cursor-pointer group"
      >
        {hasImage ? (
          <img
            src={product.image}
            alt={altText}
            onError={() => setImageError(true)}
            className="w-full h-full object-contain filter contrast-[1.02]"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-[#F5F7F9] rounded-2xs flex flex-col items-center justify-center text-center p-2">
            <Package className="w-5 h-5 text-[#667085] mb-1" />
            <span className="text-[9px] font-mono font-bold text-[#111827] uppercase">
              SPEC SHEET
            </span>
          </div>
        )}

        {/* Quick View Pill Indicator */}
        {onQuickView && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="absolute bottom-1.5 right-1.5 bg-[#071A2B]/85 text-white text-[9px] px-1.5 py-0.5 rounded-2xs flex items-center gap-1 font-mono shadow-2xs backdrop-blur-xs"
            aria-label={`Quick view ${product.name}`}
          >
            <Eye className="w-2.5 h-2.5 text-[#1597E5]" />
            <span>Quick</span>
          </button>
        )}
      </div>

      {/* Product Information */}
      <div className="p-2.5 flex-1 flex flex-col justify-between space-y-1.5">
        <div>
          {/* Category & Model */}
          <div className="flex items-center justify-between gap-1 text-[9px] font-mono text-[#667085] mb-1">
            <span className="text-[#1268B3] font-bold truncate uppercase">
              {product.category}
            </span>
            <span className="font-semibold bg-[#F5F7F9] px-1 py-0.5 rounded-2xs border border-[#D9E1E8] flex-shrink-0 text-[8px]">
              {product.model}
            </span>
          </div>

          {/* Product Name */}
          <Link
            to={`/products/${product.slug}`}
            className="block text-xs font-bold text-[#111827] line-clamp-2 leading-tight hover:text-[#1268B3] transition-colors"
          >
            {product.name}
          </Link>
        </div>

        {/* View Details Link */}
        <div className="pt-1.5 border-t border-[#D9E1E8]/70 flex items-center justify-between">
          <Link
            to={`/products/${product.slug}`}
            className="text-[10px] font-bold text-[#1268B3] flex items-center gap-1 hover:underline min-h-[30px] items-center"
          >
            <span>View Details</span>
            <ArrowRight className="w-2.5 h-2.5 text-[#1268B3]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
