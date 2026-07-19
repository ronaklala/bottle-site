import HeroCarousel from "../components/HeroCarousel";
import FeatureCard from "../components/FeatureCard";

import {
  FaAward,
  FaShippingFast,
  FaArrowRight,
  FaPalette,      // Better icon for Custom Designs
  FaFilter,       // For Sand / Multi-stage filtration
  FaCharcoal,     // Note: If FaCharcoal isn't available, use FaGem or FaBiohazard. Let's use FaBurn or FaFillDrip as fallback, or FaLayerGroup
  FaLayerGroup,   // For Multi-stage
  FaFlask,        // For Added Minerals
  FaSun          // For UV (Ultra Violet) light
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Pages.css";

function Home() {
  return (
    <>
      <HeroCarousel />

      {/* --- Section 1: Why Choose Us --- */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Delivering premium, pure water solutions for businesses.
          </p>

          <div className="grid grid-3">
            <FeatureCard
              icon={<FaAward />}
              title="Premium Quality"
              text="100% safe, pure drinking water processed under strict quality standards."
            />

            <FeatureCard
              icon={<FaShippingFast />}
              title="Fast Delivery"
              text="Reliable delivery network ensuring your business never runs out of supply."
            />

            <FeatureCard
              icon={<FaPalette />}
              title="Custom Packaging"
              text="Bottle sizes and custom branding options designed to match your brand requirements."
            />
          </div>
        </div>
      </section>

      {/* --- Section 2: Our Purification Process (NEW) --- */}
      <section className="section purification-section" style={{ backgroundColor: "#f4f9fd" }}>
        <div className="container">
          <h2 className="section-title">Our 5-Stage Purification Process</h2>
          <p className="section-subtitle">
            How we transform regular water into premium, healthy drinking water.
          </p>

          <div className="grid grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '40px' }}>
            
            <div className="process-card" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '2.5rem', color: '#0077b6', marginBottom: '10px' }}><FaFilter /></div>
              <h3>1. Sand Filtration</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>Removes large suspended particles, dust, and physical impurities.</p>
            </div>

            <div className="process-card" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '2.5rem', color: '#0077b6', marginBottom: '10px' }}><FaLayerGroup /></div>
              <h3>2. Activated Charcoal</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>Absorbs chlorine, organic compounds, and eliminates bad odor or taste.</p>
            </div>

            <div className="process-card" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '2.5rem', color: '#0077b6', marginBottom: '10px' }}><FaLayerGroup /></div>
              <h3>3. Multi-Stage Filter</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>Micro-filters catch microscopic contaminants for ultimate water clarity.</p>
            </div>

            <div className="process-card" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '2.5rem', color: '#0077b6', marginBottom: '10px' }}><FaSun /></div>
              <h3>4. UV Treatment</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>Advanced Ultra-Violet light destroys harmful bacteria and viruses.</p>
            </div>

            <div className="process-card" style={{ textAlign: 'center', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: '2.5rem', color: '#0077b6', marginBottom: '10px' }}><FaFlask /></div>
              <h3>5. Added Minerals</h3>
              <p style={{ fontSize: '0.9rem', color: '#555' }}>Infused with essential minerals (like Magnesium & Potassium) for health and crisp taste.</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- Section 3: Call to Action --- */}
      <section className="cta-section">
        <div className="container">
          <h2>Looking for Premium Water Solutions?</h2>
          <p>
            Explore our wide range of quality custom bottles and bulk supply options for every industry.
          </p>
          <Link to="/products" className="btn">
            View Products <FaArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;