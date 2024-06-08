import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div className="w-full h-full flex min-h-screen bg-body-color-light">
      <Sidebar />
      <div className=" w-full min-h-full">
        <Navbar title='Tickets' />
        <div className="h-[45px] p-3 w-full border-b-[1px] border-border-lines-light "></div>
      </div>
    </div>
  );
}

export default Home;
