"use client"
import React from "react";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "../context/StateContext";

const QuantityComponent = () => {
   const { qty, incQty, decQty } = useStateContext();

  return (
    <>
      <div className="quantity-desc flex items-center">
        <span className="minus" onClick={decQty}>
          {" "}
          <AiOutlineMinus />{" "}
        </span>
        <span className="num font-medium my-2"> {qty} </span>
        <span className="plus" onClick={incQty}>
          {" "}
          <AiOutlinePlus />
        </span>
      </div>
    </>
  );
};

export default QuantityComponent;
