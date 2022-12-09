import React from "react";
import {
  BookIcon,
  FigmaIcon,
  FolderlIcon,
  RocketIcon,
  TerminalIcon,
} from "../helper/Icons";

function StepBuyStep() {
  return (
    <div>
      {" "}
      <div className="container mx-auto my-[50px] px-3 sm:my-[120px] lg:my-[170px]  ">
        <h1 className="md:mb-16 sm:mb-10 mb-8   ff_dm_sans text-4xl sm:text-7xl lg:text-10xl text-center">
          Our step by step process
        </h1>
        <div className="flex flex-wrap  justify-center ">
          <div className="step-card h-[405px]  rounded-[10px] bg-white relative shadow-[0px 4px 10px 3px rgba(0, 0, 0, 0.25)] lg:w-[354px] md:w-[300px] lg:px-[48px]  md:px-[40px] px-[30px] py-8 text-center  m-[30px] step-box-shadow">
            <div
              className="absolute w-[94px] h-[93px] rounded-[30px] bg-[#2FA4FF] top-[-24px] 
            left-[-30px]  flex justify-center items-center "
            >
              <BookIcon />{" "}
            </div>
            <h1 className="">
              <span className=" border-b border-black  lg:text-5xl text-3xl pb-3 px-3 ff_dm_sans ">
                {" "}
                Initial Brief
              </span>{" "}
            </h1>
            <p className="mt-10 text-[#555252] ff_Ibarra_Real_Nova">
              {" "}
              To start, we analyze your business’s current online presence and
              see where it’s lacking. This is mostly a critique of your current
              webpage design if you have one.{" "}
            </p>
          </div>{" "}
          <div className="step-card h-[405px]  rounded-[10px] bg-white relative shadow-[0px 4px 10px 3px rgba(0, 0, 0, 0.25)] lg:w-[354px] md:w-[300px] lg:px-[48px]  md:px-[40px] px-[30px] py-8 text-center  m-[30px] step-box-shadow">
            <div
              className="absolute w-[94px] h-[93px] rounded-[30px] bg-[#2FA4FF] top-[-24px] 
            left-[-30px]  flex justify-center items-center "
            >
              <FigmaIcon />{" "}
            </div>
            <h1 className="">
              <span className=" border-b border-black  ff_dm_sans lg:text-5xl text-3xl pb-3 px-3  ">
                {" "}
                The design{" "}
              </span>{" "}
            </h1>
            <p className="mt-10 text-[#555252] ff_Ibarra_Real_Nova">
              {" "}
              We design a website for your business, you can have input and we
              will update you on progress. Once the design is finished, we will
              send it over to you to review. We won’t start development until
              you’re absolutely satisfied with the design.
            </p>
          </div>{" "}
          <div className="step-card h-[405px]  rounded-[10px] bg-white relative shadow-[0px 4px 10px 3px rgba(0, 0, 0, 0.25)] lg:w-[354px] md:w-[300px] lg:px-[48px]  md:px-[40px] px-[30px] py-8 text-center  m-[30px] step-box-shadow">
            <div
              className="absolute w-[94px] h-[93px] rounded-[30px] bg-[#2FA4FF] top-[-24px] 
            left-[-30px]  flex justify-center items-center "
            >
              <TerminalIcon />{" "}
            </div>
            <h1 className="">
              <span className=" border-b border-black  ff_dm_sans lg:text-5xl text-3xl pb-3 px-3  ">
                {" "}
                Creation{" "}
              </span>{" "}
            </h1>
            <p className="mt-10 text-[#555252] ff_Ibarra_Real_Nova">
              {" "}
              Using modern languages like react js, javascript, and more, we
              create a stunning website for you based on the designs
            </p>
          </div>{" "}
          <div className="step-card h-[405px]  rounded-[10px] bg-white relative shadow-[0px 4px 10px 3px rgba(0, 0, 0, 0.25)] lg:w-[354px] md:w-[300px] lg:px-[48px]  md:px-[40px] px-[30px] py-8 text-center  m-[30px] step-box-shadow">
            <div
              className="absolute w-[94px] h-[93px] rounded-[30px] bg-[#2FA4FF] top-[-24px] 
            left-[-30px]  flex justify-center items-center "
            >
              <FolderlIcon />{" "}
            </div>
            <h1 className="">
              <span className=" border-b border-black  ff_dm_sans lg:text-5xl text-3xl pb-3 px-3  ">
                {" "}
                Analyze{" "}
              </span>{" "}
            </h1>
            <p className="mt-10 text-[#555252] ff_Ibarra_Real_Nova">
              {" "}
              Now we analyze how the new website design performs. We help with
              maitenince and more.
            </p>
          </div>{" "}
          <div className="step-card h-[405px]  rounded-[10px] bg-white relative shadow-[0px 4px 10px 3px rgba(0, 0, 0, 0.25)] lg:w-[354px] md:w-[300px] lg:px-[48px]  md:px-[40px] px-[30px] py-8 text-center  m-[30px] step-box-shadow">
            <div
              className="absolute w-[94px] h-[93px] rounded-[30px] bg-[#2FA4FF] top-[-24px] 
            left-[-30px]  flex justify-center items-center "
            >
              <RocketIcon />{" "}
            </div>
            <h1 className="">
              <span className=" border-b border-black  ff_dm_sans lg:text-5xl text-3xl pb-3 px-3  ">
                {" "}
                Growth{" "}
              </span>{" "}
            </h1>
            <p className="mt-10 text-[#555252] ff_Ibarra_Real_Nova">
              We captivate your customers with designs custom for your company.
              Studies show that users spend only 15 seconds on average looking
              at a website ! We make sure to retain customers attention and
              convert them into sales. We analyze your website and incorporate
              that data into our designs. designs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepBuyStep;
