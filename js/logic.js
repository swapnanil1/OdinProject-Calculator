let firstN = undefined;
let secondN = undefined;
let ops = undefined;
const display = document.querySelector("#display");
const dhistory = document.querySelector(".mainboard .dhistory");

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.textContent = "";
    firstN = undefined;
    secondN = undefined;
    display.textContent = "";
    dhistory.textContent = "History: ";
});

const numbers = document.querySelectorAll(".nums");
numbers.forEach((e) => {
    e.addEventListener("click", () => {
        // Prevent multiple decimal points
        if (!(e.textContent === "." && display.textContent.includes("."))) {
            display.textContent += e.textContent;
            dhistory.textContent += e.textContent;
        }
    });
});

const output = document.querySelector(".output");
output.addEventListener("click", () => {
    if (display.textContent !== "") {
        secondN = parseFloat(display.textContent);
        if (firstN !== undefined && secondN !== undefined && ops) {
            firstN = operate(ops, firstN, secondN);
            display.textContent = firstN;
            dhistory.textContent += ` = ${firstN} `;
            ops = undefined;
            secondN = undefined;
        } else if (firstN === undefined) {
            firstN = secondN;
        }
    }
});

const operator = document.querySelectorAll(".operator");
operator.forEach((e) => {
    e.addEventListener("click", () => {
        if (display.textContent !== "") {
            secondN = parseFloat(display.textContent);
            if (firstN !== undefined && secondN !== undefined) {
                if (ops) {
                    firstN = operate(ops, firstN, secondN);
                } else {
                    firstN = secondN;
                }
                display.textContent = firstN;
                dhistory.textContent += ` ${e.textContent} `;
            } else {
                firstN = secondN;
                dhistory.textContent += ` ${e.textContent} `;
            }
            ops = e.textContent;
            display.textContent = "";
        }
    });
});


function operate(ops, firstN, secondN) {
    const add = (n1, n2) => n1 + n2;
    const subtract = (n1, n2) => n1 - n2;
    const multiply = (n1, n2) => n1 * n2;
    const divide = (n1, n2) => n2 !== 0 ? n1 / n2 : "Cannot divide by zero";

    switch (ops) {
        case "+":
            return add(firstN, secondN);
        case "-":
            return subtract(firstN, secondN);
        case "X":
            return multiply(firstN, secondN);
        case "/":
            return divide(firstN, secondN);
        default:
            return "Error";
    }
}

