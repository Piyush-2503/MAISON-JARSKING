import React from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2, ShoppingBag, ArrowRight, AlertCircle } from 'lucide-react';

export const CartDrawer = () => {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    cartSubtotal, 
    setIsQuoteModalOpen, 
    MIN_ORDER_QTY 
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#160B17]/80 backdrop-blur-md">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#1C0F1E] border-l border-[#C9A96E]/30 text-left shadow-2xl flex flex-col justify-between">
          
          <div className="p-6 border-b border-[#C9A96E]/15 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#C9A96E]" />
              <div>
                <h2 className="font-serif text-2xl text-[#F4EFE7]">Quote Basket</h2>
                <span className="text-[10px] text-[#B88C91] font-mono block">
                  Strict MOQ: {MIN_ORDER_QTY} bottles per item
                </span>
              </div>
            </div>

            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#D1C7BA] hover:text-[#C9A96E] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div key={item.id} className="glass-panel p-4 rounded-sm border border-[#C9A96E]/20 relative flex gap-4">
                  
                  <div className="w-20 h-24 rounded bg-[#160B17] overflow-hidden flex-shrink-0 relative">
                    <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="text-[9px] font-mono text-[#C9A96E] uppercase">
                            {item.product.modelCode} • {item.capacity}
                          </span>
                          <h4 className="font-serif text-lg text-[#F4EFE7]">
                            {item.product.name}
                          </h4>
                        </div>

                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#D1C7BA] hover:text-[#B88C91] transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.customConfig && (
                        <p className="text-[9px] text-[#B88C91] mt-1 font-mono">
                          {item.customConfig.finish} • {item.customConfig.cap}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#C9A96E]/10">
                      <div className="flex items-center border border-[#C9A96E]/30 rounded bg-[#160B17]">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 10)}
                          className="px-2 py-0.5 text-xs text-[#D1C7BA] hover:text-[#C9A96E]"
                        >
                          -10
                        </button>
                        <span className="px-2 text-xs font-bold text-[#F4EFE7] font-mono">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 10)}
                          className="px-2 py-0.5 text-xs text-[#D1C7BA] hover:text-[#C9A96E]"
                        >
                          +10
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-[9px] text-[#B88C91] block">₹{item.unitPrice}/unit</span>
                        <span className="font-serif text-sm font-semibold text-[#C9A96E]">
                          ₹{item.totalPrice.toLocaleString()}
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
              ))
            ) : (
              <div className="py-16 text-center">
                <ShoppingBag className="w-12 h-12 text-[#C9A96E]/40 mx-auto mb-3" />
                <h4 className="font-serif text-xl text-[#F4EFE7]">Your Quote Basket is empty</h4>
                <p className="text-xs text-[#D1C7BA] mt-1 font-light">
                  Explore our bottle catalog and select models to compile your bulk quotation request.
                </p>
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#C9A96E]/20 bg-[#160B17] space-y-4">
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-xs text-[#D1C7BA] uppercase font-mono tracking-wider">Estimated Bulk Subtotal</span>
                <span className="font-serif text-2xl font-semibold text-[#C9A96E]">
                  ₹{cartSubtotal.toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-[#B88C91] bg-[#241525] p-2.5 rounded border border-[#C9A96E]/15">
                <AlertCircle className="w-4 h-4 text-[#C9A96E] flex-shrink-0" />
                <span>Bulk pricing automatically adjusts based on tier volume. Official shipping and taxation calculated upon quote confirmation.</span>
              </div>

              <button 
                onClick={() => {
                  setIsCartOpen(false);
                  setIsQuoteModalOpen(true);
                }}
                className="w-full btn-gold-luxury py-3.5 text-xs rounded-sm flex items-center justify-center gap-2 shadow-2xl"
              >
                <span>Request Quotation for All Items ({cartItems.length})</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
