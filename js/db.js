/**
 * TRAVEL EXPLORER PAKISTAN - UNIVERSAL DATABASE LAYER
 * Seamlessly interfaces with Supabase Cloud backend with graceful local persistence fallback.
 */

const STORAGE_KEYS = {
  DESTINATIONS: "tep_destinations",
  PACKAGES: "tep_packages",
  BOOKINGS: "tep_bookings",
  REVIEWS: "tep_reviews",
  USER: "tep_current_user",
  SETTINGS: "tep_settings"
};

// Initialize Local Store with default data if empty
function initializeLocalStorage() {
  if (!localStorage.getItem(STORAGE_KEYS.DESTINATIONS)) {
    localStorage.setItem(STORAGE_KEYS.DESTINATIONS, JSON.stringify(window.TEP_DATA.destinations));
  }
  if (!localStorage.getItem(STORAGE_KEYS.PACKAGES)) {
    localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(window.TEP_DATA.packages));
  }
  if (!localStorage.getItem(STORAGE_KEYS.REVIEWS)) {
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(window.TEP_DATA.reviews));
  }
  if (!localStorage.getItem(STORAGE_KEYS.BOOKINGS)) {
    // Seed sample bookings for realistic demonstration
    const sampleBookings = [
      {
        id: "bkg-001",
        booking_reference: "TEP-2026-9481",
        package_id: "pkg-hunza-expedition",
        package_title: "Karakoram Grandeur: Ultimate Hunza & Khunjerab Expedition",
        destination_name: "Hunza Valley",
        travel_date: "2026-10-10",
        travelers_count: 2,
        travelers_breakdown: { adults: 2, children: 0 },
        customer_name: "Taimur Khan",
        customer_email: "taimur.khan@gmail.com",
        customer_phone: "+92 300 1234567",
        customer_cnic: "37405-1234567-1",
        departure_city: "Islamabad",
        addons: ["Camp & Sleeping Bag Upgrade"],
        special_requests: "Window seat preferred during coaster journey",
        subtotal_pkr: 170000,
        addons_pkr: 6000,
        total_pkr: 176000,
        payment_method: "Bank Transfer / Raast",
        payment_status: "Verified",
        booking_status: "Confirmed",
        created_at: new Date(Date.now() - 86400000 * 3).toISOString()
      },
      {
        id: "bkg-002",
        booking_reference: "TEP-2026-5812",
        package_id: "pkg-swat-kalam",
        package_title: "Jewels of Swat & Kalam Valley: Alpine Paradise",
        destination_name: "Swat Valley",
        travel_date: "2026-10-18",
        travelers_count: 3,
        travelers_breakdown: { adults: 2, children: 1 },
        customer_name: "Fatima Zahra",
        customer_email: "fatima.zahra@outlook.com",
        customer_phone: "+92 321 9876543",
        customer_cnic: "35201-9876543-2",
        departure_city: "Lahore",
        addons: ["Airport VIP Pickup", "Professional Drone / Photographer"],
        special_requests: "Vegetarian meal options for 1 traveler",
        subtotal_pkr: 126000,
        addons_pkr: 12000,
        total_pkr: 138000,
        payment_method: "JazzCash",
        payment_status: "Pending",
        booking_status: "Pending",
        created_at: new Date(Date.now() - 86400000).toISOString()
      }
    ];
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(sampleBookings));
  }
}

// Call initialization
initializeLocalStorage();

/**
 * Universal Database API
 */
