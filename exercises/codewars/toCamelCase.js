function toCamelCase(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "-" || str[i] === "_") {
            newStr += str[i + 1].toUpperCase()
            i++
        } else {
            newStr += str[i]
        }
    }
    return newStr
}

toCamelCase("the-stealth-warrior_haha")