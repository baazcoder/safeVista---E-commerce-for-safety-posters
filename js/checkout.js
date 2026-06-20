import { getCart, getCartTotals, clearCart } from './cart.js';
import { renderProductMedia } from './utils.js';

let currentStep = 1;

document.addEventListener('DOMContentLoaded', () => {
  renderCheckoutSummary();
  setupNavigation();
  autoPopulateUser();
  setupLoginTrigger();
  window.addEventListener('auth-changed', handleAuthChange);
});

// Setup click trigger on checkout login button
function setupLoginTrigger() {
  const loginBtn = document.getElementById('checkout-login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('open-auth-modal'));
    });
  }
}

// Handle real-time auth changes
function handleAuthChange() {
  const currentUserJson = localStorage.getItem('safevista_currentUser');
  const loginPrompt = document.getElementById('checkout-login-prompt');

  if (currentUserJson) {
    autoPopulateUser();
  } else {
    if (loginPrompt) loginPrompt.style.display = 'flex';
    
    // Clear fields
    const emailField = document.getElementById('c-email');
    const phoneField = document.getElementById('c-phone');
    const companyField = document.getElementById('c-company');
    const gstinField = document.getElementById('c-gstin');
    const fnameField = document.getElementById('s-fname');
    const lnameField = document.getElementById('s-lname');

    if (emailField) emailField.value = '';
    if (phoneField) phoneField.value = '';
    if (companyField) companyField.value = '';
    if (gstinField) gstinField.value = '';
    if (fnameField) fnameField.value = '';
    if (lnameField) lnameField.value = '';
  }
}

// Auto-populate user fields if logged in
function autoPopulateUser() {
  const currentUserJson = localStorage.getItem('safevista_currentUser');
  const loginPrompt = document.getElementById('checkout-login-prompt');
  
  if (!currentUserJson) {
    if (loginPrompt) loginPrompt.style.display = 'flex';
    return;
  }

  if (loginPrompt) loginPrompt.style.display = 'none';

  try {
    const user = JSON.parse(currentUserJson);
    const emailField = document.getElementById('c-email');
    const phoneField = document.getElementById('c-phone');
    const companyField = document.getElementById('c-company');
    const gstinField = document.getElementById('c-gstin');
    
    if (emailField && user.email) emailField.value = user.email;
    if (phoneField && user.phone) phoneField.value = user.phone;
    if (companyField && user.company) companyField.value = user.company;
    if (gstinField && user.gstin) gstinField.value = user.gstin;

    if (user.name) {
      const nameParts = user.name.trim().split(/\s+/);
      const fnameField = document.getElementById('s-fname');
      const lnameField = document.getElementById('s-lname');
      
      if (fnameField && nameParts.length > 0) {
        fnameField.value = nameParts[0];
      }
      if (lnameField && nameParts.length > 1) {
        lnameField.value = nameParts.slice(1).join(' ');
      }
    }
  } catch (e) {
    console.error('Error auto-populating user:', e);
  }
}

// Render the right-hand summary sidebar
function renderCheckoutSummary() {
  const itemsList = document.getElementById('checkout-items-list');
  const subtotalDisplay = document.getElementById('c-subtotal');
  const discountRow = document.getElementById('c-discount-row');
  const discountLabel = document.getElementById('c-discount-label');
  const discountAmount = document.getElementById('c-discount-amount');
  const shippingDisplay = document.getElementById('c-shipping');
  const gstDisplay = document.getElementById('c-gst');
  const totalDisplay = document.getElementById('c-total');

  if (!itemsList) return;

  const cart = getCart();
  const totals = getCartTotals();

  // If cart is empty and we aren't on success step, redirect to shop
  if (cart.length === 0 && currentStep !== 4) {
    alert("Your cart is empty. Redirecting to shop.");
    window.location.href = "shop.html";
    return;
  }

  // Render items
  itemsList.innerHTML = cart.map(item => `
    <div style="display: flex; gap: 0.75rem; align-items: center;">
      <div style="width: 40px; height: 50px; flex-shrink: 0; border: 1px solid var(--border-color); border-radius: var(--radius-sm); overflow: hidden;">
        ${renderProductMedia(item, true)}
      </div>
      <div style="flex: 1; min-width: 0;">
        <h4 style="font-family: var(--font-display); font-weight: 700; font-size: 0.85rem; color: var(--text-dark); margin: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${item.title}</h4>
        <div style="font-size: 0.7rem; color: var(--text-muted);">Qty: ${item.quantity} | ${item.sizeName.split(' ')[0]}</div>
      </div>
      <span style="font-size: 0.85rem; font-weight: 600; color: var(--text-dark); flex-shrink: 0;">₹${(item.unitPrice * item.quantity).toFixed(2)}</span>
    </div>
  `).join('');

  // Update numbers
  subtotalDisplay.textContent = `₹${totals.itemSubtotal.toFixed(2)}`;

  if (totals.discountAmount > 0) {
    discountRow.style.display = 'flex';
    discountLabel.textContent = `Bulk Savings (${totals.discountPercent}%):`;
    discountAmount.textContent = `-₹${totals.discountAmount.toFixed(2)}`;
  } else {
    discountRow.style.display = 'none';
  }

  if (totals.shipping === 0) {
    shippingDisplay.innerHTML = `<span style="color: green; font-weight: 700;">FREE</span>`;
  } else {
    shippingDisplay.textContent = `₹${totals.shipping.toFixed(2)}`;
  }

  gstDisplay.textContent = `₹${totals.gst.toFixed(2)}`;
  totalDisplay.textContent = `₹${totals.total.toFixed(2)}`;
}

