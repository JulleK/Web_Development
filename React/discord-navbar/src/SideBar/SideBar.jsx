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
      <SideBarIcon icon={<BsPlus size={32} />} />
      <SideBarIcon icon={<BsFillLightningFill size={20} />} />
      <SideBarIcon icon={<FaPoo size={22} />} />
    </div>
  );
}
