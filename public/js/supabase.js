// Montana Outdoor - Supabase Integration Module
let SUPABASE_URL = 'https://uyncdhbzznqzcmhhglng.supabase.co';
let SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5bmNkaGJ6em5xemNtaGhnbG5nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODczMDE0NzYsImV4cCI6MjEwMjg3NzQ3Nn0.55YB2r2aiovuPaBeuKcQ2K0XVoD2XcQ-KjoIrd4MB_w';

let supabaseClient = null;

async function initSupabaseConfig() {
  try {
    const res = await fetch('/api/config');
    if (res.ok) {
      const config = await res.json();
      if (config.supabaseUrl) SUPABASE_URL = config.supabaseUrl;
      if (config.supabaseAnonKey) SUPABASE_ANON_KEY = config.supabaseAnonKey;
    }
  } catch (err) {
    console.warn("Menggunakan fallback URL/Key Supabase default.");
  }

  if (window.supabase) {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
}

// Inisialisasi awal
initSupabaseConfig();

window.MontanaDB = {
  // Fetch all products from Supabase
  async fetchProducts() {
    if (!supabaseClient) await initSupabaseConfig();
    if (!supabaseClient) return null;
    try {
      const { data, error } = await supabaseClient
        .from('products')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) {
        console.error("Gagal mengambil data dari Supabase DB:", error.message);
        return null;
      }

      if (!data || data.length === 0) return [];

      return data.map(item => ({
        id: item.id,
        name: item.name,
        category: item.category,
        categoryLabel: item.category_label || item.category,
        pricePerDay: item.price_per_day,
        stock: item.stock,
        image: item.image,
        spec: item.spec,
        desc: item.desc
      }));
    } catch (err) {
      console.error("Error pada fetchProducts Supabase:", err);
      return null;
    }
  },

  // Seed default products to Supabase if empty
  async seedProducts(defaultProducts) {
    if (!supabaseClient) await initSupabaseConfig();
    if (!supabaseClient) return false;
    try {
      const dbFormat = defaultProducts.map(p => ({
        id: p.id,
        name: p.name,
        category: p.category,
        category_label: p.categoryLabel || p.category,
        price_per_day: p.pricePerDay,
        stock: p.stock,
        image: p.image,
        spec: p.spec,
        desc: p.desc
      }));

      const { error } = await supabaseClient.from('products').upsert(dbFormat, { onConflict: 'id' });
      if (error) {
        console.error("Gagal melakukan auto-seed ke Supabase:", error.message);
        return false;
      }
      return true;
    } catch (err) {
      console.error("Error auto-seed:", err);
      return false;
    }
  },

  // Save (insert or update) a single product
  async saveProduct(product) {
    if (!supabaseClient) await initSupabaseConfig();
    if (!supabaseClient) return false;
    try {
      const payload = {
        id: product.id || 'p_' + Date.now(),
        name: product.name,
        category: product.category,
        category_label: product.categoryLabel || product.category,
        price_per_day: Number(product.pricePerDay),
        stock: Number(product.stock),
        image: product.image,
        spec: product.spec || '',
        desc: product.desc || ''
      };

      const { error } = await supabaseClient.from('products').upsert(payload, { onConflict: 'id' });
      if (error) {
        console.error("Gagal menyimpan produk ke Supabase DB:", error.message);
        return false;
      }
      return true;
    } catch (err) {
      console.error("Error saveProduct:", err);
      return false;
    }
  },

  // Update stock level for a product
  async updateStock(id, newStock) {
    if (!supabaseClient) await initSupabaseConfig();
    if (!supabaseClient) return false;
    try {
      const { error } = await supabaseClient
        .from('products')
        .update({ stock: Number(newStock) })
        .eq('id', id);

      if (error) {
        console.error("Gagal update stok di Supabase DB:", error.message);
        return false;
      }
      return true;
    } catch (err) {
      console.error("Error updateStock:", err);
      return false;
    }
  },

  // Delete product from Supabase
  async deleteProduct(id) {
    if (!supabaseClient) await initSupabaseConfig();
    if (!supabaseClient) return false;
    try {
      const { error } = await supabaseClient
        .from('products')
        .delete()
        .eq('id', id);

      if (error) {
        console.error("Gagal menghapus produk dari Supabase DB:", error.message);
        return false;
      }
      return true;
    } catch (err) {
      console.error("Error deleteProduct:", err);
      return false;
    }
  },

  // Upload image file to Supabase Storage Bucket ('product-images')
  async uploadProductImage(file) {
    if (!supabaseClient) await initSupabaseConfig();
    if (!supabaseClient) return null;
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `img_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabaseClient
        .storage
        .from('product-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: true
        });

      if (uploadError) {
        console.error("Gagal unggah foto ke Supabase Storage:", uploadError.message);
        return null;
      }

      // Retrieve public URL
      const { data } = supabaseClient
        .storage
        .from('product-images')
        .getPublicUrl(filePath);

      return data ? data.publicUrl : null;
    } catch (err) {
      console.error("Error uploadProductImage:", err);
      return null;
    }
  },

  // Admin Login via Supabase Auth with fallback
  async adminLogin(adminIdOrEmail, password) {
    if (!supabaseClient) await initSupabaseConfig();
    if (supabaseClient) {
      try {
        const email = adminIdOrEmail.includes('@') ? adminIdOrEmail : `${adminIdOrEmail}@montanaoutdoor.com`;
        const { data, error } = await supabaseClient.auth.signInWithPassword({
          email: email,
          password: password
        });

        if (!error && data?.user) {
          sessionStorage.setItem("montana_admin_session", JSON.stringify({
            token: data.session.access_token,
            user: data.user.email
          }));
          return { success: true, user: data.user };
        }
      } catch (err) {
        console.warn("Supabase Auth error, trying local fallback:", err);
      }
    }

    if (adminIdOrEmail.toLowerCase() === "admin" && password === "admin123") {
      sessionStorage.setItem("montana_admin_session", JSON.stringify({
        token: "local_session_admin",
        user: "admin@montanaoutdoor.com"
      }));
      return { success: true, isLocalFallback: true };
    }

    return { success: false, message: "ID Admin atau Password tidak sesuai!" };
  },

  // Create Order in Supabase DB (Table 'orders')
  async createOrder(orderData) {
    if (!supabaseClient) await initSupabaseConfig();
    if (!supabaseClient) return null;
    try {
      const payload = {
        id: 'ord_' + Date.now(),
        renter_name: orderData.name,
        start_date: orderData.startDate,
        end_date: orderData.endDate,
        rental_days: Number(orderData.rentalDays),
        items: JSON.stringify(orderData.items),
        total_price: Number(orderData.totalPrice),
        status: 'Diproses'
      };

      const { data, error } = await supabaseClient.from('orders').insert([payload]).select();
      if (error) {
        console.warn("Simpan order ke Supabase DB warning:", error.message);
        return null;
      }
      return data ? data[0] : null;
    } catch (err) {
      console.warn("Error createOrder:", err);
      return null;
    }
  },

  // Fetch all orders from Supabase DB
  async fetchOrders() {
    if (!supabaseClient) await initSupabaseConfig();
    if (!supabaseClient) return [];
    try {
      const { data, error } = await supabaseClient
        .from('orders')
        .select('*')
        .order('created_at', { ascending: false });

      if (error || !data) return [];
      return data.map(item => ({
        id: item.id,
        renterName: item.renter_name,
        startDate: item.start_date,
        endDate: item.end_date,
        rentalDays: item.rental_days,
        items: typeof item.items === 'string' ? JSON.parse(item.items) : item.items,
        totalPrice: item.total_price,
        status: item.status || 'Diproses',
        createdAt: item.created_at
      }));
    } catch (err) {
      console.warn("Error fetchOrders:", err);
      return [];
    }
  },

  // Update order status
  async updateOrderStatus(id, newStatus) {
    if (!supabaseClient) await initSupabaseConfig();
    if (!supabaseClient) return false;
    try {
      const { error } = await supabaseClient
        .from('orders')
        .update({ status: newStatus })
        .eq('id', id);

      return !error;
    } catch (err) {
      console.warn("Error updateOrderStatus:", err);
      return false;
    }
  }
};
