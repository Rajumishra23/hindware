import React, { useRef, useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const mediaItems = [
    {
      type: "video",
      src: "Videos/frontvideo.webm",
      heading: "Experience Luxury",
      subtext: "Cinematic kitchen moments in motion.",
    },
    {
      type: "video",
      src: "Videos/smart.webm",
      heading: "Precision in Motion",
      subtext: "Gas stoves and chimneys in action.",
    },
    {
      type: "image",
      src: "/hero.webp",
      heading: "Upgrade Your Kitchen",
      subtext: "Discover smart, modern appliances for your home.",
    },
    {
      type: "image",
      src: "/hero1.webp",
      heading: "Cook with Confidence",
      subtext: "Gas stoves that blend power and precision.",
    },
  ];

  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl || !window.bootstrap) return;

    const carousel = new window.bootstrap.Carousel(carouselEl, {
      interval: 5000,
      ride: "carousel",
      pause: false,
      wrap: true,
    });

    const handleSlide = () => {
      const activeItem = carouselEl.querySelector(".carousel-item.active");
      const index = [...carouselEl.querySelectorAll(".carousel-item")].indexOf(activeItem);
      setActiveIndex(index);
    };

    carouselEl.addEventListener("slid.bs.carousel", handleSlide);

    return () => {
      carouselEl.removeEventListener("slid.bs.carousel", handleSlide);
      carousel.dispose();
    };
  }, []);

  return (
    <section className="hero-carousel">
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
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
                  src={item.src}
                  className="d-block w-100 hero-media"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  className="d-block w-100 hero-media"
                />
              )}

              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start"
                style={{ top: "30%", left: "10%" }}
              >
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;