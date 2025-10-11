import React from "react";

const KitchenAccessoriesSection = () => {
  const items = [
    { title: "Carcass", image: "/hard1.webp" },
    { title: "Shutter", image: "/hard2.webp" },
    { title: "Hardwares", image: "/hard3.webp" },
    { title: "Handles", image: "/hard4.webp" },
    { title: "Sink", image: "/hard5.webp" },
  ];

  return (
    <section className=" kitchen-accessories py-5">
      <div className="container text-center mb-5">
        <h2 className="fw-bold mb-3">
          Bring Up Your Kitchen’s Aesthetics<br />Hardware, Fittings, Accessories
        </h2>
        <p className="lead mb-4">
          Upgrade with accessories that look good and work even better.
          Because great kitchens are built on fine details.
        </p>
        <a href="/shop-accessories" className="btn btn-danger px-4 py-2 rounded-pill">
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
                className="accessory-img mb-2 rounded-3 shadow-sm"
              />
              <h6 className="fw-semibold">{item.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenAccessoriesSection;