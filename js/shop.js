import { categories, posters } from './db.js';

let activeCategory = 'all';
let activeSearch = '';
let activeComplianceFilters = [];
let activeSort = 'popularity';

document.addEventListener('DOMContentLoaded', () => {
  initUrlParams();
  renderCategoryFilterSidebar();
  setupFilterListeners();
  filterAndRender();
});

// Parse initial parameters from URL
function initUrlParams() {
  const params = new URLSearchParams(window.location.search);
  
  if (params.has('category')) {
    activeCategory = params.get('category');
  }
  
  if (params.has('search')) {
    activeSearch = params.get('search').trim();
    const searchStatusBox = document.getElementById('search-status-box');
    const searchStatusText = document.getElementById('search-status-text');
    if (searchStatusBox && searchStatusText) {
      searchStatusBox.style.display = 'flex';
      searchStatusText.textContent = `"${activeSearch}"`;
    }
    const searchBanner = document.getElementById('search-banner');
    const searchBannerText = document.getElementById('search-banner-text');
    if (searchBanner && searchBannerText) {
      searchBanner.style.display = 'flex';
      searchBannerText.textContent = `"${activeSearch}"`;
    }
  }
}

// Render categories radio filters in sidebar
function renderCategoryFilterSidebar() {
  const container = document.getElementById('category-filter-list');
  if (!container) return;

  const allSelected = activeCategory === 'all' ? 'checked' : '';

  container.innerHTML = `
    <label class="filter-checkbox-label">
      <input type="radio" name="category" value="all" ${allSelected}> All Categories
    </label>
  ` + categories.map(cat => {
    const isSelected = activeCategory === cat.name ? 'checked' : '';
    return `
      <label class="filter-checkbox-label">
        <input type="radio" name="category" value="${cat.name}" ${isSelected}> ${cat.name}
      </label>
    `;
  }).join('');
}

// Setup interactive UI change listeners
function setupFilterListeners() {
  // Category radio changes
  const categoryContainer = document.getElementById('category-filter-list');
  if (categoryContainer) {
    categoryContainer.addEventListener('change', (e) => {
      if (e.target.name === 'category') {
        activeCategory = e.target.value;
        filterAndRender();
      }
    });
  }

  // Compliance checkboxes
  document.querySelectorAll('input[name="compliance"]').forEach(cb => {
    cb.addEventListener('change', () => {
      activeComplianceFilters = Array.from(
        document.querySelectorAll('input[name="compliance"]:checked')
      ).map(el => el.value);
      filterAndRender();
    });
  });

  // Sort dropdown
  const sortSelector = document.getElementById('sort-selector-dropdown');
  if (sortSelector) {
    sortSelector.addEventListener('change', (e) => {
      activeSort = e.target.value;
      filterAndRender();
    });
  }

  // Clear search function
  const clearSearch = () => {
    activeSearch = '';
    const searchStatusBox = document.getElementById('search-status-box');
    if (searchStatusBox) searchStatusBox.style.display = 'none';
    const searchBanner = document.getElementById('search-banner');
    if (searchBanner) searchBanner.style.display = 'none';
    
    // Clear URL params without reloading
    const url = new URL(window.location);
    url.searchParams.delete('search');
    window.history.pushState({}, '', url);

    filterAndRender();
  };

  // Clear search button in sidebar
  const clearSearchBtn = document.getElementById('clear-search-btn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', clearSearch);
  }

  // Clear search button in main search banner
  const searchBannerCloseBtn = document.getElementById('search-banner-close-btn');
  if (searchBannerCloseBtn) {
    searchBannerCloseBtn.addEventListener('click', clearSearch);
  }

  // Reset all filters button
  const resetBtn = document.getElementById('reset-filters-btn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeCategory = 'all';
      activeSearch = '';
      activeComplianceFilters = [];
      activeSort = 'popularity';

      // Reset DOM fields
      const searchStatusBox = document.getElementById('search-status-box');
      if (searchStatusBox) searchStatusBox.style.display = 'none';
      const searchBanner = document.getElementById('search-banner');
      if (searchBanner) searchBanner.style.display = 'none';

      const sortSelector = document.getElementById('sort-selector-dropdown');
      if (sortSelector) sortSelector.value = 'popularity';

      document.querySelectorAll('input[name="compliance"]').forEach(cb => cb.checked = false);
      
      const allRadio = document.querySelector('input[name="category"][value="all"]');
      if (allRadio) allRadio.checked = true;

      // Reset URL query strings
      window.history.pushState({}, '', 'shop.html');

      filterAndRender();
    });
  }
}

