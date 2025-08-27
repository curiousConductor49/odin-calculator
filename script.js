/* 
PSEUDOCODE
- convert to comments and delete later
- 3 main sections: 
    - js logic functions (steps 1-3)
    - html calculator w/ display functions (steps 4-5)
    - js logic implementation into html calculator (step 6)
*/

// Declare variables

const numberKeys = document.querySelectorAll(".number-key");
const operatorKeys = document.querySelectorAll(".operator-key");
const calcKeys = document.querySelectorAll(".calc-key");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".clear-btn");
const displayPanel = document.querySelector(".display");

let operand1 = null;
let operand2 = null;
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

// console.log(add(5,2));
// console.log(subtract(5,2));
// console.log(multiply(5,2));
// console.log(divide(5,2));


function operate(num1, num2, operator) {
    if (num1 === null || num2 === null || operator === null) {
        alert("Please input a proper operation: a number, an operator sign, and a number");
    } else if (num2 === 0 && operator === "/") {
        alert("Oho, you're approaching me? Then come as close as you'd like! Dividing by 0 will never happen!");
    } else {
        digit1 = parseInt(num1);
        digit2 = parseInt(num2);

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
    if (key.classList.contains("number-key")) {
        if (operand1 === null) {
            operand1 = key.textContent;
        } else {
            operand2 = key.textContent;
        }
    } else if (key.classList.contains("operator-key")) {
        operator = key.textContent;
    }
}

function clearValues() {
    operand1 = null;
    operand2 = null;
    operator = null;
    displayPanel.textContent = "";
}

for (const key of calcKeys) {
    if (key.classList.contains("number-key")) {
        key.addEventListener("click", () => {displayPanel.textContent += key.textContent});
    }
    key.addEventListener("click", () => {
        storeClickedValue(key);
        // console.log(operand1);
        // console.log(operand2);
        // console.log(operator);
    });
}

clearBtn.addEventListener("click", () => {clearValues()});
equalSign.addEventListener("click", () => {
    const final = operate(operand1, operand2, operator);
    displayPanel.textContent = final;
    // displayNum(final);
    // console.log(final);
})

// JS Logic Implementation into HTML Calculator (step 6)
// step 6: integrate js and html so the calculator works (user inputs an operation, calculator outputs the correct response)
// CALL the display numbers function to show which operands the user clicks
// CALL the store values function to store which operands and operator the user clicks
// CALL the operator function (pass it the result of the store values function to calculate the right result when the user clicks on the equal sign)
// CALL the display numbers function again to update the display with the result of the operator function
// IF operand variables are not null AND any non-equal sign operator button is clicked (aka a chained operation) THEN
    // SET the first operand variable to the result of the operation
    // CALL the operator function again (pass it the result of the store values function)
// CALL the clear function when the user clicks the clear button or if the user clicks a digit button