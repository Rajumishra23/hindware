import React from "react";

const StoreLocatorSection = () => {
  return (
    <section className="store-locator-section">
      <div className="store-background">
        <img
          src="/store.webp" // 🔹 Replace with actual image path
          alt="Hindware Showroom"
          className="store-image"
        />
      </div>
      <div className="store-content">
        <h2>Store Locator</h2>
        <p>Find your nearest Hindware Experience Center</p>
        <button>Locate Store</button>
      </div>
    </section>
  );
};

export default StoreLocatorSection;