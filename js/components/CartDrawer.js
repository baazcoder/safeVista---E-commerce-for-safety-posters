import { getCart, updateQuantity, removeFromCart, getCartTotals } from '../cart.js';
import { renderProductMedia } from '../utils.js';

class CartDrawer extends HTMLElement {
  constructor() {
    super();
    this.isOpen = false;
  }

  connectedCallback() {
    this.render();

    // Listen for custom trigger events
    window.addEventListener('open-cart-drawer', () => this.open());
    window.addEventListener('toggle-cart-drawer', () => this.toggle());
    window.addEventListener('cart-updated', () => this.updateContents());

    // Close on overlay click
    this.addEventListener('click', (e) => {
      if (e.target.classList.contains('cart-drawer-overlay')) {
        this.close();
      }
    });
  }

  open() {
    this.isOpen = true;
    const overlay = this.querySelector('.cart-drawer-overlay');
    if (overlay) overlay.classList.add('open');
    this.updateContents();
  }

  close() {
    this.isOpen = false;
    const overlay = this.querySelector('.cart-drawer-overlay');
    if (overlay) overlay.classList.remove('open');
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  setupListeners() {
    // Close button
    const closeBtn = this.querySelector('#cart-drawer-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Item quantity buttons
    this.querySelectorAll('.qty-minus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const qty = Number(btn.getAttribute('data-qty'));
        updateQuantity(id, qty - 1);
      });
    });

    this.querySelectorAll('.qty-plus').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const qty = Number(btn.getAttribute('data-qty'));
        updateQuantity(id, qty + 1);
      });
    });

    // Remove buttons
    this.querySelectorAll('.cart-item-remove').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        if (confirm('Remove item from cart?')) {
          removeFromCart(id);
        }
      });
    });
  }

  updateContents() {
    const itemsContainer = this.querySelector('#drawer-items-list');
    const summaryContainer = this.querySelector('#drawer-summary-block');
    const headerTitle = this.querySelector('#drawer-header-title');

    if (!itemsContainer || !summaryContainer) return;

    const cart = getCart();
    const totals = getCartTotals();

    headerTitle.textContent = `Your Cart (${totals.totalItems})`;

    if (cart.length === 0) {
      itemsContainer.innerHTML = `
        <div class="flex-center" style="flex-direction: column; height: 200px; color: var(--text-muted);">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <p style="font-weight: 600;">Your cart is empty</p>
          <a href="shop.html" class="btn btn-outline" style="margin-top: 1rem; padding: 0.5rem 1rem; font-size: 0.8rem;" id="drawer-shop-now-btn">Shop Now</a>
        </div>
      `;
      summaryContainer.innerHTML = `
        <div class="cart-drawer-summary">
          <div class="cart-summary-row total">
            <span>Total:</span>
            <span>₹0.00</span>
          </div>
        </div>
        <button class="btn btn-primary" style="width: 100%;" disabled>Checkout</button>
      `;
      
      const shopNowBtn = this.querySelector('#drawer-shop-now-btn');
      if (shopNowBtn) {
        shopNowBtn.addEventListener('click', () => this.close());
      }
      return;
    }

    // Render list
    itemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-img-wrap" style="width: 60px; height: 75px; flex-shrink: 0; border: 1px solid var(--border-color); border-radius: var(--radius-sm); overflow: hidden;">
          ${renderProductMedia(item, true)}
        </div>
        <div class="cart-item-info">
          <h5 class="cart-item-title">${item.title}</h5>
          <div class="cart-item-variant">${item.sizeName} | ${item.materialName}</div>
          <div class="cart-item-bottom">
            <div class="quantity-picker">
              <button class="qty-btn qty-minus" data-id="${item.id}" data-qty="${item.quantity}">-</button>
              <div class="qty-val">${item.quantity}</div>
              <button class="qty-btn qty-plus" data-id="${item.id}" data-qty="${item.quantity}">+</button>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="cart-item-price">₹${(item.unitPrice * item.quantity).toFixed(2)}</span>
              <button class="cart-item-remove" data-id="${item.id}" title="Remove Item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    // Render totals
    summaryContainer.innerHTML = `
      <div class="cart-drawer-summary">
        <div class="cart-summary-row">
          <span>Items Subtotal (${totals.totalItems}):</span>
          <span>₹${totals.itemSubtotal.toFixed(2)}</span>
        </div>
        ${totals.discountAmount > 0 ? `
          <div class="cart-summary-row" style="color: var(--accent-color); font-weight: 600;">
            <span>Bulk Savings (${totals.discountPercent}%):</span>
            <span>-₹${totals.discountAmount.toFixed(2)}</span>
          </div>
        ` : ''}
        <div class="cart-summary-row">
          <span>Shipping:</span>
          <span>${totals.shipping === 0 ? '<span style="color: green; font-weight: bold;">FREE</span>' : `₹${totals.shipping.toFixed(2)}`}</span>
        </div>
        <div class="cart-summary-row">
          <span>GST (18%):</span>
          <span>₹${totals.gst.toFixed(2)}</span>
        </div>
        <div class="cart-summary-row total">
          <span>Total (Incl. Tax):</span>
          <span>₹${totals.total.toFixed(2)}</span>
        </div>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <a href="cart.html" class="btn btn-secondary" style="flex: 1; padding: 0.65rem 0; font-size: 0.8rem; text-align: center;" id="drawer-view-cart-btn">View Cart</a>
        <a href="checkout.html" class="btn btn-accent" style="flex: 1.2; padding: 0.65rem 0; font-size: 0.8rem; text-align: center;">Checkout</a>
      </div>
    `;

    // View Cart close hook
    const viewCartBtn = this.querySelector('#drawer-view-cart-btn');
    if (viewCartBtn) {
      viewCartBtn.addEventListener('click', () => this.close());
    }

    this.setupListeners();
  }

  render() {
    this.innerHTML = `
      <div class="cart-drawer-overlay">
        <div class="cart-drawer">
          <!-- Header -->
          <div class="cart-drawer-header flex-between">
            <h4 id="drawer-header-title" style="font-family: var(--font-display); font-weight: 800; font-size: 1.15rem; color: var(--text-dark);">Your Cart (0)</h4>
            <button class="cart-drawer-close" id="cart-drawer-close">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <!-- Items list -->
          <div class="cart-drawer-items" id="drawer-items-list">
            <!-- Rendered dynamically -->
          </div>

          <!-- Footer summary -->
          <div class="cart-drawer-footer" id="drawer-summary-block">
            <!-- Rendered dynamically -->
          </div>
        </div>
      </div>
    `;
    this.updateContents();
  }
}

customElements.define('cart-drawer', CartDrawer);
export default CartDrawer;
