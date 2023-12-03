"use client";

import React from "react";

const Error = () => {
  return (
    <div className="text-lg error-container flex flex-col justify-center align-center text-center max-h-[100vh]">
      {" "}
      <h2 className="text-red-500">Sorry, Something went wrong!</h2>
      <p className="text-md text-red-500">Please, start with checking your internet connection</p>
    </div>
  );
};

export default Error;
