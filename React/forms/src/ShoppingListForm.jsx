import { useState } from "react";

export default function ShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 1 });
  const handleChange = (evt) => {
    setFormData(() => {
      return {
        ...formData,
        [evt.target.name]: evt.target.value,
      };
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    addItem(formData);
    setFormData({ product: "", quantity: 1 });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="product">Product Name </label>
      <input
        type="text"
        placeholder="Product"
        name="product"
        value={formData.product}
        onChange={handleChange}
        id="product"
      />
      <br />
      <label htmlFor="quantity">Quantity </label>
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        id="quantity"
      />
      <br />
      <button>Add Product</button>
    </form>
  );
}
