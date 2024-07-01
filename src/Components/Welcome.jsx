import React, { useEffect, useState } from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoNotificationsOffOutline } from "react-icons/io5";
import party from "../assets/party.png";
import { CgSpinner } from "react-icons/cg";

function Welcome() {
  const [animate, setAnimate] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 1000);
  }, []);

  const hideWelcomeModal = () => {
    setSaving(true);
    setTimeout(() => {
        localStorage.setItem('visitedGerayo', 'true')
      setAnimate(false);
    }, 500);
  };

  return (
    <>
      <div
        className={`w-full h-full fixed top-0 left-0 bg-stone-600/10 transition-all ease-in-out duration-300 backdrop-blur-sm  ${
          animate ? "opacity-100 visible z-[60]" : "opacity-0 invisible -z-10"
        } `}
      ></div>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 m-auto flex items-center justify-end flex-col shadow-2xl shadow-stone-500/20 bg-white overflow-clip text-dark-text w-[80%] rounded-3xl max-w-[380px] h-[90%] max-h-[360px] p-8 transition-all ease-in-out duration-300 ${
          animate ? "scale-100 opacity-100 visible z-[60]" : "scale-75 invisible  opacity-0 -z-10"
        }`}
      >
        <img src={party} className="h-auto w-full max-w-[190px]" />
        <h1 className="font-bold text-2xl text-center leading-9 capitalize ">
          Hello Hi..!
        </h1>
        <p className="font-medium text-sm text-center text-dark-text mb-1 leading-5 capitalize max-w-[260px]  ">
          Welcome to Gerayo, Track your bus and buy tickets easily.
        </p>
        <button
          onClick={hideWelcomeModal}
          className="h-[45px] min-h-[45px] shadow-lg overflow-clip tracking-tight w-full max-w-[280px] mt-5 bg-main-color text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-1"
        >
          {saving ? (
            <>
              <CgSpinner className="animate-spinLoader text-3xl" />
            </>
          ) : (
            <>Continue</>
          )}
        </button>
      </div>
    </>
  );
}

export default Welcome;
