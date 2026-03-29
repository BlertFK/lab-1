import { useState, useEffect } from "react";
import { apiFetch } from "../utils/api";
import Navbar from "../components/Navbar";
<<<<<<< HEAD
import SellerDashboard from "./SellerDashboard";
import MyProperties from "./MyProperties";
import AddProperty from "./AddProperty";
import EditProperty from "./EditProperty";
<<<<<<< HEAD

// ── Placeholder components (Member 4 do t'i implementoje) ────
const BuyerDashboard = ({ user, setPage, setRootPage, onLogout }) => (
  <div className="dashboard">
    <div className="dash-header">
      <div onClick={() => setRootPage("home")} style={{ fontSize: 20, fontWeight: 800, color: "#2563eb", cursor: "pointer", marginBottom: 8, display: "inline-block" }}>UrbanKeys</div>
      <h2 className="dash-welcome">Welcome back, {user?.name?.split(" ")[0]} 👋</h2>
      <p className="dash-sub">Browse properties, save favorites and contact sellers.</p>
    </div>
    <div className="dash-body">
      <div className="dash-cards" style={{ maxWidth: 600 }}>
        {[
          { icon: "❤️", label: "My Favorites", sub: "View saved properties", page: "favorites" },
          { icon: "👤", label: "My Profile",   sub: "View your account info", page: "profile" },
        ].map(a => (
          <div key={a.page} className="dash-card seller-action-card" onClick={() => setPage(a.page)} style={{ cursor: "pointer" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{a.icon}</div>
            <div className="dash-card-label" style={{ fontSize: "0.95rem", fontWeight: 600, textTransform: "none", color: "var(--text)" }}>{a.label}</div>
            <div className="dash-card-label" style={{ marginBottom: 0 }}>{a.sub}</div>
          </div>
        ))}
      </div>
      <div className="profile-card" style={{ marginTop: "2rem", maxWidth: 420 }}>
        <p className="profile-card-title">Account</p>
        <div className="profile-top">
          <div className="profile-avatar">{user?.name?.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2)}</div>
          <div>
            <p className="profile-name">{user?.name}</p>
            <p className="profile-email">{user?.email}</p>
            <span className="profile-role-badge" style={{ background: "#2563eb18", color: "#2563eb" }}>buyer</span>
          </div>
        </div>
        <button className="btn-submit" style={{ background: "var(--error)" }} onClick={onLogout}>Sign Out</button>
      </div>
    </div>
  </div>
);

const FavoritesPage = ({ setPage, setRootPage, onLogout }) => (
  <div className="dashboard">
    <div className="dash-header">
      <div onClick={() => setRootPage("home")} style={{ fontSize: 20, fontWeight: 800, color: "#2563eb", cursor: "pointer", marginBottom: 8, display: "inline-block" }}>UrbanKeys</div>
      <h2 className="dash-welcome">My Favorites</h2>
      <p className="dash-sub">Your saved properties will appear here.</p>
    </div>
    <div className="dash-body">
      <button className="btn-submit" style={{ maxWidth: 200 }} onClick={() => setPage("main")}>← Back to Dashboard</button>
    </div>
  </div>
);

const BuyerProfilePage = ({ user, setPage, setRootPage, onLogout }) => (
  <div className="dashboard">
    <div className="dash-header">
      <div onClick={() => setRootPage("home")} style={{ fontSize: 20, fontWeight: 800, color: "#2563eb", cursor: "pointer", marginBottom: 8, display: "inline-block" }}>UrbanKeys</div>
      <h2 className="dash-welcome">My Profile</h2>
    </div>
    <div className="dash-body">
      <div className="profile-card" style={{ maxWidth: 420 }}>
        <p className="profile-card-title">Account Info</p>
        <div className="profile-top">
          <div className="profile-avatar">{user?.name?.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2)}</div>
          <div>
            <p className="profile-name">{user?.name}</p>
            <p className="profile-email">{user?.email}</p>
            <span className="profile-role-badge" style={{ background: "#2563eb18", color: "#2563eb" }}>buyer</span>
          </div>
        </div>
      </div>
      <button className="btn-submit" style={{ maxWidth: 200, marginTop: 16 }} onClick={() => setPage("main")}>← Back to Dashboard</button>
    </div>
  </div>
);

const SellerMessagesPage = ({ user, setPage, setRootPage, onLogout }) => (
  <div className="dashboard">
    <div className="dash-header">
      <div onClick={() => setRootPage("home")} style={{ fontSize: 20, fontWeight: 800, color: "#2563eb", cursor: "pointer", marginBottom: 8, display: "inline-block" }}>UrbanKeys</div>
      <h2 className="dash-welcome">Messages</h2>
      <p className="dash-sub">Your messages from buyers will appear here.</p>
    </div>
    <div className="dash-body">
      <button className="btn-submit" style={{ maxWidth: 200 }} onClick={() => setPage("main")}>← Back to Dashboard</button>
    </div>
  </div>
);
// ─────────────────────────────────────────────────────────────
=======
>>>>>>> parent of d22f132 (Merge branch 'main' of https://github.com/BlertFK/lab-1)
=======
import SellerDashboard from "./SellerDashboard";  
import MyProperties from "./MyProperties";         
import AddProperty from "./AddProperty";           
import EditProperty from "./EditProperty";         
>>>>>>> parent of ee32085 (rikthimi ne home page permes llogos,+bug fixes)

export default function Dashboard({ user, setPage: setRootPage, onLogout, showToast }) {
  const [innerPage, setInnerPage] = useState("main");
  const [editTarget, setEditTarget] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const data = await apiFetch("/auth/me");
        setProfile(data.user);
      } catch (err) {
        setApiError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProfile();
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    if (user?.role !== "buyer") {
      localStorage.removeItem("dashboardView");
      return;
    }
    localStorage.setItem("dashboardView", innerPage);
  }, [innerPage, user]);

  // ── Seller pages ──────────────────────────────────────────
