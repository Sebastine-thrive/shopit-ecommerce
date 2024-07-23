"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setIsRotated(true);
  };

  return (
    <div className="w-full">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="font-bold xxs:text-[10px] xs:text-[12px] sm:text-sm md:text-lg ml-[-1rem] ">
          {question}
        </div>
        <div className="text-xl faq-icons">
          {isOpen ? (
            <div className={`faq-question-icon ${isRotated ? "rotated" : ""}`}>
              {" "}
              <IoIosArrowUp size={20} />
            </div>
          ) : (
            <div className={`faq-question-icon ${isRotated ? "rotated" : ""}`}>
              {" "}
              <IoIosArrowDown size={20} />
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-100 rounded-md">
          <p className="text-black font-semibold">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default FaqItem;
