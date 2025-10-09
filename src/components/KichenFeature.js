import React from "react";

const KitchenFeature = () => {
  return (
    <section className="kitchen-feature">
      <div className="background-media">
        <img
          src="/kichen.webp" // 🔹 Replace with actual image path
          alt="Luxury Kitchen"
          className="background-image"
        />
      </div>

      <div className="overlay-content container">
        <div className="text-box">
          <h2 className="display-4 fw-bold mb-3">
            Explore by Space: <span className="text-danger">Kitchen</span>
          </h2>
          <p className="lead text-light mb-4">
            Discover modular kitchen designs that blend style, storage, and smart functionality.
            From sleek surfaces to ergonomic layouts — elevate your cooking space with Hindware.
          </p>
          <a href="#" className="btn btn-danger btn-lg px-4">
            View Inspirations
          </a>
        </div>
      </div>
    </section>
  );
};

export default KitchenFeature;