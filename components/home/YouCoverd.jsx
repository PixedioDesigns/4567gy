import React from "react";
import ContactUsFooter from "./ContactUsFooter";

function YouCoverd() {
  return (
    <div>
      {" "}
      <div className="  container mx-auto px-5 mb-10 sm:my-12 lg:py-14 py-10 lg:my-[150px]  ">
        <div className="flex flex-wrap items-center justify-center">
          <div className="lg:basis-1/2">
            <div className="my-8 lg:pr-10">
              <h1 className="md:text-6xl text-4xl text-center ff_dm_sans font-bold text-darkBlack mb-8 ">
                {" "}
                We got you covered
              </h1>
              <div className="max-w-[557px]  ">
                {" "}
                <img src="/images/youcoverd.png" alt="" className="w-full" />
              </div>
            </div>
          </div>
          <div className="lg:basis-1/2 basis-full mt-10 sm:mt-lg-0">
            <ContactUsFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouCoverd;
