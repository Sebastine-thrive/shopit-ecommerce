import Link from "next/link";
import React from "react";
import { BsBagCheckFill } from "react-icons/bs";


const Success = () => {

  return (
    <div className="success-wrapper flex justify-center items-center">
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
          Have any Questions, email us at
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
