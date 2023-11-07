var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 4 },
    { id: 2, product: "East Bake Oven", price: 27 },
    { id: 3, product: "Bike", price: 62 },
];
// ADDING TO AN ARRAY
__spreadArray(__spreadArray([], shoppingCart, true), [{ id: 4, product: "Coffe Mug", price: 7.99 }], false);
// REMOVING AN ELEMENT
shoppingCart.filter(function (item) { return item.id !== 2; });
