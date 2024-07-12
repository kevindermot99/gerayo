import React from "react";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { FaArrowRightLong } from "react-icons/fa6";


function Filter() {
  const submit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="h-[55px] w-full border-b-[1px] border-border-lines-light flex items-center justify-start px-20 max-md:px-4">
      <form onSubmit={submit} className="h-full w-full flex items-center justify-start py-2 gap-0 relative">
        <input
          placeholder="From"
          type="text"
          className="bg-stone-100 h-full w-full max-w-[200px] rounded-md ring-2 outline-none ring-transparent focus:ring-stone-200 px-3 font-medium tracking-tight text-sm z-0"
        />
        <div className="bg-main-color text-white h-full flex items-center justify-center aspect-square rounded-full ring-4 ring-white z-10 ">
          <FaArrowRightLong className="text-md" />
        </div>
        <input
          placeholder="To"
          type="text"
          className="bg-stone-100 h-full w-full max-w-[200px] rounded-md ring-2 outline-none ring-transparent focus:ring-stone-200 px-3 font-medium tracking-tight text-sm z-0"
        />
        <button className="h-full px-4 bg-main-color ml-1 rounded-lg flex items-center justify-center text-white font-semibold text-sm tracking-tight transition active:scale-[0.98] whitespace-nowrap gap-1">
          <HiMiniRectangleStack className="text-base" />
          Search
        </button>
      </form>
    </div>
  );
}

export default Filter;
