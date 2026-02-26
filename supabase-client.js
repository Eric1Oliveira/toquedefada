// ============================================
// SUPABASE CLIENT INITIALIZATION
// ============================================

const SUPABASE_URL = 'https://xckuilzjkajfzzartqoy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhja3VpbHpqa2FqZnp6YXJ0cW95Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyNjU0MTUsImV4cCI6MjA4Njg0MTQxNX0.Q52RFxnBEz_kwupj_popRpw6c9AHmv7RFYCRAmIHkc0';

// Supabase Client (using REST API directly since we don't have the SDK)
class SupabaseClient {
  constructor(url, key) {
    this.url = url;
    this.key = key;
    this.sessionId = this.getOrCreateSessionId();
  }

  getOrCreateSessionId() {
    let sid = localStorage.getItem('toque_session_id');
    if (!sid) {
      sid = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('toque_session_id', sid);
    }
    return sid;
  }

  // Generic request handler (with automatic JWT refresh + retry)
  async request(method, table, options = {}, _isRetry = false) {
    const path = options.path || `${table}${options.query || ''}`;
    const url = `${this.url}/rest/v1/${path}`;

    const headers = {
      'Authorization': `Bearer ${options.useAuth ? (this.getAccessToken() || this.key) : this.key}`,
      'apikey': this.key,
      'Content-Type': 'application/json',
      'Prefer': options.prefer || 'return=representation'
    };

    try {
      const response = await fetch(url, {
        method,
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorData = {};
        try { errorData = JSON.parse(errorText); } catch (_) {}

        // Auto-refresh on 401 JWT expired (only once)
        if (response.status === 401 && !_isRetry &&
            (errorData.code === 'PGRST303' || (errorData.message && errorData.message.includes('JWT expired')))) {
          console.warn('JWT expirado — tentando renovar sessão...');
          const refreshed = await this.refreshSession();
          if (refreshed) {
            console.log('Sessão renovada com sucesso! Repetindo requisição...');
            return this.request(method, table, options, true);
          } else {
            console.error('Não foi possível renovar a sessão. Faça login novamente.');
            this.clearSession();
            // Dispatch event so the UI can react (show login modal, etc.)
            window.dispatchEvent(new CustomEvent('session-expired'));
          }
        }

        console.error(`Supabase API Error: ${response.status}`, errorText);
        throw new Error(`API Error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Supabase Request Error:', error);
      throw error;
    }
  }

  // CART METHODS
  async initializeCart() {
    try {
      // Try to get existing cart for this session
      const carts = await this.request('GET', 'carts', {
        query: `?session_id=eq.${this.sessionId}`
      });

      if (carts && carts.length > 0) {
        return carts[0];
      }

      // Create new cart if doesn't exist
      const newCart = await this.request('POST', 'carts', {
        body: {
          session_id: this.sessionId
        }
      });

      return newCart[0] || newCart;
    } catch (error) {
      console.error('Error initializing cart:', error);
      return null;
    }
  }

  async addToCart(productId, productName, price, quantity = 1) {
    try {
      const cart = await this.initializeCart();
      if (!cart) throw new Error('Cannot initialize cart');

      // Add/update cart item with price snapshot
      const cartItem = {
        cart_id: cart.id,
        product_name: productName,
        price_at_cart: parseFloat(price),
        quantity: quantity
      };

      const result = await this.request('POST', 'cart_items', {
        body: cartItem
      });

      // Update cart totals
      await this.updateCartTotals(cart.id);

      return result[0] || result;
    } catch (error) {
      console.error('Error adding to cart:', error);
      return null;
    }
  }

  async getCartItems(cartId) {
    try {
      return await this.request('GET', 'cart_items', {
        query: `?cart_id=eq.${cartId}`
      });
    } catch (error) {
      console.error('Error fetching cart items:', error);
      return [];
    }
  }

  async updateCartTotals(cartId) {
    try {
      const items = await this.getCartItems(cartId);
      const totalItems = items.reduce((sum, item) => sum + (item.quantity || 1), 0);
      const totalPrice = items.reduce((sum, item) => sum + (item.subtotal || 0), 0);

      // Note: Only update if these columns exist in your schema
      // await this.request('PATCH', 'carts', {
      //   query: `?id=eq.${cartId}`,
      //   body: { total_items: totalItems, total_price: totalPrice }
      // });

      return { totalItems, totalPrice };
    } catch (error) {
      console.error('Error updating cart totals:', error);
      return null;
    }
  }

  async removeFromCart(cartItemId) {
    try {
      await this.request('DELETE', 'cart_items', {
        query: `?id=eq.${cartItemId}`
      });
      return true;
    } catch (error) {
      console.error('Error removing from cart:', error);
      return false;
    }
  }

  // WISHLIST METHODS
  async addToWishlist(productName) {
    try {
      const result = await this.request('POST', 'wishlists', {
        body: {
          session_id: this.sessionId,
          product_name: productName
        }
      });
      return result[0] || result;
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      return null;
    }
  }

  async getWishlist() {
    try {
      return await this.request('GET', 'wishlists', {
        query: `?session_id=eq.${this.sessionId}`
      });
    } catch (error) {
      console.error('Error fetching wishlist:', error);
      return [];
    }
  }

  async removeFromWishlist(wishlistId) {
    try {
      await this.request('DELETE', 'wishlists', {
        query: `?id=eq.${wishlistId}`
      });
      return true;
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      return false;
    }
  }

  // NEWSLETTER
  async subscribeNewsletter(email) {
    try {
      const result = await this.request('POST', 'newsletter_subscribers', {
        body: { email, subscribed_at: new Date().toISOString() }
      });
      return result[0] || result;
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      return null;
    }
  }

  // ============================================
  // AUTH METHODS (Supabase GoTrue)
  // ============================================

  async authRequest(endpoint, body) {
    const url = `${this.url}/auth/v1/${endpoint}`;
    const headers = {
      'apikey': this.key,
      'Content-Type': 'application/json'
    };

    // Only send Authorization for endpoints that need it (NOT login/signup/recover)
    const noAuthEndpoints = ['token', 'signup', 'recover'];
    const needsAuth = !noAuthEndpoints.some(ep => endpoint.startsWith(ep));
    if (needsAuth) {
      const token = this.getAccessToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    });

    const data = await response.json();

    if (!response.ok) {
      const msg = data.error_description || data.error || data.msg || data.message || 'Erro desconhecido';
      console.warn(`Auth error (${response.status}):`, data);
      throw new Error(msg);
    }

    return data;
  }

  async authGet(endpoint) {
    const url = `${this.url}/auth/v1/${endpoint}`;
    const token = this.getAccessToken();

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'apikey': this.key,
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Sessão expirada');
    }

    return await response.json();
  }

  // Sign up with email + password
  async signUp(email, password, name) {
    const data = await this.authRequest('signup', {
      email,
      password,
      data: { full_name: name }
    });

    // If auto-confirmed, save session
    if (data.access_token) {
      this.saveSession(data);
    }

    return data;
  }

  // Sign in with email + password
  async signIn(email, password) {
    const data = await this.authRequest('token?grant_type=password', {
      email,
      password
    });

    if (data.access_token) {
      this.saveSession(data);
    }

    return data;
  }

  // Sign out
  async signOut() {
    try {
      const token = this.getAccessToken();
      if (token) {
        await fetch(`${this.url}/auth/v1/logout`, {
          method: 'POST',
          headers: {
            'apikey': this.key,
            'Authorization': `Bearer ${token}`
          }
        });
      }
    } catch (e) {
      console.log('Logout request error (non-fatal):', e);
    }
    this.clearSession();
  }

  // Reset password (send email)
  async resetPassword(email) {
    return await this.authRequest('recover', { email });
  }

  // Get current user from stored session
  async getUser() {
    const token = this.getAccessToken();
    if (!token) return null;

    try {
      return await this.authGet('user');
    } catch (e) {
      // Token expired - try refresh
      const refreshed = await this.refreshSession();
      if (refreshed) {
        try {
          return await this.authGet('user');
        } catch (e2) {
          this.clearSession();
          return null;
        }
      }
      this.clearSession();
      return null;
    }
  }

  // Refresh the access token
  async refreshSession() {
    const refreshToken = localStorage.getItem('toque_refresh_token');
    if (!refreshToken) return false;

    try {
      const data = await this.authRequest('token?grant_type=refresh_token', {
        refresh_token: refreshToken
      });

      if (data.access_token) {
        this.saveSession(data);
        return true;
      }
    } catch (e) {
      console.log('Token refresh failed:', e);
    }

    return false;
  }

  // Session storage helpers
  saveSession(data) {
    localStorage.setItem('toque_access_token', data.access_token);
    if (data.refresh_token) {
      localStorage.setItem('toque_refresh_token', data.refresh_token);
    }
    if (data.user) {
      localStorage.setItem('toque_user', JSON.stringify(data.user));
    }
  }

  clearSession() {
    localStorage.removeItem('toque_access_token');
    localStorage.removeItem('toque_refresh_token');
    localStorage.removeItem('toque_user');
  }

  getAccessToken() {
    return localStorage.getItem('toque_access_token');
  }

  getCachedUser() {
    const u = localStorage.getItem('toque_user');
    return u ? JSON.parse(u) : null;
  }

  // ============================================
  // ADMIN METHODS
  // ============================================

  async getProducts() {
    return await this.request('GET', 'products', {
      query: '?order=sort_order.asc,created_at.desc'
    });
  }

  async createProduct(data) {
    const result = await this.request('POST', 'products', {
      body: data,
      useAuth: true
    });
    return result[0] || result;
  }

  async updateProduct(id, data) {
    data.updated_at = new Date().toISOString();
    const result = await this.request('PATCH', 'products', {
      query: `?id=eq.${encodeURIComponent(id)}`,
      body: data,
      useAuth: true
    });
    return result[0] || result;
  }

  async deleteProduct(id) {
    await this.request('DELETE', 'products', {
      query: `?id=eq.${encodeURIComponent(id)}`,
      useAuth: true
    });
    return true;
  }

  // CATEGORIES METHODS
  async getCategories() {
    return await this.request('GET', 'categories', {
      query: '?order=sort_order.asc,created_at.desc'
    });
  }

  async createCategory(data) {
    const result = await this.request('POST', 'categories', {
      body: data,
      useAuth: true
    });
    return result[0] || result;
  }

  async updateCategory(id, data) {
    data.updated_at = new Date().toISOString();
    const result = await this.request('PATCH', 'categories', {
      query: `?id=eq.${encodeURIComponent(id)}`,
      body: data,
      useAuth: true
    });
    return result[0] || result;
  }

  async deleteCategory(id) {
    await this.request('DELETE', 'categories', {
      query: `?id=eq.${encodeURIComponent(id)}`,
      useAuth: true
    });
    return true;
  }

  async getCoupons() {
    return await this.request('GET', 'coupons', {
      query: '?order=created_at.desc'
    });
  }

  async createCoupon(data) {
    const result = await this.request('POST', 'coupons', {
      body: data,
      useAuth: true
    });
    return result[0] || result;
  }

  async updateCoupon(id, data) {
    const result = await this.request('PATCH', 'coupons', {
      query: `?id=eq.${id}`,
      body: data,
      useAuth: true
    });
    return result[0] || result;
  }

  async deleteCoupon(id) {
    await this.request('DELETE', 'coupons', {
      query: `?id=eq.${id}`,
      useAuth: true
    });
    return true;
  }

  async getSiteSettings() {
    return await this.request('GET', 'site_settings');
  }

  async upsertSiteSetting(key, value) {
    const result = await this.request('POST', 'site_settings', {
      body: { key, value, updated_at: new Date().toISOString() },
      query: '?on_conflict=key',
      prefer: 'return=representation,resolution=merge-duplicates',
      useAuth: true
    });
    return result[0] || result;
  }

  // ============================================
  // REVIEWS METHODS
  // ============================================

  async getProductReviews(productId) {
    return await this.request('GET', 'reviews', {
      query: `?product_id=eq.${productId}&order=created_at.desc`
    });
  }

  async getAllReviews() {
    return await this.request('GET', 'reviews', {
      query: '?order=created_at.desc'
    });
  }

  async createReview(review) {
    const result = await this.request('POST', 'reviews', {
      body: review,
      useAuth: true
    });
    return result[0] || result;
  }

  async checkAdmin(email) {
    try {
      const result = await this.request('GET', 'admin_users', {
        query: `?email=eq.${encodeURIComponent(email)}`
      });
      return result && result.length > 0;
    } catch (e) {
      return false;
    }
  }

  // ============================================
  // OFFERS METHODS
  // ============================================

  async getOffers() {
    return await this.request('GET', 'offers', {
      query: '?order=sort_order.asc,created_at.desc'
    });
  }

  async getActiveOffers() {
    return await this.request('GET', 'offers', {
      query: '?active=eq.true&order=sort_order.asc,created_at.desc'
    });
  }

  async createOffer(data) {
    const result = await this.request('POST', 'offers', {
      body: data,
      useAuth: true
    });
    return result[0] || result;
  }

  async updateOffer(id, data) {
    const result = await this.request('PATCH', 'offers', {
      query: `?id=eq.${id}`,
      body: data,
      useAuth: true
    });
    return result[0] || result;
  }

  async deleteOffer(id) {
    await this.request('DELETE', 'offers', {
      query: `?id=eq.${id}`,
      useAuth: true
    });
    return true;
  }

  async uploadImage(file) {
    const ext = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).substr(2, 8)}.${ext}`;
    const url = `${this.url}/storage/v1/object/product-images/${fileName}`;
    const token = this.getAccessToken() || this.key;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'apikey': this.key,
        'Content-Type': file.type
      },
      body: file
    });

    if (!response.ok) throw new Error(`Upload falhou: ${response.status}`);
    return `${this.url}/storage/v1/object/public/product-images/${fileName}`;
  }

  // ORDER METHODS
  async createOrder(data) {
    const result = await this.request('POST', 'orders', {
      body: data
    });
    return result[0] || result;
  }

  async createOrderItems(items) {
    const result = await this.request('POST', 'order_items', {
      body: items,
      prefer: 'return=representation'
    });
    return result;
  }

  async getOrders() {
    return await this.request('GET', 'orders', {
      query: '?order=created_at.desc',
      useAuth: true
    });
  }

  async getOrderItems(orderId) {
    return await this.request('GET', 'order_items', {
      query: `?order_id=eq.${orderId}`,
      useAuth: true
    });
  }

  async updateOrderStatus(id, status) {
    const result = await this.request('PATCH', 'orders', {
      query: `?id=eq.${id}`,
      body: { status, updated_at: new Date().toISOString() },
      useAuth: true
    });
    return result[0] || result;
  }

  async updateOrder(id, data) {
    data.updated_at = new Date().toISOString();
    const result = await this.request('PATCH', 'orders', {
      query: `?id=eq.${id}`,
      body: data,
      useAuth: true
    });
    return result[0] || result;
  }

  async getOrdersByEmail(email) {
    return await this.request('GET', 'orders', {
      query: `?user_email=eq.${encodeURIComponent(email)}&order=created_at.desc`
    });
  }

  async getOrdersBySession(sessionId) {
    return await this.request('GET', 'orders', {
      query: `?session_id=eq.${encodeURIComponent(sessionId)}&order=created_at.desc`
    });
  }

  async getProductById(id) {
    const result = await this.request('GET', 'products', {
      query: `?id=eq.${encodeURIComponent(id)}`
    });
    return result[0] || null;
  }
}

// Initialize global client
const supabase = new SupabaseClient(SUPABASE_URL, SUPABASE_ANON_KEY);
