import Image from "next/image";
import React from "react";
import { AiFillFolder } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";

const InfoCard = ({
  image,
  title,
  textContent,
}: {
  image: any;
  title: string;
  textContent: string;
}) => {
  return (
    <div className="max-w-[360px] mb-8 md:mb-0 mx-4 w-full rounded-md overflow-hidden bg-[#061326]">
      <div className="w-full h-[14rem] z-10 relative">
        <Image src={image} alt="img" fill />
        <div className="w-[90px] left-3  -bottom-6 absolute z-40 h-[90px] flex justify-center items-center rounded-md bg-white">
          <h2 className="text-xl text-center text-black font-Nunito">
            18 Jul 2020
          </h2>
        </div>
      </div>
      <div className="px-2">
        <div className="flex p-3 items-center text-[17px] mt-8 text-white font-Nunito font-[600]">
          <AiFillFolder className="text-2xl text-blue-700 mr-3" />
          <span>Startup, Funding</span>
        </div>

        <h3 className="text-white pl-3 my-3 font-Nunito font-[700] text-[30px]">
          Startup Funding
        </h3>
        <p className="text-white p-3 my-3 font-Nunito font-[400] text-[16px]">
          Providing insight-driven transformation to investment banks, wealth
          and asset managers, exchanges, clearing houses.
        </p>
        <button className="flex text-lg ml-3 uppercase items-center rounded-xl text-white my-10 bg-blue-700 px-10 py-3">
          <span className="p-1 mr-3 rounded-full bg-white text-lg font-Inter font-[500]">
            <BiChevronRight className="text-2xl text-blue-600" />
          </span>
          Read more
        </button>
      </div>
    </div>
  );
};

export default InfoCard;
