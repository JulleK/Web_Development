import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuid } from "uuid";

export default function ShoppingList() {
  const [shopItems, setShopItems] = useState([
    { id: uuid(), product: "apple", quantity: 8 },
    { id: uuid(), product: "eggs", quantity: 120 },
  ]);
  const addItem = (item) => {
    setShopItems((currItems) => {
      return [...currItems, { ...item, id: uuid() }];
    });
  };
  return (
    <>
      <h1>Shopping List</h1>
      <ul>
        {shopItems.map((item) => {
          return (
            <li key={item.id}>
              {item.product} - {item.quantity}
            </li>
          );
        })}
      </ul>
      <ShoppingListForm addItem={addItem} />
    </>
  );
}
