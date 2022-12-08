import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h1 className="font-normal ff_dm_sans text-11xl text-black ">
              Get your business online{" "}
            </h1>
            <p className="font-normal text-2sm ff_Ibarra_Real_Nova text-BrilliantLicorice">
              We create engaing and dynamic designs to captivate your audience
              and convert viewers into buyers. Your website is the face of your
              business, we make sure it makes a good impression. We design and
              develop your website at no cost, we only charge for hosting and
              matienence.
            </p>
            <div>
              <button className="font-normal text-2sm text-black hero_btn h-[54px] w-[176px]">
                Get Started
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
