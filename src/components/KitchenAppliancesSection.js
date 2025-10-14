import React from "react";
import "./KitchenAppliancesSection.css";


const kitchenData = [
  { id: 1, img: "/kichen.webp", title: "Energy Efficient" },
  { id: 2, img: "/kichen1.avif", title: "Powerful Performance" },
  { id: 3, img: "/kichen2.avif", title: "Modern Design" },
  { id: 4, img: "/kichen3.avif", title: "Smart Cooking" },
  { id: 5, img: "/kichen4.avif", title: "Durable Build" },
];

const KitchenAppliancesSection = () => {
  return (
    <section className="kitchen-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Kitchen Appliances</h2>

        <div className="row g-4 align-items-stretch">
          {/* 🔹 Left big image */}
          <div className="col-lg-6 col-12">
            <div className="appliance-card big-image">
              <img
                src={kitchenData[0].img}
                alt={kitchenData[0].title}
                className="img-fluid appliance-img"
              />
              <div className="overlay">
                <h5>{kitchenData[0].title}</h5>
              </div>
            </div>
          </div>

          {/* 🔹 Right 4 small images (2x2 grid) */}
          <div className="col-lg-6 col-12">
            <div className="row g-4">
              {kitchenData.slice(1).map((item) => (
                <div key={item.id} className="col-6">
                  <div className="appliance-card small-image">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="img-fluid appliance-img"
                    />
                    <div className="overlay">
                      <h6>{item.title}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitchenAppliancesSection;
