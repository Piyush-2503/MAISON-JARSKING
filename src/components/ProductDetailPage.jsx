import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { ArrowLeft, CheckCircle2, ShoppingBag, ChevronRight } from 'lucide-react';

export const ProductDetailPage = () => {
  const { selectedProductId, setActiveView, addToCart, setIsQuoteModalOpen, calculateUnitPrice, MIN_ORDER_QTY } = useCart();
  
  const product = PRODUCTS.find(p => p.id === selectedProductId) || PRODUCTS[0];
  
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedCapacity, setSelectedCapacity] = useState(product.defaultCapacity || product.capacities[0]);
  const [quantity, setQuantity] = useState(50);
  
  const unitPrice = calculateUnitPrice(product, quantity);
  const totalPrice = unitPrice * quantity;

  const handleQuantityChange = (newQty) => {
    if (newQty < MIN_ORDER_QTY) {
      alert(`Minimum Order Quantity (MOQ) is strictly ${MIN_ORDER_QTY} bottles.`);
      return;
    }
    setQuantity(newQty);
  };

  return (
    <section className="pt-28 pb-24 px-6 md:px-12 bg-[#241525] min-h-screen text-left">
      <div className="max-w-7xl mx-auto">
        
        <button 
          onClick={() => setActiveView('catalog')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D1C7BA] hover:text-[#C9A96E] transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Catalog</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[3/4] sm:aspect-[4/3] w-full rounded-sm overflow-hidden bg-[#160B17] border border-[#C9A96E]/20">
              <img 
                src={selectedImage} 
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160B17]/60 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 glass-panel px-3 py-1 text-[10px] uppercase font-mono tracking-widest text-[#C9A96E] rounded">
                MODEL: {product.modelCode}
              </div>
            </div>

            <div className="flex items-center gap-4 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-20 aspect-square rounded-sm overflow-hidden border transition-all ${
                    selectedImage === img ? 'border-[#C9A96E] ring-2 ring-[#C9A96E]/30' : 'border-[#C9A96E]/20 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Angle ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="pt-8 border-t border-[#C9A96E]/15">
              <h3 className="font-serif text-2xl text-[#F4EFE7] mb-4">
                Technical <span className="italic gold-gradient-text">Specifications</span>
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div className="glass-panel p-3 rounded">
                  <span className="text-[10px] uppercase text-[#B88C91] block font-mono">Neck Finish</span>
                  <span className="text-[#F4EFE7] font-medium">{product.specs.neckFinish}</span>
                </div>
                <div className="glass-panel p-3 rounded">
                  <span className="text-[10px] uppercase text-[#B88C91] block font-mono">Height</span>
                  <span className="text-[#F4EFE7] font-medium">{product.specs.height}</span>
                </div>
                <div className="glass-panel p-3 rounded">
                  <span className="text-[10px] uppercase text-[#B88C91] block font-mono">Body Width</span>
                  <span className="text-[#F4EFE7] font-medium">{product.specs.width}</span>
                </div>
                <div className="glass-panel p-3 rounded">
                  <span className="text-[10px] uppercase text-[#B88C91] block font-mono">Glass Weight</span>
                  <span className="text-[#F4EFE7] font-medium">{product.specs.weight}</span>
                </div>
                <div className="glass-panel p-3 rounded">
                  <span className="text-[10px] uppercase text-[#B88C91] block font-mono">Overflow Vol.</span>
                  <span className="text-[#F4EFE7] font-medium">{product.specs.overflowCapacity}</span>
                </div>
                <div className="glass-panel p-3 rounded">
                  <span className="text-[10px] uppercase text-[#B88C91] block font-mono">Glass Material</span>
                  <span className="text-[#F4EFE7] font-medium">Extra Flint</span>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B88C91] font-mono block mb-1">
                {product.style} • {product.category}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl font-light text-[#F4EFE7]">
                {product.name}
              </h1>
              <p className="text-xs text-[#D1C7BA] font-light mt-2 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="glass-panel p-5 rounded-sm border border-[#C9A96E]/20 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#C9A96E] pb-2 border-b border-[#C9A96E]/15">
                <span>Quantity Tier</span>
                <span>Price per Unit</span>
              </div>

              {product.tiers.map((tier, idx) => {
                const isActive = quantity >= tier.min && (tier.max === Infinity || quantity <= tier.max);
                return (
                  <div 
                    key={idx}
                    className={`flex items-center justify-between py-2 px-3 rounded text-xs transition-colors ${
                      isActive ? 'bg-[#C9A96E]/20 border border-[#C9A96E]/40 text-[#F4EFE7]' : 'text-[#D1C7BA]'
                    }`}
                  >
                    <span>{tier.min}{tier.max === Infinity ? '+' : `–${tier.max}`} bottles</span>
                    <span className="font-serif text-sm font-semibold text-[#C9A96E]">
                      ₹{tier.price} <span className="text-[10px] font-sans font-normal text-[#D1C7BA]">/ bottle</span>
                    </span>
                  </div>
                );
              })}
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-widest text-[#B88C91] font-mono block mb-2">
                Select Capacity:
              </label>
              <div className="flex items-center gap-3">
                {product.capacities.map(cap => (
                  <button
                    key={cap}
                    onClick={() => setSelectedCapacity(cap)}
                    className={`px-4 py-2.5 rounded-sm text-xs font-mono tracking-wider transition-all ${
                      selectedCapacity === cap
                        ? 'bg-[#C9A96E] text-[#160B17] font-bold shadow-md'
                        : 'glass-panel text-[#D1C7BA] hover:text-[#F4EFE7]'
                    }`}
                  >
                    {cap}
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-panel p-5 rounded-sm border border-[#C9A96E]/20 space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-xs uppercase tracking-widest text-[#F4EFE7] font-medium">
                  Order Quantity:
                </label>
                <span className="text-[10px] text-[#C9A96E] font-mono">
                  Minimum Order (MOQ): 50
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#C9A96E]/30 rounded bg-[#160B17]">
                  <button 
                    onClick={() => handleQuantityChange(quantity - 10)}
                    className="px-3 py-2 text-xs text-[#D1C7BA] hover:text-[#C9A96E]"
                  >
                    -10
                  </button>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 50)}
                    className="w-20 bg-transparent text-center text-sm font-bold text-[#F4EFE7] focus:outline-none"
                    min={50}
                  />
                  <button 
                    onClick={() => handleQuantityChange(quantity + 10)}
                    className="px-3 py-2 text-xs text-[#D1C7BA] hover:text-[#C9A96E]"
                  >
                    +10
                  </button>
                </div>

                <div className="text-right flex-grow">
                  <span className="text-[10px] uppercase text-[#B88C91] block">Estimated Subtotal</span>
                  <span className="font-serif text-2xl font-semibold text-[#C9A96E]">
                    ₹{totalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => addToCart(product, quantity, selectedCapacity)}
                className="w-full btn-gold-luxury py-4 text-xs rounded-sm flex items-center justify-center gap-2 shadow-xl"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Quote Basket ({quantity} units)</span>
              </button>

              <button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full btn-outline-luxury py-3.5 text-xs rounded-sm flex items-center justify-center gap-2"
              >
                <span>Request Custom Branding Quotation</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-4 border-t border-[#C9A96E]/10 grid grid-cols-2 gap-4 text-[11px] text-[#D1C7BA]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A96E]" />
                <span>ISO9001 Certified Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C9A96E]" />
                <span>Bespoke Logo Printing</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
