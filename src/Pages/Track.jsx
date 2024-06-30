import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import { RiRouteFill } from "react-icons/ri";
import { MdMyLocation } from "react-icons/md";
import { TbBusStop } from "react-icons/tb";
import { PiSealWarningBold } from "react-icons/pi";
import Bus from "../Components/Bus";
import { TiPin } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiTicketDuotone } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";

function Track() {
  const [visited, setVisited] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const visitadAs = localStorage.getItem("visitedAs");
    if (!visitadAs) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <div className="w-full h-fit sticky top-0 z-20 bg-white max-md:hidden ">
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

      {/* phone Menu */}
      <div className="h-[60px] w-full border-b-[1px] border-border-lines-light hidden max-md:flex items-center justify-between px-20 max-md:px-4 sticky top-0 z-20 bg-white">
        <h1 className=" font-bold text-[26px] tracking-tighter text-dark-text pr-8 pointer-events-none select-none ">
          Find my bus
        </h1>
        <button
          className=" h-8 aspect-square flex items-center justify-center rounded-full group mr-[7px] active:scale-95 select-none"
          title="Notifications"
        >
          <IoNotificationsOutline className="text-2xl text-dark-text dark:text-white/70 group-hover:text-main-color " />
        </button>
      </div>

      <div className="h-[70px] w-full border-t-[1px] border-border-lines-light hidden max-md:grid grid-cols-4 px-20 max-md:px-2 fixed bottom-0 left-0 z-50 bg-white">
        <Link
          to={`/`}
          className="flex flex-col items-center justify-center gap-[2px]"
        >
          <TbBusStop
            className={`text-[23px] max-h-6 ${
              location.pathname === "/" ? "text-main-color" : ""
            }`}
          />
          <p
            className={`text-xs tracking-tight font-semibold line-clamp-1  ${
              location.pathname === "/" ? "text-main-color" : "text-dark-text"
            }`}
          >
            Bus
          </p>
        </Link>
        <Link
          to={`/ticket`}
          className="flex flex-col items-center justify-center gap-[2px]"
        >
          <PiTicketDuotone
            className={`text-[23px] max-h-6 ${
              location.pathname === "/ticket" ? "text-main-color" : ""
            }`}
          />
          <p
            className={`text-xs tracking-tight font-semibold line-clamp-1  ${
              location.pathname === "/ticket" ? "text-main-color" : "text-dark-text"
            }`}
          >
            Tickets
          </p>
        </Link>
        <Link
          to={``}
          className="flex flex-col items-center justify-center gap-[2px]"
        >
          <LuSearch
            className={`text-[23px] max-h-6 ${location.pathname === "/" ? "" : ""} `}
          />
          <p
            className={`text-xs tracking-tight font-semibold line-clamp-1  ${
              location.pathname === "" ? "text-main-color" : "text-dark-text"
            }`}
          >
            Search
          </p>
        </Link>
        <Link
          to={`/profile`}
          className="flex flex-col items-center justify-center gap-[2px]"
        >
          <div
            // onClick={showMenu}
            className={`h-6 aspect-square hover:bg-border-lines-light/50 rounded-full flex items-center justify-center
            }`}
          >
            <p className="bg-orange-500 text-white w-full h-full font-bold rounded-full flex items-center justify-center ">
              G
            </p>
          </div>
          <p
            className={`text-xs tracking-tight font-semibold line-clamp-1  ${
              location.pathname === "" ? "text-main-color" : "text-dark-text"
            }`}
          >
            Profile
          </p>
        </Link>
      </div>
      {/* --------- */}

      <div className="w-full h-fit flex bg-body-color-light ">
        <div className=" w-full min-h-full">
          {/* content */}
          <div className="w-full h-fit py-10 px-20 max-md:px-4 max-sm:py-7">
            <p className="text-dark-text font-bold tracking-tight text-sm">
              Showing 132 Buses
            </p>
            {/* tabs */}
            <div className="w-full h-fit flex items-center justify-between max-md:justify-start  gap-2 py-3 max-md:overflow-x-auto hidescrollbar">
              <div className="flex items-center justify-start gap-2">
                <Link
                  to={`/`}
                  className="text-dark-text whitespace-nowrap font-medium tracking-tight text-sm bg-stone-100 py-2 px-4 rounded-lg flex items-center justify-center gap-1"
                >
                  <TbBusStop className="text-xl" />
                  All Buses
                </Link>
                <Link
                  to={`/`}
                  className="text-dark-text whitespace-nowrap font-medium tracking-tight text-sm hover:bg-stone-100 py-2 px-4 rounded-lg flex items-center justify-center gap-1"
                >
                  <RiRouteFill className="text-xl" />
                  On Route
                </Link>
                <Link
                  to={`/`}
                  className="text-dark-text whitespace-nowrap font-medium tracking-tight text-sm hover:bg-stone-100 py-2 px-4 rounded-lg flex items-center justify-center gap-1"
                >
                  <MdMyLocation className="text-xl" />
                  Near Me
                </Link>
              </div>
              <div className="flex items-center justify-start">
                <Link
                  to={`/`}
                  className="text-dark-text whitespace-nowrap font-medium tracking-tight hover:bg-stone-100 text-sm py-2 px-4 rounded-lg flex items-center justify-center gap-1"
                >
                  <TiPin className="text-xl" />
                  Pinned (0)
                </Link>
              </div>
            </div>

            {/* warning */}
            <div className="h-[40px] w-fit rounded-lg bg-main-color/5 ring-1 ring-main-color/30 text-main-color font-bold flex items-center justify-start px-4 text-xs gap-2 my-1 max-md:mb-8 ">
              <PiSealWarningBold className="text-xl" />
              This information might take a minute or two to update.
            </div>

            {/* Buses */}
            <div className="flex flex-col items-start justify-startn h-fit w-full">
              
              {loading ? (
                <>
                  <div className="w-full h-[300px] flex items-start justify-center p-5">
                    <CgSpinner className="animate-spinLoader text-3xl text-dark-text/40 " />
                  </div>
                </>
              ) : (
                <>
                  <Bus />
              <Bus />
              <Bus />
              <Bus />
                </>
              )}
            </div>
          </div>

          <div className="flex items-center justify-center text-sm text-dark-text/70 font-medium pb-10">
            You have reached the bottom{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Track;
