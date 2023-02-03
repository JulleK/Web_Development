const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset')
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#howManyRounds')

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

const updateDisplay = (player, score) => {
    player.textContent = score
}

const scoreDisplay = (playerDisplay, pScore, rivalDisplay) => {
    if (pScore === winningScore) {
        isGameOver = true;
        playerDisplay.classList.add('has-text-success')
        rivalDisplay.classList.add('has-text-danger')
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
    playerDisplay.textContent = pScore
}

const resetGame = () => {
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    p1Display.textContent = p1Score
    p2Display.textContent = p2Score
    p1Display.classList.remove('has-text-success', 'has-text-danger')
    p2Display.classList.remove('has-text-success', 'has-text-danger')

    p1Button.disabled = false;
    p2Button.disabled = false;
}

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score++;
        scoreDisplay(p1Display, p1Score, p2Display)
    }
})

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score++;
        scoreDisplay(p2Display, p2Score, p1Display)
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    resetGame();
})

resetButton.addEventListener('click', resetGame)
