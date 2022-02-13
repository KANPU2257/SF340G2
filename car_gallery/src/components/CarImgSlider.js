import React, { useState, useEffect } from "react";
import { CarImgGallery } from "./CarImgGallery";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const CarImgSlider = (slides) => {
  const [current, setCurrent] = useState(0);
  // const len = slides.length;
  const [len, setLen] = useState(0)
  const [images, setImages] = useState([])
  
  useEffect(()=>{
    setImages(slides.slides)
    setLen(images.length)
    // console.log(len);
  })

  const nextSlide = () => {
    setCurrent(current === len - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? len - 1 : current - 1);
  };

//   !Array.isArray(slides) || 
  if (len <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowCircleRight className="right-arrow" onClick={nextSlide} />
      {images.map((slide,index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide} alt="car image" className="image"/>
            )}
          </div>
        );
      })}
      
    </section>
  );
};

export default CarImgSlider;
