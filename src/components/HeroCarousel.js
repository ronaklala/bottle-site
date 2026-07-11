import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

import "./HeroCarousel.css";

const slides = [
  {
    title: "Premium Bottle Solutions",
    subtitle:
      "High-quality bottles designed for beverages, cosmetics and industrial packaging.",
    background:
      "linear-gradient(rgba(20,40,60,.55), rgba(20,40,60,.55)), linear-gradient(135deg,#4F86C6,#1F4E79)"
  },
  {
    title: "Elegant & Durable Packaging",
    subtitle:
      "Modern bottle designs built with quality materials for every business.",
    background:
      "linear-gradient(rgba(20,40,60,.55), rgba(20,40,60,.55)), linear-gradient(135deg,#5DADE2,#2874A6)"
  },
  {
    title: "Trusted Manufacturing Partner",
    subtitle:
      "Reliable production, premium quality and fast delivery for businesses worldwide.",
    background:
      "linear-gradient(rgba(20,40,60,.55), rgba(20,40,60,.55)), linear-gradient(135deg,#2E86C1,#154360)"
  }
];

function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={
            index === current
              ? "hero-slide active"
              : "hero-slide"
          }
          style={{
            background: slide.background
          }}
        >
          <div className="container hero-content">
            <h1>{slide.title}</h1>

            <p>{slide.subtitle}</p>

            <Link to="/products" className="btn">
              View Products
            </Link>
          </div>
        </div>
      ))}

      <button
        className="hero-arrow left"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FaChevronLeft />
      </button>

      <button
        className="hero-arrow right"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FaChevronRight />
      </button>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={
              index === current
                ? "dot active-dot"
                : "dot"
            }
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;