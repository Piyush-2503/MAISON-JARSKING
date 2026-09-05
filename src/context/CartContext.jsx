import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS as FALLBACK_PRODUCTS } from '../data/products';
import { fetchProducts, fetchQuotesApi, submitQuoteApi, updateQuoteStatusApi } from '../services/api';

const CartContext = createContext();

export const MIN_ORDER_QTY = 50;

export const CartProvider = ({ children }) => {
  const [activeView, setActiveView] = useState('home');
  const [selectedProductId, setSelectedProductId] = useState('jx-n005');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Products State initialized from MERN Backend API
  const [products, setProducts] = useState(FALLBACK_PRODUCTS);
  const [isBackendConnected, setIsBackendConnected] = useState(false);

  // Quotes List State initialized from MERN Backend API
  const [quotesList, setQuotesList] = useState([]);

  // Cart & Wishlist
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState(['jx-n015', 'jx-n013']);

  // Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProductContext, setQuoteProductContext] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Load Initial Data from MERN REST APIs
  useEffect(() => {
    const loadApiData = async () => {
      const apiProducts = await fetchProducts();
      if (apiProducts && apiProducts.length > 0) {
        setProducts(apiProducts);
        setIsBackendConnected(true);
      }

      const apiQuotes = await fetchQuotesApi();
      if (apiQuotes && apiQuotes.length > 0) {
        setQuotesList(apiQuotes);
      }
    };

    loadApiData();
  }, []);

  const calculateUnitPrice = (product, quantity, customConfig = null) => {
    if (!product) return 0;
    
    const matchedTier = product.tiers.find(t => quantity >= t.min && (t.max === undefined || quantity <= t.max)) 
      || product.tiers[product.tiers.length - 1];
    
    let price = matchedTier ? matchedTier.price : product.basePrice;

    if (customConfig) {
      if (customConfig.finishAdd) price += customConfig.finishAdd;
      if (customConfig.capAdd) price += customConfig.capAdd;
      if (customConfig.brandingAdd) price += customConfig.brandingAdd;
      if (customConfig.sprayAdd) price += customConfig.sprayAdd;
    }

    return Math.round(price);
  };

  const addToCart = (product, quantity = 50, capacity = '50ml', customConfig = null) => {
    const validQty = Math.max(quantity, MIN_ORDER_QTY);
    const unitPrice = calculateUnitPrice(product, validQty, customConfig);
    const cartItemId = `${product.id}-${capacity}-${Date.now()}`;

    const newItem = {
      id: cartItemId,
      productId: product.id,
      product,
      capacity,
      quantity: validQty,
      customConfig,
      unitPrice,
      totalPrice: unitPrice * validQty
    };

    setCartItems(prev => [newItem, ...prev]);
    setIsCartOpen(true);
  };

  const updateQuantity = (cartItemId, newQuantity) => {
    if (newQuantity < MIN_ORDER_QTY) {
      alert(`Minimum Order Quantity (MOQ) is strictly ${MIN_ORDER_QTY} bottles.`);
      return;
    }

    setCartItems(prev => prev.map(item => {
      if (item.id === cartItemId) {
        const unitPrice = calculateUnitPrice(item.product, newQuantity, item.customConfig);
        return {
          ...item,
          quantity: newQuantity,
          unitPrice,
          totalPrice: unitPrice * newQuantity
        };
      }
      return item;
    }));
  };

  const removeFromCart = (cartItemId) => {
    setCartItems(prev => prev.filter(item => item.id !== cartItemId));
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const isInWishlist = (productId) => wishlist.includes(productId);

  // Submit quote to Express Backend API
  const submitQuoteRequest = async (formData) => {
    const apiResult = await submitQuoteApi(formData);
    if (apiResult) {
      setQuotesList(prev => [apiResult, ...prev]);
    } else {
      // Local fallback
      const fallbackQuote = {
        id: `QT-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        quoteId: `QT-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        date: new Date().toISOString().split('T')[0],
        clientName: formData.name,
        company: formData.company || 'Independent Brand',
        email: formData.email,
        phone: formData.phone,
        productName: formData.productName || 'Custom Bulk Request',
        quantity: formData.quantity,
        capacity: formData.capacity || '50ml',
        customization: formData.customization || 'Standard Specifications',
        location: formData.location || 'Not Specified',
        status: 'New',
        estimatedValue: `₹${(formData.quantity * 450).toLocaleString()}`
      };
      setQuotesList(prev => [fallbackQuote, ...prev]);
    }
    setIsQuoteModalOpen(false);
  };

  // Update status in Express Backend API
  const updateQuoteStatus = async (quoteId, newStatus) => {
    setQuotesList(prev => prev.map(q => (q.quoteId === quoteId || q.id === quoteId) ? { ...q, status: newStatus } : q));
    await updateQuoteStatusApi(quoteId, newStatus);
  };

  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const cartTotalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navigateToProduct = (productId) => {
    setSelectedProductId(productId);
    setActiveView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToView = (viewName) => {
    setActiveView(viewName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartContext.Provider
      value={{
        activeView,
        setActiveView: navigateToView,
        selectedProductId,
        setSelectedProductId,
        navigateToProduct,
        quickViewProduct,
        setQuickViewProduct,
        products,
        isBackendConnected,
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartSubtotal,
        cartTotalItems,
        wishlist,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        setIsCartOpen,
        isQuoteModalOpen,
        setIsQuoteModalOpen,
        quoteProductContext,
        setQuoteProductContext,
        isSearchOpen,
        setIsSearchOpen,
        searchQuery,
        setSearchQuery,
        quotesList,
        submitQuoteRequest,
        updateQuoteStatus,
        calculateUnitPrice,
        MIN_ORDER_QTY
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
