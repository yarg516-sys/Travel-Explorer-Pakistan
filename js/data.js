/**
 * TRAVEL EXPLORER PAKISTAN - ORIGINAL DATASET
 * 100% Original, authentic travel information for destinations and tour packages across Pakistan.
 */

const INITIAL_DESTINATIONS = [
  {
    id: "hunza-valley",
    name: "Hunza Valley",
    tagline: "The Crown Jewel of the Karakoram Range",
    province: "Gilgit-Baltistan",
    altitude: "2,438 m (8,000 ft)",
    best_time: "April to October (Spring Blossoms to Golden Autumn)",
    estimated_cost: {
      budget_pkr: 32000,
      mid_pkr: 68000,
      luxury_pkr: 145000,
      daily_average: "PKR 6,500 - 18,000 / day"
    },
    image_url: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Hunza Valley is an alpine wonderland framed by 7,000-meter peaks including Rakaposhi, Ultar Sar, and Ladyfinger Peak. Famed for the crystal turquoise waters of Attabad Lake, 800-year-old Baltit and Altit Forts, terraced apricot orchards, and warm Wakhi and Burusho mountain hospitality.",
    attractions: [
      "Baltit Fort (800-year-old UNESCO heritage nominee)",
      "Altit Fort & Royal Rose Garden",
      "Attabad Lake (Boating & Jet Skiing)",
      "Passu Cones (Cathedral Ridges)",
      "Hussaini Suspension Bridge",
      "Eagle's Nest Viewpoint at Duiker",
      "Khunjerab Pass (Highest paved border crossing at 4,693 m)"
    ],
    activities: [
      "Boating & kayaking across turquoise Attabad Lake",
      "Sunset and sunrise photography from Eagle's Nest",
      "Passu Glacier exploration hike",
      "Tasting traditional Hunza cuisine: Chapshuro, Ghyaling & Apricot Cake",
      "Stargazing under unpolluted high-altitude skies"
    ],
    travel_tips: [
      "Carry sufficient cash as ATMs in upper Hunza can occasionally be out of service.",
      "Pack thermal layers even during summer months; mountain evenings cool down rapidly.",
      "Respect local customs and dress modestly when strolling through village communities.",
      "Stay hydrated to acclimatize comfortably to the 2,400+ meter elevation."
    ],
    rating: 4.9,
    reviews_count: 148,
    featured: true
  },
  {
    id: "skardu-valley",
    name: "Skardu",
    tagline: "Gateway to the Giants of the Karakoram & K2",
    province: "Gilgit-Baltistan",
    altitude: "2,228 m (7,310 ft)",
    best_time: "May to September (Warm days and accessible alpine passes)",
    estimated_cost: {
      budget_pkr: 38000,
      mid_pkr: 78000,
      luxury_pkr: 165000,
      daily_average: "PKR 7,500 - 22,000 / day"
    },
    image_url: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Skardu is the legendary mountaineering hub of Pakistan, where snow-dusted cold sand dunes converge with turquoise lakes and dramatic granite peaks. Home to the high-altitude Deosai Plains, ancient forts of Shigar and Khaplu, and Shangrila Resort.",
    attractions: [
      "Shangrila Lake (Lower Kachura Lake)",
      "Upper Kachura Lake & Trout Farm",
      "Katpana Cold Desert (Highest cold desert in the world)",
      "Sarfaranga Desert sand dunes",
      "Shigar Fort (17th-century Raja Palace)",
      "Deosai National Park ('Land of the Giants' at 4,114 m)",
      "Manthal Buddha Rock inscription"
    ],
    activities: [
      "Desert safari and sandboarding on Katpana Dunes",
      "Camping beside heart-shaped Sheosar Lake in Deosai",
      "Freshwater trout fishing in crystal Kachura waters",
      "Heritage tour of Serena Khaplu and Shigar Forts",
      "Stargazing and astrophotography in zero light pollution"
    ],
    travel_tips: [
      "Book flights well in advance and plan flexible buffer days for weather variations.",
      "4x4 Land Cruisers are strictly required for traversing Deosai National Park.",
      "Wear high-SPF sunscreen; UV radiation at high altitude is intense even when breezy.",
      "Sample local Balti dishes like Prapoo, Mamtu, and salty butter tea."
    ],
    rating: 4.9,
    reviews_count: 122,
    featured: true
  },
  {
    id: "swat-valley",
    name: "Swat Valley",
    tagline: "The Switzerland of the East & Valley of Emeralds",
    province: "Khyber Pakhtunkhwa",
    altitude: "980 m - 2,900 m",
    best_time: "April to October (Lush greenery) & Dec to Mar (Snow & Skiing)",
    estimated_cost: {
      budget_pkr: 22000,
      mid_pkr: 48000,
      luxury_pkr: 98000,
      daily_average: "PKR 5,000 - 14,000 / day"
    },
    image_url: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Swat Valley is an enchanting retreat carved by the fast-flowing Swat River, studded with alpine forests, roaring cascades, ancient Gandhara Buddhist relics, and Pakistan's premier modern ski resort at Malam Jabba.",
    attractions: [
      "Kalam Valley & Ushu Pine Forest",
      "Mahodand Lake & Saifullah Lake",
      "Malam Jabba Ski Resort & Chairlift",
      "White Palace Marghazar (Built from pristine marble)",
      "Bahrain Riverside Village & Woodcraft Bazaars",
      "Butkara I Buddhist Stupa ruins"
    ],
    activities: [
      "Alpine skiing, snowboarding & dual zipline at Malam Jabba",
      "4x4 off-road expedition to Mahodand glacial lake",
      "Riverside dining on freshly pan-fried Swati trout",
      "Hiking through thick cedar and pine forests in Ushu",
      "Shopping for authentic handmade Swati woolen shawls and pure honey"
    ],
    travel_tips: [
      "The Swat Motorway has made Swat easily accessible in under 4 hours from Islamabad.",
      "Kalam to Mahodand road requires local 4x4 jeeps with experienced mountain drivers.",
      "Malam Jabba gets snow-capped from late December through early March.",
      "Check chairlift operation timings during peak winter weekends."
    ],
    rating: 4.8,
    reviews_count: 98,
    featured: true
  },
  {
    id: "fairy-meadows",
    name: "Fairy Meadows",
    tagline: "At the Foot of Nanga Parbat - The Killer Mountain",
    province: "Gilgit-Baltistan",
    altitude: "3,300 m (10,800 ft)",
    best_time: "June to September (Clear skies and open mountain trails)",
    estimated_cost: {
      budget_pkr: 28000,
      mid_pkr: 58000,
      luxury_pkr: 92000,
      daily_average: "PKR 6,000 - 15,000 / day"
    },
    image_url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Named 'Joot' by locals and Fairy Meadows by German climbers, this mystical alpine plateau offers an unhindered front-row panorama of the awe-inspiring 8,126-meter Raikot Face of Nanga Parbat, surrounded by thick birch and pine forests.",
    attractions: [
      "Nanga Parbat Raikot Face Viewpoint",
      "Beyal Camp (Upper meadow retreat at 3,500 m)",
      "German Climbers' Base Camp (3,967 m)",
      "Fairy Meadows Natural Reflection Pond",
      "Raikot Bridge & Cliff-Hanging Jeep Track"
    ],
    activities: [
      "Trekking to Beyal Camp and Nanga Parbat Base Camp",
      "Camping in rustic wooden cabins facing illuminated peaks",
      "Evening bonfire gathering with local Gilgiti guides",
      "Astrophotography capturing the Milky Way over Nanga Parbat",
      "Horseback riding through blooming wildflower pastures"
    ],
    travel_tips: [
      "The 4x4 jeep ride from Raikot Bridge to Tato is thrilling; keep calm and trust local drivers.",
      "The hike from Tato to Fairy Meadows takes 3-4 hours; porters and mules are readily available.",
      "Bring sturdy trekking boots with good ankle support and thermal sleeping gear.",
      "Electricity and charging facilities at the meadows are solar-powered and limited."
    ],
    rating: 4.9,
    reviews_count: 110,
    featured: true
  },
  {
    id: "naran-kaghan",
    name: "Naran & Kaghan Valley",
    tagline: "Fairytale Glacial Lakes & Wildflower Meadows",
    province: "Khyber Pakhtunkhwa",
    altitude: "2,409 m (7,904 ft)",
    best_time: "Mid-May to September (Roads open after snow clearance)",
    estimated_cost: {
      budget_pkr: 20000,
      mid_pkr: 48000,
      luxury_pkr: 105000,
      daily_average: "PKR 5,000 - 15,000 / day"
    },
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Naran Valley is one of Pakistan's most cherished summer destinations. Bordered by the rushing Kunhar River, it is the threshold to the legendary Lake Saif-ul-Malook, Babusar Top, Lulusar Lake, and lush meadows of Siri Paye.",
    attractions: [
      "Lake Saif-ul-Malook (Mythical home of the Prince & Fairy)",
      "Babusar Pass (4,173 m summit joining KP and Gilgit-Baltistan)",
      "Lulusar Lake (Serene turquoise reservoir)",
      "Siri Paye Meadows & Shogran pine plateau",
      "Pyala Lake & Batakundi valley",
      "Lalazar Meadows"
    ],
    activities: [
      "Boat ride in the turquoise waters of Lake Saif-ul-Malook",
      "White water river rafting along the Kunhar River",
      "Horse riding across misty Siri Paye pastures",
      "Panoramic photography at the apex of Babusar Top",
      "Tasting hot Kunhar trout and chapli kebabs along Naran Bazaar"
    ],
    travel_tips: [
      "Babusar Pass opens around late June and remains open until early October.",
      "Rent standard union-approved jeeps for Saif-ul-Malook and Siri Paye.",
      "Naran Bazaar can get busy in July; stay in quieter Batakundi or Shogran for serene stays.",
      "Carry waterproof jackets for spontaneous afternoon highland showers."
    ],
    rating: 4.7,
    reviews_count: 135,
    featured: true
  },
  {
    id: "neelum-valley",
    name: "Neelum Valley",
    tagline: "The Bow-Shaped Emerald Corridor of Kashmir",
    province: "Azad Jammu & Kashmir",
    altitude: "1,600 m - 3,500 m",
    best_time: "May to October (Blooming greenery and cascading rivers)",
    estimated_cost: {
      budget_pkr: 20000,
      mid_pkr: 46000,
      luxury_pkr: 88000,
      daily_average: "PKR 4,800 - 14,000 / day"
    },
    image_url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Neelum Valley stretches 144 kilometers along the turquoise Neelum River in Azad Kashmir. Featuring wooden Kashmiri chalets, lush pine terraced hillsides, historical Sharda University ruins, and high-altitude alpine lakes.",
    attractions: [
      "Arang Kel ('Pearl of Neelum' hilltop village)",
      "Sharda Peeth (Historic 6th-century stone temple university)",
      "Keran Riverside & Border Viewpoint",
      "Ratti Gali Glacial Lake (Alpine jewel at 3,700 m)",
      "Kutton Jagran Hydro Waterfall",
      "Baboon Valley & Chitta Katha Lake"
    ],
    activities: [
      "Cable car ride & forest hike to Arang Kel village",
      "Camping under star-strewn skies beside cobalt Ratti Gali Lake",
      "Exploring ancient stone architecture at Sharda Peeth",
      "Riverside bonfire and sampling authentic Kashmiri Dum Aloo & Gushtaba",
      "Trout fishing in upper Neelum freshwater streams"
    ],
    travel_tips: [
      "Carry valid CNIC or original passport for security checkpoints along the route.",
      "Mobile connectivity in upper Neelum is best on the local SCOM network.",
      "Ratti Gali Lake trek is accessible from late June to late September.",
      "Wear warm attire as riverside breezes can be brisk at night."
    ],
    rating: 4.8,
    reviews_count: 87,
    featured: true
  },
  {
    id: "murree-galiyat",
    name: "Murree & Galiyat",
    tagline: "The Pine-Clad Colonial Hill Sanctuary",
    province: "Punjab & KP",
    altitude: "2,291 m (7,516 ft)",
    best_time: "Year-Round (Cool summer breezes & winter snowfall magic)",
    estimated_cost: {
      budget_pkr: 15000,
      mid_pkr: 35000,
      luxury_pkr: 72000,
      daily_average: "PKR 4,000 - 12,000 / day"
    },
    image_url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Murree and the Galiyat ridge form Pakistan's most accessible highland retreat, just an hour from Islamabad. Shrouded in cedar and oak forests, it offers nostalgic colonial-era churches, vibrant hill walks, and snowy winter getaways.",
    attractions: [
      "Murree Mall Road & Pindi Point",
      "Patriata New Murree Chairlift & Cable Car",
      "Nathia Gali & Miranjani Peak Trek (2,960 m)",
      "Dunga Gali Pipeline Heritage Track",
      "Ayubia National Park & Flying Fox",
      "Mukshpuri Peak Meadow Trail"
    ],
    activities: [
      "Hiking the scenic British-era Pipeline Track between Dunga Gali and Ayubia",
      "Taking the high-altitude Patriata cable car over deep pine valleys",
      "Snow trekking to Mukshpuri Top in winter months",
      "Enjoying roasted corn and Kashmiri pink tea (Noon Chai) on Mall Road",
      "Birdwatching for Himalayan monals and woodpeckers in Ayubia"
    ],
    travel_tips: [
      "Only a 1.5-hour drive from Islamabad via the scenic Murree Expressway.",
      "For quieter stays, opt for Nathia Gali, Bhurban, or Changla Gali instead of central Murree.",
      "Check tire conditions and carry snow chains when visiting during winter blizzards.",
      "Support eco-friendly tourism by avoiding littering on the pristine Galiyat walking tracks."
    ],
    rating: 4.6,
    reviews_count: 164,
    featured: false
  },
  {
    id: "lahore-heritage",
    name: "Lahore",
    tagline: "The Mughal Heart & Cultural Soul of Pakistan",
    province: "Punjab",
    altitude: "217 m (712 ft)",
    best_time: "October to March (Pleasant sunny days & cool festive evenings)",
    estimated_cost: {
      budget_pkr: 14000,
      mid_pkr: 32000,
      luxury_pkr: 75000,
      daily_average: "PKR 3,500 - 12,000 / day"
    },
    image_url: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "They say 'He who hasn't seen Lahore hasn't even been born'. Lahore is an imperial treasure chest of Mughal architecture, Sufi shrines, mouthwatering gastronomy, and the electrifying living culture of the ancient Walled City.",
    attractions: [
      "Badshahi Mosque (Iconic 17th-century Mughal red sandstone masterpiece)",
      "Lahore Fort & Shish Mahal (Palace of Mirrors)",
      "Wazir Khan Mosque (Fresco-rich Persian tilework)",
      "Shalimar Gardens (Terraced Mughal pleasure gardens)",
      "Delhi Gate & Royal Bath (Shahi Hammam)",
      "Wagah Border Flag Lowering Ceremony",
      "Fort Road & Gawalmandi Food Streets"
    ],
    activities: [
      "Heritage walking tour through the 13 historical gates of the Walled City",
      "Dining on rooftop terraces overlooking the illuminated Badshahi Mosque",
      "Attending the high-voltage patriotic Wagah Border flag lowering ceremony",
      "Sampling authentic Lahori Karahi, Nihari, Paaye, and Falooda",
      "Shopping for brass antiques, khussa shoes, and silks in Anarkali Bazaar"
    ],
    travel_tips: [
      "Visit Badshahi Mosque in the late afternoon for golden hour light followed by night illumination.",
      "Book an authorized Walled City of Lahore Authority (WCLA) guide for rich historic context.",
      "Winter (November to February) is peak cultural season with art festivals and literary galas.",
      "Use modern ride-hailing apps or the Lahore Orange Line Metro for quick city transit."
    ],
    rating: 4.9,
    reviews_count: 175,
    featured: true
  },
  {
    id: "karachi-coastal",
    name: "Karachi",
    tagline: "The Resilient City of Lights & Arabian Sea Gateway",
    province: "Sindh",
    altitude: "8 m (Sea Level)",
    best_time: "November to February (Pleasant coastal breezes & balmy weather)",
    estimated_cost: {
      budget_pkr: 15000,
      mid_pkr: 36000,
      luxury_pkr: 82000,
      daily_average: "PKR 4,000 - 14,000 / day"
    },
    image_url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Pakistan's buzzing maritime mega-city on the Arabian Sea. Karachi blends historic colonial stone edifices, miles of coastal shores, world-renowned street food, contemporary art galleries, and the pulse of modern trade.",
    attractions: [
      "Clifton Beach & Sea View Promenade",
      "Do Darya Seaside Open-Air Dining Promenade",
      "Mohatta Palace Museum of Fine Art & Heritage",
      "Port Grand Food & Waterfront Boardwalk",
      "Churna Island (Snorkeling & Scuba haven)",
      "Mazar-e-Quaid (Mausoleum of Muhammad Ali Jinnah)",
      "Empress Market & Victoria Heritage Quarter"
    ],
    activities: [
      "Boat ride and scuba snorkeling expedition to Churna Island coral reefs",
      "Eating charcoal-grilled red snapper at Do Darya while watching the midnight waves",
      "Sunset camel and dune buggy rides along the Clifton coastline",
      "Exploring colonial Anglo-Mughal architecture at Mohatta Palace",
      "Savoring Burns Road legendary Biryani, Haleem, and Rabri"
    ],
    travel_tips: [
      "Winter offers the most comfortable beach weather with low humidity.",
      "Reserve Churna Island snorkeling and water sports at least 2 days prior.",
      "Evenings at Sea View and Do Darya offer great ambiance; visit between 7 PM and midnight.",
      "Ride-sharing services like Careem, Indrive, and Yango operate around the clock."
    ],
    rating: 4.7,
    reviews_count: 118,
    featured: false
  },
  {
    id: "islamabad-capital",
    name: "Islamabad",
    tagline: "The Picturesque Green Capital at the Margalla Foot",
    province: "Federal Capital",
    altitude: "540 m (1,770 ft)",
    best_time: "October to April (Crisp mountain air & lush spring blossoms)",
    estimated_cost: {
      budget_pkr: 16000,
      mid_pkr: 38000,
      luxury_pkr: 85000,
      daily_average: "PKR 4,200 - 13,000 / day"
    },
    image_url: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "One of the most thoughtfully planned and greenest modern capitals in Asia, framed by the undulating Margalla Hills. Islamabad is the peaceful national capital featuring landmark modern Islamic architecture, forest trails, and scenic viewpoints.",
    attractions: [
      "Faisal Mosque (World-renowned Turkish-designed architectural marvel)",
      "Daman-e-Koh & Pir Sohawa (Monal viewpoint on Margalla Ridge)",
      "Margalla Hills National Park (Trail 3, Trail 5 & Bruti Springs)",
      "Pakistan Monument & National History Museum (Shakarparian)",
      "Saidpur Historic Model Village",
      "Rawal Lake & Lake View Bird Aviary",
      "Lok Virsa Folk Heritage Museum"
    ],
    activities: [
      "Morning hike up Margalla Trail 3 or Trail 5 with views over the twin cities",
      "Panoramic hilltop dining at Monal or La Montana overlooking the illuminated capital",
      "Sunset stroll across the pristine marble courtyards of Faisal Mosque",
      "Exploring authentic traditional crafts and folklore at Lok Virsa Museum",
      "Boating, kayaking, and birdwatching along Rawal Lake"
    ],
    travel_tips: [
      "Ideal takeoff point for all northern tours heading towards Hunza, Skardu, Swat, and Naran.",
      "Start Margalla hiking trails early in the morning and carry water; look out for local monkeys.",
      "Strict traffic enforcement: always observe speed limits and seatbelt regulations.",
      "Easily navigate with Metrobus connecting Islamabad and Rawalpindi."
    ],
    rating: 4.8,
    reviews_count: 142,
    featured: false
  }
];

