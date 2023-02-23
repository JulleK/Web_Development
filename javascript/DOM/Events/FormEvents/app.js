const form = document.querySelector('#shelterForm');
const input = document.querySelector('#catName');
const list = document.querySelector('#cats');

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const catName = input.value;
    const newLi = document.createElement("li");
    newLi.innerText = catName;
    list.append(newLi);
    input.value = "";
})