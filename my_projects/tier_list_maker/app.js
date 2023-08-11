// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event

const appendImgs = document.querySelectorAll('.appendImg')
const container = document.querySelector('#tier-container')
const tierBoxes = document.querySelectorAll('.tier-box')

let dragged = null;

for (let img of appendImgs) {
    img.addEventListener("dragstart", (event) => {
        // store a ref. on the dragged elem
        dragged = event.target;
    });
}

for (let box of tierBoxes) {
    box.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
    });

    box.addEventListener("drop", (event) => {
        // prevent default action (open as link for some elements)
        event.preventDefault();
        // move dragged element to the selected drop target
        if (event.target === box) {
            dragged.parentNode.removeChild(dragged);
            event.target.appendChild(dragged);
        }
    });
}