const INITIAL_PACKAGES = [
  {
    id: "pkg-hunza-expedition",
    title: "Karakoram Grandeur: Ultimate Hunza & Khunjerab Expedition",
    destination_id: "hunza-valley",
    destination_name: "Hunza Valley",
    duration: "8 Days / 7 Nights",
    days: 8,
    nights: 7,
    price_pkr: 85000,
    price_usd: 305,
    discount_percentage: 15,
    image_url: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    category: "Mountain Expeditions",
    difficulty: "Moderate",
    group_size: "12 - 16 Travelers",
    departure_city: "Islamabad (Complimentary Airport Pickup)",
    available_dates: [
      "2026-10-10", "2026-10-24", "2026-11-07", "2027-04-15", "2027-05-01"
    ],
    included_services: [
      "Luxury AC Coaster / Grand Cabin transportation",
      "7 Nights 3-star / 4-star mountain hotel accommodations",
      "Daily gourmet breakfast and traditional dinners",
      "Licensed bilingual mountain guide & local Wakhi coordinator",
      "Attabad Lake private boat excursion",
      "All entry tickets (Baltit Fort, Altit Fort & Khunjerab National Park)",
      "Bonfire musical evening with local folk musicians",
      "First aid and emergency medical kit"
    ],
    excluded_services: [
      "Domestic airfare to/from Islamabad",
      "Lunch meals and personal snack purchases",
      "Personal laundry, phone calls & hotel mini-bar",
      "Tips for driver, guides, and hotel staff",
      "Any extra cost incurred due to landslides or weather road closures"
    ],
    overview: "Traverse the legendary Karakoram Highway through soaring gorges to the dreamlike valleys of Hunza and Nagar. Experience ancient forts, cruise the turquoise expanse of Attabad Lake, witness Passu Cones, and journey up to the China border at Khunjerab Pass.",
    itinerary: [
      {
        day: 1,
        title: "Islamabad to Naran / Chilas via Hazara Expressway",
        details: "Early departure from Islamabad via the Hazara Motorway. Travel past Abbottabad and through the scenic Kunhar River basin. Overnight stay in Naran or riverside hotel in Chilas."
      },
      {
        day: 2,
        title: "Journey to Karimabad Hunza & View of Rakaposhi",
        details: "Ascend Babusar Pass (4,173 m) or drive the KKH along the Indus. Stop at the Junction Point of three great mountain ranges (Himalayas, Karakoram, Hindu Kush). Sunset tea at Rakaposhi View Point. Check-in at Karimabad hotel."
      },
      {
        day: 3,
        title: "Historical Forts & Royal Gardens of Hunza",
        details: "Morning guided tour of 800-year-old Baltit Fort. Afternoon visit to Altit Fort and its ancient village. Sunset viewing from Eagle's Nest Duiker overlooking Golden Peak and Ultar Sar."
      },
      {
        day: 4,
        title: "Attabad Lake, Gulmit & Hussaini Suspension Bridge",
        details: "Scenic drive through the Pak-China Friendship Tunnels. Boat cruise across turquoise Attabad Lake. Walk across the thrilling wooden Hussaini Suspension Bridge. Traditional Wakhi lunch in Gulmit village."
      },
      {
        day: 5,
        title: "Passu Cones to the Pak-China Border at Khunjerab Pass",
        details: "Early morning expedition to Khunjerab Pass (4,693 m) - the highest international paved border in the world. Spot Himalayan ibex and golden marmots in the National Park. Return to Passu for evening stargazing."
      },
      {
        day: 6,
        title: "Passu Glacier Trek & Return to Gilgit",
        details: "Morning short trek towards Passu White Glacier. Afternoon drive south back to Gilgit. Visit the historic Karghah Buddha carved into the rock cliff. Night stay in Gilgit."
      },
      {
        day: 7,
        title: "Gilgit to Besham / Naran",
        details: "Scenic return drive along the Karakoram Highway. Photo stops along the Indus River and surrounding canyons. Relaxing evening and farewell dinner at Besham."
      },
      {
        day: 8,
        title: "Arrival in Islamabad & Tour Conclusion",
        details: "Continue the journey back to Islamabad. Drop-off at Islamabad International Airport or selected central hotel. Tour concludes with unforgettable memories."
      }
    ],
    rating: 4.9,
    reviews_count: 54,
    featured: true
  },
  {
    id: "pkg-skardu-deosai",
    title: "Skardu & Deosai: Land of Giants & Cold Deserts",
    destination_id: "skardu-valley",
    destination_name: "Skardu",
    duration: "7 Days / 6 Nights",
    days: 7,
    nights: 6,
    price_pkr: 92000,
    price_usd: 330,
    discount_percentage: 10,
    image_url: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=1200&q=80",
    category: "Mountain Expeditions",
    difficulty: "Moderate",
    group_size: "10 - 14 Travelers",
    departure_city: "Islamabad (Flight or Scenic Highway option)",
    available_dates: [
      "2026-10-12", "2026-10-26", "2027-05-15", "2027-06-01", "2027-06-20"
    ],
    included_services: [
      "Dedicated 4x4 Prado / Land Cruiser for Deosai Plains safari",
      "6 Nights accommodations in premium heritage and boutique hotels",
      "Daily breakfast & dinner (including fresh trout dinner)",
      "Experienced mountain tour director and local Balti guide",
      "Shangrila Resort and Upper Kachura Lake permits",
      "Shigar & Khaplu Raja Palace heritage tickets",
      "Bonfire and stargazing session at Katpana Cold Desert"
    ],
    excluded_services: [
      "Air tickets (can be arranged on request)",
      "Lunches and individual beverages",
      "Personal outdoor gear & porter charges",
      "Travel insurance coverage"
    ],
    overview: "Explore the dramatic landscapes of Skardu where snow-capped peaks tower over golden sand dunes. Experience the vast high-altitude plateau of Deosai, fairytale Shangrila Lake, and restored 17th-century Raja palaces.",
    itinerary: [
      {
        day: 1,
        title: "Islamabad to Skardu (Flight or KKH scenic drive)",
        details: "Arrival in Skardu. Check in at hotel. Evening walk around the historic Skardu Bazaar and visit to the ancient Manthal Buddha Rock."
      },
      {
        day: 2,
        title: "Shangrila Resort & Upper Kachura Lake",
        details: "Explore the picturesque Shangrila Resort surrounding Lower Kachura Lake. Hike up to Upper Kachura Lake for boat rowing and fresh trout tasting."
      },
      {
        day: 3,
        title: "Deosai National Park & Sheosar Lake Expedition",
        details: "Full day 4x4 safari across the Deosai Plains (4,114 m). Encounter crystal streams, blooming alpine wildflowers, and mirror views of Nanga Parbat across Sheosar Lake."
      },
      {
        day: 4,
        title: "Katpana Cold Desert & Sarfaranga Sand Dunes",
        details: "Morning visit to the high-altitude sand dunes of Katpana. Experience sunset over Sarfaranga Desert with quad-bike rides and bonfire."
      },
      {
        day: 5,
        title: "Historical Shigar Valley & Serena Shigar Fort",
        details: "Scenic drive along the Shigar River to the 400-year-old 'Fort on the Rock'. Guided walk through ancient wooden mosques and organic orchards."
      },
      {
        day: 6,
        title: "Khaplu Valley & Chaqchan Mosque",
        details: "Day trip to the verdant Khaplu Valley. Visit the royal Khaplu Palace and the 700-year-old wooden Chaqchan Mosque built by Mir Sayyid Ali Hamadani."
      },
      {
        day: 7,
        title: "Return to Islamabad",
        details: "Morning departure from Skardu. Scenic flight past Nanga Parbat or return road transit to Islamabad. Tour officially concludes."
      }
    ],
    rating: 4.9,
    reviews_count: 42,
    featured: true
  },
  {
    id: "pkg-swat-kalam",
    title: "Jewels of Swat & Kalam Valley: Alpine Paradise",
    destination_id: "swat-valley",
    destination_name: "Swat Valley",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    price_pkr: 42000,
    price_usd: 150,
    discount_percentage: 20,
    image_url: "https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?auto=format&fit=crop&w=1200&q=80",
    category: "Lakes & Valleys",
    difficulty: "Easy",
    group_size: "14 - 20 Travelers",
    departure_city: "Islamabad / Lahore / Peshawar",
    available_dates: [
      "2026-10-05", "2026-10-18", "2026-11-01", "2026-12-15", "2027-01-10"
    ],
    included_services: [
      "AC Saloon Coaster transportation from departure city",
      "Dedicated 4x4 Jeeps for Kalam to Mahodand Lake safari",
      "4 Nights standard 3-star hotel stay in Swat & Kalam",
      "Daily breakfast and dinners",
      "Malam Jabba Ski Resort entry & chairlift pass",
      "Professional tour manager & local guide",
      "Bonfire night in Kalam valley"
    ],
    excluded_services: [
      "Personal zipline or ski gear rental fees",
      "Lunch and mid-day refreshments",
      "Personal shopping for Swati shawls, gems and honey",
      "Individual medical or travel insurance"
    ],
    overview: "Discover why Swat is celebrated as the Switzerland of Pakistan. From the thrills of Malam Jabba ski slopes to the peaceful pine groves of Kalam and emerald waters of Mahodand Lake.",
    itinerary: [
      {
        day: 1,
        title: "Islamabad to Mingora Swat & White Palace",
        details: "Depart via the modern Swat Motorway. Visit the historic White Palace Marghazar built entirely of white Swati marble. Stay overnight in Mingora."
      },
      {
        day: 2,
        title: "Malam Jabba Adventure & Winter Sports Resort",
        details: "Drive up the serpentine road to Malam Jabba (2,800 m). Enjoy chairlift rides, zip-lining across mountain ridges, and panoramic valley views."
      },
      {
        day: 3,
        title: "Scenic drive along Swat River to Kalam",
        details: "Travel up the Swat River valley, stopping at the wood-carving bazaars of Bahrain. Arrive in Kalam and explore the dense Ushu pine forest."
      },
      {
        day: 4,
        title: "4x4 Safari to Mahodand & Saifullah Glacial Lakes",
        details: "Board rugged 4x4 jeeps to Mahodand Lake. Enjoy boat rides surrounded by snowmelt peaks and cascading streams. Return to Kalam for evening dinner."
      },
      {
        day: 5,
        title: "Return to Islamabad",
        details: "Morning departure from Kalam. Short stop in Fizagat riverside park and Mingora bazaars. Arrive back in Islamabad by evening."
      }
    ],
    rating: 4.8,
    reviews_count: 67,
    featured: true
  },
  {
    id: "pkg-fairy-meadows",
    title: "Fairy Meadows & Nanga Parbat Base Camp Trek",
    destination_id: "fairy-meadows",
    destination_name: "Fairy Meadows",
    duration: "6 Days / 5 Nights",
    days: 6,
    nights: 5,
    price_pkr: 68000,
    price_usd: 245,
    discount_percentage: 0,
    image_url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    category: "Mountain Expeditions",
    difficulty: "Challenging",
    group_size: "8 - 12 Travelers",
    departure_city: "Islamabad",
    available_dates: [
      "2026-10-08", "2026-10-22", "2027-05-20", "2027-06-10", "2027-07-05"
    ],
    included_services: [
      "Transportation from Islamabad to Raikot Bridge and back",
      "Local 4x4 mountain jeep from Raikot Bridge to Tato village",
      "3 Nights wooden cabin / tent accommodation at Fairy Meadows",
      "2 Nights hotel accommodation in Chilas / Naran on transit",
      "All meals during trekking days (breakfast, trail lunch, warm dinner)",
      "Expert high-altitude certified mountain trekking guide",
      "Luggage transfer by mules (up to 12 kg per person)",
      "Night bonfires with spectacular mountain views"
    ],
    excluded_services: [
      "Personal trekking gear (boots, thermal sleeping bags, trekking poles)",
      "Horse riding charges if opting not to trek",
      "Personal snacks and energy drinks",
      "Emergency evacuation insurance"
    ],
    overview: "The quintessential Himalayan trekking experience. Stand before the world's highest sheer vertical mountain face - the 8,126-meter Raikot Wall of Nanga Parbat, waking up to sunrise over pine meadows.",
    itinerary: [
      {
        day: 1,
        title: "Islamabad to Chilas via KKH",
        details: "Early departure from Islamabad. Drive along the mighty Indus River gorge. Stop at the ancient Shatial Rock Carvings. Night stay in Chilas."
      },
      {
        day: 2,
        title: "Raikot Jeep Track & Hike to Fairy Meadows",
        details: "Drive to Raikot Bridge. Shift to local 4x4 open jeeps for the famous Tato track. Begin the 3-4 hour scenic hike through pine forests to reach Fairy Meadows (3,300 m). Check in to wooden cabins."
      },
      {
        day: 3,
        title: "Trek to Beyal Camp & Nanga Parbat Viewpoint",
        details: "Trek up through birch groves to peaceful Beyal Camp (3,500 m) and on to the Raikot Glacier viewpoint. Unobstructed view of Nanga Parbat's towering ice walls."
      },
      {
        day: 4,
        title: "Nanga Parbat Base Camp Trek (3,967 m)",
        details: "Challenging optional hike across the lateral moraine to the historic German Base Camp. Touch the base of the Killer Mountain before descending back to Fairy Meadows for a celebratory dinner."
      },
      {
        day: 5,
        title: "Descent to Tato & Return to Naran / Besham",
        details: "Hike back down to Tato village. Jeep ride back down to Raikot Bridge. Transit by van to hotel in Naran or Besham for comfortable rest."
      },
      {
        day: 6,
        title: "Return to Islamabad",
        details: "Complete the scenic drive back to Islamabad. Drop-off at designated locations. Tour concludes."
      }
    ],
    rating: 4.9,
    reviews_count: 38,
    featured: true
  },
  {
    id: "pkg-neelum-ratti-gali",
    title: "Enchanted Neelum Valley & Ratti Gali Glacial Lake",
    destination_id: "neelum-valley",
    destination_name: "Neelum Valley",
    duration: "5 Days / 4 Nights",
    days: 5,
    nights: 4,
    price_pkr: 45000,
    price_usd: 162,
    discount_percentage: 12,
    image_url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
    category: "Lakes & Valleys",
    difficulty: "Moderate",
    group_size: "12 - 16 Travelers",
    departure_city: "Islamabad / Rawalpindi",
    available_dates: [
      "2026-10-02", "2026-10-16", "2026-10-30", "2027-05-10", "2027-06-05"
    ],
    included_services: [
      "AC Coaster / Hiace van transportation",
      "4x4 Jeeps for Ratti Gali Lake and Arang Kel trailheads",
      "Arang Kel cable car tickets",
      "4 Nights hotel & wooden riverside cottage stays",
      "Daily breakfast & Kashmiri culinary dinner experiences",
      "Professional tour guide & bonfire arrangements"
    ],
    excluded_services: [
      "Lunches and extra snacks",
      "Ponies/horses on the Ratti Gali trail",
      "Personal gear and souvenirs"
    ],
    overview: "Experience the timeless beauty of Azad Kashmir. Drift along the emerald Neelum River, visit the stone ruins of Sharda Peeth, ride cable cars to Arang Kel village, and hike to the cobalt-blue Ratti Gali glacial lake.",
    itinerary: [
      {
        day: 1,
        title: "Islamabad to Muzaffarabad & Keran",
        details: "Depart Islamabad, crossing the Kohala Bridge into Azad Kashmir. Stop at Dhani Waterfall and Muzaffarabad. Drive along the Neelum River to Keran border village."
      },
      {
        day: 2,
        title: "Keran to Sharda & Historic Sharda Peeth",
        details: "Continue into Upper Neelum. Explore the ancient 6th-century university ruins of Sharda Peeth overlooking the river. Overnight stay in Sharda."
      },
      {
        day: 3,
        title: "Cable Car to Arang Kel - The Pearl of Neelum",
        details: "Drive to Kel, ride the aerial chairlift across the gorge, followed by an uphill pine forest walk to fairy-tale Arang Kel. Walk through green wooden cottage fields."
      },
      {
        day: 4,
        title: "4x4 Jeep Trek to Ratti Gali Glacial Lake",
        details: "Early morning 4x4 jeep safari up the Ratti Gali stream. Short hike to the breathtaking cobalt-blue glacial lake (3,700 m). Return to Kutton for night stay."
      },
      {
        day: 5,
        title: "Kutton Waterfall & Return to Islamabad",
        details: "Morning visit to Kutton Jagran waterfall. Scenic return drive via Murree Expressway back to Islamabad."
      }
    ],
    rating: 4.8,
    reviews_count: 51,
    featured: false
  },
  {
    id: "pkg-naran-babusar",
    title: "Naran, Kaghan & Babusar Pass Summer Escape",
    destination_id: "naran-kaghan",
    destination_name: "Naran & Kaghan Valley",
    duration: "4 Days / 3 Nights",
    days: 4,
    nights: 3,
    price_pkr: 36000,
    price_usd: 130,
    discount_percentage: 10,
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    category: "Lakes & Valleys",
    difficulty: "Easy",
    group_size: "14 - 18 Travelers",
    departure_city: "Islamabad / Lahore",
    available_dates: [
      "2026-10-01", "2026-10-15", "2027-05-25", "2027-06-15", "2027-07-01"
    ],
    included_services: [
      "AC Transport round-trip from Islamabad",
      "4x4 Jeeps to Lake Saif-ul-Malook and Siri Paye",
      "3 Nights hotel accommodation in Naran / Batakundi",
      "Daily breakfast & dinner",
      "Babusar Top & Lulusar Lake sightseeing tours",
      "Tour lead and first aid assistance"
    ],
    excluded_services: [
      "Kunhar river rafting tickets",
      "Mid-day lunches and snacks",
      "Horse riding fees at Siri Paye"
    ],
    overview: "The most beloved family getaway in the northern mountains. Enjoy the cool alpine breeze, mythological Lake Saif-ul-Malook, the panoramic summit of Babusar Pass, and horse rides in Siri Paye.",
    itinerary: [
      {
        day: 1,
        title: "Islamabad to Shogran & Siri Paye Meadows",
        details: "Drive through Abbottabad and Balakot along the Kunhar River. Take 4x4 jeeps up to Shogran and horse ride into Siri Paye. Overnight stay in Shogran."
      },
      {
        day: 2,
        title: "Journey to Naran & Lake Saif-ul-Malook",
        details: "Scenic drive to Naran Bazaar. Transfer to 4x4 jeeps for the ascent to Lake Saif-ul-Malook. Enjoy boat rides and mountain photography. Night stay in Naran."
      },
      {
        day: 3,
        title: "Lulusar Lake & Babusar Pass (4,173 m)",
        details: "Drive past Batakundi to the serene waters of Lulusar Lake. Continue climbing up to Babusar Top on the border of Gilgit-Baltistan. Return to Naran for a riverside bonfire."
      },
      {
        day: 4,
        title: "Kunhar Rafting & Return to Islamabad",
        details: "Morning river rafting session on the Kunhar River. Leisurely drive back down the Hazara Motorway arriving in Islamabad by evening."
      }
    ],
    rating: 4.7,
    reviews_count: 83,
    featured: false
  },
  {
    id: "pkg-lahore-islamabad-culture",
    title: "Mughal Splendor & Cultural Heritage: Lahore & Islamabad",
    destination_id: "lahore-heritage",
    destination_name: "Lahore",
    duration: "4 Days / 3 Nights",
    days: 4,
    nights: 3,
    price_pkr: 34000,
    price_usd: 122,
    discount_percentage: 15,
    image_url: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
    category: "Cultural & Heritage",
    difficulty: "Easy",
    group_size: "10 - 15 Travelers",
    departure_city: "Islamabad or Lahore",
    available_dates: [
      "2026-10-15", "2026-11-05", "2026-11-20", "2026-12-10", "2027-01-15"
    ],
    included_services: [
      "Executive AC transport between Islamabad and Lahore via M-2 Motorway",
      "3 Nights luxury 4-star city hotel accommodation",
      "Daily breakfast & special rooftop dinner overlooking Badshahi Mosque",
      "All heritage site tickets and registered WCLA guides",
      "VIP Wagah Border ceremony seating passes",
      "Old City rickshaw heritage tour"
    ],
    excluded_services: [
      "Personal shopping and souvenirs",
      "Extra meals and drinks",
      "Gratuities for guides and drivers"
    ],
    overview: "A journey through centuries of art, history, and imperial grandeur. Visit majestic Mughal forts and mosques, delve into ancient walled alleys, and witness the patriotic ceremony at Wagah Border.",
    itinerary: [
      {
        day: 1,
        title: "Islamabad City Tour & Faisal Mosque",
        details: "Explore the modern capital: Faisal Mosque, Pakistan Monument Museum, and evening panoramic dinner at Monal on the Margalla Hills."
      },
      {
        day: 2,
        title: "Motorway Drive to Lahore & Walled City Exploration",
        details: "Travel along the M-2 Motorway with a stop at Khewra Salt Mines or Katas Raj Temples. Arrive in Lahore, explore Delhi Gate, Shahi Hammam, and Wazir Khan Mosque."
      },
      {
        day: 3,
        title: "Badshahi Mosque, Lahore Fort & Wagah Border Ceremony",
        details: "Morning exploration of Lahore Fort & Shish Mahal followed by Badshahi Mosque. Afternoon drive to Wagah Border for the world-famous Flag Lowering Ceremony. Rooftop dinner on Fort Road."
      },
      {
        day: 4,
        title: "Shalimar Gardens, Anarkali & Departure",
        details: "Visit the UNESCO-listed Shalimar Gardens. Browse the historic Anarkali and Liberty Bazaars for traditional crafts before airport / terminal drop-off."
      }
    ],
    rating: 4.9,
    reviews_count: 62,
    featured: false
  },
  {
    id: "pkg-karachi-churna-coastal",
    title: "Arabian Coast & Churna Island Marine Adventure",
    destination_id: "karachi-coastal",
    destination_name: "Karachi",
    duration: "3 Days / 2 Nights",
    days: 3,
    nights: 2,
    price_pkr: 29000,
    price_usd: 105,
    discount_percentage: 10,
    image_url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    category: "Desert & Coastal",
    difficulty: "Easy",
    group_size: "10 - 16 Travelers",
    departure_city: "Karachi",
    available_dates: [
      "2026-10-18", "2026-11-01", "2026-11-15", "2026-12-05", "2027-01-20"
    ],
    included_services: [
      "Private boat charter to Churna Island with certified diving masters",
      "Full snorkeling gear, life jackets, and underwater photography session",
      "2 Nights coastal resort or 4-star city hotel stay",
      "Daily breakfast & freshly cooked seaside seafood barbecue",
      "Cliff diving and speed boat rides",
      "Evening culinary tour to Do Darya & Burns Road"
    ],
    excluded_services: [
      "Airfare to Karachi",
      "Scuba diving certification add-on (available for extra PKR 6,000)",
      "Personal beach shopping and private watercraft rentals"
    ],
    overview: "Dive into Pakistan's vibrant marine sanctuary at Churna Island. Swim with exotic coral reef fishes, try cliff jumping into turquoise waters, and savor world-famous coastal Pakistani seafood by the Arabian Sea.",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Karachi & Sea View Sunset",
        details: "Airport reception and check-in. Afternoon stroll along Clifton Beach and Sea View. Evening open-air seafood dining at Do Darya over the crashing waves."
      },
      {
        day: 2,
        title: "Full Day Churna Island Snorkeling & Water Sports",
        details: "Early departure to Mubarak Village harbor. Boat cruise to Churna Island. Snorkeling along live coral reefs, underwater GoPro photography, and cliff jumping. Warm beachside lunch before returning."
      },
      {
        day: 3,
        title: "Heritage Tour & Burns Road Gastronomy",
        details: "Explore Mohatta Palace and colonial architecture of Empress Market. Farewell lunch at historic Burns Road sampling authentic biryani and rabri before departure."
      }
    ],
    rating: 4.8,
    reviews_count: 36,
    featured: false
  }
];

