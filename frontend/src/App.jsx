import { useState, useCallback } from "react";

import "./styles/style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard"; // ← SHTO KËTË

export default function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem("user")); } catch { return null; }
  });
  const [toast, setToast] = useState(null);
  const showToast = useCallback((message, type = "success") => setToast({ message, type }), []);
  const handleLoginSuccess = useCallback((userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    showToast(`Welcome back, ${userData.name}!`, "success");
    setPage(userData.role === "admin" ? "admin" : "dashboard"); // ← NDRYSHO KËTË
  }, [showToast]);

  const handleLogout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    showToast("You've been signed out.", "success");
    setPage("home");
  }, [showToast]);

  return (
    <>
      {page === "login" && <LoginPage setPage={setPage} onLoginSuccess={handleLoginSuccess} />}
      {page === "register" && <RegisterPage setPage={setPage} showToast={showToast} />}
      {page === "admin" && user?.role === "admin" && <AdminDashboard />} {/* ← SHTO KËTË */}
      {page === "dashboard" && user && <Dashboard user={user} setPage={setPage} onLogout={handleLogout} showToast={showToast} />}
      {(page === "home" || (!user && page === "dashboard")) && (
        <>
          <Navbar page={page} setPage={setPage} user={user} onLogout={handleLogout} />
          <Home setPage={setPage} user={user} />
          <Footer />
        </>
      )}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}