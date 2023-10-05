"use client";
import Image from "next/image";
import React, { useState } from "react";

const InvestSection = () => {
  const [years, setYears] = useState([
    {
      id: "1",
      numYears: "1 Years",
      active: true,
    },
    {
      id: "2",
      numYears: "2 Years",
    },
    {
      id: "3",
      numYears: "3 Years",
    },
    {
      id: "4",
      numYears: "4 Years",
    },
  ]);

  return (
    <div className="w-full min-h-[80vh] bg-lightBg max-w-[1600px] flex items-center justify-center">
      <div className="w-[1404px] elevateDiv bg-[#18264D] p-3">
        <h1 className="text-white mt-6 font-[700] font-Nunito text-[40px] text-center ">
          What if you invested in......
        </h1>
        <div className="flex w-full justify-center">
          <Image src={"/invest.png"} alt="img" width={70} height={70} />
        </div>
        <div className="w-full flex justify-center my-4 mb-5">
          {years.map((yr) => (
            <button
              className={` px-5 md:px-8 py-2 hover:bg-blue-700 hover:text-white ${
                yr.active
                  ? "bg-blue-700 text-white"
                  : "border-[1.5px] border-blue-700 text-blue-700"
              } rounded-lg mx-2 md:mx-4 font-Nunito text-sm md:text-xl`}
              key={yr.id}
            >
              {yr.numYears}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row w-full items-center sm:w-[45%] mt-8 justify-between">
            <div>
              <h4 className="text-white font-[600] text-[15px] font-Nunito">
                Initial Investment
              </h4>
              <input className="py-2 px-3" type="text" placeholder="1000" />
            </div>
            <div className="md:ml-2 mt-[6px]">
              <select
                className="bg-white py-2 mt-4 px-10 border-none outline-none text-lg w-[15rem] focus:ring-0"
                name="currency"
                id=""
              >
                <option className="" value="">
                  USD ($)
                </option>
              </select>
            </div>
          </div>
          <div className="flex sm:w-[45%]  w-full items-center  mt-8 justify-center  sm:justify-between">
            <div>
              <h4 className="text-white font-[600] text-[15px] font-Nunito">
                Yearly Contribution
              </h4>
              <input className="py-2 px-3" type="text" placeholder="1000" />
            </div>
          </div>

          <div className=" w-[45%] mt-8">
            <h2 className="text-white font-Nunito font-[700] text-[24px]">
              You Would have
            </h2>
            <h2 className="text-white font-Nunito font-[700] text-[35px]">
              $256
            </h2>
            <h2 className="text-[#08CD9E] font-Nunito font-[700] text-[24px]">
              219.85%
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestSection;
