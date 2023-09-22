import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ShoppingList from "./ShoppingList";

const data = [
  { id: 1, name: "eggs", quantity: 12, available: false },
  { id: 2, name: "milk", quantity: 1, available: true },
  { id: 3, name: "chicken breasts", quantity: 4, available: false },
  { id: 4, name: "carrots", quantity: 6, available: true },
];

function App() {
  return (
    <div className="App">
      <ShoppingList items={data} />
    </div>
  );
}

export default App;
