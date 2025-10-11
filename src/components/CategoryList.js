import React from "react";
import bg from "./assets/bg.png";

const categories = [
  { name: "Gas Stove", image: "/img3-removebg-preview.png" },
  { name: "Chimney", image: "/img7-removebg-preview.png" },
  { name: "Water Purifier", image: "/cat3.webp" },
  { name: "Mixer Grinder", image: "/cat4.webp" },
  { name: "Built-In Oven", image: "/cat5.webp" },
  { name: "Dishwasher", image: "/cat6.webp" },
  { name: "Toaster", image: "/cat1.webp" },
  { name: "Kitchen Sink", image: "/img4-removebg-preview.png" },
  { name: "Pressure Cooker", image: "/cat7.webp" },
  { name: "Blender", image: "/img6-removebg-preview.png" },
  { name: "Electric Kettle", image: "/cat2.webp" },
  { name: "Wet Grinder", image: "/img8-removebg-preview.png" },
  { name: "Food Steamer", image: "/img9-removebg-preview.png" },
  { name: "Slow Cooker", image: "/img10-removebg-preview.png" },
  { name: "Induction Cooktop", image: "/img11-removebg-preview.png" },
  { name: "Electric Grill", image: "/img12-removebg-preview.png" },
];

const CategoryList = () => {
  return (
    <section
      className="category-section py-5"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Shop by Category</h2>
        <div className="row justify-content-center">
          {categories.map((cat, index) => (
            <div key={index} className="col-6 col-md-4 col-lg-3 mb-4">
              <div className="category-card text-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="img-fluid category-img"
                />
                <h5 className="mt-3 fw-semibold">{cat.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryList;