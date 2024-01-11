import SideBarIcon from "./SideBarIcon";
import Divider from "./Divider";

import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

export default function SideBar() {
  return (
    <div
      className="fixed left-0 top-0 m-0 flex h-screen w-16 flex-col
       bg-white shadow-lg dark:bg-gray-900"
    >
      <SideBarIcon icon={<FaFire size={28} />} text="Fireship 🔥🔥🔥" />
      <Divider />
      <SideBarIcon icon={<BsPlus size={40} />} text="Discord Demo ❤️❤️❤️" />
      <SideBarIcon icon={<BsGearFill size={22} />} text="React ❄️" />
      <SideBarIcon
        icon={<BsFillLightningFill size={23} />}
        text="Tailwind 💨"
      />
    </div>
  );
}
