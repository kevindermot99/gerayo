import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import Travelers from "../assets/travelers.jpg";
import { GrFormNext } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { CgSpinner } from "react-icons/cg";
import { Helmet } from "react-helmet";

function Register() {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const [guestPending, setGuestPending] = useState(false);

  const handleClick = () => {
    setPending(true);
    setTimeout(() => {
      navigate("/feature2");
    }, 1500);
  };

  const handleShowPassword = () => {
    const input = document.getElementById("password");
    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  };

  useEffect(() => {
    const visitedAs = localStorage.getItem('visitedAs')
    if(visitedAs){
      navigate('/')
    }
  }, [])

  const LoginGuest = () => {
    setGuestPending(true);
    setTimeout(() => {
      try {
        localStorage.setItem("visitedAs", "guest");
        window.location.reload()
      } catch (err) {
        console.log("Failed to Login Guest");
      }
    }, 1000);
  };

  return (
    <div className="h-svh w-full overflow-x-clip overflow-y-auto flex items-center justify-between max-sm:justify-end p-8 max-sm:p-4 bg-white dark:bg-white">
      {/* Helmet */}
      <Helmet>
        <title>Login | gerayo.</title>
      </Helmet>
      <div className="fixed top-0 left-0 p-8 max-[250px]:bg-white dark:bg-white w-full h-fit flex justify-between items-center select-none ">
        {/* tab indicator */}
        <div className="flex items-center justify-start gap-1">
          <Link
            to={`/`}
            className={`h-[8px] aspect-square bg-black/20 rounded-xl `}
          ></Link>
          <Link
            to={`/feature2`}
            className={`h-[8px] aspect-square bg-black/20 rounded-xl `}
          ></Link>
          <span className={`h-[8px] w-[25px] bg-black rounded-xl `}></span>
        </div>

        {/* Skip */}
        {/* Skip */}
        <button
          onClick={LoginGuest}
          className="outline-none flex items-center justify-start text-main-color cursor-pointer h-fit w-fit active:scale-95 transition "
          title="Login as a Guest"
        >
          {guestPending ? (
            <>
              <CgSpinner className="animate-spinLoader text-2xl " />
            </>
          ) : (
            <>
              <p className=" font-medium text-sm ">Continue as Guest</p>
              <GrFormNext />
            </>
          )}
        </button>
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center max-sm:justify-between max-sm:pt-[70px]">
        {/* <Fade
          duration={500}
          cascade
          damping={0.3}
          className="w-full flex flex-col items-center justify-center"
        > */}
          <div className="flex flex-col items-center justify-center w-full h-fit max-sm:mt-10">
            <div className="flex items-center justify-center py-3">
              <img src={Logo} className="h-6 pt-0" />
              <h1 className=" font-bold text-[22px] tracking-tighter text-main-color pr-3  ">
                gerayo.
              </h1>
            </div>
            <h1 className="font-bold tracking-tighter text-2xl text-left text-dark-text/90">
              Let's Sign you up.
            </h1>
            <p className="tracking-tight text-sm text-left text-dark-text/80  max-w-[400px] font-semibold">
              Join Gerayo today.
            </p>

            <form className="w-full py-8 flex flex-col items-center justify-center gap-2">
              <div className="flex flex-col w-full items-start justify-start max-w-[350px]">
                <p className="text-sm font-medium py-1 text-dark-text">Email</p>
                <input
                  type="text"
                  name=""
                  className="bg-[#F2F1F6] text-dark-text text-sm  h-[50px] w-full flex items-center justify-start px-5 outline-none focus:ring-2 ring-main-color ring-offset-2  rounded-lg "
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col w-full items-start justify-start max-w-[350px]">
                <p className="text-sm font-medium py-1 text-dark-text">
                  Password
                </p>
                <input
                  type="password"
                  id="password"
                  className="bg-[#F2F1F6] text-dark-text text-sm  h-[50px] w-full flex items-center justify-start px-5 outline-none focus:ring-2 ring-main-color ring-offset-2  rounded-lg "
                  placeholder="Password"
                />
              </div>
              <div className="flex flex-col w-full items-start justify-start max-w-[350px]">
                <p className="text-sm font-medium py-1 text-dark-text">
                  Confirm Password
                </p>
                <input
                  type="password"
                  id="password"
                  className="bg-[#F2F1F6] text-dark-text text-sm  h-[50px] w-full flex items-center justify-start px-5 outline-none focus:ring-2 ring-main-color ring-offset-2  rounded-lg "
                  placeholder="Re-enter Password"
                />
              </div>
            </form>
          </div>
          <div className="flex flex-col items-start justify-start">
            <button
              // onClick={handleClick}
              className="bg-main-color my-4 outline-none text-white font-bold text-base transition active:scale-90 h-[50px] w-full max-w-[250px] rounded-[20px] flex items-center justify-center gap-2"
            >
              {pending ? (
                <>
                  <CgSpinner className="animate-spinLoader text-2xl " />
                  Signing up..
                </>
              ) : (
                <>Sign up</>
              )}
            </button>
            <p className="flex items-center justify-center w-full text-sm gap-2 text-dark-text">
              Already have an account?{" "}
              <Link to={"/login"} className="text-main-color font-semibold">
                Login
              </Link>
            </p>
          </div>
        {/* </Fade> */}
      </div>
    </div>
  );
}

export default Register;
