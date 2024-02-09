import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Interest({ title, text }) {
  const [dropdownActive, setDropdownActive] = useState(false);
  const handleClick = () => {
    setDropdownActive(!dropdownActive);
  };
  return (
    <div className="mt-4">
      <div onClick={handleClick} className="hover:cursor-pointer">
        <h5 className="inline">{title}</h5>
        {dropdownActive ? (
          <RiArrowDropDownLine className="inline" size={34} />
        ) : (
          <RiArrowDropDownLine className="inline rotate-180" size={34} />
        )}
      </div>

      {dropdownActive && <p className="text-xl text-gray-200">{text}</p>}
    </div>
  );
}
