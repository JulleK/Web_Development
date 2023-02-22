// async function hello() {
// }

// const sing = async () => {
//     throw 'oh ohho error'
//     return 'lalalala'
// }

// sing()
//     .then(data => {
//         console.log('promise fullfilled with:', data)
//     })
//     .catch(err => {
//         console.log("oh no, promise rejected!")
//         console.log(err)
//     })


// const login = async (username, password) => {
//     if (!username || !password) throw 'Missing Credentials'
//     if (password === 'cutecorgi') return 'Welcome!'
//     throw 'Invalid Password'
// }

// login('asdasd', 'cutecorgi')
//     .then(msg => {
//         console.log("Logged In!")
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log("Error!")
//         console.log(err)
//     })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000)
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    return "ALL DONE"
}

// rainbow().then(() => console.log("END OF RAINBOW"))

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW")
}

printRainbow();

const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}


async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log("CAUGHT AN ERROR!")
        console.log("error is:", e)
    }
}
