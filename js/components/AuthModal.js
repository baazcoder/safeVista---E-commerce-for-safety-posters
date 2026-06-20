class AuthModal extends HTMLElement {
  constructor() {
    super();
    this.activeTab = 'login'; // 'login' or 'signup'
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
    
    // Listen to global open/close triggers
    window.addEventListener('open-auth-modal', () => this.open());
    window.addEventListener('close-auth-modal', () => this.close());

    // Auto-setup demo accounts if localStorage is empty
    this.seedDemoUsers();
  }

  seedDemoUsers() {
    const existingUsers = localStorage.getItem('safevista_users');
    if (!existingUsers) {
      const demoUsers = [
        {
          name: 'Amit Sharma',
          email: 'amit.sharma@company.com',
          phone: '9876543210',
          company: 'Acme Manufacturing India',
          gstin: '27AAAAA1111A1Z1',
          password: 'password123'
        }
      ];
      localStorage.setItem('safevista_users', JSON.stringify(demoUsers));
    }
  }

  open() {
    const overlay = this.querySelector('.modal-overlay');
    if (overlay) {
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    this.switchTab('login');
  }

  close() {
    const overlay = this.querySelector('.modal-overlay');
    if (overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
    this.clearErrors();
  }

  clearErrors() {
    const loginErr = this.querySelector('#login-error');
    const signupErr = this.querySelector('#signup-error');
    if (loginErr) loginErr.style.display = 'none';
    if (signupErr) signupErr.style.display = 'none';
  }

  switchTab(tab) {
    this.activeTab = tab;
    this.clearErrors();
    
    const loginTabBtn = this.querySelector('#tab-btn-login');
    const signupTabBtn = this.querySelector('#tab-btn-signup');
    const loginPanel = this.querySelector('#panel-login');
    const signupPanel = this.querySelector('#panel-signup');

    if (tab === 'login') {
      loginTabBtn.classList.add('active');
      signupTabBtn.classList.remove('active');
      loginPanel.style.display = 'block';
      signupPanel.style.display = 'none';
    } else {
      loginTabBtn.classList.remove('active');
      signupTabBtn.classList.add('active');
      loginPanel.style.display = 'none';
      signupPanel.style.display = 'block';
    }
  }

  setupEventListeners() {
    // Close on overlay click
    const overlay = this.querySelector('.modal-overlay');
    overlay.addEventListener('click', (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        this.close();
      }
    });

    // Close button click
    const closeBtn = this.querySelector('#auth-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }

    // Tab buttons
    const loginTabBtn = this.querySelector('#tab-btn-login');
    const signupTabBtn = this.querySelector('#tab-btn-signup');
    
    if (loginTabBtn && signupTabBtn) {
      loginTabBtn.addEventListener('click', () => this.switchTab('login'));
      signupTabBtn.addEventListener('click', () => this.switchTab('signup'));
    }

    // Forms submission handling
    const loginForm = this.querySelector('#form-login');
    const signupForm = this.querySelector('#form-signup');

    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleLogin();
      });
    }

    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSignup();
      });
    }
  }

  handleLogin() {
    const email = this.querySelector('#login-email').value.trim();
    const password = this.querySelector('#login-password').value;
    const errorEl = this.querySelector('#login-error');

    if (!email || !password) {
      this.showError(errorEl, 'Please fill in all fields.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('safevista_users') || '[]');
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

    if (user) {
      // Create session
      localStorage.setItem('safevista_currentUser', JSON.stringify({
        name: user.name,
        email: user.email,
        phone: user.phone,
        company: user.company || '',
        gstin: user.gstin || ''
      }));

      // Notify application of auth change
      window.dispatchEvent(new CustomEvent('auth-changed'));
      
      this.close();
      
      // Reset form
      this.querySelector('#form-login').reset();
    } else {
      this.showError(errorEl, 'Invalid corporate email address or password.');
    }
  }

  handleSignup() {
    const name = this.querySelector('#signup-name').value.trim();
    const email = this.querySelector('#signup-email').value.trim();
    const phone = this.querySelector('#signup-phone').value.trim();
    const company = this.querySelector('#signup-company').value.trim();
    const gstin = this.querySelector('#signup-gstin').value.trim().toUpperCase();
    const password = this.querySelector('#signup-password').value;
    const errorEl = this.querySelector('#signup-error');

    // Validation
    if (!name || !email || !phone || !password) {
      this.showError(errorEl, 'Name, Email, Phone and Password are required.');
      return;
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      this.showError(errorEl, 'Please enter a valid email address.');
      return;
    }

    if (!phone.match(/^\+?[0-9\s-]{10,15}$/)) {
      this.showError(errorEl, 'Please enter a valid 10-15 digit phone number.');
      return;
    }

    if (gstin && gstin.length !== 15) {
      this.showError(errorEl, 'GSTIN must be exactly 15 characters.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('safevista_users') || '[]');
    const userExists = users.some(u => u.email.toLowerCase() === email.toLowerCase());

    if (userExists) {
      this.showError(errorEl, 'An account with this email already exists.');
      return;
    }

    // Save new user
    const newUser = { name, email, phone, company, gstin, password };
    users.push(newUser);
    localStorage.setItem('safevista_users', JSON.stringify(users));

    // Create session
    localStorage.setItem('safevista_currentUser', JSON.stringify({
      name, email, phone, company, gstin
    }));

    // Notify application
    window.dispatchEvent(new CustomEvent('auth-changed'));

    this.close();
    this.querySelector('#form-signup').reset();
  }

  showError(el, message) {
    if (el) {
      el.textContent = message;
      el.style.display = 'block';
    }
  }

  render() {
    this.innerHTML = `
      <div class="modal-overlay auth-overlay">
        <div class="modal-content auth-content animate-fade-in">
          <!-- Close button -->
          <button class="modal-close" id="auth-close-btn" aria-label="Close Authentication Screen">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
          
          <div class="modal-body auth-modal-body">
            <!-- Auth Header Tabs -->
            <div class="auth-tabs">
              <button class="auth-tab-btn active" id="tab-btn-login">Login</button>
              <button class="auth-tab-btn" id="tab-btn-signup">Sign Up</button>
            </div>

            <!-- LOGIN PANEL -->
            <div class="auth-panel" id="panel-login">
              <h3 class="auth-title">Corporate Portal Log In</h3>
              <p class="auth-subtitle">Access your corporate GST settings and order history.</p>
              
              <div id="login-error" class="auth-error-block" style="display: none;"></div>
              
              <form id="form-login" novalidate>
                <div class="form-group">
                  <label for="login-email">Corporate Email Address *</label>
                  <input type="email" id="login-email" required class="form-control" placeholder="name@company.com">
                </div>
                <div class="form-group">
                  <label for="login-password">Password *</label>
                  <input type="password" id="login-password" required class="form-control" placeholder="••••••••">
                </div>
                <button type="submit" class="btn btn-primary auth-submit-btn" style="width: 100%; margin-top: 1rem;">Log In</button>
              </form>
              <div style="font-size: 0.8rem; text-align: center; margin-top: 1rem; color: var(--text-muted);">
                Demo Email: <strong>amit.sharma@company.com</strong> / Password: <strong>password123</strong>
              </div>
            </div>

            <!-- SIGN UP PANEL -->
            <div class="auth-panel" id="panel-signup" style="display: none;">
              <h3 class="auth-title">Register Corporate Partner Account</h3>
              <p class="auth-subtitle">Save GSTIN details for automated tax invoice claims.</p>
              
              <div id="signup-error" class="auth-error-block" style="display: none;"></div>

              <form id="form-signup" novalidate>
                <div class="form-group">
                  <label for="signup-name">Full Name *</label>
                  <input type="text" id="signup-name" required class="form-control" placeholder="Amit Sharma">
                </div>
                <div class="form-group">
                  <label for="signup-email">Corporate Email Address *</label>
                  <input type="email" id="signup-email" required class="form-control" placeholder="amit.sharma@company.com">
                </div>
                <div class="grid-cols-2" style="gap: 1rem;">
                  <div class="form-group">
                    <label for="signup-phone">Phone Number *</label>
                    <input type="tel" id="signup-phone" required class="form-control" placeholder="9876543210">
                  </div>
                  <div class="form-group">
                    <label for="signup-password">Password *</label>
                    <input type="password" id="signup-password" required class="form-control" placeholder="Min. 6 chars">
                  </div>
                </div>
                <div class="grid-cols-2" style="gap: 1rem;">
                  <div class="form-group">
                    <label for="signup-company">Company Name (Optional)</label>
                    <input type="text" id="signup-company" class="form-control" placeholder="Acme Manufacturing India">
                  </div>
                  <div class="form-group">
                    <label for="signup-gstin">GSTIN (Optional)</label>
                    <input type="text" id="signup-gstin" class="form-control" placeholder="15-char code" maxlength="15" style="text-transform: uppercase;">
                  </div>
                </div>
                <button type="submit" class="btn btn-accent auth-submit-btn" style="width: 100%; margin-top: 1rem;">Create Account</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('auth-modal', AuthModal);
export default AuthModal;
