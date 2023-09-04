/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { urlForImage } from "@/sanity/lib/image";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import "./../../../globals.css";
import { useStateContext } from "../../context/StateContext";

const CartProducts = () => {
  const { cartItems, onRemove, toggleCartItemQuantity } = useStateContext();

  return (
    <>
      <div className="product-container w-[95%]">
        {cartItems?.length >= 1
          ? cartItems.map((item) => (
              <div className="product" key={item?._id}>
                <img
                  src={urlForImage(item?.image[0])}
                  alt="cart item product"
                  width="180"
                  height="150"
                  className="cart-product-image bg-[#ebebeb]"
                />
                <div className="item-desc">
                  {" "}
                  <div className="flex items-center top w-[70%]">
                    <h5 className="text-[24px] capitalize"> {item?.name}</h5>
                    <h4 className="text-[20px]">
                      {" "}
                      {item?.price.toLocaleString("en-NG", {
                        style: "currency",
                        currency: "NGN",
                      })}
                    </h4>
                  </div>
                  <div className="flex bottom w-[70%] ">
                    <div>
                      <div className=" quantity-desc marker:border-2 border-gray-500 p-[6px] h-[2rem] w-[6rem] max-w-[8rem] flex  items-center ">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuantity(item._id, "decrease")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num font-medium my-2 ">
                          {" "}
                          {item?.quantity}
                        </span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuantity(item?._id, "increase")
                          }
                        >
                          {" "}
                          <AiOutlinePlus />
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default CartProducts;
