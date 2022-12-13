import React from "react";

const SimplePricing = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-3" id="pricing">
      <h1 className="md:mb-16 sm:mb-10 mb-8 ff_dm_sans text-4xl md:text-7xl   text-center font-bold">
        Simple Pricing
      </h1>

      <div className="flex flex-wrap  justify-center pb-5">
        <div className="lg:basis-1/3  ">
          <div className="my-5 sm:my-7 step-box-shadow pricing-box rounded-[10px] duration-300 transition-all ease  p-5 sm:px-6 sm:py-8 text-center sm:mx-3 hover:scale-[1.02] ">
            <div className="flex justify-center ">
              <img src="/images/pioneer.png" alt="pioneer" className="" />
            </div>
            <h1 className="text-center flex justify-center md:text-7xl text-5xl font-bold items-end mt-[-50px] ff_dm_sans ">
              $34.99<span className="md:text-4xl text-2xl mb-2">/mo</span>
            </h1>
            <p className="text-center ff_mulish py-2 sm:py-4 mt-4 text-2md text-[#696871]">
              New Website
            </p>
            <p className="text-center ff_mulish py-2 sm:py-4 text-2md text-[#696871]">
              Hosting
            </p>
            <p className="text-center ff_mulish py-2 sm:py-4 text-2md text-[#696871]">
              website Maitinence
            </p>
            <a href="#contact">
              <button className=" rounded-[10px]  w-full border border-[#EAE9F2] py-[10px] sm:py-[21px] text-2md font-bold text-[#2FA4FF] my-4 duration-300 transition-all ease ff_dm_sans">
                Get Started
              </button>
            </a>
          </div>
        </div>
        <div className="lg:basis-1/3  ">
          <div className=" my-5 sm:my-7 step-box-shadow pricing-box rounded-[10px] duration-300 transition-all ease  p-5 sm:px-6 sm:py-8 text-center sm:mx-3 hover:scale-[1.02] ">
            <div className="flex justify-center ">
              <img src="/images/renegade.png" alt="renegade" className="" />
            </div>
            <h1 className="text-center flex justify-center md:text-7xl text-5xl font-bold items-end mt-[-55px] ff_dm_sans ">
              $74.99<span className="md:text-4xl text-2xl mb-2">/mo</span>
            </h1>
            <p className="text-center py-2 sm:py-4 ff_mulish mt-4 text-2md text-[#696871]">
              Everything From Pioneer
            </p>
            <p className="text-center py-2 sm:py-4 ff_mulish text-2md text-[#696871]">
              SEO
            </p>
            <p className="text-center py-2 sm:py-4 ff_mulish text-2md text-[#696871]">
              website Maitinence
            </p>
            <a href="#contact">
              <button className=" rounded-[10px]  w-full border border-[#EAE9F2] py-[10px] sm:py-[21px] text-2md font-bold text-[#2FA4FF] my-4 duration-300 transition-all ease ff_dm_sans">
                Get Started
              </button>
            </a>
          </div>
        </div>
        <div className="lg:basis-1/3  ">
          <div className="my-5 sm:my-7 step-box-shadow pricing-box rounded-[10px] duration-300 transition-all ease  p-5 sm:px-6 sm:py-8 text-center sm:mx-3 hover:scale-[1.02] ">
            <div className="flex justify-center ">
              <img src="/images/pro.png" alt="pro" className="" />
            </div>
            <h1 className="text-center flex justify-center md:text-7xl text-5xl font-bold items-end mt-[-65px] ff_dm_sans ">
              $189.99<span className="md:text-4xl text-2xl mb-2">/mo</span>
            </h1>
            <p className="text-center py-2 sm:py-4 ff_mulish mt-4 text-2md text-[#696871]">
              Renegade Package 
            </p>
            <p className="text-center py-2 sm:py-4 ff_mulish text-2md text-[#696871]">
              Social Media Management
            </p>
            <p className="text-center py-2 sm:py-4 ff_mulish text-2md text-[#696871]">
              website Maitinence
            </p>
            <a href="#contact">
              <button className=" rounded-[10px]  w-full border border-[#EAE9F2] py-[10px] sm:py-[21px] text-2md font-bold text-[#2FA4FF] my-4 duration-300 transition-all ease ff_dm_sans">
                Get Started
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimplePricing;
