import React from "react";
import { AirosLogo, HamburgerIcon } from "../helper/Icons";

const Navbar = ({ setSidebarOpen }) => {
  return (
    <>
      <nav className="px-3 max-w-[1280px] mx-auto  sm:pt-6 flex items-center justify-between">
        <AirosLogo />

        <span className=" lg:hidden" onClick={() => setSidebarOpen(true)}>
          <HamburgerIcon />
        </span>

        <ul className="hidden  text-darkBlack font-medium text-lg lg:flex items-center ">
          <li className="mx-3 lg:mx-5">
            <a
              className=" transition-all ease-in duration-200 hover:text-[#01D6FF]"
              href="#pricing"
            >
              Pricing
            </a>
          </li>
          <li className="mx-3 lg:mx-5">
            <a
              className=" transition-all ease-in duration-200 hover:text-[#01D6FF]"
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li className="mx-3 lg:mx-5">
            <a
              className=" transition-all ease-in duration-200 hover:text-[#01D6FF]"
              href="#about"
            >
              About
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
