// function callTwice(func) {
//     func();
//     func();
// }

// // function rollDie() {
// //     const roll = Math.floor(Math.random() * 6) + 1
// //     console.log(roll)
// // }

// const rollDie = function () {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }

// callTwice(rollDie)


function makeMysteryFunc() {
    const rand = Math.random();
    // console.log(rand)
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
    }
    else {
        return function () {
            alert("YOU HAVE BEEN INFECTED!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
        }
    }
}


function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max
    }
}

const isChild = makeBetweenFunc(0, 18)
console.log(isChild)