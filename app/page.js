import React from "react";
import Info from "./components/Info";
import Comparer from "./components/Comparer";

const page = () => {
  return (
    <div className="min-w-full  flex flex-col items-center lg:mt-32 pb-8">
      <Info />
      <Comparer></Comparer>
    </div>
  );
};

export default page;
