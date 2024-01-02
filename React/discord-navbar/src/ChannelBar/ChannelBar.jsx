import Dropdown from "./Dropdown";

const general = [
  { name: "general", voice: false },
  { name: "memes", voice: false },
];
const questions = [
  { name: "react", voice: false },
  { name: "linux", voice: false },
  { name: "tailwind-css", voice: false },
];
const voice = [
  { name: "general", voice: true },
  { name: "general", voice: true },
];

export default function ChannelBar() {
  return (
    <div className="channel-bar">
      <div className="channel-block">
        <h5 className="channel-block-text">Channels</h5>
      </div>
      <div className="channelContainer">
        <Dropdown header="General" channels={general} key={0} />
        <Dropdown header="Questions" channels={questions} key={1} />
        <Dropdown header="Voice" channels={voice} key={2} />
      </div>
    </div>
  );
}
