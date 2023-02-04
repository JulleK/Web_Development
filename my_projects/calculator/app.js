const firstNumDisplay = document.querySelector('#firstNum')
const secondNum = document.querySelector('#secondNum')
const result = document.querySelector('#result')
const operationDisplay = document.querySelector('#operationDisplay')
const chosenOperator = document.querySelector('#chooseOperator')

let firstNumValue = 0;
let secondNumValue = 0;

const giveResult = (num1Value, num2Value, operator, result) => {
    switch (operator) {
        case "+":
            result.innerText = num1Value + num2Value;
            break;
        case "-":
            result.innerText = num1Value - num2Value;
            break;
        case "*":
            result.innerText = num1Value * num2Value;
            break;
        case "/":
            result.innerText = num1Value / num2Value;
            break;
        case "%":
            result.innerText = num1Value % num2Value;
            break;
    }
    if (result.innerText === "NaN") {
        result.innerText = "0"
    }
}

firstNumDisplay.addEventListener('input', () => {
    firstNumValue = parseInt(firstNum.value)
    if (isNaN(firstNumValue)) {
        firstNumValue = 0;
    }
    giveResult(firstNumValue, secondNumValue, chosenOperator.value, result)

})

secondNum.addEventListener('input', () => {
    secondNumValue = parseInt(secondNum.value)
    if (isNaN(secondNumValue)) {
        secondNumValue = 0;
    }
    giveResult(firstNumValue, secondNumValue, chosenOperator.value, result)

})

chosenOperator.addEventListener('change', () => {
    operationDisplay.innerText = chosenOperator.value
    giveResult(firstNumValue, secondNumValue, chosenOperator.value, result)
})