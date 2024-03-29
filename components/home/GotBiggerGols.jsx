import React from "react";

function GotBiggerGols() {
  return (
    <div>
      <div className="container mx-auto px-5 py-6">
        <div className=" bigger-shadow px-5 sm:pb-8 rounded-[10px]">
          {" "}
          <h1 className="  sm:mb-10 mb-8 pt-6   ff_dm_sans text-4xl md:text-7xl lg:text-9xl text-center font-bold">
            Got Bigger Goals?{" "}
          </h1>
          <p className="text-2md text-[#696871] max-w-[809px] text-center mx-auto sm:leading-[300%]">
            {" "}
            We provide custom solutions for larger businesses and enterprises.
            please fill out one of our forms or shoot us an email and we will
            get back to you as fast as possible. Please attach a brief
            description of what you’re looking to accomplish and envisioning.{" "}
          </p>
          <div className="text-center md:pt-6">
            {" "}
            <a href="#contact">
              <button className=" rounded-[10px]  sm:w-[337px] w-[240px] mx-auto   py-[10px] sm:py-[21px] text-2md font-bold bg-[#2FA4FF] text-white hover:shadow-lg my-8 duration-300 transition-all ff_dm_sans">
                {" "}
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GotBiggerGols;
