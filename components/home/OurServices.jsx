import React from "react";
import { SearchIcon, StackIcon, WebDesignIcon, WebSiteIcon } from "../helper/Icons";

const OurServices = () => {
    return (
        <div>
            <div className="container mx-auto mt-[30px] px-3 sm:mt-[80px] lg:mt-[170px]">
                <h2 className="font-bold ff_dm_sans text-4xl sm:text-7xl text-center">Our Services</h2>
                <div className="flex justify-center">
                    <p className="font-bold ff_dm_sans text-xl text-dull text-center max-w-[465px]">
                        Increase search results, convert more visitors, develop your brand
                    </p>
                </div>
                <div className="flex justify-center mt-[50px]">
                    <div className="max-w-[888px]">
                        <div className="flex justify-center flex-wrap">
                            <div className="p-[18px] sm:p-[38px] w-[280px] hover:bg-white rounded-[8px] flex justify-center flex-col">
                                <div className="flex justify-center">
                                    <SearchIcon />
                                </div>
                                <p className="font-normal text-center text-md mt-[16px] sm:mt-[37px] ff_dm_sans text-Madonna">
                                    Search Engine Optimization
                                </p>
                            </div>
                            <div className="p-[18px] sm:p-[38px] w-[280px] hover:bg-white rounded-[8px] flex justify-center flex-col">
                                <div className="flex justify-center">
                                    <WebSiteIcon />
                                </div>
                                <p className="font-normal text-center text-md mt-[16px] sm:mt-[37px] ff_dm_sans text-Madonna">Website Creation </p>
                            </div>
                            <div className="p-[18px] sm:p-[38px] w-[280px] hover:bg-white rounded-[8px] flex justify-center flex-col">
                                <div className="flex justify-center">
                                    <WebDesignIcon />
                                </div>
                                <p className="font-normal text-center text-md mt-[16px] sm:mt-[37px] ff_dm_sans text-Madonna">
                                    Web design (UI and UX)
                                </p>
                            </div>
                            <div className="p-[18px] sm:p-[38px] w-[280px] hover:bg-white rounded-[8px] flex justify-center flex-col">
                                <div className="flex justify-center">
                                    <SearchIcon />
                                </div>
                                <p className="font-normal text-center text-md mt-[16px] sm:mt-[37px] ff_dm_sans text-Madonna">Marketing </p>
                            </div>
                            <div className="p-[18px] sm:p-[38px] w-[280px] hover:bg-white rounded-[8px] flex justify-center flex-col">
                                <div className="flex justify-center">
                                    <StackIcon />
                                </div>
                                <p className="font-normal text-center text-md mt-[16px] sm:mt-[37px] ff_dm_sans text-Madonna">Data Analysis </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;
