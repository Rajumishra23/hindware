import React from "react";

const blendItems = [
  {
    title: "Wet Grinder",
    image: "/blend.webp",
  },
  {
    title: "Juicer & Mixer Grinder",
    image: "/blend1.webp",
  },
  {
    title: "Hand Blender",
    image: "/blend2.webp",
  },
  {
    title: "Food Processors",
    image: "/blend3.webp",
  },
];

const BlendAndGrindMagic = () => {
  return (
    <section className="py-16 bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-10">Blend and Grind Magic</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {blendItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-beige rounded-full w-44 h-44 flex items-center justify-center shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-95 h-95 object-contain"
                />
              </div>
              <h6 className="mt-4 text-lg font-semibold">{item.title}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlendAndGrindMagic;