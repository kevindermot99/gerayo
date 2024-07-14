import React, { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { KigaliBusJourney, busStopsImages } from "../content/data";
import { FaMapLocationDot } from "react-icons/fa6";


function MoreInfo({ hide, id }) {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(true)
    },[])

    const hideNotificationPopup = () => {
        setAnimate(false)
        setTimeout(() => {
            hide()
        }, 200);
    }

    const openedJourney = KigaliBusJourney.find(journey => journey.id === id)

    const imageFrom = busStopsImages.find(image => image.location === openedJourney.from )
    const imageTo = busStopsImages.find(image => image.location === openedJourney.to )

  return (
    <>
      <div onClick={hideNotificationPopup} className={`w-full h-full fixed top-0 left-0 bg-stone-600/10 z-30 transition-all ease-in-out duration-300 ${animate ? 'opacity-100' : 'opacity-0'} `}></div>
      <div className={`fixed top-0 right-0 bg-white text-dark-text w-full max-w-[500px] h-full z-30 p-4 transition-all ease-in-out duration-300 ${animate ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 '}`}>
        <div className="flex items-center justify-start gap-4">
          <button onClick={hideNotificationPopup} className="active:scale-75 transition flex items-center justify-center ">
            <IoArrowBackOutline className="text-2xl" />
          </button>
          <h1 className="text-lg tracking-tight font-bold capitalize ">More info</h1>
        </div>

        {/* no notification */}
        <div className="h-full w-full max-w-[500px] flex flex-col gap-3 px-2 py-8">
          <div className="w-full h-fit flex items-start justify-start gap-5">
            <div className="h-full w-[50%] relative">
              <h1 className="text-sm capitalize min-h-fit mb-2">From: {openedJourney.from}</h1>
              <img src={imageFrom.image} className="w-full h-[130px] rounded-xl shadow-md object-cover object-bottom" />
              <a href={`https://www.google.com/maps/place/${openedJourney.from}`} target="_blank" className="group p-2 rounded-xl bg-white/90 transition active:scale-105 backdrop-blur-sm shadow-lg absolute bottom-2 right-2">
              <FaMapLocationDot className="text-sm transition group-hover:text-main-color" />
              </a>
            </div>
            <div className="h-full w-[50%] relative">
              <h1 className="text-sm capitalize min-h-fit mb-2">to: {openedJourney.to}</h1>
              <img src={imageTo.image} className="w-full h-[130px] rounded-xl shadow-md object-cover object-bottom"/>
              <a href={`https://www.google.com/maps/place/${openedJourney.to}`} target="_blank" className="group p-2 rounded-xl bg-white/90 transition active:scale-105 backdrop-blur-sm shadow-lg absolute bottom-2 right-2">
              <FaMapLocationDot className="text-sm transition group-hover:text-main-color" />
              </a>
            </div>
          </div>
          <span className="border-b-[1px] border-border-lines-light mt-2 w-full max-w-[70%] mx-auto h-[1px]" ></span>
          <h1 className="text-sm capitalize min-h-fit">Bus Stops</h1>
          <div className="flex flex-col items-start justify-start gap-2 px-4">
            <p className="text-sm font-medium">&bull; </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MoreInfo;