// Core filtering and sorting process
function filterAndRender() {
  const grid = document.getElementById('shop-catalog-grid');
  const countDisplay = document.getElementById('product-count-display');
  const emptyState = document.getElementById('empty-catalog-state');
  
  if (!grid || !countDisplay || !emptyState) return;

  // Clear existing items in grid
  grid.innerHTML = '';

  // 1. FILTERING
  let filtered = posters.filter(product => {
    // Category check
    if (activeCategory !== 'all' && product.category !== activeCategory) {
      return false;
    }

    // Search query check
    if (activeSearch) {
      const q = activeSearch.toLowerCase();
      const matchTitle = product.title.toLowerCase().includes(q);
      const matchDesc = product.description.toLowerCase().includes(q);
      const matchCat = product.category.toLowerCase().includes(q);
      const matchSku = product.sku.toLowerCase().includes(q);
      const matchFeatures = product.features.some(f => f.toLowerCase().includes(q));

      if (!matchTitle && !matchDesc && !matchCat && !matchSku && !matchFeatures) {
        return false;
      }
    }

    // Compliance standard checks
    if (activeComplianceFilters.length > 0) {
      const matchCompliance = activeComplianceFilters.every(filter => 
        product.compliance.some(c => c.toUpperCase().includes(filter.toUpperCase()))
      );
      if (!matchCompliance) return false;
    }

    return true;
  });

  // 2. SORTING
  if (activeSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'title-asc') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else {
    // Default popularity: Sort descending by rating & reviews
    filtered.sort((a, b) => (b.rating * b.reviewsCount) - (a.rating * a.reviewsCount));
  }

  // 3. RENDERING
  countDisplay.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.style.display = 'none';
    emptyState.style.display = 'block';
  } else {
    grid.style.display = 'grid';
    emptyState.style.display = 'none';

    filtered.forEach(product => {
      const cardEl = document.createElement('product-card');
      cardEl.setAttribute('product-id', product.id);
      grid.appendChild(cardEl);
    });
  }

  renderActiveFilterChips();
}

// Render active filter chips above catalog grid
function renderActiveFilterChips() {
  const container = document.getElementById('active-chips-wrap');
  if (!container) return;

  container.innerHTML = '';

  const addChip = (label, onClear) => {
    const chip = document.createElement('div');
    chip.style.cssText = `
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background-color: var(--primary-light);
      color: var(--primary-color);
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.25rem 0.6rem;
      border-radius: var(--radius-sm);
      border: 1px solid rgba(15, 76, 129, 0.2);
    `;
    chip.innerHTML = `
      <span>${label}</span>
      <button style="background: none; border: none; cursor: pointer; color: var(--primary-color); display: flex; align-items: center; font-weight: 900;">&times;</button>
    `;
    chip.querySelector('button').addEventListener('click', onClear);
    container.appendChild(chip);
  };

  // Category chip
  if (activeCategory !== 'all') {
    addChip(`Category: ${activeCategory}`, () => {
      activeCategory = 'all';
      const allRadio = document.querySelector('input[name="category"][value="all"]');
      if (allRadio) allRadio.checked = true;
      filterAndRender();
    });
  }

  // Search chip
  if (activeSearch) {
    addChip(`Search: "${activeSearch}"`, () => {
      const clearSearchBtn = document.getElementById('clear-search-btn');
      if (clearSearchBtn) clearSearchBtn.click();
    });
  }

  // Compliance chips
  activeComplianceFilters.forEach(comp => {
    addChip(`Compliance: ${comp}`, () => {
      const cb = document.querySelector(`input[name="compliance"][value="${comp}"]`);
      if (cb) cb.checked = false;
      activeComplianceFilters = activeComplianceFilters.filter(item => item !== comp);
      filterAndRender();
    });
  });
}
