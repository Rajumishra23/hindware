import React from "react";
import "./Header.css"; // ✅ import the CSS fix

const Header = () => {
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
          <a className="navbar-brand" href="/">
            <h1 className="m-0 fw-bold text-dark">Safeline plus</h1>
          </a>

          {/* Mobile Toggle */}
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

          {/* Menu Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {[
                "Bathware",
                "Kitchen",
                "Tiles",
                "Wellness",
                "Virtual Experience",
                "About Us",
              ].map((item, index) => (
                <li key={index} className="nav-item mx-2">
                  <a href="#" className="nav-link fw-semibold text-dark">
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Search + Cart */}
            <div className="search-cart-group d-flex align-items-center gap-3">
              <div className="input-group search-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products..."
                />
                <button className="btn btn-danger">
                  <i className="fa fa-search"></i>
                </button>
              </div>
              <a href="#" className="cart-icon position-relative text-dark">
                <i className="fa fa-shopping-bag fs-5"></i>
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
                  0
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
