const prices = [9.99, 5.10, 1.50, 4.99];

// let total = 0;
// for (let price of prices) {
//     total += price;
// }

let pricesSum = prices.reduce((total, price) => {
    return total + price;
});

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price
    }
    return min
})