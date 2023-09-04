"use client";
import React from "react";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { useState } from "react";
import "./../../../globals.css";
import { useStateContext } from "../../context/StateContext";
import QuantityComponent from "../QuantityComponent";
// import QuantityComponent from "../QuantityComponent";

const ProductQuantity = () => {
 
  return (
    <>
      <div className="quantity">
        <h3 className="font-medium"> Quantity:</h3>
       <QuantityComponent />
      </div>
    </>
  );
};

export default ProductQuantity;
