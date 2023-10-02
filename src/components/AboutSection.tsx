import Image from "next/image";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const AboutSection = () => {
  return (
    <div className="w-full px-3 py-8 md:p-8 lg:px-0 min-h-[80vh] bg-lightBg max-w-[1600px]">
      <div className="w-full flex-col md:flex-row flex items-center h-full">
        <div className="flex flex-[0.4] p-5">
          <div className="relative md:h-[30rem] h-[20rem] sm:h-[26rem] w-[20rem] sm:w-[25rem]  md:w-full">
            <Image src="/about.png" alt="img" fill />
          </div>
        </div>
        <div className="flex flex-1 pr-8 w-full sm:flex-[0.6] ml-10 sm:pl-5 flex-col">
          <h2 className="text-[2rem] text-blue-700 font-Inter font-[700] ">
            About us
          </h2>
          <h3 className="text-white font-[700] text-[30px] sm:text-[44px] font-Nunito">
            Elevating Financial Potential
          </h3>
          <p className="font-[400] font-Nunito text-white text-[17px] my-3">
            At Singularity Core, we are dedicated to elevating your financial
            potential through innovation and expertise. With a relentless
            commitment to transparency and a customer-focused approach,
            we&apos;ve designed a platform that empowers you to seize control of
            your financial future. Our automated investment solutions, driven by
            institutional-grade strategies, ensure your investments work smarter
            for you. Our values are simple: your success is our success, and
            your financial dreams are our mission. Explore our platform and
            experience a world where every financial goal is within reach.
          </p>
          <div className="flex items-center my-3">
            <BsFillCheckCircleFill className="text-blue-700 text-2xl" />
            <h2 className="text-white ml-3 font-Nunito font-[900] text-[18px] sm:text-[24px]">
              Cutting-Edge Automation
            </h2>
          </div>

          <p className="font-[400] font-Nunito text-white text-[17px] my-3">
            Our automated investment strategies harness the power of
            institutional-grade techniques, enabling you to optimize your
            portfolio with precision and efficiency.
          </p>
          <div className="flex items-center my-3">
            <BsFillCheckCircleFill className="text-blue-700 text-2xl" />
            <h2 className="text-white ml-3 font-Nunito font-[900] text-[18px] sm:text-[24px]">
              Customer-Focused Approach:
            </h2>
          </div>

          <p className="font-[400] font-Nunito text-white text-[17px] my-3">
            We put you at the forefront, offering personalized guidance,
            transparent insights, and continuous support to ensure your journey
            towards financial success is not only profitable but also
            empowering.
          </p>
          <button className="text-lg text-white bg-gradient-to-tr from-blue-700 to-blue-300 mt-3 group font-Inter flex items-center uppercase py-3 px-8 w-[15rem]  rounded-2xl">
            Learn More
            <span className="border-[2px] border-white transition-all duration-500 group-hover:translate-x-2 p-[2px] rounded-full border-dotted ml-3">
              {" "}
              <AiOutlinePlus className="text-xl" />{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
