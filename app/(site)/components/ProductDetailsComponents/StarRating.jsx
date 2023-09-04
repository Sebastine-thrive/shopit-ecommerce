"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((index) => (
        <FaStar
          key={index}
          className={`text-2xl cursor-pointer ${
            index <= rating ? "text-red-500" : "text-black"
          }`}
          onClick={() => handleStarClick(index)}
        />
      ))}
      <p className="ml-2">You rated: {rating} stars</p>
    </div>
  );
};

export default StarRating;
