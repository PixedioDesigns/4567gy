import React from "react";

const StepProcess = () => {
  return (
    <div>
      <div className="max-w-[1268px] px-3 mx-auto  mt-[150px] ">
        <p className="font-normal ff_dm_sans text-3xl sm:text-6xl md:text-10xl text-black text-center">
          Our step by step process
        </p>
        <div className="flex flex-wrap justify-between px-5">
          <div className="w-[364px] relative mt-[129px] process_card h-[405px] flex flex-col items-center transition-all duration-200 ease hover:-translate-y-1">
            <div className="w-[94px] absolute -top-6 -left-7 bg-[#2FA4FF] h-[93px] rounded-[30px] flex justify-center items-center">
              <img src="/images/process-img-1.png" alt="process-img" />
            </div>
            <p className="font-normal ff_dm_sans pt-[34px] text-black text-5xl">
              Initial Brief
            </p>
            <div className="w-[190px] mt-[12px] h-[1px] bg-black"></div>
            <p className="font-normal pt-[40px] text-center ff_Ibarra_Real_Nova text-2sm text-BrilliantLicorice max-w-[239px]">
              To start, we analyze your business’s current online presence and
              see where it’s lacking. This is mostly a critique of your current
              webpage design if you have one.
            </p>
          </div>
          <div className="w-[364px] relative mt-[129px] process_card h-[405px] flex flex-col items-center transition-all duration-200 ease hover:-translate-y-1">
            <div className="w-[94px] absolute -top-6 -left-7 bg-[#2FA4FF] h-[93px] rounded-[30px] flex justify-center items-center">
              <img src="/images/process-img-2.png" alt="process-img" />
            </div>
            <p className="font-normal ff_dm_sans pt-[34px] text-black text-5xl">
              The design{" "}
            </p>
            <div className="w-[190px] mt-[12px] h-[1px] bg-black"></div>
            <p className="font-normal pt-[40px] text-center ff_Ibarra_Real_Nova text-2sm text-BrilliantLicorice max-w-[239px]">
              We design a website for your business, you can have input and we
              will update you on progress. Once the design is finished, we will
              send it over to you to review. We won’t start development until
              you’re absolutely satisfied with the design.
            </p>
          </div>
          <div className="w-[364px] relative mt-[129px] process_card h-[405px] flex flex-col items-center transition-all duration-200 ease hover:-translate-y-1">
            <div className="w-[94px] absolute -top-6 -left-7 bg-[#2FA4FF] h-[93px] rounded-[30px] flex justify-center items-center">
              <img src="/images/process-img-3.png" alt="process-img" />
            </div>
            <p className="font-normal ff_dm_sans pt-[34px] text-black text-5xl">
              Creation
            </p>
            <div className="w-[190px] mt-[12px] h-[1px] bg-black"></div>
            <p className="font-normal pt-[40px] text-center ff_Ibarra_Real_Nova text-2sm text-BrilliantLicorice max-w-[239px]">
              Using modern languages like react js, javascript, and more, we
              create a stunning website for you based on the designs
            </p>
          </div>
          <div className="w-[364px] relative mt-[129px] process_card h-[405px] flex flex-col items-center transition-all duration-200 ease hover:-translate-y-1">
            <div className="w-[94px] absolute -top-6 -left-7 bg-[#2FA4FF] h-[93px] rounded-[30px] flex justify-center items-center">
              <img src="/images/process-img-4.png" alt="process-img" />
            </div>
            <p className="font-normal ff_dm_sans pt-[34px] text-black text-5xl">
              Analyze
            </p>
            <div className="w-[190px] mt-[12px] h-[1px] bg-black"></div>
            <p className="font-normal pt-[40px] text-center ff_Ibarra_Real_Nova text-2sm text-BrilliantLicorice max-w-[239px]">
              Now we analyze how the new website design performs. We help with
              maintenance and more.
            </p>
          </div>
          <div className="w-[364px] relative mt-[129px] process_card h-[405px] flex flex-col items-center transition-all duration-200 ease hover:-translate-y-1">
            <div className="w-[94px] absolute -top-6 -left-7 bg-[#2FA4FF] h-[93px] rounded-[30px] flex justify-center items-center">
              <img src="/images/process-img-5.png" alt="process-img" />
            </div>
            <p className="font-normal ff_dm_sans pt-[34px] text-black text-5xl">
              Growth{" "}
            </p>
            <div className="w-[190px] mt-[12px] h-[1px] bg-black"></div>
            <p className="font-normal pt-[40px] text-center ff_Ibarra_Real_Nova text-2sm text-BrilliantLicorice max-w-[239px]">
              Successful websites begin with a focused growth strategy. Our goal
              in the growth stage is to develop a roadmap with clear objectives,
              customer focused data, and turning ideas into action. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepProcess;
