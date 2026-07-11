import {
  FaLeaf,
  FaIndustry,
  FaCheckCircle,
  FaShieldAlt
} from "react-icons/fa";

import "./Pages.css";

function About() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
        </div>
      </section>

      <section className="page-content">
        <div className="container">

          <div className="info-card card">

            <h3>Who We Are</h3>

            <p>
              We are a trusted manufacturer and supplier of premium quality
              bottles for beverages, cosmetics, pharmaceuticals and industrial
              packaging. Our focus is quality, durability and customer
              satisfaction.
            </p>

          </div>

          <br />

          <h2 className="section-title">
            Why Choose Us
          </h2>

          <div className="grid grid-4">

            <div className="feature-card card">
              <div className="feature-icon">
                <FaCheckCircle />
              </div>

              <h3>Premium Materials</h3>

              <p>
                High-quality raw materials ensuring durability.
              </p>

            </div>

            <div className="feature-card card">
              <div className="feature-icon">
                <FaIndustry />
              </div>

              <h3>Modern Manufacturing</h3>

              <p>
                Advanced manufacturing techniques for consistent quality.
              </p>

            </div>

            <div className="feature-card card">
              <div className="feature-icon">
                <FaLeaf />
              </div>

              <h3>Eco Friendly</h3>

              <p>
                Sustainable production practices with reduced waste.
              </p>

            </div>

            <div className="feature-card card">
              <div className="feature-icon">
                <FaShieldAlt />
              </div>

              <h3>Reliable Service</h3>

              <p>
                Customer-focused support and dependable delivery.
              </p>

            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default About;