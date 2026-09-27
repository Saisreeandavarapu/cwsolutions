import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  ArrowRight, 
  ZoomIn, 
  ShieldCheck, 
  Layers, 
  ChevronRight, 
  FileText, 
  Check, 
  CheckCircle2, 
  Maximize2,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import MobileProductCard from './MobileProductCard';
import ProductQuickView from './ProductQuickView';
import LightboxModal from './LightboxModal';
import EnquiryForm from './EnquiryForm';

export default function ProductDetails({
  product,
  relatedProducts = [],
  onRequestQuote
}) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const activeImage = images[activeImageIndex] || product.image;

  const validSpecs = Object.entries(product.specifications || {}).filter(
    ([_, value]) => value && String(value).trim() !== ''
  );

  const whatsappMessage = `Hello Creative Work Solutions, I am interested in the following product:\nProduct: ${product.name} (${product.model})\nCategory: ${product.category}\n\nPlease share quotation and delivery timeframe. Thank you.`;
  const whatsappUrl = `https://wa.me/917989651726?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white min-h-screen">
      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={isLightboxOpen}
        images={images}
        currentIndex={activeImageIndex}
        onClose={() => setIsLightboxOpen(false)}
        onPrev={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
        onNext={() => setActiveImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
        productTitle={`${product.name} (${product.model})`}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-industrial-bg-subtle border-b border-gray-200 py-3 text-xs font-mono">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-gray-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-industrial-dark transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/products" className="hover:text-industrial-dark transition-colors">
            Products
          </Link>
          <span>/</span>
          <Link
            to={`/products?category=${encodeURIComponent(product.category)}`}
            className="hover:text-industrial-dark transition-colors"
          >
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-industrial-dark font-bold truncate">
            {product.name}
          </span>
        </div>
      </div>

      {/* Main Product Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-14">
        {/* Desktop: 2-column layout (lg:grid-cols-12). Mobile: Sequential stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Image & Thumbnails Gallery */}
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            
            {/* Primary Main Image Frame */}
            <div className="relative aspect-[4/3] bg-white border border-gray-200 rounded-sm p-4 flex items-center justify-center overflow-hidden shadow-subtle group">
              <motion.img
                key={activeImageIndex}
                initial={{ opacity: 0.75, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                src={activeImage}
                alt={`Creative Work Solutions ${product.name} ${product.model} - view ${activeImageIndex + 1}`}
                className="w-full h-full object-contain cursor-zoom-in group-hover:scale-105 transition-transform duration-300"
                onClick={() => setIsLightboxOpen(true)}
              />

              {/* Lightbox Zoom Indicator */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="absolute top-3 right-3 bg-white/90 hover:bg-white text-industrial-dark p-2 rounded-sm shadow-sm border border-gray-200 transition-all flex items-center gap-1.5 text-xs font-mono font-semibold"
                aria-label="Inspect high resolution sheet"
              >
                <Maximize2 className="w-3.5 h-3.5 text-industrial-steel" />
                <span className="hidden sm:inline">Inspect Sheet</span>
              </button>

              <div className="absolute bottom-3 left-3 bg-industrial-dark/90 text-white text-[10px] font-mono px-2 py-0.5 rounded-xs">
                {product.model}
              </div>
            </div>

            {/* Mobile-Friendly Horizontally Scrollable Thumbnails (56-68px) */}
            {images.length > 1 && (
              <div
                className="flex items-center gap-2 sm:gap-3 overflow-x-auto py-1 -mx-2 px-2 no-scrollbar"
                style={{
                  WebkitOverflowScrolling: 'touch',
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none'
                }}
              >
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 bg-white border rounded-xs p-1 flex items-center justify-center transition-all ${
                      activeImageIndex === idx
                        ? 'border-industrial-steel ring-2 ring-industrial-steel/20'
                        : 'border-gray-200 hover:border-gray-400 opacity-75'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Technical Verification Stamp */}
            <div className="hidden sm:flex items-center justify-between p-3.5 bg-industrial-bg-subtle rounded-sm border border-gray-200 text-xs font-mono">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="text-industrial-dark font-bold">Factory Quality Inspected</span>
              </div>
              <span className="text-gray-500">Documented Load Ratings</span>
            </div>

          </div>

          {/* Right Column: Product Info & Technical Specifications */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            
            {/* Header: Name, Model, Category */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span className="bg-industrial-steel/10 text-industrial-steel font-bold px-2 py-0.5 rounded-xs uppercase tracking-wider">
                  {product.category}
                </span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 font-semibold">{product.model}</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-industrial-dark tracking-tight leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Key Specification Highlight */}
            <div className="p-3 bg-industrial-bg-subtle border border-gray-200 rounded-sm font-mono text-xs">
              <span className="text-[10px] text-gray-500 uppercase block font-semibold tracking-wider">
                Key Specification
              </span>
              <span className="font-bold text-industrial-dark text-sm block mt-0.5">
                {product.keySpec}
              </span>
            </div>

            {/* Factual Short Description */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Action CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <motion.button
                type="button"
                whileTap={{ scale: 0.97 }}
                onClick={() => onRequestQuote(product)}
                className="w-full bg-industrial-dark hover:bg-industrial-steel text-white text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-sm flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-3.5 h-3.5 text-industrial-steel" />
              </motion.button>

              <motion.a
                whileTap={{ scale: 0.97 }}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-sm flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp RFQ</span>
              </motion.a>
            </div>

            <div className="flex items-center justify-between text-xs font-mono text-gray-500 pt-1">
              <span>Direct Sales Line:</span>
              <a href={`tel:${COMPANY_INFO.phoneClean}`} className="font-bold text-industrial-steel hover:underline">
                {COMPANY_INFO.phone}
              </a>
            </div>

            {/* Mobile & Desktop Technical Specification Table (Prompt Section 35 & 36) */}
            <div className="pt-5 border-t border-gray-200 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-industrial-dark flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-industrial-steel" />
                  <span>Technical Specifications</span>
                </h3>
                <span className="text-[10px] font-mono text-gray-400">DOCUMENTED SPECS</span>
              </div>

              <div className="border border-gray-200 rounded-sm overflow-hidden shadow-2xs">
                <table className="w-full text-left text-xs font-mono">
                  <tbody>
                    {validSpecs.map(([specKey, specVal], idx) => (
                      <tr
                        key={specKey}
                        className={`border-b border-gray-100 last:border-0 ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-industrial-bg-subtle/60'
                        }`}
                        style={{
                          animation: `fadeInRow 300ms ease-out ${idx * 40}ms both`
                        }}
                      >
                        <td className="py-2.5 px-3.5 font-medium text-gray-500 w-2/5 border-r border-gray-100">
                          {specKey}
                        </td>
                        <td className="py-2.5 px-3.5 font-bold text-industrial-dark w-3/5">
                          {String(specVal)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Features & Applications */}
            {product.features && product.features.length > 0 && (
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-industrial-dark">
                  Engineering Characteristics
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-600">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-industrial-steel flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          </div>

        </div>

        {/* Related Equipment Section */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 sm:mt-20 pt-10 border-t border-gray-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-xs font-mono font-bold text-industrial-steel uppercase tracking-wider block">
                  CATEGORY PARALLELS
                </span>
                <h2 className="text-xl font-bold text-industrial-dark tracking-tight mt-0.5">
                  Related {product.category}
                </h2>
              </div>
              <Link
                to={`/products?category=${encodeURIComponent(product.category)}`}
                className="inline-flex items-center gap-1 text-xs font-bold text-industrial-steel hover:underline font-mono"
              >
                <span>View Full Line</span>
                <ArrowRight className="w-3.5 h-3.5 text-industrial-steel" />
              </Link>
            </div>

            {/* Desktop: Grid. Mobile: Horizontal scroll */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProd) => (
                <ProductCard
                  key={relProd.id}
                  product={relProd}
                  onRequestQuote={onRequestQuote}
                />
              ))}
            </div>

            <div className="sm:hidden flex overflow-x-auto gap-3 py-2 -mx-4 px-4 snap-x no-scrollbar">
              {relatedProducts.map((relProd) => (
                <MobileProductCard
                  key={relProd.id}
                  product={relProd}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Quick View Bottom Sheet for Mobile */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
        onRequestQuote={onRequestQuote}
      />

      <style>{`
        @keyframes fadeInRow {
          from {
            opacity: 0;
            transform: translateX(12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
