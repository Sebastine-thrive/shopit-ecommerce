
import React from "react";

export default function ErrorComponent({ error}) {
 
  return (
    <div className="mt-4 error-component__container max-h-[100vh] h-[calc(100vh-40px)] text-lg flex items-center justify-center  text-center ">
      <h2 className="text-red-500">Sorry, Something went wrong!</h2>
    </div>
  );
}
