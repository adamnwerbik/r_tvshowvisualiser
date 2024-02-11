import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center fixed bottom-0 left-0 z-20 w-full p-3 bg-white border-t border-gray-200 shadow ">
      <div className="italic">
        made by{" "}
        <Link href={"https://github.com/adamnwerbik"}>💻 adamnwerbik 🔥</Link>{" "}
        with data from{"    "}
        <Link href="https://www.themoviedb.org/">TMDB</Link>
      </div>
    </footer>
  );
};

export default Footer;
