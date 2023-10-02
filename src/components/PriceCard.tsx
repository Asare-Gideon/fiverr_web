import Image from "next/image";
import React from "react";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";

const PriceCard = ({
  image,
  title,
  price,
  buttonText,
  activeButton,
}: {
  image: any;
  title: string;
  price: string;
  activeButton?: boolean;
  buttonText?: string;
}) => {
  return (
    <div className="max-w-[380px] mb-6  md:mb-0 w-full p-4 bg-[#0E213E] flex flex-col items-center">
      <Image className="mb-4" src={image} alt="img" width={70} height={70} />
      <h1 className="text-white font-[700] font-Nunito text-[20px] text-center">
        {title}
      </h1>
      <h1 className="text-white font-[700] relative font-Nunito text-[38px] text-center">
        <span className="text-[25px] absolute -left-4 top-1">$</span>
        {price}
      </h1>

      <div className="mt-8">
        <div className="flex items-center text-white font-Nunito font-[600]">
          <AiOutlineClose className="text-red-700 mr-3" />
          <span> Demo file</span>
        </div>
        <div className="flex  my-3 items-center text-white font-Nunito font-[600]">
          <AiOutlineCheck className="text-green-700 mr-3" />
          <span>Update</span>
        </div>
        <div className="flex  my-3 items-center text-white font-Nunito font-[600]">
          <AiOutlineCheck className="text-green-700 mr-3" />
          <span>Commercial use</span>
        </div>
        <div className="flex items-center text-white font-Nunito font-[600]">
          <AiOutlineClose className="text-red-700 mr-3" />
          <span> Support</span>
        </div>
        <div className="flex  my-3 items-center text-white font-Nunito font-[600]">
          <AiOutlineCheck className="text-green-700 mr-3" />
          <span>2 database</span>
        </div>

        <button
          className={`text-white uppercase my-5 ${
            activeButton
              ? "bg-blue-700 border-blue-700 hover:bg-blue-900 hover:border-blue-900"
              : " border-white hover:border-blue-700"
          } -ml-2 border-[2px]  rounded-2xl px-8 py-3`}
        >
          {buttonText ? buttonText : "Get Started"}
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
