import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineErrorOutline } from "react-icons/md";
import { TiInfoLarge, TiPin } from "react-icons/ti";
import { MdLocationOn } from "react-icons/md";
import { LuAlarmClock, LuInfo } from "react-icons/lu";
import { MdEventSeat } from "react-icons/md";
import { FaRectangleAd } from "react-icons/fa6";
import { TbRadarFilled } from "react-icons/tb";
import { PiWavesThin } from "react-icons/pi";
import { GiHeavyRain } from "react-icons/gi";

function Bus({
  id,
  plateNumber,
  numberOfSeats,
  from,
  to,
  busType,
  departureAt,
  arrivalTime,
  price,
}) {
  return (
    <div className="w-full h-fit overflow-clip bg-white ring-1 ring-slate-200/40 mt-0 rounded-xl flex flex-col text-start justify-start p-4 relative">
      {/* icon */}
      {/* <div className="h-[50px] aspect-square rounded-full absolute top-[-25px] right-8 z-10 bg-white p-2 ">
        <img
          src="https://img.icons8.com/?size=96&id=WuEAfdVu7ugL&format=png"
          alt=""
        />
      </div> */}
      <GiHeavyRain className="absolute -right-2 -top-8 rotate-[50deg] text-[90px] text-stone-100" />
      <div className="flex flex-col items-center justify-start max-md:items-start gap-2 z-10">
        <div className="w-full flex items-center justify-start gap-2 max-md:max-w-[90%] max-md:flex-wrap max-md:items-start ">
          <div
            title="Bus Plate Number"
            className=" py-2 px-4 bg-stone-100 whitespace-nowrap flex items-center gap-2 justify-center rounded-full text-xs font-semibold text-dark-text"
          >
            <FaRectangleAd className="text-base opacity-30" />
            {plateNumber}
          </div>
          <div
            title="Bus Maximum Passengers"
            className=" py-2 px-4 bg-stone-100 whitespace-nowrap flex items-center gap-1 justify-center rounded-full text-xs font-semibold text-dark-text"
          >
            <MdEventSeat className="text-base opacity-30" />
            {numberOfSeats} Seats max
          </div>
        </div>
        <div className="w-full h-full flex justify-between items-start gap-0 max-md:flex-col ">
          <div className="w-full h-full flex flex-col justify-start items-start">
            <h1 className="text-dark-text font-bold text-xl capitalize pt-2 flex items-center gap-0">
              <MdLocationOn className="text-[28px] text-main-color pb-1 " />
              {from} - {to}
            </h1>
            <p className="text-dark-text/50 capitalize font-medium tracking-tight text-sm pb-2">
              {busType}
            </p>
            <div className="h-[1px] w-full bg-stone-200 mt-1"></div>
            <div className="w-full flex items-center justify-between max-md:items-start ga-2 mt-3 pr-4 max-md:gap-12">
              <div className="flex flex-col items-start justify-start gap-0">
                <p className="text-dark-text/50 capitalize font-medium tracking-tight flex items-center justify-start gap-1 text-sm">
                  <LuAlarmClock className="text-base pb-[2px] text-dark-text/50 " />
                  departure time
                </p>
                <h1 className="text-dark-text font-bold text-base ">
                  {departureAt}
                </h1>
              </div>
              <div className="flex flex-col items-end justify-start gap-0">
                <p className="text-dark-text/50 capitalize font-medium tracking-tight flex items-center justify-start gap-1 text-sm">
                  <LuAlarmClock className="text-base pb-[2px] text-dark-text/50 " />
                  Estimated Arrival Time
                </p>
                <h1 className="text-dark-text font-bold text-base ">
                  {arrivalTime}
                </h1>
              </div>
            </div>
          </div>
          <div className="min-w-fit w-fit min-h-full max-md:pt-10 max-md:w-full border-border-lines-light pl-4 pb-2 max-md:pl-0  flex flex-col justify-end items-center">
            <h1 className="text-dark-text font-bold text-base ">{price} rwf</h1>
            <p className="text-dark-text/70 capitalize font-medium tracking-tight text-sm mb-5 max-md:mb-3">
              Travel Cost
            </p>
            <button className="h-[40px] w-[160px] max-md:w-full px-2 bg-main-color text-white font-semibold rounded-full text-sm flex items-center justify-center gap-1 cursor-pointer transition active:scale-95 ">
              <FaMapLocationDot className="text-xl" />
              Track Bus
            </button>
            <button className="h-[40px] backdrop-blur-md ring-1 ring-slate-300/50 w-[160px] mt-2 max-md:w-full px-2 bg-stone-200/50 text-dark-text/60 font-semibold rounded-full text-sm flex items-center justify-center gap-1 cursor-pointer transition active:scale-95 ">
              <LuInfo className="text-xl" />
              More info
            </button>
          </div>
        </div>
        <div className="w-full pt-3 flex items-center justify-between">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bus;
