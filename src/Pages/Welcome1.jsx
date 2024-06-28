import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import BusStop from "../assets/bus-Stop.jpg";
import { GrFormNext } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import { CgSpinner } from "react-icons/cg";

function Welcome1() {
  const navigate = useNavigate();
  const [pending, setPending] = useState(false);

  const handleClick = () => {
    setPending(true)
    setTimeout(() => {
      navigate("/feature2");
    }, 1000);
  };
  return (
    <div className="h-[100vh] w-full overflow-x-clip overflow-y-auto flex flex-col items-center justify-center max-sm:justify-end p-8 max-sm:p-4 bg-white dark:bg-white">
      <div className="fixed top-0 left-0 p-8 max-[250px]:bg-white dark:bg-white w-full h-fit flex justify-between items-center select-none ">
        {/* tab indicator */}
        <div className="flex items-center justify-start gap-1">
          <Link
            to={`/`}
            className={`h-[8px] w-[25px] bg-black rounded-xl `}
          ></Link>
          <Link
            to={`/feature2`}
            className={`h-[8px] aspect-square bg-black/20 rounded-xl `}
          ></Link>
          <span
            className={`h-[8px] aspect-square bg-black/20 rounded-xl `}
          ></span>
        </div>

        {/* Skip */}
        <Link 
        to={'/login'}
          className="flex items-center justify-start text-main-color cursor-pointer h-fit w-fit active:scale-95 transition "
          title="Skip for now"
        >
          <p className=" font-medium text-sm ">Skip</p>
          <GrFormNext />
        </Link>
      </div>

      <div className="max-w-[1100px] w-full h-fit max-sm:h-full max-sm:pt-[300px] flex flex-col items-center justify-end max-sm:gap-10 py-10 max-sm:py-6 mx-auto">
        <Fade
          duration={500}
          direction="up"
          cascade
          damping={0.3}
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="flex items-center justify-center ">
            <img src={Logo} className="h-6" />
            <h1 className=" font-bold text-[22px] tracking-tighter text-main-color ">
              gerayo.
            </h1>
          </div>
          <div className="flex items-center justify-center flex-col select-none pointer-events-none">
            <img src={BusStop} className="h-auto w-full max-w-[500px]" />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold tracking-tighter text-2xl text-center text-dark-text/90 line-clamp-2 max-w-[350px]">
              Check the next bus arrival time
            </h1>
            <p className="tracking-tight text-sm text-center text-dark-text/80  max-w-[400px] font-semibold px-10">
              Enter your location and route for real-time bus updates and never
              miss your ride.
            </p>
          </div>
          <button
            onClick={handleClick}
            className="bg-main-color my-5 outline-none text-white font-bold text-base transition active:scale-90 h-[50px] w-full max-w-[250px] rounded-[20px] flex items-center justify-center gap-2"
          >
            {pending ? (
              <>
                <CgSpinner className="animate-spinLoader text-2xl " />
                Moving on
              </>
            ) : (
              <>Continue</>
            )}
          </button>
        </Fade>
      </div>
    </div>
  );
}

export default Welcome1;
