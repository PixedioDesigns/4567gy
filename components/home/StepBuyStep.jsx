import React from "react";

function StepBuyStep() {
  return (
    <div>
      {" "}
      <div className="container mx-auto my-[50px] px-3 sm:my-[120px] lg:my-[170px]  ">
        <h1 className="md:mb-16 sm:mb-10 mb-8   ff_dm_sans text-4xl sm:text-7xl lg:text-xxl text-center">
          Our step by step process
        </h1>
        <div className="flex flex-wrap  justify-center ">
          <div className="step-card h-[405px]  rounded-[10px] bg-white relative shadow-[0px 4px 10px 3px rgba(0, 0, 0, 0.25)] xl:w-[364px] lg:w-[300px]   md:px-[40px] px-[30px] py-8 text-center   xl:m-[40px] m-[30px] step-box-shadow">
            <div
              className="absolute w-[94px] h-[93px] rounded-[30px] bg-[#2FA4FF] top-[-24px] 
            left-[-30px] text-center "
            ></div>
            <h1 className="">
              <span className=" border-b border-black  lg:text-5xl text-3xl pb-3 px-3  ">
                {" "}
                Initial Brief
              </span>{" "}
            </h1>
            <p className="mt-10 text-[#555252]">
              {" "}
              To start, we analyze your business’s current online presence and
              see where it’s lacking. This is mostly a critique of your current
              webpage design if you have one.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepBuyStep;
