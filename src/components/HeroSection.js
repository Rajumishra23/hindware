import React, { useRef, useState, useEffect } from "react";

const Hero = () => {
  const mediaItems = [
    { type: "video", src: "/Videos/hind1video.mp4", thumb: "/thumbs/hind1.jpg" },
    { type: "image", src: "/hind.webp", thumb: "/thumbs/hind2.jpg" },
    { type: "video", src: "/Videos/hind3video.mp4", thumb: "/thumbs/hind3.jpg" },
    { type: "video", src: "/Videos/hind2video.mp4", thumb: "/thumbs/hind4.jpg" },
  ];

  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    const handleSlide = (e) => {
      setActiveIndex(e.to);

      // Scroll active thumbnail into view
      const activeThumb = document.querySelector(
        `.custom-indicators .indicator-thumb:nth-child(${e.to + 1})`
      );
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: "smooth", inline: "center" });
      }
    };

    carouselEl.addEventListener("slid.bs.carousel", handleSlide);
    return () => {
      carouselEl.removeEventListener("slid.bs.carousel", handleSlide);
    };
  }, []);

  const goToSlide = (index) => {
    const carousel = window.bootstrap.Carousel.getInstance(carouselRef.current);
    carousel.to(index);
  };

  return (
    <section className="hero-carousel">
      <div
        id="heroVideoCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        ref={carouselRef}
      >
        <div className="carousel-inner">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              {item.type === "video" ? (
                <video
                  className="d-block w-100 hero-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={item.src}
                  alt="Hero visual"
                  className="d-block w-100 hero-image"
                />
              )}

              <div className="carousel-caption d-flex flex-column justify-content-start align-items-start text-start">
                <h1 className="display-5 fw-bold mb-8">
                  Redefining <span className="text-danger">Luxury Living</span>
                </h1>
                <p className="lead mb-3">
                  Premium bathware, kitchen, and wellness experiences.
                </p>
                <a href="#" className="btn btn-danger btn-lg px-4">
                  Explore Collection
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 Custom Indicators */}
      <div className="custom-indicators mt-3 d-flex justify-content-center gap-3">
        {mediaItems.map((item, index) => (
          <div
            key={index}
            className={`indicator-thumb ${activeIndex === index ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          >
            <img src={item.thumb} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;