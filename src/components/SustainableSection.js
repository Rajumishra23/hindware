import React from "react";

const SustainableSection = () => {
  return (
    <section className="sustainable-section">
         <div className="background-media">
        <img
          src="/green.webp" // 🔹 Replace with actual image path
          alt="Luxury Kitchen"
          className="background-image"
        />
      </div>
      <div className="sustainable-content">
        <h2>Go Green with Sustainable Products</h2>
        <button>Explore Star Rated Collection</button>
      </div>
    </section>
  );
};

export default SustainableSection;