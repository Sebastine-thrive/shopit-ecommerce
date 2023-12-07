"use client";
import React, { useState, useRef, useEffect } from "react";
import Product from "./../components/Product";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";

const Carousel = ({ products, bgColor }) => {
  const [position, setPosition] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Calculate the number of items to display based on container width
    const containerWidth = containerRef.current.offsetWidth;
    const itemWidth = 270; // Adjust this based on your item width
    const newItemsPerPage = Math.floor(containerWidth / itemWidth);
    setItemsPerPage(newItemsPerPage);
  }, [containerRef]);

  const slideLeft = () => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

  const slideRight = () => {
    if (position < products.length - itemsPerPage) {
      setPosition(position + 1);
    }
  };

  const isLeftDisabled = position === 0;
  const isRightDisabled = position >= products.length - itemsPerPage;

  return (
    <div
      ref={containerRef}
      className="w-full overflow-x-auto md:overflow-hidden relative py-4 px-2"
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
      <button
        className={`hidden md:flex px-4 py-2 bg-red-500 text-white font-extrabold rounded-full w-12 h-12 absolute left-[2%] top-[35%] text-center justify-center items-center ${
          isLeftDisabled ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={slideLeft}
        disabled={isLeftDisabled}
      >
        <BiChevronsLeft />
      </button>
      <button
        className={`hidden md:flex px-4 py-2 bg-red-500 text-white font-extrabold rounded-full w-12 h-12 absolute right-[5%] top-[35%] text-center justify-center items-center ${
          isRightDisabled ? "cursor-not-allowed opacity-50" : ""
        }`}
        onClick={slideRight}
        disabled={isRightDisabled}
      >
        <BiChevronsRight />
      </button>
    </div>
  );
};

export default Carousel;
