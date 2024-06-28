import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";

function Navbar({ title }) {
  return (
    <div className="h-[60px] px-5 border-b-[1px] border-border-lines-light dark:border-border-lines-dark flex items-center justify-between">
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
            <option
              className="dark:bg-stone-700"
              value="Rwanda"
              title="Rwanda"
            >
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
          className="flex cursor-pointer active:scale-95 select-none"
          title="Andrew"
        >
          <div className="h-8 aspect-square hover:bg-border-lines-light/50 rounded-full flex items-center justify-center">
            <p className="bg-main-color text-white w-full h-full font-bold rounded-full flex items-center justify-center ">
              A
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
