import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdModeOfTravel } from "react-icons/md";
import { LuCalendarCheck } from "react-icons/lu";
import { LuWallet } from "react-icons/lu";
import { RiMapPinTimeLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { TbHistoryToggle } from "react-icons/tb";
import { RiVipCrown2Line } from "react-icons/ri";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { TbCarSuv } from "react-icons/tb";
import { HiMenuAlt2 } from "react-icons/hi";

function Sidebar() {
  const [sidebar, setSidebar] =  useState(false)

  const showsidebar = () => {
    setSidebar(true)
  }

  const hidesidebar = () => {
    setSidebar(false)
  }


  return (
    <>
    <div className="absolute left-3 top-[18px] cursor-pointer " onClick={showsidebar}><HiMenuAlt2 className="text-2xl text-dark-text dark:text-white/70" /></div>
      <div className={`min-w-[250px] w-[250px] border-r-[1px] bg-body-color-light dark:bg-body-color-dark z-30 border-border-lines-light dark:border-border-lines-dark flex flex-col max-h-dvh max-lg:fixed transition-all duration-300  ${sidebar ? 'max-lg:left-[0px]' : 'max-lg:left-[-250px] '}`}>
        <div className=" w-full h-[60px] flex items-center justify-between px-3 mb  mt-1 mb-4">
          <div className="flex items-center justify-start">
            {/* <img src="" alt="" /> */}
            <h1 className=" font-bold text-[32px] tracking-tighter text-main-color pl-3  ">
              g
            </h1>
            <h1 className=" font-bold text-[32px] tracking-tighter text-main-color pr-3  ">
              erayo.
            </h1>
          </div>
          <button onClick={hidesidebar} className="active:scale-95 group lg:hidden ">
            <IoCloseCircleOutline className="text-[30px] text-dark-text/70 dark:text-light-text group-hover:text-main-color" />
          </button>
        </div>

        <div className="w-full h-full sidebar pb-3">
          {/* Journey */}
          <div className="mt-0 flex flex-col px-3">
            <h1 className="uppercase text-dark-text/80 dark:text-light-text tracking-tight text-xs px-3 mb-2">
              Journey
            </h1>
            <div className="w-full">
            <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-stone-100  dark:hover:bg-stone-600/20 group">
                <RiMapPinTimeLine className=" text-xl text-dark-text/50 dark:text-light-text mx-[2px] group-hover:text-main-color " />
                <h1 className="text-dark-text dark:text-white/70 font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                  Find my bus
                </h1>
              </Link>
              <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-stone-100  dark:hover:bg-stone-600/20 group">
                <MdModeOfTravel className=" text-xl text-dark-text/50 dark:text-light-text mx-[2px] group-hover:text-main-color " />
                <h1 className="text-dark-text dark:text-white/70 font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                  Buy a Ticket
                </h1>
              </Link>
              <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-stone-100  dark:hover:bg-stone-600/20 group">
                <LuCalendarCheck className=" text-xl text-dark-text/50 dark:text-light-text mx-[2px] group-hover:text-main-color " />
                <h1 className="text-dark-text dark:text-white/70 font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                  My Tickets
                </h1>
              </Link>
              <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-stone-100  dark:hover:bg-stone-600/20 group">
                <FiUsers className=" text-xl text-dark-text/50 dark:text-light-text mx-[2px] group-hover:text-main-color " />
                <h1 className="text-dark-text dark:text-white/70 font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                  Agencies
                </h1>
              </Link>
            </div>
          </div>

          {/* Private */}
          <div className="mt-6 flex flex-col px-3">
            <h1 className="uppercase text-dark-text/80 dark:text-light-text tracking-tight text-xs px-3 mb-2">
              Travel Private
            </h1>
            <div className="w-full">
              <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-600/20 group">
                <RiVipCrown2Line className=" text-xl text-dark-text/50 dark:text-light-text mx-[2px] group-hover:text-main-color " />
                <h1 className="text-dark-text dark:text-white/70 font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                  Vip Cabs
                </h1>
              </Link>
              <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-stone-100  dark:hover:bg-stone-600/20 group">
                <TbCarSuv className=" text-xl text-dark-text/50 dark:text-light-text mx-[2px] group-hover:text-main-color " />
                <h1 className="text-dark-text dark:text-white/70 font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                  Rent a car
                </h1>
              </Link>
            </div>
          </div>

          {/* Management */}
          <div className="mt-6 flex flex-col px-3">
            <h1 className="uppercase text-dark-text/80 dark:text-light-text tracking-tight text-xs px-3 mb-2">
              Management
            </h1>
            <div className="w-full">
              <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-stone-100  dark:hover:bg-stone-600/20 group">
                <TbHistoryToggle className=" text-xl text-dark-text/50 dark:text-light-text mx-[2px] group-hover:text-main-color " />
                <h1 className="text-dark-text dark:text-white/70 font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                  History
                </h1>
              </Link>
              <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-stone-100  dark:hover:bg-stone-600/20 group">
                <FiSettings className=" text-xl text-dark-text/50 dark:text-light-text mx-[2px] group-hover:text-main-color " />
                <h1 className="text-dark-text dark:text-white/70 font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                  Settings
                </h1>
              </Link>
              <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-stone-100  dark:hover:bg-stone-600/20 group">
                <FiHelpCircle className=" text-xl text-dark-text/50 dark:text-light-text mx-[2px] group-hover:text-main-color " />
                <h1 className="text-dark-text dark:text-white/70 font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                  Support Center
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
