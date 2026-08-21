const DEFAULT_PRODUCTS = [
  {
    id: "p1",
    name: "Tenda Eiger Expedition 4P",
    category: "tenda",
    categoryLabel: "Tenda",
    pricePerDay: 45000,
    stock: 8,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
    spec: "Frame Alumunium Alloy, PU 3000mm Waterproof",
    desc: "Tenda gunung profesional kapasitas 4 orang dengan daya tahan angin kencang."
  },
  {
    id: "p2",
    name: "Tenda Consina Magnum 4",
    category: "tenda",
    categoryLabel: "Tenda",
    pricePerDay: 40000,
    stock: 12,
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80",
    spec: "Double Layer, Terpal PE Floor",
    desc: "Tenda keluarga atau kelompok 4-5 orang favorit para pendaki."
  },
  {
    id: "p3",
    name: "Tenda Dhaulagiri Terra 2P",
    category: "tenda",
    categoryLabel: "Tenda",
    pricePerDay: 30000,
    stock: 4,
    image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?auto=format&fit=crop&w=600&q=80",
    spec: "Ultralight 1.8kg, Siliconized Fabric",
    desc: "Pilihan terbaik untuk pendaki solo / berdua yang mengutamakan bobot ringan."
  },
  {
    id: "p4",
    name: "Carrier Osprey Atmos 65L",
    category: "carrier",
    categoryLabel: "Carrier",
    pricePerDay: 50000,
    stock: 5,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    spec: "Anti-Gravity Backsystem, Fit-on-the-Fly",
    desc: "Carrier premium dengan teknologi AG untuk beban berat."
  },
  {
    id: "p5",
    name: "Carrier Deuter Aircontact",
    category: "carrier",
    categoryLabel: "Carrier",
    pricePerDay: 45000,
    stock: 9,
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?auto=format&fit=crop&w=600&q=80",
    spec: "VariQuick Adjustment System",
    desc: "Ransel ekspedisi tangguh asal Jerman. Sirkulasi udara optimal."
  },
  {
    id: "p6",
    name: "Carrier Eiger Rhinos 45L",
    category: "carrier",
    categoryLabel: "Carrier",
    pricePerDay: 30000,
    stock: 15,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    spec: "Tropic Transit System, Padded Hipbelt",
    desc: "Carrier ideal untuk perjalanan tektok 2 hari 1 malam."
  },
  {
    id: "p7",
    name: "Sleeping Bag Duck Down",
    category: "sleeping",
    categoryLabel: "Sleeping Gear",
    pricePerDay: 25000,
    stock: 20,
    image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=600&q=80",
    spec: "Fill Power 700, Comfort 0°C",
    desc: "Kantong tidur hangat berbahan bulu angsa asli."
  },
  {
    id: "p8",
    name: "Matras Tiup Naturehike",
    category: "sleeping",
    categoryLabel: "Sleeping Gear",
    pricePerDay: 15000,
    stock: 2,
    image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?auto=format&fit=crop&w=600&q=80",
    spec: "Ketebalan 6cm, Built-in Pump",
    desc: "Matras tiup empuk anti dingin dari tanah."
  },
  {
    id: "p9",
    name: "Cooking Set Nesting",
    category: "cooking",
    categoryLabel: "Alat Masak",
    pricePerDay: 20000,
    stock: 18,
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=600&q=80",
    spec: "Hard Anodized Alumunium",
    desc: "Set masak outdoor lengkap untuk 3-4 orang + Kompor."
  },
  {
    id: "p10",
    name: "Headlamp Petzl Tikka",
    category: "gear",
    categoryLabel: "Penerangan",
    pricePerDay: 12000,
    stock: 0,
    image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=600&q=80",
    spec: "3 Mode Lampu + Night Vision",
    desc: "Senter kepala profesional. Sinar terang fokus."
  },
  {
    id: "pkg1",
    name: "Solo Hiker",
    category: "paket",
    categoryLabel: "Solo",
    pricePerDay: 65000,
    stock: 5,
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80",
    spec: "Tenda 1-2P, Carrier 45L, Sleeping Bag, Matras, Kompor",
    desc: "Paket lengkap untuk pendaki tunggal."
  },
  {
    id: "pkg2",
    name: "Duo Hiker",
    category: "paket",
    categoryLabel: "Paling Laris",
    pricePerDay: 115000,
    stock: 10,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
    spec: "Tenda 2-3P, 2x Sleeping Bag, 2x Matras, Nesting, Kompor, Lampu",
    desc: "Paket ideal dan nyaman untuk perjalanan 2 orang."
  },
  {
    id: "pkg3",
    name: "Squad",
    category: "paket",
    categoryLabel: "Grup 4 Orang",
    pricePerDay: 185000,
    stock: 3,
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=600&q=80",
    spec: "Tenda 4-5P, 4x Sleeping Bag, 4x Matras, Nesting Besar, Kompor, Headlamp",
    desc: "Solusi hemat untuk rombongan tim pendaki 4 orang."
  }
];

