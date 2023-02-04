const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset')
const winningScoreSelect = document.querySelector('#howManyRounds')
let winningScore = 3;
let isGameOver = false;

const updateDisplay = (player, score) => {
    player.textContent = score
}

const resetGame = () => {
    p1.score = 0;
    p2.score = 0;
    isGameOver = false;
    p1.display.textContent = p1.score
    p2.display.textContent = p2.score
    p1.display.classList.remove('has-text-success', 'has-text-danger')
    p2.display.classList.remove('has-text-success', 'has-text-danger')

    p1.button.disabled = false;
    p2.button.disabled = false;
}

const updateScores = (player, rival) => {
    if (!isGameOver) {
        player.score++;
        if (player.score >= winningScore && player.score > rival.score + 1) {
            isGameOver = true;
            player.display.classList.add('has-text-success')
            rival.display.classList.add('has-text-danger')

            player.button.disabled = true;
            rival.button.disabled = true;
        }
        player.display.textContent = player.score
    }
}

p1.button.addEventListener('click', () => {
    updateScores(p1, p2)
})

p2.button.addEventListener('click', () => {
    updateScores(p2, p1)
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    resetGame();
})

resetButton.addEventListener('click', resetGame)
