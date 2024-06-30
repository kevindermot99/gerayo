import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineErrorOutline } from "react-icons/md";
import { TiPin } from "react-icons/ti";

function Bus() {
  return (
    <div className="w-full h-fit bg-stone-100 mt-4 rounded-xl flex flex-col text-start justify-start p-4 relative">
      {/* icon */}
      <div className="h-[50px] aspect-square rounded-full absolute top-[-25px] right-8 z-10 bg-stone-100 p-2 ring-8 ring-white shadow-xl ">
        <img
          src="https://img.icons8.com/?size=96&id=WuEAfdVu7ugL&format=png"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-start max-md:items-start gap-2 z-10">
        <div className="w-full flex items-center justify-start gap-2 max-md:max-w-[70%] max-md:flex-wrap max-md:items-start ">
          <div
            title="Status"
            className=" py-2 px-4 bg-stone-200 whitespace-nowrap flex items-center justify-center rounded-lg text-xs font-semibold text-dark-text"
          >
            St: On Route
          </div>
          <div
            title="Plate Number"
            className=" py-2 px-4 bg-stone-200 whitespace-nowrap flex items-center justify-center rounded-lg text-xs font-semibold text-dark-text"
          >
            Pn: RAC435KG
          </div>
          <div
            title="Maximum Passengers"
            className=" py-2 px-4 bg-stone-200 whitespace-nowrap flex items-center justify-center rounded-lg text-xs font-semibold text-dark-text"
          >
            Mp: 70
          </div>
        </div>
        <div className="w-full h-full flex justify-between items-start gap-0 max-md:flex-col ">
          <div className="w-full h-full flex flex-col justify-start items-start">
            <h1 className="text-dark-text font-bold text-2xl capitalize pt-2">
              Zindiro - Kimironko
            </h1>
            <p className="text-dark-text/70 capitalize font-medium tracking-tight text-sm pb-2">
              Kigali bus service (KBS) - Yutong Bus
            </p>
            <div className="h-[1px] w-full bg-stone-200 mt-1"></div>
            <div className="flex items-center justify-start max-md:items-start ga-2 mt-3 max-md:gap-12">
              <div className="flex flex-col items-start justify-start gap-0">
                <p className="text-dark-text/70 capitalize font-medium tracking-tight text-sm">
                  departure time
                </p>
                <h1 className="text-dark-text font-bold text-xl ">8:00 am</h1>
              </div>
              <div className="px-5 text-sm h-full text-dark-text/30 max-md:hidden">
                &bull; &bull; &bull; &bull;
              </div>
              <div className="flex flex-col items-start justify-start gap-0">
                <p className="text-dark-text/70 capitalize font-medium tracking-tight text-sm">
                  Estimated Arrival Time
                </p>
                <h1 className="text-dark-text font-bold text-xl ">9:20 am</h1>
              </div>
            </div>
          </div>
          <div className="min-w-fit w-fit min-h-full border-l-[1px] max-md:border-l-[0px] max-md:pt-10 max-md:w-full border-border-lines-light pl-4 pb-2 max-md:pl-0  flex flex-col justify-end items-center">
            <h1 className="text-dark-text font-bold text-xl ">280.00 rwf</h1>
            <p className="text-dark-text/70 capitalize font-medium tracking-tight text-sm mb-5 max-md:mb-3">
              Journey Price
            </p>
            <button className="h-[40px] max-md:w-full px-8 bg-main-color text-white shadow-xl font-semibold rounded-lg text-sm flex items-center justify-center gap-1 cursor-pointer transition active:scale-95 ">
              <FaMapLocationDot className="text-xl" />
              Track Bus
            </button>
          </div>
        </div>
        <div className="w-full border-t-[1px] border-border-lines-light pt-3 flex items-center justify-between">
          <div className="w-fit h-full flex items-center justify-start gap-3">
          <button className="h-full rounded-md hover:text-main-color flex items-center justify-center font-medium text-sm text-dark-text/60 gap-1 ">
              <TiPin className="text-lg " />
              Pin
            </button>
          </div>
          <div className="w-fit h-full flex items-center justify-start gap-3 max-md:flex-wrap ">
            <button className="h-full rounded-md hover:text-main-color flex items-center justify-center font-medium text-xs text-dark-text/60 gap-1 ">
              <MdOutlineErrorOutline className="text-base " />
              Report a Problem
            </button>
            <button className="h-full rounded-md hover:text-main-color flex items-center justify-center font-medium text-xs text-dark-text/60 gap-1 max-md:hidden ">
              <MdOutlineErrorOutline className="text-base " />
              Submit Feedback
            </button>
            <button className="h-full rounded-md hover:text-main-color flex items-center justify-center font-medium text-xs text-dark-text/60 gap-1 max-md:hidden ">
              <MdOutlineErrorOutline className="text-base " />
              Service Request Form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bus;
