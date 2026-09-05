import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { Search, Heart, ShoppingBag, LayoutDashboard, ChevronRight, Server } from 'lucide-react';

export const Navbar = () => {
  const { 
    activeView, 
    setActiveView, 
    cartTotalItems, 
    cartItems, 
    wishlist, 
    setIsCartOpen, 
    setIsQuoteModalOpen, 
    setIsSearchOpen,
    isBackendConnected
  } = useCart();
  
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-[#1C0F1E]/85 backdrop-blur-md border-b border-[#C9A96E]/20 shadow-2xl' 
        : 'py-6 bg-gradient-to-b from-[#1C0F1E]/90 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO & BRAND */}
        <button 
          onClick={() => setActiveView('home')} 
          className="flex items-center gap-3 group text-left"
        >
          <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#C9A96E] to-[#B88C91] p-[1px] transition-transform duration-500 group-hover:scale-105">
            <div className="w-full h-full bg-[#241525] flex items-center justify-center font-serif text-[#C9A96E] font-bold text-xl tracking-wider">
              J
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif tracking-[0.25em] text-lg font-medium text-[#F4EFE7] group-hover:text-[#C9A96E] transition-colors">
                MAISON JARSKING
              </span>
              {isBackendConnected && (
                <span className="flex items-center gap-1 text-[9px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-1.5 py-0.2 rounded" title="MERN Backend API Connected">
                  <Server className="w-2.5 h-2.5" />
                  MERN Active
                </span>
              )}
            </div>
            <span className="text-[9px] tracking-[0.3em] uppercase text-[#B88C91] font-mono">
              Fragrance Atelier • MOQ 50
            </span>
          </div>
        </button>

        {/* NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-8 text-xs uppercase tracking-[0.2em] font-medium text-[#D1C7BA]">
          <button 
            onClick={() => setActiveView('home')}
            className={`transition-colors py-1 relative ${activeView === 'home' ? 'text-[#C9A96E]' : 'hover:text-[#F4EFE7]'}`}
          >
            Home
            {activeView === 'home' && <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C9A96E]" />}
          </button>
          
          <button 
            onClick={() => setActiveView('catalog')}
            className={`transition-colors py-1 relative ${activeView === 'catalog' ? 'text-[#C9A96E]' : 'hover:text-[#F4EFE7]'}`}
          >
            Bottle Catalog
            {activeView === 'catalog' && <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C9A96E]" />}
          </button>

          <button 
            onClick={() => setActiveView('configurator')}
            className={`transition-colors py-1 relative flex items-center gap-1.5 ${activeView === 'configurator' ? 'text-[#C9A96E]' : 'hover:text-[#F4EFE7]'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A96E] animate-ping" />
            Configurator
            {activeView === 'configurator' && <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C9A96E]" />}
          </button>

          <button 
            onClick={() => {
              setActiveView('home');
              setTimeout(() => {
                const el = document.getElementById('craftsmanship-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="hover:text-[#F4EFE7] transition-colors py-1"
          >
            Craftsmanship
          </button>

          <button 
            onClick={() => setActiveView('admin')}
            className={`flex items-center gap-1 text-[#B88C91] hover:text-[#C9A96E] transition-colors py-1 px-2.5 rounded bg-[#151515]/40 border border-[#B88C91]/30 ${activeView === 'admin' ? 'border-[#C9A96E] text-[#C9A96E]' : ''}`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            B2B Admin
          </button>
        </nav>

        {/* RIGHT ACTION BUTTONS */}
        <div className="flex items-center gap-4">
          
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="p-2 text-[#D1C7BA] hover:text-[#C9A96E] transition-colors"
            title="Search Bottle Models"
          >
            <Search className="w-4 h-4" />
          </button>

          <button 
            onClick={() => setActiveView('catalog')}
            className="p-2 text-[#D1C7BA] hover:text-[#C9A96E] transition-colors relative"
            title="Saved Bottles"
          >
            <Heart className="w-4 h-4" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#B88C91] text-[#160B17] text-[9px] font-bold rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 text-[#F4EFE7] hover:text-[#C9A96E] transition-colors relative flex items-center gap-2 group"
          >
            <div className="relative">
              <ShoppingBag className="w-4 h-4" />
              {cartItems.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-[#C9A96E] text-[#160B17] text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </div>
            <span className="hidden sm:inline text-[10px] uppercase tracking-widest text-[#D1C7BA] group-hover:text-[#C9A96E]">
              Quote Basket
            </span>
          </button>

          <button 
            onClick={() => setIsQuoteModalOpen(true)}
            className="btn-gold-luxury px-5 py-2.5 text-[11px] rounded-sm flex items-center gap-2"
          >
            <span>Request Quote</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </header>
  );
};
