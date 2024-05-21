const buttons = document.querySelectorAll(".calc-button");
const firstScreenNum = document.querySelector(".first-screen-num");
const secondScreenNum = document.querySelector(".second-screen-num");
const operatorDisplay = document.querySelector(".operator-display");

let total = 0;
let currentNum = "";
let currentOperator = null;
let awaitingSecondNum = false;

// Attach event listeners to buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.innerText;
    buttonClick(buttonValue);
  });
});

// Handle button click
function buttonClick(buttonValue) {
  if (isNaN(buttonValue)) {
    handleOperator(buttonValue);
  } else {
    handleNum(buttonValue);
  }
}

// Handle number input
function handleNum(num) {
  if (awaitingSecondNum) {
    currentNum = num;
    awaitingSecondNum = false;
  } else {
    currentNum += num;
  }

  if (currentOperator === null) {
    firstScreenNum.innerText = currentNum;
  } else {
    secondScreenNum.innerText = currentNum;
  }
}

// Handle operator input
function handleOperator(operator) {
  if (operator === "C") {
    clearAll();
  } else if (operator === "=") {
    if (currentOperator && currentNum !== "") {
      calculateTotal();
      firstScreenNum.innerText = `${total}`;
      secondScreenNum.innerText = "";
      operatorDisplay.innerText = "";
      currentOperator = null;
      //   currentNum = "";
      awaitingSecondNum = false;
    }
  } else {
    if (currentOperator && currentNum !== "") {
      calculateTotal();
      firstScreenNum.innerText = `${total}`;
      secondScreenNum.innerText = "";
    } else {
      total = parseFloat(currentNum) || 0;
    }
    currentOperator = operator;
    operatorDisplay.innerText = currentOperator;
    awaitingSecondNum = true;
  }
}

function calculateTotal() {
  const secondNum = parseFloat(currentNum);
  switch (currentOperator) {
    case "+":
      total += secondNum;
      break;
    case "-":
      total -= secondNum;
      break;
    case "x":
      total *= secondNum;
      break;
    case "/":
      if (secondNum !== 0) {
        total /= secondNum;
      } else {
        alert("Cannot divide by zero");
        clearAll();
        return;
      }
      break;
  }
  currentNum = `${total}`;
}

function clearAll() {
  currentOperator = null;
  currentNum = "";
  total = 0;
  awaitingSecondNum = false;
  firstScreenNum.innerText = "0";
  secondScreenNum.innerText = "";
  operatorDisplay.innerText = "";
}
