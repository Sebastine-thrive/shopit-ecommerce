"use client";

import React from "react";

const Error = () => {
  return (
    <div className="error-container max-h-[100vh] h-[calc(100vh-40px)] text-lg flex items-center justify-center  text-center ">
      {" "}
      <div className=" flex flex-col">
        <h2 className="text-red-500">Sorry, Something went wrong!</h2>
        <p className="text-md text-red-500">
          Please, start with checking your internet connection
        </p>
      </div>
    </div>
  );
};

export default Error;
