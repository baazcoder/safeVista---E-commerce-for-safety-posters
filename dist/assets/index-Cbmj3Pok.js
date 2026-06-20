(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();const f=[{id:"cat-1",name:"Health Safety Posters",count:12,icon:"health",image:"assets/health-safety-posters.png"},{id:"cat-2",name:"Safety Poster Packs",count:8,icon:"package",image:"assets/safety-posters-packs.png"},{id:"cat-3",name:"Safety Charts",count:15,icon:"chart",image:"assets/safety-charts.png"},{id:"cat-4",name:"Safety Signs",count:24,icon:"sign",image:"assets/safety-signs.png"},{id:"cat-5",name:"Glow Sign Boards",count:6,icon:"glow",image:"assets/glow-sign-boards.png"},{id:"cat-6",name:"Lean Tools",count:18,icon:"tools",image:"assets/lean-tools.png"},{id:"cat-7",name:"Office Posters",count:14,icon:"office",image:"assets/office-posters.png"},{id:"cat-8",name:"Identification Boards",count:9,icon:"tag",image:"assets/identification-boards.png"},{id:"cat-9",name:"Work Instructions & SOPs",count:20,icon:"file-text",image:"assets/work-instructions-sops.png"},{id:"cat-10",name:"Floor Signs Packs",count:7,icon:"layers",image:"assets/floor-sign-packs.png"},{id:"cat-11",name:"General Posters & Signs",count:32,icon:"alert",image:"assets/general-posters-signs.png"},{id:"cat-12",name:"Value Added Products",count:11,icon:"award",image:"assets/value-added-products.png"}],v=[{code:"s-a3",name:'A3 Size (12" x 18")',priceModifier:0},{code:"s-a2",name:'A2 Size (18" x 24")',priceModifier:80},{code:"s-a1",name:'A1 Size (24" x 36")',priceModifier:180}],y=[{code:"m-gloss",name:"Standard 220 GSM Gloss Paper",priceModifier:0},{code:"m-laminate",name:"Heavy Duty Laminated Paper (Waterproof)",priceModifier:45},{code:"m-vinyl",name:"Self-Adhesive Vinyl Sticker",priceModifier:60},{code:"m-alum",name:"Premium 3mm Aluminum Board",priceModifier:220}],F=[{minQty:1,maxQty:4,discountPercent:0},{minQty:5,maxQty:9,discountPercent:10},{minQty:10,maxQty:24,discountPercent:15},{minQty:25,maxQty:99999,discountPercent:25}],p=[{id:"fp-1",title:"Fire Extinguisher PASS Poster",category:"Health Safety Posters",price:150,rating:4.8,reviewsCount:42,sku:"SV-HSP-001",compliance:["OSHA 1910.157","ANSI Z535"],badge:"Featured",image:"assets/fire-extinguisher-pass.png",description:"Ensure all personnel are aware of the location and operating procedures of critical fire safety equipment. This high-visibility poster uses universally recognized icons and details the PASS method (Pull, Aim, Squeeze, Sweep) for operating fire extinguishers.",features:["Universally recognized safety icons","High-contrast colors for maximum visibility","Direct PASS instructions for emergency situations"],design:{type:"industrial",bgColor:"#0F4C81",accentColor:"#F97316",textColor:"#FFFFFF",headline:"FIRE EXTINGUISHER",subline:"P.A.S.S. METHOD OF OPERATION",symbol:"safety-gear"}},{id:"fp-2",title:"Forklift Safety Rules Poster",category:"General Posters & Signs",price:145,rating:4.9,reviewsCount:61,sku:"SV-GEN-002",compliance:["OSHA 1910.178"],badge:"Featured",image:"assets/forklift-safety-rules.png",description:"Promote continuous forklift hazard awareness and safe driving speeds on the shop floor. Features high-impact safety warning layouts that remind workers that forklift safety is a shared, constant responsibility.",features:["High contrast alert yellow warning design","Actionable forklift safety rules and speed limits","Great for loading bays, warehouses, and storage areas"],design:{type:"warning",bgColor:"#FFC72C",accentColor:"#0F172A",textColor:"#0F172A",headline:"BE ALERT",subline:"ACCIDENTS HURT - BE SAFE TODAY",symbol:"alert-triangle"}},{id:"fp-3",title:"Factories Act Compliance Poster",category:"Health Safety Posters",price:160,rating:4.7,reviewsCount:88,sku:"SV-PPE-003",compliance:["Factories Act 1948","OSHA 1910.132"],badge:"Featured",image:"assets/factories-act-compliance.png",description:"A comprehensive directive poster summarizing mandatory Factories Act regulations and required PPE, including helmets, protective goggles, gloves, safety boots, and ear protection. Zero excuses, 100% compliance.",features:["Standard blue mandatory compliance layout","Detailed graphic symbols of all safety guidelines","Clear compliance text block for factory inspectors"],design:{type:"mandatory",bgColor:"#004B87",accentColor:"#FFFFFF",textColor:"#FFFFFF",headline:"MANDATORY PPE",subline:"PROTECTIVE GEAR REQUIRED BEYOND THIS POINT",symbol:"goggles-boots"}},{id:"fp-4",title:"GHS Chemical Safety Poster",category:"General Posters & Signs",price:155,rating:4.8,reviewsCount:34,sku:"SV-FALL-004",compliance:["OSHA 1910.1200","GHS Standard"],badge:"Featured",image:"assets/ghs-chemical-safety.png",description:"Crucial for chemical storage sites, laboratories, and warehouses. Demonstrates the proper GHS hazard communication pictograms and hazard classification details.",features:["Detailed GHS pictograms chart","Clear chemical handling instructions","OSHA HazCom standard validation protocols"],design:{type:"danger",bgColor:"#C8102E",accentColor:"#FFFFFF",textColor:"#FFFFFF",headline:"FALL PROTECTION",subline:"USE YOUR HARNESS. TIE OFF AT ALL TIMES.",symbol:"harness"}},{id:"fp-5",title:"General Safety Posters",category:"General Posters & Signs",price:139,rating:4.6,reviewsCount:57,sku:"SV-WPS-005",compliance:["OSHA 1910 General Duties"],badge:"Featured",image:"assets/general-posters-signs.png",description:"A great general poster summarizing general safety guidelines: keeping walkways clear, reporting hazards instantly, and refusing unsafe work. Perfect for employee common areas.",features:["10 core employee safety rules list","Modern clean design suitable for corporate environments","Durable high contrast printing"],design:{type:"industrial",bgColor:"#0F4C81",accentColor:"#F97316",textColor:"#FFFFFF",headline:"WORK SAFE",subline:"YOUR FAMILY WAITS FOR YOU AT HOME",symbol:"family-shield"}},{id:"fp-6",title:"Lockout Tagout (LOTO) Control Poster",category:"Work Instructions & SOPs",price:180,rating:4.9,reviewsCount:29,sku:"SV-SOP-006",compliance:["OSHA 1910.147"],badge:"Featured",image:"assets/lockout-tagout-control.png",description:"Detailed daily inspection and execution guidelines for Lockout Tagout procedures. High-contrast hazard notices prevent accidental re-energization during maintenance.",features:["Detailed 6-step LOTO checklist","Energy source isolation instructions","Emergency lock validation guidelines"],design:{type:"warning",bgColor:"#FFC72C",accentColor:"#0F172A",textColor:"#0F172A",headline:"ELECTRICAL SAFETY",subline:"INSPECT EQUIPMENT BEFORE EVERY USE",symbol:"lightning"}},{id:"fp-7",title:"Corporate Leadership Posters",category:"Office Posters",price:240,rating:4.9,reviewsCount:19,sku:"SV-OFF-007",compliance:["Non-regulated"],badge:"Featured",image:"assets/office-posters.png",description:"Exquisite corporate leadership safety ethics poster. Fosters standard safety values, ownership, and responsibility within the executive suite and office corridors.",features:["Elegant dark corporate theme","Premium framing compatible design","Inspiring quotes from safety visionaries"],design:{type:"quote",bgColor:"#0F172A",accentColor:"#F97316",textColor:"#E2E8F0",headline:"LEADERSHIP",subline:"SAFETY IS NOT A PROPRIETARY GOAL. IT IS A CORE CULTURE.",symbol:"quote"}},{id:"fp-8",title:"Value Added Safety Products",category:"Value Added Products",price:120,rating:4.5,reviewsCount:22,sku:"SV-GEN-008",compliance:["Quality standards"],badge:"Featured",image:"assets/value-added-products.png",description:"A motivational slogans poster showing that investing in safety is gainful for businesses and individuals alike. Reduces incident rates by shifting site perspectives.",features:["Eye-catching modern industrial colors","Memorable rhyme style slogan text","Ideal for warehouse bulletin boards"],design:{type:"industrial",bgColor:"#0F4C81",accentColor:"#F97316",textColor:"#FFFFFF",headline:"SAFETY SAVES",subline:"PREVENTION IS CHEAPER THAN RECOVERY",symbol:"coins-shield"}},{id:"bs-1",title:"Emergency Glow Sign Board",category:"Glow Sign Boards",price:85,rating:4.9,reviewsCount:114,sku:"SV-SIGN-009",compliance:["OSHA 1910.37","ISO 7010-E001"],badge:"Best Seller",image:"assets/glow-sign-boards.png",description:"Highly visible fire alarm and emergency exit locator sign. Necessary for fire safety inspections. Features strong photoluminescent options for emergency dark settings.",features:["Standard emergency green identification color","Large directional indicators","UV stable and weatherproof for outdoor panels"],design:{type:"danger",bgColor:"#C8102E",accentColor:"#FFFFFF",textColor:"#FFFFFF",headline:"FIRE ALARM",subline:"IN CASE OF FIRE: PULL HANDLE & LEAVE BUILDING",symbol:"fire-bell"}},{id:"bs-2",title:"Standard Safety Sign Board",category:"Safety Signs",price:85,rating:4.8,reviewsCount:95,sku:"SV-SIGN-010",compliance:["OSHA 1910.145","ISO 7010-F002"],badge:"Best Seller",image:"assets/safety-signs.png",description:"Direct locator signs indicating the location of the fire hose, safety equipment, or warning zones. Designed to comply with municipal building codes and emergency management layouts.",features:["Vivid warning colors backing sheet","Simple, universally understood symbols","Available in adhesive vinyl stickers or rigid plastic boards"],design:{type:"danger",bgColor:"#C8102E",accentColor:"#FFFFFF",textColor:"#FFFFFF",headline:"FIRE HOSE",subline:"EMERGENCY REEL STATION STATION",symbol:"hose"}},{id:"bs-3",title:"Safety Poster Pack (8 Set)",category:"Safety Poster Packs",price:150,rating:4.7,reviewsCount:73,sku:"SV-OFF-011",compliance:["OSHA General Duty Clause"],badge:"Best Seller",image:"assets/safety-posters-packs.png",description:"An motivational layout map showing the road to organizational success. Highlights core concepts: safety diligence, continuous improvements, quality checks, and team synergy.",features:["Pack of 8 premium safety posters","Encourages team alignment and daily discipline","Great for meeting rooms and design offices"],design:{type:"quote",bgColor:"#0F4C81",accentColor:"#F97316",textColor:"#FFFFFF",headline:"THE ROAD TO SUCCESS",subline:"BUILT WITH DISCIPLINE, SAFETY AND TEAMWORK",symbol:"road"}},{id:"bs-4",title:"Machine Safety Charts",category:"Safety Charts",price:135,rating:4.8,reviewsCount:66,sku:"SV-GEN-012",compliance:["OSHA 1910.212"],badge:"Best Seller",image:"assets/safety-charts.png",description:"A memorable electrical and machinery safety poster featuring classic high-impact slogans: 'Think twice before you connect.' Reminds workers of machine hazard risk levels.",features:["Bold warning black-and-yellow striping","Catchy safety warnings checklist","Durable vinyl or heavy sheet paper support"],design:{type:"warning",bgColor:"#FFC72C",accentColor:"#0F172A",textColor:"#0F172A",headline:"DANGER VOLTAGE",subline:"THINK TWICE BEFORE YOU TOUCH. STAY SAFE.",symbol:"lightning"}},{id:"bs-5",title:"Identification Board Signs",category:"Identification Boards",price:165,rating:4.9,reviewsCount:104,sku:"SV-LEAN-013",compliance:["Lean 5S/6S Standard"],badge:"Best Seller",image:"assets/identification-boards.png",description:"A comprehensive checklist poster details the 6S methodologies: Sort, Set in Order, Shine, Standardize, Sustain, and Safety. Perfect for warehouse and identification labeling on production floors.",features:["Clear definitions for each department labeling step","Industrial efficiency focus icons","Highly readable grid structure"],design:{type:"industrial",bgColor:"#0F172A",accentColor:"#F97316",textColor:"#FFFFFF",headline:"6S METHODOLOGY",subline:"SORT - SET - SHINE - STANDARDIZE - SUSTAIN - SAFETY",symbol:"gear-checklist"}},{id:"bs-6",title:"Floor Sign Danger Plates",category:"Floor Signs Packs",price:85,rating:4.8,reviewsCount:52,sku:"SV-SIGN-014",compliance:["ISO 7010-W012"],badge:"Best Seller",image:"assets/floor-sign-packs.png",description:"Safety sign identifying the location of a fire blanket. Essential for industrial kitchens, laboratories, and hot work areas where splash fire danger is present.",features:["Bright high visibility red floor markers","Easy-to-read compliance instructions","Excellent resistance to moisture and chemical fumes"],design:{type:"danger",bgColor:"#C8102E",accentColor:"#FFFFFF",textColor:"#FFFFFF",headline:"FIRE BLANKET",subline:"EMERGENCY EQUIPMENT LOCATION",symbol:"blanket"}}];function h(){const s=localStorage.getItem("safevista_cart");return s?JSON.parse(s):[]}function w(s){localStorage.setItem("safevista_cart",JSON.stringify(s)),window.dispatchEvent(new CustomEvent("cart-updated",{detail:s}))}function g(s,t,e){const o=v.find(r=>r.code===t)||{priceModifier:0},i=y.find(r=>r.code===e)||{priceModifier:0};return Number((s+o.priceModifier+i.priceModifier).toFixed(2))}function A(s){const t=F.find(e=>s>=e.minQty&&s<=e.maxQty);return t?t.discountPercent:0}function C(s,t="s-a3",e="m-gloss",o=1){const i=p.find(l=>l.id===s);if(!i)return;const r=h(),n=`${s}_${t}_${e}`,a=r.findIndex(l=>l.id===n),c=g(i.price,t,e);if(a>-1)r[a].quantity+=Number(o);else{const l=(v.find(d=>d.code===t)||{}).name||t,u=(y.find(d=>d.code===e)||{}).name||e;r.push({id:n,productId:i.id,title:i.title,category:i.category,basePrice:i.price,unitPrice:c,sizeCode:t,sizeName:l,materialCode:e,materialName:u,quantity:Number(o),design:i.design,image:i.image})}w(r)}function S(s,t){let e=h();const o=e.findIndex(i=>i.id===s);o>-1&&(t<=0?e.splice(o,1):e[o].quantity=Number(t),w(e))}function q(s){let t=h();t=t.filter(e=>e.id!==s),w(t)}function m(){const s=h();let t=0,e=0;s.forEach(l=>{t+=l.unitPrice*l.quantity,e+=l.quantity});const o=A(e),i=Number((t*(o/100)).toFixed(2)),r=t-i,n=e>0&&r>=750?0:e>0?100:0,a=Number((r*.18).toFixed(2)),c=Number((r+n+a).toFixed(2));return{itemSubtotal:Number(t.toFixed(2)),totalItems:e,discountPercent:o,discountAmount:i,discountedSubtotal:Number(r.toFixed(2)),shipping:n,gst:a,total:c}}class M extends HTMLElement{constructor(){super(),this.activeTab="login"}connectedCallback(){this.render(),this.setupEventListeners(),window.addEventListener("open-auth-modal",()=>this.open()),window.addEventListener("close-auth-modal",()=>this.close()),this.seedDemoUsers()}seedDemoUsers(){if(!localStorage.getItem("safevista_users")){const e=[{name:"Amit Sharma",email:"amit.sharma@company.com",phone:"9876543210",company:"Acme Manufacturing India",gstin:"27AAAAA1111A1Z1",password:"password123"}];localStorage.setItem("safevista_users",JSON.stringify(e))}}open(){const t=this.querySelector(".modal-overlay");t&&(t.classList.add("open"),document.body.style.overflow="hidden"),this.switchTab("login")}close(){const t=this.querySelector(".modal-overlay");t&&(t.classList.remove("open"),document.body.style.overflow=""),this.clearErrors()}clearErrors(){const t=this.querySelector("#login-error"),e=this.querySelector("#signup-error");t&&(t.style.display="none"),e&&(e.style.display="none")}switchTab(t){this.activeTab=t,this.clearErrors();const e=this.querySelector("#tab-btn-login"),o=this.querySelector("#tab-btn-signup"),i=this.querySelector("#panel-login"),r=this.querySelector("#panel-signup");t==="login"?(e.classList.add("active"),o.classList.remove("active"),i.style.display="block",r.style.display="none"):(e.classList.remove("active"),o.classList.add("active"),i.style.display="none",r.style.display="block")}setupEventListeners(){this.querySelector(".modal-overlay").addEventListener("click",a=>{a.target.classList.contains("modal-overlay")&&this.close()});const e=this.querySelector("#auth-close-btn");e&&e.addEventListener("click",()=>this.close());const o=this.querySelector("#tab-btn-login"),i=this.querySelector("#tab-btn-signup");o&&i&&(o.addEventListener("click",()=>this.switchTab("login")),i.addEventListener("click",()=>this.switchTab("signup")));const r=this.querySelector("#form-login"),n=this.querySelector("#form-signup");r&&r.addEventListener("submit",a=>{a.preventDefault(),this.handleLogin()}),n&&n.addEventListener("submit",a=>{a.preventDefault(),this.handleSignup()})}handleLogin(){const t=this.querySelector("#login-email").value.trim(),e=this.querySelector("#login-password").value,o=this.querySelector("#login-error");if(!t||!e){this.showError(o,"Please fill in all fields.");return}const r=JSON.parse(localStorage.getItem("safevista_users")||"[]").find(n=>n.email.toLowerCase()===t.toLowerCase()&&n.password===e);r?(localStorage.setItem("safevista_currentUser",JSON.stringify({name:r.name,email:r.email,phone:r.phone,company:r.company||"",gstin:r.gstin||""})),window.dispatchEvent(new CustomEvent("auth-changed")),this.close(),this.querySelector("#form-login").reset()):this.showError(o,"Invalid corporate email address or password.")}handleSignup(){const t=this.querySelector("#signup-name").value.trim(),e=this.querySelector("#signup-email").value.trim(),o=this.querySelector("#signup-phone").value.trim(),i=this.querySelector("#signup-company").value.trim(),r=this.querySelector("#signup-gstin").value.trim().toUpperCase(),n=this.querySelector("#signup-password").value,a=this.querySelector("#signup-error");if(!t||!e||!o||!n){this.showError(a,"Name, Email, Phone and Password are required.");return}if(!e.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){this.showError(a,"Please enter a valid email address.");return}if(!o.match(/^\+?[0-9\s-]{10,15}$/)){this.showError(a,"Please enter a valid 10-15 digit phone number.");return}if(r&&r.length!==15){this.showError(a,"GSTIN must be exactly 15 characters.");return}const c=JSON.parse(localStorage.getItem("safevista_users")||"[]");if(c.some(d=>d.email.toLowerCase()===e.toLowerCase())){this.showError(a,"An account with this email already exists.");return}const u={name:t,email:e,phone:o,company:i,gstin:r,password:n};c.push(u),localStorage.setItem("safevista_users",JSON.stringify(c)),localStorage.setItem("safevista_currentUser",JSON.stringify({name:t,email:e,phone:o,company:i,gstin:r})),window.dispatchEvent(new CustomEvent("auth-changed")),this.close(),this.querySelector("#form-signup").reset()}showError(t,e){t&&(t.textContent=e,t.style.display="block")}render(){this.innerHTML=`
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
    `}}customElements.define("auth-modal",M);class P extends HTMLElement{constructor(){super()}connectedCallback(){if(!document.querySelector("auth-modal")){const t=document.createElement("auth-modal");document.body.appendChild(t)}this.render(),this.initActions(),window.addEventListener("cart-updated",()=>this.updateCartCount()),window.addEventListener("auth-changed",()=>{this.render(),this.initActions()})}initActions(){const t=this.querySelector("#header-search-form");t&&t.addEventListener("submit",a=>{a.preventDefault();const c=this.querySelector("#header-search-input").value.trim();window.location.href=`shop.html?search=${encodeURIComponent(c)}`});const e=this.querySelector("#menu-toggle"),o=this.querySelector("#nav-menu");e&&o&&e.addEventListener("click",()=>{o.classList.toggle("active"),o.classList.contains("active")?(o.style.display="flex",o.style.flexDirection="column",o.style.position="absolute",o.style.top="100%",o.style.left="0",o.style.right="0",o.style.backgroundColor="white",o.style.padding="1.5rem",o.style.boxShadow="var(--shadow-lg)",o.style.borderTop="1px solid var(--border-color)",o.style.gap="1rem",o.style.zIndex="99"):o.style.display=""});const i=this.querySelector("#header-cart-btn");i&&i.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("toggle-cart-drawer"))});const r=this.querySelector("#header-login-btn");r&&r.addEventListener("click",a=>{a.preventDefault(),window.dispatchEvent(new CustomEvent("open-auth-modal"))});const n=this.querySelector("#header-logout-btn");n&&n.addEventListener("click",a=>{a.preventDefault(),localStorage.removeItem("safevista_currentUser"),window.dispatchEvent(new CustomEvent("auth-changed"))})}updateCartCount(){const t=this.querySelector("#header-cart-badge");if(t){const e=m();t.textContent=e.totalItems,t.style.display=e.totalItems>0?"flex":"none"}}render(){const t=m(),e=t.totalItems>0?"flex":"none",o=localStorage.getItem("safevista_currentUser"),i=o?JSON.parse(o):null,r=window.location.pathname,n=r.endsWith("index.html")||r.endsWith("/")?"active":"",a=r.endsWith("shop.html")?"active":"",c=r.endsWith("quote.html")?"active":"";this.innerHTML=`
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
            GSTIN: ${i&&i.gstin?i.gstin:"27AAAAA1111A1Z1 (Registered Corporate Partner)"}
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
            <a href="index.html" class="nav-dropdown-trigger ${n}">Home</a>
            <div class="nav-dropdown">
              <span class="nav-dropdown-trigger ${a}" id="shop-trigger">
                Shop Categories
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              <div class="dropdown-menu">
                ${f.map(l=>`
                  <a href="shop.html?category=${encodeURIComponent(l.name)}" class="dropdown-item">${l.name}</a>
                `).join("")}
              </div>
            </div>
            <a href="quote.html" class="nav-dropdown-trigger ${c}">Bulk Quote</a>
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
              <span class="action-badge" id="header-cart-badge" style="display: ${e}">${t.totalItems}</span>
            </button>

            <!-- Login / Account Dropdown -->
            ${i?`
              <div class="nav-dropdown" style="display: flex; align-items: center;">
                <span class="nav-dropdown-trigger login-btn" style="cursor: pointer; gap: 0.35rem; padding: 0.5rem 0.75rem;">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  <span>Hi, ${i.name.split(" ")[0]}</span>
                </span>
                <div class="dropdown-menu" style="right: 0; left: auto; width: 200px;">
                  <div style="padding: 0.6rem 1.25rem; font-size: 0.8rem; border-bottom: 1px solid var(--border-color); color: var(--text-muted); font-weight: 500; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; text-align: left;" title="${i.email}">
                    ${i.email}
                  </div>
                  ${i.company?`<div style="padding: 0.6rem 1.25rem 0.3rem 1.25rem; font-size: 0.75rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase; text-align: left; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${i.company}</div>`:""}
                  <a href="#" id="header-logout-btn" class="dropdown-item" style="color: #ef4444; font-weight: 600; text-align: left;">Logout</a>
                </div>
              </div>
            `:`
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
    `}}customElements.define("site-header",P);class I extends HTMLElement{constructor(){super()}connectedCallback(){this.render();const t=this.querySelector("#footer-newsletter");t&&t.addEventListener("submit",e=>{e.preventDefault();const o=this.querySelector("#footer-newsletter-email").value.trim();o&&(alert(`Thank you for subscribing! Safety updates will be sent to: ${o}`),t.reset())})}render(){this.innerHTML=`
      <footer class="site-footer">
        <div class="container footer-main">
          <!-- Column 1: Corporate Profile -->
          <div class="footer-col">
            <a href="index.html" class="logo" style="color: white; margin-bottom: 1.5rem; display: inline-flex;">
              <div class="logo-icon" style="background-color: var(--accent-color); border-color: var(--primary-color);">SV</div>
              Safe<span style="color: var(--accent-color);">Vista</span>
            </a>
            <p style="color: #94a3b8; font-size: 0.9rem; margin-bottom: 1.5rem; line-height: 1.6;">
              Building safer workplaces and enforcing visual management compliance through premium industrial safety posters, signs, SOPs, and customized facility markings.
            </p>
            <div class="footer-socials">
              <a href="#" class="social-link" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" class="social-link" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" class="social-link" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div class="footer-col">
            <h4 class="footer-column-title">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="index.html">Home</a></li>
              <li><a href="shop.html">Shop Catalog</a></li>
              <li><a href="quote.html">Request Custom Quote</a></li>
              <li><a href="#">About SafeVista</a></li>
              <li><a href="#">Compliance Guidelines</a></li>
              <li><a href="#">FAQs & Support</a></li>
            </ul>
          </div>

          <!-- Column 3: Top Categories -->
          <div class="footer-col">
            <h4 class="footer-column-title">Shop Categories</h4>
            <ul class="footer-links">
              ${f.slice(0,6).map(t=>`
                <li><a href="shop.html?category=${encodeURIComponent(t.name)}">${t.name}</a></li>
              `).join("")}
            </ul>
          </div>

          <!-- Column 4: Contact & Newsletter -->
          <div class="footer-col">
            <h4 class="footer-column-title">Corporate Office</h4>
            <div class="footer-contact-info">
              <div class="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>SafeVista Industrial Park, Sector 4, Mumbai, MH - 400001, India</span>
              </div>
              <div class="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+91 98765 43210</span>
              </div>
              <div class="footer-contact-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>sales@safevista.com</span>
              </div>
            </div>
            
            <form id="footer-newsletter" style="margin-top: 1.5rem;">
              <p style="font-size: 0.85rem; font-weight: 600; margin-bottom: 0.5rem; color: #94a3b8;">Subscribe for OSHA compliance news & deals:</p>
              <div style="display: flex;">
                <input type="email" id="footer-newsletter-email" required placeholder="Safety Manager Email" style="flex: 1; padding: 0.5rem 0.75rem; border: none; border-radius: var(--radius-sm) 0 0 var(--radius-sm); font-size: 0.85rem;">
                <button type="submit" style="background-color: var(--accent-color); color: white; border: none; padding: 0.5rem 1rem; border-radius: 0 var(--radius-sm) var(--radius-sm) 0; font-weight: 600; cursor: pointer; font-size: 0.85rem;">JOIN</button>
              </div>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="container flex-between" style="flex-wrap: wrap; gap: 1rem;">
            <span>&copy; 2026 SafeVista Visual Management Systems. All Rights Reserved.</span>
            <span>Designed for Excellence. Made in India.</span>
          </div>
        </div>
      </footer>
    `}}customElements.define("site-footer",I);const $={"safety-gear":`
    <circle cx="100" cy="95" r="30" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M85 85 Q100 50 115 85 Z" fill="currentColor"/>
    <rect x="90" y="85" width="20" height="25" fill="currentColor"/>
    <circle cx="85" cy="115" r="10" fill="currentColor"/>
    <circle cx="115" cy="115" r="10" fill="currentColor"/>
  `,"alert-triangle":`
    <polygon points="100,45 155,140 45,140" fill="none" stroke="currentColor" stroke-width="8" stroke-linejoin="round"/>
    <rect x="96" y="75" width="8" height="35" rx="3" fill="currentColor"/>
    <circle cx="100" cy="123" r="6" fill="currentColor"/>
  `,"goggles-boots":`
    <circle cx="75" cy="95" r="18" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="125" cy="95" r="18" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M93 95 L107 95" stroke="currentColor" stroke-width="4"/>
    <path d="M57 95 C57 75 143 75 143 95" fill="none" stroke="currentColor" stroke-width="3"/>
    <!-- Boots -->
    <path d="M70 125 L70 140 L85 140 L88 133 L78 125 Z" fill="currentColor"/>
    <path d="M120 125 L120 140 L135 140 L138 133 L128 125 Z" fill="currentColor"/>
  `,harness:`
    <!-- Harness straps -->
    <path d="M75,50 L85,140 M125,50 L115,140" stroke="currentColor" stroke-width="6"/>
    <path d="M70,80 L130,80 M70,110 L130,110" stroke="currentColor" stroke-width="6"/>
    <path d="M85,140 L70,150 M115,140 L130,150" stroke="currentColor" stroke-width="4"/>
    <circle cx="100" cy="80" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
    <!-- D-ring logo -->
    <path d="M95,65 L105,65 L100,75 Z" fill="currentColor"/>
  `,"family-shield":`
    <path d="M100,50 C130,50 145,65 145,100 C145,135 120,150 100,160 C80,150 55,135 55,100 C55,65 70,50 100,50 Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>
    <path d="M90,120 L90,95 L110,95 L110,120" stroke="currentColor" stroke-width="4" fill="none"/>
    <circle cx="100" cy="80" r="10" fill="currentColor"/>
  `,lightning:`
    <polygon points="115,50 75,105 102,105 85,160 130,95 103,95" fill="currentColor"/>
  `,quote:`
    <path d="M70,90 C70,75 80,65 92,65 L92,80 C86,80 82,85 82,90 L92,90 L92,110 L70,110 Z" fill="currentColor"/>
    <path d="M110,90 C110,75 120,65 132,65 L132,80 C126,80 122,85 122,90 L132,90 L132,110 L110,110 Z" fill="currentColor"/>
  `,"coins-shield":`
    <circle cx="85" cy="100" r="16" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M85,90 L85,110 M78,95 L92,95" stroke="currentColor" stroke-width="3"/>
    <circle cx="115" cy="100" r="16" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M115,90 L115,110 M108,95 L122,95" stroke="currentColor" stroke-width="3"/>
    <path d="M65,70 L135,70 L100,140 Z" fill="none" stroke="currentColor" stroke-width="4"/>
  `,"fire-bell":`
    <path d="M70,120 C70,75 130,75 130,120 Z" fill="currentColor"/>
    <rect x="65" y="120" width="70" height="8" rx="3" fill="currentColor"/>
    <circle cx="100" cy="140" r="10" fill="currentColor"/>
    <path d="M100,128 L100,135" stroke="currentColor" stroke-width="3"/>
  `,hose:`
    <circle cx="100" cy="95" r="28" fill="none" stroke="currentColor" stroke-width="8"/>
    <circle cx="100" cy="95" r="16" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M100,67 L100,123" stroke="currentColor" stroke-width="4"/>
    <path d="M72,95 L128,95" stroke="currentColor" stroke-width="4"/>
    <path d="M110,120 L135,145" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
  `,road:`
    <path d="M90,50 L70,150 M110,50 L130,150" stroke="currentColor" stroke-width="6"/>
    <path d="M100,55 L100,70 M100,85 L100,105 M100,120 L100,145" stroke="currentColor" stroke-dasharray="8,6" stroke-width="3"/>
    <path d="M60,110 L140,110" stroke="currentColor" stroke-width="2"/>
  `,"gear-checklist":`
    <circle cx="75" cy="85" r="18" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M75,62 L75,70 M75,100 L75,108 M52,85 L60,85 M90,85 L98,85" stroke="currentColor" stroke-width="4"/>
    <!-- Checklist -->
    <rect x="110" y="65" width="30" height="40" rx="3" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M116,75 L124,83 L134,68" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M115,95 L135,95" stroke="currentColor" stroke-width="3"/>
  `,blanket:`
    <rect x="70" y="60" width="60" height="70" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M80,75 H120 M80,90 H120 M80,105 H120" stroke="currentColor" stroke-width="3"/>
    <path d="M90,130 L85,145 M110,130 L115,145" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  `};function T(s,t=!1){const{type:e,bgColor:o,accentColor:i,textColor:r,headline:n,subline:a,symbol:c}=s,l=e==="danger"?"#C8102E":e==="warning"?"#FFC72C":i,u=$[c]||"",d=t?"18px":"24px",x=t?"8px":"11px",E=t?"40":"50",L=t?"0 0 200 250":"0 0 200 270";let k="";return(e==="danger"||e==="warning")&&(k=`
      <!-- Top Stripes -->
      <g fill="${l}">
        <rect x="5" y="5" width="190" height="12"/>
      </g>
      <g fill="#000000">
        <polygon points="10,5 20,5 10,17"/>
        <polygon points="30,5 40,5 28,17 18,17"/>
        <polygon points="50,5 60,5 48,17 38,17"/>
        <polygon points="70,5 80,5 68,17 58,17"/>
        <polygon points="90,5 100,5 88,17 78,17"/>
        <polygon points="110,5 120,5 108,17 98,17"/>
        <polygon points="130,5 140,5 128,17 118,17"/>
        <polygon points="150,5 160,5 148,17 138,17"/>
        <polygon points="170,5 180,5 168,17 158,17"/>
        <polygon points="190,5 190,17 188,17 178,17"/>
      </g>
    `),`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${L}" width="100%" height="100%" style="font-family: 'Outfit', sans-serif; user-select: none;">
      <!-- Main Background -->
      <rect x="0" y="0" width="100%" height="100%" fill="${o}" rx="6"/>
      
      <!-- Poster Inner Border -->
      <rect x="5" y="5" width="190" height="${t?"240":"260"}" fill="none" stroke="${i}" stroke-width="2" rx="4"/>
      
      ${k}

      <!-- Headline -->
      <text x="100" y="${E}" text-anchor="middle" fill="${r}" font-size="${d}" font-weight="900" letter-spacing="1">${n}</text>
      
      <!-- Decorative Line -->
      <line x1="30" y1="${t?"52":"67"}" x2="170" y2="${t?"52":"67"}" stroke="${i}" stroke-width="2"/>
      
      <!-- Symbol Wrapper -->
      <g color="${r}">
        ${u}
      </g>
      
      <!-- Subline Container -->
      <rect x="12" y="${t?"152":"215"}" width="176" height="${t?"22":"32"}" fill="${e==="danger"||e==="warning"?"#0F172A":l}" rx="3"/>
      <text x="100" y="${t?"166":"235"}" text-anchor="middle" fill="${e==="danger"||e==="warning"?"#FFFFFF":o}" font-size="${x}" font-weight="700" letter-spacing="0.5">${a}</text>
    </svg>
  `}function b(s,t=!1){return s&&s.image?`<img src="${s.image}" alt="${s.title||"Product Image"}" class="product-img" style="width: 100%; height: 100%; object-fit: cover; display: block;">`:T(s&&s.design||{},t)}class O extends HTMLElement{static get observedAttributes(){return["product-id"]}constructor(){super()}connectedCallback(){this.render()}attributeChangedCallback(t,e,o){t==="product-id"&&e!==o&&this.render()}render(){const t=this.getAttribute("product-id"),e=p.find(n=>n.id===t);if(!e){this.innerHTML='<div style="color: red; padding: 1rem;">Product not found</div>';return}const o=e.badge,i=e.badge==="Best Seller"?"badge-orange":"badge-blue",r=(e.price*1.3).toFixed(2);this.innerHTML=`
      <div class="product-card" data-id="${e.id}">
        <!-- Badge -->
        ${o?`
          <div class="product-badge-wrap">
            <span class="badge ${i}">${e.badge}</span>
          </div>
        `:""}

        <!-- Visual Poster Area -->
        <div class="product-img-wrap" id="card-media-${e.id}">
          ${b(e,!0)}
          
          <!-- Hover Actions Overlay -->
          <div class="product-card-overlay">
            <button class="card-overlay-btn btn-quickview" title="Quick View" data-id="${e.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </button>
            <button class="card-overlay-btn btn-wishlist" title="Add to Wishlist" data-id="${e.id}">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button>
          </div>
        </div>

        <!-- Product Information -->
        <div class="product-info-wrap">
          <div class="product-cat">${e.category}</div>
          <a href="product-detail.html?id=${e.id}" class="product-card-title" title="${e.title}">${e.title}</a>
          
          <!-- Star Ratings -->
          <div class="product-rating">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" opacity="0.2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <span>(${e.reviewsCount})</span>
          </div>

          <!-- Bottom Price Row -->
          <div class="product-price-row">
            <div>
              <span class="product-card-price">₹${e.price.toFixed(2)}</span>
              <span class="product-price-row product-card-price-strike">₹${r}</span>
            </div>
            <button class="quick-add-btn" data-id="${e.id}">Add</button>
          </div>
        </div>
      </div>
    `,this.querySelector(".product-img-wrap").addEventListener("click",n=>{n.target.closest(".card-overlay-btn")||(window.location.href=`product-detail.html?id=${e.id}`)}),this.querySelector(".btn-quickview").addEventListener("click",n=>{n.stopPropagation(),window.dispatchEvent(new CustomEvent("open-quick-view",{detail:{productId:e.id}}))}),this.querySelector(".btn-wishlist").addEventListener("click",n=>{n.stopPropagation(),alert(`"${e.title}" has been added to your wishlist.`)}),this.querySelector(".quick-add-btn").addEventListener("click",n=>{n.stopPropagation(),C(e.id,"s-a3","m-gloss",1),window.dispatchEvent(new CustomEvent("open-cart-drawer"))})}}customElements.define("product-card",O);class B extends HTMLElement{constructor(){super(),this.isOpen=!1}connectedCallback(){this.render(),window.addEventListener("open-cart-drawer",()=>this.open()),window.addEventListener("toggle-cart-drawer",()=>this.toggle()),window.addEventListener("cart-updated",()=>this.updateContents()),this.addEventListener("click",t=>{t.target.classList.contains("cart-drawer-overlay")&&this.close()})}open(){this.isOpen=!0;const t=this.querySelector(".cart-drawer-overlay");t&&t.classList.add("open"),this.updateContents()}close(){this.isOpen=!1;const t=this.querySelector(".cart-drawer-overlay");t&&t.classList.remove("open")}toggle(){this.isOpen?this.close():this.open()}setupListeners(){const t=this.querySelector("#cart-drawer-close");t&&t.addEventListener("click",()=>this.close()),this.querySelectorAll(".qty-minus").forEach(e=>{e.addEventListener("click",()=>{const o=e.getAttribute("data-id"),i=Number(e.getAttribute("data-qty"));S(o,i-1)})}),this.querySelectorAll(".qty-plus").forEach(e=>{e.addEventListener("click",()=>{const o=e.getAttribute("data-id"),i=Number(e.getAttribute("data-qty"));S(o,i+1)})}),this.querySelectorAll(".cart-item-remove").forEach(e=>{e.addEventListener("click",()=>{const o=e.getAttribute("data-id");confirm("Remove item from cart?")&&q(o)})})}updateContents(){const t=this.querySelector("#drawer-items-list"),e=this.querySelector("#drawer-summary-block"),o=this.querySelector("#drawer-header-title");if(!t||!e)return;const i=h(),r=m();if(o.textContent=`Your Cart (${r.totalItems})`,i.length===0){t.innerHTML=`
        <div class="flex-center" style="flex-direction: column; height: 200px; color: var(--text-muted);">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
          <p style="font-weight: 600;">Your cart is empty</p>
          <a href="shop.html" class="btn btn-outline" style="margin-top: 1rem; padding: 0.5rem 1rem; font-size: 0.8rem;" id="drawer-shop-now-btn">Shop Now</a>
        </div>
      `,e.innerHTML=`
        <div class="cart-drawer-summary">
          <div class="cart-summary-row total">
            <span>Total:</span>
            <span>₹0.00</span>
          </div>
        </div>
        <button class="btn btn-primary" style="width: 100%;" disabled>Checkout</button>
      `;const a=this.querySelector("#drawer-shop-now-btn");a&&a.addEventListener("click",()=>this.close());return}t.innerHTML=i.map(a=>`
      <div class="cart-item">
        <div class="cart-item-img-wrap" style="width: 60px; height: 75px; flex-shrink: 0; border: 1px solid var(--border-color); border-radius: var(--radius-sm); overflow: hidden;">
          ${b(a,!0)}
        </div>
        <div class="cart-item-info">
          <h5 class="cart-item-title">${a.title}</h5>
          <div class="cart-item-variant">${a.sizeName} | ${a.materialName}</div>
          <div class="cart-item-bottom">
            <div class="quantity-picker">
              <button class="qty-btn qty-minus" data-id="${a.id}" data-qty="${a.quantity}">-</button>
              <div class="qty-val">${a.quantity}</div>
              <button class="qty-btn qty-plus" data-id="${a.id}" data-qty="${a.quantity}">+</button>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="cart-item-price">₹${(a.unitPrice*a.quantity).toFixed(2)}</span>
              <button class="cart-item-remove" data-id="${a.id}" title="Remove Item">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join(""),e.innerHTML=`
      <div class="cart-drawer-summary">
        <div class="cart-summary-row">
          <span>Items Subtotal (${r.totalItems}):</span>
          <span>₹${r.itemSubtotal.toFixed(2)}</span>
        </div>
        ${r.discountAmount>0?`
          <div class="cart-summary-row" style="color: var(--accent-color); font-weight: 600;">
            <span>Bulk Savings (${r.discountPercent}%):</span>
            <span>-₹${r.discountAmount.toFixed(2)}</span>
          </div>
        `:""}
        <div class="cart-summary-row">
          <span>Shipping:</span>
          <span>${r.shipping===0?'<span style="color: green; font-weight: bold;">FREE</span>':`₹${r.shipping.toFixed(2)}`}</span>
        </div>
        <div class="cart-summary-row">
          <span>GST (18%):</span>
          <span>₹${r.gst.toFixed(2)}</span>
        </div>
        <div class="cart-summary-row total">
          <span>Total (Incl. Tax):</span>
          <span>₹${r.total.toFixed(2)}</span>
        </div>
      </div>
      <div style="display: flex; gap: 0.5rem;">
        <a href="cart.html" class="btn btn-secondary" style="flex: 1; padding: 0.65rem 0; font-size: 0.8rem; text-align: center;" id="drawer-view-cart-btn">View Cart</a>
        <a href="checkout.html" class="btn btn-accent" style="flex: 1.2; padding: 0.65rem 0; font-size: 0.8rem; text-align: center;">Checkout</a>
      </div>
    `;const n=this.querySelector("#drawer-view-cart-btn");n&&n.addEventListener("click",()=>this.close()),this.setupListeners()}render(){this.innerHTML=`
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
    `,this.updateContents()}}customElements.define("cart-drawer",B);class N extends HTMLElement{constructor(){super(),this.selectedProduct=null,this.selectedSize="s-a3",this.selectedMaterial="m-gloss",this.quantity=1}connectedCallback(){this.render(),window.addEventListener("open-quick-view",t=>{const{productId:e}=t.detail;this.open(e)}),this.addEventListener("click",t=>{t.target.classList.contains("modal-overlay")&&this.close()})}open(t){const e=p.find(i=>i.id===t);if(!e)return;this.selectedProduct=e,this.selectedSize="s-a3",this.selectedMaterial="m-gloss",this.quantity=1;const o=this.querySelector(".modal-overlay");o&&o.classList.add("open"),this.updateModalContent()}close(){const t=this.querySelector(".modal-overlay");t&&t.classList.remove("open"),this.selectedProduct=null}updatePrice(){if(!this.selectedProduct)return;const t=this.querySelector("#modal-price-display");if(t){const e=g(this.selectedProduct.price,this.selectedSize,this.selectedMaterial);t.textContent=`₹${(e*this.quantity).toFixed(2)}`}}setupListeners(){const t=this.querySelector("#modal-close-btn");t&&t.addEventListener("click",()=>this.close()),this.querySelectorAll(".size-select-btn").forEach(n=>{n.addEventListener("click",()=>{this.querySelectorAll(".size-select-btn").forEach(a=>a.classList.remove("selected")),n.classList.add("selected"),this.selectedSize=n.getAttribute("data-code"),this.updatePrice()})}),this.querySelectorAll(".material-select-btn").forEach(n=>{n.addEventListener("click",()=>{this.querySelectorAll(".material-select-btn").forEach(a=>a.classList.remove("selected")),n.classList.add("selected"),this.selectedMaterial=n.getAttribute("data-code"),this.updatePrice()})});const e=this.querySelector("#modal-qty-minus"),o=this.querySelector("#modal-qty-plus"),i=this.querySelector("#modal-qty-val");e&&o&&i&&(e.addEventListener("click",()=>{this.quantity>1&&(this.quantity--,i.textContent=this.quantity,this.updatePrice())}),o.addEventListener("click",()=>{this.quantity++,i.textContent=this.quantity,this.updatePrice()}));const r=this.querySelector("#modal-add-to-cart-btn");r&&r.addEventListener("click",()=>{this.selectedProduct&&(C(this.selectedProduct.id,this.selectedSize,this.selectedMaterial,this.quantity),this.close(),window.dispatchEvent(new CustomEvent("open-cart-drawer")))})}updateModalContent(){const t=this.querySelector("#modal-body-content");if(!t||!this.selectedProduct)return;const e=this.selectedProduct,o=g(e.price,this.selectedSize,this.selectedMaterial);t.innerHTML=`
      <div class="quick-view-grid">
        <!-- Gallery / SVG poster -->
        <div class="quick-view-gallery">
          <div class="quick-view-main-img">
            ${b(e,!1)}
          </div>
        </div>

        <!-- Info details -->
        <div class="quick-view-info">
          <div class="product-cat" style="margin-bottom: 0.5rem;">${e.category}</div>
          <h3 class="quick-view-title">${e.title}</h3>
          
          <div class="quick-view-price" id="modal-price-display">₹${o.toFixed(2)}</div>
          
          <p class="quick-view-desc">${e.description}</p>
          
          <!-- Variant Configurator: Sizes -->
          <div class="variant-group">
            <span class="variant-label">Select Poster Size</span>
            <div class="variant-options">
              ${v.map(i=>`
                <button class="variant-btn size-select-btn ${i.code===this.selectedSize?"selected":""}" data-code="${i.code}">
                  ${i.name} ${i.priceModifier>0?`(+₹${i.priceModifier.toFixed(2)})`:""}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Variant Configurator: Materials -->
          <div class="variant-group">
            <span class="variant-label">Select Material Type</span>
            <div class="variant-options">
              ${y.map(i=>`
                <button class="variant-btn material-select-btn ${i.code===this.selectedMaterial?"selected":""}" data-code="${i.code}">
                  ${i.name} ${i.priceModifier>0?`(+₹${i.priceModifier.toFixed(2)})`:""}
                </button>
              `).join("")}
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
            <span>SKU: ${e.sku}</span>
            <span>Compliance: ${e.compliance.join(", ")}</span>
          </div>
        </div>
      </div>
    `,this.setupListeners()}render(){this.innerHTML=`
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
    `}}customElements.define("quick-view-modal",N);document.addEventListener("DOMContentLoaded",()=>{H(),R(),z(),V(),D()});function H(){const s=document.getElementById("homepage-categories-grid");s&&(s.innerHTML=f.map(t=>`
    <div class="category-card" data-category="${t.name}">
      <div class="category-img-wrap">
        <img src="${t.image}" alt="${t.name}" class="category-img" loading="lazy">
      </div>
      <h3 class="category-title">${t.name}</h3>
      <span class="category-count">${t.count} Products</span>
    </div>
  `).join(""),s.querySelectorAll(".category-card").forEach(t=>{t.addEventListener("click",()=>{const e=t.getAttribute("data-category");window.location.href=`shop.html?category=${encodeURIComponent(e)}`})}))}function R(){const s=document.getElementById("featured-products-grid");if(!s)return;p.filter(e=>e.badge==="Featured").forEach(e=>{const o=document.createElement("product-card");o.setAttribute("product-id",e.id),s.appendChild(o)})}function z(){const s=document.getElementById("bestsellers-products-grid");if(!s)return;p.filter(e=>e.badge==="Best Seller").forEach(e=>{const o=document.createElement("product-card");o.setAttribute("product-id",e.id),s.appendChild(o)})}function V(){const s=document.querySelectorAll(".testimonial-slide"),t=document.querySelectorAll(".carousel-dot");let e=0,o=null;if(s.length===0)return;function i(c){s.forEach(l=>l.classList.remove("active")),t.forEach(l=>l.classList.remove("active")),s[c].classList.add("active"),t[c].classList.add("active"),e=c}t.forEach((c,l)=>{c.addEventListener("click",()=>{i(l),a()})});function r(){let c=(e+1)%s.length;i(c)}function n(){o=setInterval(r,5e3)}function a(){clearInterval(o),n()}n()}function D(){const s=document.getElementById("homepage-newsletter");s&&s.addEventListener("submit",t=>{t.preventDefault();const e=s.querySelector("input").value.trim();e&&(alert(`Thanks! Your corporate safety manager email has been registered: ${e}`),s.reset())})}
