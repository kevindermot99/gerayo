import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { HiOutlineViewBoards } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";
import { LuCalendar } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsBusFront } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { SlOptions } from "react-icons/sl";
import Ticket from "../Components/Ticket";

function Center() {
    const [visited, setVisited] = useState(null);
    const navigate = useNavigate()

  useEffect(() => {
    setVisited(localStorage.getItem('visitedAs'))
  }, [])

  if(visited !== null){
      navigate('/')
    }
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
