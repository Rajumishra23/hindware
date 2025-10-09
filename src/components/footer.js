import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <h4>Explore By Brands</h4>
          <ul>
            <li>Queo</li>
            <li>Hindware Italian Collection</li>
            <li>Hindware Smart Collection</li>
            <li>Hindware</li>
            <li>Hindware Appliances</li>
            <li>Benelave by Hindware</li>
          </ul>
        </div>

        <div>
          <h4>Explore By Categories</h4>
          <ul>
            <li>Bathware</li>
            <li>Tiles & Surfaces</li>
            <li>Kitchen Appliances</li>
          </ul>
        </div>

        <div>
          <h4>Explore By Space</h4>
          <ul>
            <li>Bathroom</li>
            <li>Kitchen</li>
          </ul>
        </div>

        <div>
          <h4>Business & Experience</h4>
          <ul>
            <li>Institutional Business</li>
            <li>International Business</li>
            <li>Hindware Experience Center</li>
            <li>Store Locator</li>
            <li>Explore Catalogue</li>
          </ul>
        </div>

        <div>
          <h4>Customer Support</h4>
          <ul>
            <li>Service & Support</li>
            <li>Contact Us</li>
            <li>Warranty & Return Policy</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4>Other Links</h4>
          <ul>
            <li>Blogs</li>
            <li>Certifications</li>
            <li>Media</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <div className="footer-social">
        <div>
          <h5>Queo</h5>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f facebook" /></a>
            <a href="#"><i className="fab fa-instagram instagram" /></a>
            <a href="#"><i className="fab fa-pinterest pinterest" /></a>
            <a href="#"><i className="fab fa-linkedin-in linkedin" /></a>
            <a href="#"><i className="fab fa-youtube youtube" /></a>
          </div>
        </div>

        <div>
          <h5>Hindware Italian Collection</h5>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f facebook" /></a>
            <a href="#"><i className="fab fa-instagram instagram" /></a>
            <a href="#"><i className="fab fa-pinterest pinterest" /></a>
            <a href="#"><i className="fab fa-linkedin-in linkedin" /></a>
            <a href="#"><i className="fab fa-youtube youtube" /></a>
          </div>
        </div>

        <div>
          <h5>Hindware Smart Appliances</h5>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f facebook" /></a>
            <a href="#"><i className="fab fa-instagram instagram" /></a>
            <a href="#"><i className="fab fa-pinterest pinterest" /></a>
            <a href="#"><i className="fab fa-linkedin-in linkedin" /></a>
            <a href="#"><i className="fab fa-youtube youtube" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Bigdesign software Tecnologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;