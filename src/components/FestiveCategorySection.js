import React from "react";

const categories = [
  { image: "/diswasher.webp", label: "Dishwasher" },
  { image: "/electry.webp", label: "Electric Kettle" },
  { image: "/chimny.webp", label: "Chimney" },
  { image: "/grinder.webp", label: "Grinder" },
  { image: "/stove.webp", label: "Gas Stove" },
  { image: "/coffy.webp", label: "Coffee Maker" },
];

const FestiveCategorySection = () => {
  return (
    <section className="py-10 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat, index) => (
            <div key={index} className="flex flex-col items-center">
         <img
  src={cat.image}
  alt={cat.label}
  className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
/>
              <h6 className="mt-2 text-white font-semibold text-sm">
                {cat.label}
              </h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestiveCategorySection;