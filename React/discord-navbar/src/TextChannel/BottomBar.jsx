import { BsPlusCircleFill } from "react-icons/bs";
export default function BottomBar() {
  return (
    <div className="bottom-bar">
      <BsPlusCircleFill className="bottom-bar-icon" />
      <input
        className="bottom-bar-input"
        type="text"
        placeholder="Enter message..."
      />
    </div>
  );
}
