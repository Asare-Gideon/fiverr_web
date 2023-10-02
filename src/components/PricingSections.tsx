import React from "react";
import PriceCard from "./PriceCard";
import InfoCard from "./InfoCard";

const PricingSections = () => {
  return (
    <div className="w-full pb-[5rem] px-3 bg-deepBg max-w-[1600px]">
      <div className="w-full">
        <h2 className="text-white font-Nunito font-[800] text-center text-[28px]">
          OUR PRICING
        </h2>
        <h2 className="text-white font-Nunito text-center font-[800] text-[35px] sm:text-[44px] ">
          Select Your Choice
        </h2>
        <div className="w-full flex-wrap md:flex-nowrap flex justify-center mt-10">
          <PriceCard
            image={"/p1.png"}
            title="Trial Version"
            buttonText="Try for free"
            price="0.00"
          />
          <PriceCard
            image={"/p2.png"}
            title="Trial Version"
            price="0.00"
            activeButton
          />
          <PriceCard image={"/p3.png"} title="Trial Version" price="0.00" />
        </div>

        <div className="mt-[6rem] flex-wrap md:flex-nowrap flex justify-center">
          <InfoCard
            image={"/info1.png"}
            title="Startup Funding"
            textContent="Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses."
          />
          <InfoCard
            image={"/info2.png"}
            title="Startup Funding"
            textContent="Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses."
          />
          <InfoCard
            image={"/info3.png"}
            title="Startup Funding"
            textContent="Providing insight-driven transformation to investment banks, wealth and asset managers, exchanges, clearing houses."
          />
        </div>
      </div>
    </div>
  );
};

export default PricingSections;
