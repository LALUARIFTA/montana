/* ==========================================================================
   MONTANA OUTDOOR - ADMIN JAVASCRIPT (MODULAR PUBLIC)
   ========================================================================== */

const INITIAL_PRODUCTS = [
  {
    id: "p1",
    name: "Tenda Eiger Expedition 4P Double Layer",
    category: "tenda",
    categoryLabel: "Tenda",
    pricePerDay: 45000,
    stock: 8,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80",
    spec: "Frame Alumunium Alloy, PU 3000mm Waterproof, Teras Luas",
    desc: "Tenda gunung profesional kapasitas 4 orang dengan daya tahan angin kencang dan hujan lebat."
  },
  {
    id: "p2",
    name: "Tenda Consina Magnum 4-5 Person",
    category: "tenda",
    categoryLabel: "Tenda",
    pricePerDay: 40000,
    stock: 12,
    image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=600&q=80",
    spec: "Double Layer, Terpal PE Floor, Kerapatan Mesh 100%",
    desc: "Tenda kelompok 4-5 orang favorit pendaki. Sangat hangat dan ventilasi maksimal."
  },
  {
    id: "p3",
    name: "Tenda Dhaulagiri Terra 2P Ultralight",
    category: "tenda",
    categoryLabel: "Tenda",
    pricePerDay: 30000,
    stock: 4,
    image: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?auto=format&fit=crop&w=600&q=80",
    spec: "Ultralight 1.8kg, Siliconized Fabric, 2 Doors System",
    desc: "Pilihan terbaik untuk pendaki solo / duo yang mengutamakan bobot ringan."
  },
  {
    id: "p4",
    name: "Carrier Osprey Atmos AG 65 Liter",
    category: "carrier",
    categoryLabel: "Carrier",
    pricePerDay: 50000,
    stock: 5,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    spec: "Anti-Gravity Backsystem, Fit-on-the-Fly, Include Raincover",
    desc: "Carrier kelas premium dengan teknologi Anti-Gravity (AG)."
  },
  {
    id: "p5",
    name: "Carrier Deuter Aircontact 60+10L",
    category: "carrier",
    categoryLabel: "Carrier",
    pricePerDay: 45000,
    stock: 9,
    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?auto=format&fit=crop&w=600&q=80",
    spec: "VariQuick Adjustment System, Heavy Duty Material",
    desc: "Ransel ekspedisi tangguh. Busa tebal dan sirkulasi udara optimal."
  },
  {
    id: "p6",
    name: "Carrier Eiger Rhinos 45 Liter",
    category: "carrier",
    categoryLabel: "Carrier",
    pricePerDay: 30000,
    stock: 15,
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80",
    spec: "Tropic Transit System, Padded Hipbelt",
    desc: "Carrier ukuran sedang 45L ideal untuk perjalanan tektok 2 hari 1 malam."
  },
  {
    id: "p7",
    name: "Sleeping Bag Duck Down (Bulu Angsa) 0°C",
    category: "sleeping",
    categoryLabel: "Sleeping Gear",
    pricePerDay: 25000,
    stock: 20,
    image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=600&q=80",
    spec: "Fill Power 700, Weight 800g, Comfort 0C",
    desc: "Kantong tidur hangat berbahan bulu angsa asli."
  },
  {
    id: "p8",
    name: "Matras Tiup Naturehike TPU Inflatable",
    category: "sleeping",
    categoryLabel: "Sleeping Gear",
    pricePerDay: 15000,
    stock: 2,
    image: "https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?auto=format&fit=crop&w=600&q=80",
    spec: "Ketebalan 6cm, Built-in Pump, Anti Bocor",
    desc: "Matras tiup empuk untuk kenyamanan tidur tanpa takut dingin dari tanah."
  },
  {
    id: "p9",
    name: "Cooking Set Nesting DS-308 + Kompor Windproof",
    category: "cooking",
    categoryLabel: "Alat Masak",
    pricePerDay: 20000,
    stock: 18,
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=600&q=80",
    spec: "Hard Anodized Alumunium, Compact Size",
    desc: "Set alat masak lengkap outdoor kapasitas 3-4 orang."
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
  }
];

function getProducts() {
  const saved = localStorage.getItem("montana_products");
  if (!saved) {
    localStorage.setItem("montana_products", JSON.stringify(INITIAL_PRODUCTS));
    return INITIAL_PRODUCTS;
  }
  return JSON.parse(saved);
}

function saveProducts(products) {
  localStorage.setItem("montana_products", JSON.stringify(products));
}

let products = getProducts();

function renderTableSkeletons(targetTableId, columnsCount = 6, rowsCount = 5) {
  const tbody = document.getElementById(targetTableId);
  if (!tbody) return;

  let rowHtml = `<tr>`;
  for (let i = 0; i < columnsCount; i++) {
    if (i === 0) {
      rowHtml += `
        <td>
          <div style="display:flex; align-items:center; gap:1rem;">
            <div class="skeleton-box skeleton-circle"></div>
            <div style="flex:1;">
              <div class="skeleton-box skeleton-text" style="width: 140px; height: 16px;"></div>
              <div class="skeleton-box skeleton-text" style="width: 90px; height: 10px; margin-bottom:0;"></div>
            </div>
          </div>
        </td>
      `;
    } else {
      rowHtml += `
        <td>
          <div class="skeleton-box skeleton-text" style="width: 70px; height: 14px; margin-bottom: 0;"></div>
        </td>
      `;
    }
  }
  rowHtml += `</tr>`;

  tbody.innerHTML = Array(rowsCount).fill(rowHtml).join("");
}

