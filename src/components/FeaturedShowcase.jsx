import React from 'react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { ArrowUpRight, Eye, Heart, ShoppingBag } from 'lucide-react';

export const FeaturedShowcase = () => {
  const { navigateToProduct, setQuickViewProduct, toggleWishlist, isInWishlist, addToCart } = useCart();
  
  const featuredProducts = PRODUCTS.slice(0, 5);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#241525] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#C9A96E]/15 pb-8">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#B88C91] block mb-2 font-mono">
              CURATED SELECTION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#F4EFE7]">
              Selected <span className="italic gold-gradient-text">Forms</span>
            </h2>
          </div>
          <p className="text-xs text-[#D1C7BA] max-w-md font-light mt-4 md:mt-0 leading-relaxed">
            Form follows emotion. Each silhouette is engineered to provide an indelible physical presence for your fragrance concept.
          </p>
        </div>

        {/* ASYMMETRIC GALLERY GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* MAIN FEATURED ITEM */}
          <div className="lg:col-span-7 group relative bg-[#1C0F1E] rounded-sm overflow-hidden border border-[#C9A96E]/20 hover:border-[#C9A96E]/50 transition-all duration-500">
            <div className="aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden relative">
              <img 
                src={featuredProducts[0].images[0]} 
                alt={featuredProducts[0].name}
                className="w-full h-full object-cover object-center transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#160B17] via-[#160B17]/20 to-transparent" />
              
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="glass-panel px-3 py-1 text-[10px] uppercase tracking-widest text-[#C9A96E] border border-[#C9A96E]/30 rounded">
                  {featuredProducts[0].badge} • Model {featuredProducts[0].modelCode}
                </span>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); toggleWishlist(featuredProducts[0].id); }}
                  className={`p-2.5 rounded-full glass-panel transition-colors ${isInWishlist(featuredProducts[0].id) ? 'text-[#B88C91]' : 'text-[#F4EFE7] hover:text-[#C9A96E]'}`}
                >
                  <Heart className="w-4 h-4 fill-current" />
                </button>
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#B88C91] font-mono">
                    {featuredProducts[0].capacities.join(' • ')} • MOQ {featuredProducts[0].moq}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#F4EFE7] font-normal mt-1">
                    {featuredProducts[0].name}
                  </h3>
                  <p className="text-xs text-[#D1C7BA] mt-1 font-light max-w-sm line-clamp-1">
                    {featuredProducts[0].tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-[#C9A96E] font-serif">
                    From ₹{featuredProducts[0].basePrice} <span className="text-[10px] text-[#D1C7BA] font-sans font-normal">/ unit</span>
                  </span>

                  <button 
                    onClick={() => navigateToProduct(featuredProducts[0].id)}
                    className="btn-gold-luxury px-4 py-2.5 rounded-sm text-[10px] flex items-center gap-1"
                  >
                    <span>View Bottle</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SECONDARY FEATURED ITEMS */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-8">
            {featuredProducts.slice(1, 3).map((product) => (
              <div 
                key={product.id}
                className="group relative bg-[#1C0F1E] rounded-sm overflow-hidden border border-[#C9A96E]/20 hover:border-[#C9A96E]/50 transition-all duration-500 flex flex-col sm:flex-row"
              >
                <div className="sm:w-1/2 aspect-square sm:aspect-auto relative overflow-hidden bg-[#160B17]">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 glass-panel px-2 py-0.5 text-[9px] uppercase tracking-wider text-[#C9A96E] rounded">
                    {product.modelCode}
                  </span>
                </div>

                <div className="sm:w-1/2 p-6 flex flex-col justify-between text-left bg-[#1C0F1E]">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#B88C91] font-mono block">
                      {product.category} • MOQ {product.moq}
                    </span>
                    <h4 className="font-serif text-2xl text-[#F4EFE7] font-normal mt-1 group-hover:text-[#C9A96E] transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#D1C7BA] font-light mt-2 line-clamp-2">
                      {product.tagline}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#C9A96E]/10 flex items-center justify-between mt-4">
                    <div>
                      <span className="text-[10px] text-[#B88C91] block">Bulk Rate</span>
                      <span className="text-xs font-semibold text-[#C9A96E] font-serif">
                        ₹{product.basePrice} / unit
                      </span>
                    </div>

                    <button 
                      onClick={() => navigateToProduct(product.id)}
                      className="p-2 rounded glass-panel text-[#F4EFE7] hover:text-[#C9A96E] transition-colors"
                      title="Explore details"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
