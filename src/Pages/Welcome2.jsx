import React from "react";
import Logo from "../assets/logo.png";
import Travelers from "../assets/travelers.png";
import { GrFormNext } from "react-icons/gr";
import { Link } from "react-router-dom";

function Welcome2() {
  return (
    <div className="h-[100vh] w-full overflow-x-clip overflow-y-auto flex flex-col items-center justify-center max-sm:justify-end p-8 max-sm:p-4 bg-white dark:bg-white">
      <div className="fixed top-0 left-0 p-8 max-[250px]:bg-white dark:bg-white w-full h-fit flex justify-between items-center select-none ">
        {/* tab indicator */}
        <div className="flex items-center justify-start gap-1">
          <Link
            to={`/`}
            className={`h-[8px] aspect-square bg-black/20 rounded-xl `}
          ></Link>
          <Link
            to={`/feature2`}
            className={`h-[8px] w-[25px] bg-black rounded-xl `}
          ></Link>
          <span
            className={`h-[8px] aspect-square bg-black/20 rounded-xl `}
          ></span>
        </div>

        {/* Skip */}
        <div
          className="flex items-center justify-start text-main-color cursor-pointer h-fit w-fit active:scale-95 transition "
          title="Skip for now"
        >
          <p className=" font-medium text-sm ">Skip</p>
          <GrFormNext />
        </div>
      </div>

      <div className="max-w-[1100px] h-fit max-sm:h-full flex flex-col items-center justify-end max-sm:gap-10 py-10 max-sm:py-3 mx-auto">
        <div className="flex items-center justify-center">
          <img src={Logo} className="h-6 pt-0" />
          <h1 className=" font-bold text-[22px] tracking-tighter text-main-color pr-3  ">
            gerayo.
          </h1>
        </div>
        <div className="flex items-center justify-center flex-col select-none pointer-events-none">
          <img src={Travelers} className="h-auto w-full max-w-[355px]" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="font-bold tracking-tighter text-2xl text-center text-dark-text/90 line-clamp-2 max-w-[350px]">
            Purchase bus tickets online.
          </h1>
          <p className="tracking-tight text-sm text-center text-dark-text/80  max-w-[400px] font-semibold">
            Buy your tickets while sipping coffee, chilling in your office move
            nothing but your fingers!
          </p>

          <button className="bg-main-color my-5 text-white font-bold text-base transition active:scale-90 h-[50px] w-full max-w-[250px] rounded-[20px] ">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome2;
