const API_BASE = '/api';

// Fetch all products from MERN Express Backend
export const fetchProducts = async () => {
  try {
    const res = await fetch(`${API_BASE}/products`);
    if (!res.ok) throw new Error('Failed to fetch products');
    return await res.json();
  } catch (err) {
    console.warn('[API Client Warning]: Backend offline or connecting. Using fallback products catalog.');
    return null;
  }
};

// Fetch single product details
export const fetchProductById = async (id) => {
  try {
    const res = await fetch(`${API_BASE}/products/${id}`);
    if (!res.ok) throw new Error('Failed to fetch product');
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
};

// Submit a new B2B Bulk Quote Inquiry to Express backend
export const submitQuoteApi = async (quoteData) => {
  try {
    const res = await fetch(`${API_BASE}/quotes`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quoteData)
    });
    if (!res.ok) throw new Error('Failed to submit quote');
    return await res.json();
  } catch (err) {
    console.error('[API Quote Error]:', err);
    return null;
  }
};

// Fetch all quote inquiries for Admin Pipeline
export const fetchQuotesApi = async () => {
  try {
    const res = await fetch(`${API_BASE}/quotes`);
    if (!res.ok) throw new Error('Failed to fetch quotes');
    return await res.json();
  } catch (err) {
    console.error('[API Fetch Quotes Error]:', err);
    return null;
  }
};

// Update quote status in Express Admin Pipeline
export const updateQuoteStatusApi = async (id, status) => {
  try {
    const res = await fetch(`${API_BASE}/quotes/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    if (!res.ok) throw new Error('Failed to update quote status');
    return await res.json();
  } catch (err) {
    console.error('[API Update Quote Status Error]:', err);
    return null;
  }
};

// Admin Login
export const adminLoginApi = async (email, password) => {
  try {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    if (!res.ok) throw new Error('Invalid credentials');
    return await res.json();
  } catch (err) {
    console.error('[API Auth Error]:', err);
    return null;
  }
};
