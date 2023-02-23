// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const qty = document.querySelector('#qty');
const prod = document.querySelector('#product');
const list = document.querySelector('#list')

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerText = `${qty.value} ${prod.value}`;
    list.appendChild(newLi)
    qty.value = ""
    prod.value = ""
})