const btn = document.querySelector('#btn2')

btn.onclick = function () {
    console.log("YOU CKILCKE D ME!")
}

function scream() {
    console.log("AHHAHAHAAH");
    console.log("STOP TOUCHING MEEE!");

}

btn.onmouseenter = scream;