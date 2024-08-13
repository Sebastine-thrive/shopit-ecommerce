"use client"
import React, { useRef } from "react";
import { useStateContext } from "../../context/StateContext";
import "./../../../globals.css";

const CartWrapper = ({ children }) => {
  const { showCart } = useStateContext();

  const cartRef = useRef();

  return <div className={
    showCart
      ? "fixed left-0 top-0 ease-in duration-2000 cart-wrapper p-4" : "left-[-150%] top-0  ease-in duration-2000 " } ref={cartRef}>{children}</div>;
};

export default CartWrapper;
