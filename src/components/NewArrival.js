import React from "react";


const NewArrival = () => {
  return (
    <section className="bathroom-feature text-light">
      {/* 🔹 Background Image */}
      <div className="background-media">
        <img
          src="/New.webp"
          alt="Luxury Bathroom"
          className="background-image"
        />
      </div>

      {/* 🔹 Dark Overlay */}
      <div className="overlay"></div>

      {/* 🔹 Content */}
      <div className="overlay-content container">
        <div className="text-box">
          <h2 className="title">
            Explore by Space: <span className="text-danger">New Arrival</span>
          </h2>
          <p className="description">
            Discover curated bathroom designs that blend elegance, functionality,
            and wellness. Experience the luxury of modern living with Hindware.
          </p>
          <a href="#" className="btn btn-danger btn-lg view-btn">
            View Inspirations
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