async function loadAdminProducts() {
  renderTableSkeletons("inventoryTableBody", 6, 5);
  
  if (window.MontanaDB) {
    const remoteData = await window.MontanaDB.fetchProducts();
    if (remoteData && remoteData.length > 0) {
      products = remoteData;
      saveProducts(products);
    }
  }
  renderAdminTable();
  updateAdminMetrics();
}

// DOM Loaded Initialization
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  checkAuthSession();
  setupAuthEvents();
  loadAdminProducts();
  setupAdminEvents();
  setupTabSwitcher();
});

// Tab Switcher: Manajemen Stok ↔ Riwayat Pesanan
function setupTabSwitcher() {
  const tabStock = document.getElementById("tabStockBtn");
  const tabOrders = document.getElementById("tabOrdersBtn");
  const panelStock = document.getElementById("panelStock");
  const panelOrders = document.getElementById("panelOrders");
  const addBtn = document.getElementById("openAddModalBtn");

  tabStock?.addEventListener("click", () => {
    tabStock.classList.add("active");
    tabOrders.classList.remove("active");
    panelStock.style.display = "";
    panelOrders.style.display = "none";
    if (addBtn) addBtn.style.display = "";
  });

  tabOrders?.addEventListener("click", () => {
    tabOrders.classList.add("active");
    tabStock.classList.remove("active");
    panelOrders.style.display = "";
    panelStock.style.display = "none";
    if (addBtn) addBtn.style.display = "none";
    loadOrdersPanel();
  });

  document.getElementById("refreshOrdersBtn")?.addEventListener("click", loadOrdersPanel);
}

// Persistent Authentication System (localStorage)
function checkAuthSession() {
  const isLoggedIn = localStorage.getItem("montana_admin_logged_in") === "true";
  const loginScreen = document.getElementById("adminLoginScreen");
  if (isLoggedIn) {
    if (loginScreen) loginScreen.style.display = "none";
  } else {
    if (loginScreen) loginScreen.style.display = "flex";
  }
}

function setupAuthEvents() {
  const loginForm = document.getElementById("adminLoginForm");
  const loginErrorMsg = document.getElementById("loginErrorMsg");
  const logoutBtn = document.getElementById("logoutAdminBtn");

  loginForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const idInput = document.getElementById("loginAdminId")?.value.trim();
    const passInput = document.getElementById("loginPassword")?.value.trim();

    if (window.MontanaDB) {
      const res = await window.MontanaDB.adminLogin(idInput, passInput);
      if (res.success) {
        localStorage.setItem("montana_admin_logged_in", "true");
        if (loginErrorMsg) loginErrorMsg.style.display = "none";
        checkAuthSession();
        loadAdminProducts();
        return;
      }
    }

    if (loginErrorMsg) {
      loginErrorMsg.innerText = "[!] ID Admin atau Password salah!";
      loginErrorMsg.style.display = "block";
    }
  });

  logoutBtn?.addEventListener("click", () => {
    localStorage.removeItem("montana_admin_logged_in");
    localStorage.removeItem("montana_admin_session");
    checkAuthSession();
  });
}

// Format Currency
function formatRupiah(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0
  }).format(amount);
}

