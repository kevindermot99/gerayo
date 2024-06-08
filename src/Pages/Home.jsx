import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { HiOutlineViewBoards } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";
import { LuCalendar } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsBusFront } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SlOptions } from "react-icons/sl";

function Home() {
  return (
    <div className="w-full h-full flex min-h-screen bg-body-color-light overflow-y-hidden max-h-dvh ">
      <Sidebar />
      <div className=" w-full min-h-full">
        <Navbar title="Buy a ticket" />
        <div className="h-[45px] py-3 px-5 w-full border-b-[1px] border-border-lines-light flex items-center justify-start gap-5">
          <button className="h-[45px] flex items-center justify-center gap-1 text-dark-text border-b-2 border-main-color select-none ">
            <HiOutlineViewBoards className="text-2xl text-main-color " />
            <p className="tracking-tight font-medium text-sm">Pipeline View</p>
          </button>
          <button className="h-[45px] flex items-center justify-center gap-1 text-dark-text border-b-2 border-transparent select-none ">
            <TbListDetails className="text-[22px] text-dark-text/50 " />
            <p className="tracking-tight font-medium text-sm">List View</p>
          </button>
          <p className="text-dark-text/30  ">|</p>
          <p className="tracking-tight text-sm text-dark-text/50 font-semibold ">
            From
            <span className="text-dark-text px-2">
              <select
                name=""
                className="select-icon-padding py-1 pl-3 rounded-md bg-border-lines-light/40  "
              >
                <option value="Nyabugogo">Kigali</option>
                <option value="Muhanga">South</option>
                <option value="Karongi">East</option>
                <option value="Huye">West</option>
                <option value="Huye">North</option>
              </select>
            </span>
          </p>
          <p className="tracking-tight text-sm text-dark-text/50 font-semibold ">
            Available Tickets <span className="text-dark-text">340</span>
          </p>
        </div>
        <div className="gridRespo p-5 gap-2 overflow-y-auto max-h-[90vh] pb-20">
          
          <div className="w-full h-fit bg-border-lines-light/30 rounded-xl p-2">
            <h1 className="capitalize tracking-wide text-sm opacity-50 font-medium px-2 pt-1 text-dark-text ">
              to East
            </h1>
            <h1 className="capitalize tracking-tight font-bold text-lg px-2 pb-1 text-dark-text ">
              1,403 rwf{" "}
              <span className="uppercase text-xs font-medium opacity-50">
                average
              </span>
            </h1>
            <div className="w-full h-full flex flex-col mt-2 gap-2">
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
             
            </div>
          </div>

          <div className="w-full h-fit bg-border-lines-light/30 rounded-xl p-2">
            <h1 className="capitalize tracking-wide text-sm opacity-50 font-medium px-2 pt-1 text-dark-text ">
              to East
            </h1>
            <h1 className="capitalize tracking-tight font-bold text-lg px-2 pb-1 text-dark-text ">
              1,403 rwf{" "}
              <span className="uppercase text-xs font-medium opacity-50">
                average
              </span>
            </h1>
            <div className="w-full h-full flex flex-col mt-2 gap-2">
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
             
            </div>
          </div>
          
          <div className="w-full h-fit bg-border-lines-light/30 rounded-xl p-2">
            <h1 className="capitalize tracking-wide text-sm opacity-50 font-medium px-2 pt-1 text-dark-text ">
              to East
            </h1>
            <h1 className="capitalize tracking-tight font-bold text-lg px-2 pb-1 text-dark-text ">
              1,403 rwf{" "}
              <span className="uppercase text-xs font-medium opacity-50">
                average
              </span>
            </h1>
            <div className="w-full h-full flex flex-col mt-2 gap-2">
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
             
            </div>
          </div>

          <div className="w-full h-fit bg-border-lines-light/30 rounded-xl p-2">
            <h1 className="capitalize tracking-wide text-sm opacity-50 font-medium px-2 pt-1 text-dark-text ">
              to East
            </h1>
            <h1 className="capitalize tracking-tight font-bold text-lg px-2 pb-1 text-dark-text ">
              1,403 rwf{" "}
              <span className="uppercase text-xs font-medium opacity-50">
                average
              </span>
            </h1>
            <div className="w-full h-full flex flex-col mt-2 gap-2">
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
              <div
                className="w-full min-h-[100px] bg-body-color-light rounded-xl py-3 px-4 shadow-sm overflow-clip"
              >
                <h1 className="font-bold tracking-tight text-base text-dark-text flex items-center justify-between ">
                  <span className="flex items-center">
                    <MdOutlineLocationOn className="text-xl " />
                    Rwamagana
                  </span>
                  <button>
                  <SlOptions />
                  </button>
                </h1>
                <p className="text-xs font-medium opacity-50 px-0 pt-1 ">
                  Leaving at <span className="font-bold ">3:00 am</span>
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div
                      src=""
                      className="h-7 aspect-square rounded-full bg-border-lines-light/40"
                    />
                    <p className="text-xs font-semibold text-dark-text truncate max-w-[100px]  ">
                      HORIZON EXPRESS
                    </p>
                  </div>
                  <h1 className="capitalize tracking-tight font-bold text-sm text-dark-text">
                    1,403 rwf
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
                  <p className="text-dark-text font-medium text-sm ">2h</p>
                </div>
              </div>
             
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;
