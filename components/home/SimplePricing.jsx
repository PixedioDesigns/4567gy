import React from "react";

const SimplePricing = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-3">
      <h1 className="md:mb-16 sm:mb-10 mb-8   ff_dm_sans text-4xl sm:text-7xl lg:text-xxl text-center">
        Simple Pricing{" "}
      </h1>

      <div className="flex flex-wrap  justify-center pb-14 ">
        <div className="lg:basis-1/3  ">
          <div className="my-7 step-box-shadow pricing-box duration-300 transition-all px-6 py-8 text-center mx-3 ">
            <div className="flex justify-center ">
              <img src="/images/pioneer.png" alt="" className="" />
            </div>
            <h1 className="text-center flex justify-center md:text-7xl text-5xl font-bold items-end mt-[-50px] ff_dm_sans ">
              $34.99<span className="md:text-4xl text-2xl mb-2">/mo</span>
            </h1>
            <p className="text-center ff_mulish py-4 mt-4 text-2md text-[#696871]">
              New Website
            </p>
            <p className="text-center ff_mulish py-4 text-2md text-[#696871]">
              New Website
            </p>
            <p className="text-center ff_mulish py-4 text-2md text-[#696871]">
              New Website
            </p>
            <button className=" rounded-[10px]  w-full border border-[#EAE9F2] py-[21px] text-2md font-bold text-[#2FA4FF] my-4 duration-300 transition-all ff_dm_sans">
              {" "}
              Get Started
            </button>
          </div>{" "}
        </div>{" "}
        <div className="lg:basis-1/3  ">
          <div className="my-7 step-box-shadow pricing-box duration-300 transition-all px-6 py-8 text-center mx-3 ">
            <div className="flex justify-center ">
              <img src="/images/renegade.png" alt="" className="" />
            </div>
            <h1 className="text-center flex justify-center md:text-7xl text-5xl font-bold items-end mt-[-55px] ff_dm_sans ">
              $34.99<span className="md:text-4xl text-2xl mb-2">/mo</span>
            </h1>
            <p className="text-center py-4 ff_mulish mt-4 text-2md text-[#696871]">
              New Website
            </p>
            <p className="text-center py-4 ff_mulish text-2md text-[#696871]">
              New Website
            </p>
            <p className="text-center py-4 ff_mulish text-2md text-[#696871]">
              New Website
            </p>
            <button className=" rounded-[10px]  w-full border border-[#EAE9F2] py-[21px] text-2md font-bold text-[#2FA4FF] my-4 duration-300 transition-all ff_dm_sans">
              {" "}
              Get Started
            </button>
          </div>{" "}
        </div>{" "}
        <div className="lg:basis-1/3  ">
          <div className="my-7 step-box-shadow pricing-box duration-300 transition-all px-6 py-8 text-center mx-3 ">
            <div className="flex justify-center ">
              <img src="/images/pro.png" alt="" className="" />
            </div>
            <h1 className="text-center flex justify-center md:text-7xl text-5xl font-bold items-end mt-[-65px] ff_dm_sans ">
              $34.99<span className="md:text-4xl text-2xl mb-2">/mo</span>
            </h1>
            <p className="text-center py-4 ff_mulish mt-4 text-2md text-[#696871]">
              New Website
            </p>
            <p className="text-center py-4 ff_mulish text-2md text-[#696871]">
              New Website
            </p>
            <p className="text-center py-4 ff_mulish text-2md text-[#696871]">
              New Website
            </p>
            <button className=" rounded-[10px]  w-full border border-[#EAE9F2] py-[21px] text-2md font-bold text-[#2FA4FF] my-4 duration-300 transition-all ff_dm_sans">
              {" "}
              Get Started
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default SimplePricing;
