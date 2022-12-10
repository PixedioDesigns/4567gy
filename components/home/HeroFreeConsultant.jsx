import React from "react";
import useFreeConsultant from "../../hooks/useFreeConsultant";
import Loader from "../common/Loader";

const HeroFreeConsultant = () => {
  const { setFormData, isLoading, handleSubmit, formData } =
    useFreeConsultant();
  return (
    <>
      <div className="hero-free-consultant-form-bg relative">
        <img
          src="/images/bg-image-form-1.png"
          className="absolute -left-4 -top-14 "
          alt="bg form image"
        />
        <form
          onSubmit={handleSubmit}
          className="z-10  relative bg-white max-w-[465px] mx-auto p-6 sm:p-10 w-full rounded-[16px] shadow-hero-form"
        >
          <h2 className="font-bold text-4xl text-center ff_dm_sans text-black pb-4">
            Free consultation
          </h2>

          <input
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            value={formData.name}
            required
            type="text"
            placeholder="Name *"
            className="border-b border-black outline-none text-[#979797] font-bold text-base ff_dm_sans pb-2 w-full mb-5 sm:mb-7  "
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            value={formData.email}
            required
            type="email"
            placeholder="Email Address *"
            className="border-b border-black outline-none text-[#979797] font-bold text-base ff_dm_sans pb-2 w-full mb-5 sm:mb-7  "
          />
          <input
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            value={formData.phone}
            required
            type="tel"
            placeholder="Phone Number *"
            className="border-b border-black outline-none text-[#979797] font-bold text-base ff_dm_sans pb-2 w-full mb-5 sm:mb-7  "
          />

          <textarea
            onChange={(e) =>
              setFormData({ ...formData, descripion: e.target.value })
            }
            value={formData.descripion}
            placeholder="Brief Description about your project "
            cols="30"
            rows="5"
            required
            className="border-b border-black outline-none text-[#979797] font-bold text-base ff_dm_sans pb-2 w-full  resize-none"
          ></textarea>

          <button
            disabled={isLoading}
            type="submit"
            className="rounded-[10px] bg-[#01D6FF] ff_dm_sans text-white text-2md px-6 py-2 h-[48px] w-full hover:bg-[#1ecef1] hover:shadow-md transition-all duration-200 ease text-center mt-4"
          >
            {isLoading ? <Loader /> : "Send"}
          </button>
        </form>
      </div>
    </>
  );
};

export default HeroFreeConsultant;
