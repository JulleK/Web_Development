import "./Box.css";
export default function Box({ isActive, clickFunc }) {
  return (
    <div
      className="Box"
      style={{ backgroundColor: isActive ? "red" : "black" }}
      onClick={clickFunc}
    ></div>
  );
}
