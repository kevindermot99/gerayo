import React, {useEffect, useState} from "react";
import { TbListDetails } from "react-icons/tb";
import { LuCalendar } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsBusFront } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SlOptions } from "react-icons/sl";

function Ticket({ location, leavingAt, agency, price, src }) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    function parseTime(timeStr) {
      const [time, modifier] = timeStr.split(" ");
      let [hours, minutes] = time.split(":");
      if (modifier === "PM" && hours !== "12") {
        hours = parseInt(hours, 10) + 12;
      }
      if (modifier === "AM" && hours === "12") {
        hours = 0;
      }
      return { hours: parseInt(hours, 10), minutes: parseInt(minutes, 10) };
    }

    const { hours, minutes } = parseTime(leavingAt.toUpperCase());
    const leavingTime = new Date();
    leavingTime.setHours(hours, minutes, 0, 0);

    function updateCountdown() {
      const now = new Date();
      let difference = leavingTime - now;

      if (difference < 0) {
        difference += 24 * 60 * 60 * 1000; // Add 24 hours in milliseconds if time is negative
      }

      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(
        `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
      );
    }

    const timerId = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call to set the time immediately

    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, [leavingAt]);

  return (
    <div className="w-full min-h-[100px] bg-body-color-light dark:bg-[#282828]/40 rounded-xl py-3 px-4 shadow-sm overflow-clip">
      <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
        <span className="flex items-center">
          <MdOutlineLocationOn className="text-xl " />
          {location}
        </span>
        <button>
          <SlOptions />
        </button>
      </h1>
      <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
        Leaving at <span className="font-bold ">{leavingAt}</span>
      </p>
      <div className="flex items-center justify-between w-full pt-2">
        <div className="flex items-center gap-2 w-fit max-w-[70%] ">
          <img
            src={src}
            className="h-7 aspect-square rounded-full  bg-border-lines-light/40"
          />
          <p className="text-xs font-semibold text-dark-text truncate   ">
            {agency}
          </p>
        </div>
        <h1 className="tracking-tight font-bold text-sm text-dark-text w-fit">
          {numberWithCommas(price)} rwf
        </h1>
      </div>
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center">
          <button className="text-xl pr-3 text-dark-text/70 hover:text-main-color font-medium">
            <LuCalendar className="text-base" />
          </button>
          <button className="text-xl pr-3 text-dark-text/70 hover:text-main-color font-medium">
            <BsBusFront className="text-base" />
          </button>
          <button className="text-xl pr-3 flex items-center gap-1 text-dark-text/70 hover:text-main-color font-medium">
            <IoMdShare className="text-base" />
          </button>
        </div>
        <p className="text-dark-text/50 font-bold text-sm ">{timeLeft}</p>
      </div>
    </div>
  );
}

export default Ticket;
