import { useState } from "react";
import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";
import { BsHash } from "react-icons/bs";
import { AiOutlineSound } from "react-icons/ai";

export default function Dropdown({ header, channels }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="dropdown">
      <div onClick={() => setExpanded(!expanded)} className="dropdown-header">
        <ChevronIcon expanded={expanded} />
        <h5
          className={
            expanded ? "dropdown-header-text-selected" : "dropdown-header-text"
          }
        >
          {header}
        </h5>
        <FaPlus
          size="12"
          className="text-accent my-auto ml-auto text-opacity-80"
        />
      </div>
      {expanded &&
        channels &&
        channels.map((channel, idx) => (
          <TopicChannel name={channel.name} voice={channel.voice} key={idx} />
        ))}
    </div>
  );
}

function ChevronIcon({ expanded }) {
  return expanded ? (
    <FaChevronDown
      size={10}
      className="text-accent my-auto mr-1 text-opacity-80"
    />
  ) : (
    <FaChevronRight
      size={10}
      className="text-accent my-auto mr-1 text-opacity-80"
    />
  );
}

function TopicChannel({ name, voice = false }) {
  return (
    <div className="dropdown-channel">
      {voice ? (
        <AiOutlineSound size="16" className="dropdown-channel-icon mr-1.5" />
      ) : (
        <BsHash size="20" className="dropdown-channel-icon" />
      )}

      <h5 className="dropdown-channel-text">{name}</h5>
    </div>
  );
}
