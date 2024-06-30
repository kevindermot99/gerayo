import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { IoLanguageOutline } from "react-icons/io5";

function Navbar({ title }) {
  const [profileMenu, setProfileMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const showMenu = () => {
    setProfileMenu(!profileMenu);
  };

  const logMeOut = () => {
    localStorage.removeItem("visitedAs");
    window.location.reload();
  };

  return (
    <div className="h-[60px] px-20 max-md:px-4 border-b-[1px] border-border-lines-light dark:border-border-lines-dark flex items-center justify-between bg-white">
      {/* Profile Menu overlay */}
      <div
        onClick={() => setProfileMenu(false)}
        className={`bg-transparent fixed top-0 left-0 w-full h-full ${
          profileMenu
            ? "transition ease-in-out duration-200 opacity-100  z-30"
            : "hidden"
        }`}
      ></div>

      {/* Menu */}
      <div className="flex items-center justify-start gap-0">
        {/* <img src="" alt="" /> */}
        <img
          src={Logo}
          className=" h-[28px] pointer-events-none select-none"
        ></img>
        <h1 className=" font-bold text-[26px] tracking-tighter text-main-color pr-8 pointer-events-none select-none ">
          gerayo.
        </h1>
        <Link
          to={`/`}
          className={`text-dark-text font-medium tracking-tight text-sm  hover:bg-stone-100 py-2 px-4 rounded-lg relative ${
            location.pathname === "/" ? "bg-stone-100 " : ""
          }`}
        >
          Find my bus
          <span className={`h-[6px] w-[20px] bg-main-color rounded-md ring-4 ring-white absolute bottom-[-3px] left-0 right-0 mx-auto ${location.pathname === '/' ? 'flex' : 'hidden'
          }`}></span>
        </Link>
        <Link
          to={`/ticket`}
          className={`text-dark-text font-medium tracking-tight text-sm  hover:bg-stone-100 py-2 px-4 rounded-lg relative ${
            location.pathname === "/ticket" ? "bg-stone-100" : ""
          }`}
        >
          Buy Ticket
          <span className={`h-[6px] w-[20px] bg-main-color rounded-md ring-4 ring-white absolute bottom-[-3px] left-0 right-0 mx-auto ${location.pathname === '/ticket' ? 'flex' : 'hidden'
          }`}></span>
        </Link>
      </div>
      <div className="w-fit flex items-center justify-end gap-3">
        <Link
          to={`/`}
          className="text-dark-text font-medium tracking-tight text-sm  hover:bg-stone-100 py-2 px-4 rounded-lg"
        >
          Help Center
        </Link>
        <button
          className=" h-8 aspect-square flex items-center justify-center rounded-full group active:scale-95 select-none"
          title="Search"
        >
          <BiSearch className="text-2xl text-dark-text dark:text-white/70 group-hover:text-main-color " />
        </button>
        <button
          className=" h-8 aspect-square flex items-center justify-center rounded-full group mr-[7px] active:scale-95 select-none"
          title="Notifications"
        >
          <IoNotificationsOutline className="text-2xl text-dark-text dark:text-white/70 group-hover:text-main-color " />
        </button>
        <div className="flex cursor-pointer select-none relative" title="Guest">
          <div
            onClick={showMenu}
            className={`h-8 active:scale-95 aspect-square hover:bg-border-lines-light/50 rounded-full flex items-center justify-center ${
              profileMenu ? "z-30" : ""
            }`}
          >
            <p className="bg-orange-500 text-white w-full h-full font-bold rounded-full flex items-center justify-center ">
              G
            </p>
          </div>

          {/* dropdown */}
          <div
            className={`bg-white min-h-[180px] w-[230px] absolute top-[40px] rounded-xl right-0 overflow-clip border-[1px] border-border-lines-light flex flex-col items-center justify-start p-2 origin-top-right ${
              profileMenu ? "flex z-30 " : "hidden -z-10"
            }`}
          >
            <button className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3">
              <VscAccount className="text-[23px] text-dark-text/60" />
              <h1 className="text-dark-text font-medium tracking-tight text-sm capitalize ">
                Profile
              </h1>
            </button>
            <button className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3">
              <FiSettings className="text-[23px] text-dark-text/60" />
              <h1 className="text-dark-text font-medium tracking-tight text-sm capitalize ">
                Settings
              </h1>
            </button>
            <button className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3">
              <FiHelpCircle className="text-[23px] text-dark-text/60" />
              <h1 className="text-dark-text font-medium tracking-tight text-sm capitalize">
                Support Center
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
      </div>
    </div>
  );
}

export default Navbar;
