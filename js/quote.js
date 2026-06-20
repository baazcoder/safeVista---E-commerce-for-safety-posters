document.addEventListener('DOMContentLoaded', () => {
  setupRFQForm();
  autoPopulateUser();
  setupLoginTrigger();
  window.addEventListener('auth-changed', handleAuthChange);
});

// Setup click trigger on RFQ page login button
function setupLoginTrigger() {
  const loginBtn = document.getElementById('quote-login-btn');
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
  const loginPrompt = document.getElementById('quote-login-prompt');

  if (currentUserJson) {
    autoPopulateUser();
  } else {
    if (loginPrompt) loginPrompt.style.display = 'flex';
    
    // Clear fields
    const nameField = document.getElementById('q-name');
    const emailField = document.getElementById('q-email');
    const phoneField = document.getElementById('q-phone');
    const companyField = document.getElementById('q-company');
    const gstField = document.getElementById('q-gst');

    if (nameField) nameField.value = '';
    if (emailField) emailField.value = '';
    if (phoneField) phoneField.value = '';
    if (companyField) companyField.value = '';
    if (gstField) gstField.value = '';
  }
}

// Auto-populate user fields if logged in
function autoPopulateUser() {
  const currentUserJson = localStorage.getItem('safevista_currentUser');
  const loginPrompt = document.getElementById('quote-login-prompt');
  
  if (!currentUserJson) {
    if (loginPrompt) loginPrompt.style.display = 'flex';
    return;
  }

  if (loginPrompt) loginPrompt.style.display = 'none';

  try {
    const user = JSON.parse(currentUserJson);
    const nameField = document.getElementById('q-name');
    const emailField = document.getElementById('q-email');
    const phoneField = document.getElementById('q-phone');
    const companyField = document.getElementById('q-company');
    const gstField = document.getElementById('q-gst');
    
    if (nameField && user.name) nameField.value = user.name;
    if (emailField && user.email) emailField.value = user.email;
    if (phoneField && user.phone) phoneField.value = user.phone;
    if (companyField && user.company) companyField.value = user.company;
    if (gstField && user.gstin) gstField.value = user.gstin;
  } catch (e) {
    console.error('Error auto-populating RFQ user:', e);
  }
}

function setupRFQForm() {
  const form = document.getElementById('rfq-quote-form');
  const successNotice = document.getElementById('quote-success-notice');

  if (!form || !successNotice) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Validate Text Fields
    const name = document.getElementById('q-name');
    const email = document.getElementById('q-email');
    const phone = document.getElementById('q-phone');
    const company = document.getElementById('q-company');
    const gst = document.getElementById('q-gst');
    const qty = document.getElementById('q-qty');
    const brand = document.getElementById('q-brand');

    if (!name.value.trim()) { alert('Full name is required.'); name.focus(); return; }
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { alert('Please enter a valid corporate email.'); email.focus(); return; }
    if (!phone.value.match(/^\+?[0-9\s-]{10,15}$/)) { alert('Please enter a valid phone number.'); phone.focus(); return; }
    if (!company.value.trim()) { alert('Company name is required.'); company.focus(); return; }
    
    // Validate GST length if provided
    if (gst.value.trim() && gst.value.trim().length !== 15) {
      alert('GSTIN must be exactly 15 characters.');
      gst.focus();
      return;
    }

    if (!qty.value) { alert('Please select your estimated order quantity.'); qty.focus(); return; }
    if (!brand.value) { alert('Please select your branding options.'); brand.focus(); return; }

    // 2. Validate Size Checkboxes
    const selectedSizes = Array.from(document.querySelectorAll('input[name="q-size"]:checked'));
    if (selectedSizes.length === 0) {
      alert('Please select at least one required poster size.');
      return;
    }

    // 3. Validate Material Checkboxes
    const selectedMaterials = Array.from(document.querySelectorAll('input[name="q-mat"]:checked'));
    if (selectedMaterials.length === 0) {
      alert('Please select at least one required material type.');
      return;
    }

    // All validated, show success notice
    const rfqId = `RFQ-${Math.floor(10000 + Math.random() * 90000)}`;
    successNotice.style.display = 'block';
    successNotice.innerHTML = `
      <strong>RFQ Submitted Successfully!</strong><br>
      Your Quote Request ID is: <strong>${rfqId}</strong>.<br>
      Our industrial safety consultants will review your company requirements and email a complete PDF proposal matching corporate colors and logos within 4 business hours to <strong>${email.value}</strong>.
    `;

    // Reset Form
    form.reset();

    // Scroll to success notice
    successNotice.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
