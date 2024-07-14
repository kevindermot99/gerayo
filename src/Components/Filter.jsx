import React, { useEffect, useState } from "react";
import { HiMiniRectangleStack } from "react-icons/hi2";
import { FaArrowRightArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import { RiSearchLine } from "react-icons/ri";
import { BusStops } from "../content/data";
import { CgSpinner } from "react-icons/cg";
import { HiOutlineTrash } from "react-icons/hi";

function Filter({ onFilterSubmit, mobileSearch }) {
  const [inputFrom, setInputFrom] = useState(false);
  const [inputValueFrom, setInputValueFrom] = useState("");
  const [inputTo, setInputTo] = useState(false);
  const [inputValueTo, setInputValueTo] = useState("");
  const [formEmpty, setFormEmpty] = useState(false);
  const [animateShow, setAnimateShow] = useState(false)

  // submiting
  const submit = (e) => {
    e.preventDefault();
    if (onFilterSubmit) {
      if (inputValueFrom !== "" || inputValueTo !== "") {
        setFormEmpty(true);
      }
      setInputFrom(false);
      setInputTo(false);
      onFilterSubmit(inputValueFrom, inputValueTo);
    }
  };
  // clearing the form
  const clearForm = () => {
    setInputValueFrom("");
    setInputValueTo("");
    setInputFrom(false);
    setInputTo(false);
    if (onFilterSubmit) {
      setFormEmpty(false);
      onFilterSubmit("", "");
    }
  };

  // from
  const checkEmptyFrom = (e) => {
    const value = e.target.value;
    setInputValueFrom(value);
    setInputFrom(value !== "");
    setInputTo(false);
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
    setInputFrom(false);
  };
  const choosenTo = (bstop) => {
    setInputTo(false);
    setInputValueTo(bstop);
  };
  const filteredBusStopsTo = BusStops.filter((bstop) =>
    bstop.toLowerCase().includes(inputValueTo.toLowerCase())
  );

  useEffect(() => {
    if(mobileSearch === true){
    setAnimateShow(true)
    }
    else{
      setAnimateShow(false)
    }
  },[mobileSearch])

  return (
    <>
      <div className={`h-[55px] max-md:h-fit max-md:absolute w-full border-b-[1px] border-border-lines-light flex items-center justify-start px-10 max-md:px-4 ${animateShow ? 'max-md:opacity-100 max-md:relative ' : 'max-md:opacity-0 max-md:-translate-y-full'}`}>
        <form
          onSubmit={submit}
          className="h-full w-full flex items-center justify-start max-md:flex-col max-md:gap-4 py-2 max-md:py-4 gap-0 relative"
        >
          {/* from */}
          <div className="h-full w-fit max-md:w-full relative">
            <input
              placeholder="From"
              type="text"
              onChange={checkEmptyFrom}
              value={inputValueFrom}
              className="bg-stone-100 ring-1 ring-stone-200 h-full max-md:h-[40px] w-full capitalize max-w-[240px] max-md:max-w-[100%] rounded-full px-5 font-medium tracking-tight text-sm"
            />
            <div
              className={`ring-1 ring-border-lines-light z-30 absolute top-[45px] p-1 w-full max-w-[240px] max-h-[200px] bg-white shadow-xl shadow-black/5 rounded-md overscroll-contain overflow-auto flex flex-col ${
                inputFrom ? "visible " : "invisible"
              }`}
            >
              {filteredBusStopsFrom.map((bstop, index) => (
                <div
                  key={index}
                  onClick={() => choosenFrom(bstop)}
                  className=" px-4 text-sm py-1 hover:bg-stone-100 rounded-md select-none cursor-pointer"
                >
                  {bstop}
                </div>
              ))}
            </div>
          </div>
          <div className="bg-transparent max-md:hidden text-dark-text/40 h-full flex items-center justify-center aspect-square rounded-full z-10 ">
            <FaArrowRightArrowLeft className="text-md" />
          </div>
          {/* to */}
          <div className="h-full w-fit max-md:w-full relative">
            <input
              placeholder="To"
              type="text"
              onChange={checkEmptyTo}
              value={inputValueTo}
              className="bg-stone-100 ring-1 ring-stone-200 h-full max-md:h-[40px] w-full capitalize max-w-[240px] max-md:max-w-[100%] rounded-full px-5 font-medium tracking-tight text-sm"
            />
            <div
              className={`ring-1 ring-border-lines-light z-30 absolute top-[45px] p-1 w-full max-w-[240px] max-h-[200px] bg-white shadow-xl shadow-black/5  rounded-md overscroll-contain overflow-auto flex flex-col ${
                inputTo ? "visible " : "invisible"
              }`}
            >
              {filteredBusStopsTo.map((bstop, index) => (
                <div
                  key={index}
                  onClick={() => choosenTo(bstop)}
                  className=" px-4 text-sm py-1 hover:bg-stone-100 rounded-md select-none cursor-pointer"
                >
                  {bstop}
                </div>
              ))}
            </div>
          </div>
          <div className="flex h-[40px] items-center justify-center max-md:w-full">
            <button
              type="submit"
              className="h-full max-md:h-[40px] max-md:w-full aspect-square bg-main-color ml-2 max-md:ml-0 rounded-full flex items-center justify-center text-white font-semibold text-sm tracking-tight transition active:scale-90 whitespace-nowrap gap-1"
            >
              <RiSearchLine className="text-base max-md:text-xl" />
            </button>
            <button
              onClick={clearForm}
              className={`h-full max-md:h-[40px] max-md:w-full  aspect-square bg-stone-100 ring-1 ring-stone-200 ml-2 rounded-full flex items-center justify-center text-red-400 font-semibold text-sm tracking-tight active:scale-90 whitespace-nowrap gap-1 transition-all ease-in-out duration-300 ${
                formEmpty
                  ? "opacity-100"
                  : "md:opacity-0 md:pointer-events-none md:-z-10"
              }`}
            >
              <HiOutlineTrash className="text-lg max-md:text-xl" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Filter;
