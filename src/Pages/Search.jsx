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

function Search({ guestEmail }) {
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

      <div className="w-full h-fit flex items-start justify-start max-lg:flex-col max-lg:items-center bg-body-color-light px-20 max-md:px-4 gap-10 max-md:gap-5  ">
        <div className="w-full max-w-[300px] max-lg:max-w-full h-fit flex flex-col items-start justify-start py-7 max-lg:py-0 max-lg:pt-10 max-sm:pt-1 lg:sticky top-[60px] ">
          <h1 className=" font-bold text-[26px] tracking-tighter text-dark-text pointer-events-none select-none max-md:hidden ">
            Search
          </h1>
          <div className="h-fit w-full flex items-start justify-start">
            <form className="h-full w-full flex items-start justify-start flex-col py-3 max-sm:py-[4px] max-sm:pb-2 gap-2 relative">
              <p className="text-dark-text/70 capitalize font-medium tracking-tight text-sm pt-2">
                Search for
              </p>
              <div className="w-full h-fit">
                <select
                  name=""
                  className="bg-stone-100 px-5 h-[45px] w-full text-sm font-medium rounded-xl ring-2 ring-transparent focus:ring-stone-200 mb-3 "
                >
                  <option value="ticket">Tickets</option>
                  <option value="bus">Local Bus</option>
                </select>
              </div>
              <div className="flex items-center justify-start w-full h-fit gap-3">
                <p className="text-dark-text/70 capitalize font-medium tracking-tight text-sm w-[50px]">
                  From
                </p>
                <input
                  placeholder="From"
                  type="text"
                  className="bg-stone-100 h-[45px] w-full rounded-xl ring-2 outline-none ring-transparent focus:ring-stone-200 px-5 font-medium tracking-tight text-sm z-0"
                />
              </div>
              <div className="flex items-center justify-start w-full h-fit gap-3">
                <p className="text-dark-text/70 capitalize font-medium tracking-tight text-sm w-[50px]">
                  To
                </p>
                <input
                  placeholder="To"
                  type="text"
                  className="bg-stone-100 h-[45px] w-full rounded-xl ring-2 outline-none ring-transparent focus:ring-stone-200 px-5 font-medium tracking-tight text-sm z-0"
                />
              </div>
              <button className="h-[45px] w-full mt-3 px-3 shadow-xl shadow-stone-100 bg-main-color rounded-xl flex items-center justify-center text-white font-semibold text-sm tracking-tight transition active:scale-[0.98] whitespace-nowrap gap-1">
                <LuSearch className="text-xl" />
                Search
              </button>
            </form>
          </div>
        </div>
        <div className=" w-full min-h-full ">
          {/* content */}
          <div className="w-full h-fit py-10 max-lg:py-0 max-lg:mb-12 ">
            <p className="text-dark-text font-bold tracking-tight text-sm">
              Showing 13 Results
            </p>

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
              <></>
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

export default Search;
