"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";

const Success = () => {
  const { setCartItems, setTotalQuantity, setTotalPrice } = useStateContext();

  useEffect(() => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p>
          {" "}
          Thanks for patronising us. We have received your order and will reach
          you soon
        </p>
        <p className="description">
          {" "}
          Have any Questions, email
          <a href="mailto:order@example.com" className="email">
            order@example.com
          </a>
        </p>

        <Link href="/">
          <button className="btn  w-[300px]"> Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
