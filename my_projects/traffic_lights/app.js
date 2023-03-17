const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
const button = document.querySelector('button')

const changeLights = (lightUp, lightColor, lightDown1, lightDown2, delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resetLights()
            lightUp.classList.add(`${lightColor}`)
            lightDown1.style.backgroundColor = 'grey'
            lightDown2.style.backgroundColor = 'grey'
            resolve();
        }, delay);
    })
}

const resetLights = () => {
    red.classList.remove('red')
    red.style.backgroundColor = ''
    yellow.classList.remove('yellow')
    yellow.style.backgroundColor = ''
    green.classList.remove('green')
    green.style.backgroundColor = ''
}

const lightsLoop = () => {
    changeLights(red, 'red', yellow, green, 0)
        .then(() => changeLights(yellow, 'yellow', red, green, 2000))
        .then(() => changeLights(green, 'green', red, yellow, 2500))
        .then(() => changeLights(yellow, 'yellow', red, green, 1500))
        .then(() => changeLights(red, 'red', yellow, green, 2000))
        .then(() => lightsLoop(), 1000)
}

button.addEventListener('click', () => {
    resetLights()
    lightsLoop()
    button.disabled = true;
    button.innerText = "DISABLED"
})