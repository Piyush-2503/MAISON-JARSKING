import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CONFIGURATOR_OPTIONS, PRODUCTS } from '../data/products';
import { Sparkles, ShoppingBag } from 'lucide-react';

export const InteractiveConfigurator = () => {
  const { addToCart, setIsQuoteModalOpen } = useCart();
  
  const baseBottle = PRODUCTS[0];

  const [selectedCapacity, setSelectedCapacity] = useState(CONFIGURATOR_OPTIONS.capacities[1]);
  const [selectedFinish, setSelectedFinish] = useState(CONFIGURATOR_OPTIONS.finishes[0]);
  const [selectedCap, setSelectedCap] = useState(CONFIGURATOR_OPTIONS.caps[0]);
  const [selectedBranding, setSelectedBranding] = useState(CONFIGURATOR_OPTIONS.branding[1]);
  const [selectedSpray, setSelectedSpray] = useState(CONFIGURATOR_OPTIONS.sprays[1]);
  const [quantity, setQuantity] = useState(100);

  const baseRate = 480;
  const unitPrice = Math.round(
    (baseRate * selectedCapacity.multiplier) + 
    selectedFinish.add + 
    selectedCap.add + 
    selectedBranding.add + 
    selectedSpray.add
  );
  
  const subtotal = unitPrice * quantity;

  const handleAddCustomToCart = () => {
    const customConfiguredProduct = {
      ...baseBottle,
      name: `Custom Atelier Bottle (${selectedCapacity.label})`,
      tagline: `${selectedFinish.label} • ${selectedCap.label}`,
      basePrice: unitPrice,
      tiers: [
        { min: 50, max: 99, price: unitPrice },
        { min: 100, max: 249, price: Math.round(unitPrice * 0.93) },
        { min: 250, max: 499, price: Math.round(unitPrice * 0.87) },
        { min: 500, max: Infinity, price: Math.round(unitPrice * 0.80) }
      ]
    };

    addToCart(
      customConfiguredProduct, 
      quantity, 
      selectedCapacity.label, 
      {
        finish: selectedFinish.label,
        cap: selectedCap.label,
        branding: selectedBranding.label,
        spray: selectedSpray.label
      }
    );
  };

  return (
    <section className="pt-28 pb-24 px-6 md:px-12 bg-[#1C0F1E] min-h-screen text-left">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 border-b border-[#C9A96E]/15 pb-8 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B88C91] block mb-2 font-mono flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A96E]" />
              BESPOKE PACKAGING STUDIO
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F4EFE7]">
              Interactive <span className="italic gold-gradient-text">Configurator</span>
            </h1>
          </div>
          <p className="text-xs text-[#D1C7BA] max-w-md font-light mt-4 md:mt-0 leading-relaxed">
            Customize bottle capacities, surface coatings, cap alloys, and branding techniques. See real-time bulk pricing adjustments as options are selected.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-6 space-y-6 sticky top-28">
            <div className="glass-panel-gold rounded-sm p-6 text-center relative overflow-hidden border border-[#C9A96E]/30">
              
              <div className="aspect-[4/3] w-full rounded bg-[#160B17] relative flex items-center justify-center overflow-hidden">
                <img 
                  src={selectedFinish.image} 
                  alt={selectedFinish.label}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#160B17] via-transparent to-transparent opacity-70" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] text-[#F4EFE7] z-10 font-mono">
                  <span className="glass-panel px-2.5 py-1 rounded border border-[#C9A96E]/30">
                    Cap: {selectedCap.label}
                  </span>
                  <span className="glass-panel px-2.5 py-1 rounded border border-[#C9A96E]/30 text-[#C9A96E]">
                    Branding: {selectedBranding.label}
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 rounded glass-panel flex flex-col sm:flex-row items-center justify-between gap-4 text-left border border-[#C9A96E]/20">
                <div>
                  <span className="text-[10px] uppercase text-[#B88C91] font-mono block">Estimated Unit Price</span>
                  <span className="font-serif text-3xl font-semibold text-[#C9A96E]">
                    ₹{unitPrice} <span className="text-xs font-sans font-normal text-[#D1C7BA]">/ bottle</span>
                  </span>
                </div>
                <div className="text-right sm:text-right">
                  <span className="text-[10px] uppercase text-[#B88C91] font-mono block">Est. Subtotal ({quantity} units)</span>
                  <span className="font-serif text-2xl font-normal text-[#F4EFE7]">
                    ₹{subtotal.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                <button 
                  onClick={handleAddCustomToCart}
                  className="btn-gold-luxury py-3 text-xs rounded-sm flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add Config to Quote</span>
                </button>

                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="btn-outline-luxury py-3 text-xs rounded-sm"
                >
                  Request Official Quote
                </button>
              </div>

            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-[#C9A96E] block mb-3">
                01. Bottle Capacity
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {CONFIGURATOR_OPTIONS.capacities.map(cap => (
                  <button
                    key={cap.id}
                    onClick={() => setSelectedCapacity(cap)}
                    className={`p-3 rounded-sm border text-left transition-all ${
                      selectedCapacity.id === cap.id
                        ? 'border-[#C9A96E] bg-[#C9A96E]/15 text-[#F4EFE7]'
                        : 'border-[#C9A96E]/20 bg-[#160B17] text-[#D1C7BA] hover:border-[#C9A96E]/50'
                    }`}
                  >
                    <span className="font-serif text-lg font-bold block">{cap.label}</span>
                    <span className="text-[9px] text-[#B88C91] block mt-0.5">{cap.note}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-[#C9A96E] block mb-3">
                02. Glass Surface Finish & Tint
              </label>
              <div className="space-y-2">
                {CONFIGURATOR_OPTIONS.finishes.map(finish => (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinish(finish)}
                    className={`w-full p-3 rounded-sm border flex items-center justify-between transition-all ${
                      selectedFinish.id === finish.id
                        ? 'border-[#C9A96E] bg-[#C9A96E]/15 text-[#F4EFE7]'
                        : 'border-[#C9A96E]/20 bg-[#160B17] text-[#D1C7BA] hover:border-[#C9A96E]/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-4 h-4 rounded-full border border-white/20"
                        style={{ backgroundColor: finish.color }}
                      />
                      <span className="text-xs font-medium">{finish.label}</span>
                    </div>
                    <span className="text-[11px] font-mono text-[#C9A96E]">
                      {finish.add === 0 ? 'Included' : `+₹${finish.add}/unit`}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-[#C9A96E] block mb-3">
                03. Enclosure Cap Alloy & Wood
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CONFIGURATOR_OPTIONS.caps.map(cap => (
                  <button
                    key={cap.id}
                    onClick={() => setSelectedCap(cap)}
                    className={`p-3 rounded-sm border text-left transition-all ${
                      selectedCap.id === cap.id
                        ? 'border-[#C9A96E] bg-[#C9A96E]/15 text-[#F4EFE7]'
                        : 'border-[#C9A96E]/20 bg-[#160B17] text-[#D1C7BA] hover:border-[#C9A96E]/50'
                    }`}
                  >
                    <span className="text-xs font-semibold block">{cap.label}</span>
                    <span className="text-[10px] text-[#B88C91] block">{cap.material}</span>
                    <span className="text-[10px] font-mono text-[#C9A96E] mt-1 block">+₹{cap.add}/unit</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-[#C9A96E] block mb-3">
                04. Brand Logo Application
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CONFIGURATOR_OPTIONS.branding.map(b => (
                  <button
                    key={b.id}
                    onClick={() => setSelectedBranding(b)}
                    className={`p-3 rounded-sm border text-left transition-all ${
                      selectedBranding.id === b.id
                        ? 'border-[#C9A96E] bg-[#C9A96E]/15 text-[#F4EFE7]'
                        : 'border-[#C9A96E]/20 bg-[#160B17] text-[#D1C7BA] hover:border-[#C9A96E]/50'
                    }`}
                  >
                    <span className="text-xs font-semibold block">{b.label}</span>
                    <span className="text-[10px] text-[#B88C91] block">{b.technique}</span>
                    <span className="text-[10px] font-mono text-[#C9A96E] mt-1 block">+₹{b.add}/unit</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded glass-panel border border-[#C9A96E]/20 space-y-2">
              <div className="flex items-center justify-between text-xs text-[#F4EFE7]">
                <span>Set Bulk Batch Quantity:</span>
                <span className="text-[#C9A96E] font-bold font-mono">{quantity} Bottles</span>
              </div>
              <input 
                type="range" 
                min={50} 
                max={2000} 
                step={50}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full accent-[#C9A96E]"
              />
              <div className="flex justify-between text-[9px] text-[#B88C91] font-mono">
                <span>MOQ 50</span>
                <span>250</span>
                <span>500</span>
                <span>1000+</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
