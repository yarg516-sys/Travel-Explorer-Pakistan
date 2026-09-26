/**
 * TRAVEL EXPLORER PAKISTAN - SUPABASE DATABASE ADAPTER
 * Direct, live integration with Supabase Cloud Database.
 * Supabase is the sole source of truth.
 */

function getClientOrThrow() {
  const client = getSupabaseClient();
  if (!client) {
    throw new Error("Unable to connect to Supabase. Please ensure the Supabase client library is loaded.");
  }
  return client;
}

const TEP_DB = {
  // =============================================================
  // DESTINATIONS (Supabase public.destinations)
  // =============================================================
  async getDestinations() {
    const client = getClientOrThrow();
    const { data, error } = await client
      .from("destinations")
      .select("*")
      .order("name", { ascending: true });

    if (error) {
      console.error("Supabase Error (getDestinations):", error);
      throw new Error(`Supabase query failed for destinations: ${error.message}`);
    }
    return data || [];
  },

  async getDestinationById(id) {
    const client = getClientOrThrow();
    const { data, error } = await client
      .from("destinations")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      console.error(`Supabase Error (getDestinationById ${id}):`, error);
      throw new Error(`Failed to load destination '${id}' from Supabase: ${error.message}`);
    }
    return data;
  },

  async saveDestination(dest) {
    const client = getClientOrThrow();
    const { data, error } = await client
      .from("destinations")
      .upsert(dest, { onConflict: "id" })
      .select();

    if (error) {
      console.error("Supabase Error (saveDestination):", error);
      throw new Error(`Failed to save destination in Supabase: ${error.message}`);
    }
    return data && data[0] ? data[0] : dest;
  },

  async deleteDestination(id) {
    const client = getClientOrThrow();
    const { error } = await client
      .from("destinations")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Supabase Error (deleteDestination):", error);
      throw new Error(`Failed to delete destination from Supabase: ${error.message}`);
    }
    return true;
  },

  // =============================================================
  // PACKAGES (Supabase public.packages)
  // =============================================================
  async getPackages() {
    const client = getClientOrThrow();
    const { data, error } = await client
      .from("packages")
      .select("*")
      .order("price_pkr", { ascending: true });

    if (error) {
      console.error("Supabase Error (getPackages):", error);
      throw new Error(`Supabase query failed for packages: ${error.message}`);
    }
    return data || [];
  },

  async getPackageById(id) {
    const client = getClientOrThrow();
    const { data, error } = await client
      .from("packages")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) {
      console.error(`Supabase Error (getPackageById ${id}):`, error);
      throw new Error(`Failed to load package '${id}' from Supabase: ${error.message}`);
    }
    return data;
  },

  async savePackage(pkg) {
    const client = getClientOrThrow();
    const { data, error } = await client
      .from("packages")
      .upsert(pkg, { onConflict: "id" })
      .select();

    if (error) {
      console.error("Supabase Error (savePackage):", error);
      throw new Error(`Failed to save package in Supabase: ${error.message}`);
    }
    return data && data[0] ? data[0] : pkg;
  },

  async deletePackage(id) {
    const client = getClientOrThrow();
    const { error } = await client
      .from("packages")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Supabase Error (deletePackage):", error);
      throw new Error(`Failed to delete package from Supabase: ${error.message}`);
    }
    return true;
  },

  // =============================================================
  // BOOKINGS (Supabase public.bookings)
  // =============================================================
  async getBookings() {
    const client = getClientOrThrow();
    const { data, error } = await client
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase Error (getBookings):", error);
      throw new Error(`Supabase query failed for bookings: ${error.message}`);
    }
    return data || [];
  },

  async getBookingByRef(ref) {
    const client = getClientOrThrow();
    const { data, error } = await client
      .from("bookings")
      .select("*")
      .or(`booking_reference.eq.${ref},id.eq.${ref}`)
      .maybeSingle();

    if (error) {
      console.error(`Supabase Error (getBookingByRef ${ref}):`, error);
      throw new Error(`Failed to load booking from Supabase: ${error.message}`);
    }
    return data;
  },

  async getUserBookings(email) {
    if (!email) return [];
    const client = getClientOrThrow();
    const { data, error } = await client
      .from("bookings")
      .select("*")
      .ilike("customer_email", email)
      .order("created_at", { ascending: false });

    if (error) {
      console.error(`Supabase Error (getUserBookings ${email}):`, error);
      throw new Error(`Failed to load user bookings from Supabase: ${error.message}`);
    }
    return data || [];
  },

  async saveBooking(bookingData) {
    const client = getClientOrThrow();

    if (!bookingData.booking_reference) {
      const rand = Math.floor(1000 + Math.random() * 9000);
      bookingData.booking_reference = `TEP-2026-${rand}`;
    }

    const { data, error } = await client
      .from("bookings")
      .insert([bookingData])
      .select();

    if (error) {
      console.error("Supabase Error (saveBooking):", error);
      throw new Error(`Failed to register booking in Supabase: ${error.message}`);
    }
    return data && data[0] ? data[0] : bookingData;
  },

  async updateBookingStatus(refOrId, status, paymentStatus) {
    const client = getClientOrThrow();
    const updates = { updated_at: new Date().toISOString() };
    if (status) updates.booking_status = status;
    if (paymentStatus) updates.payment_status = paymentStatus;

    const { data, error } = await client
      .from("bookings")
      .update(updates)
      .or(`booking_reference.eq.${refOrId},id.eq.${refOrId}`)
      .select();

    if (error) {
      console.error(`Supabase Error (updateBookingStatus ${refOrId}):`, error);
      throw new Error(`Failed to update booking in Supabase: ${error.message}`);
    }
    return data && data[0] ? data[0] : null;
  },

  async deleteBooking(refOrId) {
    const client = getClientOrThrow();
    const { error } = await client
      .from("bookings")
      .delete()
      .or(`booking_reference.eq.${refOrId},id.eq.${refOrId}`);

    if (error) {
      console.error(`Supabase Error (deleteBooking ${refOrId}):`, error);
      throw new Error(`Failed to delete booking from Supabase: ${error.message}`);
    }
    return true;
  },

  // =============================================================
  // REVIEWS (Supabase public.reviews)
  // =============================================================
  async getReviews(targetType = null, targetId = null) {
    const client = getClientOrThrow();
    let query = client
      .from("reviews")
      .select("*")
      .order("created_at", { ascending: false });

    if (targetType) query = query.eq("target_type", targetType);
    if (targetId) query = query.eq("target_id", targetId);

    const { data, error } = await query;
    if (error) {
      console.error("Supabase Error (getReviews):", error);
      throw new Error(`Supabase query failed for reviews: ${error.message}`);
    }
    return data || [];
  },

  async addReview(review) {
    const client = getClientOrThrow();
    const { data, error } = await client
      .from("reviews")
      .insert([review])
      .select();

    if (error) {
      console.error("Supabase Error (addReview):", error);
      throw new Error(`Failed to save review in Supabase: ${error.message}`);
    }
    return data && data[0] ? data[0] : review;
  },

  async deleteReview(id) {
    const client = getClientOrThrow();
    const { error } = await client
      .from("reviews")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Supabase Error (deleteReview):", error);
      throw new Error(`Failed to delete review from Supabase: ${error.message}`);
    }
    return true;
  },

  // =============================================================
  // LIVE ANALYTICS (Aggregated directly from Supabase tables)
  // =============================================================
  async getDashboardStats() {
    const client = getClientOrThrow();

    const [bkgRes, destRes, pkgRes, revRes] = await Promise.all([
      client.from("bookings").select("total_pkr, booking_status"),
      client.from("destinations").select("id", { count: "exact" }),
      client.from("packages").select("id", { count: "exact" }),
      client.from("reviews").select("rating")
    ]);

    if (bkgRes.error) throw new Error(`Supabase stats bookings error: ${bkgRes.error.message}`);
    if (destRes.error) throw new Error(`Supabase stats destinations error: ${destRes.error.message}`);
    if (pkgRes.error) throw new Error(`Supabase stats packages error: ${pkgRes.error.message}`);
    if (revRes.error) throw new Error(`Supabase stats reviews error: ${revRes.error.message}`);

    const bookings = bkgRes.data || [];
    const totalBookings = bookings.length;
    const confirmedBookings = bookings.filter(b => b.booking_status === "Confirmed").length;
    const pendingBookings = bookings.filter(b => b.booking_status === "Pending").length;
    const totalRevenuePkr = bookings
      .filter(b => b.booking_status !== "Cancelled")
      .reduce((sum, b) => sum + (Number(b.total_pkr) || 0), 0);

    const reviews = revRes.data || [];
    const avgRating = reviews.length > 0 
      ? (reviews.reduce((sum, r) => sum + (Number(r.rating) || 5), 0) / reviews.length).toFixed(1)
      : "4.9";

    return {
      totalBookings,
      confirmedBookings,
      pendingBookings,
      totalRevenuePkr,
      destinationsCount: destRes.count || destRes.data?.length || 0,
      packagesCount: pkgRes.count || pkgRes.data?.length || 0,
      reviewsCount: reviews.length,
      avgRating
    };
  }
};

window.TEP_DB = TEP_DB;
