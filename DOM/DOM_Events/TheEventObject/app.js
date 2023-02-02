document.querySelector('button').addEventListener('click', (evt) => {
    console.log(evt)
})

const input = document.querySelector('input')
input.addEventListener('keydown', (evt) => {
    console.log(evt.key)
    console.log(evt.code)
})

window.addEventListener('keydown', (evt) => {
    console.log(evt.code)
})