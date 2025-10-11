import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome for social icons

const SocialMediaSection = () => {
  const brands = [
  {
    image: "/kichen1.webp",
    title: "Italon Kitchens",
    subtitle: "Modern Surfaces for Culinary Spaces",
  },
  {
    image: "/kichen2.webp",
    title: "QUEO Kitchen Studio",
    subtitle: "Your Gourmet Oasis Awaits",
  },
  {
    image: "/kichen3.webp",
    title: "QUEO Luxe Kitchens",
    subtitle: "Amber Finishes with Vintage Charm",
  },

  ];

  return (
    <section className="social-section">
      <h2>Follow us on Social Media</h2>
      <div className="brand-grid">
        {brands.map((brand, index) => (
          <div className="brand-card" key={index}>
            <img src={brand.image} alt={brand.subtitle} className="brand-image" />
            <div className="brand-overlay">
              <h4>{brand.title}</h4>
              <p>{brand.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="social-icons-colored">
  <a href="#"><i className="fab fa-facebook-f facebook" /></a>
  <a href="#"><i className="fab fa-instagram instagram" /></a>
  <a href="#"><i className="fab fa-x-twitter twitter" /></a>
  <a href="#"><i className="fab fa-youtube youtube" /></a>
  <a href="#"><i className="fab fa-whatsapp whatsapp" /></a>
</div>
    </section>
  );
};

export default SocialMediaSection;