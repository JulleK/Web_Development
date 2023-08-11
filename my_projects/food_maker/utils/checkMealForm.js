module.exports = (formData) => {
    let { name, price } = formData
    // correct user form input, eg. price can't be negative
    name = name.toLowerCase();
    const ingredients = [];
    if (!price || price < 0) price = 0;
    for (let [key, value] of Object.entries(formData.ingredients)) {
        ingredients.push(key)
    }
    return { name, price, ingredients }
}
