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
  <span className="menu-text">Menu</span>
</button>
          </div>

          {/* 🔹 Center: Logo */}
          <div className="navbar-center">
            <a className="navbar-brand" href="/">
              <img src="/whitelogo.png" alt="Safeline Plus" className="logo-img" />
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
     <button className="close-btn" onClick={() => setMenuOpen(false)}>
  ✕ <span className="close-text">Close</span>
</button>

      {/* 🔹 Explore by Category */}
      <div className="menu-section">
        <h3>Explore by Category</h3>
        <ul>
          <li>SS Body Cooktops</li>
          <li>Glass Series Cooktops</li>
          <li>Premium Series Cooktops</li>
          <li>Electric Irons</li>
          <li>Electric Kettles</li>
          <li>Mixer Grinders</li>
          <li>Hot Plates (G-Coil)</li>
          <li>Immersion Rods</li>
        </ul>
      </div>

      {/* 🔹 Explore by Feature */}
      <div className="menu-section">
        <h3>Explore by Feature</h3>
        <ul>
          <li>Auto Ignition Burners</li>
          <li>Digital Glass Variants</li>
          <li>Double Dip Tray Options</li>
          <li>Brass Nozel Add-ons</li>
        </ul>
      </div>

      {/* 🔹 Support & Services */}
      <div className="menu-section">
        <h3>Support & Services</h3>
        <ul>
          <li>Installation Help</li>
          <li>Warranty Info</li>
          <li>Spare Parts</li>
          <li>Live Chat</li>
        </ul>
      </div>

      {/* 🔹 Diwali Edition */}
      <div className="menu-section">
        <h3>Diwali Edition</h3>
        <ul>
          <li>Best Sellers</li>
          <li>New Launches</li>
          <li>Limited Edition</li>
        </ul>
      </div>
    </div>
  </div> // ✅ This was missing
)}

          
        
    
    </>
  );
};

export default Header;