// Render Table
function renderAdminTable() {
  const tableBody = document.getElementById("inventoryTableBody");
  const searchInput = document.getElementById("adminSearchInput")?.value.toLowerCase() || "";
  const catFilter = document.getElementById("adminCategoryFilter")?.value || "all";

  if (!tableBody) return;

  const filtered = products.filter(p => {
    const matchCat = catFilter === "all" || p.category === catFilter;
    const matchSearch = p.name.toLowerCase().includes(searchInput) || p.spec.toLowerCase().includes(searchInput);
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 40px; color: var(--clr-text-dim);">
          Tidak ada data barang yang sesuai.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filtered.map(p => {
    let statusBadge = `<span class="status-badge ok"><span style="width:6px; height:6px; border-radius:50%; background:#00ff66; display:inline-block; margin-right:4px;"></span> Stok Siap (${p.stock})</span>`;
    if (p.stock === 0) {
      statusBadge = `<span class="status-badge empty"><span style="width:6px; height:6px; border-radius:50%; background:#ff4d00; display:inline-block; margin-right:4px;"></span> Habis (0)</span>`;
    } else if (p.stock < 6) {
      statusBadge = `<span class="status-badge low"><span style="width:6px; height:6px; border-radius:50%; background:#ffb800; display:inline-block; margin-right:4px;"></span> Menipis (${p.stock})</span>`;
    }

    return `
      <tr>
        <td>
          <div class="prod-cell">
            <img src="${p.image}" alt="${p.name}" class="prod-cell-img">
            <div>
              <strong style="color: var(--clr-text); display: block; font-family: var(--font-display); font-size: 1.1rem;">${p.name}</strong>
              <small style="color: var(--clr-text-dim);">${p.spec}</small>
            </div>
          </div>
        </td>
        <td><span style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--clr-text-dim); text-transform: uppercase;">${p.categoryLabel || p.category}</span></td>
        <td style="font-family: var(--font-mono); font-weight: 700; color: var(--clr-accent);">${formatRupiah(p.pricePerDay)}</td>
        <td>
          <div class="stock-ctrl">
            <button onclick="updateStock('${p.id}', -1)">-</button>
            <input type="number" value="${p.stock}" onchange="setDirectStock('${p.id}', this.value)" min="0">
            <button onclick="updateStock('${p.id}', 1)">+</button>
          </div>
        </td>
        <td>${statusBadge}</td>
        <td>
          <div style="display: flex; gap: 0.5rem;">
            <button onclick="editProduct('${p.id}')" style="background:transparent; border:1px solid var(--clr-border); color:var(--clr-text); padding:0.4rem 0.75rem; font-size:0.75rem; cursor:pointer;">Edit</button>
            <button onclick="deleteProduct('${p.id}')" style="background:transparent; border:1px solid rgba(255,77,0,0.3); color:#ff4d00; padding:0.4rem 0.75rem; font-size:0.75rem; cursor:pointer;">Hapus</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

// Global references to Chart instances
let categoryStockChartInstance = null;
let popularItemsChartInstance = null;

// Update Admin Dashboard Summary Metrics & Charts
function updateAdminMetrics() {
  const totalItemsEl = document.getElementById("totalItemsCount");
  const totalStockEl = document.getElementById("totalStockCount");
  const lowStockEl = document.getElementById("lowStockCount");

  if (!totalItemsEl) return;

  const totalItems = products.length;
  const totalStock = products.reduce((sum, p) => sum + Number(p.stock), 0);
  const lowStock = products.filter(p => p.stock > 0 && p.stock < 6).length;

  totalItemsEl.innerText = totalItems;
  totalStockEl.innerText = totalStock;
  lowStockEl.innerText = lowStock;

  // Render or Update Charts
  renderCategoryStockChart();
  renderPopularItemsChart();
}

function renderCategoryStockChart() {
  const ctx = document.getElementById("categoryStockChart")?.getContext("2d");
  if (!ctx) return;

  // Calculate stock count by category
  const categories = {};
  products.forEach(p => {
    const cat = p.categoryLabel || p.category;
    categories[cat] = (categories[cat] || 0) + Number(p.stock);
  });

  const labels = Object.keys(categories);
  const data = Object.values(categories);

  if (categoryStockChartInstance) {
    categoryStockChartInstance.data.labels = labels;
    categoryStockChartInstance.data.datasets[0].data = data;
    categoryStockChartInstance.update();
  } else {
    categoryStockChartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: [
            '#ffb800', // Accent
            '#4facfe', // Blue
            '#00ff66', // Green
            '#ff4d00', // Orange
            '#a1a09a', // Grey
            '#8a2be2'  // Purple
          ],
          borderColor: '#111111',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right',
            labels: {
              color: '#e6e5df',
              font: { family: 'Space Mono', size: 10 }
            }
          }
        }
      }
    });
  }
}

async function renderPopularItemsChart() {
  const ctx = document.getElementById("popularItemsChart")?.getContext("2d");
  if (!ctx) return;

  let orders = [];
  if (window.MontanaDB) {
    orders = await window.MontanaDB.fetchOrders();
  }

  // Count item frequency in order list
  const popularity = {};
  orders.forEach(order => {
    if (order.status === "Dibatalkan") return;
    const items = order.items;
    if (Array.isArray(items)) {
      items.forEach(i => {
        popularity[i.name] = (popularity[i.name] || 0) + Number(i.qty || 1);
      });
    }
  });

  // Sort and pick top 5
  const sorted = Object.entries(popularity)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const labels = sorted.map(x => x[0]);
  const data = sorted.map(x => x[1]);

  // Fallback data if no orders
  const finalLabels = labels.length > 0 ? labels : ["Tenda Eiger", "Carrier Osprey", "Sleeping Bag", "Nesting", "Headlamp"];
  const finalData = data.length > 0 ? data : [8, 5, 4, 3, 2];

  if (popularItemsChartInstance) {
    popularItemsChartInstance.data.labels = finalLabels;
    popularItemsChartInstance.data.datasets[0].data = finalData;
    popularItemsChartInstance.update();
  } else {
    popularItemsChartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: finalLabels,
        datasets: [{
          label: 'Total Unit Tersewa',
          data: finalData,
          backgroundColor: 'rgba(255, 184, 0, 0.85)',
          borderColor: '#ffb800',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          x: {
            ticks: { color: '#a1a09a', font: { family: 'Space Mono', size: 9 } },
            grid: { color: 'rgba(255,255,255,0.05)' }
          },
          y: {
            ticks: { color: '#e6e5df', font: { family: 'Space Mono', size: 9 } },
            grid: { display: false }
          }
        }
      }
    });
  }
}

// Quick Stock Management
window.updateStock = async function(productId, delta) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  const newStock = Math.max(0, Number(prod.stock) + delta);
  prod.stock = newStock;
  saveProducts(products);

  if (window.MontanaDB) {
    await window.MontanaDB.updateStock(productId, newStock);
  }

  renderAdminTable();
  updateAdminMetrics();
};

window.setDirectStock = async function(productId, value) {
  const newStock = Math.max(0, parseInt(value) || 0);
  const prod = products.find(p => p.id === productId);
  if (prod) {
    prod.stock = newStock;
    saveProducts(products);

    if (window.MontanaDB) {
      await window.MontanaDB.updateStock(productId, newStock);
    }

    renderAdminTable();
    updateAdminMetrics();
  }
};




// Delete Product
window.deleteProduct = async function(productId) {
  if (confirm("Apakah Anda yakin ingin menghapus alat ini dari inventaris?")) {
    products = products.filter(p => p.id !== productId);
    saveProducts(products);

    if (window.MontanaDB) {
      await window.MontanaDB.deleteProduct(productId);
    }

    renderAdminTable();
    updateAdminMetrics();
  }
};

// Modal & Event Listeners
function setupAdminEvents() {
  const searchInput = document.getElementById("adminSearchInput");
  const catFilter = document.getElementById("adminCategoryFilter");

  searchInput?.addEventListener("input", renderAdminTable);
  catFilter?.addEventListener("change", renderAdminTable);

  // ── Modal ALAT ────────────────────────────────
  const modalAlat = document.getElementById("adminProductModal");
  const closeBtnAlat = document.getElementById("closeAdminModalBtn");
  const overlayAlat = document.getElementById("adminModalOverlay");
  const formAlat = document.getElementById("productForm");
  const closeModalAlat = () => modalAlat?.classList.remove("active");

  document.getElementById("openAddAlatBtn")?.addEventListener("click", () => {
    formAlat?.reset();
    document.getElementById("formProductId").value = "";
    document.getElementById("adminModalTitle").innerText = "Tambah Alat Perlengkapan";
    const alatPreview = document.getElementById("alatImagePreview");
    if (alatPreview) alatPreview.style.display = "none";
    modalAlat?.classList.add("active");
  });

  closeBtnAlat?.addEventListener("click", closeModalAlat);
  overlayAlat?.addEventListener("click", closeModalAlat);

  // ── Image Preview — Alat ──────────────────────
  document.getElementById("formProdFile")?.addEventListener("change", function() {
    const file = this.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const prev = document.getElementById("alatImagePreview");
        const img  = document.getElementById("alatPreviewImg");
        if (prev && img) { img.src = e.target.result; prev.style.display = "block"; }
      };
      reader.readAsDataURL(file);
    }
  });
  document.getElementById("formProdImage")?.addEventListener("input", function() {
    const url  = this.value.trim();
    const prev = document.getElementById("alatImagePreview");
    const img  = document.getElementById("alatPreviewImg");
    if (prev && img) {
      if (url) { img.src = url; prev.style.display = "block"; }
      else { prev.style.display = "none"; }
    }
  });

  formAlat?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const saveBtn = document.getElementById("saveProductBtn");
    if (saveBtn) { saveBtn.disabled = true; saveBtn.innerText = "⏳ Menyimpan..."; }

    const id = document.getElementById("formProductId").value;
    const name = document.getElementById("formProdName").value;
    const category = document.getElementById("formProdCategory").value;
    const pricePerDay = Number(document.getElementById("formProdPrice").value);
    const stock = Number(document.getElementById("formProdStock").value);
    let image = document.getElementById("formProdImage")?.value || "";
    const spec = document.getElementById("formProdSpec").value;
    const desc = document.getElementById("formProdDesc").value;

    const categoryLabels = {
      tenda: "Tenda", carrier: "Carrier", sleeping: "Sleeping Gear",
      cooking: "Alat Masak", gear: "Gear"
    };

    const fileInput = document.getElementById("formProdFile");
    if (fileInput?.files?.length > 0 && window.MontanaDB) {
      const uploadedUrl = await window.MontanaDB.uploadProductImage(fileInput.files[0]);
      if (uploadedUrl) image = uploadedUrl;
    }

    if (!image) image = "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80";

    const payload = {
      id: id || "p_" + Date.now(), name, category,
      categoryLabel: categoryLabels[category] || category,
      pricePerDay, stock, image, spec, desc
    };

    if (window.MontanaDB) await window.MontanaDB.saveProduct(payload);

    if (id) {
      const idx = products.findIndex(p => p.id === id);
      if (idx !== -1) products[idx] = payload;
    } else {
      products.unshift(payload);
    }

    saveProducts(products);
    if (saveBtn) { saveBtn.disabled = false; saveBtn.innerText = "SIMPAN ALAT"; }
    renderAdminTable();
    updateAdminMetrics();
    closeModalAlat();
  });

  // ── Modal PAKET BUNDLING ───────────────────────
  const modalPaket = document.getElementById("adminPaketModal");
  const closeBtnPaket = document.getElementById("closeAdminPaketModalBtn");
  const overlayPaket = document.getElementById("adminPaketModalOverlay");
  const formPaket = document.getElementById("paketForm");
  const closeModalPaket = () => modalPaket?.classList.remove("active");

  document.getElementById("openAddPaketBtn")?.addEventListener("click", () => {
    formPaket?.reset();
    document.getElementById("formPaketId").value = "";
    document.getElementById("adminPaketModalTitle").innerText = "Tambah Paket Bundling";
    const paketPreview = document.getElementById("paketImagePreview");
    if (paketPreview) paketPreview.style.display = "none";
    modalPaket?.classList.add("active");
    setTimeout(() => populatePaketChecklist([]), 80);
  });

  closeBtnPaket?.addEventListener("click", closeModalPaket);
  overlayPaket?.addEventListener("click", closeModalPaket);

  // ── Image Preview — Paket ──────────────────────
  document.getElementById("formPaketFile")?.addEventListener("change", function() {
    const file = this.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const prev = document.getElementById("paketImagePreview");
        const img  = document.getElementById("paketPreviewImg");
        if (prev && img) { img.src = e.target.result; prev.style.display = "block"; }
      };
      reader.readAsDataURL(file);
    }
  });
  document.getElementById("formPaketImage")?.addEventListener("input", function() {
    const url  = this.value.trim();
    const prev = document.getElementById("paketImagePreview");
    const img  = document.getElementById("paketPreviewImg");
    if (prev && img) {
      if (url) { img.src = url; prev.style.display = "block"; }
      else { prev.style.display = "none"; }
    }
  });

  formPaket?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const saveBtn = document.getElementById("savePaketBtn");
    if (saveBtn) { saveBtn.disabled = true; saveBtn.innerText = "⏳ Menyimpan Paket..."; }

    const id            = document.getElementById("formPaketId").value;
    const name          = document.getElementById("formPaketName").value;
    const categoryLabel = document.getElementById("formPaketLabel").value;
    const pricePerDay   = Number(document.getElementById("formPaketPrice").value);
    const stock         = Number(document.getElementById("formPaketStock").value);
    let   image         = document.getElementById("formPaketImage")?.value || "";
    const desc          = document.getElementById("formPaketDesc").value;

    // Bangun spec dari item yang dicentang di checklist
    const checkedItems = getCheckedPaketItems();
    const spec = checkedItems.length > 0
      ? checkedItems.map(i => i.name).join(", ")
      : "-";

    // Upload foto paket ke Supabase Storage
    const fileInput = document.getElementById("formPaketFile");
    if (fileInput?.files?.length > 0 && window.MontanaDB) {
      const uploadedUrl = await window.MontanaDB.uploadProductImage(fileInput.files[0]);
      if (uploadedUrl) image = uploadedUrl;
    }

    if (!image) image = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80";

    const payload = {
      id: id || "pkg_" + Date.now(),
      name,
      category: "paket",
      categoryLabel: categoryLabel || "Paket Bundling",
      pricePerDay,
      stock,
      image,
      spec,
      desc
    };

    if (window.MontanaDB) await window.MontanaDB.saveProduct(payload);

    if (id) {
      const idx = products.findIndex(p => p.id === id);
      if (idx !== -1) products[idx] = payload;
    } else {
      products.unshift(payload);
    }

    saveProducts(products);
    if (saveBtn) { saveBtn.disabled = false; saveBtn.innerText = "SIMPAN PAKET"; }
    renderAdminTable();
    updateAdminMetrics();
    closeModalPaket();
  });
}

// Expose edit product to open correct modal based on category
window.editProduct = function(productId) {
  const prod = products.find(p => p.id === productId);
  if (!prod) return;

  if (prod.category === "paket") {
    // Buka modal paket
    document.getElementById("formPaketId").value = prod.id;
    document.getElementById("formPaketName").value = prod.name;
    document.getElementById("formPaketLabel").value = prod.categoryLabel || "";
    document.getElementById("formPaketPrice").value = prod.pricePerDay;
    document.getElementById("formPaketStock").value = prod.stock;
    document.getElementById("formPaketImage").value = prod.image || "";
    document.getElementById("formPaketDesc").value = prod.desc || "";
    const fileInput = document.getElementById("formPaketFile");
    if (fileInput) fileInput.value = "";
    // Tampilkan preview foto jika ada
    const paketPrev = document.getElementById("paketImagePreview");
    const paketImg  = document.getElementById("paketPreviewImg");
    if (paketPrev && paketImg && prod.image) {
      paketImg.src = prod.image; paketPrev.style.display = "block";
    } else if (paketPrev) {
      paketPrev.style.display = "none";
    }
    document.getElementById("adminPaketModalTitle").innerText = "Edit Paket Bundling";
    document.getElementById("adminPaketModal")?.classList.add("active");
    // Pre-check item checklist berdasarkan spec yang tersimpan
    const specNames = (prod.spec || "").split(",").map(s => s.trim()).filter(Boolean);
    setTimeout(() => populatePaketChecklist(specNames), 80);
  } else {
    // Buka modal alat
    document.getElementById("formProductId").value = prod.id;
    document.getElementById("formProdName").value = prod.name;
    document.getElementById("formProdCategory").value = prod.category;
    document.getElementById("formProdPrice").value = prod.pricePerDay;
    document.getElementById("formProdStock").value = prod.stock;
    document.getElementById("formProdImage").value = prod.image || "";
    document.getElementById("formProdSpec").value = prod.spec || "";
    document.getElementById("formProdDesc").value = prod.desc || "";
    const fileInput = document.getElementById("formProdFile");
    if (fileInput) fileInput.value = "";
    // Tampilkan preview foto jika ada
    const alatPrev = document.getElementById("alatImagePreview");
    const alatImg  = document.getElementById("alatPreviewImg");
    if (alatPrev && alatImg && prod.image) {
      alatImg.src = prod.image; alatPrev.style.display = "block";
    } else if (alatPrev) {
      alatPrev.style.display = "none";
    }
    document.getElementById("adminModalTitle").innerText = "Edit Alat Perlengkapan";
    document.getElementById("adminProductModal")?.classList.add("active");
  }
};


// ==========================================================================
// ORDER MANAGEMENT
// ==========================================================================

async function loadOrdersPanel() {
  const tbody = document.getElementById("ordersTableBody");
  if (!tbody) return;

  renderTableSkeletons("ordersTableBody", 9, 4);

  if (!window.MontanaDB) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:3rem; color:var(--clr-text-dim);">Koneksi Supabase belum aktif.</td></tr>`;
    return;
  }

  const orders = await window.MontanaDB.fetchOrders();
  renderOrdersTable(orders);
}

function renderOrdersTable(orders) {
  const tbody = document.getElementById("ordersTableBody");
  if (!tbody) return;

  // Update stat cards
  const total = orders.length;
  const pending = orders.filter(o => o.status === "Diproses").length;
  const done = orders.filter(o => o.status === "Selesai").length;

  const totalEl = document.getElementById("totalOrdersCount");
  const pendingEl = document.getElementById("pendingOrdersCount");
  const doneEl = document.getElementById("doneOrdersCount");
  const badge = document.getElementById("ordersTabBadge");

  if (totalEl) totalEl.innerText = total;
  if (pendingEl) pendingEl.innerText = pending;
  if (doneEl) doneEl.innerText = done;
  if (badge) badge.innerText = pending > 0 ? pending : "";

  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:3rem; color:var(--clr-text-dim);">Belum ada pesanan masuk.</td></tr>`;
    return;
  }

  tbody.innerHTML = orders.map((order, idx) => {
    const itemsList = Array.isArray(order.items)
      ? order.items.map(i => `${i.name} (${i.qty}x)`).join(", ")
      : "-";

    const statusColors = {
      "Diproses": { color: "#ffb800", bg: "rgba(255,184,0,0.08)", border: "rgba(255,184,0,0.25)" },
      "Disewa":   { color: "#4facfe", bg: "rgba(79,172,254,0.08)", border: "rgba(79,172,254,0.25)" },
      "Selesai":  { color: "#00ff66", bg: "rgba(0,255,102,0.08)", border: "rgba(0,255,102,0.25)" },
      "Dibatalkan": { color: "#ff4d00", bg: "rgba(255,77,0,0.08)", border: "rgba(255,77,0,0.25)" }
    };
    const sc = statusColors[order.status] || statusColors["Diproses"];

    return `
      <tr>
        <td style="font-family:var(--font-mono); color:var(--clr-text-dim); font-size:0.8rem;">${idx + 1}</td>
        <td style="font-family:var(--font-display); font-size:1rem;">${order.renterName}</td>
        <td style="font-family:var(--font-mono); font-size:0.85rem;">${order.startDate}</td>
        <td style="font-family:var(--font-mono); font-size:0.85rem;">${order.endDate}</td>
        <td style="font-family:var(--font-mono); color:var(--clr-accent);">${order.rentalDays} Hari</td>
        <td style="font-size:0.85rem; color:var(--clr-text-dim); max-width:200px;">${itemsList}</td>
        <td style="font-family:var(--font-mono); font-weight:700; color:var(--clr-accent);">${formatRupiah(order.totalPrice)}</td>
        <td>
          <span style="display:inline-flex; align-items:center; padding:0.35rem 0.65rem; font-family:var(--font-mono); font-size:0.72rem; font-weight:700; color:${sc.color}; background:${sc.bg}; border:1px solid ${sc.border};">
            ${order.status}
          </span>
        </td>
        <td>
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <select onchange="changeOrderStatus('${order.id}', this.value)" style="padding:0.4rem 0.5rem; background:var(--clr-bg); border:1px solid var(--clr-border); color:var(--clr-text); font-family:var(--font-mono); font-size:0.75rem; cursor:pointer;">
              <option value="Diproses" ${order.status === 'Diproses' ? 'selected' : ''}>Diproses</option>
              <option value="Disewa" ${order.status === 'Disewa' ? 'selected' : ''}>Disewa</option>
              <option value="Selesai" ${order.status === 'Selesai' ? 'selected' : ''}>Selesai</option>
              <option value="Dibatalkan" ${order.status === 'Dibatalkan' ? 'selected' : ''}>Dibatalkan</option>
            </select>
            <button onclick="printInvoice('${order.id}')" style="background:var(--clr-accent); border:1px solid var(--clr-accent); color:#ffffff; padding:0.4rem 0.75rem; font-size:0.75rem; cursor:pointer; font-family:var(--font-mono); font-weight:bold;">Cetak</button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

window.changeOrderStatus = async function(orderId, newStatus) {
  if (!window.MontanaDB) return;
  const ok = await window.MontanaDB.updateOrderStatus(orderId, newStatus);
  if (ok) loadOrdersPanel();
};

// ==========================================================================
// PAKET CHECKLIST HELPERS
// ==========================================================================

function populatePaketChecklist(preSelectedNames = []) {
  const box     = document.getElementById("paketChecklistBox");
  const countEl = document.getElementById("checkedCount");
  if (!box) return;

  const nonPaket = products.filter(p => p.category !== "paket");
  if (nonPaket.length === 0) {
    box.innerHTML = '<div class="checklist-empty">Belum ada alat tersedia. Tambahkan alat terlebih dahulu.</div>';
    if (countEl) countEl.innerText = "0 dipilih";
    return;
  }

  // Parse kuantitas dari nama spec yang tersimpan sebelumnya (contoh: "Tenda Consina (2x)" -> nama: "Tenda Consina", qty: 2)
  const preSelectedMap = {};
  preSelectedNames.forEach(itemStr => {
    let name = itemStr.trim();
    let qty = 1;
    
    // Cari pola "(2x)" atau "2x" di string
    const qtyMatch = name.match(/\((\d+)x\)/) || name.match(/(\d+)x\s+/);
    if (qtyMatch) {
      qty = parseInt(qtyMatch[1]) || 1;
      name = name.replace(/\(\d+x\)/, '').replace(/\d+x\s+/, '').trim();
    }
    
    if (name) {
      preSelectedMap[name.toLowerCase()] = qty;
    }
  });

  const catOrder  = ["tenda", "carrier", "sleeping", "cooking", "gear"];
  const catLabels = {
    tenda: "🏕️ Tenda",
    carrier: "🎒 Ransel & Carrier",
    sleeping: "😴 Sleeping Gear",
    cooking: "🍳 Alat Masak",
    gear: "💡 Penerangan & Gear"
  };

  const grouped = {};
  catOrder.forEach(c => { grouped[c] = []; });
  nonPaket.forEach(p => {
    const cat = catOrder.includes(p.category) ? p.category : "gear";
    grouped[cat].push(p);
  });

  let html = "";
  catOrder.forEach(cat => {
    const items = grouped[cat];
    if (!items || items.length === 0) return;
    html += `<div class="checklist-group-label" style="font-family:var(--font-mono); font-size:0.65rem; color:var(--clr-accent); padding:0.6rem 0.75rem 0.3rem; text-transform:uppercase;">${catLabels[cat]}</div>`;
    items.forEach(p => {
      // Periksa kecocokan
      let isChecked = false;
      let matchedQty = 1;
      
      const pNameLower = p.name.toLowerCase();
      for (const [savedName, qty] of Object.entries(preSelectedMap)) {
        if (pNameLower.includes(savedName) || savedName.includes(pNameLower)) {
          isChecked = true;
          matchedQty = qty;
          break;
        }
      }
      
      const stockColor = p.stock === 0 ? "#ff4d00" : p.stock < 5 ? "#ffb800" : "#00ff66";
      const stockText  = `(${p.stock === 0 ? "Habis" : "Stok: " + p.stock})`;

      html += `
        <div class="checklist-item" style="display:flex; align-items:center; justify-content:space-between; gap:0.75rem; padding:0.6rem 0.75rem; border-bottom:1px solid var(--clr-bg-alt);">
          <label style="display:flex; align-items:center; gap:0.75rem; flex:1; min-width:0; cursor:pointer; margin:0;">
            <input type="checkbox" class="paket-item-check"
              value="${p.id}"
              data-name="${p.name.replace(/"/g, '&quot;')}"
              data-price="${p.pricePerDay}"
              style="width:16px; height:16px; accent-color:var(--clr-accent);"
              ${isChecked ? "checked" : ""}>
            <img src="${p.image || ""}" alt="${p.name}" class="checklist-item-thumb" style="width:36px; height:36px; object-fit:cover; filter:grayscale(40%);"
              onerror="this.style.opacity='0.15'">
            <div class="checklist-item-info" style="flex:1; min-width:0;">
              <div class="checklist-item-name" style="font-size:0.9rem; font-family:var(--font-display); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">
                ${p.name}
                <span style="font-family:var(--font-mono); font-size:0.6rem; color:${stockColor}; margin-left:4px;">${stockText}</span>
              </div>
              <div class="checklist-item-sub" style="font-size:0.72rem; color:var(--clr-text-dim); font-family:var(--font-mono);">${p.spec || ""}</div>
            </div>
          </label>
          <div style="display:flex; align-items:center; gap:0.75rem; flex-shrink:0;">
            <div style="font-family:var(--font-mono); font-size:0.78rem; color:var(--clr-accent);">${formatRupiah(p.pricePerDay)}<span style="font-size:0.65rem; color:var(--clr-text-dim);">/hr</span></div>
            <div style="display:flex; align-items:center; gap:4px; background:var(--clr-bg-alt); padding:2px; border:1px solid var(--clr-border);">
              <span style="font-family:var(--font-mono); font-size:0.7rem; padding:0 4px; color:var(--clr-text-dim);">Qty:</span>
              <input type="number" class="paket-item-qty" 
                value="${matchedQty}" 
                min="1" 
                max="20"
                style="width:42px; padding:2px; background:transparent; color:var(--clr-text); border:none; text-align:center; font-family:var(--font-mono); font-size:0.8rem;"
                ${isChecked ? "" : "disabled"}>
            </div>
          </div>
        </div>`;
    });
  });

  box.innerHTML = html;

  // Sinkronisasi status disabled input Qty saat Checkbox dicentang
  box.querySelectorAll(".checklist-item").forEach(row => {
    const cb = row.querySelector(".paket-item-check");
    const qtyInput = row.querySelector(".paket-item-qty");
    
    cb.addEventListener("change", () => {
      qtyInput.disabled = !cb.checked;
      updateSummary();
    });
    
    qtyInput.addEventListener("input", updateSummary);
  });

  function updateSummary() {
    const checkedRows = [...box.querySelectorAll(".checklist-item")].filter(row => row.querySelector(".paket-item-check").checked);
    if (countEl) countEl.innerText = `${checkedRows.length} dipilih`;

    const specPreview = document.getElementById("paketSpecPreview");
    if (specPreview) {
      if (checkedRows.length === 0) {
        specPreview.innerText = "Pilih alat di atas untuk membentuk isi paket...";
        specPreview.style.color = "var(--clr-text-dim)";
      } else {
        const specs = checkedRows.map(row => {
          const name = row.querySelector(".paket-item-check").dataset.name;
          const qty  = row.querySelector(".paket-item-qty").value;
          return qty > 1 ? `${name} (${qty}x)` : name;
        });
        specPreview.innerText = specs.join(", ");
        specPreview.style.color = "var(--clr-text)";
      }
    }

    const totalPrice = checkedRows.reduce((sum, row) => {
      const price = Number(row.querySelector(".paket-item-check").dataset.price);
      const qty   = Number(row.querySelector(".paket-item-qty").value) || 1;
      return sum + (price * qty);
    }, 0);

    const suggestedEl = document.getElementById("paketSuggestedPrice");
    if (suggestedEl) {
      if (checkedRows.length > 0) {
        suggestedEl.innerText = `💡 Saran harga: ${formatRupiah(totalPrice)}/hari (total alat terpilih)`;
        suggestedEl.style.display = "block";
      } else {
        suggestedEl.style.display = "none";
      }
    }
  }

  updateSummary();
}

function getCheckedPaketItems() {
  const box = document.getElementById("paketChecklistBox");
  if (!box) return [];
  return [...box.querySelectorAll(".checklist-item")].filter(row => row.querySelector(".paket-item-check").checked).map(row => {
    const cb = row.querySelector(".paket-item-check");
    const qty = Number(row.querySelector(".paket-item-qty").value) || 1;
    return {
      id:          cb.value,
      name:        qty > 1 ? `${cb.dataset.name} (${qty}x)` : cb.dataset.name,
      pricePerDay: Number(cb.dataset.price) * qty
    };
  });
}

window.printInvoice = async function(orderId) {
  if (!window.MontanaDB) return;
  const orders = await window.MontanaDB.fetchOrders();
  const order = orders.find(o => o.id === orderId);
  if (!order) {
    alert("Pesanan tidak ditemukan!");
    return;
  }

  const printArea = document.getElementById("printInvoiceArea");
  if (!printArea) return;

  const itemsHtml = Array.isArray(order.items)
    ? order.items.map(item => `
        <tr>
          <td>${item.name}</td>
          <td style="text-align: center;">${item.qty || 1}x</td>
          <td style="text-align: right;">${formatRupiah(item.pricePerDay || 0)}</td>
        </tr>
      `).join("")
    : "<tr><td colspan='3'>Tidak ada item</td></tr>";

  const dateNow = new Date().toLocaleDateString("id-ID", {
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
  });

  printArea.innerHTML = `
    <div class="print-header">
      <h2 class="print-title">MONTANA OUTDOOR</h2>
      <p style="margin: 2px 0; font-size: 11px;">Basecamp Sewa Alat Gunung Premium</p>
      <p style="margin: 2px 0; font-size: 10px;">Jl. Pendaki No. 88, Gunung Permai, Indonesia</p>
    </div>
    
    <div style="font-size: 12px; margin-bottom: 15px; font-weight: bold; text-align: center; text-transform: uppercase;">
      BUKTI PENYEWAAN ALAT / INVOICE
    </div>

    <div class="print-grid">
      <div>No. Invoice</div><div>: <strong>${order.id}</strong></div>
      <div>Nama Penyewa</div><div>: ${order.renterName}</div>
      <div>Tgl Ambil</div><div>: ${order.startDate}</div>
      <div>Tgl Kembali</div><div>: ${order.endDate}</div>
      <div>Durasi Sewa</div><div>: ${order.rentalDays} Hari</div>
      <div>Status Pesanan</div><div>: [ ${order.status.toUpperCase()} ]</div>
      <div>Waktu Cetak</div><div>: ${dateNow}</div>
    </div>

    <table class="print-table">
      <thead>
        <tr>
          <th style="width: 60%;">Nama Barang</th>
          <th style="width: 15%; text-align: center;">Jumlah</th>
          <th style="width: 25%; text-align: right;">Sewa / Hari</th>
        </tr>
      </thead>
      <tbody>
        ${itemsHtml}
        <tr class="print-total-row">
          <td colspan="2" style="padding: 10px 5px; font-size: 14px;">TOTAL BIAYA (${order.rentalDays} HARI)</td>
          <td style="text-align: right; padding: 10px 5px; font-size: 14px;">${formatRupiah(order.totalPrice)}</td>
        </tr>
      </tbody>
    </table>

    <div style="margin-top: 30px; display: flex; justify-content: space-between; font-size: 11px;">
      <div style="text-align: center; width: 40%;">
        <p style="margin-bottom: 50px;">Petugas Basecamp,</p>
        <p style="text-decoration: underline;">(.......................)</p>
      </div>
      <div style="text-align: center; width: 40%;">
        <p style="margin-bottom: 50px;">Penyewa Alat,</p>
        <p style="text-decoration: underline;">( ${order.renterName} )</p>
      </div>
    </div>

    <div class="print-footer">
      <p>Terima kasih telah mempercayakan petualangan Anda bersama Montana Outdoor.</p>
      <p style="font-weight: bold; margin-top: 5px;">#UTAMAKAN_KESELAMATAN_SAAT_MENDAKI</p>
    </div>
  `;

  // Trigger print
  window.print();
};


