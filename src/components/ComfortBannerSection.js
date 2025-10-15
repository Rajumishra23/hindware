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
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 leading-snug text-gray-900">
          Kitchen Appliances for Better Comfort, Convenience & Health
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Bring home advanced kitchen appliances for a smarter lifestyle. From i-Autoclean chimneys to auto-ignition hobs and AO water heaters — explore it all!
        </p>
        <a
          href="/shop"
          className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Buy Now
        </a>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
          {items.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="w-48 sm:w-52 md:w-56 lg:w-60 mx-auto rounded-xl shadow-md mb-2 hover:scale-105 transition-transform duration-300"
              />
              <h6 className="font-semibold text-gray-800 text-sm">{item.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComfortShowcaseSection;