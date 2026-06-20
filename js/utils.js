// SVG symbol library for safety signs and poster graphics
const SVG_SYMBOLS = {
  "safety-gear": `
    <circle cx="100" cy="95" r="30" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M85 85 Q100 50 115 85 Z" fill="currentColor"/>
    <rect x="90" y="85" width="20" height="25" fill="currentColor"/>
    <circle cx="85" cy="115" r="10" fill="currentColor"/>
    <circle cx="115" cy="115" r="10" fill="currentColor"/>
  `,
  "alert-triangle": `
    <polygon points="100,45 155,140 45,140" fill="none" stroke="currentColor" stroke-width="8" stroke-linejoin="round"/>
    <rect x="96" y="75" width="8" height="35" rx="3" fill="currentColor"/>
    <circle cx="100" cy="123" r="6" fill="currentColor"/>
  `,
  "goggles-boots": `
    <circle cx="75" cy="95" r="18" fill="none" stroke="currentColor" stroke-width="4"/>
    <circle cx="125" cy="95" r="18" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M93 95 L107 95" stroke="currentColor" stroke-width="4"/>
    <path d="M57 95 C57 75 143 75 143 95" fill="none" stroke="currentColor" stroke-width="3"/>
    <!-- Boots -->
    <path d="M70 125 L70 140 L85 140 L88 133 L78 125 Z" fill="currentColor"/>
    <path d="M120 125 L120 140 L135 140 L138 133 L128 125 Z" fill="currentColor"/>
  `,
  "harness": `
    <!-- Harness straps -->
    <path d="M75,50 L85,140 M125,50 L115,140" stroke="currentColor" stroke-width="6"/>
    <path d="M70,80 L130,80 M70,110 L130,110" stroke="currentColor" stroke-width="6"/>
    <path d="M85,140 L70,150 M115,140 L130,150" stroke="currentColor" stroke-width="4"/>
    <circle cx="100" cy="80" r="8" fill="none" stroke="currentColor" stroke-width="3"/>
    <!-- D-ring logo -->
    <path d="M95,65 L105,65 L100,75 Z" fill="currentColor"/>
  `,
  "family-shield": `
    <path d="M100,50 C130,50 145,65 145,100 C145,135 120,150 100,160 C80,150 55,135 55,100 C55,65 70,50 100,50 Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/>
    <path d="M90,120 L90,95 L110,95 L110,120" stroke="currentColor" stroke-width="4" fill="none"/>
    <circle cx="100" cy="80" r="10" fill="currentColor"/>
  `,
  "lightning": `
    <polygon points="115,50 75,105 102,105 85,160 130,95 103,95" fill="currentColor"/>
  `,
  "quote": `
    <path d="M70,90 C70,75 80,65 92,65 L92,80 C86,80 82,85 82,90 L92,90 L92,110 L70,110 Z" fill="currentColor"/>
    <path d="M110,90 C110,75 120,65 132,65 L132,80 C126,80 122,85 122,90 L132,90 L132,110 L110,110 Z" fill="currentColor"/>
  `,
  "coins-shield": `
    <circle cx="85" cy="100" r="16" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M85,90 L85,110 M78,95 L92,95" stroke="currentColor" stroke-width="3"/>
    <circle cx="115" cy="100" r="16" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M115,90 L115,110 M108,95 L122,95" stroke="currentColor" stroke-width="3"/>
    <path d="M65,70 L135,70 L100,140 Z" fill="none" stroke="currentColor" stroke-width="4"/>
  `,
  "fire-bell": `
    <path d="M70,120 C70,75 130,75 130,120 Z" fill="currentColor"/>
    <rect x="65" y="120" width="70" height="8" rx="3" fill="currentColor"/>
    <circle cx="100" cy="140" r="10" fill="currentColor"/>
    <path d="M100,128 L100,135" stroke="currentColor" stroke-width="3"/>
  `,
  "hose": `
    <circle cx="100" cy="95" r="28" fill="none" stroke="currentColor" stroke-width="8"/>
    <circle cx="100" cy="95" r="16" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M100,67 L100,123" stroke="currentColor" stroke-width="4"/>
    <path d="M72,95 L128,95" stroke="currentColor" stroke-width="4"/>
    <path d="M110,120 L135,145" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
  `,
  "road": `
    <path d="M90,50 L70,150 M110,50 L130,150" stroke="currentColor" stroke-width="6"/>
    <path d="M100,55 L100,70 M100,85 L100,105 M100,120 L100,145" stroke="currentColor" stroke-dasharray="8,6" stroke-width="3"/>
    <path d="M60,110 L140,110" stroke="currentColor" stroke-width="2"/>
  `,
  "gear-checklist": `
    <circle cx="75" cy="85" r="18" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M75,62 L75,70 M75,100 L75,108 M52,85 L60,85 M90,85 L98,85" stroke="currentColor" stroke-width="4"/>
    <!-- Checklist -->
    <rect x="110" y="65" width="30" height="40" rx="3" fill="none" stroke="currentColor" stroke-width="3"/>
    <path d="M116,75 L124,83 L134,68" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M115,95 L135,95" stroke="currentColor" stroke-width="3"/>
  `,
  "blanket": `
    <rect x="70" y="60" width="60" height="70" rx="4" fill="none" stroke="currentColor" stroke-width="4"/>
    <path d="M80,75 H120 M80,90 H120 M80,105 H120" stroke="currentColor" stroke-width="3"/>
    <path d="M90,130 L85,145 M110,130 L115,145" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  `
};

