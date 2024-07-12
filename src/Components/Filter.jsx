import React, { useState } from "react";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { FaArrowRightArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import { RiSearchLine } from "react-icons/ri";
import { BusStops } from "../content/data";

function Filter({ type }) {
  const [inputFrom, setInputFrom] = useState(false);
  const [inputValueFrom, setInputValueFrom] = useState("");
  const [inputTo, setInputTo] = useState(false);
  const [inputValueTo, setInputValueTo] = useState("");

  const submit = (e) => {
    e.preventDefault();
  };
  // from
  const checkEmptyFrom = (e) => {
    const value = e.target.value;
    setInputValueFrom(value);
    setInputFrom(value !== "");
  };
  const choosenFrom = (bstop) => {
    setInputFrom(false);
    setInputValueFrom(bstop);
  };
  const filteredBusStopsFrom = BusStops.filter((bstop) =>
    bstop.toLowerCase().includes(inputValueFrom.toLowerCase())
  );
  // to
  const checkEmptyTo = (e) => {
    const value = e.target.value;
    setInputValueTo(value);
    setInputTo(value !== "");
  };
  const choosenTo = (bstop) => {
    setInputTo(false);
    setInputValueTo(bstop);
  };
  const filteredBusStopsTo = BusStops.filter((bstop) =>
    bstop.toLowerCase().includes(inputValueTo.toLowerCase())
  );

  return (
    <div className="h-[55px] w-full border-b-[1px] border-border-lines-light flex items-center justify-start px-10 max-md:px-4">
      <form
        onSubmit={submit}
        className="h-full w-full flex items-center justify-start py-2 gap-0 relative"
      >
        {/* from */}
        <div className="h-full w-fil relative">
          <input
            placeholder="From"
            type="text"
            onChange={checkEmptyFrom}
            value={inputValueFrom}
            className="bg-stone-100 h-full w-full capitalize max-w-[240px] rounded-full focus:bg-stone-200 px-5 font-medium tracking-tight text-sm"
          />
          <div
            className={`absolute top-[45px] p-1 w-full max-w-[240px] max-h-[200px] bg-white shadow-xl rounded-md overscroll-contain overflow-auto flex flex-col ${
              inputFrom ? "visible " : "invisible"
            }`}
          >
            {filteredBusStopsFrom.map((bstop, index) => (
              <div
                key={index}
                onClick={() => choosenFrom(bstop)}
                className=" px-4 text-sm py-1 hover:bg-stone-200 select-none cursor-pointer"
              >
                {bstop}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/0 text-dark-text/40 h-full flex items-center justify-center aspect-square rounded-full z-10 ">
          <FaArrowRightArrowLeft className="text-md" />
        </div>
        {/* to */}
        <div className="h-full w-fil relative">
          <input
            placeholder="To"
            type="text"
            onChange={checkEmptyTo}
            value={inputValueTo}
            className="bg-stone-100 h-full w-full capitalize max-w-[240px] rounded-full focus:bg-stone-200 px-5 font-medium tracking-tight text-sm"
          />
          <div
            className={`absolute top-[45px] p-1 w-full max-w-[240px] max-h-[200px] bg-white shadow-xl rounded-md overscroll-contain overflow-auto flex flex-col ${
              inputTo? "visible " : "invisible"
            }`}
          >
            {filteredBusStopsTo.map((bstop, index) => (
              <div
                key={index}
                onClick={() => choosenTo(bstop)}
                className=" px-4 text-sm py-1 hover:bg-stone-200 select-none cursor-pointer"
              >
                {bstop}
              </div>
            ))}
          </div>
        </div>
        <button className="h-full aspect-square bg-main-color ml-2 rounded-full flex items-center justify-center text-white font-semibold text-sm tracking-tight transition active:scale-90 whitespace-nowrap gap-1">
          <RiSearchLine className="text-base" />
        </button>
      </form>
    </div>
  );
}

export default Filter;
