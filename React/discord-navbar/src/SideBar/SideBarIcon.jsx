export default function SideBarIcon({ icon, text = "tooltip 💡" }) {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-75">{text}</span>
    </div>
  );
}
