import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // SCROLL TO TOP FUNCTION WHEN CLICK ON THIS PAGE SCROLL TOP
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // TO FIND SCROLL Y POSITION
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  // THIS USEFFECT GIVE US POSITION OF SCROLL IN EVERY PIXELS WE SCROLL
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* // IF PAGE SCROLL VALUE GRATER THAN 500 THEN SHOW BACK TO TOP BUTTON */}
      {scrollPosition > 250 && (
        <div
          className="fixed right-[20px] bottom-10 sm:bottom-[80px] z-50 cursor-pointer bg-[#2FA4FF] w-[38px] h-[38px] sm:w-[55px] sm:h-[55px] rounded-full flex items-center justify-center transition-all duration-200 ease-in shadow-lg"
          onClick={() => scrollToTop()}
        >
          <BackToTopIcon />
        </div>
      )}
    </>
  );
};

export default BackToTop;

export const BackToTopIcon = () => (
  <svg
    className="w-[14px] h-[10px] sm:w-[18px] sm:h-[12px]"
    width="18"
    height="12"
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.89551 0L17.791 9.97636L16.5456 11.373L8.89551 2.79338L1.24537 11.373L0 9.97636L8.89551 0Z"
      fill="white"
    />
  </svg>
);
