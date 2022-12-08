import React from "react";

const Performance = () => {
    return (
        <div>
            <div className="container mx-auto mt-[30px]  sm:mt-[50px]  lg:mt-[150px] px-3">
                <div className="flex flex-col lg:flex-row xl:max-w-[1200px] mx-auto items-center justify-center lg:justify-between">
                    <div>
                        <div className="flex items-center">
                            <img className="sm:max-w-[421px]" src="/images/monitor-xdr.png" alt="monitor-img" />
                        </div>
                    </div>
                    <div className=" mt-5 lg:mt-0">
                        <p className="font-bold text-lg sm:text-xl text-center lg:text-start ff_ds_sans text-dull">
                            Dynamic and engaging UI and UX Designs
                        </p>
                        <h2 className="font-bold max-w-[581px] text-center lg:text-start leading-[42px] sm:leading-[65px] ff_ds_sans text-4xl sm:text-7xl text-black">
                            Improve performance and engage customers
                        </h2>
                        <p className="text-2sm font-normal text-center lg:text-start ff_Ibarra_Real_Nova text-BrilliantLicorice mt-3 sm:mt-5 max-w-[581px]">
                            We captivate your customers with designs custom for your company. Studies show that users spend only 15 seconds on average
                            looking at a website ! We make sure to retain customers attention and convert them into sales. We analyze your website and
                            incorporate that data into our designs.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Performance;
