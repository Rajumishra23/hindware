import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const suggestions = [
    "Search for gas stove...",
    "Search for chimney...",
    "Search for water purifier...",
    "Search for mixer grinder...",
    "Search for built-in oven...",
    "Search for dishwasher...",
    "Search for kitchen sink...",
    "Search for touchless faucet...",
    "Search for electric kettle...",
    "Search for kitchen essentials...",
  ];

  const [placeholder, setPlaceholder] = useState(suggestions[0]);
  const [index, setIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔹 Placeholder rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % suggestions.length);
      setPlaceholder(suggestions[(index + 1) % suggestions.length]);
    }, 2500);
    return () => clearInterval(interval);
  }, [index]);

  // 🔹 Scroll-based color switching
  useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 80);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* 🔹 Left: Hamburger */}
          <div className="navbar-left">
            <button className="menu-btn" onClick={() => setMenuOpen(true)}>
              <i className="fas fa-bars"></i>
            </button>
          </div>

          {/* 🔹 Center: Logo */}
          <div className="navbar-center">
            <a className="navbar-brand" href="/">
              <img src="/logo.png" alt="Safeline Plus" className="logo-img" />
            </a>
          </div>

          {/* 🔹 Right: Icons */}
          <div className="navbar-right d-flex align-items-center gap-4">
            <a href="#">
              <i className="fas fa-search nav-icon"></i>
            </a>
            <a href="#">
              <i className="fas fa-user nav-icon"></i>
            </a>
            <a href="#">
              <i className="fas fa-shopping-cart nav-icon"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* 🔹 Slide-In Menu */}
     {menuOpen && (
  <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
    <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={() => setMenuOpen(false)}>✕</button>

      <div className="menu-section">
        <h3>Kitchen Appliances</h3>
        <ul>
          <li>Chimneys</li>
          <li>Built-in Hobs</li>
          <li>Gas Cooktops</li>
          <li>Induction Cooktops</li>
          <li>Built-in Microwave Ovens</li>
          <li>Built-in Ovens</li>
          <li>Dishwashers</li>
          <li>Refrigerators</li>
          <li>Water Purifiers</li>
          <li>Electric Kettles</li>
          <li>Mixer Grinders</li>
          <li>Kitchen Sinks</li>
          <li>Touchless Faucets</li>
          <li>Kitchen Essentials</li>
        </ul>
      </div>

      <div className="menu-section">
        <h3>Smart Kitchen</h3>
        <ul>
          <li>Voice-Controlled Chimneys</li>
          <li>IoT-Enabled Faucets</li>
          <li>Auto-Clean Hobs</li>
          <li>Sensor-Based Water Purifiers</li>
        </ul>
      </div>

      <div className="menu-section">
        <h3>Support & Services</h3>
        <ul>
          <li>Installation Help</li>
          <li>Warranty Info</li>
          <li>Spare Parts</li>
          <li>Live Chat</li>
        </ul>
      </div>
    </div>
  </div>
)}
          
        
    
    </>
  );
};

export default Header;