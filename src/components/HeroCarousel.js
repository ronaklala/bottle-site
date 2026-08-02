import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./HeroCarousel.css";

const slides = [
  {
    title: "URBAN QUALITY",
    subtitle:
      "High-quality bottles designed for beverages, cosmetics and industrial packaging.",
    // Replace the URL with your imported image variable, e.g., backgroundImage: urbanImg
    backgroundImage: "https://res.cloudinary.com/ronaklala-games/image/upload/v1785698663/aquaspene/Gemini_Generated_Image_e0cmxre0cmxre0cm_cjzogy.png", 
  },
  {
    title: "PURE NATURE",
    subtitle:
      "Modern bottle designs built with quality materials for every business.",
    backgroundImage: "https://res.cloudinary.com/ronaklala-games/image/upload/v1785698680/aquaspene/Gemini_Generated_Image_diytp3diytp3diyt_vu80pb.png",
  },
  {
    title: "MINIMALIST & PREMIUM",
    subtitle:
      "Reliable production, premium quality and fast delivery for businesses worldwide.",
    backgroundImage: "https://res.cloudinary.com/ronaklala-games/image/upload/v1785698939/aquaspene/Gemini_Generated_Image_1vkifm1vkifm1vki_ujlhgj.png",
  },
  {
    title: "WELLNESS & CALM",
    subtitle:
      "Reliable production, premium quality and fast delivery for businesses worldwide.",
    backgroundImage: "https://res.cloudinary.com/ronaklala-games/image/upload/v1785699143/aquaspene/Gemini_Generated_Image_21iq321iq321iq32_zwi7os.png",
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
            // Merging a dark gradient overlay with the background image for text readability
            backgroundImage: `linear-gradient(rgba(20,40,60,0.6), rgba(20,40,60,0.6)), url(${slide.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
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