function renderProductSkeletons() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const skeletonCard = `
    <div class="prod-card" style="pointer-events: none;">
      <div class="prod-img-box skeleton-box" style="aspect-ratio: 4/3; width: 100%;"></div>
      <div class="prod-info" style="padding: 1.5rem;">
        <div class="skeleton-box skeleton-text title"></div>
        <div class="skeleton-box skeleton-text subtitle"></div>
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--clr-border); padding-top: 1.25rem; margin-top: auto;">
          <div class="skeleton-box skeleton-text price" style="width: 80px; height: 20px;"></div>
          <div class="skeleton-box" style="width: 40px; height: 40px;"></div>
        </div>
      </div>
    </div>
  `;
  grid.innerHTML = Array(6).fill(skeletonCard).join("");
}

function renderPackageSkeletons() {
  const pkgGrid = document.querySelector(".packages-grid");
  if (!pkgGrid) return;

  const skeletonCard = `
    <div class="pkg-card" style="pointer-events: none; border-color: var(--clr-border);">
      <div class="skeleton-box" style="width: 100%; height: 180px; margin-bottom: 1.5rem;"></div>
      <div class="skeleton-box skeleton-text" style="width: 40px; height: 12px; margin-bottom: 1rem;"></div>
      <div class="skeleton-box skeleton-text title" style="width: 60%; height: 24px; margin-bottom: 1rem;"></div>
      <div class="skeleton-box skeleton-text price" style="width: 100px; height: 28px; margin-bottom: 1.5rem;"></div>
      <div class="skeleton-box skeleton-text" style="width: 85%; height: 12px; margin-bottom: 0.75rem;"></div>
      <div class="skeleton-box skeleton-text" style="width: 70%; height: 12px; margin-bottom: 0.75rem;"></div>
      <div class="skeleton-box skeleton-text" style="width: 90%; height: 12px; margin-bottom: 2rem;"></div>
      <div class="skeleton-box" style="width: 100%; height: 45px;"></div>
    </div>
  `;
  pkgGrid.innerHTML = Array(3).fill(skeletonCard).join("");
}

async function loadLiveProducts() {
  renderProductSkeletons();
  renderPackageSkeletons();

  if (window.MontanaDB) {
    const remoteData = await window.MontanaDB.fetchProducts();
    if (remoteData && remoteData.length > 0) {
      PRODUCTS = remoteData;
      localStorage.setItem("montana_products", JSON.stringify(PRODUCTS));
      renderProducts(PRODUCTS);
      renderPackages(PRODUCTS);
      return;
    } else if (remoteData && remoteData.length === 0) {
      await window.MontanaDB.seedProducts(DEFAULT_PRODUCTS);
      PRODUCTS = DEFAULT_PRODUCTS;
      renderProducts(PRODUCTS);
      renderPackages(PRODUCTS);
      return;
    }
  }

  const saved = localStorage.getItem("montana_products");
  if (saved) {
    PRODUCTS = JSON.parse(saved);
  } else {
    PRODUCTS = DEFAULT_PRODUCTS;
    localStorage.setItem("montana_products", JSON.stringify(DEFAULT_PRODUCTS));
  }
  renderProducts(PRODUCTS);
  renderPackages(PRODUCTS);
}

