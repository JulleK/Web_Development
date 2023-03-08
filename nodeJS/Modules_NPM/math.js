const add = (x, y) => x + y;

const PI = 3.14159;

const square = x => x * x;

module.exports = { add: add, PI: PI, square: square }

module.exports.add = add
module.exports.PI = PI
module.exports.square = square


// better way to export
const math = {
    add: add,
    PI: PI,
    square: square
}

module.exports = math