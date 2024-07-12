import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuSearch } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import { RiRouteFill } from "react-icons/ri";
import { MdMyLocation } from "react-icons/md";
import { TbBusStop } from "react-icons/tb";
import { PiSealWarningBold } from "react-icons/pi";
import Bus from "../Components/Bus";
import { TiPin } from "react-icons/ti";
import { IoNotificationsOutline } from "react-icons/io5";
import { PiTicketDuotone } from "react-icons/pi";
import { CgSpinner } from "react-icons/cg";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { Helmet } from "react-helmet";
import { HiOutlineTicket } from "react-icons/hi2";
import MobileTopBar from "../Components/MobileTopBar";
import MobileBottomNavbar from "../Components/MobileBottomNavbar";
import Filter from "../Components/Filter";
import Notification from "../Components/Notification";
import Welcome from "../Components/Welcome";
import { BusPark, KigaliBusJourney } from "../content/data";

function Track({ guestEmail }) {
  const [visited, setVisited] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
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

  // check if this user has visited before
  useEffect(() => {
    const visitedBefore = localStorage.getItem("visitedGerayo");
    if (visitedBefore) {
      setVisited(true);
    }
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
    <div className="bg-stone-100 dark:bg-stone-100 min-h-svh text-dark-text">
      {/* Welcome */}
      {!visited && <Welcome />}

      {/* Notification */}
      {showNotification && <Notification hide={hideNotificationPopup} />}

      {/* Helmet */}
      <Helmet>
        <title>Find my bus | gerayo.</title>
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
      {/* pc navBar */}
      <div className="w-full h-fit sticky top-0 z-20 bg-white dark:bg-white max-md:hidden ">
        <Navbar show={showNotificationPopup} guestEmail={guestEmail} />
        <Filter type={'TrackMyBus'} />
      </div>

      {/* phone Topbar */}
      <MobileTopBar title={"Find my bus"} show={showNotificationPopup} />

      {/* Phone navBar */}
      <MobileBottomNavbar guestEmail={guestEmail} />

      <div className="w-full h-fit flex bg-stone-100">
        <div className=" w-full min-h-full">
          {/* content */}
          <div className="w-full h-fit py-10 px-10 max-md:px-4 max-sm:py-7 max-md:mb-12">
            <p className="text-dark-text font-bold tracking-tight text-sm">
              Most known places
            </p>
            <div className="hidescrollbar w-full h-[75px] py-4 overflow-y-hidden overflow-x-auto flex items-center justify-start gap-3 ">
              {BusPark.map((park, index) => (
                <div
                  key={index}
                  className="h-full w-fit transition duration-150 hover:shadow-lg hover:shadow-stone-200 hover:text-main-color cursor-pointer bg-white text-dark-text/60 text-sm font-bold rounded-full flex items-center justify-center py-3 px-8 whitespace-nowrap"
                >
                  {park}
                </div>
              ))}
            </div>
            <p className="text-dark-text font-bold tracking-tight text-sm">
              Showing 132 Buses
            </p>
            {/* tabs */}
            <div className="w-full h-fit flex items-center justify-between max-md:justify-start  gap-2 py-3 max-md:overflow-x-auto hidescrollbar">
              <div className="flex items-center justify-start gap-2">
                <Link
                  to={`/`}
                  className="text-dark-text whitespace-nowrap font-medium tracking-tight text-sm bg-white py-2 px-4 rounded-lg flex items-center justify-center gap-1"
                >
                  <TbBusStop className="text-xl" />
                  All Buses
                </Link>
                <Link
                  to={`/`}
                  className="text-dark-text whitespace-nowrap font-medium tracking-tight hover:bg-white text-sm py-2 px-4 rounded-lg flex items-center justify-center gap-1"
                >
                  <TiPin className="text-xl" />
                  Pinned (0)
                </Link>
              </div>
            </div>


            {/* Buses */}
            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 h-fit w-full">
              {loading ? (
                <>
                  <div className="w-full h-fit col-span-2 flex items-start justify-center pt-16 pb-3">
                    <CgSpinner className="animate-spinLoader text-3xl text-dark-text/40 " />
                  </div>
                </>
              ) : (
                <>
                {KigaliBusJourney.map((journey, index) => (
                  <Bus
                  id={journey.id}
                  plateNumber={journey.plateNumber}
                  numberOfSeats={journey.numberOfSeats}
                  from={journey.from}
                  to={journey.to}
                  busType={journey.busType}
                  departureAt={journey.departureAt}
                  arrivalTime={journey.arrivalTime}
                  price={journey.price} />
                ))}
                </>
              )}
            </div>
            {loading ? (
              <></>
            ) : (
              <div className="flex items-center justify-center text-xs italic text-dark-text/30 font-medium pt-8 max-md:pb-8">
                looks like this is all we've got
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Track;
