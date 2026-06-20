import { getCart, updateQuantity, removeFromCart, getCartTotals } from './cart.js';
import { renderProductMedia } from './utils.js';

let isPromoApplied = false;
let promoDiscountPercent = 0;

document.addEventListener('DOMContentLoaded', () => {
  renderCartPage();
  setupPromoCode();
  
  // Listen for changes
  window.addEventListener('cart-updated', () => {
    renderCartPage();
  });
});

function renderCartPage() {
  const emptyState = document.getElementById('cart-page-empty');
  const contentGrid = document.getElementById('cart-page-content');
  const tableBody = document.getElementById('cart-table-body');
  const headerTitle = document.getElementById('cart-page-header-title');

  if (!tableBody || !emptyState || !contentGrid) return;

  const cart = getCart();
  const totals = getCartTotals();

  headerTitle.textContent = `Shopping Cart (${totals.totalItems})`;

  if (cart.length === 0) {
    emptyState.style.display = 'block';
    contentGrid.style.display = 'none';
    return;
  }

  emptyState.style.display = 'none';
  contentGrid.style.display = 'grid';

  // Render Table Rows
  tableBody.innerHTML = cart.map(item => {
    return `
      <tr style="border-bottom: 1px solid var(--border-color); vertical-align: middle;">
        <!-- Product Details -->
        <td style="padding: 1.5rem 0.5rem; display: flex; gap: 1.25rem; align-items: center;">
          <div style="width: 50px; height: 62px; flex-shrink: 0; border: 1px solid var(--border-color); border-radius: var(--radius-sm); overflow: hidden;">
            ${renderProductMedia(item, true)}
          </div>
          <div>
            <h4 style="font-family: var(--font-display); font-weight: 700; font-size: 1rem; color: var(--text-dark); margin-bottom: 0.25rem;">${item.title}</h4>
            <div style="font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.5rem;">Size: <strong>${item.sizeName}</strong> | Material: <strong>${item.materialName}</strong></div>
            <button class="cart-page-remove" data-id="${item.id}" style="background:none; border:none; color:#ef4444; font-size:0.75rem; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:0.25rem; padding:0;">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              Remove
            </button>
          </div>
        </td>

        <!-- Quantity Picker -->
        <td style="padding: 1.5rem 0.5rem; text-align: center;">
          <div class="quantity-picker" style="margin: 0 auto; display: inline-flex; height: 32px;">
            <button class="qty-btn val-minus" data-id="${item.id}" data-qty="${item.quantity}">-</button>
            <div class="qty-val" style="width: 36px; font-size: 0.9rem;">${item.quantity}</div>
            <button class="qty-btn val-plus" data-id="${item.id}" data-qty="${item.quantity}">+</button>
          </div>
        </td>

        <!-- Unit Price -->
        <td style="padding: 1.5rem 0.5rem; text-align: right; font-family: var(--font-display); font-weight: 600; color: var(--text-medium);">
          ₹${item.unitPrice.toFixed(2)}
        </td>

        <!-- Total Price -->
        <td style="padding: 1.5rem 0.5rem; text-align: right; font-family: var(--font-display); font-weight: 700; color: var(--primary-color);">
          ₹${(item.unitPrice * item.quantity).toFixed(2)}
        </td>
      </tr>
    `;
  }).join('');

  // Setup click events inside table
  setupTableListeners();

  // Render Order Summaries
  renderSummaryValues(totals);
}

function renderSummaryValues(totals) {
  // Base cost
  document.getElementById('summary-subtotal').textContent = `₹${totals.itemSubtotal.toFixed(2)}`;
  
  // Bulk discounts
  const discountRow = document.getElementById('summary-discount-row');
  const discountLabel = document.getElementById('summary-discount-label');
  const discountAmount = document.getElementById('summary-discount-amount');

  // Modify calculations if promo code is applied
  let finalSubtotal = totals.discountedSubtotal;
  let finalDiscount = totals.discountAmount;
  let currentDiscountPercent = totals.discountPercent;

  if (isPromoApplied) {
    currentDiscountPercent += promoDiscountPercent;
    const additionalSavings = totals.itemSubtotal * (promoDiscountPercent / 100);
    finalDiscount += additionalSavings;
    finalSubtotal = Math.max(0, totals.itemSubtotal - finalDiscount);
  }

  if (finalDiscount > 0) {
    discountRow.style.display = 'flex';
    discountLabel.textContent = `Discount Savings (${currentDiscountPercent}%):`;
    discountAmount.textContent = `-₹${finalDiscount.toFixed(2)}`;
  } else {
    discountRow.style.display = 'none';
  }

  // Shipping
  const shippingDisplay = document.getElementById('summary-shipping');
  if (totals.shipping === 0) {
    shippingDisplay.innerHTML = `<span style="color: green; font-weight: 800;">FREE</span>`;
  } else {
    shippingDisplay.textContent = `₹${totals.shipping.toFixed(2)}`;
  }

  // GST 18%
  const updatedGst = Number((finalSubtotal * 0.18).toFixed(2));
  document.getElementById('summary-gst').textContent = `₹${updatedGst.toFixed(2)}`;

  // Final total
  const finalTotal = Number((finalSubtotal + totals.shipping + updatedGst).toFixed(2));
  document.getElementById('summary-total').textContent = `₹${finalTotal.toFixed(2)}`;
}

function setupTableListeners() {
  // Quantity pickers
  document.querySelectorAll('.val-minus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const qty = Number(btn.getAttribute('data-qty'));
      updateQuantity(id, qty - 1);
    });
  });

  document.querySelectorAll('.val-plus').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      const qty = Number(btn.getAttribute('data-qty'));
      updateQuantity(id, qty + 1);
    });
  });

  // Remove buttons
  document.querySelectorAll('.cart-page-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      if (confirm('Are you sure you want to remove this safety poster from your cart?')) {
        removeFromCart(id);
      }
    });
  });
}

function setupPromoCode() {
  const applyBtn = document.getElementById('promo-code-apply-btn');
  const codeInput = document.getElementById('promo-code-input');
  const statusDisplay = document.getElementById('promo-code-status');

  if (!applyBtn || !codeInput || !statusDisplay) return;

  applyBtn.addEventListener('click', () => {
    const code = codeInput.value.trim().toUpperCase();

    if (isPromoApplied) {
      // Remove promo
      isPromoApplied = false;
      promoDiscountPercent = 0;
      applyBtn.textContent = 'Apply';
      applyBtn.className = 'btn btn-secondary';
      codeInput.disabled = false;
      codeInput.value = '';
      statusDisplay.textContent = 'Promo code removed.';
      statusDisplay.style.color = 'var(--text-muted)';
      renderCartPage();
      return;
    }

    if (code === 'SAFEWORK' || code === 'OSHA10') {
      isPromoApplied = true;
      promoDiscountPercent = 10;
      applyBtn.textContent = 'Remove';
      applyBtn.className = 'btn btn-outline';
      applyBtn.style.color = '#ef4444';
      applyBtn.style.borderColor = '#ef4444';
      codeInput.disabled = true;
      statusDisplay.textContent = 'Promo SAFEWORK applied: 10% Extra Discount!';
      statusDisplay.style.color = 'green';
      statusDisplay.style.fontWeight = 'bold';
      renderCartPage();
    } else if (code) {
      statusDisplay.textContent = 'Invalid promo code. Try "SAFEWORK" for 10% off.';
      statusDisplay.style.color = 'red';
      statusDisplay.style.fontWeight = 'bold';
    }
  });
}
