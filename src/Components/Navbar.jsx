import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";

function Navbar({ title }) {
  return (
    <div className="h-[60px] px-5 border-b-[1px] border-border-lines-light flex items-center justify-between">
      <h1 className="font-bold tracking-tighter text-2xl text-dark-text/90 ">
        {title}
      </h1>
      <div className="w-fit flex items-center justify-end gap-2">
        <div className=" mr-2">
          <select
            name=""
            className="select-hide-icon rounded-md tracking-tight text-sm text-dark-text font-semibold bg-border-lines-light/40 py-2 px-3 "
          >
            <option value="Algeria" title="Algeria">
              🇩🇿 &nbsp; Dz
            </option>
            <option value="Angola" title="Angola">
              🇦🇴 &nbsp; Ao
            </option>
            <option value="Benin" title="Benin">
              🇧🇯 &nbsp; Bj
            </option>
            <option value="Botswana" title="Botswana">
              🇧🇼 &nbsp; Bw
            </option>
            <option value="Burkina Faso" title="Burkina Faso">
              🇧🇫 &nbsp; Bf
            </option>
            <option value="Burundi" title="Burundi">
              🇧🇮 &nbsp; Bi
            </option>
            <option value="Cabo Verde" title="Cabo Verde">
              🇨🇻 &nbsp; Cv
            </option>
            <option value="Cameroon" title="Cameroon">
              🇨🇲 &nbsp; Cm
            </option>
            <option
              value="Central African Republic"
              title="Central African Republic"
            >
              🇨🇫 &nbsp; Cf
            </option>
            <option value="Chad" title="Chad">
              🇹🇩 &nbsp; Td
            </option>
            <option value="Comoros" title="Comoros">
              🇰🇲 &nbsp; Km
            </option>
            <option
              value="Congo (Congo-Brazzaville)"
              title="Congo (Congo-Brazzaville)"
            >
              🇨🇬 &nbsp; Cg
            </option>
            <option value="Côte d’Ivoire" title="Côte d’Ivoire">
              🇨🇮 &nbsp; Ci
            </option>
            <option value="Djibouti" title="Djibouti">
              🇩🇯 &nbsp; Dj
            </option>
            <option value="Egypt" title="Egypt">
              🇪🇬 &nbsp; Eg
            </option>
            <option value="Equatorial Guinea" title="Equatorial Guinea">
              🇬🇶 &nbsp; Gq
            </option>
            <option value="Eritrea" title="Eritrea">
              🇪🇷 &nbsp; Er
            </option>
            <option
              value="Eswatini (fmr. Swaziland)"
              title="Eswatini (fmr. Swaziland)"
            >
              🇸🇿 &nbsp; Sz
            </option>
            <option value="Ethiopia" title="Ethiopia">
              🇪🇹 &nbsp; Et
            </option>
            <option value="Gabon" title="Gabon">
              🇬🇦 &nbsp; Ga
            </option>
            <option value="Gambia" title="Gambia">
              🇬🇲 &nbsp; Gm
            </option>
            <option value="Ghana" title="Ghana">
              🇬🇭 &nbsp; Gh
            </option>
            <option value="Guinea" title="Guinea">
              🇬🇳 &nbsp; Gn
            </option>
            <option value="Guinea-Bissau" title="Guinea-Bissau">
              🇬🇼 &nbsp; Gw
            </option>
            <option value="Kenya" title="Kenya">
              🇰🇪 &nbsp; Ke
            </option>
            <option value="Lesotho" title="Lesotho">
              🇱🇸 &nbsp; Ls
            </option>
            <option value="Liberia" title="Liberia">
              🇱🇷 &nbsp; Lr
            </option>
            <option value="Libya" title="Libya">
              🇱🇾 &nbsp; Ly
            </option>
            <option value="Madagascar" title="Madagascar">
              🇲🇬 &nbsp; Mg
            </option>
            <option value="Malawi" title="Malawi">
              🇲🇼 &nbsp; Mw
            </option>
            <option value="Mali" title="Mali">
              🇲🇱 &nbsp; Ml
            </option>
            <option value="Mauritania" title="Mauritania">
              🇲🇷 &nbsp; Mr
            </option>
            <option value="Mauritius" title="Mauritius">
              🇲🇺 &nbsp; Mu
            </option>
            <option value="Morocco" title="Morocco">
              🇲🇦 &nbsp; Ma
            </option>
            <option value="Mozambique" title="Mozambique">
              🇲🇿 &nbsp; Mz
            </option>
            <option value="Namibia" title="Namibia">
              🇳🇦 &nbsp; Na
            </option>
            <option value="Niger" title="Niger">
              🇳🇪 &nbsp; Ne
            </option>
            <option value="Nigeria" title="Nigeria">
              🇳🇬 &nbsp; Ng
            </option>
            <option value="Rwanda" title="Rwanda" selected>
              🇷🇼 &nbsp; Rw
            </option>
            <option value="São Tomé and Príncipe" title="São Tomé and Príncipe">
              🇸🇹 &nbsp; St
            </option>
            <option value="Senegal" title="Senegal">
              🇸🇳 &nbsp; Sn
            </option>
            <option value="Seychelles" title="Seychelles">
              🇸🇨 &nbsp; Sc
            </option>
            <option value="Sierra Leone" title="Sierra Leone">
              🇸🇱 &nbsp; Sl
            </option>
            <option value="Somalia" title="Somalia">
              🇸🇴 &nbsp; So
            </option>
            <option value="South Africa" title="South Africa">
              🇿🇦 &nbsp; Za
            </option>
            <option value="South Sudan" title="South Sudan">
              🇸🇸 &nbsp; Ss
            </option>
            <option value="Sudan" title="Sudan">
              🇸🇩 &nbsp; Sd
            </option>
            <option value="Tanzania" title="Tanzania">
              🇹🇿 &nbsp; Tz
            </option>
            <option value="Togo" title="Togo">
              🇹🇬 &nbsp; Tg
            </option>
            <option value="Tunisia" title="Tunisia">
              🇹🇳 &nbsp; Tn
            </option>
            <option value="Uganda" title="Uganda">
              🇺🇬 &nbsp; Ug
            </option>
            <option value="Zambia" title="Zambia">
              🇿🇲 &nbsp; Zm
            </option>
            <option value="Zimbabwe" title="Zimbabwe">
              🇿🇼 &nbsp; Zw
            </option>
          </select>
        </div>
        <button
          className=" h-8 aspect-square flex items-center justify-center rounded-full group active:scale-95 select-none"
          title="Search"
        >
          <BiSearch className="text-2xl text-dark-text group-hover:text-main-color " />
        </button>
        <button
          className=" h-8 aspect-square flex items-center justify-center rounded-full group mr-[7px] active:scale-95 select-none"
          title="Notifications"
        >
          <IoNotificationsOutline className="text-2xl text-dark-text group-hover:text-main-color " />
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
