"use client";

import React from "react";

const Error = () => {
  return (
    <div className="error-container max-h-full h-full text-lg flex flex-col items-center align-center text-center ">
      {" "}
      <h2 className="text-red-500">Sorry, Something went wrong!</h2>
      <p className="text-md text-red-500">Please, start with checking your internet connection</p>
    </div>
  );
};

export default Error;
