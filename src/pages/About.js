import {
  FaLeaf,
  FaIndustry,
  FaCheckCircle,
  FaShieldAlt,
  FaTint // Added a water droplet icon for purity focus
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
              We are a trusted manufacturer and supplier of premium quality bottle solutions 
              integrated with an advanced multi-stage water purification system. Serving the 
              beverage, cosmetic, pharmaceutical, and industrial packaging sectors, we deliver 
              end-to-end excellence. We don't just provide the vessel; we guarantee unmatched purity inside it.
            </p>
            <p style={{ marginTop: '15px' }}>
              Our state-of-the-art facility utilizes high-grade sand filtration, activated charcoal 
              absorption, micron-level multi-stage filtering, and advanced UV treatment to eliminate 
              all contaminants. Finally, the water is enriched with essential healthy minerals like 
              Magnesium and Potassium to guarantee a crisp, refreshing, and clean taste in every single bottle.
            </p>
          </div>

          <br />

          <h2 className="section-title">Why Choose Us</h2>

          <div className="grid grid-4">

            <div className="feature-card card">
              <div className="feature-icon">
                <FaTint />
              </div>
              <h3>Certified Purity</h3>
              <p>
                Rigorous 5-stage treatment including UV and active charcoal for safe, pure water.
              </p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">
                <FaCheckCircle />
              </div>
              <h3>Premium Materials</h3>
              <p>
                Food-grade, durable raw materials ensuring long-lasting performance and zero leakage.
              </p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">
                <FaIndustry />
              </div>
              <h3>Modern Processing</h3>
              <p>
                Advanced manufacturing and automated mineral enrichment for consistent high quality.
              </p>
            </div>

            <div className="feature-card card">
              <div className="feature-icon">
                <FaLeaf />
              </div>
              <h3>Eco-Friendly Focus</h3>
              <p>
                Sustainable packaging options and environmentally responsible production practices.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}

export default About;