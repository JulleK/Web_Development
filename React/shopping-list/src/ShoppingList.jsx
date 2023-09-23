import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <ShoppingListItem
          key={i.id}
          name={i.name}
          quantity={i.quantity}
          available={i.available}
          // we can shorten passing props with spread operator
          // {...i}
        />
      ))}
    </ul>
  );
}
