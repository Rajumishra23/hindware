import React, { useRef, useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const mediaItems = [
    {
      type: "image",
      src: "/blogk1.webp",
      heading: "Upgrade Your Kitchen",
      subtext: "Discover smart, modern appliances for your home.",
    },
    { 
      type: "image",
      src: "/blogk2.webp",
      heading: "Cook with Confidence",
      subtext: "Gas stoves that blend power and precision.",
    },
    {
      type: "image",
      src: "/blogk3.webp",
      heading: "Breathe Easy",
      subtext: "Chimneys that clear the air with style.",
    },
   
  ];

  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl || !window.bootstrap) return;

    const carousel = new window.bootstrap.Carousel(carouselEl, {
      interval: 4000,
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

  const goToSlide = (index) => {
    const carousel = window.bootstrap.Carousel.getInstance(carouselRef.current);
    carousel.to(index);
  };

  return (
    <section className="hero-carousel">
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000"
        ref={carouselRef}
      >
        <div className="carousel-inner">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="d-block w-100 hero-image"
              />
              <div
                className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start"
                style={{ top: "30%", left: "10%" }}
              >
                <div className="caption-box p-4 rounded">
                  <h1 className="display-4 fw-bold mb-4 animate__animated animate__fadeInDown">
                    {item.heading}
                  </h1>
                  <p className="lead mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                    {item.subtext}
                  </p>
                  <a
                    href="#"
                    className="btn btn-danger btn-lg px-5 animate__animated animate__fadeInUp animate__delay-2s"
                   
                  >
                    Explore Appliances
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;