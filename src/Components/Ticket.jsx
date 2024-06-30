import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineErrorOutline } from "react-icons/md";
import { TiPin } from "react-icons/ti";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { MdEventSeat } from "react-icons/md";
import { FaRectangleAd } from "react-icons/fa6";
import { RxLapTimer } from "react-icons/rx";

function Ticket() {
  return (
    <div className="w-full h-fit bg-stone-100 mt-4 rounded-xl flex flex-col text-start justify-start p-4 relative">
      {/* icon */}
      <div className="h-[50px] aspect-square rounded-full absolute top-[-25px] right-8 z-10 bg-stone-100 p-2 ring-8 ring-white shadow-xl ">
        <img
          src="https://img.icons8.com/?size=96&id=26pCmevJ7hFx&format=png"
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-start max-md:items-start gap-2 z-10">
        <div className="w-full flex items-center justify-start gap-2 max-md:max-w-[70%] max-md:flex-wrap max-md:items-start ">
          <div
            title="Time Left"
            className=" py-2 px-4 bg-stone-200 whitespace-nowrap flex items-center gap-1 justify-center rounded-lg text-xs font-semibold text-dark-text"
          >
            <RxLapTimer className="text-base" />
            32 Minutes
          </div>
          <div
            title="Plate Number"
            className=" py-2 px-4 bg-stone-200 whitespace-nowrap flex items-center gap-2 justify-center rounded-lg text-xs font-semibold text-dark-text"
          >
            <FaRectangleAd className="text-base" />
            RAC435KG
          </div>
          <div
            title="Maximum Passengers"
            className=" py-2 px-4 bg-stone-200 whitespace-nowrap flex items-center gap-1 justify-center rounded-lg text-xs font-semibold text-dark-text"
          >
            <MdEventSeat className="text-base" />
            13 Seats Left
          </div>
        </div>
        <div className="w-full h-full flex justify-between items-start gap-0 max-md:flex-col ">
          <div className="w-full h-full flex flex-col justify-start items-start">
            <h1 className="text-dark-text font-bold text-2xl capitalize pt-2 flex items-center gap-0">
              <MdLocationOn className="text-[28px] text-main-color pb-1 " />
              Kigali - Rusizi
            </h1>
            <p className="text-dark-text/70 capitalize font-medium tracking-tight text-sm pb-2">
              Different Express - Coaster Bus
            </p>
            <div className="h-[1px] w-full bg-stone-200 mt-1"></div>
            <div className="flex items-center justify-start max-md:items-start ga-2 mt-3 max-md:gap-12">
              <div className="flex flex-col items-start justify-start gap-0">
                <p className="text-dark-text/70 capitalize font-medium tracking-tight flex items-center justify-start gap-1 text-sm">
                  <LuAlarmClock className="text-base pb-[2px] text-dark-text/70 " />
                  departure time
                </p>
                <h1 className="text-dark-text font-bold text-xl ">8:00 am</h1>
              </div>
              <div className="px-5 text-sm h-full text-dark-text/30 max-md:hidden">
                &bull; &bull; &bull; &bull;
              </div>
              <div className="flex flex-col items-start justify-start gap-0">
                <p className="text-dark-text/70 capitalize font-medium tracking-tight flex items-center justify-start gap-1 text-sm">
                  <LuAlarmClock className="text-base pb-[2px] text-dark-text/70 " />
                  Estimated Arrival Time
                </p>
                <h1 className="text-dark-text font-bold text-xl ">9:20 am</h1>
              </div>
            </div>
          </div>
          <div className="min-w-fit w-fit min-h-full border-l-[1px] max-md:border-l-[0px] max-md:pt-10 max-md:w-full border-border-lines-light pl-4 pb-2 max-md:pl-0 flex flex-col justify-end items-center">
            <h1 className="text-dark-text font-bold text-xl ">3,880.00 rwf</h1>
            <p className="text-dark-text/70 capitalize font-medium tracking-tight text-sm mb-5 max-md:mb-3">
              Journey Price
            </p>
            <button className="h-[40px] max-md:w-full px-8 bg-main-color text-white shadow-xl font-semibold rounded-lg text-sm flex items-center justify-center gap-1 cursor-pointer transition active:scale-95 ">
              <MdOutlineShoppingCartCheckout className="text-xl" />
              Buy Ticket
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

export default Ticket;
