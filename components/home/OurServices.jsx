import React from "react";
import {
  DataAnalyst,
  MarketingIcon,
  SearchIcon,
  StackIcon,
  WebDesignIcon,
  WebSiteIcon,
} from "../helper/Icons";

const OurServices = () => {
  return (
    <div>
      <div className="container mx-auto mt-[30px] px-3 sm:mt-[80px] lg:mt-[170px]">
        <h2 className="font-bold ff_dm_sans text-4xl sm:text-7xl text-center">
          Our Services
        </h2>
        <div className="flex justify-center">
          <p className="font-bold ff_dm_sans text-lg text-dull text-center max-w-[465px]">
            Increase search results, convert more visitors, develop your brand
          </p>
        </div>
        <div className="flex justify-center mt-[50px]">
          <div className="max-w-[910px]">
            <div className="flex justify-center flex-wrap">
              <article className="service-shadow-hover relative group">
                <div className="relative p-[18px] sm:p-[38px] z-10 transition-all duration-200 ease w-[280px] services mt-3 group-hover:bg-white rounded-[8px] flex justify-center flex-col">
                  <div className="flex justify-center h-[61px]">
                    <SearchIcon />
                  </div>
                  <p className="font-normal text-center text-md mt-[16px] sm:mt-[37px] ff_dm_sans text-Madonna">
                    Search Engine Optimization
                  </p>
                </div>
              </article>

              <article className="service-shadow-hover relative mx-4 group">
                <div className=" p-[18px] sm:p-[38px] w-[280px] relative z-10 transition-all duration-200 ease services mt-3 group-hover:bg-white rounded-[8px] flex justify-center flex-col">
                  <div className="flex justify-center h-[61px]">
                    <WebSiteIcon />
                  </div>
                  <p className="font-normal text-center text-md mt-[16px] sm:mt-[37px] ff_dm_sans text-Madonna">
                    Website Creation{" "}
                  </p>
                </div>
              </article>

              <article className="service-shadow-hover relative mx-4 group">
                <div className="p-[18px] sm:p-[38px] w-[280px] services mt-3 relative z-10 transition-all duration-200 ease services  group-hover:bg-white rounded-[8px] flex justify-center flex-col">
                  <div className="flex justify-center h-[61px]">
                    <WebDesignIcon />
                  </div>
                  <p className="font-normal text-center text-md mt-[16px] sm:mt-[37px] ff_dm_sans text-Madonna">
                    Web design (UI and UX)
                  </p>
                </div>
              </article>

              <article className="service-shadow-hover relative mx-4 group">
                <div className="p-[18px] sm:p-[38px] w-[280px] services mt-3 relative z-10 transition-all duration-200 ease services  group-hover:bg-white rounded-[8px] flex justify-center flex-col">
                  <div className="flex justify-center h-[61px] sm:-mt-[27px]">
                    <MarketingIcon />
                  </div>
                  <p className="font-normal text-center text-md mt-[45px] sm:mt-[65px] ff_dm_sans text-Madonna">
                    Marketing{" "}
                  </p>
                </div>
              </article>

              <article className="service-shadow-hover relative mx-4 group">
                <div className="p-[18px] sm:p-[38px] w-[280px] services mt-3 relative z-10 transition-all duration-200 ease services  group-hover:bg-white rounded-[8px] flex justify-center flex-col">
                  <div className="flex justify-center h-[61px]">
                    <DataAnalyst />
                  </div>
                  <p className="font-normal text-center text-md mt-[16px] sm:mt-[37px] ff_dm_sans text-Madonna">
                    Data Analysis{" "}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
