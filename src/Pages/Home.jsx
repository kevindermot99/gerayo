import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { HiOutlineViewBoards } from "react-icons/hi";
import { TbListDetails } from "react-icons/tb";
import { LuCalendar } from "react-icons/lu";
import { IoMdShare } from "react-icons/io";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsBusFront } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SlOptions } from "react-icons/sl";
import Ticket from "../Components/Ticket";

function Home() {
  const horizonLogo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW4hJXePN-LnaVGRHInc1S4TwB_4GrBAFUs4gnTSM1qY1dMrbv0R1bNHrw-1ERZUS5KyE&usqp=CAU';
  const volcanoLogo = 'https://media.licdn.com/dms/image/C4D03AQED1rAkP-nhDg/profile-displayphoto-shrink_200_200/0/1517029814079?e=2147483647&v=beta&t=S8fvfL4gVAoaHoBVw4wmVkTvkhJGI_tCBdoRwzJbWh8';
  return (
    <div className="w-full h-full flex min-h-screen bg-body-color-light overflow-y-hidden max-h-dvh ">
      <Sidebar />
      <div className=" w-full min-h-full">
        <Navbar title="Buy a ticket" />
        <div className="h-[45px] py-3 px-5 w-full border-b-[1px] border-border-lines-light flex items-center justify-start gap-5">
          <button className="h-[45px] flex items-center justify-center gap-1 text-dark-text border-b-2 border-main-color select-none ">
            <HiOutlineViewBoards className="text-2xl text-main-color " />
            <p className="tracking-tight font-medium text-sm">Pipeline View</p>
          </button>
          <button className="h-[45px] flex items-center justify-center gap-1 text-dark-text border-b-2 border-transparent select-none ">
            <TbListDetails className="text-[22px] text-dark-text/50 " />
            <p className="tracking-tight font-medium text-sm">List View</p>
          </button>
          <p className="text-dark-text/30  ">|</p>
          <p className="tracking-tight text-sm text-dark-text/50 font-semibold ">
            From
            <span className="text-dark-text px-2">
              <select
                name=""
                className="select-icon-padding py-1 pl-3 rounded-md bg-border-lines-light/40  "
              >
                <option value="Nyabugogo">Kigali</option>
                <option value="Muhanga">South</option>
                <option value="Karongi">East</option>
                <option value="Huye">West</option>
                <option value="Huye">North</option>
              </select>
            </span>
          </p>
          <p className="tracking-tight text-sm text-dark-text/50 font-semibold ">
            Available Tickets <span className="text-dark-text">340</span>
          </p>
        </div>
        <div className="gridRespo p-5 gap-2 overflow-y-auto max-h-[90vh] pb-20">
          
          <div className="w-full h-fit bg-border-lines-light/30 rounded-xl p-2">
            <h1 className="capitalize tracking-wide text-sm opacity-50 font-medium px-2 pt-1 text-dark-text ">
              to East
            </h1>
            <h1 className="capitalize tracking-tight font-bold text-lg px-2 pb-1 text-dark-text ">
              1,403 rwf
              <span className="uppercase text-xs font-medium opacity-50 px-2">
              5 Tickets
              </span>
            </h1>
            <div className="w-full h-full flex flex-col mt-2 gap-2">
              <Ticket location="Rwamagana" leavingAt="8:00 pm" agency="HORIZON EXPRESS" price={2200} src={horizonLogo} />
              <Ticket location="Nyagatare" leavingAt="1:15 pm" agency="HORIZON EXPRESS" price={3200} src={horizonLogo} />
              <Ticket location="Kayonza" leavingAt="3:00 pm" agency="HORIZON EXPRESS" price={3400} src={horizonLogo} />
              <Ticket location="Kirehe" leavingAt="6:30 pm" agency="HORIZON EXPRESS" price={3200} src={horizonLogo} />
              <Ticket location="Bugesera" leavingAt="9:00 am" agency="HORIZON EXPRESS" price={2500} src={horizonLogo} />
            </div>
          </div>
          <div className="w-full h-fit bg-border-lines-light/30 rounded-xl p-2">
            <h1 className="capitalize tracking-wide text-sm opacity-50 font-medium px-2 pt-1 text-dark-text ">
              to West
            </h1>
            <h1 className="capitalize tracking-tight font-bold text-lg px-2 pb-1 text-dark-text ">
              1,403 rwf
              <span className="uppercase text-xs font-medium opacity-50 px-2">
              5 Tickets
              </span>
            </h1>
            <div className="w-full h-full flex flex-col mt-2 gap-2">
              <Ticket location="Karongi" leavingAt="11:00 pm" agency="VOLCANO EXPRESS" price={2200} src={volcanoLogo} />
              <Ticket location="Nyamasheke" leavingAt="10:15 pm" agency="VOLCANO EXPRESS" price={3200} src={volcanoLogo} />
              <Ticket location="Ngororero" leavingAt="2:00 pm" agency="VOLCANO EXPRESS" price={3400} src={volcanoLogo} />
              <Ticket location="Rutsiro" leavingAt="4:30 pm" agency="VOLCANO EXPRESS" price={3200} src={volcanoLogo} />
              <Ticket location="Rusizi" leavingAt="2:00 am" agency="VOLCANO EXPRESS" price={2500} src={volcanoLogo} />
            </div>
          </div>
          <div className="w-full h-fit bg-border-lines-light/30 rounded-xl p-2">
            <h1 className="capitalize tracking-wide text-sm opacity-50 font-medium px-2 pt-1 text-dark-text ">
              to South
            </h1>
            <h1 className="capitalize tracking-tight font-bold text-lg px-2 pb-1 text-dark-text ">
              1,403 rwf
              <span className="uppercase text-xs font-medium opacity-50 px-2">
              5 Tickets
              </span>
            </h1>
            <div className="w-full h-full flex flex-col mt-2 gap-2">
              <Ticket location="Rwamagana" leavingAt="3:00 pm" agency="HORIZON EXPRESS" price={2200} src={horizonLogo} />
              <Ticket location="Nyagatare" leavingAt="10:15 pm" agency="HORIZON EXPRESS" price={3200} src={horizonLogo} />
              <Ticket location="Kayonza" leavingAt="8:00 pm" agency="HORIZON EXPRESS" price={3400} src={horizonLogo} />
              <Ticket location="Kirehe" leavingAt="4:30 pm" agency="HORIZON EXPRESS" price={3200} src={horizonLogo} />
              <Ticket location="Bugesera" leavingAt="1:00 pm" agency="HORIZON EXPRESS" price={2500} src={horizonLogo} />
            </div>
          </div>
          <div className="w-full h-fit bg-border-lines-light/30 rounded-xl p-2">
            <h1 className="capitalize tracking-wide text-sm opacity-50 font-medium px-2 pt-1 text-dark-text ">
              to North
            </h1>
            <h1 className="capitalize tracking-tight font-bold text-lg px-2 pb-1 text-dark-text ">
              1,403 rwf
              <span className="uppercase text-xs font-medium opacity-50 px-2">
                5 Tickets
              </span>
            </h1>
            <div className="w-full h-full flex flex-col mt-2 gap-2">
              <Ticket location="Karongi" leavingAt="3:00 pm" agency="VOLCANO EXPRESS" price={2200} src={volcanoLogo} />
              <Ticket location="Nyamasheke" leavingAt="1:15 pm" agency="VOLCANO EXPRESS" price={3200} src={volcanoLogo} />
              <Ticket location="Ngororero" leavingAt="5:00 pm" agency="VOLCANO EXPRESS" price={3400} src={volcanoLogo} />
              <Ticket location="Rutsiro" leavingAt="8:30 pm" agency="VOLCANO EXPRESS" price={3200} src={volcanoLogo} />
              <Ticket location="Rusizi" leavingAt=":00 am" agency="VOLCANO EXPRESS" price={2500} src={volcanoLogo} />
            </div>
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default Home;
