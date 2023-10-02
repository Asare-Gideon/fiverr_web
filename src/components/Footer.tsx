import React from "react";

const Footer = () => {
  return (
    <div className="w-full pb-[5rem]  p-5 bg-[#0E213E] py-[2rem] max-w-[1600px]">
      <div className="w-full flex  flex-col md:flex-row   flex-wrap md:flex-nowrap justify-center">
        <div className="flex-[0.3]">
          <h2 className="text-white  font-Nunito font-[800] text-[30px]">
            Anada
          </h2>
          <p className="text-white  font-Nunito font-[400] w-[80%] text-lg my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            tempore. Recusandae nostrum sint nisi a, provident corporis veniam.
            Quidem, aspernatur.
          </p>
        </div>
        <div className="flex-[0.3] md:ml-[3rem]">
          <h2 className="text-white  font-Nunito font-[800] text-[30px]">
            Services
          </h2>
          <div className="my-5">
            <h2 className="text-white my-3 cursor-pointer hover:text-blue-500 text-lg font-[700] font-Nunito ">
              Marketing & Sales
            </h2>
            <h2 className="text-white my-3 cursor-pointer hover:text-blue-500 text-lg font-[700] font-Nunito ">
              Manufacturing
            </h2>
            <h2 className="text-white my-3 cursor-pointer hover:text-blue-500 text-lg font-[700] font-Nunito ">
              Supply Chain
            </h2>
            <h2 className="text-white my-3 cursor-pointer hover:text-blue-500 text-lg font-[700] font-Nunito ">
              Data Visualization
            </h2>
            <h2 className="text-white my-3 cursor-pointer hover:text-blue-500 text-lg font-[700] font-Nunito ">
              Big Data
            </h2>
          </div>
        </div>
        <div className="flex-[0.2]">
          <h2 className="text-white  font-Nunito font-[800] text-[30px]">
            Contact Info
          </h2>
          <div className="my-5">
            <h2 className="text-white my-3 cursor-pointer hover:text-blue-500 text-lg font-[700] font-Nunito ">
              Possible offering at contempt <br />
              an Attachment exellence
            </h2>
            <h2 className="text-white my-3 cursor-pointer hover:text-blue-500 text-lg font-[700] font-Nunito ">
              Email support@validthem
            </h2>
            <h2 className="text-white my-3 cursor-pointer hover:text-blue-500 text-lg font-[700] font-Nunito ">
              Contact: +44-20-7328-449
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
