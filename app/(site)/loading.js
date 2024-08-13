import React from "react";
import LoadingComponent from "./components/LoadingComponent";
// import LoadingComponent from "../components/Loading";

const Loading = () => {
  return (
    <div className="mt-16 max-h-[100vh] h-[100vh] flex justify-center text-center">
      <LoadingComponent />
    </div>
  );
};

export default Loading;
