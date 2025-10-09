import React, { useState, useEffect } from "react";

const productImages = [
  { src: "/preview.png", label: "Wash Basins" },
  { src: "/img3-removebg-preview.png", label: "Faucets" },
  { src: "/img4-removebg-preview.png", label: "Tiles & Surfaces" },
  { src: "/img6-removebg-preview.png", label: "Showers" },
  { src: "/img7-removebg-preview.png", label: "Vanities" },
  { src: "/img8-removebg-preview.png", label: "Toilets" },
  { src: "/img9-removebg-preview.png", label: "Mirrors" },
  { src: "/img10-removebg-preview.png", label: "Bathtubs" },
  { src: "/img11-removebg-preview.png", label: "Storage Units" },
  { src: "/img12-removebg-preview.png", label: "Accessories" },
];

const ProductCategorySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => setActiveIndex(index);

  return (
    <section
      className="product-category-section position-relative text-center"
      style={{
        position: "relative",
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "6rem 2rem",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* 🔹 Overlay for blur/black tint */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(3px)",
          zIndex: 1,
        }}
      ></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        {/* 🔹 Heading */}
        <h2 className="display-5 fw-bold mb-3">
          Explore Product <span className="text-danger">Categories</span>
        </h2>
        <p className="lead text-light mb-5">
          Top-rated, best-selling products trusted and loved by customers.
        </p>

        {/* 🔹 Image Slider */}
        <div
          className="slider-wrapper position-relative mb-4 d-flex justify-content-center align-items-center"
          style={{
            minHeight: "500px",
            width: "100%",
          }}
        >
          {productImages.map((item, index) => (
            <div
              key={index}
              className={`slide-image position-absolute ${
                activeIndex === index ? "active" : ""
              }`}
              style={{
                opacity: activeIndex === index ? 1 : 0,
                transition: "opacity 0.8s ease",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={item.src}
                alt={item.label}
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  height: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0px 5px 15px rgba(0,0,0,0.5))",
                }}
              />
              <div
                className="image-label mt-3 fw-semibold"
                style={{ fontSize: "1.25rem" }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Dots */}
        <div className="slider-dots d-flex justify-content-center gap-2">
          {productImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: activeIndex === index ? "#d32f2f" : "#fff",
                opacity: activeIndex === index ? 1 : 0.6,
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategorySection;
