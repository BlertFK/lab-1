import { useState, useCallback } from "react";

import "./styles/style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetails from "./pages/PropertyDetails";

export default function App() {
  const [page, setPage] = useState("home");
  const [selectedProperty, setSelectedProperty] = useState(null);

  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("user")); } catch { return null; }
  });

  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = "success") => setToast({ message, type }), []);

  const handleLoginSuccess = useCallback((userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    showToast(`Welcome back, ${userData.name}!`, "success");
    setPage(userData.role === "admin" ? "admin" : "dashboard");
  }, [showToast]);

  const handleLogout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    showToast("You've been signed out.", "success");
    setPage("home");
  }, [showToast]);

  const showNavbar = page === "home" || page === "properties" || page === "propertyDetails" || (!user && page === "dashboard");

  return (
    <>
      {/* Navbar - shfaqet ne faqet publike */}
      {showNavbar && (
        <Navbar page={page} setPage={setPage} user={user} onLogout={handleLogout} />
      )}

      {/* Auth pages */}
      {page === "login" && (
        <LoginPage setPage={setPage} onLoginSuccess={handleLoginSuccess} />
      )}
      {page === "register" && (
        <RegisterPage setPage={setPage} showToast={showToast} />
      )}

      {/* Admin */}
      {page === "admin" && user?.role === "admin" && (
        <AdminDashboard onLogout={handleLogout} />
      )}

      {/* Seller/Buyer dashboard */}
      {page === "dashboard" && user && (
        <Dashboard user={user} setPage={setPage} onLogout={handleLogout} showToast={showToast} />
      )}

      {/* Home */}
      {page === "home" && (
        <>
          <Home setPage={setPage} user={user} />
          <Footer />
        </>
      )}

      {/* Properties list — Member 2 */}
      {page === "properties" && (
        <>
          <PropertiesPage setPage={setPage} setSelectedProperty={setSelectedProperty} />
          <Footer />
        </>
      )}

      {/* Property details — Member 2 */}
      {page === "propertyDetails" && (
        <PropertyDetails property={selectedProperty} setPage={setPage} />
      )}

      {/* Redirect ne home nese jo i loguar dhe mundohet te hype ne dashboard */}
      {!user && page === "dashboard" && (
        <>
          <Home setPage={setPage} user={user} />
          <Footer />
        </>
      )}

      {/* Toast notifications */}
      {toast && (
        <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
      )}
    </>
  );
}