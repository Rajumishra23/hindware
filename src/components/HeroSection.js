import React, { useRef, useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const mediaItems = [
    {
      type: "video",
      src: "/Videos/hind1video.mp4",
      poster: "/Images/hind1poster.webp", // fallback poster
    },
    {
      type: "image",
      src: "/Images/hind.webp",
    },
  ];

  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    const handleSlide = (e) => setActiveIndex(e.to);

    carouselEl.addEventListener("slid.bs.carousel", handleSlide);
    return () => carouselEl.removeEventListener("slid.bs.carousel", handleSlide);
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
                  preload="metadata"
                  poster={item.poster} // fallback
                >
                  <source src={item.src} type="video/mp4" />
                  {/* Optional WebM fallback */}
                  {/* <source src="/Videos/hind1video.webm" type="video/webm" /> */}
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.src}
                  alt="Hero visual"
                  className="d-block w-100 hero-image"
                />
              )}

              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start"
                style={{ top: "30%", left: "10%" }}
              >
                <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInDown">
                  Redefining <span className="text-danger">Luxury Living</span>
                </h1>
                <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                  Premium bathware, kitchen, and wellness experiences.
                </p>
                <a
                  href="#"
                  className="btn btn-danger btn-lg px-5 animate__animated animate__fadeInUp animate__delay-2s"
                  style={{
                    boxShadow: "0 8px 20px rgba(212, 175, 55, 0.4)",
                  }}
                >
                  Explore Collection
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
