import React from "react";

const SmartProductSection = () => {
  return (
    <section className="smart-video-section">
      <video autoPlay muted loop playsInline className="bg-video">
        <source src="Videos/smart.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-overlay">
        <h2>Smart Products for Smart Homes</h2>
        <p>
          Designed to meet needs with the finest details to redefine comfort,
          convenience, and hygiene.
        </p>
        <button>Explore Smart Products</button>
      </div>
    </section>
  );
};

export default SmartProductSection;