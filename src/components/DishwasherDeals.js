import React from "react";

const dishwasherDeals = [
  {
    id: 1,
    name: "Bosch Series 6 15 Place Settings",
    color: "Silver Inox",
    price: 78990,
    save: "₹2,500",
    tagColor: "bg-blue-600",
    image: "/dish.png",
  },
  {
    id: 2,
    name: "IFB Neptune VX 15 Place Settings",
    color: "Inox Grey",
    price: 43990,
    save: "₹3,000",
    tagColor: "bg-pink-600",
    image: "/dish1.png",
  },
  {
    id: 3,
    name: "Bosch Series 6 15 Place Settings",
    color: "Silver Inox",
    price: 46990,
    save: "₹1,000",
    tagColor: "bg-purple-600",
    image: "/dish2.png",
  },
  {
    id: 4,
    name: "LG 14 Place Settings Wifi (QuadWash)",
    color: "Platinum Silver",
    price: 46990,
    save: "₹1,000",
    tagColor: "bg-purple-600",
    image: "/dish3.png",
  },
  {
    id: 5,
    name: "FABER FFSD 6PR 12S 1",
    color: "Neo Grey",
    price: 36990,
    save: "₹1,000",
    tagColor: "bg-pink-600",
    image: "/dish4.png",
  },
];

const DishwasherDealsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Dishwasher Deals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {dishwasherDeals.map((item) => (
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

export default DishwasherDealsSection;