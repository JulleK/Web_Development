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

// const scoreDisplay = (playerDisplay, pScore, rivalDisplay) => {
//     if (!isGameOver) {
//         pScore++;
//         if (pScore === winningScore) {
//             isGameOver = true;
//             playerDisplay.classList.add('winner')
//             rivalDisplay.classList.add('loser')
//         }
//         updateDisplay(p1Display, p1Score)
//         playerDisplay.textContent = pScore
//     }
// }

const resetGame = () => {
    p1Score = 0;
    p2Score = 0;
    isGameOver = false;
    updateDisplay(p1Display, p1Score)
    updateDisplay(p2Display, p2Score)
    p1Display.classList.remove('winner', 'loser')
    p2Display.classList.remove('winner', 'loser')
}

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('winner')
            p2Display.classList.add('loser')
        }
        updateDisplay(p1Display, p1Score)
    }
})

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('winner')
            p1Display.classList.add('loser')
        }
        updateDisplay(p2Display, p2Score)
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value)
    resetGame();
})

resetButton.addEventListener('click', resetGame)
