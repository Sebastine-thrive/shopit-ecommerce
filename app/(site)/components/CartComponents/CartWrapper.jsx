"use client"
import React, { useRef } from "react";
import "./../../../globals.css";

const CartWrapper = ({ children }) => {
  const cartRef = useRef();

  return <div className="cart-wrapper" ref={cartRef}>{children}</div>;
};

export default CartWrapper;
