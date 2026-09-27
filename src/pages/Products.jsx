import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, X, SlidersHorizontal, RotateCcw, PackageCheck } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { PRODUCTS } from '../data/products';
import ProductGrid from '../components/ProductGrid';
import ProductFilter from '../components/ProductFilter';
import ProductQuickView from '../components/ProductQuickView';

export default function Products({ onRequestQuote }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const shouldReduceMotion = useReducedMotion();

  // Categories list (Section 3: Category Explorer)
  const categories = [
    'All',
    'Aluminium Ladders',
    'FRP Ladders',
    'Tower Ladders',
    'Trolley Ladders',
    'Extension Ladders',
    'Scissor Lifts',
    'Lifting Equipment',
    'Material Handling',
    'Scaffolding'
  ];

  // Materials list
  const materials = [
    'All',
    'Aluminium',
    'FRP / Fiberglass',
    'Mild Steel',
    'Aluminium + MS'
  ];

  // Applications list
  const applications = [
    'All',
    'Electrical Work',
    'Industrial Maintenance',
    'Warehousing',
    'Construction',
    'Facility Management',
    'Material Handling'
  ];

  const categoryParam = searchParams.get('category') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [selectedMaterial, setSelectedMaterial] = useState('All');
  const [selectedApplication, setSelectedApplication] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    document.title = 'Industrial Access & Material Handling Catalogue | Creative Work Solutions';
    window.scrollTo(0, 0);
  }, []);

  // Sync URL search params if category changes externally
  useEffect(() => {
    const urlCat = searchParams.get('category');
    if (urlCat && categories.map((c) => c.toLowerCase()).includes(urlCat.toLowerCase())) {
      const matched = categories.find((c) => c.toLowerCase() === urlCat.toLowerCase());
      if (matched) setSelectedCategory(matched);
    } else if (!urlCat) {
      setSelectedCategory('All');
    }
  }, [searchParams]);

  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: cat });
    }
    setIsMobileDrawerOpen(false);
  };

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSelectedMaterial('All');
    setSelectedApplication('All');
    setSearchQuery('');
    setSearchParams({});
    setIsMobileDrawerOpen(false);
  };

  // Filter products logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'All' && product.category.toLowerCase() !== selectedCategory.toLowerCase()) {
        return false;
      }

      // Material filter
      if (selectedMaterial !== 'All') {
        const mat = product.material.toLowerCase();
        if (selectedMaterial === 'Aluminium' && !mat.includes('aluminium')) return false;
        if (selectedMaterial === 'FRP / Fiberglass' && !mat.includes('frp') && !mat.includes('fibreglass') && !mat.includes('fiberglass')) return false;
        if (selectedMaterial === 'Mild Steel' && !mat.includes('mild steel') && !mat.includes('ms')) return false;
        if (selectedMaterial === 'Aluminium + MS' && !(mat.includes('aluminium') && (mat.includes('ms') || mat.includes('steel')))) return false;
      }

      // Application filter
      if (selectedApplication !== 'All') {
        const appMatches = (product.applications || []).some((app) =>
          app.toLowerCase().includes(selectedApplication.toLowerCase())
        );
        if (!appMatches) return false;
      }

      // Search Query filter (searches name, model, category, description, specifications)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const nameMatch = product.name.toLowerCase().includes(query);
        const modelMatch = product.model.toLowerCase().includes(query);
        const catMatch = product.category.toLowerCase().includes(query);
        const descMatch = product.shortDescription.toLowerCase().includes(query);
        const specMatch = Object.entries(product.specifications || {}).some(
          ([k, v]) => k.toLowerCase().includes(query) || String(v).toLowerCase().includes(query)
        );
        if (!nameMatch && !modelMatch && !catMatch && !descMatch && !specMatch) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedMaterial, selectedApplication, searchQuery]);

  // Determine active filters for Section 5: Active Filters
  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedMaterial !== 'All' ||
    selectedApplication !== 'All' ||
    searchQuery.trim() !== '';

  return (
    <div className="bg-[#F5F7F9] min-h-screen py-8 sm:py-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. PREMIUM CATALOGUE INTRO (Section 1) */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 border-b border-[#D9E1E8] pb-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            
            {/* Left: Heading & Description */}
            <div className="space-y-3 max-w-3xl">
              {/* Technical Label */}
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#1268B3]" />
                <span className="text-xs font-mono font-bold tracking-[0.22em] text-[#1268B3] uppercase">
                  EQUIPMENT CATALOGUE
                </span>
              </div>

              {/* Main Heading: 48-56px desktop, 32-36px mobile */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.12]">
                Industrial Access & Material Handling Equipment
              </h1>

              {/* Supporting Copy */}
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed max-w-2xl font-sans">
                Explore industrial access, lifting, scaffolding and material-handling equipment from Creative Work Solutions.
              </p>
            </div>

            {/* Right: Technical Information Block (Section 1) */}
            <div className="hidden lg:flex flex-col items-end shrink-0 border border-[#D9E1E8] bg-white p-3.5 rounded-sm shadow-2xs space-y-2">
              <div className="text-right">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#1268B3] uppercase block">
                  CWS
                </span>
                <span className="text-xs font-mono font-bold text-[#111827] uppercase tracking-wider block">
                  PRODUCT CATALOGUE
                </span>
              </div>
              <div className="w-full h-[1px] bg-[#D9E1E8]" />
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#667085] uppercase">
                <span>ACCESS</span>
                <span>•</span>
                <span>LIFTING</span>
                <span>•</span>
                <span>MATERIAL HANDLING</span>
              </div>
            </div>

          </div>

          {/* 2. PREMIUM SEARCH EXPERIENCE (Section 2) */}
          <div className="mt-7">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#667085]">
                <Search className="w-4 h-4 text-[#1268B3]" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search equipment, model or specification..."
                className="w-full pl-11 pr-10 h-[50px] sm:h-[54px] bg-white border border-[#D9E1E8] rounded-sm text-xs sm:text-sm text-[#111827] placeholder:text-[#667085]/60 focus:outline-hidden focus:border-[#1268B3] focus:ring-1 focus:ring-[#1268B3]/25 transition-all shadow-2xs"
                aria-label="Search equipment, model or specification"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#667085] hover:text-[#111827] cursor-pointer"
                  aria-label="Clear search input"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Search query feedback */}
            {searchQuery.trim() !== '' && (
              <div className="mt-2.5 flex items-center justify-between text-xs font-mono">
                <span className="text-[#1268B3] font-bold">
                  SEARCH RESULTS:{' '}
                  <span className="text-[#111827]">"{filteredProducts.length} equipment entries"</span>
                </span>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-[#667085] hover:text-[#111827] hover:underline cursor-pointer"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>

          {/* 3. CATEGORY EXPLORER (Section 3: Minimal technical category buttons) */}
          <div className="mt-5 pt-4 border-t border-[#D9E1E8]/70">
            <div
              className="flex overflow-x-auto gap-2 py-1.5 -mx-4 px-4 sm:mx-0 sm:px-0 no-scrollbar items-center"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
              role="tablist"
              aria-label="Equipment Categories Explorer"
            >
              {categories.map((cat) => {
                const isSelected = selectedCategory.toLowerCase() === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleSelectCategory(cat)}
                    className={`flex-shrink-0 px-3.5 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 border rounded-sm cursor-pointer whitespace-nowrap relative ${
                      isSelected
                        ? 'bg-[#1268B3]/5 text-[#1268B3] border-[#1268B3] font-bold shadow-2xs'
                        : 'bg-transparent text-[#667085] border-transparent hover:text-[#111827] hover:bg-white/70'
                    }`}
                  >
                    <span>{cat}</span>
                    {isSelected && (
                      <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#1268B3]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

        </motion.div>

        {/* 4. CATALOGUE CONTROL BAR: MOBILE STICKY TOOLBAR (Section 4 & 7) */}
        <div className="lg:hidden sticky top-16 z-30 mb-5 bg-white/95 backdrop-blur-xs border border-[#D9E1E8] rounded-sm p-2.5 shadow-xs">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setIsMobileDrawerOpen(true)}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 bg-[#F5F7F9] hover:bg-[#E5E9EE] border border-[#D9E1E8] rounded-xs text-xs font-mono font-bold uppercase tracking-wider text-[#111827] transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#1268B3]" />
              <span>FILTERS</span>
              {hasActiveFilters && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#1268B3]" />
              )}
            </button>

            <div className="px-3 text-xs font-mono font-bold text-[#111827]">
              {filteredProducts.length} EQUIPMENT
            </div>
          </div>
        </div>

        {/* 5. ACTIVE FILTERS (Section 5: Compact active pills) */}
        <AnimatePresence>
          {hasActiveFilters && (
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              className="mb-6 flex flex-wrap items-center gap-2 bg-white border border-[#D9E1E8] px-3.5 py-2.5 rounded-sm shadow-2xs overflow-x-auto"
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#667085] mr-1 shrink-0">
                FILTERED BY:
              </span>

              {/* Category Pill */}
              {selectedCategory !== 'All' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F5F7F9] border border-[#D9E1E8] text-xs font-mono font-semibold text-[#111827] rounded-xs shrink-0">
                  <span>{selectedCategory}</span>
                  <button
                    type="button"
                    onClick={() => handleSelectCategory('All')}
                    className="text-[#667085] hover:text-[#111827] cursor-pointer"
                    aria-label={`Remove category filter ${selectedCategory}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {/* Material Pill */}
              {selectedMaterial !== 'All' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F5F7F9] border border-[#D9E1E8] text-xs font-mono font-semibold text-[#111827] rounded-xs shrink-0">
                  <span>{selectedMaterial}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedMaterial('All')}
                    className="text-[#667085] hover:text-[#111827] cursor-pointer"
                    aria-label={`Remove material filter ${selectedMaterial}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {/* Application Pill */}
              {selectedApplication !== 'All' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F5F7F9] border border-[#D9E1E8] text-xs font-mono font-semibold text-[#111827] rounded-xs shrink-0">
                  <span>{selectedApplication}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedApplication('All')}
                    className="text-[#667085] hover:text-[#111827] cursor-pointer"
                    aria-label={`Remove application filter ${selectedApplication}`}
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {/* Search Query Pill */}
              {searchQuery.trim() !== '' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#F5F7F9] border border-[#D9E1E8] text-xs font-mono font-semibold text-[#111827] rounded-xs shrink-0">
                  <span>"{searchQuery}"</span>
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="text-[#667085] hover:text-[#111827] cursor-pointer"
                    aria-label="Remove search filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {/* Clear All Action */}
              <button
                type="button"
                onClick={handleResetFilters}
                className="ml-auto text-xs font-mono font-bold text-[#1268B3] hover:underline cursor-pointer py-1 shrink-0"
              >
                Clear all
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 6. FILTER + PRODUCT LAYOUT (Section 6: Desktop 2-column ~250px sidebar + Product grid) */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Desktop Filter Sidebar (Section 6) */}
          <ProductFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleSelectCategory}
            materials={materials}
            selectedMaterial={selectedMaterial}
            onSelectMaterial={setSelectedMaterial}
            applications={applications}
            selectedApplication={selectedApplication}
            onSelectApplication={setSelectedApplication}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onResetFilters={handleResetFilters}
            totalResults={filteredProducts.length}
            isMobileDrawerOpen={isMobileDrawerOpen}
            setIsMobileDrawerOpen={setIsMobileDrawerOpen}
          />

          {/* Right Product Grid Area */}
          <div className="flex-1 w-full space-y-4">

            {/* 4. CATALOGUE CONTROL BAR: DESKTOP (Section 4) */}
            <div className="hidden lg:flex items-center justify-between text-xs font-mono text-[#667085] bg-white px-4 py-3 rounded-sm border border-[#D9E1E8] shadow-2xs">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold text-[#1268B3] uppercase tracking-widest">
                  EQUIPMENT
                </span>
                <span className="text-[#D9E1E8]">|</span>
                <span className="font-bold text-[#111827]">
                  {PRODUCTS.length} PRODUCTS
                </span>
                <span className="text-[#D9E1E8]">|</span>
                <span>
                  Showing {filteredProducts.length} of {PRODUCTS.length}
                </span>
              </div>

              {selectedCategory !== 'All' && (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-[#667085]">Category:</span>
                  <span className="bg-[#F5F7F9] text-[#1268B3] px-2 py-0.5 rounded-xs font-bold border border-[#D9E1E8] text-[11px] uppercase">
                    {selectedCategory}
                  </span>
                </div>
              )}
            </div>

            {/* 7 & 8. PRODUCT GRID & CARDS (Section 8, 9, 10, 13) */}
            <ProductGrid
              products={filteredProducts}
              onRequestQuote={onRequestQuote}
              onResetFilters={handleResetFilters}
              onQuickView={(prod) => setQuickViewProduct(prod)}
            />

          </div>

        </div>

      </div>

      {/* 10. PRODUCT QUICK VIEW (Section 12: Desktop modal & mobile bottom-sheet) */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={Boolean(quickViewProduct)}
        onClose={() => setQuickViewProduct(null)}
        onRequestQuote={onRequestQuote}
      />
    </div>
  );
}
