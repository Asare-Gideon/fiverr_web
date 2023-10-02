"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event: any) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full transition-all md:px-0 duration-500 shadow-xl px-2 sm:shadow-none flex justify-center bg-deepBg py-4 mt-3 items-center ${
        scrollTop > 80 &&
        "fixed right-0  sm:px-12 -top-3 left-0 transition-all duration-500  z-[99] shadow-lg  "
      } `}
    >
      <div className=" flex justify-between w-full items-center max-w-[1600px]">
        <div className="lg:w-[350px] relative w-[200px] h-[45px] lg:h-[70px]">
          <Image src="/logo.png" fill alt="logo" />
        </div>
        <div className="flex items-center">
          <button className="bg-blue-600 hidden sm:flex text-white mx-3 outline-none font-Inter font-[600] px-[3.5rem] border-[2px] hover:bg-blue-800 hover:border-blue-800 border-blue-600 text-sm lg:text-lg py-2 rounded-md">
            Login
          </button>
          <button className=" outline-none border-[2px] mx-3 border-white text-white font-Inter hover:bg-blue-600 hover:border-blue-600 font-[600] px-[3rem] lg:text-lg py-[7px] text-sm rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
