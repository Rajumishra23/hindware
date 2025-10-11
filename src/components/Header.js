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
  "Search for kitchen essentials..."


  ];

  const [placeholder, setPlaceholder] = useState(suggestions[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % suggestions.length);
      setPlaceholder(suggestions[(index + 1) % suggestions.length]);
    }, 2500);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <>
      {/* 🔹 Top Info Bar */}
      <div className="topbar bg-light border-bottom py-2 small">
        <div className="container d-flex justify-content-between align-items-center">
          <div>
            <i className="fa-solid fa-phone text-danger me-2"></i>
            <span>1800-200-7577</span>
          </div>
          <div className="d-flex gap-3">
            <a href="#" className="text-dark text-decoration-none">
              Store Locator
            </a>
            <a href="#" className="text-dark text-decoration-none">
              Contact Us
            </a>
            <a href="#" className="text-dark text-decoration-none">
              Login / Register
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm main-navbar">
        <div className="container">
          {/* 🔹 Logo */}
          <a className="navbar-brand" href="/">
            <h1 className="m-0 fw-bold text-dark">Safeline Plus</h1>
          </a>

          {/* 🔹 Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* 🔹 Menu Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {[
              "Gas Stove",
              "Chimney",
              "Water Purifier",
              "Mixer Grinder",
              "Built-in Oven",
              "Dishwasher",
              "Kitchen Sink",
              ].map((item, index) => (
                <li key={index} className="nav-item mx-1">
                  <a href="#" className="nav-link fw-semibold text-dark">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <div className="search-box position-relative d-flex align-items-center">
              <input
                type="text"
                className="form-control"
                placeholder={placeholder}
              />
              <button className="btn btn-warning search-btn ms-1">
                <i className="fa fa-search text-dark"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;