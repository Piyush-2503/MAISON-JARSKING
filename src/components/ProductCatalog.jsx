import React, { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';
import { Search, SlidersHorizontal, X, RotateCcw } from 'lucide-react';

export const ProductCatalog = () => {
  const { searchQuery, setSearchQuery } = useCart();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCapacity, setSelectedCapacity] = useState('all');
  const [maxPrice, setMaxPrice] = useState(700);
  const [sortBy, setSortBy] = useState('featured');
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(query);
        const matchesCode = p.modelCode.toLowerCase().includes(query);
        const matchesCat = p.category.toLowerCase().includes(query);
        const matchesStyle = p.style.toLowerCase().includes(query);
        if (!matchesName && !matchesCode && !matchesCat && !matchesStyle) return false;
      }

      if (selectedCategory !== 'all' && p.category !== selectedCategory) return false;
      if (selectedCapacity !== 'all' && !p.capacities.includes(selectedCapacity)) return false;
      if (p.basePrice > maxPrice) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.basePrice - b.basePrice;
      if (sortBy === 'price-high') return b.basePrice - a.basePrice;
      if (sortBy === 'new') return b.id.localeCompare(a.id);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [searchQuery, selectedCategory, selectedCapacity, maxPrice, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedCapacity('all');
    setMaxPrice(700);
    setSearchQuery('');
    setSortBy('featured');
  };

  return (
    <section className="pt-28 pb-24 px-6 md:px-12 bg-[#241525] min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 border-b border-[#C9A96E]/15 pb-8 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B88C91] block mb-2 font-mono">
              B2B DISCOVERY PORTAL • MOQ 50
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F4EFE7]">
              Bottle <span className="italic gold-gradient-text">Catalog</span>
            </h1>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-grow md:w-72">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#D1C7BA]" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search models (e.g., JX-N005, Angel)..."
                className="w-full bg-[#1C0F1E] border border-[#C9A96E]/20 rounded-sm pl-10 pr-4 py-2.5 text-xs text-[#F4EFE7] placeholder-[#D1C7BA]/50 focus:outline-none focus:border-[#C9A96E]"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#D1C7BA] hover:text-[#F4EFE7]"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button 
              onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
              className="btn-outline-luxury px-4 py-2.5 text-xs rounded-sm flex items-center gap-2"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar border-b border-[#C9A96E]/10">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-sm text-xs tracking-wider uppercase font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#C9A96E] text-[#160B17] shadow-lg'
                  : 'glass-panel text-[#D1C7BA] hover:text-[#F4EFE7]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mb-8 text-xs text-[#D1C7BA]">
          <div>
            Showing <span className="text-[#C9A96E] font-semibold">{filteredProducts.length}</span> luxury bottle models
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-[#B88C91]">Sort By:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#1C0F1E] border border-[#C9A96E]/20 text-[#F4EFE7] rounded px-3 py-1.5 text-xs focus:outline-none focus:border-[#C9A96E]"
            >
              <option value="featured">Featured & Popular</option>
              <option value="new">New Arrivals</option>
              <option value="price-low">Base Price: Low → High</option>
              <option value="price-high">Base Price: High → Low</option>
            </select>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center glass-panel rounded-sm p-12 max-w-md mx-auto">
            <h3 className="font-serif text-2xl text-[#F4EFE7]">No bottles found</h3>
            <p className="text-xs text-[#D1C7BA] mt-2 font-light">
              No bottle models match your current filter selection.
            </p>
            <button 
              onClick={resetFilters}
              className="btn-gold-luxury px-6 py-2.5 text-xs rounded-sm mt-6 inline-flex items-center gap-2"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
