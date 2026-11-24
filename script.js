// Product catalog (the "database" for this demo).
// Each product: id, name, category, price, oldPrice (optional, means "on sale"), rating, reviews,
// stock, emoji (used as the product picture), hue (tile colour), desc, added (higher = newer).
const PRODUCTS = [
  // Electronics
  {
    id: 1,
    name: "Wireless Noise-Cancelling Headphones",
    category: "Electronics",
    price: 89.99,
    oldPrice: 129.99,
    rating: 4.6,
    reviews: 1284,
    stock: 14,
    emoji: "🎧",
    hue: 228,
    added: 20,
    desc: "Over-ear headphones with active noise cancelling and up to 30 hours of battery life."
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    category: "Electronics",
    price: 149.0,
    oldPrice: null,
    rating: 4.4,
    reviews: 862,
    stock: 9,
    emoji: "⌚",
    hue: 215,
    added: 22,
    desc: "Tracks heart rate, sleep and workouts, with a bright always-on display."
  },
  {
    id: 3,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 59.5,
    oldPrice: null,
    rating: 4.5,
    reviews: 2010,
    stock: 31,
    emoji: "🔊",
    hue: 245,
    added: 12,
    desc: "Waterproof speaker with deep bass and 12 hours of playtime."
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 79.0,
    oldPrice: null,
    rating: 4.7,
    reviews: 956,
    stock: 18,
    emoji: "⌨️",
    hue: 232,
    added: 24,
    desc: "Hot-swappable switches, compact layout and soft white backlighting."
  },
  {
    id: 5,
    name: "HD Webcam",
    category: "Electronics",
    price: 49.99,
    oldPrice: null,
    rating: 4.2,
    reviews: 411,
    stock: 0,
    emoji: "📷",
    hue: 222,
    added: 8,
    desc: "1080p webcam with a built-in microphone and a privacy shutter."
  },
  {
    id: 6,
    name: "20,000 mAh Power Bank",
    category: "Electronics",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.3,
    reviews: 3320,
    stock: 50,
    emoji: "🔋",
    hue: 205,
    added: 5,
    desc: "Fast-charging power bank that can charge two devices at the same time."
  },

  // Fashion
  {
    id: 7,
    name: "Canvas Sneakers",
    category: "Fashion",
    price: 64.0,
    oldPrice: null,
    rating: 4.5,
    reviews: 1530,
    stock: 22,
    emoji: "👟",
    hue: 340,
    added: 19,
    desc: "Lightweight everyday sneakers with a cushioned insole."
  },
  {
    id: 8,
    name: "Classic Denim Jacket",
    category: "Fashion",
    price: 89.0,
    oldPrice: 119.0,
    rating: 4.3,
    reviews: 640,
    stock: 11,
    emoji: "🧥",
    hue: 350,
    added: 10,
    desc: "A timeless mid-wash denim jacket with a relaxed fit."
  },
  {
    id: 9,
    name: "Leather Backpack",
    category: "Fashion",
    price: 110.0,
    oldPrice: null,
    rating: 4.8,
    reviews: 377,
    stock: 6,
    emoji: "🎒",
    hue: 18,
    added: 23,
    desc: "Full-grain leather backpack with a padded 15-inch laptop sleeve."
  },
  {
    id: 10,
    name: "Polarised Sunglasses",
    category: "Fashion",
    price: 38.0,
    oldPrice: null,
    rating: 4.1,
    reviews: 502,
    stock: 40,
    emoji: "🕶️",
    hue: 330,
    added: 14,
    desc: "UV400 polarised lenses in a lightweight, flexible frame."
  },
  {
    id: 11,
    name: "Baseball Cap",
    category: "Fashion",
    price: 24.5,
    oldPrice: null,
    rating: 4.0,
    reviews: 288,
    stock: 60,
    emoji: "🧢",
    hue: 355,
    added: 3,
    desc: "Soft cotton cap with an adjustable strap in a relaxed shape."
  },
  {
    id: 12,
    name: "Organic Cotton T-Shirt",
    category: "Fashion",
    price: 19.99,
    oldPrice: null,
    rating: 4.4,
    reviews: 2764,
    stock: 120,
    emoji: "👕",
    hue: 322,
    added: 1,
    desc: "Breathable, pre-shrunk tee made from 100% organic cotton."
  },

  // Home
  {
    id: 13,
    name: "Ceramic Mug Set (4 pcs)",
    category: "Home",
    price: 27.0,
    oldPrice: null,
    rating: 4.6,
    reviews: 921,
    stock: 35,
    emoji: "☕",
    hue: 32,
    added: 15,
    desc: "Hand-glazed stoneware mugs, dishwasher and microwave safe."
  },
  {
    id: 14,
    name: "Adjustable Desk Lamp",
    category: "Home",
    price: 42.0,
    oldPrice: 55.0,
    rating: 4.5,
    reviews: 733,
    stock: 17,
    emoji: "💡",
    hue: 45,
    added: 16,
    desc: "LED lamp with three colour temperatures and a USB charging port."
  },
  {
    id: 15,
    name: "Scented Soy Candle",
    category: "Home",
    price: 18.0,
    oldPrice: null,
    rating: 4.7,
    reviews: 1180,
    stock: 74,
    emoji: "🕯️",
    hue: 28,
    added: 6,
    desc: "Slow-burning candle with notes of cedar and vanilla."
  },
  {
    id: 16,
    name: "Ceramic Plant Pot",
    category: "Home",
    price: 33.0,
    oldPrice: null,
    rating: 4.4,
    reviews: 214,
    stock: 28,
    emoji: "🪴",
    hue: 100,
    added: 21,
    desc: "Matte ceramic pot with a bamboo stand and drainage hole."
  },
  {
    id: 17,
    name: "Chunky Knit Throw Blanket",
    category: "Home",
    price: 54.0,
    oldPrice: null,
    rating: 4.6,
    reviews: 458,
    stock: 3,
    emoji: "🛏️",
    hue: 12,
    added: 18,
    desc: "Oversized, ultra-soft knit blanket for the sofa or bed."
  },
  {
    id: 18,
    name: "Minimalist Wall Clock",
    category: "Home",
    price: 36.0,
    oldPrice: null,
    rating: 4.2,
    reviews: 169,
    stock: 25,
    emoji: "🕰️",
    hue: 38,
    added: 9,
    desc: "Silent quartz movement in a slim wooden frame."
  },

  // Sports
  {
    id: 19,
    name: "Non-Slip Yoga Mat",
    category: "Sports",
    price: 35.0,
    oldPrice: null,
    rating: 4.6,
    reviews: 1642,
    stock: 44,
    emoji: "🧘",
    hue: 160,
    added: 11,
    desc: "6 mm cushioned mat with a grippy surface and carry strap."
  },
  {
    id: 20,
    name: "Cushioned Running Shoes",
    category: "Sports",
    price: 119.0,
    oldPrice: 149.0,
    rating: 4.7,
    reviews: 2290,
    stock: 13,
    emoji: "🏃",
    hue: 150,
    added: 25,
    desc: "Responsive foam and a breathable mesh upper for daily miles."
  },
  {
    id: 21,
    name: "Insulated Water Bottle",
    category: "Sports",
    price: 22.0,
    oldPrice: null,
    rating: 4.5,
    reviews: 3875,
    stock: 90,
    emoji: "🥤",
    hue: 175,
    added: 4,
    desc: "Keeps drinks cold for 24 hours and hot for 12."
  },
  {
    id: 22,
    name: "Adjustable Dumbbell Set",
    category: "Sports",
    price: 95.0,
    oldPrice: null,
    rating: 4.4,
    reviews: 540,
    stock: 0,
    emoji: "🏋️",
    hue: 140,
    added: 7,
    desc: "Two dumbbells that adjust from 2 to 12 kg with a quick-lock dial."
  },
  {
    id: 23,
    name: "Road Bike Helmet",
    category: "Sports",
    price: 59.0,
    oldPrice: null,
    rating: 4.6,
    reviews: 392,
    stock: 16,
    emoji: "🚴",
    hue: 168,
    added: 17,
    desc: "Lightweight, well-ventilated helmet with an adjustable fit system."
  },
  {
    id: 24,
    name: "Graphite Tennis Racket",
    category: "Sports",
    price: 79.0,
    oldPrice: 99.0,
    rating: 4.3,
    reviews: 205,
    stock: 8,
    emoji: "🎾",
    hue: 130,
    added: 13,
    desc: "Balanced all-court racket with a comfortable vibration-dampening grip."
  }
];

