import { categories } from '../db.js';
import { getCartTotals } from '../cart.js';
import './AuthModal.js';

class SiteHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // Append the Auth Modal to body if it is not already there
    if (!document.querySelector('auth-modal')) {
      const modal = document.createElement('auth-modal');
      document.body.appendChild(modal);
    }

    this.render();
    this.initActions();
    
    // Listen for cart changes to update count badge
    window.addEventListener('cart-updated', () => this.updateCartCount());

    // Listen for auth state changes to re-render header
    window.addEventListener('auth-changed', () => {
      this.render();
      this.initActions();
    });
  }

  initActions() {
    // Setup search form handler
    const searchForm = this.querySelector('#header-search-form');
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = this.querySelector('#header-search-input').value.trim();
        window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
      });
    }
    
    // Mobile navigation toggle
    const menuToggle = this.querySelector('#menu-toggle');
    const navMenu = this.querySelector('#nav-menu');
    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Simple slide/toggle style
        if (navMenu.classList.contains('active')) {
          navMenu.style.display = 'flex';
          navMenu.style.flexDirection = 'column';
          navMenu.style.position = 'absolute';
          navMenu.style.top = '100%';
          navMenu.style.left = '0';
          navMenu.style.right = '0';
          navMenu.style.backgroundColor = 'white';
          navMenu.style.padding = '1.5rem';
          navMenu.style.boxShadow = 'var(--shadow-lg)';
          navMenu.style.borderTop = '1px solid var(--border-color)';
          navMenu.style.gap = '1rem';
          navMenu.style.zIndex = '99';
        } else {
          navMenu.style.display = '';
        }
      });
    }

    // Bind cart click to open cart drawer
    const cartBtn = this.querySelector('#header-cart-btn');
    if (cartBtn) {
      cartBtn.addEventListener('click', () => {
        window.dispatchEvent(new CustomEvent('toggle-cart-drawer'));
      });
    }

    // Bind login click
    const loginBtn = this.querySelector('#header-login-btn');
    if (loginBtn) {
      loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('open-auth-modal'));
      });
    }

    // Bind logout click
    const logoutBtn = this.querySelector('#header-logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('safevista_currentUser');
        window.dispatchEvent(new CustomEvent('auth-changed'));
      });
    }
  }

  updateCartCount() {
    const badge = this.querySelector('#header-cart-badge');
    if (badge) {
      const totals = getCartTotals();
      badge.textContent = totals.totalItems;
      badge.style.display = totals.totalItems > 0 ? 'flex' : 'none';
    }
  }

  render() {
    const totals = getCartTotals();
    const cartBadgeStyle = totals.totalItems > 0 ? 'flex' : 'none';
    
    // Check auth session
    const currentUserJson = localStorage.getItem('safevista_currentUser');
    const currentUser = currentUserJson ? JSON.parse(currentUserJson) : null;
    
    // Check which page is active to add class
    const path = window.location.pathname;
    const isHome = path.endsWith('index.html') || path.endsWith('/') ? 'active' : '';
    const isShop = path.endsWith('shop.html') ? 'active' : '';
    const isQuote = path.endsWith('quote.html') ? 'active' : '';

    this.innerHTML = `
      <!-- Top Information Bar -->
      <div class="top-bar">
        <div class="container top-bar-content">
          <div class="top-bar-info">
            <span class="top-bar-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +91 98765 43210
            </span>
            <span class="top-bar-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              sales@safevista.com
            </span>
          </div>
          <div class="top-bar-gst">
            GSTIN: ${currentUser && currentUser.gstin ? currentUser.gstin : '27AAAAA1111A1Z1 (Registered Corporate Partner)'}
          </div>
        </div>
      </div>

      <!-- Navigation Bar -->
      <header class="main-header">
        <div class="container header-content">
          <!-- Logo -->
          <a href="index.html" class="logo">
            <div class="logo-icon">SV</div>
            Safe<span>Vista</span>
          </a>

          <!-- Navigation Links & Categories -->
          <nav class="nav-menu" id="nav-menu">
            <a href="index.html" class="nav-dropdown-trigger ${isHome}">Home</a>
            <div class="nav-dropdown">
              <span class="nav-dropdown-trigger ${isShop}" id="shop-trigger">
                Shop Categories
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <div class="dropdown-menu">
                ${categories.map(cat => `
                  <a href="shop.html?category=${encodeURIComponent(cat.name)}" class="dropdown-item">${cat.name}</a>
                `).join('')}
              </div>
            </div>
            <a href="quote.html" class="nav-dropdown-trigger ${isQuote}">Bulk Quote</a>
          </nav>

          <!-- Search Box -->
          <form class="search-box" id="header-search-form">
            <input type="text" class="search-input" id="header-search-input" placeholder="Search safety posters, signs...">
            <button type="submit" class="search-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>
          </form>

          <!-- Action Buttons -->
          <div class="header-actions">
            <!-- Wishlist -->
            <button class="action-btn" id="header-wishlist-btn" title="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
            
            <!-- Cart -->
            <button class="action-btn" id="header-cart-btn" title="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <span class="action-badge" id="header-cart-badge" style="display: ${cartBadgeStyle}">${totals.totalItems}</span>
            </button>

            <!-- Login / Account Dropdown -->
            ${currentUser ? `
              <div class="nav-dropdown" style="display: flex; align-items: center;">
                <span class="nav-dropdown-trigger login-btn" style="cursor: pointer; gap: 0.35rem; padding: 0.5rem 0.75rem;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <span>Hi, ${currentUser.name.split(' ')[0]}</span>
                </span>
                <div class="dropdown-menu" style="right: 0; left: auto; width: 200px;">
                  <div style="padding: 0.6rem 1.25rem; font-size: 0.8rem; border-bottom: 1px solid var(--border-color); color: var(--text-muted); font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left;" title="${currentUser.email}">
                    ${currentUser.email}
                  </div>
                  ${currentUser.company ? `<div style="padding: 0.6rem 1.25rem 0.3rem 1.25rem; font-size: 0.75rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${currentUser.company}</div>` : ''}
                  <a href="#" id="header-logout-btn" class="dropdown-item" style="color: #ef4444; font-weight: 600; text-align: left;">Logout</a>
                </div>
              </div>
            ` : `
              <a href="#" class="login-btn" id="header-login-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                <span>Login</span>
              </a>
            `}

            <!-- Mobile Toggle -->
            <button class="menu-toggle" id="menu-toggle">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('site-header', SiteHeader);
