import React from "react";

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
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
          Hot Kitchen Deals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {kitchenDeals.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-4 relative hover:shadow-xl transition"
            >
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {item.tag}
              </span>

              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h6 className="font-semibold text-gray-800 text-sm mb-2">
                {item.name}
              </h6>

              <div className="flex items-center justify-between text-sm mb-1">
                <p className="line-through text-gray-500">₹ {item.mrp}</p>
                <span className="text-green-600 font-medium">
                  {item.discount}
                </span>
              </div>

              <p className="text-lg font-bold text-gray-900 mb-3">
                ₹ {item.price}
              </p>

              <ul className="text-xs text-gray-600 mb-4 space-y-1">
                <li>5% Instant discount on EMI*</li>
                <li>1% Instant discount on UPI*</li>
                <li>No Cost EMI available*</li>
              </ul>

              <button className="w-full bg-gray-900 text-white py-2 rounded-full hover:bg-gray-800 transition">
                Buy now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenDealsSection;