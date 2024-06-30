import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { HiOutlineViewBoards } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";
import { LuCalendar } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsBusFront } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { SlOptions } from "react-icons/sl";
import Ticket from "../Components/Ticket";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { RiRouteFill } from "react-icons/ri";
import { MdMyLocation } from "react-icons/md";
import { TbBusStop } from "react-icons/tb";
import { PiSealWarningBold } from "react-icons/pi";
import Bus from "../Components/Bus";
import { TiPin } from "react-icons/ti";


function Track() {
  const [visited, setVisited] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const visitadAs = localStorage.getItem("visitedAs");
    if (!visitadAs) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="w-full h-fit sticky top-0 z-20 bg-white">
        <Navbar title="Home" />
        <div className="h-[50px] w-full border-b-[1px] border-border-lines-light flex items-center justify-start px-20 max-md:px-4">
          <form className="h-full w-full flex items-center justify-start py-2 gap-0 relative">
            <input
              placeholder="From"
              type="text"
              className="bg-stone-100 h-full w-full max-w-[200px] rounded-md outline-stone-200 px-3 font-medium tracking-tight text-sm z-0"
            />
            <div className="bg-main-color text-white h-full flex items-center justify-center aspect-square rounded-full ring-4 ring-white z-10 ">
              <FaArrowRightLong className="text-md" />
            </div>
            <input
              placeholder="To"
              type="text"
              className="bg-stone-100 h-full w-full max-w-[200px] rounded-md outline-stone-200 px-3 font-medium tracking-tight text-sm z-0"
            />
            <button className="h-full px-3 bg-main-color ml-1 rounded-md flex items-center justify-center text-white font-semibold text-sm tracking-tight transition active:scale-[0.98] whitespace-nowrap gap-1">
              <LuSearch className="text-base" />
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="w-full h-fit flex bg-body-color-light dark:bg-body-color-dark ">
        <div className=" w-full min-h-full">
          {/* content */}
          <div className="w-full h-fit py-10 px-20 max-sm:px-4 max-sm:py-7">
            <p className="text-dark-text font-bold tracking-tight text-sm">
              Showing 132 Buses
            </p>
            {/* tabs */}
            <div className="w-full h-fit flex items-center justify-between gap-2 py-3">
              <div className="flex items-center justify-start">
                <Link
                  to={`/`}
                  className="text-dark-text font-medium tracking-tight text-sm bg-stone-100 py-2 px-4 rounded-lg flex items-center justify-center gap-1"
                >
                  <TbBusStop className="text-xl" />
                  All Buses
                </Link>
                <Link
                  to={`/`}
                  className="text-dark-text font-medium tracking-tight text-sm py-2 px-4 rounded-lg flex items-center justify-center gap-1"
                >
                  <RiRouteFill className="text-xl" />
                  On Route
                </Link>
                <Link
                  to={`/`}
                  className="text-dark-text font-medium tracking-tight text-sm py-2 px-4 rounded-lg flex items-center justify-center gap-1"
                >
                  <MdMyLocation className="text-xl" />
                  Near Me
                </Link>
              </div>
              <div className="flex items-center justify-start">
              <Link
                  to={`/`}
                  className="text-dark-text font-medium tracking-tight hover:bg-stone-100 text-sm py-2 px-4 rounded-lg flex items-center justify-center gap-1"
                >
                  <TiPin className="text-xl" />
                  Pinned (0)
                </Link>
              </div>
            </div>

            {/* warning */}
            <div className="h-[40px] w-fit rounded-lg bg-main-color/5 ring-1 ring-main-color/30 text-main-color font-bold flex items-center justify-start px-4 text-xs gap-2 my-1 ">
              <PiSealWarningBold className="text-xl" />
              This information might take a minute or two to update.
            </div>

            {/* Buses */}
            <div className="flex flex-col items-start justify-startn h-fit w-full">
              <Bus />
              <Bus />
              <Bus />
              <Bus />
            </div>
          </div>

          <div className="flex items-center justify-center text-sm text-dark-text/70 font-medium pb-10">You have reached the bottom </div>
        </div>
      </div>
    </>
  );
}

export default Track;
