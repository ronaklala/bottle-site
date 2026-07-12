import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>

          <h2 className="footer-logo">
            Aquene
          </h2>

          <p>
            Premium bottle manufacturer providing quality packaging solutions
            for businesses.
          </p>

        </div>

        <div>

          <h3>Quick Links</h3>

          <ul>

            <li><Link to="/">Home</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/products">Products</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>

        <div>

          <h3>Follow Us</h3>

          <div className="social-icons">

            <a href="#"><FaFacebookF /></a>

            <a href="#"><FaInstagram /></a>

            <a href="#"><FaLinkedinIn /></a>

            <a href="#"><FaWhatsapp /></a>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Bottle Company. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;