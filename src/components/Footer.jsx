import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ArrowRight, Sparkles, Send, Check } from 'lucide-react';

export const Footer = () => {
  const { setActiveView, setIsQuoteModalOpen } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#160B17] text-[#D1C7BA] border-t border-[#C9A96E]/20 pt-20 pb-12 px-6 md:px-12 text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP NEWSLETTER & BRAND STATEMENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#C9A96E]/15">
          
          {/* BRAND COLUMN */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[#C9A96E] to-[#B88C91] p-[1px]">
                <div className="w-full h-full bg-[#241525] flex items-center justify-center font-serif text-[#C9A96E] font-bold text-lg">
                  J
                </div>
              </div>
              <span className="font-serif tracking-[0.25em] text-lg font-medium text-[#F4EFE7]">
                MAISON JARSKING
              </span>
            </div>

            <p className="text-xs text-[#D1C7BA] font-light max-w-sm leading-relaxed">
              We create the physical foundation of your fragrance identity. Architectural extra flint glass bottles engineered for niche perfumery, private labels, and luxury cosmetic brands.
            </p>

            <div className="text-[10px] uppercase font-mono text-[#C9A96E] pt-2">
              Strict Minimum Order Quantity: 50 Bottles
            </div>
          </div>

          {/* NEWSLETTER COLUMN */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#B88C91] font-mono block">
              NEW RELEASE INSIGHTS & PACKAGING TRENDS
            </span>
            <h3 className="font-serif text-2xl text-[#F4EFE7]">
              Subscribe for new bottle releases & packaging inspiration
            </h3>

            <form onSubmit={handleSubscribe} className="flex items-center gap-2 max-w-md">
              <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email address..."
                className="flex-grow bg-[#241525] border border-[#C9A96E]/20 rounded-sm px-4 py-3 text-xs text-[#F4EFE7] placeholder-[#D1C7BA]/50 focus:outline-none focus:border-[#C9A96E]"
              />
              <button 
                type="submit"
                className="btn-gold-luxury px-6 py-3 text-xs rounded-sm flex items-center gap-2"
              >
                {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-3.5 h-3.5" />}
                <span>{subscribed ? 'Subscribed' : 'Subscribe'}</span>
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM LINKS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs">
          
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#F4EFE7] mb-4">Collections</h4>
            <ul className="space-y-2.5 text-[#D1C7BA] font-light">
              <li><button onClick={() => setActiveView('catalog')} className="hover:text-[#C9A96E] transition-colors">Minimalist Forms</button></li>
              <li><button onClick={() => setActiveView('catalog')} className="hover:text-[#C9A96E] transition-colors">Sculptural Silhouettes</button></li>
              <li><button onClick={() => setActiveView('catalog')} className="hover:text-[#C9A96E] transition-colors">Classic Heritage</button></li>
              <li><button onClick={() => setActiveView('catalog')} className="hover:text-[#C9A96E] transition-colors">Luxe & Statement</button></li>
              <li><button onClick={() => setActiveView('configurator')} className="hover:text-[#C9A96E] transition-colors">Bespoke Configurator</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#F4EFE7] mb-4">Services</h4>
            <ul className="space-y-2.5 text-[#D1C7BA] font-light">
              <li><button onClick={() => setIsQuoteModalOpen(true)} className="hover:text-[#C9A96E] transition-colors">Request Bulk Quote</button></li>
              <li><button onClick={() => setIsQuoteModalOpen(true)} className="hover:text-[#C9A96E] transition-colors">Physical Sample Orders</button></li>
              <li><button onClick={() => setActiveView('configurator')} className="hover:text-[#C9A96E] transition-colors">24K Hot Foil Stamping</button></li>
              <li><button onClick={() => setActiveView('configurator')} className="hover:text-[#C9A96E] transition-colors">Custom Mold Creation</button></li>
              <li><button onClick={() => setActiveView('admin')} className="hover:text-[#C9A96E] transition-colors">B2B Admin Dashboard</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#F4EFE7] mb-4">Quality & Standards</h4>
            <ul className="space-y-2.5 text-[#D1C7BA] font-light">
              <li><span>ISO 9001 Certification</span></li>
              <li><span>REACH & ROHS Compliant</span></li>
              <li><span>Extra Flint Glass Purity</span></li>
              <li><span>FEA 15 Anodized Collars</span></li>
              <li><span>Zero Evaporation Seals</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest text-[#F4EFE7] mb-4">Global Offices</h4>
            <ul className="space-y-2.5 text-[#D1C7BA] font-light">
              <li><span className="text-[#C9A96E]">Baiyun District, Guangzhou</span></li>
              <li><span>The One Tower, Sheik Zayed Rd, Dubai</span></li>
              <li><span>Tel: +86 20 86392569</span></li>
              <li><span>Email: info@jarsking.com</span></li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 border-t border-[#C9A96E]/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#B88C91] font-mono">
          <div>
            © 2026 MAISON JARSKING PACKAGING. All Rights Reserved. MOQ 50.
          </div>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <span className="hover:text-[#C9A96E] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#C9A96E] transition-colors cursor-pointer">Terms of Supply</span>
            <span className="hover:text-[#C9A96E] transition-colors cursor-pointer">B2B Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
