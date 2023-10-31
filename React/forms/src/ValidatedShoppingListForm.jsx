import { useState } from "react";

export default function ValidatedShoppingListForm({ addItem }) {
  const [formData, setFormData] = useState({ product: "", quantity: 1 });
  const [productIsValid, setProductIsValid] = useState(false);
  const validate = (value) => {
    if (value.length === 0) {
      setProductIsValid(false);
    } else {
      setProductIsValid(true);
    }
  };
  const handleChange = (evt) => {
    const value = evt.target.value;
    const changedField = evt.target.name;
    setFormData((currData) => {
      if (changedField === "product") {
        validate(value);
      }
      return {
        ...currData,
        [changedField]: value,
      };
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (productIsValid) {
      addItem(formData);
      setFormData({ product: "", quantity: 1 });
    }
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
      {!productIsValid && (
        <p style={{ color: "red" }}>Product name cannot be empty</p>
      )}
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
      <button disabled={!productIsValid}>Add Product</button>
    </form>
  );
}
