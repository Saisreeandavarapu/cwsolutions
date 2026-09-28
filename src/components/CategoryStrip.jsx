import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package } from 'lucide-react';
import { CATEGORIES } from '../data/categories.js';
import CategoryRail from './CategoryRail.jsx';
import SectionReveal from './SectionReveal.jsx';

export default function CategoryStrip() {
  return (
    <section className="bg-industrial-bg-subtle py-10 sm:py-14 lg:py-20 border-b border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionReveal withAccentWipe={true}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-industrial-steel uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 bg-industrial-steel"></span>
                <span>EQUIPMENT CLASSIFICATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-dark tracking-tight">
                Access & Material Handling Categories
              </h2>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold uppercase tracking-wider text-industrial-steel hover:text-industrial-steel-hover flex items-center gap-1.5 transition-colors group"
            >
              <span>Browse Full Catalogue</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </SectionReveal>

        {/* Desktop View: Preserved Approved 4-Column Grid (md and up) */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="bg-white border border-gray-200 hover:border-industrial-steel rounded-sm overflow-hidden flex flex-col group transition-all duration-200 hover:shadow-industrial"
            >
              {/* Category Image Box */}
              <div className="relative aspect-[4/3] bg-industrial-bg-subtle p-4 flex items-center justify-center border-b border-gray-100 overflow-hidden">
                {cat.image ? (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-3 bg-white">
                    <Package className="w-8 h-8 text-industrial-steel/40 mb-1.5" />
                    <span className="text-[10px] font-mono uppercase tracking-wider text-industrial-text-muted font-bold">
                      Industrial Specs
                    </span>
                    <span className="text-[9px] font-mono text-industrial-steel">
                      Standard Range
                    </span>
                  </div>
                )}
                <span className="absolute top-2.5 right-2.5 bg-industrial-dark/90 text-white font-mono text-[10px] px-2 py-0.5 rounded-xs font-semibold">
                  {cat.itemCount} Models
                </span>
              </div>

              {/* Category Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-bold text-base text-industrial-dark group-hover:text-industrial-steel transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-industrial-text-muted mt-1.5 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center text-xs font-bold text-industrial-steel group-hover:translate-x-0.5 transition-transform">
                  <span>View Products</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 text-industrial-steel" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View: Dedicated Horizontal Category Rail (< md) */}
        <div className="block md:hidden -mx-4">
          <CategoryRail categories={CATEGORIES} />
        </div>

      </div>
    </section>
  );
}
