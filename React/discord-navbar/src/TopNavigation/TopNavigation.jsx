import { FaHashtag, FaRegBell, FaUserCircle } from "react-icons/fa";
import Search from "./Search";
import ThemeIcon from "./ThemeIcon";

export default function TopNavigation() {
  return (
    <div className="top-navigation">
      <HashtagIcon />
      <Title />
      <ThemeIcon />
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  );
}

function BellIcon() {
  return <FaRegBell size="24" className="top-navigation-icon" />;
}
function UserCircle() {
  return <FaUserCircle size="24" className="top-navigation-icon" />;
}
function HashtagIcon() {
  return <FaHashtag size="20" className="title-hashtag" />;
}
function Title() {
  return <h5 className="title-text">tailwind-css</h5>;
}
