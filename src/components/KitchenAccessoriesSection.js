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
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center mb-10">
        <h2 className="text-3xl font-bold mb-4 leading-snug">
          Bring Up Your Kitchen’s Aesthetics<br />
          <span className="text-red-600">Hardware, Fittings, Accessories</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Upgrade with accessories that look good and work even better.
          Because great kitchens are built on fine details.
        </p>
        <a
          href="/shop-accessories"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
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
                className="w-32 sm:w-36 md:w-40 lg:w-44 mx-auto rounded-xl shadow-md mb-2 hover:scale-105 transition-transform duration-300"
              />
              <h6 className="font-semibold text-gray-800 text-sm">{item.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitchenAccessoriesSection;