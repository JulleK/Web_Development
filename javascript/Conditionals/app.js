// let random = Math.random() * 2;
// random = Math.floor(random)


// if (random === 1) {
//     console.log("your number is 1")
// }
// else if (random === 0) {
//     console.log("your number is 0")
// }


// const dayOfWeek = 'Monday';

// if (dayOfWeek === 'Monday') {
//     console.log("I HATE MONDAYS!")
// }
// else if (dayOfWeek === 'Saturday') {
//     console.log("I LOVE SATURDAYS!")
// }


const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
    if (password.indexOf(' ') !== -1) {
        console.log("Password cannot contain spaces")
    }
    else {
        console.log("valid password!")
    }
}
else {
    console.log("password too short")
}

