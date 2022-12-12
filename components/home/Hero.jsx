import React from "react";
import HeroFreeConsultant from "./HeroFreeConsultant";

const Hero = () => {
  return (
    <header>
      <div className="max-w-[1280px] mx-auto px-3 flex flex-col lg:flex-row justify-between mt-6 lg:mt-14 md:pt-12">
        <div className="w-full lg:w-1/2 mb-20 lg:mb-0 ">
          <h1 className="font-normal ff_dm_sans text-6xl sm:text-10xl xl:text-11xl text-black leading-[70px] lg:leading-[98px]">
            Get your <br className="hidden xl:block" /> business{" "}
            <span className="italic  "> online</span>{" "}
          </h1>
          <p className="my-6 lg:my-14 font-normal text-2sm ff_Ibarra_Real_Nova text-BrilliantLicorice max-w-[581px]">
            We create engaing and dynamic designs to captivate your audience and
            convert viewers into buyers. Your website is the face of your
            business, we make sure it makes a good impression. We design and
            develop your website at no cost, we only charge for hosting and
            matienence.
          </p>
          <div className="flex items-center mt-6">
            <div className="hero-btn-blue-blur max-w-[200px] relative">
              <button className="z-10  relative font-normal text-2sm text-black hero_btn h-[54px] px-8 sm:w-[176px] hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ease">
                <a href="#contact">Get Started</a>
              </button>
            </div>
            <a
              href="#pricing"
              className="text-[#49C2E5] font-medium group ff_dm_sans text-xl flex items-center ml-6 lg:ml-14  transition-all duration-200 ease hover:text-[#1ecef1]"
            >
              <span className="mr-3">Our pricing</span>
              <svg
                className=" transition-all duration-200 ease group-hover:translate-x-2"
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5303 6.53033C14.8232 6.23744 14.8232 5.76256 14.5303 5.46967L9.75736 0.6967C9.46447 0.403807 8.98959 0.403807 8.6967 0.6967C8.40381 0.989593 8.40381 1.46447 8.6967 1.75736L12.9393 6L8.6967 10.2426C8.40381 10.5355 8.40381 11.0104 8.6967 11.3033C8.98959 11.5962 9.46447 11.5962 9.75736 11.3033L14.5303 6.53033ZM-6.55671e-08 6.75L14 6.75L14 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z"
                  fill="#49C2E5"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <HeroFreeConsultant />
        </div>
      </div>
    </header>
  );
};

export default Hero;
