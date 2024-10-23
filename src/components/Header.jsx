import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap md:h-[600px]  bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* ----- left side --------- */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10  md:py[10vw] md:mb-[-30px] ">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div>
          <img src={assets.group_profiles} alt="group_profiles" />
          <p>
            Simply browse through our extensive list of trusted doctors, <br /> schedule your appointment hassle-free.
          </p>
        </div>
        <a href="#speciality" className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105">
          Book appointment <img className="w-3" src={assets.arrow_icon} alt="arrow_icon" />
        </a>
      </div>
      {/* ------ right side --------- */}
      <div className="md:w-1/2   relative">
        <img className="w-full h-auto md:absolute bottom-0 rounded-lg " src={assets.header_img} alt="eader_img" />
      </div>
    </div>
  );
};

export default Header;
