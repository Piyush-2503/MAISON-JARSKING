import React from 'react';
import { useCart } from '../context/CartContext';
import { Sparkles, ArrowRight, ShieldCheck, Layers, Award } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export const HeroSection = () => {
  const { setActiveView, navigateToProduct, setIsQuoteModalOpen } = useCart();
  const heroProduct = PRODUCTS[0]; // Angel Wings JX-N005

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 px-6 md:px-12 flex items-center justify-center overflow-hidden bg-radial from-[#2C1A2E] via-[#241525] to-[#160B17]">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#C9A96E]/15 via-[#B88C91]/10 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2C1A2E] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT EDITORIAL COPY */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-8">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#C9A96E]/30 text-[#C9A96E] text-[10px] uppercase tracking-[0.25em] font-medium">
            <Sparkles className="w-3 h-3 animate-spin" style={{ animationDuration: '8s' }} />
            <span>B2B Empty Fragrance Packaging • Direct Manufacture</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.92] text-[#F4EFE7] tracking-tight">
            The bottle is <br />
            <span className="italic font-normal gold-gradient-text">where the story</span> <br />
            begins.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#D1C7BA] max-w-xl font-light leading-relaxed">
            Architectural empty perfume bottles engineered for brands that refuse to look ordinary. Delivered in bulk with bespoke finishes, precision enclosures, and zero MOQ friction.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button 
              onClick={() => setActiveView('catalog')}
              className="btn-gold-luxury px-8 py-4 text-xs rounded-sm flex items-center gap-3 shadow-xl"
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

          {/* Highlights Footer Pill */}
          <div className="pt-6 border-t border-[#C9A96E]/15 grid grid-cols-2 sm:grid-cols-4 gap-6 text-[#D1C7BA] text-xs">
            <div>
              <span className="block text-[#C9A96E] font-serif text-lg font-bold">MOQ 50</span>
              <span className="text-[11px] text-[#B88C91]">Low Entry Threshold</span>
            </div>
            <div>
              <span className="block text-[#C9A96E] font-serif text-lg font-bold">Heavy Glass</span>
              <span className="text-[11px] text-[#B88C91]">Extra Flint Quality</span>
            </div>
            <div>
              <span className="block text-[#C9A96E] font-serif text-lg font-bold">4-Tier Pricing</span>
              <span className="text-[11px] text-[#B88C91]">Up to 25% Savings</span>
            </div>
            <div>
              <span className="block text-[#C9A96E] font-serif text-lg font-bold">Custom Finishes</span>
              <span className="text-[11px] text-[#B88C91]">Hot Stamping & Coating</span>
            </div>
          </div>

        </div>

        {/* RIGHT HERO PRODUCT SHOWCASE */}
        <div className="lg:col-span-5 relative flex justify-center">
          
          {/* Main Hero Card */}
          <div className="relative w-full max-w-md glass-panel-gold rounded-sm p-4 overflow-hidden group cursor-pointer"
               onClick={() => navigateToProduct(heroProduct.id)}>
            
            {/* Background Image with Ambient Glow */}
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-[#160B17]">
              <img 
                src={heroProduct.images[0]} 
                alt={heroProduct.name}
                className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F1E] via-transparent to-transparent opacity-80" />

              {/* Floating Badge */}
              <div className="absolute top-4 left-4 glass-panel px-3 py-1 text-[10px] uppercase tracking-widest text-[#C9A96E] border border-[#C9A96E]/30 rounded">
                Model: {heroProduct.modelCode}
              </div>

              {/* Product Info Overlays */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-left">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#B88C91] block">
                    {heroProduct.style}
                  </span>
                  <h3 className="font-serif text-3xl font-normal text-[#F4EFE7]">
                    {heroProduct.name}
                  </h3>
                  <p className="text-xs text-[#D1C7BA] mt-1">
                    Starting from <span className="text-[#C9A96E] font-semibold">₹{heroProduct.basePrice}</span> / unit
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full glass-panel border border-[#C9A96E]/40 flex items-center justify-center text-[#C9A96E] group-hover:bg-[#C9A96E] group-hover:text-[#160B17] transition-all">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Floating Mini Spec Pill */}
            <div className="absolute -bottom-2 right-4 glass-panel-gold px-4 py-2.5 rounded-sm border border-[#C9A96E]/40 flex items-center gap-3 text-left">
              <Award className="w-5 h-5 text-[#C9A96E]" />
              <div>
                <div className="text-[10px] uppercase tracking-widest text-[#F4EFE7]">Sculpted Wings Crown</div>
                <div className="text-[9px] text-[#B88C91]">FEA 15 Anodized Neck • 50 ML</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
