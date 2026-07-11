import HeroCarousel from "../components/HeroCarousel";
import FeatureCard from "../components/FeatureCard";

import {
  FaAward,
  FaShippingFast,
  FaArrowRight
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Pages.css";

function Home() {
  return (
    <>
      <HeroCarousel />

      <section className="section">
        <div className="container">

          <h2 className="section-title">
            Why Choose Us
          </h2>

          <p className="section-subtitle">
            Delivering premium bottle solutions for businesses.
          </p>

          <div className="grid grid-3">

            <FeatureCard
              icon={<FaAward />}
              title="Premium Quality"
              text="Manufactured with durable materials ensuring long-lasting performance."
            />

            <FeatureCard
              icon={<FaShippingFast />}
              title="Fast Delivery"
              text="Reliable delivery network with quick turnaround times."
            />

            <FeatureCard
              icon={<FaShippingFast />}
              title="Custom Designs"
              text="Bottle solutions designed to match your business requirements."
            />

          </div>

        </div>
      </section>

      <section className="cta-section">

        <div className="container">

          <h2>
            Looking for Premium Bottle Solutions?
          </h2>

          <p>
            Explore our wide range of quality bottles for every industry.
          </p>

          <Link
            to="/products"
            className="btn"
          >
            View Products <FaArrowRight />
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;