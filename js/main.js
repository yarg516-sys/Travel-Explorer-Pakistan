/**
 * TRAVEL EXPLORER PAKISTAN - MAIN APPLICATION CONTROLLER
 * Coordinates UI interactions, search, filter handlers, modal triggers, and Supabase status.
 */

// Toast notification function
function showToast(message, type = "success") {
  let container = document.getElementById("toast-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "toast-container";
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  const icon = type === "success" ? "fa-circle-check" : (type === "error" ? "fa-circle-exclamation" : "fa-circle-info");
  toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// Global modal helpers
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("show");
    document.body.style.overflow = "auto";
  }
}

// Destination Quick View Modal Trigger
async function openDestinationModal(destId) {
  const dest = await TEP_DB.getDestinationById(destId);
  if (!dest) return;

  const modal = document.getElementById("destination-modal");
  if (!modal) return;

  document.getElementById("dest-modal-title").innerText = dest.name;
  document.getElementById("dest-modal-tagline").innerText = dest.tagline || dest.province;
  document.getElementById("dest-modal-img").src = dest.image_url;
  document.getElementById("dest-modal-desc").innerText = dest.description;
  document.getElementById("dest-modal-altitude").innerText = dest.altitude || "N/A";
  document.getElementById("dest-modal-best-time").innerText = dest.best_time;
  document.getElementById("dest-modal-province").innerText = dest.province;
  
  // Cost breakdown
  const cost = dest.estimated_cost;
  document.getElementById("dest-modal-cost-budget").innerText = `PKR ${cost.budget_pkr?.toLocaleString() || '25,000'}`;
  document.getElementById("dest-modal-cost-mid").innerText = `PKR ${cost.mid_pkr?.toLocaleString() || '60,000'}`;
  document.getElementById("dest-modal-cost-luxury").innerText = `PKR ${cost.luxury_pkr?.toLocaleString() || '120,000'}`;

  // Attractions
  const attrList = document.getElementById("dest-modal-attractions");
  if (attrList) {
    attrList.innerHTML = dest.attractions.map(a => `<li><i class="fa-solid fa-location-dot text-primary"></i> ${a}</li>`).join("");
  }

  // Activities
  const actList = document.getElementById("dest-modal-activities");
  if (actList) {
    actList.innerHTML = dest.activities.map(a => `<li><i class="fa-solid fa-person-hiking text-accent"></i> ${a}</li>`).join("");
  }

  // Tips
  const tipsList = document.getElementById("dest-modal-tips");
  if (tipsList) {
    tipsList.innerHTML = dest.travel_tips.map(t => `<li><i class="fa-solid fa-circle-info text-info"></i> ${t}</li>`).join("");
  }

  // Book Packages for this destination button
  const explorePkgBtn = document.getElementById("dest-modal-book-btn");
  if (explorePkgBtn) {
    explorePkgBtn.href = `packages.html?dest=${encodeURIComponent(dest.id)}`;
  }

  openModal("destination-modal");
}

// Special Offers Countdown Timer
function initCountdownTimer() {
  const hoursEl = document.getElementById("count-hours");
  const minsEl = document.getElementById("count-mins");
  const secsEl = document.getElementById("count-secs");
  if (!hoursEl || !minsEl || !secsEl) return;

  // 14 hours target countdown
  let totalSeconds = 14 * 3600 + 42 * 60 + 15;

  setInterval(() => {
    if (totalSeconds <= 0) totalSeconds = 24 * 3600;
    totalSeconds--;
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;

    hoursEl.innerText = String(h).padStart(2, "0");
    minsEl.innerText = String(m).padStart(2, "0");
    secsEl.innerText = String(s).padStart(2, "0");
  }, 1000);
}

// Check Supabase Cloud Connection Status and display badge
async function initSupabaseBadge() {
  const statusEl = document.getElementById("footer-supabase-status");
  if (!statusEl) return;

  try {
    const res = await checkSupabaseConnection();
    if (res.connected) {
      statusEl.innerHTML = `<i class="fa-solid fa-cloud-bolt text-success"></i> Supabase Cloud: Connected (${SUPABASE_CONFIG.projectRef})`;
      statusEl.className = "backend-status-badge text-success";
    } else {
      statusEl.innerHTML = `<i class="fa-solid fa-database text-warning"></i> Local DB & Cloud Sync Ready`;
      statusEl.className = "backend-status-badge text-warning";
    }
  } catch (e) {
    statusEl.innerHTML = `<i class="fa-solid fa-database"></i> Local Storage Active`;
  }
}

// Mobile Nav Toggle
function initMobileNav() {
  const toggle = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }
}

// Global initialization
document.addEventListener("DOMContentLoaded", async () => {
  initMobileNav();
  initCountdownTimer();
  await TEP_AUTH.init();
  await initSupabaseBadge();

  // Close modals on clicking backdrop
  document.querySelectorAll(".modal-backdrop").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
        document.body.style.overflow = "auto";
      }
    });
  });

  // Hero Search Form submission handling
  const heroSearchForm = document.getElementById("hero-search-form");
  if (heroSearchForm) {
    heroSearchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const dest = document.getElementById("search-destination")?.value || "";
      const cat = document.getElementById("search-category")?.value || "";
      const dur = document.getElementById("search-duration")?.value || "";
      const budget = document.getElementById("search-budget")?.value || "";

      const params = new URLSearchParams();
      if (dest) params.append("dest", dest);
      if (cat) params.append("cat", cat);
      if (dur) params.append("dur", dur);
      if (budget) params.append("budget", budget);

      window.location.href = `packages.html?${params.toString()}`;
    });
  }
});

window.showToast = showToast;
window.openModal = openModal;
window.closeModal = closeModal;
window.openDestinationModal = openDestinationModal;
