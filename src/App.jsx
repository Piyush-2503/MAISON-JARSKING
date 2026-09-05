import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { Marquee } from './components/Marquee';
import { FeaturedShowcase } from './components/FeaturedShowcase';
import { CategoryShowcase } from './components/CategoryShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailPage } from './components/ProductDetailPage';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { InteractiveConfigurator } from './components/InteractiveConfigurator';
import { BulkQuoteModal } from './components/BulkQuoteModal';
import { CartDrawer } from './components/CartDrawer';
import { BuiltForBrands } from './components/BuiltForBrands';
import { MaterialQuality } from './components/MaterialQuality';
import { ProcessSection } from './components/ProcessSection';
import { Testimonials } from './components/Testimonials';
import { AdminDashboard } from './components/AdminDashboard';
import { Footer } from './components/Footer';
import { ArrowRight, Search, X, Sparkles, Send } from 'lucide-react';

const MainContent = () => {
  const { 
    activeView, 
    setActiveView, 
    isSearchOpen, 
    setIsSearchOpen, 
    searchQuery, 
    setSearchQuery,
    setIsQuoteModalOpen
  } = useCart();

  return (
    <div className="min-h-screen bg-[#241525] text-[#F4EFE7] flex flex-col font-sans selection:bg-[#C9A96E] selection:text-[#241525]">
      
      {/* NAVBAR */}
      <Navbar />

      {/* DYNAMIC VIEW ROUTER */}
      <main className="flex-grow">
        {activeView === 'home' && (
          <>
            <HeroSection />
            <Marquee />
            <FeaturedShowcase />
            <CategoryShowcase />
            <BuiltForBrands />
            <MaterialQuality />
            <ProcessSection />
            <Testimonials />

            {/* FINAL DRAMATIC CTA SECTION */}
            <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#241525] to-[#160B17] border-t border-[#C9A96E]/20 text-center relative overflow-hidden">
              <div className="max-w-4xl mx-auto space-y-6 relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C9A96E]">
                  BEGIN YOUR PACKAGING JOURNEY
                </span>
                <h2 className="font-serif text-5xl sm:text-6xl font-light text-[#F4EFE7]">
                  Ready to give your fragrance <br />
                  <span className="italic gold-gradient-text">a distinctive form?</span>
                </h2>
                <p className="text-sm text-[#D1C7BA] font-light max-w-xl mx-auto leading-relaxed">
                  Explore our curated extra flint glass collection or speak directly with our packaging team regarding custom mold engineering and tiered volume quotations.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <button 
                    onClick={() => setActiveView('catalog')}
                    className="btn-gold-luxury px-8 py-4 text-xs rounded-sm flex items-center gap-2"
                  >
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button 
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="btn-outline-luxury px-8 py-4 text-xs rounded-sm"
                  >
                    Request Bulk Quote
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {activeView === 'catalog' && <ProductCatalog />}
        {activeView === 'detail' && <ProductDetailPage />}
        {activeView === 'configurator' && <InteractiveConfigurator />}
        {activeView === 'admin' && <AdminDashboard />}
      </main>

      {/* FOOTER */}
      <Footer />

      {/* GLOBAL DRAWERS & MODALS */}
      <ProductQuickViewModal />
      <BulkQuoteModal />
      <CartDrawer />

      {/* GLOBAL SEARCH OVERLAY */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-[#160B17]/90 backdrop-blur-md flex items-start justify-center pt-32 px-6">
          <div className="w-full max-w-2xl glass-panel-gold rounded-sm p-6 border border-[#C9A96E]/30 relative text-left">
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 text-[#D1C7BA] hover:text-[#C9A96E]"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-serif text-xl text-[#F4EFE7] mb-4">Search Fragrance Bottle Models</h3>
            
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#C9A96E]" />
              <input 
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type model code (e.g. JX-N005, Angel Wings, Brilliant)..."
                className="w-full bg-[#160B17] border border-[#C9A96E]/30 rounded p-3 pl-10 text-sm text-[#F4EFE7] focus:outline-none focus:border-[#C9A96E]"
              />
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-[#D1C7BA]">
              <span>Press enter to view matching results in catalog</span>
              <button 
                onClick={() => {
                  setIsSearchOpen(false);
                  setActiveView('catalog');
                }}
                className="text-[#C9A96E] hover:underline font-mono"
              >
                Go to Catalog →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE STICKY BOTTOM QUOTE CTA BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#160B17]/95 border-t border-[#C9A96E]/30 p-3 flex items-center justify-between px-6 backdrop-blur-md">
        <div>
          <span className="text-[9px] uppercase font-mono text-[#B88C91] block">B2B Bulk Orders</span>
          <span className="text-xs font-bold text-[#C9A96E] font-serif">MOQ 50 Bottles</span>
        </div>
        <button 
          onClick={() => setIsQuoteModalOpen(true)}
          className="btn-gold-luxury px-5 py-2.5 text-xs rounded-sm flex items-center gap-1.5"
        >
          <span>Request Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <MainContent />
    </CartProvider>
  );
}
