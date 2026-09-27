import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, Phone, MessageSquare, ShieldCheck, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export default function ProductQuickView({
  product,
  isOpen,
  onClose,
  onRequestQuote
}) {
  const sheetRef = useRef(null);
  const touchStartY = useRef(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    // If swiped down by more than 70px, close
    if (touchEndY - touchStartY.current > 70) {
      onClose();
    }
  };

  if (!isOpen || !product) return null;

  const validSpecs = Object.entries(product.specifications || {})
    .filter(([_, value]) => value && String(value).trim() !== '')
    .slice(0, 5);

  const whatsappMessage = `Hello Creative Work Solutions, I am interested in the following product:\nProduct: ${product.name} (${product.model})\nCategory: ${product.category}\n\nPlease share the quotation and technical details. Thank you.`;
  const whatsappUrl = `https://wa.me/917989651726?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="fixed inset-0 z-[1100] flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickview-title"
    >
      {/* Bottom Sheet on Mobile / Modal on Tablet & Desktop */}
      <div
        ref={sheetRef}
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="w-full sm:max-w-xl max-h-[88vh] bg-white rounded-t-xl sm:rounded-sm shadow-2xl border border-gray-200 overflow-hidden flex flex-col transition-transform duration-350 ease-out"
        style={{
          animation: 'sheetSlideUp 350ms cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Mobile Swipe Down Pull Bar Indicator */}
        <div className="w-full flex sm:hidden items-center justify-center pt-2.5 pb-1 bg-gray-50 border-b border-gray-100">
          <div className="w-10 h-1.5 bg-gray-300 rounded-full" />
        </div>

        {/* Quick View Header */}
        <div className="px-5 py-3.5 bg-industrial-dark text-white flex items-center justify-between border-b border-gray-800">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-industrial-steel" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-industrial-steel">
              Quick View Specification
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            aria-label="Close Quick View"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Quick View Body */}
        <div className="p-5 overflow-y-auto space-y-5">
          {/* Top Section: Image & Key Info */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
            <div className="sm:col-span-5 aspect-[4/3] bg-industrial-bg-subtle p-3 rounded-xs border border-gray-200 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="sm:col-span-7 space-y-2">
              <div className="flex items-center gap-2 text-[11px] font-mono">
                <span className="text-industrial-steel font-bold uppercase">
                  {product.category}
                </span>
                <span>•</span>
                <span className="font-semibold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded-xs">
                  {product.model}
                </span>
              </div>

              <h3 id="quickview-title" className="text-base sm:text-lg font-extrabold text-industrial-dark leading-tight">
                {product.name}
              </h3>

              <div className="p-2 bg-industrial-bg-subtle border border-gray-200 rounded-xs font-mono text-xs">
                <span className="text-[10px] text-gray-500 uppercase block">Key Spec</span>
                <span className="font-bold text-industrial-dark">{product.keySpec}</span>
              </div>
            </div>
          </div>

          {/* Short Description */}
          <p className="text-xs text-industrial-text-muted leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Technical Specifications Table */}
          {validSpecs.length > 0 && (
            <div className="border border-gray-200 rounded-xs overflow-hidden">
              <table className="w-full text-left text-xs font-mono">
                <tbody>
                  {validSpecs.map(([specKey, specVal], idx) => (
                    <tr
                      key={specKey}
                      className={`border-b border-gray-100 last:border-0 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/70'
                        }`}
                    >
                      <td className="py-2 px-3 text-gray-500 font-medium w-2/5 border-r border-gray-100">
                        {specKey}
                      </td>
                      <td className="py-2 px-3 font-semibold text-industrial-dark w-3/5">
                        {String(specVal)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => {
                onClose();
                if (onRequestQuote) onRequestQuote(product);
              }}
              className="w-full bg-industrial-dark hover:bg-industrial-steel text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <span>Request Quotation</span>
              <ArrowRight className="w-3.5 h-3.5 text-industrial-steel" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-sm flex items-center justify-center gap-2 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp RFQ</span>
            </a>
          </div>

          {/* View Full Product Page Link */}
          <div className="text-center pt-1 border-t border-gray-100">
            <Link
              to={`/products/${product.slug}`}
              onClick={onClose}
              className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-industrial-steel hover:underline py-1"
            >
              <span>View Full Technical Sheet & Diagrams</span>
              <ArrowRight className="w-3 h-3 text-industrial-steel" />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes sheetSlideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
