
import React from "react";

export default function ErrorComponent({ error}) {
 
  return (
    <div className="mt-4 error-container flex justify-center text-center h-[60vh]">
      {" "}
      <h2 className="text-red-500">Sorry, Something went wrong!</h2>
    </div>
  );
}
