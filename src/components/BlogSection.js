import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // 🔥 Font Awesome icons

const BlogSection = () => {
  const blogs = [
   {
    title: "Why Built-in Ovens Are the Perfect Blend of Elegance and Efficiency",
    image: "/blogk1.webp",
    description: "Explore how built-in ovens elevate kitchen design and simplify cooking routines.",
  },
  {
    title: "Modular Kitchen Handles: Sleek, Space-Saving, and Functional",
    image: "/blogk2.webp",
    description: "Discover handle designs that blend minimalism with ergonomic comfort.",
  },
  {
    title: "Smart Chimneys: A Modern Upgrade for Cleaner, Smarter Kitchens",
    image: "/blogk3.webp",
    description: "Learn how auto-clean chimneys enhance hygiene and reduce maintenance.",
  },
  ];

  return (
    <section className="blog-section">
      <div className="blog-header">
        <h2>Blogs</h2>
        <a href="/blogs" className="view-all">View All Blogs</a>
      </div>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="business-support-grid">
        <div className="support-card">
          <i className="fas fa-store" />
          <h4>Institutional Business</h4>
          <p>Explore Projects for Institutional & Business Customers</p>
          <a href="#">Know More</a>
        </div>

        <div className="support-card">
          <i className="fas fa-globe" />
          <h4>International Business</h4>
          <p>Explore the countries we operate in</p>
          <a href="#">Know More</a>
        </div>

        <div className="support-card">
          <i className="fas fa-headset" />
          <h4>Service & Support</h4>
          <p>Connect with us for Installation and Service Request</p>
          <a href="#">Connect Now</a>
        </div>

        <div className="support-card">
          <i className="fas fa-mobile-alt" />
          <h4>Download Kitchen Service App</h4>
          <a href="#">Download Now</a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;