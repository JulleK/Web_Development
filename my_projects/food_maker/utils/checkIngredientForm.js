module.exports = (formData) => {
    let { name, price, available, count } = formData
    // correct user form input, eg. price can't be negative
    name = name.toLowerCase();
    if (!available) available = false;
    else available = true;
    if (!count || count < 0) {
        count = 0;
        available = false
    }
    if (!price || price < 0) price = 0;
    return { name, price, available, count }
}
