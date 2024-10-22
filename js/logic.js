let firstOperand = null;
let secondOperand = null;
let currentOperator = null;
const displayElement = document.querySelector("#calculator-display");
const historyElement = document.querySelector(".calculator-main-board .calculator-history");

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearCalculator);

const numberButtons = document.querySelectorAll(".number-button button");
numberButtons.forEach((button) => {
    button.addEventListener("click", () => appendNumber(button.textContent));
});

const equalsButton = document.querySelector(".equals-button button");
equalsButton.addEventListener("click", calculateResult);

const operatorButtons = document.querySelectorAll(".operator-button button");
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => setOperator(button.textContent));
});

function clearCalculator() {
    displayElement.textContent = "";
    firstOperand = null;
    secondOperand = null;
    currentOperator = null;
    historyElement.textContent = "History: ";
}

function appendNumber(number) {
    if (!(number === "." && displayElement.textContent.includes("."))) {
        displayElement.textContent += number;
        historyElement.textContent += number;
    }
}

function calculateResult() {
    if (displayElement.textContent !== "") {
        secondOperand = parseFloat(displayElement.textContent);
        if (firstOperand !== null && currentOperator) {
            firstOperand = performOperation(currentOperator, firstOperand, secondOperand);
            displayElement.textContent = firstOperand;
            historyElement.textContent += ` = ${firstOperand} `;
            currentOperator = null;
            secondOperand = null;
        } else {
            firstOperand = secondOperand;
        }
    }
}

function setOperator(operator) {
    if (displayElement.textContent !== "") {
        secondOperand = parseFloat(displayElement.textContent);
        if (firstOperand === null) {
            firstOperand = secondOperand;
        } else if (currentOperator) {
            firstOperand = performOperation(currentOperator, firstOperand, secondOperand);
        }
        currentOperator = operator;
        historyElement.textContent += ` ${currentOperator} `;
        displayElement.textContent = "";
    }
}

function performOperation(operator, operand1, operand2) {
    let result;
    switch (operator) {
        case "+":
            result = operand1 + operand2;
            break;
        case "-":
            result = operand1 - operand2;
            break;
        case "X":
            result = operand1 * operand2;
            break;
        case "/":
            result = operand2 !== 0 ? operand1 / operand2 : "Cannot divide by zero";
            break;
        default:
            return null;
    }
    return typeof result === "number" ? parseFloat(result.toFixed(2)) : result;
}
