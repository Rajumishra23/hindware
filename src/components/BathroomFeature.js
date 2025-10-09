import React from "react";

const BathroomFeature = () => {
  return (
    <section className="bathroom-feature">
      <div className="background-media">
        <img
          src="/bath.webp" // 🔹 Replace with actual image path
          alt="Luxury Bathroom"
          className="background-image"
        />
      </div>

      <div className="overlay-content container">
        <div className="text-box">
          <h2 className="display-4 fw-bold mb-3">
            Explore by Space: <span className="text-danger">Bathroom</span>
          </h2>
          <p className="lead text-light mb-4">
            Discover curated bathroom designs that blend elegance, functionality,
            and wellness. Redefine your space with Hindware.
          </p>
          <a href="#" className="btn btn-danger btn-lg px-4">
            View Inspirations
          </a>
        </div>
      </div>
    </section>
  );
};

export default BathroomFeature;