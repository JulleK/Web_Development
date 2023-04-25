const screen = document.querySelector('.screen')
const buttons = document.querySelectorAll('.calc-button')
const operatorDisplay = document.querySelector('.operator-display')


let total = 0;
let newNum = 0;
let currentOperator; // operators: + - x / C ←

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttonValue = button.innerText
        buttonClick(buttonValue)
    })
})

function buttonClick(buttonValue) {
    if (isNaN(buttonValue)) {
        handleOperator(buttonValue)
    } else {
        if (!newNum)
            newNum = buttonValue
        else
            newNum += buttonValue
        console.log(newNum)
        screen.innerText = newNum
    }
}

function handleOperator(operator) {
    const changeDisplayedOperator = () => {
        currentOperator = operator
        operatorDisplay.innerText = currentOperator
    }
    switch (operator) {
        case "+":
            changeDisplayedOperator()
            break;

        case "-":
            changeDisplayedOperator()
            break;

        case "x":
            changeDisplayedOperator()
            break;

        case "÷":
            changeDisplayedOperator()
            break;

        case "=":
            // TODO
            break;

        case "C":
            currentOperator = null
            operatorDisplay.innerText = ""
            total = 0
            newNum = 0
            screen.innerText = "0"
            break;

        case "←":
        // TODO
    }
}