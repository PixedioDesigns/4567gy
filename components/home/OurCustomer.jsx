import React from "react";
import { CommaIcon } from "../helper/Icons";

const OurCustomer = () => {
    return (
        <div>
            <div className="max-w-[990px] mx-auto px-3 mt-[40px] sm:mt-[70px] lg:mt-[180px]">
                <p className="text-xs font-normal text-center sm:text-start ff_ubuntu text-KulSharifBlue ">TESTIMONIAL</p>
                <div className="flex justify-center sm:justify-start">
                    <p className="font-bold ff_ubuntu text-RoyalCurtsy text-center sm:text-start text-xl sm:text-3xl max-w-[160px]  sm:max-w-[214px]">
                        What Our Customer’s Say
                    </p>
                </div>
                <div className="sm:relative mt-3 sm:mt-0">
                    <img src="/images/customer-img-map.png" />
                    <div className="max-w-[424px] p-[12px] mt-3 sm:mt-0 mx-auto sm:p-[24px] sm:absolute top-3 md:-top-5 right-0 customer_say ">
                        <span>
                            <CommaIcon />
                        </span>
                        <p className="font-normal text-Confederate text-base ff_ubuntu mt-[5px] sm:mt-[15px]">
                            I really like the team for example, a relationship-focused and performance driven team is what you need for growth, Airos
                            made sure we felt well communicated with and cared about our growth as if it were their own business, truly impressed.
                        </p>
                        <div className="flex items-center mt-[12px] sm:mt-[23px]">
                            <img src="/images/customer-img-map-2.png" alt="customer-img-map" />
                            <p className="font-bold ml-[14px] ff_ubuntu text-2sm text-TrappedDarkness">StateFarm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCustomer;
