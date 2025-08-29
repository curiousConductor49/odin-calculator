// declare variables to store DOM nodes
const numberKeys = document.querySelectorAll(".number-key");
const operatorKeys = document.querySelectorAll(".operator-key");
const calcKeys = document.querySelectorAll(".calc-key");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".clear-btn");
const displayPanel = document.querySelector(".display");

// declare variables for operands, operator, and result of operation
let operand1 = [];
let operand2 = [];
let operator = null;
let operationResult = null;

// create functions for basic math operations
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
    // catches cases where a full operation isn't inputted
    if (num1.length === 0 || num2.length === 0 || operator === null) {
        alert("Please input a proper operation: a number, an operator sign, and a number");
        clearValues();
    }
    // handles logic for full operation inputs
    else {
        // store number parameters after conversion to integers
        digit1 = parseInt(num1.join(""));
        digit2 = parseInt(num2.join(""));

        // call math operation function based on operator sign
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
                // catches instance of dividing by zero
                if (operationResult === Infinity) {
                    alert("Oho, you're approaching me? Then come as close as you'd like! Dividing by 0 will never happen!");
                    clearValues();
                }
                break;
        }
        // convert operation result to a rounded decimal if need be
        if (Number.isInteger(operationResult)) {
            return operationResult;
        } else if (operationResult === null) {
            return null;
        } else {
            return Number.parseFloat(operationResult.toFixed(2));
        }
    }
}

function storeClickedValue(key) {
    // handle chained operations
    if (operand1.length !== 0 && operand2.length !== 0 && key.classList.contains("operator-key")) {
        operand1 = [];
        operand2 = [];
        operationResult.toString().split("").map((el) => operand1.push(el));
        operator = key.textContent;
    } else {
        if (key.classList.contains("number-key")) {
            // handle inputs for operands, both single and multi-digit numbers, as well as which operand should store which input
            if (operator === null) {
                operand1.push(key.textContent);
                displayPanel.textContent = operand1.join("");
            } else if (operator !== null) {
                operand2.push(key.textContent);
                displayPanel.textContent = operand2.join("");
            }
        } else if (key.classList.contains("operator-key")) {
            // handle inputs for operator
            operator = key.textContent;
        }
    }
}

// clear operands and operator when called
function clearValues() {
    operand1 = [];
    operand2 = [];
    operator = null;
    operationResult = null;
    displayPanel.textContent = "";
}

// loop through all calculator keys and store their value when clicked
for (const key of calcKeys) {
    key.addEventListener("click", () => {
        storeClickedValue(key);
    });
}

// clear operands and operator when clicked
clearBtn.addEventListener("click", () => {clearValues()});

// call operation function and display result in DOM
equalSign.addEventListener("click", () => {
    displayPanel.textContent = operate(operand1, operand2, operator);
})