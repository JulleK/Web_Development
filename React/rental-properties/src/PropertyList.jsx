import Property from "./Property";
import "./PropertyList.css";
export default function PropertyList({ properties }) {
  return (
    <div className="Properties">
      {properties.map((p) => (
        <Property key={p.id} name={p.name} price={p.price} rating={p.rating} />
      ))}
    </div>
  );
}
