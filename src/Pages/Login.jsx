import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Travelers from "../assets/travelers.jpg";
import { GrFormNext } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { CgSpinner } from "react-icons/cg";

function Login() {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);

  const handleClick = () => {
    setPending(true);
    setTimeout(() => {
      navigate("/feature2");
    }, 1500);
  };
  return (
    <div className="h-[100vh] w-full overflow-x-clip overflow-y-auto flex items-center justify-between max-sm:justify-end p-8 max-sm:p-4 bg-white dark:bg-white">
      <div className="w-[50%] max-md:w-full h-full flex flex-col items-start justify-between">
        <div className="flex flex-col items-start justify-start w-full">
          <h1 className="font-bold tracking-tighter text-2xl text-left text-dark-text/90">
            Let's Sign you in.
          </h1>
          <p className="tracking-tight text-sm text-left text-dark-text/80  max-w-[400px] font-semibold">
            Welcome back!
          </p>

          <form ></form>
        </div>
        <div className="flex flex-col items-start justify-start">
          <button
            onClick={handleClick}
            className="bg-main-color my-4 outline-none text-white font-bold text-base transition active:scale-90 h-[50px] w-full max-w-[250px] rounded-[20px] flex items-center justify-center gap-2"
          >
            {pending ? (
              <>
                <CgSpinner className="animate-spinLoader text-2xl " />
                Signing in..
              </>
            ) : (
              <>Sign in</>
            )}
          </button>
          <p className="flex items-center justify-center w-full text-sm gap-2 text-dark-text">
            Don't have an account?{" "}
            <Link to={"/"} className="text-main-color font-semibold">
              Register
            </Link>
          </p>
        </div>
      </div>
      <div className="w-[50%] max-md:hidden h-full">j</div>
    </div>
  );
}

export default Login;
