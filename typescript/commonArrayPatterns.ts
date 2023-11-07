interface cartProduct {
  id: number;
  product: string;
  price: number;
}

const shoppingCart: cartProduct[] = [
  { id: 1, product: "HDMI Cable", price: 4 },
  { id: 2, product: "East Bake Oven", price: 27 },
  { id: 3, product: "Bike", price: 62 },
];

// ADDING TO AN ARRAY
[...shoppingCart, { id: 4, product: "Coffe Mug", price: 7.99 }];

// REMOVING AN ELEMENT
shoppingCart.filter((item) => item.id !== 2);

// UPDATING ALL ELEMENTS IN AN ARRAY
shoppingCart.map((item) => {
  return {
    ...item,
    product: item.product.toLowerCase(),
  };
});

// MODIFYING A PARTICULAR ELEMENT IN AN ARRAY
shoppingCart.map((item) => {
  if (item.id === 3) {
    return { ...item, price: 10.99 };
  } else {
    return item;
  }
});
