export default function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <li
          key={i.id}
          style={{
            color: i.available ? "green" : "grey",
            textDecoration: i.available ? "none" : "line-through",
          }}
        >
          {i.name} - {i.quantity}
        </li>
      ))}
    </ul>
  );
}
