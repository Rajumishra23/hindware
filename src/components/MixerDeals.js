import React from "react";

const mixerDeals = [
  {
    id: 1,
    name: "Vidiem Vesta Pro 750W",
    jars: "3 Jars",
    color: "Black",
    price: 4690,
    save: "₹2,090",
    tagColor: "bg-blue-600",
    image: "/jucier.png",
  },
  {
    id: 2,
    name: "Prestige Superb Plus 500W",
    jars: "3 Jars",
    color: "White",
    price: 2550,
    save: "₹1,015",
    tagColor: "bg-pink-600",
    image: "/jucier1.png",
  },
  {
    id: 3,
    name: "Premier MG517 Anaya",
    jars: "3 Jars",
    color: "Black",
    price: 4190,
    save: "₹2,045",
    tagColor: "bg-purple-600",
    image: "/jucier2.png",
  },
  {
    id: 4,
    name: "Bosch MGX21AKM TrueMixx Pro 1000W",
    jars: "4 Jars",
    color: "Black",
    price: 6999,
    save: "₹2,000",
    tagColor: "bg-blue-600",
    image: "/jucier3.png",
  },
  {
    id: 5,
    name: "Wonderchef Select 750W",
    jars: "3 Jars",
    color: "Black",
    price: 3999,
    save: "₹1,000",
    tagColor: "bg-pink-600",
    image: "/jucier4.png",
  },
];

const MixerGrinderSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Juicer and Mixer Grinder
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {mixerDeals.map((item) => (
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
              <p className="text-xs text-gray-500 mb-1">
                {item.jars} ({item.color})
              </p>
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

export default MixerGrinderSection;