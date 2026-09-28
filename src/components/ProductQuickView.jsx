import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, MessageSquare, Package, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductQuickView({
  product,
  isOpen,
  onClose,
  onRequestQuote
}) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);
  const touchStartY = useRef(0);

  // Reset selected image when product changes
  useEffect(() => {
    setSelectedImageIndex(0);
    setImageError(false);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        setSelectedImageIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
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
  }, [isOpen, onClose, product]);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    if (touchEndY - touchStartY.current > 70) {
      onClose();
    }
  };

  if (!isOpen || !product) return null;

  const images = (product.images && product.images.length > 0)
    ? product.images
    : (product.gallery && product.gallery.length > 0 ? product.gallery : (product.image ? [product.image] : []));

  const currentImage = images[selectedImageIndex] || product.image;
  const hasImage = Boolean(currentImage) && !imageError;

  const validSpecs = Object.entries(product.specifications || {})
    .filter(([_, value]) => value && String(value).trim() !== '')
    .slice(0, 6);

  const whatsappMessage = `Hello Creative Work Solutions, I am interested in:\nProduct: ${product.name} (${product.model})\nCategory: ${product.category}\n\nPlease share official quotation and delivery details. Thank you.`;
  const whatsappUrl = `https://wa.me/917989651726?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div
      className="fixed inset-0 z-[1100] flex items-end sm:items-center justify-center bg-[#071A2B]/70 backdrop-blur-xs transition-opacity p-0 sm:p-4 lg:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickview-title"
    >
      {/* Modal Container: Bottom sheet on mobile, centered modal on tablet/desktop */}
      <div
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="w-full sm:max-w-4xl max-h-[92vh] sm:max-h-[88vh] bg-[#FFFFFF] rounded-t-lg sm:rounded-xs shadow-2xl border border-[#D9E1E8] overflow-hidden flex flex-col transition-all duration-300 ease-out"
        style={{
          animation: 'quickViewSlideUp 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Mobile Swipe Down Pull Bar Indicator */}
        <div className="w-full flex sm:hidden items-center justify-center pt-2.5 pb-1 bg-[#F5F7F9] border-b border-[#D9E1E8]">
          <div className="w-10 h-1 bg-[#D9E1E8] rounded-full" />
        </div>

        {/* Top Header Bar */}
        <div className="px-4 sm:px-6 py-3 bg-[#071A2B] text-[#FFFFFF] flex items-center justify-between border-b border-[#071A2B]">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-2xs bg-[#1597E5]" />
            <span className="font-bold tracking-widest text-[#1597E5] uppercase text-[10px] sm:text-xs">
              EQUIPMENT QUICK VIEW
            </span>
            <span className="text-[#667085] hidden sm:inline">•</span>
            <span className="text-[#667085] hidden sm:inline text-[11px]">
              {product.model}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-2xs flex items-center justify-center text-[#667085] hover:text-[#FFFFFF] hover:bg-[#FFFFFF]/10 transition-colors cursor-pointer"
            aria-label="Close Quick View Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Main Content Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">

            {/* LEFT COLUMN: Large Main Image + Thumbnails Gallery */}
            <div className="lg:col-span-6 space-y-3">
              {/* Main Image Frame */}
              <div className="relative aspect-[4/3] bg-[#FFFFFF] border border-[#D9E1E8] rounded-2xs p-3 sm:p-4 flex items-center justify-center overflow-hidden">
                {hasImage ? (
                  <img
                    key={selectedImageIndex}
                    src={currentImage}
                    alt={`${product.name} - view ${selectedImageIndex + 1}`}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-contain filter contrast-[1.02] transition-opacity duration-200"
                  />
                ) : (
                  <div className="w-full h-full bg-[#F5F7F9] rounded-2xs flex flex-col items-center justify-center text-center p-4">
                    <Package className="w-10 h-10 text-[#667085] mb-2" />
                    <span className="text-xs font-mono font-bold tracking-wider text-[#111827] uppercase">
                      IMAGE UNAVAILABLE
                    </span>
                    <span className="text-[10px] font-mono text-[#667085] mt-0.5">
                      TECHNICAL SPECIFICATIONS BELOW
                    </span>
                  </div>
                )}

                {/* Arrow navigation over main image if multiple */}
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#071A2B]/60 hover:bg-[#071A2B] text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedImageIndex((prev) => (prev + 1) % images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#071A2B]/60 hover:bg-[#071A2B] text-white flex items-center justify-center transition-colors cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails Row */}
              {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1 pt-0.5 no-scrollbar">
                  {images.map((img, idx) => {
                    const isActive = idx === selectedImageIndex;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedImageIndex(idx)}
                        className={`relative flex-shrink-0 w-16 h-16 sm:w-18 sm:h-18 p-1 rounded-2xs border bg-[#FFFFFF] transition-all cursor-pointer ${
                          isActive
                            ? 'border-[#1268B3] ring-2 ring-[#1268B3]/30 shadow-xs'
                            : 'border-[#D9E1E8] hover:border-[#667085] opacity-70 hover:opacity-100'
                        }`}
                        aria-label={`Select photo ${idx + 1} for ${product.name}`}
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Product Technical Information & CTAs */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Category & Model badges */}
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="text-[#1268B3] font-bold uppercase tracking-wider">
                  {product.category}
                </span>
                <span className="text-[#D9E1E8]">•</span>
                <span className="font-semibold text-[#111827] bg-[#F5F7F9] px-2 py-0.5 rounded-2xs border border-[#D9E1E8]">
                  {product.model}
                </span>
              </div>

              {/* Product Title */}
              <h2 id="quickview-title" className="text-lg sm:text-xl font-extrabold text-[#111827] tracking-tight leading-snug">
                {product.name}
              </h2>

              {/* Key Specification */}
              {product.keySpec && (
                <div className="p-2.5 bg-[#F5F7F9] border border-[#D9E1E8] rounded-2xs font-mono text-xs">
                  <span className="text-[10px] text-[#667085] uppercase tracking-wider block">
                    Key Specification
                  </span>
                  <span className="font-bold text-[#111827] mt-0.5 block">
                    {product.keySpec}
                  </span>
                </div>
              )}

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-sans">
                {product.shortDescription}
              </p>

              {/* Technical Specifications Snapshot */}
              {validSpecs.length > 0 && (
                <div className="border border-[#D9E1E8] rounded-2xs overflow-hidden">
                  <div className="bg-[#F5F7F9] px-3 py-1.5 border-b border-[#D9E1E8] text-[10px] font-mono font-bold uppercase tracking-wider text-[#667085]">
                    Technical Parameter Highlights
                  </div>
                  <table className="w-full text-left text-xs font-mono">
                    <tbody>
                      {validSpecs.map(([k, v], idx) => (
                        <tr
                          key={k}
                          className={`border-b border-[#D9E1E8]/70 last:border-0 ${
                            idx % 2 === 0 ? 'bg-[#FFFFFF]' : 'bg-[#F5F7F9]/50'
                          }`}
                        >
                          <td className="py-1.5 px-3 text-[#667085] font-medium w-5/12 border-r border-[#D9E1E8]/70 text-[11px]">
                            {k}
                          </td>
                          <td className="py-1.5 px-3 font-semibold text-[#111827] w-7/12 text-[11px] truncate">
                            {String(v)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* CTAs */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onRequestQuote) onRequestQuote(product);
                  }}
                  className="w-full bg-[#071A2B] hover:bg-[#1268B3] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-2xs flex items-center justify-center gap-2 transition-colors shadow-2xs cursor-pointer active:scale-95"
                >
                  <span>Request Quotation</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1597E5]" />
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#128C7E] hover:bg-[#075E54] text-[#FFFFFF] text-xs font-bold uppercase tracking-wider py-3 px-4 rounded-2xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp RFQ</span>
                </a>
              </div>

              {/* View Full Product Sheet Link */}
              <div className="text-center pt-1 border-t border-[#D9E1E8]/80">
                <Link
                  to={`/products/${product.slug}`}
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#1268B3] hover:underline py-1"
                >
                  <span>View Full Technical Specification Sheet</span>
                  <ArrowRight className="w-3 h-3 text-[#1268B3]" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </div>

      <style>{`
        @keyframes quickViewSlideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
