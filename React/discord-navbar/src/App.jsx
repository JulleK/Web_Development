import SideBar from "./SideBar/SideBar";
import ContentContainer from "./TextChannel/ContentContainer";
import ChannelBar from "./ChannelBar/ChannelBar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <ChannelBar />
      <ContentContainer />
    </div>
  );
}

export default App;