/* Kart: product catalog, filters, search and cart.
   Structure:
   1. config + state        4. components (functions that return HTML)
   2. helpers               5. render functions
   3. filtering + cart      6. events + startup
*/
(() => {
  "use strict";

  /* ================= 1. config + state ================= */
  const PAGE_SIZE = 12;
  const FREE_SHIPPING_AT = 75;
  const SHIPPING_FEE = 5.99;
  const PROMOS = {
    SAVE10: { type: "percent", value: 0.1, label: "10% off" },
    FREESHIP: { type: "shipping", label: "free shipping" }
  };

  const store = {
    get(key, fallback) {
      try {
        const v = JSON.parse(localStorage.getItem(key));
        return v ?? fallback;
      } catch {
        return fallback;
      }
    },
    set(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch {
        /* storage unavailable */
      }
    }
  };

  const state = {
    query: "",
    categories: new Set(),
    min: null,
    max: null,
    rating: 0,
    inStock: false,
    onSale: false,
    savedOnly: false,
    sort: "featured",
    shown: PAGE_SIZE,
    cart: store.get("kart.cart", {}), // { productId: quantity }
    wish: new Set(store.get("kart.wish", [])), // saved product ids
    promo: store.get("kart.promo", null), // applied promo code
    order: null // set after a (demo) checkout
  };

  /* ================= 2. helpers ================= */
  const $ = (sel, root = document) => root.querySelector(sel);
  const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  });
  const compact = new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 1
  });
  const byId = (id) => PRODUCTS.find((p) => p.id === Number(id));
  const esc = (s) =>
    String(s).replace(
      /[&<>"']/g,
      (c) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"
        })[c]
    );
  const debounce = (fn, ms) => {
    let t;
    return (...a) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...a), ms);
    };
  };
  const pctOff = (p) =>
    p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  const qtyInCart = (id) => state.cart[id] || 0;

  const HEART =
    '<svg viewBox="0 0 24 24" class="i"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>';

  // re-opening the popover puts the toasts back on top of any open dialog
  function raiseToasts() {
    const box = $("#toasts");
    try {
      if (box.matches(":popover-open")) box.hidePopover();
      box.showPopover();
    } catch {
      /* popover unsupported */
    }
  }

  function toast(message) {
    const box = $("#toasts");
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = message;
    box.appendChild(el);
    while (box.children.length > 3) box.firstChild.remove();
    raiseToasts();
    setTimeout(() => {
      el.remove();
      if (!box.children.length) {
        try {
          box.hidePopover();
        } catch {
          /* ignore */
        }
      }
    }, 2400);
  }

  /* ================= 3. filtering + cart logic ================= */
  const priceRangeInvalid = () =>
    state.min != null && state.max != null && state.min > state.max;

  function getFiltered() {
    const q = state.query.trim().toLowerCase();
    const usePrice = !priceRangeInvalid();
    const list = PRODUCTS.filter((p) => {
      if (q && !`${p.name} ${p.category} ${p.desc}`.toLowerCase().includes(q))
        return false;
      if (state.categories.size && !state.categories.has(p.category))
        return false;
      if (usePrice && state.min != null && p.price < state.min) return false;
      if (usePrice && state.max != null && p.price > state.max) return false;
      if (p.rating < state.rating) return false;
      if (state.inStock && p.stock <= 0) return false;
      if (state.onSale && !p.oldPrice) return false;
      if (state.savedOnly && !state.wish.has(p.id)) return false;
      return true;
    });
    const sorters = {
      featured: (a, b) => a.id - b.id,
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      rating: (a, b) => b.rating - a.rating || b.reviews - a.reviews,
      newest: (a, b) => b.added - a.added
    };
    return list.sort(sorters[state.sort]);
  }

  function activeFilters() {
    const f = [];
    if (state.query.trim())
      f.push({ key: "query", label: `Search: “${esc(state.query.trim())}”` });
    state.categories.forEach((c) => f.push({ key: "cat:" + c, label: c }));
    if (state.min != null || state.max != null) {
      const label =
        state.min != null && state.max != null
          ? `${money.format(state.min)} to ${money.format(state.max)}`
          : state.min != null
            ? `From ${money.format(state.min)}`
            : `Up to ${money.format(state.max)}`;
      f.push({ key: "price", label });
    }
    if (state.rating)
      f.push({ key: "rating", label: `${state.rating}+ stars` });
    if (state.inStock) f.push({ key: "inStock", label: "In stock" });
    if (state.onSale) f.push({ key: "onSale", label: "On sale" });
    if (state.savedOnly) f.push({ key: "savedOnly", label: "Saved items" });
    return f;
  }

  function persistCart() {
    store.set("kart.cart", state.cart);
    store.set("kart.promo", state.promo);
  }

  function addToCart(id, qty = 1) {
    const p = byId(id);
    if (!p || p.stock <= 0) return;
    const current = qtyInCart(p.id),
      next = Math.min(current + qty, p.stock);
    if (next === current) return toast(`Only ${p.stock} in stock`);
    state.cart[p.id] = next;
    state.order = null;
    persistCart();
    renderCart();
    renderBadge(true);
    toast(`Added to cart: ${p.name}`);
  }

  function setQty(id, qty) {
    const p = byId(id);
    if (!p) return;
    if (qty <= 0) delete state.cart[p.id];
    else state.cart[p.id] = Math.min(qty, p.stock);
    persistCart();
    renderCart();
    renderBadge();
  }

  function totals() {
    let subtotal = 0,
      count = 0;
    for (const [id, qty] of Object.entries(state.cart)) {
      subtotal += byId(id).price * qty;
      count += qty;
    }
    const promo = PROMOS[state.promo];
    const discount =
      promo && promo.type === "percent" ? subtotal * promo.value : 0;
    const after = subtotal - discount;
    const freeShip =
      (promo && promo.type === "shipping") || after >= FREE_SHIPPING_AT;
    const shipping = count === 0 || freeShip ? 0 : SHIPPING_FEE;
    return {
      subtotal,
      count,
      discount,
      after,
      shipping,
      freeShip,
      total: after + shipping
    };
  }

  /* ================= 4. components ================= */
  const Stars = (r) =>
    `<span class="stars" style="--r:${r}" role="img" aria-label="${r} out of 5 stars">★★★★★</span>`;

  function ProductCard(p) {
    const out = p.stock <= 0,
      off = pctOff(p),
      saved = state.wish.has(p.id);
    const badge = out
      ? '<span class="badge out">Sold out</span>'
      : off
        ? `<span class="badge">-${off}%</span>`
        : "";
    return `
      <article class="card${out ? " out" : ""}">
        <div class="thumb" style="--h:${p.hue}" data-action="view" data-id="${p.id}">
          <span class="emoji" aria-hidden="true">${p.emoji}</span>${badge}
          <button class="wish${saved ? " on" : ""}" type="button" data-action="wish" data-id="${p.id}" aria-pressed="${saved}" aria-label="Save ${esc(p.name)}">${HEART}</button>
        </div>
        <div class="info">
          <span class="cat">${p.category}</span>
          <h3><button class="name" type="button" data-action="view" data-id="${p.id}">${p.name}</button></h3>
          <div class="rate">${Stars(p.rating)}<span>${p.rating.toFixed(1)} (${compact.format(p.reviews)})</span></div>
          <div class="buy">
            <div class="price"><b>${money.format(p.price)}</b>${p.oldPrice ? `<s>${money.format(p.oldPrice)}</s>` : ""}</div>
            <button class="add" type="button" data-action="add" data-id="${p.id}"${out ? " disabled" : ""}>${out ? "Sold out" : "Add"}</button>
          </div>
        </div>
      </article>`;
  }

  const EmptyState = () => `
    <div class="empty">
      <div class="big" aria-hidden="true">🔍</div>
      <h3>No products match your filters</h3>
      <p>Try a different search or remove some filters.</p>
      <button class="btn primary" type="button" data-action="clear-all">Clear all filters</button>
    </div>`;

  function CartLine(id, qty) {
    const p = byId(id);
    return `
      <div class="line">
        <div class="thumb" style="--h:${p.hue}"><span class="emoji" aria-hidden="true">${p.emoji}</span></div>
        <div>
          <h3>${p.name}</h3>
          <div class="each">${money.format(p.price)} each</div>
          <div class="ctl">
            <div class="stepper">
              <button type="button" data-action="dec" data-id="${p.id}" aria-label="Decrease quantity">−</button>
              <output aria-label="Quantity">${qty}</output>
              <button type="button" data-action="inc" data-id="${p.id}" aria-label="Increase quantity"${qty >= p.stock ? " disabled" : ""}>+</button>
            </div>
            <button class="rm" type="button" data-action="remove" data-id="${p.id}">Remove</button>
          </div>
        </div>
        <div class="tot">${money.format(p.price * qty)}</div>
      </div>`;
  }

  function ProductModal(p, qty) {
    const off = pctOff(p),
      saved = state.wish.has(p.id),
      out = p.stock <= 0;
    const stock = out
      ? '<span class="stock none">Out of stock</span>'
      : p.stock <= 5
        ? `<span class="stock low">Only ${p.stock} left</span>`
        : '<span class="stock">In stock</span>';
    return `
      <button class="x" type="button" data-action="close-modal" aria-label="Close">&times;</button>
      <div class="m-grid">
        <div class="thumb" style="--h:${p.hue}"><span class="emoji" aria-hidden="true">${p.emoji}</span></div>
        <div class="m-body">
          <span class="cat">${p.category}</span>
          <h2>${p.name}</h2>
          <div class="rate">${Stars(p.rating)}<span>${p.rating.toFixed(1)} (${compact.format(p.reviews)} reviews)</span></div>
          <div class="m-price"><b>${money.format(p.price)}</b>${p.oldPrice ? `<s>${money.format(p.oldPrice)}</s><span class="off">Save ${off}%</span>` : ""}</div>
          <p>${p.desc}</p>
          ${stock}
          <div class="m-actions">
            <div class="stepper">
              <button type="button" data-action="m-dec" aria-label="Decrease quantity"${qty <= 1 ? " disabled" : ""}>−</button>
              <output aria-label="Quantity">${qty}</output>
              <button type="button" data-action="m-inc" aria-label="Increase quantity"${qty >= p.stock ? " disabled" : ""}>+</button>
            </div>
            <button class="btn primary" type="button" data-action="m-add"${out ? " disabled" : ""}>${out ? "Sold out" : "Add to cart"}</button>
            <button class="btn heart${saved ? " on" : ""}" type="button" data-action="m-wish" aria-pressed="${saved}" aria-label="Save to wishlist">${HEART}</button>
          </div>
        </div>
      </div>`;
  }

  /* ================= 5. render functions ================= */
  function renderCategories() {
    const names = [...new Set(PRODUCTS.map((p) => p.category))];
    $("#catList").innerHTML = names
      .map((c) => {
        const n = PRODUCTS.filter((p) => p.category === c).length;
        return `<label class="check"><input type="checkbox" name="cat" value="${c}"${state.categories.has(c) ? " checked" : ""}> ${c}<span class="n">${n}</span></label>`;
      })
      .join("");
  }

  function renderResults() {
    const list = getFiltered(),
      visible = list.slice(0, state.shown),
      filters = activeFilters();
    $("#resultCount").textContent = list.length
      ? `Showing ${visible.length} of ${list.length} product${list.length === 1 ? "" : "s"}`
      : "No products found";
    $("#chips").innerHTML = filters
      .map(
        (f) =>
          `<span class="chip">${f.label}<button type="button" data-action="remove-filter" data-key="${esc(f.key)}" aria-label="Remove filter: ${esc(f.label.replace(/<[^>]*>/g, ""))}">&times;</button></span>`
      )
      .join("");
    $("#grid").innerHTML = list.length
      ? visible.map(ProductCard).join("")
      : EmptyState();
    $("#loadMore").parentElement.hidden = list.length <= state.shown;
    $("#filterToggle").textContent = filters.length
      ? `Filters (${filters.length})`
      : "Filters";
  }

  function renderBadge(bump = false) {
    const n = totals().count,
      el = $("#cartCount");
    el.textContent = n;
    el.hidden = n === 0;
    if (bump) {
      el.classList.remove("bump");
      void el.offsetWidth;
      el.classList.add("bump");
    }
  }

  function renderCart() {
    const body = $("#cartBody"),
      foot = $("#cartFoot");

    if (state.order) {
      body.innerHTML = `<div class="done"><div class="big" aria-hidden="true">🎉</div><h3>Order placed!</h3>
        <p>Order ${state.order.id} for ${money.format(state.order.total)} is confirmed.<br>This is a demo, so no payment was taken.</p>
        <button class="btn primary" type="button" data-action="continue">Continue shopping</button></div>`;
      foot.hidden = true;
      return;
    }
    foot.hidden = false;

    const ids = Object.keys(state.cart);
    if (!ids.length) {
      body.innerHTML = `<div class="cart-empty"><div class="big" aria-hidden="true">🛒</div><h3>Your cart is empty</h3><p>Add something you like and it will show up here.</p>
        <button class="btn" type="button" data-action="continue">Browse products</button></div>`;
      foot.innerHTML = "";
      foot.hidden = true;
      return;
    }

    const t = totals();
    const left = Math.max(FREE_SHIPPING_AT - t.after, 0);
    body.innerHTML =
      `<div class="ship">${t.freeShip ? "You get free shipping." : `Add <b>${money.format(left)}</b> more for free shipping.`}
        <div class="track"><i style="width:${t.freeShip ? 100 : Math.min((t.after / FREE_SHIPPING_AT) * 100, 100)}%"></i></div></div>` +
      ids.map((id) => CartLine(id, state.cart[id])).join("");

    const promo = PROMOS[state.promo];
    foot.innerHTML = `
      <form class="promo-form" id="promoForm" novalidate>
        <input id="promoInput" type="text" placeholder="Promo code" aria-label="Promo code" autocomplete="off" maxlength="20" value="${promo ? esc(state.promo) : ""}"${promo ? " readonly" : ""}>
        ${promo ? '<button class="btn" type="button" data-action="remove-promo">Remove</button>' : '<button class="btn" type="submit">Apply</button>'}
      </form>
      <p class="promo-msg${promo ? " ok" : ""}" id="promoMsg">${promo ? `Code ${esc(state.promo)} applied: ${promo.label}.` : ""}</p>
      <div class="sum"><span>Subtotal</span><span>${money.format(t.subtotal)}</span></div>
      ${t.discount ? `<div class="sum"><span>Discount</span><span class="disc">−${money.format(t.discount)}</span></div>` : ""}
      <div class="sum"><span>Shipping</span><span>${t.shipping ? money.format(t.shipping) : "Free"}</span></div>
      <div class="sum grand"><span>Total</span><span>${money.format(t.total)}</span></div>
      <button class="btn primary block" type="button" data-action="checkout">Checkout</button>`;
  }

  let modalId = null,
    modalQty = 1;
  function renderModal() {
    $("#modal").innerHTML = ProductModal(byId(modalId), modalQty);
  }

  function syncControls() {
    $("#search").value = state.query;
    $("#minPrice").value = state.min ?? "";
    $("#maxPrice").value = state.max ?? "";
    $("#priceErr").hidden = !priceRangeInvalid();
    document.querySelectorAll('input[name="rating"]').forEach((r) => {
      r.checked = Number(r.value) === state.rating;
    });
    $("#fStock").checked = state.inStock;
    $("#fSale").checked = state.onSale;
    $("#fSaved").checked = state.savedOnly;
    $("#sort").value = state.sort;
    renderCategories();
  }

  const applyFilters = () => {
    state.shown = PAGE_SIZE;
    renderResults();
  };

  function clearAllFilters() {
    Object.assign(state, {
      query: "",
      min: null,
      max: null,
      rating: 0,
      inStock: false,
      onSale: false,
      savedOnly: false
    });
    state.categories.clear();
    syncControls();
    applyFilters();
  }

  function toggleWish(id) {
    id = Number(id);
    state.wish.has(id) ? state.wish.delete(id) : state.wish.add(id);
    store.set("kart.wish", [...state.wish]);
    toast(
      state.wish.has(id) ? "Saved to your wishlist" : "Removed from wishlist"
    );
    renderResults();
    if ($("#modal").open) renderModal();
  }

  /* ================= 6. events + startup ================= */
  const actions = {
    view(el) {
      modalId = Number(el.dataset.id);
      modalQty = 1;
      renderModal();
      $("#modal").showModal();
      raiseToasts();
    },
    add(el) {
      addToCart(el.dataset.id);
    },
    wish(el) {
      toggleWish(el.dataset.id);
    },
    inc(el) {
      setQty(el.dataset.id, qtyInCart(el.dataset.id) + 1);
    },
    dec(el) {
      setQty(el.dataset.id, qtyInCart(el.dataset.id) - 1);
    },
    remove(el) {
      setQty(el.dataset.id, 0);
    },
    "m-inc"() {
      modalQty = Math.min(modalQty + 1, byId(modalId).stock);
      renderModal();
    },
    "m-dec"() {
      modalQty = Math.max(modalQty - 1, 1);
      renderModal();
    },
    "m-add"() {
      addToCart(modalId, modalQty);
      $("#modal").close();
    },
    "m-wish"() {
      toggleWish(modalId);
    },
    "close-modal"() {
      $("#modal").close();
    },
    "close-cart"() {
      $("#cart").close();
    },
    "clear-all"() {
      clearAllFilters();
    },
    "remove-promo"() {
      state.promo = null;
      persistCart();
      renderCart();
    },
    checkout() {
      const t = totals();
      state.order = {
        id: "#K-" + Math.floor(100000 + Math.random() * 900000),
        total: t.total
      };
      state.cart = {};
      state.promo = null;
      persistCart();
      renderCart();
      renderBadge();
    },
    continue() {
      state.order = null;
      renderCart();
      $("#cart").close();
    },
    "remove-filter"(el) {
      const key = el.dataset.key;
      if (key === "query") state.query = "";
      else if (key.startsWith("cat:")) state.categories.delete(key.slice(4));
      else if (key === "price") {
        state.min = null;
        state.max = null;
      } else if (key === "rating") state.rating = 0;
      else state[key] = false;
      syncControls();
      applyFilters();
    }
  };

  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-action]");
    if (el && actions[el.dataset.action]) actions[el.dataset.action](el);
  });

  // clicking the dark backdrop closes a dialog
  ["#modal", "#cart"].forEach((sel) =>
    $(sel).addEventListener("click", (e) => {
      if (e.target === e.currentTarget) e.currentTarget.close();
    })
  );

  $("#openCart").addEventListener("click", () => {
    renderCart();
    $("#cart").showModal();
    raiseToasts();
  });

  // promo form (it is re-rendered with the cart, so listen on the document)
  document.addEventListener("submit", (e) => {
    if (e.target.id !== "promoForm") return;
    e.preventDefault();
    const code = $("#promoInput").value.trim().toUpperCase();
    if (!code) {
      $("#promoMsg").className = "promo-msg";
      $("#promoMsg").textContent = "Enter a promo code.";
      return;
    }
    if (!PROMOS[code]) {
      $("#promoMsg").className = "promo-msg";
      $("#promoMsg").textContent = "That code isn't valid.";
      return;
    }
    state.promo = code;
    persistCart();
    renderCart();
  });

  $("#searchForm").addEventListener("submit", (e) => {
    e.preventDefault();
    state.query = $("#search").value;
    applyFilters();
  });
  $("#search").addEventListener(
    "input",
    debounce(() => {
      state.query = $("#search").value;
      applyFilters();
    }, 200)
  );

  $("#filters").addEventListener("change", (e) => {
    const t = e.target;
    if (t.name === "cat")
      t.checked
        ? state.categories.add(t.value)
        : state.categories.delete(t.value);
    else if (t.name === "rating") state.rating = Number(t.value);
    else if (t.id === "fStock") state.inStock = t.checked;
    else if (t.id === "fSale") state.onSale = t.checked;
    else if (t.id === "fSaved") state.savedOnly = t.checked;
    else return;
    applyFilters();
  });

  const readPrice = debounce(() => {
    const num = (v) => {
      const x = parseFloat(v);
      return Number.isFinite(x) && x >= 0 ? x : null;
    };
    state.min = num($("#minPrice").value);
    state.max = num($("#maxPrice").value);
    $("#priceErr").hidden = !priceRangeInvalid();
    applyFilters();
  }, 250);
  $("#minPrice").addEventListener("input", readPrice);
  $("#maxPrice").addEventListener("input", readPrice);

  $("#sort").addEventListener("change", (e) => {
    state.sort = e.target.value;
    applyFilters();
  });
  $("#clearAll").addEventListener("click", clearAllFilters);
  $("#loadMore").addEventListener("click", () => {
    state.shown += PAGE_SIZE;
    renderResults();
  });
  $("#filterToggle").addEventListener("click", (e) => {
    const open = $("#filters").classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open);
  });

  // startup: drop anything in the saved cart that no longer exists, then draw the page
  state.cart = Object.fromEntries(
    Object.entries(state.cart)
      .filter(([id, q]) => byId(id) && byId(id).stock > 0 && q > 0)
      .map(([id, q]) => [id, Math.min(q, byId(id).stock)])
  );
  if (!PROMOS[state.promo]) state.promo = null;

  syncControls();
  renderResults();
  renderCart();
  renderBadge();
})();
