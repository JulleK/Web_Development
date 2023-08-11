const firstScreenNum = document.querySelector('.first-screen-num')
const secondScreenNum = document.querySelector('.second-screen-num')
const buttons = document.querySelectorAll('.calc-button')
const operatorDisplay = document.querySelector('.operator-display')


let total = 0;
let newNum = 0;
let currentOperator; // operators: + - x / C ←

// some button clicked
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttonValue = button.innerText
        buttonClick(buttonValue)
    })
})

// button clicked handler
function buttonClick(buttonValue) {
    if (isNaN(buttonValue)) {
        handleOperator(buttonValue)
    } else {
        handleNum()
    }
}

function handleNum() {
    if (!currentOperator) {
        if (!newNum)
            newNum = buttonValue
        else
            newNum += buttonValue
        firstScreenNum.innerText = newNum
    }
    else {
        if (!newNum)
            newNum = buttonValue
        else
            newNum += buttonValue
        secondScreenNum.innerText = newNum
    }
}

function handleOperator(operator) {
    const changeDisplayedOperator = () => {
        currentOperator = operator
        operatorDisplay.innerText = currentOperator
    }
    newNum = 0
    switch (operator) {
        case "+":
            changeDisplayedOperator()
            total = firstScreenNum.innerText + secondScreenNum.innerText
            break;

        case "-":
            changeDisplayedOperator()
            total -= newNum
            break;

        case "x":
            changeDisplayedOperator()
            total *= newNum
            break;

        case "÷":
            changeDisplayedOperator()
            total /= newNum
            break;

        case "=":
            firstScreenNum.innerText = `${total}`
            secondScreenNum.innerText = ""
            currentOperator = null;
            console.log(total)
            break;

        case "C":
            currentOperator = null
            operatorDisplay.innerText = ""
            total = 0
            newNum = 0
            firstScreenNum.innerText = "0"
            secondScreenNum.innerText = ""
            break;

        case "←":
        // TODO
    }
}