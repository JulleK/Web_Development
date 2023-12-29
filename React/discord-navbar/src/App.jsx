import SideBar from "./SideBar/SideBar";
import ContentContainer from "./TopNavigation/ContentContainer";

function App() {
  return (
    <div className="flex">
      <ContentContainer />
      <SideBar />
    </div>
  );
}

export default App;
