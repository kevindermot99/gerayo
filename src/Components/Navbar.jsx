import React from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { BiSearch } from "react-icons/bi";

function Navbar({ title }) {
  return (
    <div className="h-[60px] px-5 border-b-[1px] border-border-lines-light flex items-center justify-between">
      
      <h1 className="font-bold tracking-tighter text-2xl max-lg:ml-7 text-dark-text/90 ">
        {title}
      </h1>
      <div className="w-fit flex items-center justify-end gap-2">
        <div className=" mr-2">
          <select
            name=""
            className="select-hide-icon rounded-md tracking-tight text-sm text-dark-text font-semibold bg-border-lines-light/40 py-2 px-3 "
          >
            <option disabled value="Algeria" title="Algeria">
              🇩🇿 &nbsp; Dz
            </option>
            <option disabled value="Angola" title="Angola">
              🇦🇴 &nbsp; Ao
            </option>
            <option disabled value="Benin" title="Benin">
              🇧🇯 &nbsp; Bj
            </option>
            <option disabled value="Botswana" title="Botswana">
              🇧🇼 &nbsp; Bw
            </option>
            <option disabled value="Burkina Faso" title="Burkina Faso">
              🇧🇫 &nbsp; Bf
            </option>
            <option disabled value="Burundi" title="Burundi">
              🇧🇮 &nbsp; Bi
            </option>
            <option disabled value="Cabo Verde" title="Cabo Verde">
              🇨🇻 &nbsp; Cv
            </option>
            <option disabled value="Cameroon" title="Cameroon">
              🇨🇲 &nbsp; Cm
            </option>
            <option
              disabled
              value="Central African Republic"
              title="Central African Republic"
            >
              🇨🇫 &nbsp; Cf
            </option>
            <option disabled value="Chad" title="Chad">
              🇹🇩 &nbsp; Td
            </option>
            <option disabled value="Comoros" title="Comoros">
              🇰🇲 &nbsp; Km
            </option>
            <option
              disabled
              value="Congo (Congo-Brazzaville)"
              title="Congo (Congo-Brazzaville)"
            >
              🇨🇬 &nbsp; Cg
            </option>
            <option disabled value="Côte d’Ivoire" title="Côte d’Ivoire">
              🇨🇮 &nbsp; Ci
            </option>
            <option disabled value="Djibouti" title="Djibouti">
              🇩🇯 &nbsp; Dj
            </option>
            <option disabled value="Egypt" title="Egypt">
              🇪🇬 &nbsp; Eg
            </option>
            <option
              disabled
              value="Equatorial Guinea"
              title="Equatorial Guinea"
            >
              🇬🇶 &nbsp; Gq
            </option>
            <option disabled value="Eritrea" title="Eritrea">
              🇪🇷 &nbsp; Er
            </option>
            <option
              disabled
              value="Eswatini (fmr. Swaziland)"
              title="Eswatini (fmr. Swaziland)"
            >
              🇸🇿 &nbsp; Sz
            </option>
            <option disabled value="Ethiopia" title="Ethiopia">
              🇪🇹 &nbsp; Et
            </option>
            <option disabled value="Gabon" title="Gabon">
              🇬🇦 &nbsp; Ga
            </option>
            <option disabled value="Gambia" title="Gambia">
              🇬🇲 &nbsp; Gm
            </option>
            <option disabled value="Ghana" title="Ghana">
              🇬🇭 &nbsp; Gh
            </option>
            <option disabled value="Guinea" title="Guinea">
              🇬🇳 &nbsp; Gn
            </option>
            <option disabled value="Guinea-Bissau" title="Guinea-Bissau">
              🇬🇼 &nbsp; Gw
            </option>
            <option disabled value="Kenya" title="Kenya">
              🇰🇪 &nbsp; Ke
            </option>
            <option disabled value="Lesotho" title="Lesotho">
              🇱🇸 &nbsp; Ls
            </option>
            <option disabled value="Liberia" title="Liberia">
              🇱🇷 &nbsp; Lr
            </option>
            <option disabled value="Libya" title="Libya">
              🇱🇾 &nbsp; Ly
            </option>
            <option disabled value="Madagascar" title="Madagascar">
              🇲🇬 &nbsp; Mg
            </option>
            <option disabled value="Malawi" title="Malawi">
              🇲🇼 &nbsp; Mw
            </option>
            <option disabled value="Mali" title="Mali">
              🇲🇱 &nbsp; Ml
            </option>
            <option disabled value="Mauritania" title="Mauritania">
              🇲🇷 &nbsp; Mr
            </option>
            <option disabled value="Mauritius" title="Mauritius">
              🇲🇺 &nbsp; Mu
            </option>
            <option disabled value="Morocco" title="Morocco">
              🇲🇦 &nbsp; Ma
            </option>
            <option disabled value="Mozambique" title="Mozambique">
              🇲🇿 &nbsp; Mz
            </option>
            <option disabled value="Namibia" title="Namibia">
              🇳🇦 &nbsp; Na
            </option>
            <option disabled value="Niger" title="Niger">
              🇳🇪 &nbsp; Ne
            </option>
            <option disabled value="Nigeria" title="Nigeria">
              🇳🇬 &nbsp; Ng
            </option>
            <option value="Rwanda" title="Rwanda" selected>
              🇷🇼 &nbsp; Rw
            </option>
            <option
              disabled
              value="São Tomé and Príncipe"
              title="São Tomé and Príncipe"
            >
              🇸🇹 &nbsp; St
            </option>
            <option disabled value="Senegal" title="Senegal">
              🇸🇳 &nbsp; Sn
            </option>
            <option disabled value="Seychelles" title="Seychelles">
              🇸🇨 &nbsp; Sc
            </option>
            <option disabled value="Sierra Leone" title="Sierra Leone">
              🇸🇱 &nbsp; Sl
            </option>
            <option disabled value="Somalia" title="Somalia">
              🇸🇴 &nbsp; So
            </option>
            <option disabled value="South Africa" title="South Africa">
              🇿🇦 &nbsp; Za
            </option>
            <option disabled value="South Sudan" title="South Sudan">
              🇸🇸 &nbsp; Ss
            </option>
            <option disabled value="Sudan" title="Sudan">
              🇸🇩 &nbsp; Sd
            </option>
            <option disabled value="Tanzania" title="Tanzania">
              🇹🇿 &nbsp; Tz
            </option>
            <option disabled value="Togo" title="Togo">
              🇹🇬 &nbsp; Tg
            </option>
            <option disabled value="Tunisia" title="Tunisia">
              🇹🇳 &nbsp; Tn
            </option>
            <option disabled value="Uganda" title="Uganda">
              🇺🇬 &nbsp; Ug
            </option>
            <option disabled value="Zambia" title="Zambia">
              🇿🇲 &nbsp; Zm
            </option>
            <option disabled value="Zimbabwe" title="Zimbabwe">
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
