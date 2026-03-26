import { useState, useEffect } from "react";

export default function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);

  // Adds a shadow when the user scrolls down
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Left: Brand */}
        <div className="nav-brand" onClick={() => setPage("home")}>
          <div className="brand-logo">
            <div className="logo-dot" />
          </div>
          <span className="brand-name">UrbanKeys</span>
        </div>

        {/* Middle: Navigation */}
        <div className="nav-menu">
          <button 
            className={`nav-link ${page === "home" ? "active" : ""}`} 
            onClick={() => setPage("home")}
          >
            Home
          </button>
          <button 
            className="nav-link" 
            onClick={() => document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" })}
          >
            Properties
          </button>
        </div>

        {/* Right: Auth Buttons */}
        <div className="nav-auth">
          <button className="btn-secondary" onClick={() => setPage("login")}>
            Sign In
          </button>
          <button className="btn-primary" onClick={() => setPage("register")}>
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}