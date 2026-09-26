/**
 * TRAVEL EXPLORER PAKISTAN - SUPABASE CONFIGURATION
 * Real backend connection to Supabase cloud database & authentication.
 */

const SUPABASE_CONFIG = {
  url: "https://lfinbgixmzqwoqzkwqdx.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmaW5iZ2l4bXpxd29xemt3cWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0NDU0NjIsImV4cCI6MjEwNjAyMTQ2Mn0.TM30XGOCenzFI3zLzLbdD8yZCnb08PITuYXDpCkoRSw",
  projectRef: "lfinbgixmzqwoqzkwqdx"
};

// Initialize Supabase Client
let _supabaseClient = null;

function getSupabaseClient() {
  if (_supabaseClient) return _supabaseClient;
  if (typeof window !== "undefined" && window.supabase && typeof window.supabase.createClient === "function") {
    try {
      _supabaseClient = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);
      return _supabaseClient;
    } catch (err) {
      console.warn("Supabase initialization error:", err);
      return null;
    }
  }
  return null;
}

/**
 * Health check to verify Supabase connectivity
 */
async function checkSupabaseConnection() {
  const client = getSupabaseClient();
  if (!client) {
    return { connected: false, message: "Supabase JS library not loaded" };
  }

  try {
    const { data, error } = await client.from("destinations").select("id").limit(1);
    if (error) {
      if (error.code === "PGRST205" || error.message?.includes("schema cache") || error.message?.includes("relation")) {
        return {
          connected: true,
          tablesReady: false,
          message: "Connected to Supabase project, but tables need to be created via SQL Editor."
        };
      }
      return { connected: true, tablesReady: false, message: error.message };
    }
    return { connected: true, tablesReady: true, count: data?.length || 0, message: "Supabase fully operational & connected!" };
  } catch (err) {
    return { connected: false, message: err.message || "Network error reaching Supabase" };
  }
}

/**
 * Seed initial data into Supabase if tables are ready
 */
async function seedSupabaseDatabase() {
  const client = getSupabaseClient();
  if (!client) throw new Error("Supabase client is not available.");

  const results = { destinations: 0, packages: 0, reviews: 0, errors: [] };

  // 1. Seed Destinations
  try {
    const { error: destErr } = await client
      .from("destinations")
      .upsert(window.TEP_DATA.destinations, { onConflict: "id" });
    if (destErr) throw destErr;
    results.destinations = window.TEP_DATA.destinations.length;
  } catch (e) {
    results.errors.push(`Destinations error: ${e.message}`);
  }

  // 2. Seed Packages
  try {
    const pkgsToInsert = window.TEP_DATA.packages.map(p => ({
      id: p.id,
      title: p.title,
      destination_id: p.destination_id,
      destination_name: p.destination_name,
      duration: p.duration,
      days: p.days,
      nights: p.nights,
      price_pkr: p.price_pkr,
      price_usd: p.price_usd,
      discount_percentage: p.discount_percentage,
      image_url: p.image_url,
      category: p.category,
      difficulty: p.difficulty,
      group_size: p.group_size,
      departure_city: p.departure_city,
      available_dates: p.available_dates,
      included_services: p.included_services,
      excluded_services: p.excluded_services,
      overview: p.overview,
      itinerary: p.itinerary,
      rating: p.rating,
      reviews_count: p.reviews_count,
      featured: p.featured
    }));

    const { error: pkgErr } = await client
      .from("packages")
      .upsert(pkgsToInsert, { onConflict: "id" });
    if (pkgErr) throw pkgErr;
    results.packages = pkgsToInsert.length;
  } catch (e) {
    results.errors.push(`Packages error: ${e.message}`);
  }

  // 3. Seed Reviews
  try {
    const { error: revErr } = await client
      .from("reviews")
      .upsert(window.TEP_DATA.reviews, { onConflict: "id" });
    if (revErr) throw revErr;
    results.reviews = window.TEP_DATA.reviews.length;
  } catch (e) {
    results.errors.push(`Reviews error: ${e.message}`);
  }

  return results;
}

window.SUPABASE_CONFIG = SUPABASE_CONFIG;
window.getSupabaseClient = getSupabaseClient;
window.checkSupabaseConnection = checkSupabaseConnection;
window.seedSupabaseDatabase = seedSupabaseDatabase;
