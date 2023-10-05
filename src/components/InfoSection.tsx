"use client";
import Image from "next/image";
import React, { useState } from "react";

const InfoSection = () => {
  const [list, setList] = useState([
    {
      id: "1",
      name: "Register",
      active: true,
    },
    {
      id: "2",
      name: "Automate & Prosper",
      active: false,
    },
    {
      id: "3",
      name: "Educate & Strategize",
      active: false,
    },
  ]);

  return (
    <div className="w-full px-2 pb-[5rem] bg-deepBg max-w-[1600px]">
      <div className="w-full flex-col flex items-center">
        <h1 className="text-white font-Nunito px-2 mt-5 font-[700] leading-10 text-[30px] md:text-[50px] text-center">
          Leading the Investment Revolution
        </h1>

        <p className="text-white font-Nunito font-[400] text-[18px] text-center mt-6 w-[90%] sm:w-[70%]">
          Are you aware that we are at the forefront of revolutionizing the
          investment industry? At Singularity Core, we&apos;ve redefined the
          landscape with our unwavering commitment to excellence and
          groundbreaking innovation. With extensive experience in investments,
          we&apos;ve consistently shattered expectations by surpassing market
          averages. Our revolutionary approach, driven
        </p>
        <div className="flex  relative items-center  mt-[3rem]">
          {list.map((li) => (
            <h3
              key={li.id}
              className={`md:px-10 px-5 py-2 hover:bg-blue-700 cursor-pointer font-Nunito flex justify-center sm:mx-3 md:mx-8 font-[400] text-center text-sm md:text-[18px] rounded-md  text-white ${
                li.active ? "bg-blue-700" : ""
              }`}
            >
              {li.name}

              {li.active && (
                <span className="flex items-center mt-9  flex-col absolute">
                  <span className="w-[2px] -mt-2 h-6 bg-blue-700"></span>
                  <span className="w-4 h-4 rounded-full border-[1px] border-blue-700"></span>
                </span>
              )}
            </h3>
          ))}
        </div>

        <div className="bg-[#071324] border-t-[2px] border-blue-700 p-4 mt-[4rem] w-[90%] md:w-[70%]">
          <div className="w-full flex flex-col md:flex-row items-center h-full min-h-[25rem]">
            <div className="flex-[0.5] pl-3">
              <h3 className="text-white font-[700] text-[32px] font-Nunito">
                Data Visualization Research technique & Solution
              </h3>
              <p className="text-white mt-5 font-[400] my-3 text-[18px] font-Nunito">
                Embark on a journey of financial excellence. Discover the full
                potential of your wealth by enrolling in our exclusive platform,
                meticulously crafted for high net worth individuals in pursuit
                of market-beating returns. Register today to embark on a path
                towards investment success like never before.
              </p>

              <button className="bg-blue-700 mt-5 px-8 text-white font-Nunito border-none outline-none rounded-xl py-2 ">
                Read More
              </button>
            </div>
            <div className="flex-[0.5] flex justify-end mt-4 md:mt-0 pr-6">
              <div className="relative w-[18rem] md:w-[80%] h-[15rem]">
                <Image src={"/img1.png"} alt="img" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
