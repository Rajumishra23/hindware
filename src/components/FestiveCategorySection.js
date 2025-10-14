import React from "react";
import "./FestiveCategorySection.css";

const categories = [
  { image: "/diswasher.webp" },
  {  image: "/electry.webp" },
  {  image: "/chimny.webp" },
  {  image: "/grinder.webp" },
  {  image: "/stove.webp" },
  {  image: "/coffy.webp" },
  
  
];

const FestiveCategorySection = () => {
  return (
    <section className="festive-section py-5">
      <div className="container text-center">
        <h2 className=" fw-bold mb-4">Categories</h2>
        <div className="row g-4 justify-content-center">
          {categories.map((cat, index) => (
            <div className="col-6 col-md-2" key={index}>
              <div className="category-card">
                <img src={cat.image} alt={cat.label} className="img-fluid rounded" />
                <h6 className="mt-2 text-light fw-semibold">{cat.label}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FestiveCategorySection;