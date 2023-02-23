const output = document.querySelector('#output');
const input = document.querySelector('#input');

input.addEventListener('input', (e) => {
    output.textContent = e.target.value
})