const testText = document.querySelector('#test-text')
const userInput = document.querySelector('#test-user-input')
const timerScreen = document.querySelector('#timer-clock')

let userMistakes = 0
let testStarted = false

const words = [
    "pioneer",
    "willpower",
    "porter",
    "fossil",
    "say",
    "snack",
    "magnitude",
    "paragraph",
    "piece",
    "roar",
    "chew",
    "right",
    "discourage",
    "detector",
    "fun",
    "neighborhood",
    "close",
    "environment",
    "torture",
    "revoke",
]

// creating words in the document
for (word of words) {
    const newWord = document.createElement('span')
    newWord.classList.add('word')
    newWord.innerText = word + " "
    testText.appendChild(newWord)
}

testText.firstChild.classList.add('active')

userInput.addEventListener('input', () => {
    if (!testStarted) {
        countdownTimer(timerScreen, 15)

        testStarted = true
    }
    const activeWord = document.querySelector(".active")
    const inputText = userInput.value

    // check if user made mistakes in current word
    highlightWrong(activeWord, inputText)


    // if user presses space, go to next word 
    //  and apply convinient classes
    goToNextWord(activeWord, inputText)
})

function highlightWrong(activeWord, inputText) {
    // if user input !== active word
    if (inputText !== activeWord.innerText.slice(0, inputText.length)) {
        // if the word isn't highlighted as wrong add 1 mistake
        if (!activeWord.classList.contains('highlight-wrong')) {
            userMistakes += 1
        }
        activeWord.classList.add('highlight-wrong')
    } else {
        // correct input = remove the class
        activeWord.classList.remove('highlight-wrong')
    }
}

function goToNextWord(activeWord, inputText) {
    if (inputText[inputText.length - 1] === " ") {
        if (inputText.trimStart() === activeWord.innerText) {
            activeWord.classList.add('correct')
        }
        else {
            activeWord.classList.add('wrong')
        }
        // make the next word active
        activeWord.nextSibling.classList.add('active')
        activeWord.classList.remove('active')

        userInput.value = ""
        activeWord.classList.remove('highlight-wrong')
    }
}

function countdownTimer(timerScreen, seconds) {
    // function counting down from n seconds to 0
    //  I will use it as timer for the test
    let i = seconds

    const intervalId = setInterval(() => {
        i -= 1
        timerScreen.innerText = i
        if (i === 0)
            clearInterval(intervalId)
    }, 1000)
}