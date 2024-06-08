import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { HiOutlineViewBoards } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";

function Home() {
  return (
    <div className="w-full h-full flex min-h-screen bg-body-color-light">
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
            Available Tickets <span className="text-dark-text">340</span>
          </p>
          <p className="tracking-tight text-sm text-dark-text/50 font-semibold ">
            <span className="text-dark-text">&#x2022;</span>
          </p>
          <p className="tracking-tight text-sm text-dark-text/50 font-semibold ">
            Bus Station
            <span className="text-dark-text px-2">
              <select name="" className="select-icon-padding py-1 pl-3 rounded-md bg-border-lines-light/40  ">
                <option value="Nyabugogo">Nyabugogo</option>
                <option value="Muhanga">Muhanga</option>
                <option value="Karongi">Karongi</option>
                <option value="Huye">Huye</option>
              </select>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
