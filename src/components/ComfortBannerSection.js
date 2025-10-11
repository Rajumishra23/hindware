import React from "react";

const ComfortShowcaseSection = () => {
  const items = [
    { title: "Chimney", image: "/comfort1.webp" },
    { title: "Cooktops & Hobs", image: "/comfort2.webp" },
    { title: "Water Heaters", image: "/comfort3.webp" },
    { title: "Built-in Appliances", image: "/comfort4.webp" },
    { title: "Dishwashers", image: "/comfort5.webp" },
  ];

  return (
    <section className="comfort-showcase py-5">
      <div className="container text-center mb-5">
        <h2 className="fw-bold mb-3">
          Kitchen Appliances for Better Comfort, Convenience & Health
        </h2>
        <p className="lead mb-4">
          Bring home advanced kitchen appliances for a smarter lifestyle. From i-Autoclean chimneys to auto-ignition hobs and AO water heaters — explore it all!
        </p>
        <a href="/shop" className="btn btn-dark px-4 py-2 rounded-pill">
          Buy Now
        </a>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center">
          {items.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="comfort-img  mb-2 rounded-3 shadow-sm"
              />
              <h6 className="fw-semibold">{item.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComfortShowcaseSection;