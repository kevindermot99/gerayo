import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { TbBusStop } from "react-icons/tb";
import { PiSealWarningBold } from "react-icons/pi";
import { TiPin } from "react-icons/ti";
import Ticket from "../Components/Ticket";
import { FiSunset } from "react-icons/fi";
import { FiSunrise } from "react-icons/fi";
import { PiTicketDuotone } from "react-icons/pi";
import { IoNotificationsOutline } from "react-icons/io5";
import { CgSpinner } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { Helmet } from "react-helmet";
import { HiOutlineTicket } from "react-icons/hi2";
import MobileBottomNavbar from "../Components/MobileBottomNavbar";
import MobileTopBar from "../Components/MobileTopBar";
import { IoFilterSharp } from "react-icons/io5";
import Filter from "../Components/Filter";
import Notification from "../Components/Notification";

function BuyTicket({ guestEmail }) {
  const [visited, setVisited] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [profileMenu, setProfileMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const showMenu = () => {
    setProfileMenu(!profileMenu);
  };

  const logMeOut = () => {
    localStorage.removeItem("visitedAs");
    window.location.reload();
  };

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
    setShowNotification(true)
    document.documentElement.classList.add('no-scroll');
  }

  const hideNotificationPopup = () => {
    setShowNotification(false)
    document.documentElement.classList.remove('no-scroll');
  }

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
      {/* Pc navBar */}
      <div className="w-full h-fit sticky top-0 z-20 bg-white max-md:hidden ">
        <Navbar show={showNotificationPopup} guestEmail={guestEmail} />
        <Filter />
      </div>

      {/* phone Topbar */}
      <MobileTopBar show={showNotificationPopup} title={'Buy Tickets'} />

      {/* Phone navBar */}
      <MobileBottomNavbar guestEmail={guestEmail} />

      <div className="w-full h-fit flex bg-body-color-light ">
        <div className=" w-full min-h-full">
          {/* content */}
          <div className="w-full h-fit py-10 px-20 max-md:px-4 max-md:py-7 max-md:mb-12 ">
            <p className="text-dark-text font-bold tracking-tight text-sm">
              Showing 13 Tickets
            </p>
            {/* tabs */}
            <div className="w-full h-fit flex items-center justify-between max-md:justify-start gap-2 py-3 overflow-x-auto hidescrollbar">
              <div className="flex items-center justify-start gap-2">
                <Link
                  to={`/`}
                  className="text-dark-text whitespace-nowrap font-medium tracking-tight text-sm bg-stone-100 py-2 px-4 rounded-lg flex items-center justify-center gap-1"
                >
                  <PiTicketDuotone className="text-xl" />
                  All Tickets
                </Link>
                <Link
                  to={`/`}
                  className="text-dark-text whitespace-nowrap font-medium tracking-tight text-sm hover:bg-stone-100 py-2 px-4 rounded-lg flex items-center justify-center gap-1"
                >
                  <FiSunrise className="text-xl" />
                  Beforenoon
                </Link>
                <Link
                  to={`/`}
                  className="text-dark-text whitespace-nowrap font-medium tracking-tight text-sm hover:bg-stone-100 py-2 px-4 rounded-lg flex items-center justify-center gap-1"
                >
                  <FiSunset className="text-xl" />
                  Afternoon
                </Link>
              </div>
              <div className="flex items-center justify-start">
                <Link
                  to={`/`}
                  className="text-dark-text whitespace-nowrap font-medium tracking-tight hover:bg-stone-100 text-sm py-2 px-4 rounded-lg flex items-center justify-center gap-1"
                >
                  <TiPin className="text-xl" />
                  Pinned (0)
                </Link>
              </div>
            </div>

            {/* warning */}
            <div className="h-[40px] w-fit rounded-lg bg-main-color/5 ring-1 ring-main-color/30 text-main-color font-bold flex items-center justify-start px-4 text-xs gap-2 my-1 max-md:mb-8 ">
              <PiSealWarningBold className="text-xl" />
              This information might take a minute or two to update.
            </div>

            {/* Buses */}
            <div className="flex flex-col items-start justify-startn h-fit w-full relative">
              {loading ? (
                <>
                  <div className="w-full h-fit flex items-start justify-center pt-5 pb-3">
                    <CgSpinner className="animate-spinLoader text-3xl text-dark-text/40 " />
                  </div>
                </>
              ) : (
                <>
                  <Ticket />
                  <Ticket />
                  <Ticket />
                  <Ticket />
                </>
              )}
            </div>
            {loading ? (
              <div className="flex items-center justify-center text-sm text-dark-text/70 font-medium">
                Fetching..
              </div>
            ) : (
              <div className="flex items-center justify-center text-sm text-dark-text/70 font-medium pt-8 max-md:pb-8">
                You have reached the bottom
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyTicket;