function setupNavigation() {
  const btnNext1 = document.getElementById('btn-next-1');
  const btnNext2 = document.getElementById('btn-next-2');
  const btnBack2 = document.getElementById('btn-back-2');
  const btnBack3 = document.getElementById('btn-back-3');
  const form = document.getElementById('checkout-multistep-form');

  const panel1 = document.getElementById('panel-step-1');
  const panel2 = document.getElementById('panel-step-2');
  const panel3 = document.getElementById('panel-step-3');

  const node1 = document.getElementById('step-node-1');
  const node2 = document.getElementById('step-node-2');
  const node3 = document.getElementById('step-node-3');

  // Step 1 to Step 2
  if (btnNext1) {
    btnNext1.addEventListener('click', () => {
      // Validate Step 1 Fields
      const email = document.getElementById('c-email');
      const phone = document.getElementById('c-phone');
      const gstin = document.getElementById('c-gstin');

      if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        alert('Please enter a valid email address.');
        email.focus();
        return;
      }
      if (!phone.value.match(/^\+?[0-9\s-]{10,15}$/)) {
        alert('Please enter a valid contact phone number.');
        phone.focus();
        return;
      }
      
      // If GSTIN provided, validate it has 15 characters
      if (gstin.value.trim() && gstin.value.trim().length !== 15) {
        alert('GSTIN must be exactly 15 characters.');
        gstin.focus();
        return;
      }

      // Transition Panels
      panel1.style.display = 'none';
      panel2.style.display = 'block';
      
      // Transition Nodes
      node1.classList.add('completed');
      node2.classList.add('active');
      
      currentStep = 2;
    });
  }

  // Step 2 Back to 1
  if (btnBack2) {
    btnBack2.addEventListener('click', () => {
      panel2.style.display = 'none';
      panel1.style.display = 'block';
      node2.classList.remove('active');
      node1.classList.remove('completed');
      currentStep = 1;
    });
  }

  // Step 2 to Step 3
  if (btnNext2) {
    btnNext2.addEventListener('click', () => {
      // Validate Step 2 Fields
      const fname = document.getElementById('s-fname');
      const lname = document.getElementById('s-lname');
      const address = document.getElementById('s-address');
      const city = document.getElementById('s-city');
      const state = document.getElementById('s-state');
      const zip = document.getElementById('s-zip');

      if (!fname.value.trim()) { alert('First name is required.'); fname.focus(); return; }
      if (!lname.value.trim()) { alert('Last name is required.'); lname.focus(); return; }
      if (!address.value.trim()) { alert('Street address is required.'); address.focus(); return; }
      if (!city.value.trim()) { alert('City is required.'); city.focus(); return; }
      if (!state.value.trim()) { alert('State is required.'); state.focus(); return; }
      if (!zip.value.match(/^[0-9]{6}$/)) { alert('Please enter a valid 6-digit ZIP code.'); zip.focus(); return; }

      // Transition Panels
      panel2.style.display = 'none';
      panel3.style.display = 'block';

      // Transition Nodes
      node2.classList.add('completed');
      node3.classList.add('active');

      currentStep = 3;
    });
  }

  // Step 3 Back to 2
  if (btnBack3) {
    btnBack3.addEventListener('click', () => {
      panel3.style.display = 'none';
      panel2.style.display = 'block';
      node3.classList.remove('active');
      node2.classList.remove('completed');
      currentStep = 2;
    });
  }

  // Form Submission (Success screen)
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Validate payment
      const cardholder = document.getElementById('p-cardholder');
      const cardnumber = document.getElementById('p-cardnumber');
      const expiry = document.getElementById('p-expiry');
      const cvv = document.getElementById('p-cvv');

      if (!cardholder.value.trim()) { alert('Cardholder name is required.'); cardholder.focus(); return; }
      if (!cardnumber.value.replace(/\s/g, '').match(/^[0-9]{16}$/)) { alert('Please enter a valid 16-digit card number.'); cardnumber.focus(); return; }
      if (!expiry.value.match(/^[0-9]{2}\/[0-9]{2}$/)) { alert('Please enter expiry date as MM/YY.'); expiry.focus(); return; }
      if (!cvv.value.match(/^[0-9]{3}$/)) { alert('Please enter a valid 3-digit CVV.'); cvv.focus(); return; }

      // Success order simulation
      processOrderSuccess();
    });
  }
}

function processOrderSuccess() {
  const totals = getCartTotals();
  const formLayout = document.getElementById('checkout-form-layout');
  const panel4 = document.getElementById('panel-step-4');

  const gstinInput = document.getElementById('c-gstin').value.trim().toUpperCase();
  const companyInput = document.getElementById('c-company').value.trim();
  const phoneInput = document.getElementById('c-phone').value.trim();

  // Populate dynamic invoice content
  const orderId = `SV-${Math.floor(100000 + Math.random() * 900000)}`;
  const dateStr = new Date().toISOString().split('T')[0];

  document.getElementById('rec-order-id').textContent = orderId;
  document.getElementById('rec-date').textContent = dateStr;
  document.getElementById('rec-gst').textContent = gstinInput || 'Not Provided (Standard Sale)';
  document.getElementById('rec-company').textContent = companyInput || 'Individual Purchaser';
  document.getElementById('rec-phone').textContent = phoneInput;
  document.getElementById('rec-amount').textContent = `₹${totals.total.toFixed(2)}`;

  // Mark all nodes complete
  document.getElementById('step-node-3').classList.add('completed');
  document.getElementById('step-node-4').classList.add('active');

  // Hide form view, show receipt view
  formLayout.style.display = 'none';
  panel4.style.display = 'block';

  currentStep = 4;

  // Clear local storage cart state
  clearCart();
}
