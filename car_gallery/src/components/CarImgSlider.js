import React, { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowCircleLeft } from "react-icons/fa";

const CarImgSlider = (props) => {
  const [current, setCurrent] = useState(0);
  const [len, setLen] = useState(0)
  const [images, setImages] = useState([])
  
  useEffect(()=>{
    setImages(props.slides)
    setLen(images.length)
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
      <FaArrowCircleLeft style={{color:'white'}} className="left-arrow" onClick={prevSlide} />
      <FaArrowCircleRight style={{color:'white'}} className="right-arrow" onClick={nextSlide} />
      {images.map((slide,index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img style={{
                width:'50%',
                height:'50%',
              }} src={slide} alt="car image" className="image"/>
            )}
          </div>
        );
      })}
      
    </section>
  );
};

export default CarImgSlider;
