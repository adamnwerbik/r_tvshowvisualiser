import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="min-w-full  flex flex-col items-center ">
      <h2 className="text-balance text-center italic">
        This product uses the TMDB API but is not endorsed or certified by TMDB.
      </h2>
      <br></br>
      <h2 className="font-bold text-2xl">Libraries Used</h2>
      <div className="text-center my-3">
        <Image src={"/chartJS.svg"} width={200} height={200} />
        <h2>react-chartjs-2</h2>
      </div>
      <br></br>
      <div className="text-center my-3">
        <Image src={"/next.svg"} width={200} height={200} />
        <h2>Next.js</h2>
      </div>
      <br></br>
      <div className="text-center my-3">
        <Image src={"/twlogo.svg"} width={200} height={200} />
        <h2>tailwindCSS</h2>
      </div>
      <h2 className="font-bold text-2xl mt-5 text-balance text-center ">
        Want to contribute or give feedback?
      </h2>
      <p className="pb-20 text-center">
        This project is open source and the code is available{" "}
        <a href="https://github.com/adamnwerbik/r_tvshowvisualiser">
          in the GitHub repository
        </a>
        . Any feedback or feature requests are appreciated.
      </p>
    </div>
  );
};

export default page;