const INITIAL_REVIEWS = [
  {
    id: "rev-1",
    target_type: "package",
    target_id: "pkg-hunza-expedition",
    reviewer_name: "Hamza Tariq",
    reviewer_email: "hamza.tariq@gmail.com",
    rating: 5,
    comment: "The 8-day Hunza tour exceeded every expectation. Our guide was extraordinarily knowledgeable, the boat ride on Attabad Lake was unreal, and seeing Khunjerab Pass at 4,700 meters was a bucket-list achievement. Flawless logistics!",
    trip_date: "September 2026",
    verified: true
  },
  {
    id: "rev-2",
    target_type: "destination",
    target_id: "skardu-valley",
    reviewer_name: "Ayesha Noor",
    reviewer_email: "ayesha.noor@outlook.com",
    rating: 5,
    comment: "Skardu is otherworldly! Sitting on the cold sand dunes of Katpana at sunset while looking at snow-capped peaks felt like being on another planet. The Deosai safari was simply magnificent.",
    trip_date: "August 2026",
    verified: true
  },
  {
    id: "rev-3",
    target_type: "package",
    target_id: "pkg-fairy-meadows",
    reviewer_name: "Zainab Malik",
    reviewer_email: "zainab.malik@yahoo.com",
    rating: 5,
    comment: "Fairy Meadows was pure magic. The hike through the pine forest is invigorating and standing beneath Nanga Parbat's towering face will leave you speechless. Warm wooden cabins and hot tea completed the dream.",
    trip_date: "July 2026",
    verified: true
  },
  {
    id: "rev-4",
    target_type: "destination",
    target_id: "swat-valley",
    reviewer_name: "Bilal Farooq",
    reviewer_email: "bilal.f@gmail.com",
    rating: 5,
    comment: "Swat truly lives up to its name as the Switzerland of Pakistan. Kalam was peaceful, the fresh river trout in Bahrain was delicious, and the zipline at Malam Jabba was thrilling!",
    trip_date: "August 2026",
    verified: true
  },
  {
    id: "rev-5",
    target_type: "package",
    target_id: "pkg-lahore-islamabad-culture",
    reviewer_name: "Dr. Sarah Jenkins",
    reviewer_email: "sjenkins.travels@gmail.com",
    rating: 5,
    comment: "As an international traveler exploring Pakistan for the first time, this cultural tour was seamless. Badshahi Mosque at dusk is one of the most stunning sights on earth, and the Pakistani hospitality was unmatched.",
    trip_date: "September 2026",
    verified: true
  }
];

const INITIAL_CATEGORIES = [
  {
    id: "cat-mountain",
    name: "Mountain Expeditions",
    icon: "fa-mountain",
    count: "4 Packages",
    description: "Conquer the Karakoram, Himalayas & Hindu Kush heights",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cat-lakes",
    name: "Lakes & Valleys",
    icon: "fa-water",
    count: "3 Packages",
    description: "Glacial waters, alpine meadows & fairytale streams",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cat-culture",
    name: "Cultural & Heritage",
    icon: "fa-monument",
    count: "2 Packages",
    description: "Mughal palaces, ancient Buddhist stupas & living bazaars",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cat-coastal",
    name: "Desert & Coastal",
    icon: "fa-umbrella-beach",
    count: "2 Packages",
    description: "Arabian Sea coral islands & high-altitude cold deserts",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
  }
];

// Export to window
window.TEP_DATA = {
  destinations: INITIAL_DESTINATIONS,
  packages: INITIAL_PACKAGES,
  reviews: INITIAL_REVIEWS,
  categories: INITIAL_CATEGORIES
};
