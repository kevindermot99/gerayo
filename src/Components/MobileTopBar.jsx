import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";

function MobileTopBar({ title, show }) {
  return (
    <div className="h-[60px] w-full border-b-[1px] border-border-lines-light hidden max-md:flex items-center justify-between px-20 max-md:px-4 sticky top-0 z-20 bg-white">
      <h1 className=" font-bold text-[26px] tracking-tighter text-dark-text pr-8 pointer-events-none select-none ">
        {title}
      </h1>
      <button
        onClick={show}
        className=" h-8 aspect-square flex items-center justify-center rounded-full group mr-[7px] active:scale-95 select-none"
        title="Notifications"
      >
        <IoNotificationsOutline className="text-2xl text-dark-text group-hover:text-main-color " />
      </button>
    </div>
  );
}

export default MobileTopBar;
