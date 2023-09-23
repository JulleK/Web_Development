export default function ShoppingListItem({ name, quantity, available }) {
  const styles = {
    color: available ? "green" : "grey",
    textDecoration: available ? "none" : "line-through",
  };

  return (
    <li style={styles}>
      {name} - {quantity}
    </li>
  );
}
