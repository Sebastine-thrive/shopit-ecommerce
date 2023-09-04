"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
// import { useStateContext } from "@/app/context/StateContext";
import "./../../../globals.css";
import { useStateContext } from "../../context/StateContext";

const ContinueShopping = () => {
  const { cartItems, setShowCart } = useStateContext();

  return (
    <>
      {cartItems.length < 1 ? (
        <div className="empty-cart">
          <div className=" flex justify-between items-center text-center">
            {/* <AiOutlineShopping /> */}

            <h3 >Your Shopping bag is empty</h3>
          </div>
          <Link href="/">
            <button
              type="button"
              onClick={() => setShowCart(false)}
              className="btn"
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default ContinueShopping;
