import React from 'react';
import { Search, X, Filter, RotateCcw, Check } from 'lucide-react';

export default function ProductFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  materials,
  selectedMaterial,
  onSelectMaterial,
  applications,
  selectedApplication,
  onSelectApplication,
  searchQuery,
  onSearchChange,
  onResetFilters,
  totalResults,
  isMobileDrawerOpen,
  setIsMobileDrawerOpen
}) {
  const hasActiveFilters =
    selectedCategory !== 'All' ||
    selectedMaterial !== 'All' ||
    selectedApplication !== 'All' ||
    searchQuery.trim() !== '';

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Active Filters Clear Button */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <span className="text-xs font-mono font-bold text-gray-500 uppercase tracking-wider">
            Active Filters
          </span>
          <button
            type="button"
            onClick={onResetFilters}
            className="text-xs font-semibold text-red-600 hover:text-red-700 flex items-center gap-1 font-mono active:scale-95"
          >
            <RotateCcw className="w-3 h-3" />
            Clear All
          </button>
        </div>
      )}

      {/* Category Filter */}
      <div>
        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-industrial-dark mb-2.5">
          Equipment Category
        </label>
        <div className="space-y-1">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`w-full text-left px-3 py-2 rounded-xs text-xs font-medium transition-all flex items-center justify-between ${isSelected
                    ? 'bg-industrial-dark text-white font-bold shadow-2xs'
                    : 'text-industrial-dark hover:bg-gray-100'
                  }`}
              >
                <span>{cat}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-industrial-steel" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Material Filter */}
      <div className="pt-4 border-t border-gray-200">
        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-industrial-dark mb-2.5">
          Structural Material
        </label>
        <div className="space-y-1">
          {materials.map((mat) => {
            const isSelected = selectedMaterial === mat;
            return (
              <button
                key={mat}
                type="button"
                onClick={() => onSelectMaterial(mat)}
                className={`w-full text-left px-3 py-1.5 rounded-xs text-xs font-medium transition-all flex items-center justify-between ${isSelected
                    ? 'bg-industrial-steel text-white font-bold'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <span>{mat}</span>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Application Filter */}
      <div className="pt-4 border-t border-gray-200">
        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-industrial-dark mb-2.5">
          Target Application
        </label>
        <div className="space-y-1">
          {applications.map((app) => {
            const isSelected = selectedApplication === app;
            return (
              <button
                key={app}
                type="button"
                onClick={() => onSelectApplication(app)}
                className={`w-full text-left px-3 py-1.5 rounded-xs text-xs font-medium transition-all flex items-center justify-between ${isSelected
                    ? 'bg-industrial-steel text-white font-bold'
                    : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <span>{app}</span>
                {isSelected && <Check className="w-3.5 h-3.5" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Search Input (Prompt Section 30) */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
          <Search className="w-4 h-4 text-industrial-steel" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search ladders, lifts, trolleys..."
          className="w-full pl-10 pr-9 py-2.5 bg-white border border-gray-300 rounded-sm text-xs text-industrial-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-industrial-steel focus:border-transparent transition-all"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => onSearchChange('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Mobile Horizontal Scrollable Category Chips (Prompt Section 29) */}
      <div className="lg:hidden">
        <div
          className="flex overflow-x-auto gap-2 py-1 -mx-4 px-4 no-scrollbar"
          style={{
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border active:scale-95 ${isSelected
                    ? 'bg-industrial-dark text-white border-industrial-dark shadow-xs'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop Sidebar Filter Container (Preserved Approved Layout) */}
      <div className="hidden lg:block bg-white border border-gray-200 rounded-sm p-5 shadow-subtle">
        <FilterContent />
      </div>

      {/* Mobile More Filters Toggle Button */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setIsMobileDrawerOpen(true)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-white border border-gray-300 rounded-sm text-xs font-mono font-bold uppercase tracking-wider text-industrial-dark active:bg-gray-50"
        >
          <span className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-industrial-steel" />
            More Filters ({totalResults})
          </span>
          {hasActiveFilters && (
            <span className="w-2 h-2 rounded-full bg-industrial-steel ring-2 ring-industrial-dark"></span>
          )}
        </button>
      </div>

      {/* Mobile Filter Modal Drawer */}
      {isMobileDrawerOpen && (
        <div className="fixed inset-0 z-[1050] lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileDrawerOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-white h-full shadow-2xl flex flex-col z-10 animate-fadeIn">
            <div className="px-5 py-4 border-b border-gray-200 flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-industrial-dark flex items-center gap-2">
                <Filter className="w-4 h-4 text-industrial-steel" />
                Filter Equipment
              </span>
              <button
                type="button"
                onClick={() => setIsMobileDrawerOpen(false)}
                className="p-1 text-gray-500 hover:text-industrial-dark"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 flex-1 overflow-y-auto">
              <FilterContent />
            </div>
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <button
                type="button"
                onClick={() => setIsMobileDrawerOpen(false)}
                className="w-full bg-industrial-dark text-white py-3 rounded-sm text-xs font-bold uppercase tracking-wider text-center active:scale-98"
              >
                Apply Filters ({totalResults} Results)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
