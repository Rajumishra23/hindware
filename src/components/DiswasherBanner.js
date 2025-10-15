import React from "react";

const BannerSection = ({ image, altText = "Banner", height = "400px" }) => {
  return (
    <section className="banner-section mb-0">
      <img
        src="dishbann.webp"
        alt={altText}
        className="img-fluid w-100 rounded-4"
        style={{ maxHeight: height, objectFit: "cover" }}
      />
    </section>
  );
};

export default BannerSection;