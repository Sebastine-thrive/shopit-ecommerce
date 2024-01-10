"use client";
import React, { useState, useRef, useEffect } from "react";
import Product from "./../components/Product";

const OtherProductsCarousel = ({ products }) => {
  const [position, setPosition] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1); // 1 for right, -1 for left
  const containerRef = useRef(null);

  useEffect(() => {
    // Calculate the number of items to display based on container width
    const containerWidth = containerRef.current.offsetWidth;
    const itemWidth = 280; // Adjust this based on your item width
    const newItemsPerPage = Math.floor(containerWidth / itemWidth);
    setItemsPerPage(newItemsPerPage);

    // Automatically scroll the carousel
    const interval = setInterval(() => {
      if (scrollDirection === 1) {
        if (position < products.length - itemsPerPage) {
          setPosition((prevPosition) => prevPosition + 1);
        } else {
          setScrollDirection(-1); // Change direction to left
        }
      } else {
        if (position > 0) {
          setPosition((prevPosition) => prevPosition - 1);
        } else {
          setScrollDirection(1); // Change direction to right
        }
      }
    }, 5000); // Adjust the interval duration (in milliseconds) as needed

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [containerRef, itemsPerPage, products.length, position, scrollDirection]);

  return (
    <div
      ref={containerRef}
      className="w-full overflow-hidden relative py-4 px-2"
    >
      <div
        className="flex space-x-4 transition-transform duration-300 ease-in-out transform"
        style={{
          transform: `translateX(-${
            position * (containerRef?.current?.offsetWidth / itemsPerPage)
          }px)`,
        }}
      >
        {products.map((product) => (
          <Product key={product?._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default OtherProductsCarousel;
