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
import Ticket from "../Components/Ticket";

function Center() {
  const horizonLogo =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4hJXePN-LnaVGRHInc1S4TwB_4GrBAFUs4gnTSM1qY1dMrbv0R1bNHrw-1ERZUS5KyE&usqp=CAU";
  const volcanoLogo =
    "https://media.licdn.com/dms/image/C4D03AQED1rAkP-nhDg/profile-displayphoto-shrink_200_200/0/1517029814079?e=2147483647&v=beta&t=S8fvfL4gVAoaHoBVw4wmVkTvkhJGI_tCBdoRwzJbWh8";
  return (
    <div className="w-full h-full flex min-h-screen bg-body-color-light dark:bg-body-color-dark  overflow-y-hidden max-h-dvh ">
      <Sidebar />
      <div className=" w-full min-h-full">
        <Navbar title="Home" />
        
        <div className="gridRespo p-5 gap-2 overflow-y-auto max-h-[90vh] pb-20">
          
        </div>
      </div>
    </div>
  );
}

export default Center;
