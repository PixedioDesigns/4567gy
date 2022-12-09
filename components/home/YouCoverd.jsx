import React from "react";

function YouCoverd() {
  return (
    <div>
      {" "}
      <div className="  container mx-auto px-5 my-12 lg:py-14 py-10 lg:my-[150px]  ">
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
          <div className="lg:basis-1/2 basis-full">
            <div className="lg:pl-10 mx-4 mx-lg-0  mt-10 lg:mt-0">
              <div className="contact-form xl:px-[50px] sm:px-[40px] px-4 sm:py-[30px] py-4  ">
                <p className="text-[11px] text-[#2FA4FF] ff_ubuntu ">
                  {" "}
                  CONTACT US
                </p>
                <p className="mb-5 pt-3 text-3xl  text-darkBlack  ff_ubuntu">
                  Free Consultation
                </p>
                <div className="my-5 pt-6 flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-darkBlack ff_ubuntu  "
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="bg-[#FFF8F8] sm:py-5 sm:px-7 px-4 py-3 mt-6 outline-none text-[10px] ff_ubuntu text-[#747582] w-full  "
                    id="name"
                    placeholder="Input Your Name"
                  />
                </div>{" "}
                <div className="flex">
                  <div className="my-4   flex flex-col w-[48%]">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-darkBlack ff_ubuntu pt-4 "
                    >
                      Email{" "}
                    </label>
                    <input
                      type="email"
                      className="bg-[#FFF8F8] sm:py-5 sm:px-7 px-4 py-3 mt-6 outline-none text-[10px] ff_ubuntu text-[#747582]   "
                      id="email"
                      placeholder="Input Your Email"
                    />
                  </div>
                  <div className="my-4   flex flex-col ml-auto w-[48%]">
                    <label
                      htmlFor="Date"
                      className="text-sm font-medium text-darkBlack ff_ubuntu pt-4 "
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      className="bg-[#FFF8F8] sm:py-5 sm:px-7 px-4 py-3 mt-6 outline-none text-[10px] ff_ubuntu text-[#747582]   "
                      id="Date"
                      placeholder="Input Your Name"
                    />
                  </div>
                </div>
                <div className="my-4   flex flex-col    ">
                  <label
                    htmlFor="dis"
                    className="text-sm font-medium text-darkBlack ff_ubuntu pt-4 "
                  >
                    Message{" "}
                  </label>
                  <textarea
                    type="text"
                    className="bg-[#FFF8F8] sm:py-5 sm:px-7 px-4 py-3 mt-6 outline-none text-[10px] ff_ubuntu text-[#747582] w-full  "
                    id="dis"
                    rows={6}
                    placeholder="Write Message..."
                  />
                </div>
                <div className="my-14">
                  <button className="rounded-full sm:px-12 px-8 sm:py-[30px] py-5 text-white text-md font-bold send-message-btn transition-all duration-300 hover:shadow-none ff_ubuntu ">
                    {" "}
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouCoverd;
