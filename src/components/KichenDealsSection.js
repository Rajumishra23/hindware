import React from "react";
import "./KitchenDealsSection.css";

const kitchenDeals = [
  {
    id: 1,
    img: "/cat-05.jpg",
    name: "Butterfly Smart Mixer Grinder 750W",
    mrp: 599,
    price: 399,
    discount: "24% Off",
    tag: "Best Seller",
  },
  {
    id: 2,
    img: "/cat-02.jpg",
    name: "Butterfly Rapid Juicer Pro 600W",
    mrp: 599,
    price: 459,
    discount: "23% Off",
    tag: "New Launch",
  },
  {
    id: 3,
    img: "/cat-01.jpg",
    name: "Butterfly Sleek Chimney 60cm",
    mrp: 1099,
    price: 849,
    discount: "22% Off",
    tag: "Premium",
  },
  {
    id: 4,
    img: "/cat-03.jpg",
    name: "Butterfly Pop-Up Toaster",
    mrp: 399,
    price: 219,
    discount: "27% Off",
    tag: "Hot Deal",
  },
];

const KitchenDealsSection = () => {
  return (
    <section className="kitchen-deals-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Hot Kitchen Deals</h2>

        <div className="row g-4">
          {kitchenDeals.map((item) => (
            <div className="col-12 col-sm-6 col-md-3" key={item.id}>
              <div className="deal-card">
                <span className="deal-tag">{item.tag}</span>
                <img
                  src={item.img}
                  alt={item.name}
                  className="img-fluid product-img"
                />
                <h6 className="product-title">{item.name}</h6>

                <div className="price-info">
                  <p className="old-price">₹ {item.mrp.toLocaleString()}</p>
                  <span className="discount">{item.discount}</span>
                </div>
                <p className="new-price">₹ {item.price.toLocaleString()}</p>

                <ul className="offer-list">
                  <li>5% Instant discount on EMI*</li>
                  <li>1% Instant discount on UPI*</li>
                  <li>No Cost EMI available*</li>
                </ul>

                <button className="buy-btn">Buy now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenDealsSection;
