import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";

function Navbar({ title }) {
  return (
    <div className="h-[60px] px-5 border-b-[1px] border-border-lines-light flex items-center justify-between">
      <h1 className="font-bold tracking-tighter text-2xl text-dark-text/90 ">
        {title}
      </h1>
      <div className="w-fit flex items-center justify-end gap-2">
        <button className=" h-8 aspect-square flex items-center justify-center rounded-full group active:scale-95 select-none" title="Search">
          <BiSearch className="text-2xl text-dark-text group-hover:text-main-color " />
        </button>
        <button className=" h-8 aspect-square flex items-center justify-center rounded-full group mr-[7px] active:scale-95 select-none" title="Notifications">
          <IoNotificationsOutline className="text-2xl text-dark-text group-hover:text-main-color " />
        </button>
        <div className="flex cursor-pointer active:scale-95 select-none" title="Andrew">
          <div className="h-8 aspect-square hover:bg-border-lines-light/50 rounded-full flex items-center justify-center"
          >
            <p className="bg-main-color text-white w-full h-full font-bold rounded-full flex items-center justify-center ">
              A
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
