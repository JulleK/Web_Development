const p1 = document.querySelector('#player1')
p1.style.bottom = "0px"
const p2 = document.querySelector('#player2')
p2.style.bottom = "0px"

const movePlayer = {
    moveDistance: 20,
    parsePos: function (player) {
        return parseInt(player.style.bottom)
    },
    p1UP: function () {
        const newPos = this.parsePos(p1) + this.moveDistance
        p1.style.bottom = `${newPos}px`
    },
    p1DOWN: function () {
        const newPos = this.parsePos(p1) - this.moveDistance
        p1.style.bottom = `${newPos}px`
    },
    p2UP: function () {
        const newPos = this.parsePos(p2) + this.moveDistance
        p2.style.bottom = `${newPos}px`
    },
    p2DOWN: function () {
        const newPos = this.parsePos(p2) - this.moveDistance
        p2.style.bottom = `${newPos}px`
    },
}

let p1Moving = false;
let p2Moving = false;

window.addEventListener('keydown', (evt) => {
    if (evt.key === "w") {
        movePlayer.p1UP()
    }
    else if (evt.key === "s") {
        movePlayer.p1DOWN()
    }
    else if (evt.key === "ArrowUp") {
        movePlayer.p2UP()
    }
    else if (evt.key === "ArrowDown") {
        movePlayer.p2DOWN()
    }
})