/**
 * TRAVEL EXPLORER PAKISTAN - AUTHENTICATION MODULE
 * Supabase Auth integration with local demo profile fallback.
 */

const AUTH_STORAGE_KEY = "tep_auth_session";

const TEP_AUTH = {
  currentUser: null,

  async init() {
    // Check local session
    const saved = localStorage.getItem(AUTH_STORAGE_KEY);
    if (saved) {
      try {
        this.currentUser = JSON.parse(saved);
      } catch (e) {
        this.currentUser = null;
      }
    }

    // Check Supabase Auth
    const client = getSupabaseClient();
    if (client) {
      try {
        const { data: { session } } = await client.auth.getSession();
        if (session && session.user) {
          this.currentUser = {
            id: session.user.id,
            email: session.user.email,
            name: session.user.user_metadata?.full_name || session.user.email.split("@")[0],
            phone: session.user.user_metadata?.phone || "",
            role: session.user.user_metadata?.role || "traveler",
            isSupabaseAuth: true
          };
          localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(this.currentUser));
        }

        // Listen for auth state changes
        client.auth.onAuthStateChange((event, session) => {
          if (session && session.user) {
            this.currentUser = {
              id: session.user.id,
              email: session.user.email,
              name: session.user.user_metadata?.full_name || session.user.email.split("@")[0],
              phone: session.user.user_metadata?.phone || "",
              role: session.user.user_metadata?.role || "traveler",
              isSupabaseAuth: true
            };
            localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(this.currentUser));
          } else if (event === "SIGNED_OUT") {
            this.currentUser = null;
            localStorage.removeItem(AUTH_STORAGE_KEY);
          }
          this.updateNavUI();
        });
      } catch (err) {
        console.warn("Supabase Auth check error:", err);
      }
    }

    this.updateNavUI();
    return this.currentUser;
  },

  getCurrentUser() {
    return this.currentUser;
  },

  isLoggedIn() {
    return !!this.currentUser;
  },

  isAdmin() {
    return this.currentUser && (this.currentUser.role === "admin" || this.currentUser.email === "admin@travelexplorer.pk");
  },

  async signUp(email, password, fullName, phone) {
    const client = getSupabaseClient();
    if (client) {
      try {
        const { data, error } = await client.auth.signUp({
          email,
          password,
          options: {
            data: { full_name: fullName, phone: phone, role: "traveler" }
          }
        });
        if (error) throw error;
        
        const user = {
          id: data.user?.id || "usr-" + Date.now(),
          email,
          name: fullName,
          phone,
          role: "traveler",
          isSupabaseAuth: true
        };
        this.currentUser = user;
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        this.updateNavUI();
        return { success: true, user, message: "Account created successfully!" };
      } catch (e) {
        console.warn("Supabase SignUp failed, using local registration fallback:", e);
      }
    }

    // Local fallback signup
    const user = {
      id: "usr-" + Date.now(),
      email,
      name: fullName,
      phone,
      role: "traveler",
      isSupabaseAuth: false
    };
    this.currentUser = user;
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    this.updateNavUI();
    return { success: true, user, message: "Welcome to Travel Explorer Pakistan!" };
  },

  async signIn(email, password) {
    const client = getSupabaseClient();
    if (client) {
      try {
        const { data, error } = await client.auth.signInWithPassword({ email, password });
        if (error) throw error;

        const user = {
          id: data.user.id,
          email: data.user.email,
          name: data.user.user_metadata?.full_name || email.split("@")[0],
          phone: data.user.user_metadata?.phone || "",
          role: data.user.user_metadata?.role || (email.toLowerCase().includes("admin") ? "admin" : "traveler"),
          isSupabaseAuth: true
        };
        this.currentUser = user;
        localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        this.updateNavUI();
        return { success: true, user };
      } catch (e) {
        console.warn("Supabase SignIn attempt:", e.message);
      }
    }

    // Fallback login check
    const role = email.toLowerCase().includes("admin") ? "admin" : "traveler";
    const user = {
      id: "usr-" + Date.now(),
      email,
      name: email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
      phone: "+92 300 1234567",
      role,
      isSupabaseAuth: false
    };
    this.currentUser = user;
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    this.updateNavUI();
    return { success: true, user };
  },

  loginDemoUser(type = "traveler") {
    let user;
    if (type === "admin") {
      user = {
        id: "admin-demo-01",
        email: "admin@travelexplorer.pk",
        name: "Director Admin",
        phone: "+92 333 5556677",
        role: "admin",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
      };
    } else {
      user = {
        id: "traveler-demo-01",
        email: "taimur.khan@gmail.com",
        name: "Taimur Khan",
        phone: "+92 300 1234567",
        role: "traveler",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
      };
    }
    this.currentUser = user;
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    this.updateNavUI();
    return user;
  },

  async signOut() {
    const client = getSupabaseClient();
    if (client) {
      try {
        await client.auth.signOut();
      } catch (e) {
        console.warn("Supabase SignOut error:", e);
      }
    }
    this.currentUser = null;
    localStorage.removeItem(AUTH_STORAGE_KEY);
    this.updateNavUI();
    return true;
  },

  updateNavUI() {
    const authContainer = document.getElementById("nav-auth-container");
    if (!authContainer) return;

    if (this.currentUser) {
      const displayName = this.currentUser.name || this.currentUser.email.split("@")[0];
      const initials = displayName.substring(0, 2).toUpperCase();
      const isAdminUser = this.isAdmin();

      authContainer.innerHTML = `
        <div class="user-dropdown-wrapper">
          <button class="btn-user-avatar" id="btn-user-menu" aria-label="User Menu">
            <span class="user-avatar-badge">${initials}</span>
            <span class="user-name-text">${displayName}</span>
            <i class="fa-solid fa-chevron-down text-xs"></i>
          </button>
          <div class="user-dropdown-menu" id="user-dropdown-menu">
            <div class="dropdown-header">
              <strong>${displayName}</strong>
              <small class="text-muted block">${this.currentUser.email}</small>
              <span class="badge ${isAdminUser ? 'badge-admin' : 'badge-traveler'}">${this.currentUser.role.toUpperCase()}</span>
            </div>
            <div class="dropdown-divider"></div>
            <a href="account.html" class="dropdown-item"><i class="fa-solid fa-user-circle"></i> My Account & Profile</a>
            <a href="account.html#my-bookings" class="dropdown-item"><i class="fa-solid fa-ticket"></i> My Bookings</a>
            ${isAdminUser ? '<a href="admin.html" class="dropdown-item text-primary font-bold"><i class="fa-solid fa-gauge-high"></i> Admin Dashboard</a>' : ''}
            <div class="dropdown-divider"></div>
            <button class="dropdown-item text-danger" id="nav-logout-btn"><i class="fa-solid fa-arrow-right-from-bracket"></i> Sign Out</button>
          </div>
        </div>
      `;

      // Event listener for user menu toggle
      const btnMenu = document.getElementById("btn-user-menu");
      const menu = document.getElementById("user-dropdown-menu");
      if (btnMenu && menu) {
        btnMenu.onclick = (e) => {
          e.stopPropagation();
          menu.classList.toggle("show");
        };
      }

      const logoutBtn = document.getElementById("nav-logout-btn");
      if (logoutBtn) {
        logoutBtn.onclick = async () => {
          await this.signOut();
          window.location.reload();
        };
      }
    } else {
      authContainer.innerHTML = `
        <a href="account.html?tab=login" class="nav-btn-link"><i class="fa-regular fa-user"></i> Sign In</a>
        <a href="packages.html" class="btn btn-primary btn-sm"><i class="fa-solid fa-compass"></i> Book Tour</a>
      `;
    }
  }
};

// Auto-close dropdown when clicking outside
document.addEventListener("click", () => {
  const menu = document.getElementById("user-dropdown-menu");
  if (menu && menu.classList.contains("show")) {
    menu.classList.remove("show");
  }
});

window.TEP_AUTH = TEP_AUTH;
