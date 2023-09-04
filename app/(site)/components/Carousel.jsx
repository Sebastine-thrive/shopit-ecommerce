"use client";
import React, { useState } from "react";
import Product from "./../components/Product";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const Carousel = ({ products }) => {
  const [position, setPosition] = useState(0);

  const slideLeft = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  const slideRight = () => {
    if (position < products.length - 4) {
      // Display 4 items at a time
      setPosition(position + 1);
    }
  };

  return (
    <div className="w-1000 overflow-hidden relative py-4">
      <div
        className="flex space-x-4 transition-transform duration-300 ease-in-out transform"
        style={{ transform: `translateX(-${position * 250}px)` }}
      >
        {products.map((product) => (
          <Product key={product?._id} product={product} />
        ))}
      </div>
      <button
        className="px-4 py-2 bg-white text-black font-extrabold rounded-full w-12 h-12 absolute left-[5%] top-[35%] flex text-center justify-center items-center"
        onClick={slideLeft}
      >
        <BiChevronsLeft />
      </button>
      <button
        className="px-4 py-2 bg-white text-black font-extrabold rounded-full w-12 h-12  absolute left-[90%] top-[35%]  flex text-center justify-center items-center"
        onClick={slideRight}
      >
        <BiChevronsRight />
      </button>
    </div>
    // </div>
  );
};

export default Carousel;
