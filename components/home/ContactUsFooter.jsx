import React from "react";
import useContactUs from "../../hooks/useContactUs";
import Loader from "../common/Loader";

const ContactUsFooter = () => {
  const { setFormData, isLoading, handleSubmit, formData } = useContactUs();
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-[687px] contact-form xl:px-[50px] sm:px-[40px] px-4 sm:py-[30px] py-4 rounded-[16px] "
      >
        <p className="text-[10px] text-[#2FA4FF] ff_ubuntu "> CONTACT US</p>
        <p className="mb-5 pt-3 text-3xl font-bold  text-darkBlack  ff_ubuntu">
          Free Consultation
        </p>
        <div className="mb-3 pt-5 flex flex-col">
          <label
            htmlFor="name"
            className="text-sm font-medium text-darkBlack ff_ubuntu  "
          >
            Full Name
          </label>
          <input
            onChange={(e) =>
              setFormData({ ...formData, fullname: e.target.value })
            }
            value={formData.fullname}
            required
            type="text"
            className="bg-[#FFF8F8] sm:py-5 sm:px-7 px-4 py-3 mt-6 outline-none text-[12px] ff_ubuntu text-[#747582] w-full  "
            id="name"
            placeholder="Input Your Name"
          />
        </div>
        <div className="flex">
          <div className="my-3 flex flex-col w-[48%]">
            <label
              htmlFor="email"
              className="text-sm font-medium text-darkBlack ff_ubuntu"
            >
              Email
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              value={formData.email}
              required
              type="email"
              className="mt-6 bg-[#FFF8F8] sm:py-5 sm:px-7 px-4 py-3  outline-none text-[12px] ff_ubuntu text-[#747582]   "
              id="email"
              placeholder="Input Your Email"
            />
          </div>
          <div className="my-3  flex flex-col ml-auto w-[48%]">
            <label
              htmlFor="Date"
              className="text-sm font-medium text-darkBlack ff_ubuntu"
            >
              Date
            </label>
            <input
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              value={formData.date}
              required
              type="date"
              className="bg-[#FFF8F8] sm:py-5 sm:px-7 px-4 py-3 mt-6 outline-none text-[12px] ff_ubuntu text-[#747582]   "
              id="Date"
              placeholder="Input Your Name"
            />
          </div>
        </div>
        <div className="my-3  flex flex-col    ">
          <label
            htmlFor="dis"
            className="text-sm font-medium text-darkBlack ff_ubuntu"
          >
            Message
          </label>
          <textarea
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            value={formData.message}
            required
            type="text"
            className="resize-none bg-[#FFF8F8] sm:py-5 sm:px-7 px-4 py-3 mt-4 outline-none text-[12px] ff_ubuntu text-[#747582] w-full  "
            id="dis"
            rows={6}
            placeholder="Write Message..."
          />
        </div>
        <div className="my-8">
          <button
            type="submit"
            className="flex items-center justify-center rounded-full sm:h-[65px] sm:px-12 px-8 py-5 text-white text-md font-bold send-message-btn transition-all duration-300 hover:shadow-none ff_ubuntu "
          >
            {isLoading ? <Loader /> : "Send Message"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactUsFooter;
