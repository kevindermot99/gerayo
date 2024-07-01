import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { TbBusStop } from "react-icons/tb";
import { PiSealWarningBold } from "react-icons/pi";
import { TiPin } from "react-icons/ti";
import Ticket from "../Components/Ticket";
import { FiSunset } from "react-icons/fi";
import { FiSunrise } from "react-icons/fi";
import { PiTicketDuotone } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgSpinner } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { Helmet } from "react-helmet";
import { HiOutlineTicket } from "react-icons/hi2";

function Search({ guestEmail }) {
  const [visited, setVisited] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [profileMenu, setProfileMenu] = useState(false);

  const showMenu = () => {
    setProfileMenu(!profileMenu);
  };

  const logMeOut = () => {
    localStorage.removeItem("visitedAs");
    window.location.reload();
  };

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
    <div className="bg-white dark:bg-white min-h-svh text-dark-text">
      {/* Helmet */}
      <Helmet>
        <title>Buy Tickets | gerayo.</title>
      </Helmet>
      {/* Profile Menu overlay */}
      <div
        onClick={() => setProfileMenu(false)}
        className={`bg-transparent fixed top-0 left-0 w-full h-full ${
          profileMenu
            ? "transition ease-in-out duration-200 opacity-100  z-30"
            : "hidden"
        }`}
      ></div>
      <div className="w-full h-fit sticky top-0 z-20 bg-white max-md:hidden ">
        <Navbar guestEmail={guestEmail} />
      </div>

      {/* phone Menu */}
      <div className="h-[60px] w-full border-b-[1px] border-border-lines-light hidden max-md:flex items-center justify-between px-20 max-md:px-4 sticky top-0 z-20 bg-white">
        <h1 className=" font-bold text-[26px] tracking-tighter text-dark-text pr-8 pointer-events-none select-none ">
          Search
        </h1>
        <button
          className=" h-8 aspect-square flex items-center justify-center rounded-full group mr-[7px] active:scale-95 select-none"
          title="Notifications"
        >
          <IoNotificationsOutline className="text-2xl text-dark-text group-hover:text-main-color " />
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
              location.pathname === "/ticket"
                ? "text-main-color"
                : "text-dark-text"
            }`}
          >
            Tickets
          </p>
        </Link>
        <Link
          to={`/search`}
          className="flex flex-col items-center justify-center gap-[2px]"
        >
          <LuSearch
            className={`text-[23px] max-h-6 ${
              location.pathname === "/search" ? "text-main-color " : ""
            } `}
          />
          <p
            className={`text-xs tracking-tight font-semibold line-clamp-1  ${
              location.pathname === "/search" ? "text-main-color" : "text-dark-text"
            }`}
          >
            Search
          </p>
        </Link>
        <div
          onClick={showMenu}
          className="flex flex-col items-center justify-center gap-[2px] cursor-pointer"
        >
          <div
            className={`h-6 aspect-square select-none hover:bg-border-lines-light/50 rounded-full flex items-center justify-center
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
        </div>

        {/* dropdown */}
        <div
          className={`bg-white min-h-[180px] w-[90%] max-w-[250px] absolute bottom-[80px] rounded-xl right-3 overflow-clip border-[1px] border-border-lines-light flex flex-col items-center justify-start p-2 origin-bottom-right transition-all duration-200 ease-in-out ${
            profileMenu
              ? "opacity-100 visible z-30 translate-y-0"
              : "opacity-0 invisible -z-10 translate-y-2"
          }`}
        >
          <div className="h-[43px] min-h-[43px] w-full rounded-lg flex items-center cursor-default justify-start px-3 gap-3">
            <h1 className="text-dark-text font-medium tracking-tight whitespace-nowrap overflow-clip text-sm ">
              guest{guestEmail}@gmail.com
            </h1>
          </div>
          <button className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3">
            <VscAccount className="text-[23px] min-w-fit text-dark-text/60" />
            <h1 className="text-dark-text font-medium tracking-tight whitespace-nowrap overflow-clip text-sm capitalize ">
              Profile
            </h1>
          </button>
          <button className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3">
            <HiOutlineTicket className="text-[23px] min-w-fit text-dark-text/60" />
            <h1 className="text-dark-text font-medium tracking-tight whitespace-nowrap overflow-clip text-sm capitalize">
              My Tickets
            </h1>
          </button>
          <button className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3">
            <FiSettings className="text-[23px] min-w-fit text-dark-text/60" />
            <h1 className="text-dark-text font-medium tracking-tight whitespace-nowrap overflow-clip text-sm capitalize ">
              Settings
            </h1>
          </button>
          <div className="w-full h-[1px] bg-border-lines-light my-2"></div>
          <button
            onClick={logMeOut}
            className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3"
          >
            <HiOutlineLogout className="text-[23px] text-red-600/70" />
            <h1 className="text-dark-text font-medium tracking-tight text-sm capitalize group-hover:text-main-color ">
              Log Out
            </h1>
          </button>
        </div>
      </div>
      {/* --------- */}

      <div className="w-full h-fit flex items-start justify-start max-lg:flex-col max-lg:items-center bg-body-color-light px-20 max-md:px-4 gap-10 max-md:gap-5  ">
        <div className="w-full max-w-[300px] max-lg:max-w-full h-fit flex flex-col items-start justify-start py-7 max-lg:py-0 max-lg:pt-10 max-sm:pt-1 lg:sticky top-[60px] ">
          <h1 className=" font-bold text-[26px] tracking-tighter text-dark-text pointer-events-none select-none max-md:hidden ">
            Search
          </h1>
          <div className="h-fit w-full flex items-start justify-start">
            <form className="h-full w-full flex items-start justify-start flex-col py-3 gap-2 relative">
              <p className="text-dark-text/70 capitalize font-medium tracking-tight text-sm pt-2">
                Search for
              </p>
              <div className="w-full h-fit">
                <select
                  name=""
                  className="bg-stone-100 px-5 h-[45px] w-full text-sm font-medium rounded-xl ring-2 ring-transparent focus:ring-stone-200 mb-3 "
                >
                  <option value="ticket">Tickets</option>
                  <option value="bus">Local Bus</option>
                </select>
              </div>
              <div className="flex items-center justify-start w-full h-fit gap-3">
                <p className="text-dark-text/70 capitalize font-medium tracking-tight text-sm w-[50px]">
                  From
                </p>
                <input
                  placeholder="From"
                  type="text"
                  className="bg-stone-100 h-[45px] w-full rounded-xl ring-2 outline-none ring-transparent focus:ring-stone-200 px-5 font-medium tracking-tight text-sm z-0"
                />
              </div>
              <div className="flex items-center justify-start w-full h-fit gap-3">
                <p className="text-dark-text/70 capitalize font-medium tracking-tight text-sm w-[50px]">
                  To
                </p>
                <input
                  placeholder="To"
                  type="text"
                  className="bg-stone-100 h-[45px] w-full rounded-xl ring-2 outline-none ring-transparent focus:ring-stone-200 px-5 font-medium tracking-tight text-sm z-0"
                />
              </div>
              <button className="h-[45px] w-full mt-3 px-3 shadow-xl shadow-stone-100 bg-main-color rounded-xl flex items-center justify-center text-white font-semibold text-sm tracking-tight transition active:scale-[0.98] whitespace-nowrap gap-1">
                <LuSearch className="text-xl" />
                Search
              </button>
            </form>
          </div>
          
        </div>
        <div className=" w-full min-h-full ">
          {/* content */}
          <div className="w-full h-fit py-10 max-lg:py-0 max-lg:mb-12 ">
            <p className="text-dark-text font-bold tracking-tight text-sm">
              Showing 13 Results
            </p>

            {/* Buses */}
            <div className="flex flex-col items-start justify-startn h-fit w-full relative">
              {loading ? (
                <>
                  <div className="w-full h-fit flex items-start justify-center pt-5 pb-3">
                    <CgSpinner className="animate-spinLoader text-3xl text-dark-text/40 " />
                  </div>
                </>
              ) : (
                <>
                  <Ticket />
                  <Ticket />
                  <Ticket />
                  <Ticket />
                </>
              )}
            </div>
            {loading ? (
              <div className="flex items-center justify-center text-sm text-dark-text/70 font-medium">
                Fetching..
              </div>
            ) : (
              <div className="flex items-center justify-center text-sm text-dark-text/70 font-medium pt-8 max-md:pb-8">
                You have reached the bottom
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
