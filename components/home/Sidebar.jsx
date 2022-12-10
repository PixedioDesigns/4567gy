const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <>
      {isSidebarOpen && (
        <div
          onClick={() => setSidebarOpen((pre) => !pre)}
          className="z-20 fixed left-0 w-full h-full bg-black opacity-10 top-0 transition-all duration-200 ease-in"
        ></div>
      )}

      <div
        className={`${
          isSidebarOpen ? "left-0" : "-left-[250px]"
        } fixed top-0  shadow-lg w-[250px] h-screen lg:hidden bg-white p-5 z-50 transition-all duration-300 ease-in`}
      >
        <div className="flex justify-end items-center mb-4">
          <span
            className="cursor-pointer"
            onClick={() => setSidebarOpen(false)}
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.782 4.0319C11.8355 3.97852 11.8779 3.91513 11.9068 3.84536C11.9358 3.77559 11.9507 3.7008 11.9508 3.62525C11.9508 3.54971 11.936 3.4749 11.9071 3.4051C11.8782 3.33529 11.8359 3.27185 11.7825 3.2184C11.7291 3.16495 11.6658 3.12254 11.596 3.09359C11.5262 3.06464 11.4514 3.04972 11.3759 3.04967C11.3003 3.04962 11.2255 3.06446 11.1557 3.09332C11.0859 3.12219 11.0225 3.16452 10.969 3.2179L7.50002 6.6869L4.03202 3.2179C3.92408 3.10996 3.77768 3.04932 3.62502 3.04932C3.47237 3.04932 3.32597 3.10996 3.21802 3.2179C3.11008 3.32584 3.04944 3.47225 3.04944 3.6249C3.04944 3.77756 3.11008 3.92396 3.21802 4.0319L6.68702 7.4999L3.21802 10.9679C3.16458 11.0213 3.12218 11.0848 3.09325 11.1546C3.06433 11.2245 3.04944 11.2993 3.04944 11.3749C3.04944 11.4505 3.06433 11.5253 3.09325 11.5952C3.12218 11.665 3.16458 11.7285 3.21802 11.7819C3.32597 11.8898 3.47237 11.9505 3.62502 11.9505C3.70061 11.9505 3.77546 11.9356 3.84529 11.9067C3.91512 11.8777 3.97858 11.8353 4.03202 11.7819L7.50002 8.3129L10.969 11.7819C11.077 11.8897 11.2233 11.9502 11.3759 11.9501C11.5284 11.95 11.6747 11.8893 11.7825 11.7814C11.8903 11.6735 11.9508 11.5271 11.9508 11.3745C11.9507 11.222 11.89 11.0757 11.782 10.9679L8.31302 7.4999L11.782 4.0319Z"
                fill="black"
              />
            </svg>
          </span>
        </div>

        <ul className="mt-10 text-darkBlack font-medium text-md flex flex-col items-center ">
          <li className="mb-5" onClick={() => setSidebarOpen(false)}>
            <a
              className="relative transition-all ease-in duration-200 hover:text-[#01D6FF]"
              href="#pricing"
            >
              Pricing
            </a>
          </li>
          <li className="mb-5" onClick={() => setSidebarOpen(false)}>
            <a
              className="relative transition-all ease-in duration-200 hover:text-[#01D6FF]"
              href="#contact"
            >
              Contact
            </a>
          </li>
          <li className="mb-5" onClick={() => setSidebarOpen(false)}>
            <a
              className="relative transition-all ease-in duration-200 hover:text-[#01D6FF]"
              href="#about"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
