import React from "react";
import LoadingComponent from "./components/LoadingComponent";
// import LoadingComponent from "../components/Loading";

const Loading = () => {
  return (
    <div className="max-h-[100vh] h-[100vh] flex items-center justify-center">
      <LoadingComponent />
    </div>
  );
};

export default Loading;
