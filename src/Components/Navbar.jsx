import React, { useEffect, useState } from "react";
import { IoCreate, IoNotifications, IoNotificationsOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { IoLanguageOutline } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi2";
import { CgSpinner } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { TfiHelpAlt } from "react-icons/tfi";
import { LuBell, LuCalendarPlus, LuHelpCircle, LuInfo } from "react-icons/lu";
import { BsCalendar2DateFill, BsInfoCircle } from "react-icons/bs";
import { FaRoad } from "react-icons/fa";
import { TbHelpOctagonFilled } from "react-icons/tb";

function Navbar({ show, showPf, guestEmail }) {
  const [profileMenu, setProfileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [loggingOut, setLoggingOut] = useState(false);

  const showMenu = () => {
    setProfileMenu(!profileMenu);
  };

  const logMeOut = () => {
    localStorage.removeItem("visitedAs");
    setLoggingOut(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="h-[70px] px-10 max-md:px-4 border-b-[0px] flex items-center justify-between max-md:hidden">
      {/* Profile Menu overlay */}
      <div
        onClick={() => setProfileMenu(false)}
        className={` fixed top-0 left-0 w-full h-full min-h-svh ${
          profileMenu
            ? "transition ease-in-out duration-200 opacity-100  z-30"
            : "hidden"
        }`}
      ></div>

      {/* Menu */}
      <div className="flex items-center justify-start gap-2">
        {/* <img src="" alt="" /> */}
        <div className="w-fit h-fit flex items-center justify-start">
          <MdLocationOn className="text-[30px] text-main-color translate-y-[1px] translate-x-[3px]" />
          <h1 className=" font-bold text-[26px] tracking-tighter text-main-color pr-8 pointer-events-none select-none ">
            gerayo
          </h1>
        </div>

        <Link
          to={`/`}
          className={`font-medium text-sm  hover:bg-white dark:hover:bg-container-dark-2 py-2 px-5 rounded-full relative ${
            location.pathname === "/"
              ? "text-black dark:text-white bg-white dark:bg-container-dark ring-1 dark:ring-transparent ring-slate-200/40 "
              : "text-dark-text dark:text-light-text "
          }`}
        >
          Find my bus
          {/* <span
            className={`h-[6px] w-[20px] bg-main-color rounded-full ring-4 ring-white absolute bottom-[-3px] left-0 right-0 mx-auto ${
              location.pathname === "/" ? "flex" : "hidden"
            }`}
          ></span> */}
        </Link>
        <Link
          to={`/ticket`}
          className={` font-medium text-sm hover:bg-white dark:hover:bg-container-dark-2 py-2 px-5 rounded-full relative ${
            location.pathname === "/ticket"
              ? "text-black dark:text-white bg-white dark:bg-container-dark ring-1 dark:ring-transparent ring-slate-200/40"
              : "text-dark-text dark:text-light-text"
          }`}
        >
          Buy Tickets
          {/* <span
            className={`h-[6px] w-[20px] bg-main-color rounded-full ring-4 ring-white absolute bottom-[-3px] left-0 right-0 mx-auto ${
              location.pathname === "/ticket" ? "flex" : "hidden"
            }`}
          ></span> */}
        </Link>
      </div>
      <div className="w-fit flex items-center justify-end gap-5">
      <button
          onClick={show}
          className=" flex items-center justify-center group active:scale-95 select-none"
          title="Notifications"
        >
          <LuCalendarPlus className="text-xl text-dark-text dark:text-light-text group-hover:text-dark-text dark:group-hover:text-white " />
        </button>
        <button
          onClick={show}
          className=" flex items-center justify-center group active:scale-95 select-none"
          title="Notifications"
        >
          <LuBell className="text-xl text-dark-text dark:text-light-text group-hover:text-dark-text dark:group-hover:text-white " />
        </button>
        <div className="flex cursor-pointer select-none relative ml-1">
          <div
            onClick={showPf}
            className={`h-8 w-fit active:scale-95 rounded-full flex items-center justify-center ${
              profileMenu ? "z-30" : ""
            }`}
            title={`Guest${guestEmail}`}
          >
            <p
              className={`bg-orange-500 text-white w-auto h-full aspect-square font-bold rounded-full flex items-center justify-center `}
            >
              G
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
