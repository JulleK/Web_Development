function diamond(n) {
    // n less than 0 or n is even
    if (n < 0 || n % 2 === 0) {
        return null
    }
    // string to display the diamond
    let display = "";

    for (let i = Math.floor(n / 2); i > 0; i--) {
        display += `${" ".repeat()}${"*".repeat(i)}\n`
        console.log(i)
    }

    return display;
}

console.log(diamond(5))