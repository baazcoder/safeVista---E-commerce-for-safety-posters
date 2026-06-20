// Categories list
export const categories = [
  { id: "cat-1", name: "Health Safety Posters", count: 12, icon: "health", image: "assets/health-safety-posters.png" },
  { id: "cat-2", name: "Safety Poster Packs", count: 8, icon: "package", image: "assets/safety-posters-packs.png" },
  { id: "cat-3", name: "Safety Charts", count: 15, icon: "chart", image: "assets/safety-charts.png" },
  { id: "cat-4", name: "Safety Signs", count: 24, icon: "sign", image: "assets/safety-signs.png" },
  { id: "cat-5", name: "Glow Sign Boards", count: 6, icon: "glow", image: "assets/glow-sign-boards.png" },
  { id: "cat-6", name: "Lean Tools", count: 18, icon: "tools", image: "assets/lean-tools.png" },
  { id: "cat-7", name: "Office Posters", count: 14, icon: "office", image: "assets/office-posters.png" },
  { id: "cat-8", name: "Identification Boards", count: 9, icon: "tag", image: "assets/identification-boards.png" },
  { id: "cat-9", name: "Work Instructions & SOPs", count: 20, icon: "file-text", image: "assets/work-instructions-sops.png" },
  { id: "cat-10", name: "Floor Signs Packs", count: 7, icon: "layers", image: "assets/floor-sign-packs.png" },
  { id: "cat-11", name: "General Posters & Signs", count: 32, icon: "alert", image: "assets/general-posters-signs.png" },
  { id: "cat-12", name: "Value Added Products", count: 11, icon: "award", image: "assets/value-added-products.png" }
];

// Sizes configuration
export const sizes = [
  { code: "s-a3", name: "A3 Size (12\" x 18\")", priceModifier: 0 },
  { code: "s-a2", name: "A2 Size (18\" x 24\")", priceModifier: 80.00 },
  { code: "s-a1", name: "A1 Size (24\" x 36\")", priceModifier: 180.00 }
];

// Materials configuration
export const materials = [
  { code: "m-gloss", name: "Standard 220 GSM Gloss Paper", priceModifier: 0 },
  { code: "m-laminate", name: "Heavy Duty Laminated Paper (Waterproof)", priceModifier: 45.00 },
  { code: "m-vinyl", name: "Self-Adhesive Vinyl Sticker", priceModifier: 60.00 },
  { code: "m-alum", name: "Premium 3mm Aluminum Board", priceModifier: 220.00 }
];

// Bulk discount tiers
export const bulkDiscounts = [
  { minQty: 1, maxQty: 4, discountPercent: 0 },
  { minQty: 5, maxQty: 9, discountPercent: 10 },
  { minQty: 10, maxQty: 24, discountPercent: 15 },
  { minQty: 25, maxQty: 99999, discountPercent: 25 }
];

