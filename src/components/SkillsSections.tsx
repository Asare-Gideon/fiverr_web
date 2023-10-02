import Image from "next/image";
import React from "react";

const SkillsSections = () => {
  return (
    <div className="w-full min-h-[80vh] bg-deepBg  pt-10 max-w-[1600px]">
      <div className="w-full flex-col md:flex-row flex items-center h-full">
        <div className="flex  flex-1 sm:flex-[0.55] pl-10 sm:ml-10  flex-col">
          <h2 className="text-[2rem] mb-2 text-blue-700 font-Inter font-[700] ">
            Our Skills
          </h2>
          <h3 className="text-white font-[700] text-[28px] font-Nunito">
            We are masters in Quantitative <br />
            Finance and AI Solutions
          </h3>
          <p className="font-[600] my-8 w-[60%] font-Nunito text-white text-[17px] ">
            Leveraging cutting-edge technology and personalized strategies to
            drive success
          </p>
          <div>
            <div>
              <div className="flex justify-between w-[90%]  sm:w-[70%]">
                <h3 className="text-white font-Nunito text-[18px] font-[600]">
                  Personalized Investment Solutions
                </h3>
                <h3 className="text-white font-Nunito text-[18px] font-[600]">
                  90%
                </h3>
              </div>
              <div className=" w-[90%] sm:w-[70%] bg-white mt-2 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div className="bg-blue-600 w-[90%] h-1.5 rounded-full dark:bg-blue-500"></div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div>
              <div className="flex justify-between w-[90%] sm:w-[70%]">
                <h3 className="text-white font-Nunito text-[18px] font-[600]">
                  Cutting-Edge Technology Integration
                </h3>
                <h3 className="text-white font-Nunito text-[18px] font-[600]">
                  78%
                </h3>
              </div>
              <div className="w-[90%] sm:w-[70%] bg-white mt-2 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div className="bg-blue-600 w-[78%] h-1.5 rounded-full dark:bg-blue-500"></div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div>
              <div className="flex justify-between w-[90%] sm:w-[70%]">
                <h3 className="text-white font-Nunito text-[18px] font-[600]">
                  Educational Empowerment
                </h3>
                <h3 className="text-white font-Nunito text-[18px] font-[600]">
                  89%
                </h3>
              </div>
              <div className="w-[90%] sm:w-[70%] bg-white mt-2 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div className="bg-blue-600 w-[89%] h-1.5 rounded-full dark:bg-blue-500"></div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div>
              <div className="flex justify-between w-[90%] sm:w-[70%]">
                <h3 className="text-white font-Nunito text-[18px] font-[600]">
                  Quantiative Investment
                </h3>
                <h3 className="text-white font-Nunito text-[18px] font-[600]">
                  82%
                </h3>
              </div>
              <div className="w-[90%] sm:w-[70%] bg-white mt-2 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div className="bg-blue-600 w-[82%] h-1.5 rounded-full dark:bg-blue-500"></div>
              </div>
            </div>
          </div>

          <div className="mt-3">
            <div>
              <div className="flex justify-between w-[90%] sm:w-[70%]">
                <h3 className="text-white font-Nunito text-[18px] font-[600]">
                  AI Solutions
                </h3>
                <h3 className="text-white font-Nunito text-[18px] font-[600]">
                  95%
                </h3>
              </div>
              <div className="w-[90%] sm:w-[70%] bg-white mt-2 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div className="bg-blue-600 w-[95%] h-1.5 rounded-full dark:bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-[0.55] p-5">
          <div className="relative h-[25rem] md:h-[36rem] w-[26rem] md:w-full">
            <Image className="-ml-12" src="/skill.png" alt="img" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSections;
