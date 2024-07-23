import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuCreditCard, LuListFilter, LuSearch } from "react-icons/lu";
import { BiSearch } from "react-icons/bi";
import { RiPaypalLine, RiRouteFill } from "react-icons/ri";
import { MdMyLocation } from "react-icons/md";
import { TbBusStop, TbCreditCardPay } from "react-icons/tb";
import { PiBank, PiSealWarningBold, PiSimCard } from "react-icons/pi";
import Bus from "../Components/Bus";
import { TiPin } from "react-icons/ti";
import { IoCardOutline, IoNotificationsOutline } from "react-icons/io5";
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
import MoreInfo from "../Components/MoreInfo";
import Profile from "../Components/Profile";
import Premium from "../Components/Premium";
import { BsBank } from "react-icons/bs";
import { FcSimCard } from "react-icons/fc";
import { FaGooglePay } from "react-icons/fa";

function Purchase({ guestEmail }) {
  const [visited, setVisited] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [profileMenu, setProfileMenu] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showMoreInfo, setMoreInfo] = useState(false);
  const [showProfile, setProfile] = useState(false);
  const [showFilteredOnly, setShowFilteredOnly] = useState(false);
  const [showFilteredOnlyByRoute, setShowFilteredOnlyByRoute] = useState(false);
  const [filtered, setFiltered] = useState();
  const [moreInfoId, setMoreInfoId] = useState("0");
  const [mobileSearch, setMobileSearch] = useState(false);
  const [pinnedBuses, setPinnedBuses] = useState(false);
  const [pinnedBusIds, setPinnedBusIds] = useState([]);
  const [pinnedJourneys, setPinnedJourneys] = useState([]);
  const [watchPinned, setWatchPinned] = useState("");
  const { pathname } = useLocation();
  const [showPremium, setShowPremium] = useState(false);
  const [methodChecked, setMethodChecked] = useState("Card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [baggageSize, setBaggageSize] = useState("N/A");
  const [nkids, setNkids] = useState("N/A");
  const [cNames, setCNames] = useState("Your Names")

  const handleInputChange = (e) => {
    let value = e.target.value;

    // Remove all non-digit characters
    value = value.replace(/\D/g, "");

    // Format the input value
    if (value.length > 4) {
      value = value.match(/.{1,4}/g).join(" ");
    }

    // Update the state
    setCardNumber(value);
  };

  const handleInputChangeCvc = (e) => {
    let value = e.target.value;

    // Remove all non-digit characters
    value = value.replace(/\D/g, "");

    // Format the input value
    if (value.length > 4) {
      value = value.match(/.{1,4}/g).join(" ");
    }

    // Update the state
    setCardCvc(value);
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    document.documentElement.classList.remove("no-scroll");
  }, [pathname]);

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
  // notification
  const showNotificationPopup = () => {
    setShowNotification(true);
    document.documentElement.classList.add("no-scroll");
  };

  const hideNotificationPopup = () => {
    setShowNotification(false);
    document.documentElement.classList.remove("no-scroll");
  };

  // more info
  const showMoreInfoPopup = (id) => {
    setMoreInfo(true);
    setMoreInfoId(id);
    document.documentElement.classList.add("no-scroll");
  };

  const hideMoreInfoPopup = () => {
    setMoreInfo(false);
    document.documentElement.classList.remove("no-scroll");
  };

  // Profile
  const showProfilePopup = () => {
    setProfile(true);
    document.documentElement.classList.add("no-scroll");
  };

  const hideProfilePopup = () => {
    setProfile(false);
    document.documentElement.classList.remove("no-scroll");
  };

  const filterBusJourneys = (busJourneys, from, to) => {
    return busJourneys.filter(
      (journey) =>
        (from ? journey.from.toLowerCase() === from.toLowerCase() : true) &&
        (to ? journey.to.toLowerCase() === to.toLowerCase() : true)
    );
  };
  // filter by Route ID
  const filterBusJourneysByRouteId = (busJourneys, routeId) => {
    return busJourneys.filter((journey) =>
      routeId ? journey.RouteId === routeId : true
    );
  };
  // location Filter
  const handleFilterSubmit = (from, to) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setShowFilteredOnly(true);
    console.log("Filter submitted:", from, to);
    setFiltered(filterBusJourneys(KigaliBusJourney, from, to));
  };

  // Route Id Filter
  const handleRouteIdSubmit = (RouteId) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
    setShowFilteredOnly(true);
    console.log("Filter submitted:", RouteId);
    setFiltered(filterBusJourneysByRouteId(KigaliBusJourney, RouteId));
  };

  const showSearch = () => {
    setMobileSearch(!mobileSearch);
  };

  const watchPinnedChange = (id) => {
    setWatchPinned(id);
  };

  useEffect(() => {
    const storedPinnedBusIds = JSON.parse(localStorage.getItem("PinnedBusIds"));
    if (storedPinnedBusIds) {
      setPinnedBusIds(storedPinnedBusIds);
    }
  }, [watchPinned]);

  useEffect(() => {
    const filteredJourneys = KigaliBusJourney.filter((journey) =>
      pinnedBusIds.includes(journey.id)
    );
    setPinnedJourneys(filteredJourneys);
  }, [pinnedBusIds]);

  const showPinned = () => {
    setPinnedBuses(true);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  const hidePinned = () => {
    setPinnedBuses(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  // show Premium
  const showPremiumModal = () => {
    setShowPremium(true);
    document.documentElement.classList.add("no-scroll");
  };

  const hidePremiumModal = () => {
    setShowPremium(false);
    document.documentElement.classList.remove("no-scroll");
  };

  return (
    <div className="bg-stone-100 dark:bg-body-color-dark min-h-svh max-md:pb-10 text-dark-text">
      {/* Welcome */}
      {!visited && <Welcome />}

      {/* Notification */}
      {showNotification && <Notification hide={hideNotificationPopup} />}
      {/* profile */}
      {showProfile && (
        <Profile hide={hideProfilePopup} guestEmail={guestEmail} />
      )}

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

      {/* phone Topbar */}
      <MobileTopBar
        showSearch={showSearch}
        title={"Find my bus"}
        show={showNotificationPopup}
      />

      {/* Phone navBar */}
      <MobileBottomNavbar guestEmail={guestEmail} />

      {/* pc navBar */}
      <div className="w-full h-fit sticky max-md:relative top-0 z-20 backdrop-blur-md bg-stone-100/90 dark:bg-body-color-dark/80 ">
        <Navbar
          show={showNotificationPopup}
          showPremiumModal={showPremiumModal}
          showPf={showProfilePopup}
          guestEmail={guestEmail}
        />
      </div>

      <div className="w-full h-fit flex flex-col items-start justify-start max-w-[1200px] mx-auto py-8 px-12 ">
        <p className="text-dark-text dark:text-white/90 z-10 font-semibold tracking-tight text-3xl pb-5 ">
          Complete Payement
        </p>
        <div className="flex items-start justify-center gap-10 w-full">
          <div className="bg-white dark:bg-container-dark p-8 rounded-2xl shadow-lg w-auto flex-1 h-full flex flex-col items-start justify-start gap-3">
          <p className="text-dark-text dark:text-white/90 z-10 tracking-tight text-base ">
              Ticket: Nyanza to Kigali
            </p>
            <p className="text-dark-text dark:text-white/90 z-10 font-medium tracking-tight text-base ">
              1. How would you like to pay?
            </p>
            <div className="w-full h-fit flex flex-col justify-start items-start gap-3">
              <div className="w-full flex items-center justify-start gap-3">
                <label className="select-none">
                  <input
                    type="radio"
                    name="method"
                    hidden
                    onChange={() => setMethodChecked("Card")}
                    checked={true}
                  />
                  <div
                    className={`w-[150px] h-[60px] rounded-lg flex items-start justify-center gap-[3px] flex-col px-3 cursor-pointer ring-2 ${
                      methodChecked === "Card"
                        ? " ring-main-color/60 dark:bg-container-dark-2 text-main-color"
                        : "bg-stone-100 dark:bg-container-dark-2 text-dark-text dark:text-light-text ring-transparent"
                    }`}
                  >
                    <LuCreditCard className="text-xl" />
                    <p className="text-sm font-medium dark:text-white">Card</p>
                  </div>
                </label>
                <label className="select-none">
                  <input
                    type="radio"
                    name="method"
                    hidden
                    onChange={() => setMethodChecked("PayPal")}
                  />
                  <div
                    className={`w-[150px] h-[60px] rounded-lg flex items-start justify-center gap-[3px] flex-col px-3 cursor-pointer ring-2 ${
                      methodChecked === "PayPal"
                        ? " ring-main-color/60 dark:bg-container-dark-2 text-main-color"
                        : "bg-stone-100 dark:bg-container-dark-2 text-dark-text dark:text-light-text ring-transparent"
                    }`}
                  >
                    <RiPaypalLine className="text-xl" />
                    <p className="text-sm font-medium  dark:text-white">
                      PayPal
                    </p>
                  </div>
                </label>
                <label className="select-none">
                  <input
                    type="radio"
                    name="method"
                    hidden
                    onChange={() => setMethodChecked("MTN")}
                  />
                  <div
                    className={`w-[150px] h-[60px] rounded-lg flex items-start justify-center gap-[3px] flex-col px-3 cursor-pointer ring-2 ${
                      methodChecked === "MTN"
                        ? " ring-main-color/60 dark:bg-container-dark-2 text-main-color"
                        : "bg-stone-100 dark:bg-container-dark-2 text-dark-text dark:text-light-text ring-transparent"
                    }`}
                  >
                    <PiSimCard className="text-xl" />
                    <p className="text-sm font-medium  dark:text-white">
                      MTN MoMo
                    </p>
                  </div>
                </label>
                <label className="select-none">
                  <input
                    type="radio"
                    name="method"
                    hidden
                    onChange={() => setMethodChecked("Airtel")}
                  />
                  <div
                    className={`w-[150px] h-[60px] rounded-lg flex items-start justify-center gap-[3px] flex-col px-3 cursor-pointer ring-2 ${
                      methodChecked === "Airtel"
                        ? " ring-main-color/60 dark:bg-container-dark-2 text-main-color"
                        : "bg-stone-100 dark:bg-container-dark-2 text-dark-text dark:text-light-text ring-transparent"
                    }`}
                  >
                    <PiSimCard className="text-xl" />
                    <p className="text-sm font-medium  dark:text-white">
                      Airtel Money
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Card */}
            <div className=" flex flex-col items-start justify-start gap-2 mt-6 w-full ">
              {/* input */}
              <div className="flex flex-col gap-2 w-full mb-2">
                <p className="text-dark-text dark:text-white font-medium text-sm">
                  Cardholder's Name
                </p>
                <input
                  type="text"
                  name="name"
                  className="h-[40px] w-full placeholder:text-dark-text/50 dark:placeholder:text-light-text rounded-md px-4 text-sm font-medium text-dark-text dark:text-white bg-stone-100 dark:bg-container-dark-2"
                  placeholder="ex: Anita"
                />
              </div>
              {/* input */}
              <div className="flex flex-col gap-2 w-full mb-2">
                <p className="text-dark-text dark:text-white font-medium text-sm">
                  Card number
                </p>
                <div className="w-full h-fit relative">
                  <input
                    type="text"
                    name="cc-number"
                    className="h-[40px] w-full placeholder:text-dark-text/50 dark:placeholder:text-light-text rounded-md px-4 text-sm font-medium text-dark-text dark:text-white bg-stone-100 dark:bg-container-dark-2"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={handleInputChange}
                    maxLength="19"
                  />
                  <img
                    src="https://getsby.com/wp-content/uploads/2023/01/Visa-Mastercard-1-1024x378.png"
                    className="h-9 select-none absolute top-0 bottom-0 right-2 my-auto pointer-events-none"
                  />
                </div>
              </div>
              {/* nested input */}
              <div className="flex items-center justify-between gap-4 w-full mb-2">
                {/* 1 */}
                <div className="flex flex-col gap-2 w-1/2">
                  <p className="text-dark-text dark:text-white font-medium text-sm">
                    Expiry
                  </p>
                  <input
                    type="month"
                    min="2024-07"
                    max="2035-07"
                    name="cc-exp"
                    className="h-[40px] w-full placeholder:text-dark-text/50 dark:placeholder:text-light-text rounded-md px-4 text-sm font-medium text-dark-text dark:text-white bg-stone-100 dark:bg-container-dark-2"
                    id=""
                  />
                </div>
                {/* 2 */}
                <div className="flex flex-col gap-2 w-1/2">
                  <p className="text-dark-text dark:text-white font-medium text-sm">
                    CVC/CVV
                  </p>
                  <input
                    type="text"
                    name="cc-number"
                    className="h-[40px] w-full placeholder:text-dark-text/50 dark:placeholder:text-light-text rounded-md px-4 text-sm font-medium text-dark-text dark:text-white bg-stone-100 dark:bg-container-dark-2"
                    id="credit-card"
                    value={cardCvc}
                    onChange={handleInputChangeCvc}
                    maxLength="4"
                    placeholder="123"
                  />
                </div>
              </div>
            </div>

            {/*2 Your Information */}
            <p className="text-dark-text dark:text-white/90 z-10 font-medium tracking-tight text-base mt-6 ">
              2. Customer Information
            </p>
            {/* nested input */}
            <div className="flex items-center justify-between gap-4 w-full mb-2">
              {/* 1 */}
              <div className="flex flex-col gap-2 w-1/2">
                <p className="text-dark-text dark:text-white font-medium text-sm">
                  Customer's Names
                </p>
                <input
                  type="text"
                  name="name"
                  className="h-[40px] w-full placeholder:text-dark-text/50 dark:placeholder:text-light-text rounded-md px-4 text-sm font-medium text-dark-text dark:text-white bg-stone-100 dark:bg-container-dark-2"
                  placeholder="Your Names"
                  onChange={(e) => setCNames(e.target.value)}
                  // value={cNames}
                />
              </div>
              {/* 2 */}
              <div className="flex flex-col gap-2 w-1/2">
                <p className="text-dark-text dark:text-white font-medium text-sm">
                  Customer's Phone Number
                </p>
                <input
                  type="text"
                  name="tel"
                  className="h-[40px] w-full placeholder:text-dark-text/50 dark:placeholder:text-light-text rounded-md px-4 text-sm font-medium text-dark-text dark:text-white bg-stone-100 dark:bg-container-dark-2"
                  maxLength="13"
                  placeholder="+2507.."
                />
              </div>
            </div>
            <p className="text-dark-text dark:text-white font-medium text-sm">
              Customer's Baggage Size
            </p>
            <label
              onChange={() => setBaggageSize("Small")}
              className="w-fit flex items-center gap-2 cursor-default"
            >
              <input
                type="radio"
                name="bsize"
                className=" accent-main-color h-4 w-4"
              />
              <p className="text-dark-text dark:text-light-text font-medium tracking-tight text-sm ">
                Small (e.g., Backpack, Laptop Bag, Handbag, Duffel Bag )
              </p>
            </label>
            <label
              onChange={() => setBaggageSize("Large")}
              className="w-fit flex items-center gap-2 cursor-default"
            >
              <input
                type="radio"
                name="bsize"
                className=" accent-main-color h-4 w-4"
              />
              <p className="text-dark-text dark:text-light-text font-medium tracking-tight text-sm ">
                Large (e.g., Suitcase, Travel Trunk, Mattress )
              </p>
            </label>
            <label
              onChange={() => setBaggageSize("Other")}
              className="w-fit flex items-center gap-2 cursor-default"
            >
              <input
                type="radio"
                name="bsize"
                className=" accent-main-color h-4 w-4"
              />
              <p className="text-dark-text dark:text-light-text font-medium tracking-tight text-sm ">
                other
              </p>
            </label>
            {baggageSize === "Other" && (
              <div className="flex flex-col gap-2 w-full">
                <p className="text-dark-text dark:text-white font-medium text-sm">
                  Describe your Baggage
                </p>
                <textarea
                  type="text"
                  name="baggage"
                  className="h-[125px] max-h-[200px] w-full placeholder:text-dark-text/50 dark:placeholder:text-light-text rounded-md py-4 px-5 text-sm font-medium text-dark-text dark:text-white bg-stone-100 dark:bg-container-dark-2"
                  placeholder="e.g., a Bicycle, 100 kg of potatoes,..."
                />
              </div>
            )}
            <p className="text-dark-text dark:text-white font-medium text-sm mt-3">
              Customer's number of Kids
            </p>
            <label
              onChange={() => setNkids("1")}
              className="w-fit flex items-center gap-2 cursor-default"
            >
              <input
                type="radio"
                name="kids"
                className=" accent-main-color h-4 w-4"
              />
              <p className="text-dark-text dark:text-light-text font-medium tracking-tight text-sm ">
                1
              </p>
            </label>
            <label
              onChange={() => setNkids("2 or Above")}
              className="w-fit flex items-center gap-2 cursor-default"
            >
              <input
                type="radio"
                name="kids"
                className=" accent-main-color h-4 w-4"
              />
              <p className="text-dark-text dark:text-light-text font-medium tracking-tight text-sm ">
                2 or above
              </p>
            </label>
            <label
              onChange={() => setNkids("None")}
              className="w-fit flex items-center gap-2 cursor-default"
            >
              <input
                type="radio"
                name="kids"
                className=" accent-main-color h-4 w-4"
              />
              <p className="text-dark-text dark:text-light-text font-medium tracking-tight text-sm ">
                None
              </p>
            </label>

            <label className="w-fit flex items-center gap-2 my-3 cursor-default">
              <input type="checkbox" className=" accent-main-color h-4 w-4" />
              <p className="text-dark-text dark:text-light-text font-medium tracking-tight text-sm ">
                By continuing, I agree to the{" "}
                <span className="text-main-color underline px-1 cursor-pointer">
                  Terms and Conditions
                </span>{" "}
                and{" "}
                <span className="text-main-color underline px-1 cursor-pointer">
                  Privacy
                </span>
                Policy.
              </p>
            </label>
            <div className="flex items-center justify-end gap-2 w-full ">
              <Link
                to={"/purchaseticket"}
                className="min-h-[40px] min-w-[130px] px-9 bg-stone-200/70 dark:bg-container-dark-2 dark:hover:bg-container-dark-3 hover:bg-stone-300 text-dark-text font-semibold dark:text-white rounded-full text-sm flex items-center justify-center gap-1 cursor-pointer transition active:scale-95 "
              >
                Cancel
              </Link>
              <Link
                to={"/purchaseticket"}
                className="min-h-[40px] min-w-[160px] px-9 bg-main-color text-white font-semibold rounded-full text-sm flex items-center justify-center gap-1 cursor-pointer transition active:scale-95 "
              >
                <TbCreditCardPay className="text-xl" />
                Confirm Payment
              </Link>
            </div>
          </div>
          <div className="max-lg:hidden min-w-[300px] text-base capitalize text-dark-text dark:text-light-text py-8 h-full flex flex-col gap-2">
            <h1>Company Logo</h1>
            <h1>Company Phone numbers</h1>
            <h1>Company Email</h1>
            <span className="h-[1px] w-full bg-stone-200 dark:bg-container-dark-3"></span>
            <h1 className="text-center font-medium uppercase py-2">
              Travel Details
            </h1>
            {/* nested */}
            <div className="flex items-start justify-between w-full">
              {/* left */}
              <h1>Customer</h1>
            </div>
            {/* nested */}
            <div className="flex items-start justify-between w-full">
              {/* left */}
              <h1>
                <h1 className="font-semibold dark:text-white/90">
                {cNames}
                </h1>
              </h1>
            </div>
            {/* nested */}
            <div className="flex items-start justify-between w-full">
              {/* left */}
              <h1>Baggage size</h1>
              <h1>number of Kids</h1>
            </div>
            {/* nested */}
            <div className="flex items-start justify-between w-full">
              {/* left */}
              <h1 className="font-semibold dark:text-white/90">{baggageSize}</h1>
              <h1 className="font-semibold dark:text-white/90">{nkids}</h1>
            </div>
            {/* nested */}
            <div className="flex items-start justify-between w-full">
              {/* left */}
              <h1>
                From: <span className="font-semibold dark:text-white/90">Kigali</span>
              </h1>
              <h1>
                To: <span className="font-semibold dark:text-white/90">Nyanza</span>
              </h1>
            </div>
            {/* nested */}
            <div className="flex items-start justify-between w-full">
              {/* left */}
              <h1>dept date/time</h1>
              <h1>est arival time</h1>
            </div>
            {/* nested */}
            <div className="flex items-start justify-between w-full">
              {/* left */}
              <h1 className="font-semibold dark:text-white/90">2024-05-24 11:12</h1>
              <h1 className="font-semibold dark:text-white/90">13:45</h1>
            </div>
            {/* nested */}
            <div className="flex items-start justify-between w-full">
              {/* left */}
              <h1>ticket number</h1>
              <h1>seat number</h1>
            </div>
            {/* nested */}
            <div className="flex items-start justify-between w-full">
              {/* left */}
              <h1 className="font-semibold dark:text-white/90">4820583452</h1>
              <h1 className="font-semibold dark:text-white/90">13</h1>
            </div>
            {/* nested */}
            <div className="flex items-start justify-between w-full">
              {/* left */}
              <h1>Plate number</h1>
              <h1>Company</h1>
            </div>
            {/* nested */}
            <div className="flex items-start justify-between w-full">
              {/* left */}
              <h1 className="font-semibold dark:text-white/90">RAC430YS</h1>
              <h1 className="font-semibold dark:text-white/90"> Shalom</h1>
            </div>
            <span className="h-[1px] w-full bg-stone-200 dark:bg-container-dark-3"></span>
            <h1 className="text-center font-medium uppercase py-2">
              Travel Charges
            </h1>
            <h1>
              Price: <span className="font-semibold dark:text-white/90">2000 RWF</span>
            </h1>
            <h1>
              Payment Method:{" "}
              <span className="font-semibold dark:text-white/90">{methodChecked}</span>
            </h1>
            <h1>
              Purchase Method:{" "}
              <span className="font-semibold dark:text-white/90"> Gerayo (Online)</span>
            </h1>
            <h1>
              Done at:{" "}
              <span className="font-semibold dark:text-white/90">2024-07-23 13:23:43</span>
            </h1>
            <h1>
              Ticket ID: <span className="font-semibold dark:text-white/90">OUB3491280-321</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
