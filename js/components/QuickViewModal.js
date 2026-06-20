import { posters, sizes, materials } from '../db.js';
import { calculateItemPrice, addToCart } from '../cart.js';
import { renderProductMedia } from '../utils.js';

class QuickViewModal extends HTMLElement {
  constructor() {
    super();
    this.selectedProduct = null;
    this.selectedSize = 's-a3';
    this.selectedMaterial = 'm-gloss';
    this.quantity = 1;
  }

  connectedCallback() {
    this.render();
    
    // Listen for global open event
    window.addEventListener('open-quick-view', (e) => {
      const { productId } = e.detail;
      this.open(productId);
    });

    // Close on overlay click
    this.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        this.close();
      }
    });
  }

  open(productId) {
    const product = posters.find(p => p.id === productId);
    if (!product) return;

    this.selectedProduct = product;
    this.selectedSize = 's-a3';
    this.selectedMaterial = 'm-gloss';
    this.quantity = 1;

    const overlay = this.querySelector('.modal-overlay');
    if (overlay) overlay.classList.add('open');

    this.updateModalContent();
  }

  close() {
    const overlay = this.querySelector('.modal-overlay');
    if (overlay) overlay.classList.remove('open');
    this.selectedProduct = null;
  }

  updatePrice() {
    if (!this.selectedProduct) return;
    const priceSpan = this.querySelector('#modal-price-display');
    if (priceSpan) {
      const price = calculateItemPrice(this.selectedProduct.price, this.selectedSize, this.selectedMaterial);
      priceSpan.textContent = `₹${(price * this.quantity).toFixed(2)}`;
    }
  }

  setupListeners() {
    // Close button
    const closeBtn = this.querySelector('#modal-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Size Selection
    this.querySelectorAll('.size-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.querySelectorAll('.size-select-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedSize = btn.getAttribute('data-code');
        this.updatePrice();
      });
    });

    // Material Selection
    this.querySelectorAll('.material-select-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.querySelectorAll('.material-select-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedMaterial = btn.getAttribute('data-code');
        this.updatePrice();
      });
    });

    // Quantity buttons
    const minusBtn = this.querySelector('#modal-qty-minus');
    const plusBtn = this.querySelector('#modal-qty-plus');
    const qtyVal = this.querySelector('#modal-qty-val');

    if (minusBtn && plusBtn && qtyVal) {
      minusBtn.addEventListener('click', () => {
        if (this.quantity > 1) {
          this.quantity--;
          qtyVal.textContent = this.quantity;
          this.updatePrice();
        }
      });
      plusBtn.addEventListener('click', () => {
        this.quantity++;
        qtyVal.textContent = this.quantity;
        this.updatePrice();
      });
    }

    // Add to Cart submit
    const addToCartBtn = this.querySelector('#modal-add-to-cart-btn');
    if (addToCartBtn) {
      addToCartBtn.addEventListener('click', () => {
        if (!this.selectedProduct) return;
        
        addToCart(
          this.selectedProduct.id,
          this.selectedSize,
          this.selectedMaterial,
          this.quantity
        );

        this.close();
        // Open the cart drawer
        window.dispatchEvent(new CustomEvent('open-cart-drawer'));
      });
    }
  }

  updateModalContent() {
    const body = this.querySelector('#modal-body-content');
    if (!body || !this.selectedProduct) return;

    const product = this.selectedProduct;
    const currentPrice = calculateItemPrice(product.price, this.selectedSize, this.selectedMaterial);

    body.innerHTML = `
      <div class="quick-view-grid">
        <!-- Gallery / SVG poster -->
        <div class="quick-view-gallery">
          <div class="quick-view-main-img">
            ${renderProductMedia(product, false)}
          </div>
        </div>

        <!-- Info details -->
        <div class="quick-view-info">
          <div class="product-cat" style="margin-bottom: 0.5rem;">${product.category}</div>
          <h3 class="quick-view-title">${product.title}</h3>
          
          <div class="quick-view-price" id="modal-price-display">₹${currentPrice.toFixed(2)}</div>
          
          <p class="quick-view-desc">${product.description}</p>
          
          <!-- Variant Configurator: Sizes -->
          <div class="variant-group">
            <span class="variant-label">Select Poster Size</span>
            <div class="variant-options">
              ${sizes.map(size => `
                <button class="variant-btn size-select-btn ${size.code === this.selectedSize ? 'selected' : ''}" data-code="${size.code}">
                  ${size.name} ${size.priceModifier > 0 ? `(+₹${size.priceModifier.toFixed(2)})` : ''}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Variant Configurator: Materials -->
          <div class="variant-group">
            <span class="variant-label">Select Material Type</span>
            <div class="variant-options">
              ${materials.map(mat => `
                <button class="variant-btn material-select-btn ${mat.code === this.selectedMaterial ? 'selected' : ''}" data-code="${mat.code}">
                  ${mat.name} ${mat.priceModifier > 0 ? `(+₹${mat.priceModifier.toFixed(2)})` : ''}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Add to Cart row -->
          <div style="display: flex; align-items: center; gap: 1.5rem; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">
            <div class="quantity-picker" style="height: 42px;">
              <button class="qty-btn" id="modal-qty-minus" style="width: 36px; height: 100%;">-</button>
              <div class="qty-val" id="modal-qty-val" style="width: 44px; font-size: 1rem;">1</div>
              <button class="qty-btn" id="modal-qty-plus" style="width: 36px; height: 100%;">+</button>
            </div>
            <button class="btn btn-primary" id="modal-add-to-cart-btn" style="flex: 1; height: 42px; padding: 0;">Add to Cart</button>
          </div>
          
          <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 1rem; display: flex; gap: 1rem;">
            <span>SKU: ${product.sku}</span>
            <span>Compliance: ${product.compliance.join(', ')}</span>
          </div>
        </div>
      </div>
    `;

    this.setupListeners();
  }

  render() {
    this.innerHTML = `
      <div class="modal-overlay">
        <div class="modal-content animate-fade-in">
          <button class="modal-close" id="modal-close-btn" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          <div class="modal-body" id="modal-body-content">
            <!-- Rendered dynamically -->
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('quick-view-modal', QuickViewModal);
export default QuickViewModal;
