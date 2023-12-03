"use client";
import React from "react";
// import { useStateContext } from "@/app/context/StateContext";
import { BiChevronsLeft } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import "./../../../globals.css";
import { useStateContext } from "../../context/StateContext";

const CartQuantity = () => {
  const { totalQuantity, setShowCart } = useStateContext();
  return (
    <div className="cart-quantity-heading flex justify-between h-auto items-center">
      <div className="flex ">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <BiChevronsLeft />
        </button>
        <p>
          <span className="heading"> Your Cart</span>
          <span className="cart-num-items">
            {" "}
            ({totalQuantity} {totalQuantity > 1 ? "items" : "item"})
          </span>
        </p>
      </div>
      <div className="close-cart_container">
        {" "}
        <button
          type="button"
          className="close-cart"
          onClick={() => setShowCart(false)}
        >
          <TiDeleteOutline />
        </button>{" "}
      </div>
    </div>
  );
};

export default CartQuantity;