export function renderPosterSVG(design, isThumbnail = false) {
  const { type, bgColor, accentColor, textColor, headline, subline, symbol } = design;
  const stripeColor = type === "danger" ? "#C8102E" : (type === "warning" ? "#FFC72C" : accentColor);
  const symbolMarkup = SVG_SYMBOLS[symbol] || "";

  // Set sizing and fonts depending on card display or page display
  const headlineSize = isThumbnail ? "18px" : "24px";
  const sublineSize = isThumbnail ? "8px" : "11px";
  const titleY = isThumbnail ? "40" : "50";
  const subY = isThumbnail ? "165" : "235";
  const viewBox = isThumbnail ? "0 0 200 250" : "0 0 200 270";

  // Generate warning border stripes for warning/danger
  let borderMarkup = "";
  if (type === "danger" || type === "warning") {
    const fillPattern = type === "danger" ? "#000000" : "#000000";
    borderMarkup = `
      <!-- Top Stripes -->
      <g fill="${stripeColor}">
        <rect x="5" y="5" width="190" height="12"/>
      </g>
      <g fill="${fillPattern}">
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
    `;
  }

  // Draw main card
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="100%" height="100%" style="font-family: 'Outfit', sans-serif; user-select: none;">
      <!-- Main Background -->
      <rect x="0" y="0" width="100%" height="100%" fill="${bgColor}" rx="6"/>
      
      <!-- Poster Inner Border -->
      <rect x="5" y="5" width="190" height="${isThumbnail ? "240" : "260"}" fill="none" stroke="${accentColor}" stroke-width="2" rx="4"/>
      
      ${borderMarkup}

      <!-- Headline -->
      <text x="100" y="${titleY}" text-anchor="middle" fill="${textColor}" font-size="${headlineSize}" font-weight="900" letter-spacing="1">${headline}</text>
      
      <!-- Decorative Line -->
      <line x1="30" y1="${isThumbnail ? "52" : "67"}" x2="170" y2="${isThumbnail ? "52" : "67"}" stroke="${accentColor}" stroke-width="2"/>
      
      <!-- Symbol Wrapper -->
      <g color="${textColor}">
        ${symbolMarkup}
      </g>
      
      <!-- Subline Container -->
      <rect x="12" y="${isThumbnail ? "152" : "215"}" width="176" height="${isThumbnail ? "22" : "32"}" fill="${type === 'danger' || type === 'warning' ? '#0F172A' : stripeColor}" rx="3"/>
      <text x="100" y="${isThumbnail ? "166" : "235"}" text-anchor="middle" fill="${type === 'danger' || type === 'warning' ? '#FFFFFF' : bgColor}" font-size="${sublineSize}" font-weight="700" letter-spacing="0.5">${subline}</text>
    </svg>
  `;
}

export function renderProductMedia(product, isThumbnail = false) {
  if (product && product.image) {
    return `<img src="${product.image}" alt="${product.title || 'Product Image'}" class="product-img" style="width: 100%; height: 100%; object-fit: cover; display: block;">`;
  }
  return renderPosterSVG((product && product.design) || {}, isThumbnail);
}

