const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");
const buttonsBlock = document.querySelector(".buttons-block");

let currentOperand = null;
let previousOperand = null;
let currentOperation = null;

const performAction = () => {
  let result;
  switch (currentOperation) {
    case "+":
      result = +currentOperand + +previousOperand;
      break;
    case "-":
      result = +previousOperand - +currentOperand;
      break;
  }

  currentOperand = result;
  display.innerHTML = currentOperand;
  currentOperation = null;
  previousOperand = null;
};

const peformInputOperation = keyValue => {
  switch (keyValue) {
    case "c":
      currentOperand = null;
      previousOperand = null;
      currentOperation = null;
      display.innerHTML = "";
      break;
    case "-":
      previousOperand = currentOperand;
      currentOperand = null;
      currentOperation = keyValue;
      display.innerHTML = "";
      break;
    case "+":
      previousOperand = currentOperand;
      currentOperand = null;
      currentOperation = keyValue;
      display.innerHTML = "";
      break;
    case "=":
      performAction();
      break;
    default:
      if (Number.isInteger(+keyValue)) {
        currentOperand =
          currentOperand === null ? keyValue : currentOperand + keyValue;
        display.textContent = currentOperand;
      } else {
        console.log("Incorrect input!");
      }
  }
};

const handleButtonIntraction = event => {
  const buttonValue = event.target.textContent;
  peformInputOperation(buttonValue);
};

document.addEventListener("keypress", event => {
  const keyValue = event.key;
  peformInputOperation(keyValue);
});

buttonsBlock.addEventListener("click", handleButtonIntraction);
