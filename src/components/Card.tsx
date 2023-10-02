import Image from "next/image";
import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Card = ({
  headerTitle,
  image,
  contenteText,
}: {
  headerTitle: string;
  image: any;
  contenteText: string;
}) => {
  return (
    <div className="max-w-[380px] mb-5 mx-5 w-full bg-deepBg p-4 rounded-lg flex items-center flex-col">
      <h1 className="text-[24px] leading-8 text-center p-2 text-white font-Nunito font-[700]">
        {headerTitle}
      </h1>
      <div className="relative my-3 w-[120px] h-[120px]">
        <Image src={image} alt="img" fill />
      </div>
      <div className="my-2">
        <p className="text-white font-Inter font-[400] text-center">
          {contenteText}
        </p>
      </div>
      <button className="flex text-lg uppercase items-center rounded-xl text-white my-10 border-[1px] px-10 py-3">
        <span className="p-1 mr-3 rounded-full bg-white text-lg font-Inter font-[500]">
          <BiChevronRight className="text-2xl text-blue-600" />
        </span>
        Read more
      </button>
    </div>
  );
};

export default Card;
