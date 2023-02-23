const h1 = document.querySelector('h1')
const button = document.querySelector('button')
const colors = [];

button.addEventListener('click', () => {
    for (let i = 0; i <= 2; i++) {
        colors[i] = Math.floor(Math.random() * 256)
    }

    const rgb = `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})`;
    document.body.style.backgroundColor = rgb;
    h1.innerText = rgb;
})
