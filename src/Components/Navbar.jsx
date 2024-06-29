import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { HiOutlineLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

function Navbar({ title }) {
  const [profileMenu, setProfileMenu] = useState(false);
  const navigate = useNavigate();

  const showMenu = () => {
    setProfileMenu(!profileMenu);
  };

  const logMeOut = () => {
    localStorage.removeItem("visitedAs");
    window.location.reload()
  };

  return (
    <div className="h-[60px] px-5 border-b-[1px] border-border-lines-light dark:border-border-lines-dark flex items-center justify-between">
      {/* Profile Menu overlay */}
      <div
        onClick={() => setProfileMenu(false)}
        className={`bg-stone-400/10 fixed top-0 left-0 w-full h-full ${
          profileMenu
            ? "transition ease-in-out duration-200 opacity-100  z-30"
            : "opacity-0 -z-10"
        }`}
      ></div>
      <h1 className="font-bold tracking-tighter text-2xl max-lg:ml-7 text-dark-text/90 dark:text-white/70 line-clamp-1 ">
        {title}
      </h1>
      <div className="w-fit flex items-center justify-end gap-2">
        <div className=" mr-2">
          <select
            defaultValue={"Rwanda"}
            name=""
            className="select-hide-icon rounded-md tracking-tight text-sm text-dark-text dark:text-white/70 font-semibold bg-border-lines-light/40 dark:bg-stone-600/20 py-2 px-3 outline-none "
          >
            <option
              className="dark:bg-stone-700"
              disabled
              value="Algeria"
              title="Algeria"
            >
              🇩🇿 &nbsp; Dz
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Angola"
              title="Angola"
            >
              🇦🇴 &nbsp; Ao
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Benin"
              title="Benin"
            >
              🇧🇯 &nbsp; Bj
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Botswana"
              title="Botswana"
            >
              🇧🇼 &nbsp; Bw
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Burkina Faso"
              title="Burkina Faso"
            >
              🇧🇫 &nbsp; Bf
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Burundi"
              title="Burundi"
            >
              🇧🇮 &nbsp; Bi
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Cabo Verde"
              title="Cabo Verde"
            >
              🇨🇻 &nbsp; Cv
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Cameroon"
              title="Cameroon"
            >
              🇨🇲 &nbsp; Cm
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Central African Republic"
              title="Central African Republic"
            >
              🇨🇫 &nbsp; Cf
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Chad"
              title="Chad"
            >
              🇹🇩 &nbsp; Td
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Comoros"
              title="Comoros"
            >
              🇰🇲 &nbsp; Km
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Congo (Congo-Brazzaville)"
              title="Congo (Congo-Brazzaville)"
            >
              🇨🇬 &nbsp; Cg
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Côte d’Ivoire"
              title="Côte d’Ivoire"
            >
              🇨🇮 &nbsp; Ci
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Djibouti"
              title="Djibouti"
            >
              🇩🇯 &nbsp; Dj
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Egypt"
              title="Egypt"
            >
              🇪🇬 &nbsp; Eg
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Equatorial Guinea"
              title="Equatorial Guinea"
            >
              🇬🇶 &nbsp; Gq
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Eritrea"
              title="Eritrea"
            >
              🇪🇷 &nbsp; Er
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Eswatini (fmr. Swaziland)"
              title="Eswatini (fmr. Swaziland)"
            >
              🇸🇿 &nbsp; Sz
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Ethiopia"
              title="Ethiopia"
            >
              🇪🇹 &nbsp; Et
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Gabon"
              title="Gabon"
            >
              🇬🇦 &nbsp; Ga
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Gambia"
              title="Gambia"
            >
              🇬🇲 &nbsp; Gm
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Ghana"
              title="Ghana"
            >
              🇬🇭 &nbsp; Gh
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Guinea"
              title="Guinea"
            >
              🇬🇳 &nbsp; Gn
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Guinea-Bissau"
              title="Guinea-Bissau"
            >
              🇬🇼 &nbsp; Gw
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Kenya"
              title="Kenya"
            >
              🇰🇪 &nbsp; Ke
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Lesotho"
              title="Lesotho"
            >
              🇱🇸 &nbsp; Ls
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Liberia"
              title="Liberia"
            >
              🇱🇷 &nbsp; Lr
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Libya"
              title="Libya"
            >
              🇱🇾 &nbsp; Ly
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Madagascar"
              title="Madagascar"
            >
              🇲🇬 &nbsp; Mg
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Malawi"
              title="Malawi"
            >
              🇲🇼 &nbsp; Mw
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Mali"
              title="Mali"
            >
              🇲🇱 &nbsp; Ml
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Mauritania"
              title="Mauritania"
            >
              🇲🇷 &nbsp; Mr
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Mauritius"
              title="Mauritius"
            >
              🇲🇺 &nbsp; Mu
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Morocco"
              title="Morocco"
            >
              🇲🇦 &nbsp; Ma
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Mozambique"
              title="Mozambique"
            >
              🇲🇿 &nbsp; Mz
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Namibia"
              title="Namibia"
            >
              🇳🇦 &nbsp; Na
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Niger"
              title="Niger"
            >
              🇳🇪 &nbsp; Ne
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Nigeria"
              title="Nigeria"
            >
              🇳🇬 &nbsp; Ng
            </option>
            <option className="dark:bg-stone-700" value="Rwanda" title="Rwanda">
              🇷🇼 &nbsp; Rw
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="São Tomé and Príncipe"
              title="São Tomé and Príncipe"
            >
              🇸🇹 &nbsp; St
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Senegal"
              title="Senegal"
            >
              🇸🇳 &nbsp; Sn
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Seychelles"
              title="Seychelles"
            >
              🇸🇨 &nbsp; Sc
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Sierra Leone"
              title="Sierra Leone"
            >
              🇸🇱 &nbsp; Sl
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Somalia"
              title="Somalia"
            >
              🇸🇴 &nbsp; So
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="South Africa"
              title="South Africa"
            >
              🇿🇦 &nbsp; Za
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="South Sudan"
              title="South Sudan"
            >
              🇸🇸 &nbsp; Ss
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Sudan"
              title="Sudan"
            >
              🇸🇩 &nbsp; Sd
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Tanzania"
              title="Tanzania"
            >
              🇹🇿 &nbsp; Tz
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Togo"
              title="Togo"
            >
              🇹🇬 &nbsp; Tg
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Tunisia"
              title="Tunisia"
            >
              🇹🇳 &nbsp; Tn
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Uganda"
              title="Uganda"
            >
              🇺🇬 &nbsp; Ug
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Zambia"
              title="Zambia"
            >
              🇿🇲 &nbsp; Zm
            </option>
            <option
              className="dark:bg-stone-700"
              disabled
              value="Zimbabwe"
              title="Zimbabwe"
            >
              🇿🇼 &nbsp; Zw
            </option>
          </select>
        </div>
        <button
          className=" h-8 aspect-square flex items-center justify-center rounded-full group active:scale-95 select-none"
          title="Search"
        >
          <BiSearch className="text-2xl text-dark-text dark:text-white/70 group-hover:text-main-color " />
        </button>
        <button
          className=" h-8 aspect-square flex items-center justify-center rounded-full group mr-[7px] active:scale-95 select-none"
          title="Notifications"
        >
          <IoNotificationsOutline className="text-2xl text-dark-text dark:text-white/70 group-hover:text-main-color " />
        </button>
        <div
          className="flex cursor-pointer select-none relative"
          title="Andrew"
        >
          <div
            onClick={showMenu}
            className={`h-8 active:scale-95 aspect-square hover:bg-border-lines-light/50 rounded-full flex items-center justify-center ${
              profileMenu ? "z-30" : ""
            }`}
          >
            <p className="bg-main-color text-white w-full h-full font-bold rounded-full flex items-center justify-center ">
              A
            </p>
          </div>

          {/* dropdown */}
          <div
            className={`bg-white min-h-[180px] w-[230px] absolute top-[40px] rounded-xl right-0 overflow-clip border-[1px] border-border-lines-light flex flex-col items-center justify-start p-2 origin-top-right ${
              profileMenu ? "flex z-30 " : "hidden -z-10"
            }`}
          >
            <button className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3">
              <VscAccount className="text-[23px] text-dark-text/60" />
              <h1 className="text-dark-text font-medium tracking-tight text-sm capitalize group-hover:text-main-color ">
                Profile
              </h1>
            </button>
            <button className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3">
              <FiSettings className="text-[23px] text-dark-text/60" />
              <h1 className="text-dark-text font-medium tracking-tight text-sm capitalize group-hover:text-main-color ">
                Settings
              </h1>
            </button>
            <button className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3">
              <FiHelpCircle className="text-[23px] text-dark-text/60" />
              <h1 className="text-dark-text font-medium tracking-tight text-sm capitalize group-hover:text-main-color ">
                Support Center
              </h1>
            </button>
            <div className="w-full h-[1px] bg-border-lines-light my-2"></div>
            <button
              onClick={logMeOut}
              className="h-[43px] min-h-[43px] w-full hover:bg-stone-100 rounded-lg flex items-center justify-start px-3 gap-3"
            >
              <HiOutlineLogout className="text-[23px] text-red-600/70" />
              <h1 className="text-dark-text font-medium tracking-tight text-sm capitalize group-hover:text-main-color ">
                Log Out
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
