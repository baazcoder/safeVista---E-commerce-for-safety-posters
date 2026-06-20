import { posters, sizes, materials } from './db.js';
import { calculateItemPrice, addToCart, getBulkDiscountPercent } from './cart.js';
import { renderPosterSVG, renderProductMedia } from './utils.js';

let product = null;
let selectedSize = 's-a3';
let selectedMaterial = 'm-gloss';
let quantity = 1;

document.addEventListener('DOMContentLoaded', () => {
  initProduct();
});

function initProduct() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  
  // Find product by id
  product = posters.find(p => p.id === id);
  
  // Fallback if not found
  if (!product) {
    product = posters[0];
  }

  // Render elements
  renderStaticInfo();
  renderVariants();
  updateLivePrice();
  renderGallery();
  initTabs();
  renderRelatedGrid();
  setupListeners();
}

function renderStaticInfo() {
  // Breadcrumbs
  document.getElementById('breadcrumb-category').textContent = product.category;
  document.getElementById('breadcrumb-category').href = `shop.html?category=${encodeURIComponent(product.category)}`;
  document.getElementById('breadcrumb-title').textContent = product.title;

  // Header Titles
  document.getElementById('detail-title-display').textContent = product.title;
  document.getElementById('detail-sku-display').textContent = product.sku;
  document.getElementById('detail-compliance-display').textContent = product.compliance.join(', ');
  document.getElementById('detail-rating-text').textContent = `${product.rating} (${product.reviewsCount} verified reviews)`;

  // Badge Display
  const badgeEl = document.getElementById('detail-badge-display');
  if (product.badge) {
    badgeEl.textContent = product.badge;
    badgeEl.style.display = 'inline-flex';
    badgeEl.className = `badge ${product.badge === 'Best Seller' ? 'badge-orange' : 'badge-blue'}`;
  } else {
    badgeEl.style.display = 'none';
  }

  // Tech Specs panel info
  document.getElementById('detail-long-desc').textContent = product.description;
  document.getElementById('spec-sku').textContent = product.sku;
  document.getElementById('spec-compliance').textContent = product.compliance.join(', ');

  const featuresList = document.getElementById('detail-features-list');
  featuresList.innerHTML = product.features.map(f => `<li>${f}</li>`).join('');
}

function renderVariants() {
  // Sizes Buttons
  const sizeContainer = document.getElementById('detail-size-options');
  sizeContainer.innerHTML = sizes.map(size => `
    <button class="variant-btn size-opt-btn ${size.code === selectedSize ? 'selected' : ''}" data-code="${size.code}">
      ${size.name} ${size.priceModifier > 0 ? `(+₹${size.priceModifier.toFixed(2)})` : ''}
    </button>
  `).join('');

  // Materials Buttons
  const matContainer = document.getElementById('detail-material-options');
  matContainer.innerHTML = materials.map(mat => `
    <button class="variant-btn mat-opt-btn ${mat.code === selectedMaterial ? 'selected' : ''}" data-code="${mat.code}">
      ${mat.name} ${mat.priceModifier > 0 ? `(+₹${mat.priceModifier.toFixed(2)})` : ''}
    </button>
  `).join('');
}

function updateLivePrice() {
  const basePrice = product.price;
  
  // Calculate raw cost per single unit based on variants
  const unitPrice = calculateItemPrice(basePrice, selectedSize, selectedMaterial);
  
  // Calculate discount percentage based on quantity
  const discountPercent = getBulkDiscountPercent(quantity);
  const discountedUnitPrice = Number((unitPrice * (1 - discountPercent / 100)).toFixed(2));
  
  // Calculate final sum
  const totalPrice = Number((discountedUnitPrice * quantity).toFixed(2));

  // Render prices in DOM
  const priceDisplay = document.getElementById('detail-price-display');
  const unitDisplay = document.getElementById('detail-unit-price-display');
  const savingsNotice = document.getElementById('detail-savings-notice');

  priceDisplay.textContent = `₹${totalPrice.toFixed(2)}`;
  
  if (quantity > 1) {
    unitDisplay.textContent = `Unit Price: ₹${discountedUnitPrice.toFixed(2)} each (Qty: ${quantity})`;
  } else {
    unitDisplay.textContent = `Base Unit Price: ₹${unitPrice.toFixed(2)}`;
  }

  // Toggle bulk discount notices
  if (discountPercent > 0) {
    savingsNotice.style.display = 'block';
    savingsNotice.textContent = `Bulk Discount Applied: ${discountPercent}% Off (Saved ₹${((unitPrice - discountedUnitPrice) * quantity).toFixed(2)})`;
  } else {
    savingsNotice.style.display = 'none';
  }
}

