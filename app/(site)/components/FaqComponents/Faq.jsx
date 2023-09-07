import React from "react";
import FaqItem from "./FaqItem";

const Faq = () => {
  const faqData = [
    {
      question: "What is the mission of Shopit?",
      answer: "To provide quality goods for shopping at affordable prices",
    },
    {
      question: "Can I return the items I bought from ShopIt?",
      answer:
        "Yes, you can return items you bought for free and get refunded as soon as possible! We have a refund policy that grants you 7 days to return items bought from the official store.",
    },
    {
      question: "Can I get free delivery on all my orders?",
      answer:
        "Customers can enjoy free delivery on some products not all. Free delivery does not apply to large items like refrigerators, TVs,  and others.",
    },
  ];

  return (
    <div className="faq oveflow-y-scroll">
      <h2 className="text-2xl font-bold mb-4 flex text-center items-center ">FAQs</h2>
      <div className="accordion">
        {faqData.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
     
    </div>
  );
};

export default Faq;
