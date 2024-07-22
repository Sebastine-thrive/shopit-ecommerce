"use client";

import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === children.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? children.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container flex flex-col justify-center items-center  w-auto">
      <div className="carousel w-auto flex justify-center items-center">
        {children.map((child, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="scroll-controls">
        <button className="scroll-control" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="scroll-control" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
      <div className="scroll-indicators">
        {children.map((_, index) => (
          <div
            key={index}
            className={`scroll-indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
