const testText = document.querySelector('#test-text')
const userInput = document.querySelector('#test-user-input')
const timerScreen = document.querySelector('#timer-clock')
const screen = document.querySelector('#screen')
const resultsScreen = document.querySelector('#results-screen')
const wpmResult = document.querySelector('#wpm')

let totalCorrect = 0
let testLetterCount = 0
let testStarted = false
let testTime = 30

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
timerScreen.innerText = testTime

userInput.addEventListener('input', (evt) => {
    if (!testStarted) {
        countdownTimer(timerScreen, testTime)
        testStarted = true
    }

    const activeWord = document.querySelector(".active")
    const inputText = userInput.value

    // check if user made mistakes in current word
    highlightWrong(activeWord, inputText, evt)


    // if user presses space, go to next word 
    //  and apply convinient classes
    goToNextWord(activeWord, inputText)
})

function highlightWrong(activeWord, inputText, evt) {
    // if user input !== active word
    if (inputText !== activeWord.innerText.slice(0, inputText.length)) {
        activeWord.classList.add('highlight-wrong')
    }
    // on correct input remove highlighting
    else {
        activeWord.classList.remove('highlight-wrong')
    }
}

function goToNextWord(activeWord, inputText) {

    if (inputText[inputText.length - 1] === " ") {
        // when user wants to go to next word
        //  firstly count how many letters he got right
        countCorrectLetters(activeWord.innerText.trim(), inputText.trim())

        // if user typed the word correctly
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

function countCorrectLetters(activeWord, inputText) {
    for (let i = 0; i < inputText.length; i++) {
        if (activeWord[i] === inputText[i]) {
            totalCorrect += 1
        }
    }
    testLetterCount += inputText.length
}

function countdownTimer(timerScreen, seconds) {
    // function counting down from n seconds to 0
    //  I will use it as timer for the test
    let i = seconds

    const intervalId = setInterval(() => {
        i -= 1
        timerScreen.innerText = i

        // timer goes down to 0
        if (i === 0) {
            clearInterval(intervalId)

            showResults()
        }
    }, 1000)
}

function showResults() {
    screen.style.display = "none"
    resultsScreen.style.display = "inherit"

    // calculate wpm
    const timeInMinutes = testTime / 60
    const wpm = ((totalCorrect / 5) - ((testLetterCount - totalCorrect) * timeInMinutes)) / timeInMinutes

    // on wpm less than 0 - assign wpm to 0
    wpm > 0 ? wpmResult.innerText = wpm : wpmResult.innerText = 0
}