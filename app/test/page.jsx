"use client";
import React from "react";
import collect from "collect.js";

const fakedata = collect([
  { name: "iPhone 6", brand: "Apple", type: "phone" },
  { name: "iPhone 5", brand: "Apple", type: "phone" },
  { name: "Apple Watch", brand: "Apple", type: "watch" },
  { name: "Galaxy S6", brand: "Samsung", type: "phone" },
  { name: "Galaxy Gear", brand: "Samsung", type: "watch" },
]);

const page = () => {
  const unique = fakedata.unique("brand");
  console.log(unique.toArray());
  return <div>page</div>;
};

export default page;
