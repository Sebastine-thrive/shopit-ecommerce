import React from "react";
import FaqItem from "./FaqItem";

const Faq = () => {
  const faqData = [
    {
      question: "What is the mission of this platform?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, pariatur. Esse dicta dolorem, et fugiat cum voluptatibus magnam dolorum optio nihil sapiente facere cumque sint.",
    },
  ];

  return (
    <div className="faq mt-4">
      <h2 className="text-2xl font-bold mb-4 flex text-center items-center">FAQs</h2>
      <div className="accordion">
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
