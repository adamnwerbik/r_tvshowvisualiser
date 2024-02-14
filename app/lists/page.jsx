import React from "react";
import TVShowCard from "../components/TVShowCard";

const page = () => {
  return (
    <div className="min-w-full  flex flex-col items-center ">
      <h1>My Top 5 TV shows of all time</h1>
      <TVShowCard></TVShowCard>
      <h1>My most 5 most dissapointing ones ;(</h1>
    </div>
  );
};

export default page;