=======
>>>>>>> parent of d22f132 (Merge branch 'main' of https://github.com/BlertFK/lab-1)
  if (user?.role === "seller") {
    if (innerPage === "sellerDashboard" || innerPage === "main") {
      return <SellerDashboard user={user} setPage={setInnerPage} onLogout={onLogout} />;
    }
    if (innerPage === "myProperties") {
      return <MyProperties setPage={setInnerPage} setEditTarget={setEditTarget} showToast={showToast} />;
    }
    if (innerPage === "addProperty") {
      return <AddProperty setPage={setInnerPage} showToast={showToast} />;
    }
    if (innerPage === "editProperty") {
      return <EditProperty property={editTarget} setPage={setInnerPage} showToast={showToast} />;
    }
<<<<<<< HEAD
    if (innerPage === "sellerMessages") {
      return <SellerMessagesPage user={user} setPage={setInnerPage} setRootPage={setRootPage} onLogout={onLogout} showToast={showToast} />;
    }
  }

  // ── Buyer pages ───────────────────────────────────────────
  if (user?.role === "buyer") {
    if (innerPage === "favorites") {
      return <FavoritesPage setPage={setInnerPage} setRootPage={setRootPage} onLogout={onLogout} showToast={showToast} />;
    }
    if (innerPage === "profile") {
      return <BuyerProfilePage user={user} setPage={setInnerPage} setRootPage={setRootPage} onLogout={onLogout} showToast={showToast} />;
    }
    return <BuyerDashboard user={user} setPage={setInnerPage} setRootPage={setRootPage} onLogout={onLogout} showToast={showToast} />;
=======
>>>>>>> parent of d22f132 (Merge branch 'main' of https://github.com/BlertFK/lab-1)
  }

  // ── Fallback (user pa role te njohur) ─────────────────────
  const initials = user?.name?.split(" ").map(w => w[0]).join("").toUpperCase().slice(0, 2) || "U";
  const joinDate = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })
    : "—";
  const roleColor = { admin: "#7c3aed", buyer: "#2563eb", seller: "#059669" }[profile?.role] || "#2563eb";
  const token = localStorage.getItem("token");

  return (
    <div className="dashboard">
      <Navbar page="dashboard" setPage={setRootPage} user={user} onLogout={onLogout} />
      <div className="dash-header">
        <h2 className="dash-welcome">Welcome back, {user?.name?.split(" ")[0]} 👋</h2>
        <p className="dash-sub">Account authenticated via JWT.</p>
      </div>
      <div className="dash-body">
        <div className="dash-cards">
          {[
            { label: "Saved Properties", value: "4", cls: "blue" },
            { label: "Active Listings", value: user?.role === "seller" ? "2" : "0", cls: "green" },
            { label: "Inquiries Sent", value: "7", cls: "" },
            { label: "Account Role", value: user?.role, cls: "blue" },
          ].map(c => (
            <div className="dash-card" key={c.label}>
              <div className="dash-card-label">{c.label}</div>
              <div className={`dash-card-value ${c.cls}`} style={{ textTransform: "capitalize" }}>{c.value}</div>
            </div>
          ))}
        </div>
<<<<<<< HEAD
        {loading && <p className="loading-text">Fetching profile from API...</p>}
        {apiError && <div className="alert alert-error">API error: {apiError}.</div>}
=======

        {loading && <p className="loading-text">⏳ Fetching profile from API...</p>}

        {apiError && (
          <div className="alert alert-error">
            ⚠️ API error: {apiError}. (Check if backend is running on port 5000)
          </div>
        )}

>>>>>>> parent of ee32085 (rikthimi ne home page permes llogos,+bug fixes)
        {profile && (
          <div className="profile-card">
            <p className="profile-card-title">Backend Profile Data (MySQL)</p>
            <div className="profile-top">
              <div className="profile-avatar">{initials}</div>
              <div>
                <p className="profile-name">{profile.name}</p>
                <p className="profile-email">{profile.email}</p>
                <span className="profile-role-badge" style={{ background: `${roleColor}18`, color: roleColor }}>{profile.role}</span>
              </div>
            </div>
            <div className="profile-details">
              {[["User ID", `#${profile.id}`], ["Member Since", joinDate], ["JWT Token", token ? `${token.slice(0, 20)}...` : "—"]].map(([k, v]) => (
                <div className="profile-row" key={k}>
                  <span className="profile-key">{k}</span>
                  <span className="profile-val">{v}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}