function renderGallery() {
  const imgContainer = document.getElementById('detail-main-img-container');
  const primaryThumb = document.getElementById('thumb-primary');
  const blueprintThumb = document.getElementById('thumb-blueprint');
  const mockupThumb = document.getElementById('thumb-mockup');

  if (product.image) {
    imgContainer.innerHTML = `<img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;">`;

    primaryThumb.innerHTML = `<img src="${product.image}" alt="Primary" style="width: 100%; height: 100%; object-fit: cover; display: block;">`;
    blueprintThumb.innerHTML = `<img src="${product.image}" alt="Blueprint View" style="width: 100%; height: 100%; object-fit: cover; display: block; filter: invert(1) hue-rotate(180deg) saturate(2);">`;
    mockupThumb.innerHTML = `<img src="${product.image}" alt="Mockup View" style="width: 100%; height: 100%; object-fit: cover; display: block; filter: grayscale(100%);">`;

    const thumbs = [
      { btn: primaryThumb, style: "" },
      { btn: blueprintThumb, style: "filter: invert(1) hue-rotate(180deg) saturate(2);" },
      { btn: mockupThumb, style: "filter: grayscale(100%);" }
    ];

    thumbs.forEach(t => {
      t.btn.addEventListener('click', () => {
        thumbs.forEach(item => item.btn.classList.remove('active'));
        t.btn.classList.add('active');
        imgContainer.innerHTML = `<img src="${product.image}" alt="${product.title}" style="width: 100%; height: 100%; object-fit: cover; display: block; ${t.style}">`;
      });
    });
  } else {
    imgContainer.innerHTML = renderPosterSVG(product.design, false);

    // Primary
    primaryThumb.innerHTML = renderPosterSVG(product.design, true);

    // Blueprint wireframe visualization
    const blueprintDesign = {
      ...product.design,
      bgColor: "#0A2540",
      accentColor: "#00D4B2",
      textColor: "#00D4B2",
      headline: "BLUEPRINT VIEW"
    };
    blueprintThumb.innerHTML = renderPosterSVG(blueprintDesign, true);

    // Mockup/Monochrome visualization
    const mockupDesign = {
      ...product.design,
      bgColor: "#4A5568",
      accentColor: "#E2E8F0",
      textColor: "#FFFFFF",
      headline: "MONO SHIELD"
    };
    mockupThumb.innerHTML = renderPosterSVG(mockupDesign, true);

    // Add click toggle to thumbnail buttons
    const thumbs = [
      { btn: primaryThumb, design: product.design },
      { btn: blueprintThumb, design: blueprintDesign },
      { btn: mockupThumb, design: mockupDesign }
    ];

    thumbs.forEach(t => {
      t.btn.addEventListener('click', () => {
        thumbs.forEach(item => item.btn.classList.remove('active'));
        t.btn.classList.add('active');
        imgContainer.innerHTML = renderPosterSVG(t.design, false);
      });
    });
  }
}

function initTabs() {
  const tabBtns = document.querySelectorAll('.specs-tab-btn');
  const panels = {
    desc: document.getElementById('tab-desc-panel'),
    spec: document.getElementById('tab-spec-panel'),
    ship: document.getElementById('tab-ship-panel')
  };

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle button active classes
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Toggle panels
      const target = btn.getAttribute('data-tab');
      Object.keys(panels).forEach(key => {
        if (key === target) {
          panels[key].style.display = 'block';
        } else {
          panels[key].style.display = 'none';
        }
      });
    });
  });
}

function renderRelatedGrid() {
  const container = document.getElementById('related-posters-grid');
  if (!container) return;

  // Filter products in same category or featured, excluding active one
  let related = posters.filter(p => p.category === product.category && p.id !== product.id);
  
  if (related.length === 0) {
    related = posters.filter(p => p.id !== product.id).slice(0, 4);
  } else {
    related = related.slice(0, 4);
  }

  related.forEach(item => {
    const cardEl = document.createElement('product-card');
    cardEl.setAttribute('product-id', item.id);
    container.appendChild(cardEl);
  });
}

function setupListeners() {
  // Size buttons click handling
  const sizeOptions = document.getElementById('detail-size-options');
  if (sizeOptions) {
    sizeOptions.addEventListener('click', (e) => {
      const btn = e.target.closest('.size-opt-btn');
      if (btn) {
        document.querySelectorAll('.size-opt-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedSize = btn.getAttribute('data-code');
        updateLivePrice();
      }
    });
  }

  // Material buttons click handling
  const materialOptions = document.getElementById('detail-material-options');
  if (materialOptions) {
    materialOptions.addEventListener('click', (e) => {
      const btn = e.target.closest('.mat-opt-btn');
      if (btn) {
        document.querySelectorAll('.mat-opt-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedMaterial = btn.getAttribute('data-code');
        updateLivePrice();
      }
    });
  }

  // Quantity adjustments
  const qtyMinus = document.getElementById('detail-qty-minus');
  const qtyPlus = document.getElementById('detail-qty-plus');
  const qtyVal = document.getElementById('detail-qty-val');

  if (qtyMinus && qtyPlus && qtyVal) {
    qtyMinus.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        qtyVal.textContent = quantity;
        updateLivePrice();
      }
    });

    qtyPlus.addEventListener('click', () => {
      quantity++;
      qtyVal.textContent = quantity;
      updateLivePrice();
    });
  }

  // Add to Cart handler
  const cartBtn = document.getElementById('detail-add-to-cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      addToCart(product.id, selectedSize, selectedMaterial, quantity);
      // Trigger Cart Drawer to slide in
      window.dispatchEvent(new CustomEvent('open-cart-drawer'));
    });
  }
}
