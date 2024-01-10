"use client"
import React, {useState} from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="font-semibold xxs:text-[10px] xs:text-[12px] sm:text-sm md:text-lg ml-[-1rem] ">{question}</div>
        <div className="text-xl faq-icons">
          {isOpen ? (
            <IoIosArrowUp size={20} />
          ) : (

            <IoIosArrowDown size={20} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}
export default FaqItem;