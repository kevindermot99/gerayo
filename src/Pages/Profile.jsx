import React from "react";
import { MdOutlineArrowCircleLeft } from "react-icons/md";

function Profile() {
  return (
    <div className="w-full flex bg-stone-100 h-full  ">
      <div className="w-full h-full pt-10 flex flex-col ">
        <div className="flex items-center justify-center relative pb-12">
          <MdOutlineArrowCircleLeft className="text-[27px] absolute left-5" />
          <h1 className="text-dark-text font-bold text-2xl ">Profile</h1>
        </div>
        <div className="bg-white p-5 rounded-t-3xl  ">
            <div className="bg-stone-200 w-full h-[70px] rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
