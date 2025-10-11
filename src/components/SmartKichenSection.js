import React from "react";

const SmartKitchenSection = () => {
  const items = [
    { title: "Electric Kettle", image: "/smart1.webp" },
    { title: "OTGs", image: "/smart2.webp" },
    { title: "Sandwich Grill", image: "/smart3.webp" },
    { title: "Juicer", image: "/smart4.webp" },
    { title: "Mixer Grinder", image: "/smart5.webp" },
  ];

  return (
    <section className="smart-kitchen py-5">
      <div className="container text-center mb-5">
        <h2 className="fw-bold mb-3">Smart Appliances for your Smart Kitchen</h2>
        <p className="lead mb-4">
          Small kitchen appliances with advanced features that meet your everyday kitchening needs,
          making cooking simple, fast, and effort-less.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a href="/shop" className="btn btn-dark px-4 py-2 rounded-pill">Buy Now</a>
          <a href="/view-more" className="btn btn-outline-dark px-4 py-2 rounded-pill">View More</a>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center text-center">
          {items.map((item, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-2 mb-4">
              <img
                src={item.image}
                alt={item.title}
                className="smart-img mb-2 rounded-3 shadow-sm"
              />
              <h6 className="fw-semibold">{item.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartKitchenSection;