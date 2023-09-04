"use client"
import React, {useState} from 'react';


        
function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300">
      <div
        className="flex justify-between items-center p-4 cursor-pointer"
        onClick={toggleAccordion}
      >
        <div className="font-semibold text-lg">{question}</div>
        <div className="text-xl">{isOpen ? "▲" : "▼"}</div>
      </div>
      {isOpen && (
        <div className="p-4 bg-gray-100">
          <p className="text-gray-700">{answer}</p>
        </div>
      )}
    </div>
  );
}
export default FaqItem