import React from "react";
import { ourworksdata } from "../helper/helper";
import OurWorksItem from "./OurWorksItem";

const OurWork = () => {
  return (
    <>
      <section>
        <div className="max-w-[1287px] mx-auto my-[50px] px-3 sm:my-[120px] lg:my-[170px]  ">
          <h1 className="md:mb-16 sm:mb-10 mb-8  ff_dm_sans text-4xl sm:text-7xl lg:text-10xl text-center">
            Our Work
          </h1>

          <div className="flex flex-wrap justify-center items-center">
            {ourworksdata &&
              ourworksdata.length &&
              ourworksdata.map((obj, index) => (
                <OurWorksItem
                  obj={obj}
                  key={index}
                  id={index}
                  ourworksdata={ourworksdata}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
