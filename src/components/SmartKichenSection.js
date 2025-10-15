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
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Smart Appliances for your Smart Kitchen
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Small kitchen appliances with advanced features that meet your everyday kitchening needs,
          making cooking simple, fast, and effort-less.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/shop"
            className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Buy Now
          </a>
          <a
            href="/view-more"
            className="border border-gray-900 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-900 hover:text-white transition"
          >
            View More
          </a>
        </div>
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

export default SmartKitchenSection;