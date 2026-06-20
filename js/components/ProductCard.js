import { posters } from '../db.js';
import { renderProductMedia } from '../utils.js';
import { addToCart } from '../cart.js';

class ProductCard extends HTMLElement {
  static get observedAttributes() {
    return ['product-id'];
  }

  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'product-id' && oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const productId = this.getAttribute('product-id');
    const product = posters.find(p => p.id === productId);
    
    if (!product) {
      this.innerHTML = `<div style="color: red; padding: 1rem;">Product not found</div>`;
      return;
    }

    const hasBadge = product.badge;
    const badgeColorClass = product.badge === 'Best Seller' ? 'badge-orange' : 'badge-blue';
    const originalPrice = (product.price * 1.3).toFixed(2); // Mock original price for sale listing

    this.innerHTML = `
      <div class="product-card" data-id="${product.id}">
        <!-- Badge -->
        ${hasBadge ? `
          <div class="product-badge-wrap">
            <span class="badge ${badgeColorClass}">${product.badge}</span>
          </div>
        ` : ''}

        <!-- Visual Poster Area -->
        <div class="product-img-wrap" id="card-media-${product.id}">
          ${renderProductMedia(product, true)}
          
          <!-- Hover Actions Overlay -->
          <div class="product-card-overlay">
            <button class="card-overlay-btn btn-quickview" title="Quick View" data-id="${product.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
            <button class="card-overlay-btn btn-wishlist" title="Add to Wishlist" data-id="${product.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>
        </div>

        <!-- Product Information -->
        <div class="product-info-wrap">
          <div class="product-cat">${product.category}</div>
          <a href="product-detail.html?id=${product.id}" class="product-card-title" title="${product.title}">${product.title}</a>
          
          <!-- Star Ratings -->
          <div class="product-rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" opacity="0.2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>(${product.reviewsCount})</span>
          </div>

          <!-- Bottom Price Row -->
          <div class="product-price-row">
            <div>
              <span class="product-card-price">₹${product.price.toFixed(2)}</span>
              <span class="product-price-row product-card-price-strike">₹${originalPrice}</span>
            </div>
            <button class="quick-add-btn" data-id="${product.id}">Add</button>
          </div>
        </div>
      </div>
    `;

    // Add event listeners
    this.querySelector('.product-img-wrap').addEventListener('click', (e) => {
      // Don't trigger link redirect if clicking overlay action buttons
      if (e.target.closest('.card-overlay-btn')) return;
      window.location.href = `product-detail.html?id=${product.id}`;
    });

    this.querySelector('.btn-quickview').addEventListener('click', (e) => {
      e.stopPropagation();
      window.dispatchEvent(new CustomEvent('open-quick-view', { detail: { productId: product.id } }));
    });

    this.querySelector('.btn-wishlist').addEventListener('click', (e) => {
      e.stopPropagation();
      alert(`"${product.title}" has been added to your wishlist.`);
    });

    this.querySelector('.quick-add-btn').addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(product.id, 's-a3', 'm-gloss', 1);
      // Automatically open cart drawer to verify addition
      window.dispatchEvent(new CustomEvent('open-cart-drawer'));
    });
  }
}

customElements.define('product-card', ProductCard);
export default ProductCard;
