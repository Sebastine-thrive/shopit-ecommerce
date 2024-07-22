"use client";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Generate a random rating between 3.5 and 5
    const randomRating = Math.random() * (5 - 3.5) + 3.5;
    setRating(randomRating);
  }, []); // Run this effect only once after the initial render

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((index) => (
        <FaStar
          key={index}
          className={`text-2xl ${
            index <= Math.floor(rating) ? "text-red-500" : "text-black"
          }`}
        />
      ))}
      <p className="ml-2"> Rating: {rating.toFixed(1)}</p>
    </div>
  );
};

export default StarRating;
