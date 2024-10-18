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
const output = document.querySelector(".output");
output.addEventListener("click", () => {
    secondN = parseFloat(display.textContent);
    dhistory.textContent += `= ${operate(ops, firstN, secondN)} , `;
    firstN = operate(ops, firstN, secondN);
    display.textContent = "";
    secondN = undefined;
});
// i have to calcuate the output every time operator is pressed
const numbers = document.querySelectorAll(".nums");
numbers.forEach((e) => {
    e.addEventListener("click", () => {
        display.textContent += e.textContent;
        dhistory.textContent += e.textContent;
        // if (secondN === undefined){
        //     secondN = display.textContent;
        // }
    });
});

const operator = document.querySelectorAll(".operator");
operator.forEach((e) => {
    e.addEventListener("click", () => {
        ops = e.textContent;
        dhistory.textContent += e.textContent;

        secondN = parseFloat(display.textContent);
        if (firstN !== undefined && secondN !== undefined) {
            display.textContent = parseFloat(operate(ops, firstN, secondN));
        }

        firstN = parseFloat(display.textContent);
        history.textContent = display.textContent;
        display.textContent = "";
    });
});

function operate(ops, firstN, secondN) {
    display.textContent = "";
    const add = function (n1, n2) {
        return n1 + n2;
    };

    const subtract = function (n1, n2) {
        return n1 - n2;
    };

    const multiply = function (n1, n2) {
        return n1 * n2;
    };

    const divide = function (n1, n2) {
        return n1 / n2;
    };
    if (ops === "+") {
        result = add(firstN, secondN);
    } else if (ops === "-") {
        result = subtract(firstN, secondN);
    } else if (ops === "X") {
        result = multiply(firstN, secondN);
    } else if (ops === "/") {
        result = divide(firstN, secondN);
    } else {
        result = "Error";
    }
    return result;
}
