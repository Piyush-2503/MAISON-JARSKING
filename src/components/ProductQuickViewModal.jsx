import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { X, ShoppingBag } from 'lucide-react';

export const ProductQuickViewModal = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, navigateToProduct } = useCart();
  const [quantity, setQuantity] = useState(50);

  if (!quickViewProduct) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#160B17]/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl glass-panel-gold rounded-sm overflow-hidden p-6 md:p-8 animate-in fade-in zoom-in duration-300 text-left border border-[#C9A96E]/30">
        
        <button 
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2 text-[#D1C7BA] hover:text-[#C9A96E] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <div className="aspect-[3/4] w-full rounded-sm overflow-hidden bg-[#160B17] relative">
            <img 
              src={quickViewProduct.images[0]} 
              alt={quickViewProduct.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 glass-panel px-2.5 py-1 text-[9px] font-mono text-[#C9A96E]">
              {quickViewProduct.modelCode}
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <span className="text-[9px] uppercase tracking-widest text-[#B88C91] font-mono block">
                {quickViewProduct.style}
              </span>
              <h3 className="font-serif text-3xl text-[#F4EFE7]">
                {quickViewProduct.name}
              </h3>
              <p className="text-xs text-[#D1C7BA] font-light mt-1">
                {quickViewProduct.tagline}
              </p>
            </div>

            <div className="py-3 border-y border-[#C9A96E]/15 flex items-center justify-between text-xs">
              <div>
                <span className="text-[10px] text-[#B88C91] block">Base Rate</span>
                <span className="font-serif text-xl text-[#C9A96E] font-semibold">
                  ₹{quickViewProduct.basePrice} <span className="text-[10px] font-sans font-normal text-[#D1C7BA]">/ unit</span>
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#B88C91] block">Capacity Options</span>
                <span className="text-[#F4EFE7] font-mono text-xs">
                  {quickViewProduct.capacities.join(', ')}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#D1C7BA]">
                <span>Order Quantity:</span>
                <span className="text-[#C9A96E] font-mono text-[10px]">MOQ 50</span>
              </div>

              <div className="flex items-center gap-3">
                <input 
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(50, parseInt(e.target.value) || 50))}
                  className="w-24 bg-[#160B17] border border-[#C9A96E]/30 rounded p-2 text-center text-xs text-[#F4EFE7] font-bold"
                  min={50}
                />
                <button 
                  onClick={() => {
                    addToCart(quickViewProduct, quantity);
                    setQuickViewProduct(null);
                  }}
                  className="flex-grow btn-gold-luxury py-2.5 text-xs rounded-sm flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add to Quote Basket</span>
                </button>
              </div>
            </div>

            <button 
              onClick={() => {
                navigateToProduct(quickViewProduct.id);
                setQuickViewProduct(null);
              }}
              className="w-full text-center text-xs text-[#C9A96E] hover:underline pt-2 block font-medium"
            >
              View Full Specs Page & Tier Matrix →
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};
