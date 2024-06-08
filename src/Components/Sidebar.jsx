import React from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
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

function Sidebar() {
  return (
    <div className="min-w-[250px] w-[250px] border-r-[1px] border-border-lines-light flex flex-col max-h-dvh ">
      <div className=" w-full h-[60px] flex items-center justify-between px-3 mb  mt-1 mb-4">
        <div className="flex">
          {/* <img src="" alt="" /> */}
          <h1 className="font-Comfortaa font-bold text-[26px] tracking-tighter text-main-color  ">
            gerayo
          </h1>
        </div>
        <button className=" p-2 rounded-full hover:bg-border-lines-light/60 active:scale-95 ">
          <AiOutlineDoubleLeft />
        </button>
      </div>

      <div className="w-full h-full sidebar pb-3">
        {/* Journey */}
        <div className="mt-0 flex flex-col px-3">
          <h1 className="uppercase text-dark-text/80 tracking-tight text-xs px-3 mb-2">
            Journey
          </h1>
          <div className="w-full">
            <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-border-lines-light/60 group">
              <MdModeOfTravel className=" text-xl text-dark-text/50 mx-[2px] group-hover:text-main-color " />
              <h1 className="text-dark-text font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                Buy a Ticket
              </h1>
            </Link>
            <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-border-lines-light/60 group">
              <LuCalendarCheck className=" text-xl text-dark-text/50 mx-[2px] group-hover:text-main-color " />
              <h1 className="text-dark-text font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                My Tickets
              </h1>
            </Link>
            <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-border-lines-light/60 group">
              <RiMapPinTimeLine className=" text-xl text-dark-text/50 mx-[2px] group-hover:text-main-color " />
              <h1 className="text-dark-text font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                Upcoming Journeys
              </h1>
            </Link>
            <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-border-lines-light/60 group">
              <LuWallet className=" text-xl text-dark-text/50 mx-[2px] group-hover:text-main-color " />
              <h1 className="text-dark-text font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                Wallet
              </h1>
            </Link>
            <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-border-lines-light/60 group">
              <FiUsers className=" text-xl text-dark-text/50 mx-[2px] group-hover:text-main-color " />
              <h1 className="text-dark-text font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                Agencies
              </h1>
            </Link>
          </div>
        </div>

        {/* Private */}
        <div className="mt-6 flex flex-col px-3">
          <h1 className="uppercase text-dark-text/80 tracking-tight text-xs px-3 mb-2">
            Travel Private
          </h1>
          <div className="w-full">
            <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-border-lines-light/60 group">
              <RiVipCrown2Line className=" text-xl text-dark-text/50 mx-[2px] group-hover:text-main-color " />
              <h1 className="text-dark-text font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                Vip Cabs
              </h1>
            </Link>
            <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-border-lines-light/60 group">
              <MdOutlineFamilyRestroom className=" text-xl text-dark-text/50 mx-[2px] group-hover:text-main-color " />
              <h1 className="text-dark-text font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                Family trip
              </h1>
            </Link>
            <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-border-lines-light/60 group">
              <TbCarSuv className=" text-xl text-dark-text/50 mx-[2px] group-hover:text-main-color " />
              <h1 className="text-dark-text font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                Rent a car
              </h1>
            </Link>
          </div>
        </div>

        {/* Management */}
        <div className="mt-6 flex flex-col px-3">
          <h1 className="uppercase text-dark-text/80 tracking-tight text-xs px-3 mb-2">
            Management
          </h1>
          <div className="w-full">
            <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-border-lines-light/60 group">
              <TbHistoryToggle className=" text-xl text-dark-text/50 mx-[2px] group-hover:text-main-color " />
              <h1 className="text-dark-text font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                History
              </h1>
            </Link>
            <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-border-lines-light/60 group">
              <FiSettings className=" text-xl text-dark-text/50 mx-[2px] group-hover:text-main-color " />
              <h1 className="text-dark-text font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                Settings
              </h1>
            </Link>
            <Link className="flex gap-2 items-center px-2 py-3 rounded-lg hover:bg-border-lines-light/60 group">
              <FiHelpCircle className=" text-xl text-dark-text/50 mx-[2px] group-hover:text-main-color " />
              <h1 className="text-dark-text font-semibold tracking-tight text-sm capitalize group-hover:text-main-color ">
                Support Center
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
