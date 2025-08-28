// Declare variables

const numberKeys = document.querySelectorAll(".number-key");
const operatorKeys = document.querySelectorAll(".operator-key");
const calcKeys = document.querySelectorAll(".calc-key");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".clear-btn");
const displayPanel = document.querySelector(".display");

let operand1 = [];
let operand2 = [];
let operator = null;
let operationResult = null;

// Declare functions

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, num2, operator) {
    if (num1.length === 0 || num2.length === 0 || operator === null) {
        alert("Please input a proper operation: a number, an operator sign, and a number");
    } else if (num2[0] === 0 && operator === "÷") {
        alert("Oho, you're approaching me? Then come as close as you'd like! Dividing by 0 will never happen!");
    } else {
        // console.log(num1);
        // console.log(num2);
        // console.log(operator);

        digit1 = parseInt(num1.join(""));
        digit2 = parseInt(num2.join(""));

        switch (operator) {
            case "+":
                operationResult = add(digit1, digit2);
                break;
            case "-":
                operationResult = subtract(digit1, digit2);
                break;
            case "x":
                operationResult = multiply(digit1, digit2);
                break;
            case "÷":
                operationResult = divide(digit1, digit2);
                break;
        }
        return Number.isInteger(operationResult) ? operationResult : Number.parseFloat(operationResult.toFixed(2));
        // console.log(operationResult);
    }
}

function storeClickedValue(key) {
    if (operand1.length !== 0 && operand2.length !== 0 && key.classList.contains("operator-key")) {
        operand1 = [];
        operand2 = [];
        operationResult.toString().split("").map((el) => operand1.push(el));
        operator = key.textContent;
    } else {
        if (key.classList.contains("number-key")) {
            if (operator === null) {
                operand1.push(key.textContent);
                displayPanel.textContent = operand1.join("");
            } else if (operator !== null) {
                operand2.push(key.textContent);
                displayPanel.textContent = operand2.join("");
            }
        } else if (key.classList.contains("operator-key")) {
            operator = key.textContent;
        }
    }
}

function clearValues() {
    operand1 = [];
    operand2 = [];
    operator = null;
    displayPanel.textContent = "";
}

for (const key of calcKeys) {
    key.addEventListener("click", () => {
        storeClickedValue(key);
    });
}

clearBtn.addEventListener("click", () => {clearValues()});
equalSign.addEventListener("click", () => {
    displayPanel.textContent = operate(operand1, operand2, operator);
})