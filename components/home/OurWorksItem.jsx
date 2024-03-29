import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const OurWorksItem = ({ obj, id }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {" "}
      <div
        onClick={() => {
          setOpen(true);
        }}
        className="mx-3 rounded-md mb-5 cursor-pointer w-full max-w-[300px] overflow-hidden group transition-all duration-200 ease relative flex justify-center items-center after-hover-our-work"
      >
        <img
          className="w-full group-hover:scale-105 transition-all duration-200 ease-in object-cover"
          src={obj.thumbnail}
          alt="thumbnail"
        />

        <span className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in">
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 8L10.6 9.4L12.2 11H8V13H12.2L10.6 14.6L12 16L16 12L12 8ZM12 2C13.3833 2 14.6833 2.26267 15.9 2.788C17.1167 3.31267 18.175 4.025 19.075 4.925C19.975 5.825 20.6873 6.88333 21.212 8.1C21.7373 9.31667 22 10.6167 22 12C22 13.3833 21.7373 14.6833 21.212 15.9C20.6873 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6877 15.9 21.213C14.6833 21.7377 13.3833 22 12 22C10.6167 22 9.31667 21.7377 8.1 21.213C6.88333 20.6877 5.825 19.975 4.925 19.075C4.025 18.175 3.31267 17.1167 2.788 15.9C2.26267 14.6833 2 13.3833 2 12C2 10.6167 2.26267 9.31667 2.788 8.1C3.31267 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.31267 8.1 2.788C9.31667 2.26267 10.6167 2 12 2ZM12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={obj.lighboximage}
          onCloseRequest={() => setOpen(false)}
        />
      )}
    </>
  );
};

export default OurWorksItem;
