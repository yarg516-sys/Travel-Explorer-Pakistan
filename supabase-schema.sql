-- ====================================================================
-- TRAVEL EXPLORER PAKISTAN - SUPABASE DATABASE SCHEMA
-- ====================================================================
-- Execute this entire script inside the Supabase SQL Editor:
-- Project Dashboard -> SQL Editor -> New Query -> Paste & Run
-- ====================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. DESTINATIONS TABLE
CREATE TABLE IF NOT EXISTS public.destinations (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    tagline TEXT,
    province TEXT NOT NULL,
    altitude TEXT,
    best_time TEXT NOT NULL,
    estimated_cost JSONB NOT NULL,
    image_url TEXT NOT NULL,
    gallery TEXT[] DEFAULT '{}',
    description TEXT NOT NULL,
    attractions TEXT[] NOT NULL,
    activities TEXT[] NOT NULL,
    travel_tips TEXT[] NOT NULL,
    rating NUMERIC(2,1) DEFAULT 4.9,
    reviews_count INT DEFAULT 0,
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. PACKAGES TABLE
CREATE TABLE IF NOT EXISTS public.packages (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    destination_id TEXT REFERENCES public.destinations(id) ON DELETE SET NULL,
    destination_name TEXT NOT NULL,
    duration TEXT NOT NULL,
    days INT NOT NULL,
    nights INT NOT NULL,
    price_pkr NUMERIC(10,2) NOT NULL,
    price_usd NUMERIC(10,2) NOT NULL,
    image_url TEXT NOT NULL,
    gallery TEXT[] DEFAULT '{}',
    category TEXT NOT NULL,
    difficulty TEXT DEFAULT 'Moderate',
    group_size TEXT DEFAULT '12-16 People',
    departure_city TEXT DEFAULT 'Islamabad',
    available_dates TEXT[] NOT NULL,
    included_services TEXT[] NOT NULL,
    excluded_services TEXT[] NOT NULL,
    itinerary JSONB NOT NULL,
    overview TEXT NOT NULL,
    rating NUMERIC(2,1) DEFAULT 4.9,
    reviews_count INT DEFAULT 0,
    featured BOOLEAN DEFAULT false,
    discount_percentage INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. BOOKINGS TABLE
CREATE TABLE IF NOT EXISTS public.bookings (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    booking_reference TEXT UNIQUE NOT NULL,
    package_id TEXT REFERENCES public.packages(id) ON DELETE SET NULL,
    package_title TEXT NOT NULL,
    destination_name TEXT NOT NULL,
    travel_date DATE NOT NULL,
    travelers_count INT NOT NULL DEFAULT 1,
    travelers_breakdown JSONB DEFAULT '{"adults": 1, "children": 0}'::jsonb,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    customer_phone TEXT NOT NULL,
    customer_cnic TEXT,
    departure_city TEXT NOT NULL DEFAULT 'Islamabad',
    addons JSONB DEFAULT '[]'::jsonb,
    special_requests TEXT,
    subtotal_pkr NUMERIC(10,2) NOT NULL,
    addons_pkr NUMERIC(10,2) DEFAULT 0,
    total_pkr NUMERIC(10,2) NOT NULL,
    payment_method TEXT DEFAULT 'Cash on Arrival',
    payment_status TEXT DEFAULT 'Pending',
    booking_status TEXT DEFAULT 'Confirmed',
    user_id UUID,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. REVIEWS TABLE
CREATE TABLE IF NOT EXISTS public.reviews (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    target_type TEXT NOT NULL, -- 'destination' or 'package' or 'general'
    target_id TEXT,
    reviewer_name TEXT NOT NULL,
    reviewer_email TEXT,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT NOT NULL,
    trip_date TEXT,
    verified BOOLEAN DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. PROFILES TABLE (Associated with Supabase Auth)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT UNIQUE NOT NULL,
    full_name TEXT,
    phone TEXT,
    city TEXT,
    avatar_url TEXT,
    role TEXT DEFAULT 'traveler',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ====================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ====================================================================

ALTER TABLE public.destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Allow public read access to destinations, packages, reviews
CREATE POLICY "Public Read Destinations" ON public.destinations FOR SELECT USING (true);
CREATE POLICY "Public Insert Destinations" ON public.destinations FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Update Destinations" ON public.destinations FOR UPDATE USING (true);
CREATE POLICY "Public Delete Destinations" ON public.destinations FOR DELETE USING (true);

CREATE POLICY "Public Read Packages" ON public.packages FOR SELECT USING (true);
CREATE POLICY "Public Insert Packages" ON public.packages FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Update Packages" ON public.packages FOR UPDATE USING (true);
CREATE POLICY "Public Delete Packages" ON public.packages FOR DELETE USING (true);

CREATE POLICY "Public Read Reviews" ON public.reviews FOR SELECT USING (true);
CREATE POLICY "Public Insert Reviews" ON public.reviews FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Delete Reviews" ON public.reviews FOR DELETE USING (true);

-- Allow public to create bookings and read their own bookings
CREATE POLICY "Public Create Bookings" ON public.bookings FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Read Bookings" ON public.bookings FOR SELECT USING (true);
CREATE POLICY "Public Update Bookings" ON public.bookings FOR UPDATE USING (true);
CREATE POLICY "Public Delete Bookings" ON public.bookings FOR DELETE USING (true);

CREATE POLICY "Public Profiles Access" ON public.profiles FOR ALL USING (true);

-- ====================================================================
-- REALTIME SUBSCRIPTIONS
-- ====================================================================
-- Enable Realtime for active dashboard monitoring
ALTER PUBLICATION supabase_realtime ADD TABLE public.bookings;
ALTER PUBLICATION supabase_realtime ADD TABLE public.reviews;
ALTER PUBLICATION supabase_realtime ADD TABLE public.destinations;
ALTER PUBLICATION supabase_realtime ADD TABLE public.packages;
