"use client";
import React from "react";
// import { useStateContext } from "@/app/context/StateContext";
import { BiChevronsLeft } from "react-icons/bi";
import "./../../../globals.css";
import { useStateContext } from "../../context/StateContext";

const CartQuantity = () => {
  const { totalQuantity, setShowCart } = useStateContext();
  return (
    <>
      <button
        type="button"
        className="cart-heading"
        onClick={() => setShowCart(false)}
      >
        <BiChevronsLeft />
        <span className="heading"> Your Cart</span>
        <span className="cart-num-items"> ({totalQuantity} {totalQuantity > 1 ? "items" : "item"})</span>
      </button>
    </>
  );
};

export default CartQuantity;
