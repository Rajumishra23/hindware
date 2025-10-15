import React from "react";

const chimneyDeals = [
  {
    id: 1,
    name: "Bosch Series 6 DWB97LM50I",
    color: "Stainless Steel",
    price: 66590,
    save: "₹16,900",
    tagColor: "bg-blue-600",
    image: "/chimny0.png",
  },
  {
    id: 2,
    name: "Faber Hood Zenith FL HC SC BK IN 60",
    color: "Black",
    price: 26490,
    save: "₹10,500",
    tagColor: "bg-blue-600",
    image: "/chimny1.png",
  },
  {
    id: 3,
    name: "Bosch Series 4 DWA98IJ60I",
    color: "Black",
    price: 20290,
    save: "₹3,700",
    tagColor: "bg-purple-600",
    image: "/chimny2.png",
  },
  {
    id: 4,
    name: "Preethi Chimney Alcor 210 Plus",
    color: "Black",
    price: 21490,
    save: "₹10,339",
    tagColor: "bg-purple-600",
    image: "/chimny3.png",
  },
  {
    id: 5,
    name: "Bosch DWHA68G60I",
    color: "Black",
    price: 21890,
    save: "₹8,610",
    tagColor: "bg-pink-600",
    image: "/chimny4.png",
  },
];

const ChimneyDealsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Chimney Deals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {chimneyDeals.map((item) => (
            <div
              key={item.id}
              className="bg-white border rounded-xl shadow-sm p-4 relative"
            >
              <span
                className={`absolute top-3 left-3 text-xs text-white font-semibold px-3 py-1 rounded-full ${item.tagColor}`}
              >
                Save {item.save}
              </span>

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain mb-4"
              />

              <h6 className="text-sm font-semibold text-gray-800">
                {item.name}
              </h6>
              <p className="text-xs text-gray-500 mb-2">({item.color})</p>
              <p className="text-lg font-bold text-orange-600">
                ₹ {item.price.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChimneyDealsSection;