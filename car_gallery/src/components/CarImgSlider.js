import React, { useState } from "react";
import { CarImgGallery } from "./CarImgGallery";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const CarImgSlider = (slides) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

//   !Array.isArray(slides) || 
  if (slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
      {CarImgGallery.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.image} alt="car image" className="image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default CarImgSlider;
