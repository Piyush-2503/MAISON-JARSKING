import React from 'react';
import { useCart } from '../context/CartContext';
import { Heart, Eye, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export const ProductCard = ({ product }) => {
  const { navigateToProduct, setQuickViewProduct, toggleWishlist, isInWishlist } = useCart();

  return (
    <div className="group relative bg-[#1C0F1E] rounded-sm overflow-hidden border border-[#C9A96E]/20 hover:border-[#C9A96E]/50 transition-all duration-500 flex flex-col justify-between text-left gold-border-glow">
      
      {/* TOP IMAGE SECTION */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#160B17] cursor-pointer"
           onClick={() => navigateToProduct(product.id)}>
        
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F1E] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* TOP BADGES */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="glass-panel px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-widest text-[#C9A96E] rounded">
            {product.modelCode}
          </span>

          <button 
            onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
            className={`p-2 rounded-full glass-panel transition-colors ${isInWishlist(product.id) ? 'text-[#B88C91]' : 'text-[#F4EFE7] hover:text-[#C9A96E]'}`}
            title="Save to Wishlist"
          >
            <Heart className="w-3.5 h-3.5 fill-current" />
          </button>
        </div>

        {/* QUICK VIEW HOVER OVERLAY BUTTON */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#160B17]/40 backdrop-blur-[2px]">
          <button 
            onClick={(e) => { e.stopPropagation(); setQuickViewProduct(product); }}
            className="btn-gold-luxury px-4 py-2 text-[10px] rounded-sm flex items-center gap-1.5 shadow-2xl"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>

        {/* BOTTOM CAPACITY & MOQ TAGS */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] text-[#D1C7BA] z-10">
          <span className="glass-panel px-2 py-0.5 rounded text-[#B88C91] font-mono">
            {product.capacities.join(' • ')}
          </span>
          <span className="glass-panel px-2 py-0.5 rounded text-[#C9A96E] font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-[#C9A96E]" />
            MOQ {product.moq}
          </span>
        </div>
      </div>

      {/* BOTTOM CARD INFORMATION */}
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <span className="text-[9px] uppercase tracking-widest text-[#B88C91] font-mono block">
            {product.style}
          </span>
          <h3 
            onClick={() => navigateToProduct(product.id)}
            className="font-serif text-2xl text-[#F4EFE7] font-normal mt-1 hover:text-[#C9A96E] transition-colors cursor-pointer"
          >
            {product.name}
          </h3>
          <p className="text-xs text-[#D1C7BA] font-light mt-1 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        <div className="pt-4 border-t border-[#C9A96E]/10 flex items-end justify-between mt-4">
          <div>
            <span className="text-[10px] text-[#B88C91] block">Bulk Base Rate</span>
            <span className="text-sm font-semibold text-[#C9A96E] font-serif">
              From ₹{product.basePrice} <span className="text-[10px] text-[#D1C7BA] font-sans font-normal">/ unit</span>
            </span>
          </div>

          <button 
            onClick={() => navigateToProduct(product.id)}
            className="btn-outline-luxury px-3 py-1.5 text-[10px] rounded flex items-center gap-1"
          >
            <span>Details</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>

    </div>
  );
};
