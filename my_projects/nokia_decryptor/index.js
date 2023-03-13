const colors = require('colors');

const keyboard = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    0: [' ']
};

function decrypt(input, keyboard) {
    let output = ""
    const inputNums = input.split('-')

    for (num of inputNums) {
        const outputNum = keyboard[num[0]][num.length - 1]
        output += outputNum
    }
    return output;
}

function encrypt(input, keyboard) {
    let output = ""
    const letters = input.split('')
    for (let letter of letters) {
        for (num in keyboard) {
            if (keyboard[num].indexOf(letter) !== -1) {
                const outNum = `${num}`.repeat(keyboard[num].indexOf(letter) + 1)
                output += outNum + '-'
            }
        }
    }
    output = output.substring(0, output.length - 1);
    return output
}

const args = process.argv.slice(2)
const input = args[1]

try {
    if (args[0] === "--decrypt" || args[0] === "-d") console.log(decrypt(input, keyboard))
    else if (args[0] === "--encrypt" || args[0] === "-e") console.log(encrypt(input, keyboard))
    else if (args[0] === "help") {
        console.log(`to encrypt `.yellow + `node . --encrypt "example"`)
        console.log(`to decrypt `.green + `node . --decrypt "33-99-2-6-7-555-33"`)
        console.log('for shorter syntax use -e and -d instead of --encrypt and --decrypt'.grey)
    }
    else console.log("try 'node . help' to see correct syntax")
}
catch (err) {
    console.log("Something went wrong! try 'node . help' to see correct syntax")
}
