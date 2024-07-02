import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import Ticket from "../Components/Ticket";
import { CgSpinner } from "react-icons/cg";
import { Helmet } from "react-helmet";
import MobileTopBar from "../Components/MobileTopBar";
import MobileBottomNavbar from "../Components/MobileBottomNavbar";
import Notification from "../Components/Notification";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

function Help({ guestEmail }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [profileMenu, setProfileMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const visitadAs = localStorage.getItem("visitedAs");
    if (!visitadAs) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const showNotificationPopup = () => {
    setShowNotification(true);
    document.documentElement.classList.add("no-scroll");
  };

  const hideNotificationPopup = () => {
    setShowNotification(false);
    document.documentElement.classList.remove("no-scroll");
  };

  return (
    <div className="bg-white dark:bg-white min-h-svh text-dark-text">
      {/* Notification */}
      {showNotification && <Notification hide={hideNotificationPopup} />}

      {/* Helmet */}
      <Helmet>
        <title>Buy Tickets | gerayo.</title>
      </Helmet>
      {/* Profile Menu overlay */}
      <div
        onClick={() => setProfileMenu(false)}
        className={`bg-transparent fixed top-0 left-0 w-full h-full ${
          profileMenu
            ? "transition ease-in-out duration-200 opacity-100  z-30"
            : "hidden"
        }`}
      ></div>
      <div className="w-full h-fit sticky top-0 z-20 bg-white max-md:hidden ">
        <Navbar show={showNotificationPopup} guestEmail={guestEmail} />
      </div>

      {/* phone Topbar */}
      <MobileTopBar show={showNotificationPopup} title={"Search"} />

      {/* Phone navBar */}
      <MobileBottomNavbar guestEmail={guestEmail} />

      <div className="w-full h-fit flex items-start justify-start max-lg:flex-col max-lg:items-center bg-body-color-light gap-10 max-md:gap-5  ">
        {/* header */}
        <div className="help-header flex justify-center items-center flex-col gap-1 min-h-[250px] w-full bg-stone-100 relative">
          <div className="w-fit h-fit flex items-center justify-start">
            <MdLocationOn className="text-[37px] text-main-color translate-y-[3px] translate-x-[3px]" />
            <h1 className=" font-bold text-[35px] tracking-tighter text-main-color pr-8 pointer-events-none select-none ">
              gerayo.
            </h1>
          </div>
          <p className="text-base font-semibold tracking-tight">
            How can we help?
          </p>
          <p className="px-4 py-2 bg-white rounded-xl text-sm font-semibold tracking-tight absolute bottom-5 right-5 shadow-xl shadow-stone-200 flex items-center justify-center gap-1">
            <IoIosCall className="text-xl text-main-color" />
            <span> +250785614800</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Help;