const TEP_DB = {
  // -------------------------------------------------------------
  // DESTINATIONS
  // -------------------------------------------------------------
  async getDestinations() {
    const client = getSupabaseClient();
    if (client) {
      try {
        const { data, error } = await client.from("destinations").select("*").order("name");
        if (!error && data && data.length > 0) {
          localStorage.setItem(STORAGE_KEYS.DESTINATIONS, JSON.stringify(data));
          return data;
        }
      } catch (e) {
        console.warn("Supabase getDestinations fallback:", e);
      }
    }
    const local = localStorage.getItem(STORAGE_KEYS.DESTINATIONS);
    return local ? JSON.parse(local) : window.TEP_DATA.destinations;
  },

  async getDestinationById(id) {
    const list = await this.getDestinations();
    return list.find(d => d.id === id) || null;
  },

  async saveDestination(dest) {
    // 1. Update Local Storage
    const list = await this.getDestinations();
    const idx = list.findIndex(d => d.id === dest.id);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...dest };
    } else {
      list.push(dest);
    }
    localStorage.setItem(STORAGE_KEYS.DESTINATIONS, JSON.stringify(list));

    // 2. Sync to Supabase
    const client = getSupabaseClient();
    if (client) {
      try {
        await client.from("destinations").upsert(dest, { onConflict: "id" });
      } catch (e) {
        console.warn("Supabase saveDestination error:", e);
      }
    }
    return dest;
  },

  async deleteDestination(id) {
    // 1. Update Local Storage
    let list = await this.getDestinations();
    list = list.filter(d => d.id !== id);
    localStorage.setItem(STORAGE_KEYS.DESTINATIONS, JSON.stringify(list));

    // 2. Sync to Supabase
    const client = getSupabaseClient();
    if (client) {
      try {
        await client.from("destinations").delete().eq("id", id);
      } catch (e) {
        console.warn("Supabase deleteDestination error:", e);
      }
    }
    return true;
  },

  // -------------------------------------------------------------
  // PACKAGES
  // -------------------------------------------------------------
  async getPackages() {
    const client = getSupabaseClient();
    if (client) {
      try {
        const { data, error } = await client.from("packages").select("*").order("price_pkr");
        if (!error && data && data.length > 0) {
          localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(data));
          return data;
        }
      } catch (e) {
        console.warn("Supabase getPackages fallback:", e);
      }
    }
    const local = localStorage.getItem(STORAGE_KEYS.PACKAGES);
    return local ? JSON.parse(local) : window.TEP_DATA.packages;
  },

  async getPackageById(id) {
    const list = await this.getPackages();
    return list.find(p => p.id === id) || null;
  },

  async savePackage(pkg) {
    // 1. Update Local Storage
    const list = await this.getPackages();
    const idx = list.findIndex(p => p.id === pkg.id);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...pkg };
    } else {
      list.push(pkg);
    }
    localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(list));

    // 2. Sync to Supabase
    const client = getSupabaseClient();
    if (client) {
      try {
        await client.from("packages").upsert(pkg, { onConflict: "id" });
      } catch (e) {
        console.warn("Supabase savePackage error:", e);
      }
    }
    return pkg;
  },

  async deletePackage(id) {
    let list = await this.getPackages();
    list = list.filter(p => p.id !== id);
    localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(list));

    const client = getSupabaseClient();
    if (client) {
      try {
        await client.from("packages").delete().eq("id", id);
      } catch (e) {
        console.warn("Supabase deletePackage error:", e);
      }
    }
    return true;
  },

  // -------------------------------------------------------------
  // BOOKINGS
  // -------------------------------------------------------------
  async getBookings() {
    const client = getSupabaseClient();
    if (client) {
      try {
        const { data, error } = await client.from("bookings").select("*").order("created_at", { ascending: false });
        if (!error && data && data.length > 0) {
          localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(data));
          return data;
        }
      } catch (e) {
        console.warn("Supabase getBookings fallback:", e);
      }
    }
    const local = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
    return local ? JSON.parse(local) : [];
  },

  async getBookingByRef(ref) {
    const list = await this.getBookings();
    return list.find(b => b.booking_reference === ref || b.id === ref) || null;
  },

  async getUserBookings(email) {
    const list = await this.getBookings();
    if (!email) return list;
    return list.filter(b => b.customer_email && b.customer_email.toLowerCase() === email.toLowerCase());
  },

  async saveBooking(bookingData) {
    // Generate unique reference if missing
    if (!bookingData.booking_reference) {
      const rand = Math.floor(1000 + Math.random() * 9000);
      bookingData.booking_reference = `TEP-2026-${rand}`;
    }
    if (!bookingData.id) {
      bookingData.id = "bkg-" + Date.now();
    }
    bookingData.created_at = bookingData.created_at || new Date().toISOString();

    // 1. Update Local Storage
    const list = await this.getBookings();
    const idx = list.findIndex(b => b.booking_reference === bookingData.booking_reference);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...bookingData };
    } else {
      list.unshift(bookingData);
    }
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(list));

    // 2. Sync to Supabase
    const client = getSupabaseClient();
    if (client) {
      try {
        // Strip or adjust fields if necessary
        const { data, error } = await client.from("bookings").insert([bookingData]).select();
        if (error) {
          console.warn("Supabase booking insert warning:", error);
        } else if (data && data[0]) {
          console.log("Booking successfully recorded in Supabase cloud:", data[0].booking_reference);
        }
      } catch (e) {
        console.warn("Supabase saveBooking error:", e);
      }
    }
    return bookingData;
  },

  async updateBookingStatus(refOrId, status, paymentStatus) {
    const list = await this.getBookings();
    const item = list.find(b => b.booking_reference === refOrId || b.id === refOrId);
    if (!item) return false;

    if (status) item.booking_status = status;
    if (paymentStatus) item.payment_status = paymentStatus;
    item.updated_at = new Date().toISOString();

    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(list));

    const client = getSupabaseClient();
    if (client) {
      try {
        await client.from("bookings")
          .update({ booking_status: item.booking_status, payment_status: item.payment_status })
          .or(`booking_reference.eq.${item.booking_reference},id.eq.${item.id}`);
      } catch (e) {
        console.warn("Supabase updateBookingStatus error:", e);
      }
    }
    return item;
  },

  async deleteBooking(refOrId) {
    let list = await this.getBookings();
    const item = list.find(b => b.booking_reference === refOrId || b.id === refOrId);
    list = list.filter(b => b.booking_reference !== refOrId && b.id !== refOrId);
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(list));

    const client = getSupabaseClient();
    if (client && item) {
      try {
        await client.from("bookings").delete().or(`booking_reference.eq.${item.booking_reference},id.eq.${item.id}`);
      } catch (e) {
        console.warn("Supabase deleteBooking error:", e);
      }
    }
    return true;
  },

  // -------------------------------------------------------------
  // REVIEWS
  // -------------------------------------------------------------
  async getReviews(targetType = null, targetId = null) {
    const client = getSupabaseClient();
    if (client) {
      try {
        let query = client.from("reviews").select("*").order("created_at", { ascending: false });
        if (targetType) query = query.eq("target_type", targetType);
        if (targetId) query = query.eq("target_id", targetId);
        const { data, error } = await query;
        if (!error && data && data.length > 0) {
          return data;
        }
      } catch (e) {
        console.warn("Supabase getReviews fallback:", e);
      }
    }

    const local = localStorage.getItem(STORAGE_KEYS.REVIEWS);
    let list = local ? JSON.parse(local) : window.TEP_DATA.reviews;
    if (targetType) list = list.filter(r => r.target_type === targetType);
    if (targetId) list = list.filter(r => r.target_id === targetId);
    return list;
  },

  async addReview(review) {
    review.id = review.id || "rev-" + Date.now();
    review.created_at = review.created_at || new Date().toISOString();
    review.verified = true;

    // 1. Local
    const local = localStorage.getItem(STORAGE_KEYS.REVIEWS);
    const list = local ? JSON.parse(local) : window.TEP_DATA.reviews;
    list.unshift(review);
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(list));

    // 2. Supabase
    const client = getSupabaseClient();
    if (client) {
      try {
        await client.from("reviews").insert([review]);
      } catch (e) {
        console.warn("Supabase addReview error:", e);
      }
    }
    return review;
  },

  async deleteReview(id) {
    const local = localStorage.getItem(STORAGE_KEYS.REVIEWS);
    let list = local ? JSON.parse(local) : window.TEP_DATA.reviews;
    list = list.filter(r => r.id !== id);
    localStorage.setItem(STORAGE_KEYS.REVIEWS, JSON.stringify(list));

    const client = getSupabaseClient();
    if (client) {
      try {
        await client.from("reviews").delete().eq("id", id);
      } catch (e) {
        console.warn("Supabase deleteReview error:", e);
      }
    }
    return true;
  },

  // -------------------------------------------------------------
  // ANALYTICS & STATS
  // -------------------------------------------------------------
  async getDashboardStats() {
    const bookings = await this.getBookings();
    const destinations = await this.getDestinations();
    const packages = await this.getPackages();
    const reviews = await this.getReviews();

    const totalBookings = bookings.length;
    const confirmedBookings = bookings.filter(b => b.booking_status === "Confirmed").length;
    const pendingBookings = bookings.filter(b => b.booking_status === "Pending").length;
    const totalRevenuePkr = bookings
      .filter(b => b.booking_status !== "Cancelled")
      .reduce((sum, b) => sum + (Number(b.total_pkr) || 0), 0);

    const avgRating = reviews.length > 0 
      ? (reviews.reduce((sum, r) => sum + (Number(r.rating) || 5), 0) / reviews.length).toFixed(1) 
      : "4.9";

    return {
      totalBookings,
      confirmedBookings,
      pendingBookings,
      totalRevenuePkr,
      destinationsCount: destinations.length,
      packagesCount: packages.length,
      reviewsCount: reviews.length,
      avgRating
    };
  }
};

window.TEP_DB = TEP_DB;
