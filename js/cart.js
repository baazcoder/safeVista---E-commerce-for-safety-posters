import { posters, sizes, materials, bulkDiscounts } from './db.js';

// Get Cart from LocalStorage
export function getCart() {
  const cartJson = localStorage.getItem('safevista_cart');
  return cartJson ? JSON.parse(cartJson) : [];
}

// Save Cart to LocalStorage
export function saveCart(cart) {
  localStorage.setItem('safevista_cart', JSON.stringify(cart));
  // Dispatch custom event to notify components
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: cart }));
}

// Calculate price of a single item with its modifiers
export function calculateItemPrice(basePrice, sizeCode, materialCode) {
  const sizeObj = sizes.find(s => s.code === sizeCode) || { priceModifier: 0 };
  const matObj = materials.find(m => m.code === materialCode) || { priceModifier: 0 };
  return Number((basePrice + sizeObj.priceModifier + matObj.priceModifier).toFixed(2));
}

// Get discount percentage based on quantity
export function getBulkDiscountPercent(quantity) {
  const tier = bulkDiscounts.find(t => quantity >= t.minQty && quantity <= t.maxQty);
  return tier ? tier.discountPercent : 0;
}

// Add Item to Cart
export function addToCart(productId, sizeCode = 's-a3', materialCode = 'm-gloss', quantity = 1) {
  const product = posters.find(p => p.id === productId);
  if (!product) return;

  const cart = getCart();
  const cartItemId = `${productId}_${sizeCode}_${materialCode}`;
  
  const existingItemIndex = cart.findIndex(item => item.id === cartItemId);
  const singleUnitPrice = calculateItemPrice(product.price, sizeCode, materialCode);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += Number(quantity);
  } else {
    const sizeName = (sizes.find(s => s.code === sizeCode) || {}).name || sizeCode;
    const materialName = (materials.find(m => m.code === materialCode) || {}).name || materialCode;

    cart.push({
      id: cartItemId,
      productId: product.id,
      title: product.title,
      category: product.category,
      basePrice: product.price,
      unitPrice: singleUnitPrice,
      sizeCode,
      sizeName,
      materialCode,
      materialName,
      quantity: Number(quantity),
      design: product.design,
      image: product.image
    });
  }

  saveCart(cart);
}

// Update quantity of an item
export function updateQuantity(cartItemId, newQty) {
  let cart = getCart();
  const itemIndex = cart.findIndex(item => item.id === cartItemId);
  
  if (itemIndex > -1) {
    if (newQty <= 0) {
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity = Number(newQty);
    }
    saveCart(cart);
  }
}

// Remove item from cart
export function removeFromCart(cartItemId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== cartItemId);
  saveCart(cart);
}

// Clear cart
export function clearCart() {
  saveCart([]);
}

// Get Cart Summary totals
export function getCartTotals() {
  const cart = getCart();
  let subtotal = 0;
  let totalItems = 0;

  cart.forEach(item => {
    subtotal += item.unitPrice * item.quantity;
    totalItems += item.quantity;
  });

  // Calculate bulk discount based on TOTAL items ordered or per item?
  // Industry standard for safety posters is bulk discount on the TOTAL count of posters
  const discountPercent = getBulkDiscountPercent(totalItems);
  const discountAmount = Number((subtotal * (discountPercent / 100)).toFixed(2));
  const discountedSubtotal = subtotal - discountAmount;

  // Shipping details: Free above ₹750, otherwise ₹100 shipping
  const shipping = totalItems > 0 && discountedSubtotal >= 750 ? 0 : (totalItems > 0 ? 100.00 : 0);
  
  // Tax (GST 18% as requested for corporate profile)
  const gst = Number((discountedSubtotal * 0.18).toFixed(2));
  
  const finalTotal = Number((discountedSubtotal + shipping + gst).toFixed(2));

  return {
    itemSubtotal: Number(subtotal.toFixed(2)),
    totalItems,
    discountPercent,
    discountAmount,
    discountedSubtotal: Number(discountedSubtotal.toFixed(2)),
    shipping,
    gst,
    total: finalTotal
  };
}
