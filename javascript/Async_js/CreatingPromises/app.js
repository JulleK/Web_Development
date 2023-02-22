// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         console.log(rand)
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve("YOUR FAK DATA HERE");
//             }
//             else {
//                 reject("EROOR");
//             }
//         }, 1000);
//     })
// }

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log("DONE WITH REQUEST")
//         console.log("data is:", data)
//     })
//     .catch((err) => {
//         console.log("OH NO!", err)
//     })


const delayedColorChange = (color, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('cyan', 1000))
    .then(() => delayedColorChange('violet', 1000))