// Posters Database
export const posters = [
  // --- FEATURED PRODUCTS ---
  {
    id: "fp-1",
    title: "Fire Extinguisher PASS Poster",
    category: "Health Safety Posters",
    price: 150.00,
    rating: 4.8,
    reviewsCount: 42,
    sku: "SV-HSP-001",
    compliance: ["OSHA 1910.157", "ANSI Z535"],
    badge: "Featured",
    image: "assets/fire-extinguisher-pass.png",
    description: "Ensure all personnel are aware of the location and operating procedures of critical fire safety equipment. This high-visibility poster uses universally recognized icons and details the PASS method (Pull, Aim, Squeeze, Sweep) for operating fire extinguishers.",
    features: [
      "Universally recognized safety icons",
      "High-contrast colors for maximum visibility",
      "Direct PASS instructions for emergency situations"
    ],
    design: {
      type: "industrial",
      bgColor: "#0F4C81",
      accentColor: "#F97316",
      textColor: "#FFFFFF",
      headline: "FIRE EXTINGUISHER",
      subline: "P.A.S.S. METHOD OF OPERATION",
      symbol: "safety-gear"
    }
  },
  {
    id: "fp-2",
    title: "Forklift Safety Rules Poster",
    category: "General Posters & Signs",
    price: 145.00,
    rating: 4.9,
    reviewsCount: 61,
    sku: "SV-GEN-002",
    compliance: ["OSHA 1910.178"],
    badge: "Featured",
    image: "assets/forklift-safety-rules.png",
    description: "Promote continuous forklift hazard awareness and safe driving speeds on the shop floor. Features high-impact safety warning layouts that remind workers that forklift safety is a shared, constant responsibility.",
    features: [
      "High contrast alert yellow warning design",
      "Actionable forklift safety rules and speed limits",
      "Great for loading bays, warehouses, and storage areas"
    ],
    design: {
      type: "warning",
      bgColor: "#FFC72C",
      accentColor: "#0F172A",
      textColor: "#0F172A",
      headline: "BE ALERT",
      subline: "ACCIDENTS HURT - BE SAFE TODAY",
      symbol: "alert-triangle"
    }
  },
  {
    id: "fp-3",
    title: "Factories Act Compliance Poster",
    category: "Health Safety Posters",
    price: 160.00,
    rating: 4.7,
    reviewsCount: 88,
    sku: "SV-PPE-003",
    compliance: ["Factories Act 1948", "OSHA 1910.132"],
    badge: "Featured",
    image: "assets/factories-act-compliance.png",
    description: "A comprehensive directive poster summarizing mandatory Factories Act regulations and required PPE, including helmets, protective goggles, gloves, safety boots, and ear protection. Zero excuses, 100% compliance.",
    features: [
      "Standard blue mandatory compliance layout",
      "Detailed graphic symbols of all safety guidelines",
      "Clear compliance text block for factory inspectors"
    ],
    design: {
      type: "mandatory",
      bgColor: "#004B87",
      accentColor: "#FFFFFF",
      textColor: "#FFFFFF",
      headline: "MANDATORY PPE",
      subline: "PROTECTIVE GEAR REQUIRED BEYOND THIS POINT",
      symbol: "goggles-boots"
    }
  },
  {
    id: "fp-4",
    title: "GHS Chemical Safety Poster",
    category: "General Posters & Signs",
    price: 155.00,
    rating: 4.8,
    reviewsCount: 34,
    sku: "SV-FALL-004",
    compliance: ["OSHA 1910.1200", "GHS Standard"],
    badge: "Featured",
    image: "assets/ghs-chemical-safety.png",
    description: "Crucial for chemical storage sites, laboratories, and warehouses. Demonstrates the proper GHS hazard communication pictograms and hazard classification details.",
    features: [
      "Detailed GHS pictograms chart",
      "Clear chemical handling instructions",
      "OSHA HazCom standard validation protocols"
    ],
    design: {
      type: "danger",
      bgColor: "#C8102E",
      accentColor: "#FFFFFF",
      textColor: "#FFFFFF",
      headline: "FALL PROTECTION",
      subline: "USE YOUR HARNESS. TIE OFF AT ALL TIMES.",
      symbol: "harness"
    }
  },
  {
    id: "fp-5",
    title: "General Safety Posters",
    category: "General Posters & Signs",
    price: 139.00,
    rating: 4.6,
    reviewsCount: 57,
    sku: "SV-WPS-005",
    compliance: ["OSHA 1910 General Duties"],
    badge: "Featured",
    image: "assets/general-posters-signs.png",
    description: "A great general poster summarizing general safety guidelines: keeping walkways clear, reporting hazards instantly, and refusing unsafe work. Perfect for employee common areas.",
    features: [
      "10 core employee safety rules list",
      "Modern clean design suitable for corporate environments",
      "Durable high contrast printing"
    ],
    design: {
      type: "industrial",
      bgColor: "#0F4C81",
      accentColor: "#F97316",
      textColor: "#FFFFFF",
      headline: "WORK SAFE",
      subline: "YOUR FAMILY WAITS FOR YOU AT HOME",
      symbol: "family-shield"
    }
  },
  {
    id: "fp-6",
    title: "Lockout Tagout (LOTO) Control Poster",
    category: "Work Instructions & SOPs",
    price: 180.00,
    rating: 4.9,
    reviewsCount: 29,
    sku: "SV-SOP-006",
    compliance: ["OSHA 1910.147"],
    badge: "Featured",
    image: "assets/lockout-tagout-control.png",
    description: "Detailed daily inspection and execution guidelines for Lockout Tagout procedures. High-contrast hazard notices prevent accidental re-energization during maintenance.",
    features: [
      "Detailed 6-step LOTO checklist",
      "Energy source isolation instructions",
      "Emergency lock validation guidelines"
    ],
    design: {
      type: "warning",
      bgColor: "#FFC72C",
      accentColor: "#0F172A",
      textColor: "#0F172A",
      headline: "ELECTRICAL SAFETY",
      subline: "INSPECT EQUIPMENT BEFORE EVERY USE",
      symbol: "lightning"
    }
  },
  {
    id: "fp-7",
    title: "Corporate Leadership Posters",
    category: "Office Posters",
    price: 240.00,
    rating: 4.9,
    reviewsCount: 19,
    sku: "SV-OFF-007",
    compliance: ["Non-regulated"],
    badge: "Featured",
    image: "assets/office-posters.png",
    description: "Exquisite corporate leadership safety ethics poster. Fosters standard safety values, ownership, and responsibility within the executive suite and office corridors.",
    features: [
      "Elegant dark corporate theme",
      "Premium framing compatible design",
      "Inspiring quotes from safety visionaries"
    ],
    design: {
      type: "quote",
      bgColor: "#0F172A",
      accentColor: "#F97316",
      textColor: "#E2E8F0",
      headline: "LEADERSHIP",
      subline: "SAFETY IS NOT A PROPRIETARY GOAL. IT IS A CORE CULTURE.",
      symbol: "quote"
    }
  },
  {
    id: "fp-8",
    title: "Value Added Safety Products",
    category: "Value Added Products",
    price: 120.00,
    rating: 4.5,
    reviewsCount: 22,
    sku: "SV-GEN-008",
    compliance: ["Quality standards"],
    badge: "Featured",
    image: "assets/value-added-products.png",
    description: "A motivational slogans poster showing that investing in safety is gainful for businesses and individuals alike. Reduces incident rates by shifting site perspectives.",
    features: [
      "Eye-catching modern industrial colors",
      "Memorable rhyme style slogan text",
      "Ideal for warehouse bulletin boards"
    ],
    design: {
      type: "industrial",
      bgColor: "#0F4C81",
      accentColor: "#F97316",
      textColor: "#FFFFFF",
      headline: "SAFETY SAVES",
      subline: "PREVENTION IS CHEAPER THAN RECOVERY",
      symbol: "coins-shield"
    }
  },

  // --- BEST SELLERS ---
  {
    id: "bs-1",
    title: "Emergency Glow Sign Board",
    category: "Glow Sign Boards",
    price: 85.00,
    rating: 4.9,
    reviewsCount: 114,
    sku: "SV-SIGN-009",
    compliance: ["OSHA 1910.37", "ISO 7010-E001"],
    badge: "Best Seller",
    image: "assets/glow-sign-boards.png",
    description: "Highly visible fire alarm and emergency exit locator sign. Necessary for fire safety inspections. Features strong photoluminescent options for emergency dark settings.",
    features: [
      "Standard emergency green identification color",
      "Large directional indicators",
      "UV stable and weatherproof for outdoor panels"
    ],
    design: {
      type: "danger",
      bgColor: "#C8102E",
      accentColor: "#FFFFFF",
      textColor: "#FFFFFF",
      headline: "FIRE ALARM",
      subline: "IN CASE OF FIRE: PULL HANDLE & LEAVE BUILDING",
      symbol: "fire-bell"
    }
  },
  {
    id: "bs-2",
    title: "Standard Safety Sign Board",
    category: "Safety Signs",
    price: 85.00,
    rating: 4.8,
    reviewsCount: 95,
    sku: "SV-SIGN-010",
    compliance: ["OSHA 1910.145", "ISO 7010-F002"],
    badge: "Best Seller",
    image: "assets/safety-signs.png",
    description: "Direct locator signs indicating the location of the fire hose, safety equipment, or warning zones. Designed to comply with municipal building codes and emergency management layouts.",
    features: [
      "Vivid warning colors backing sheet",
      "Simple, universally understood symbols",
      "Available in adhesive vinyl stickers or rigid plastic boards"
    ],
    design: {
      type: "danger",
      bgColor: "#C8102E",
      accentColor: "#FFFFFF",
      textColor: "#FFFFFF",
      headline: "FIRE HOSE",
      subline: "EMERGENCY REEL STATION STATION",
      symbol: "hose"
    }
  },
  {
    id: "bs-3",
    title: "Safety Poster Pack (8 Set)",
    category: "Safety Poster Packs",
    price: 150.00,
    rating: 4.7,
    reviewsCount: 73,
    sku: "SV-OFF-011",
    compliance: ["OSHA General Duty Clause"],
    badge: "Best Seller",
    image: "assets/safety-posters-packs.png",
    description: "An motivational layout map showing the road to organizational success. Highlights core concepts: safety diligence, continuous improvements, quality checks, and team synergy.",
    features: [
      "Pack of 8 premium safety posters",
      "Encourages team alignment and daily discipline",
      "Great for meeting rooms and design offices"
    ],
    design: {
      type: "quote",
      bgColor: "#0F4C81",
      accentColor: "#F97316",
      textColor: "#FFFFFF",
      headline: "THE ROAD TO SUCCESS",
      subline: "BUILT WITH DISCIPLINE, SAFETY AND TEAMWORK",
      symbol: "road"
    }
  },
  {
    id: "bs-4",
    title: "Machine Safety Charts",
    category: "Safety Charts",
    price: 135.00,
    rating: 4.8,
    reviewsCount: 66,
    sku: "SV-GEN-012",
    compliance: ["OSHA 1910.212"],
    badge: "Best Seller",
    image: "assets/safety-charts.png",
    description: "A memorable electrical and machinery safety poster featuring classic high-impact slogans: 'Think twice before you connect.' Reminds workers of machine hazard risk levels.",
    features: [
      "Bold warning black-and-yellow striping",
      "Catchy safety warnings checklist",
      "Durable vinyl or heavy sheet paper support"
    ],
    design: {
      type: "warning",
      bgColor: "#FFC72C",
      accentColor: "#0F172A",
      textColor: "#0F172A",
      headline: "DANGER VOLTAGE",
      subline: "THINK TWICE BEFORE YOU TOUCH. STAY SAFE.",
      symbol: "lightning"
    }
  },
  {
    id: "bs-5",
    title: "Identification Board Signs",
    category: "Identification Boards",
    price: 165.00,
    rating: 4.9,
    reviewsCount: 104,
    sku: "SV-LEAN-013",
    compliance: ["Lean 5S/6S Standard"],
    badge: "Best Seller",
    image: "assets/identification-boards.png",
    description: "A comprehensive checklist poster details the 6S methodologies: Sort, Set in Order, Shine, Standardize, Sustain, and Safety. Perfect for warehouse and identification labeling on production floors.",
    features: [
      "Clear definitions for each department labeling step",
      "Industrial efficiency focus icons",
      "Highly readable grid structure"
    ],
    design: {
      type: "industrial",
      bgColor: "#0F172A",
      accentColor: "#F97316",
      textColor: "#FFFFFF",
      headline: "6S METHODOLOGY",
      subline: "SORT - SET - SHINE - STANDARDIZE - SUSTAIN - SAFETY",
      symbol: "gear-checklist"
    }
  },
  {
    id: "bs-6",
    title: "Floor Sign Danger Plates",
    category: "Floor Signs Packs",
    price: 85.00,
    rating: 4.8,
    reviewsCount: 52,
    sku: "SV-SIGN-014",
    compliance: ["ISO 7010-W012"],
    badge: "Best Seller",
    image: "assets/floor-sign-packs.png",
    description: "Safety sign identifying the location of a fire blanket. Essential for industrial kitchens, laboratories, and hot work areas where splash fire danger is present.",
    features: [
      "Bright high visibility red floor markers",
      "Easy-to-read compliance instructions",
      "Excellent resistance to moisture and chemical fumes"
    ],
    design: {
      type: "danger",
      bgColor: "#C8102E",
      accentColor: "#FFFFFF",
      textColor: "#FFFFFF",
      headline: "FIRE BLANKET",
      subline: "EMERGENCY EQUIPMENT LOCATION",
      symbol: "blanket"
    }
  }
];
