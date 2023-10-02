"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";

const Hero = () => {
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
    <div className="w-full min-h-[85vh] px-2 sm:px-6 2xl:px-0 bg-deepBg max-w-[1600px]">
      <div
        className={`w-full transition-all   duration-500 flex justify-between bg-deepBg py-4 mt-3 items-center ${
          scrollTop > 60 &&
          "fixed right-0 px-2 sm:px-12 -top-3 left-0  z-[99] shadow-lg  "
        } `}
      >
        <div className="lg:w-[350px] relative w-[210px] h-[45px] lg:h-[70px]">
          <Image src="/logo.png" fill alt="logo" />
        </div>
        <div className="flex items-center">
          <button className="bg-blue-600  text-white mx-3 outline-none font-Inter font-[600] px-[2rem] md:px-[3.5rem] border-[2px] hover:bg-blue-800 hover:border-blue-800 border-blue-600 text-sm lg:text-lg py-2 rounded-md">
            Login
          </button>
          <button className=" outline-none hidden sm:flex border-[2px] mx-3 border-white text-white font-Inter hover:bg-blue-600 hover:border-blue-600 font-[600] px-[2rem] md:px-[3rem] lg:text-lg py-[7px] text-sm rounded-md">
            Sign up
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:h-[70%]">
        <div className=" flex-[0.5] mt-[2.5rem] md:mt-0  h-[10rem]">
          <h2 className="text-white font-[800] font-Nunito text-[2rem] sm:text-[4rem]">
            Applying Data
          </h2>
          <h2 className="text-white font-[800] -mt-[10px] sm:-mt-[1rem] font-Nunito text-[2rem] sm:text-[4rem]">
            Science & Techniques
          </h2>
          <h3 className="sm:text-[2.5rem] text-[1.8rem] -mt-1 sm:-mt-3 font-Almarai text-white font-[500]">
            With modern Systems
          </h3>
          <button className="sm:text-lg text-sm text-white mt-3 group font-Inter flex items-center uppercase py-3 px-8 border-[1px] rounded-xl">
            Learn More
            <span className="border-[2px] border-white transition-all duration-500 group-hover:translate-x-2 p-[2px] rounded-full border-dotted ml-3">
              {" "}
              <BiChevronRight className="text-xl" />{" "}
            </span>
          </button>
        </div>
        <div className="flex-[0.5] h-full ">
          <div className=" w-[24rem] sm:w-[26rem] mt-[2rem] md:w-[35rem] lg:w-full relative h-[19rem] sm:h-[26rem] mb-[2rem] lg:mb-0 lg:h-[35rem] md:mt-[3.5rem]">
            <Image src="/hero.png" fill alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