let PRODUCTS = DEFAULT_PRODUCTS;
let cart = [];
let rentalDays = 2;

function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>✓</span> <div>${message}</div>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

function setupDateConstraints() {
  const startInput = document.getElementById("rentStartDate");
  const endInput = document.getElementById("rentEndDate");
  
  if (!startInput || !endInput) return;

  const today = new Date().toISOString().split("T")[0];
  startInput.min = today;
  if (!startInput.value) startInput.value = today;

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 2);
  const tomorrowStr = tomorrow.toISOString().split("T")[0];
  endInput.min = today;
  if (!endInput.value) endInput.value = tomorrowStr;
}

document.addEventListener("DOMContentLoaded", () => {
  loadLiveProducts();
  setupNavigation();
  setupFilters();
  setupStepper();
  setupCartDrawer();
  setupDateConstraints();
  setupCheckout();
});

function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(amount);
}

function setupNavigation() {
  const navbar = document.getElementById("siteNav");
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");
  });

  mobileToggle?.addEventListener("click", () => {
    navMenu?.classList.toggle("active");
  });

  navMenu?.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}

function renderProducts(productList) {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  if (productList.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; padding: 4rem; text-align: center; color: var(--clr-text-dim);">Gear tidak ditemukan.</div>`;
    return;
  }

  const catalogItems = productList.filter(p => p.category !== "paket");

  grid.innerHTML = catalogItems.map(prod => {
    const total = prod.pricePerDay * rentalDays;
    return `
      <div class="prod-card">
        <div class="prod-img-box">
          <img src="${prod.image}" loading="lazy" alt="${prod.name}">
          <span class="prod-cat">${prod.categoryLabel}</span>
          <span class="prod-stock">Stok: ${prod.stock}</span>
        </div>
        <div class="prod-info">
          <h3 class="prod-title">${prod.name}</h3>
          <p class="prod-spec">${prod.spec}</p>
          <div class="prod-foot">
            <div>
              <span class="price-amt">${formatRupiah(total)}</span>
              <span class="price-per">/ ${rentalDays} Hari</span>
            </div>
            <div class="prod-actions">
              <button class="btn-ico" onclick="openProductDetail('${prod.id}')">ℹ</button>
              <button class="btn-ico" onclick="addToCart('${prod.id}')">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function setupFilters() {
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  const filterBtns = document.querySelectorAll(".pill");
  let cat = "all";
  let q = "";
  let sortMode = "default";

  function apply() {
    let filtered = PRODUCTS.filter(p =>
      p.category !== "paket" &&
      (cat === "all" || p.category === cat) &&
      (p.name.toLowerCase().includes(q) || (p.spec || "").toLowerCase().includes(q))
    );

    if (sortMode === "price-asc") filtered.sort((a, b) => a.pricePerDay - b.pricePerDay);
    else if (sortMode === "price-desc") filtered.sort((a, b) => b.pricePerDay - a.pricePerDay);
    else if (sortMode === "stock-desc") filtered.sort((a, b) => b.stock - a.stock);

    renderProducts(filtered);
  }

  searchInput?.addEventListener("input", e => { q = e.target.value.toLowerCase(); apply(); });
  sortSelect?.addEventListener("change", e => { sortMode = e.target.value; apply(); });

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      cat = btn.dataset.category;
      apply();
    });
  });
}

function setupStepper() {
  const input = document.getElementById("rentalDaysInput");
  function update(val) {
    rentalDays = Math.max(1, Math.min(14, parseInt(val) || 1));
    input.value = rentalDays;
    renderProducts(PRODUCTS);
    updateCartUI();
  }
  document.getElementById("decDaysBtn")?.addEventListener("click", () => update(rentalDays - 1));
  document.getElementById("incDaysBtn")?.addEventListener("click", () => update(rentalDays + 1));
  input?.addEventListener("change", e => update(e.target.value));
}

window.openProductDetail = function(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  document.getElementById("modalBody").innerHTML = `
    <div style="display:flex; gap:2rem; flex-wrap:wrap;">
      <img src="${p.image}" style="width:100%; max-width:300px; object-fit:cover; filter:grayscale(20%);">
      <div style="flex:1; min-width:250px;">
        <span class="overline-text">${p.categoryLabel}</span>
        <h2 style="font-family:var(--font-display); font-size:2rem; margin-bottom:1rem;">${p.name}</h2>
        <p style="font-family:var(--font-mono); font-size:1.5rem; color:var(--clr-accent); margin-bottom:1.5rem;">${formatRupiah(p.pricePerDay)} <span style="font-size:0.8rem; color:var(--clr-text-dim);">/ hari</span></p>
        <p style="color:var(--clr-text-dim); margin-bottom:1rem;">${p.desc}</p>
        <p style="border-left:2px solid var(--clr-accent); padding-left:1rem; margin-bottom:2rem;">${p.spec}</p>
        <button class="btn-expedition" style="width:100%" onclick="addToCart('${p.id}'); closeModal();">TAMBAH KE KERANJANG</button>
      </div>
    </div>
  `;
  document.getElementById("productModal").classList.add("active");
}

window.closeModal = function() {
  document.getElementById("productModal")?.classList.remove("active");
}
document.getElementById("closeModalBtn")?.addEventListener("click", closeModal);
document.getElementById("modalOverlay")?.addEventListener("click", closeModal);

window.addToCart = function(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if(!p) return;
  if(p.stock === 0) { showToast(`${p.name} — Stok habis!`); return; }
  const ex = cart.find(x => x.id === id);
  if(ex) ex.qty++;
  else cart.push({...p, qty: 1});
  updateCartUI();
  showToast(`${p.name} ditambahkan ke keranjang ✓`);
  document.getElementById("cartDrawer").classList.add("active");
}

function renderPackages(productList) {
  const pkgGrid = document.querySelector(".packages-grid");
  if (!pkgGrid) return;
  
  const pkgs = productList.filter(p => p.category === "paket");
  if(pkgs.length === 0) {
    pkgGrid.innerHTML = `<p style="color:var(--clr-text-dim);">Belum ada paket bundling.</p>`;
    return;
  }
  
  pkgGrid.innerHTML = pkgs.map(pkg => {
    const itemsHtml = pkg.spec.split(',').map(i => `<li>${i.trim()}</li>`).join("");
    let featuredClass = pkg.categoryLabel?.toLowerCase().includes("laris") ? "pkg-featured" : "";
    let btnClass = featuredClass ? "pkg-cta-primary" : "";

    // Gunakan foto dari Supabase Storage, fallback ke gambar default jika belum ada
    const imgSrc = pkg.image && pkg.image.startsWith("http")
      ? pkg.image
      : "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80";

    return `
      <div class="pkg-card ${featuredClass}" data-tier="${pkg.categoryLabel}">
        <div class="pkg-img-box" style="
          position: relative;
          width: 100%;
          height: 180px;
          overflow: hidden;
          margin-bottom: 1.5rem;
        ">
          <img
            src="${imgSrc}"
            alt="${pkg.name}"
            loading="lazy"
            style="
              width: 100%;
              height: 100%;
              object-fit: cover;
              filter: grayscale(30%) brightness(0.85);
              transition: transform 0.4s ease, filter 0.4s ease;
            "
            onmouseover="this.style.transform='scale(1.05)'; this.style.filter='grayscale(0%) brightness(1)';"
            onmouseout="this.style.transform='scale(1)'; this.style.filter='grayscale(30%) brightness(0.85)';"
          >
          ${featuredClass ? `<div style="position:absolute; top:0.75rem; right:0.75rem; background:var(--clr-accent); color:#fff; font-family:var(--font-mono); font-size:0.65rem; padding:0.25rem 0.5rem; text-transform:uppercase; letter-spacing:0.1em;">PALING LARIS</div>` : ""}
        </div>
        <div class="pkg-tier">${pkg.categoryLabel || 'Paket'} (Stok: ${pkg.stock})</div>
        <h3 class="pkg-name">${pkg.name}</h3>
        <div class="pkg-price-wrap">
          <span class="pkg-price">${formatRupiah(pkg.pricePerDay)}</span>
          <span class="pkg-per">/ hari</span>
        </div>
        <ul class="pkg-list">
          ${itemsHtml}
        </ul>
        <button class="pkg-cta ${btnClass}" onclick="addToCart('${pkg.id}')">Tambah Paket →</button>
      </div>
    `;
  }).join("");
}


function updateCartUI() {
  document.getElementById("cartCount").innerText = cart.reduce((s,i) => s + i.qty, 0);
  document.getElementById("cartDurationLabel").innerText = `${rentalDays} Hari`;
  
  const list = document.getElementById("cartItemsList");
  let grand = 0;
  
  if(cart.length === 0) {
    list.innerHTML = `<p style="color:var(--clr-text-dim);">Keranjang kosong.</p>`;
  } else {
    list.innerHTML = cart.map((item, i) => {
      const sub = item.pricePerDay * item.qty * rentalDays;
      grand += sub;
      return `
        <div class="cart-item">
          <img src="${item.image}" class="cart-item-img">
          <div class="cart-item-info">
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-price">${formatRupiah(sub)}</div>
            <div class="cart-item-qty">
              <button class="qty-btn" onclick="changeQty(${i}, -1)">-</button>
              <span style="font-family:var(--font-mono);">${item.qty}</span>
              <button class="qty-btn" onclick="changeQty(${i}, 1)">+</button>
            </div>
          </div>
          <button onclick="removeItem(${i})" style="color:var(--clr-accent);">✕</button>
        </div>
      `;
    }).join("");
  }
  document.getElementById("cartTotalPrice").innerText = formatRupiah(grand);
}

window.changeQty = function(i, d) {
  if(cart[i]) {
    cart[i].qty += d;
    if(cart[i].qty <= 0) cart.splice(i, 1);
  }
  updateCartUI();
}
window.removeItem = function(i) { cart.splice(i, 1); updateCartUI(); }

function setupCartDrawer() {
  document.getElementById("openCartBtn")?.addEventListener("click", () => document.getElementById("cartDrawer").classList.add("active"));
  const close = () => document.getElementById("cartDrawer").classList.remove("active");
  document.getElementById("closeCartBtn")?.addEventListener("click", close);
  document.getElementById("cartOverlay")?.addEventListener("click", close);
}

function setupCheckout() {
  const startInput = document.getElementById("rentStartDate");
  const endInput = document.getElementById("rentEndDate");

  function updateDays() {
    if (startInput.value && endInput.value) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const start = new Date(startInput.value);
      const end = new Date(endInput.value);

      // Enforce: start cannot be before today
      if (start < today) {
        showToast("Tanggal Ambil tidak boleh sebelum hari ini.");
        startInput.value = today.toISOString().split("T")[0];
        return;
      }

      // Enforce: end must be at least 1 day after start
      if (end <= start) {
        showToast("Tanggal Kembali harus setelah Tanggal Ambil.");
        const minEnd = new Date(start);
        minEnd.setDate(minEnd.getDate() + 1);
        endInput.min = minEnd.toISOString().split("T")[0];
        endInput.value = minEnd.toISOString().split("T")[0];
        return;
      }

      // Update endInput min dynamically
      const minEnd = new Date(start);
      minEnd.setDate(minEnd.getDate() + 1);
      endInput.min = minEnd.toISOString().split("T")[0];

      const diffDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      rentalDays = diffDays;
      const stepper = document.getElementById("rentalDaysInput");
      if (stepper) stepper.value = rentalDays;
      renderProducts(PRODUCTS);
      updateCartUI();
    }
  }

  startInput?.addEventListener("change", () => {
    // Reset end min based on new start
    const start = new Date(startInput.value);
    const minEnd = new Date(start);
    minEnd.setDate(minEnd.getDate() + 1);
    endInput.min = minEnd.toISOString().split("T")[0];
    if (endInput.value && new Date(endInput.value) <= start) {
      endInput.value = minEnd.toISOString().split("T")[0];
    }
    updateDays();
  });
  endInput?.addEventListener("change", updateDays);

  document.getElementById("checkoutWaBtn")?.addEventListener("click", async () => {
    if (!cart.length) { showToast("Keranjang masih kosong."); return; }
    const name = document.getElementById("renterName").value.trim();
    const startDate = startInput.value;
    const endDate = endInput.value;

    if (!name || !startDate || !endDate) {
      showToast("Mohon lengkapi Nama, Tanggal Ambil & Kembali.");
      return;
    }

    const checkoutBtn = document.getElementById("checkoutWaBtn");
    const originalText = checkoutBtn.innerText;
    
    // Tampilkan status loading
    checkoutBtn.disabled = true;
    checkoutBtn.innerText = "⏳ Memverifikasi Stok...";

    // 1. Ambil data produk terupdate dari Supabase
    let latestProducts = PRODUCTS;
    if (window.MontanaDB) {
      const remoteData = await window.MontanaDB.fetchProducts();
      if (remoteData && remoteData.length > 0) {
        latestProducts = remoteData;
        PRODUCTS = remoteData; // sync local cache
      }
    }

    // 2. Validasi stok untuk setiap item di keranjang
    const outOfStockItems = [];
    cart.forEach(cartItem => {
      const dbProduct = latestProducts.find(p => p.id === cartItem.id);
      if (!dbProduct) return; // ignore if not found in db
      
      if (dbProduct.stock < cartItem.qty) {
        outOfStockItems.push({
          name: cartItem.name,
          requested: cartItem.qty,
          available: dbProduct.stock
        });
      }
    });

    // Jika ada yang melebihi stok, batalkan checkout dan beri tahu user
    if (outOfStockItems.length > 0) {
      checkoutBtn.disabled = false;
      checkoutBtn.innerText = originalText;
      
      const itemErrors = outOfStockItems.map(item => 
        `• ${item.name}: dipesan ${item.requested} unit, tersedia ${item.available} unit`
      ).join("\n");
      
      alert(`⚠️ Stok Tidak Cukup!\nBeberapa item di keranjang melebihi stok saat ini:\n\n${itemErrors}\n\nSilakan sesuaikan jumlah pesanan Anda.`);
      updateCartUI(); // Refresh UI keranjang
      return;
    }

    let total = 0;
    let txt = cart.map((c, i) => {
      const sub = c.pricePerDay * c.qty * rentalDays;
      total += sub;
      return `${i + 1}. ${c.name} (${c.qty}x) - ${formatRupiah(sub)}`;
    }).join("\n");

    // 3. Simpan pesanan ke database Supabase
    if (window.MontanaDB) {
      const orderItems = cart.map(c => ({ id: c.id, name: c.name, qty: c.qty, pricePerDay: c.pricePerDay }));
      try {
        await window.MontanaDB.createOrder({
          name, startDate, endDate, rentalDays,
          items: orderItems,
          totalPrice: total
        });
      } catch (err) {
        console.error("Gagal menyimpan riwayat pesanan ke database:", err);
      }
    }

    // 4. Kembalikan state tombol
    checkoutBtn.disabled = false;
    checkoutBtn.innerText = originalText;

    const msg = `Halo Admin Montana,\n\nNama: ${name}\nTgl Ambil: ${startDate}\nTgl Kembali: ${endDate}\nDurasi: ${rentalDays} Hari\n\nAlat:\n${txt}\n\nTotal: ${formatRupiah(total)}`;
    window.open(`https://wa.me/6287789611762?text=${encodeURIComponent(msg)}`, "_blank");
  });
}
