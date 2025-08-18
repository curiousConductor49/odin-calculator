/* 
PSEUDOCODE
- convert to comments and delete later
- 3 main sections: 
    - js logic functions (steps 1-3)
    - html calculator w/ display functions (steps 4-5)
    - js logic implementation into html calculator (step 6)
*/

// JS Logic Functions (steps 1-3)
// step 1

/* Function add two numbers
Pass In: two numbers
Action: CALCULATE the sum of the numbers
Pass Out: sum of the numbers
ENDFUNC
*/
function add(a, b) {
    return a + b;
}

/* Function subtract two numbers
Pass In: two numbers
Action: CALCULATE the difference of the numbers
Pass Out: difference of the numbers
ENDFUNC
*/
function subtract(a, b) {
    return a - b;
}

/* Function multiply two numbers
Pass In: two numbers
Action: CALCULATE the product of the numbers
Pass Out: product of the numbers
ENDFUNC
*/
function multiply(a, b) {
    return a * b;
}

/* Function divide two numbers
Pass In: two numbers
Action: CALCULATE the quotient of the numbers
Pass Out: quotient of the numbers
ENDFUNC
*/
function divide(a, b) {
    return a / b;
}

console.log(add(5,2));
console.log(subtract(5,2));
console.log(multiply(5,2));
console.log(divide(5,2));

// step 2
// INIT let variables to store an operand, an operator, and an operand
// INIT let variable to store the result of the operation
// SET let variables to null for now
let operand1 = null;
let operand2 = null;
let operator = null;
let operationResult = null;

// step 3
/* Function perform an operation
Pass In: two operands, one operator
Action:
    IF one of the operand and operator variables are null (aka user has pressed = to call this function w/o complete input) THEN
        SHOW an alert message telling the user to input a proper operation
    IF the second operand variable equals zero THEN
        SHOW an alert message telling the user dividing by 0 is not allowed
    CASE operator value OF
    +: call addition function and pass operands
    -: call subtraction function and pass operands
    *: call multiplication function and pass operands
    /: call addition function and pass operands
    ENDCASE
    UPDATE the operation result variable (this acts like a form of 'memory' for chained operations)
    DETERMINE the rounded version of the result to avoid overflowing the calculator display
Pass Out: the result of the operation
ENDFUNC
*/
function operate(num1, num2, operator) {
    if (num1 === null || num2 === null || operator === null) {
        alert("Please input a proper operation: a number, an operator sign, and a number");
    } else if (num2 === 0 && operator === "/") {
        alert("Oho, you're approaching me? Then come as close as you'd like! Dividing by 0 will never happen!");
    } else {
        switch (operator) {
            case "+":
                operationResult = add(num1, num2);
                break;
            case "-":
                operationResult = subtract(num1, num2);
                break;
            case "*":
                operationResult = multiply(num1, num2);
                break;
            case "/":
                operationResult = divide(num1, num2);
                break;
        }
        return Number.isInteger(operationResult) ? operationResult : Number.parseFloat(operationResult.toFixed(2));
    }
}

// HTML Calculator w/ Display Functions (steps 4-5)
// step 4: basic html calculator using dom
// Create a div container and its children with classes to mimic a calculator's layout
// Children should include a display, number buttons (0-9), operator buttons (+, -, x, ÷), an equal sign button, and a clear button that wipes the display
// INIT variables to store their respective DOM nodes

// step 5: display functions
/* Function display clicked numbers
Pass In: value of the clicked number button
Action:
    SHOW the value in the display element of the calculator
Pass Out: n/a
ENDFUNC
*/

/* Function store clicked values
Pass In: value of the clicked button (operator or number)
Action:
    IF the clicked value is not the = sign
        CASE operator data type OF
            number: store in first operand variable or second operand variable (check whether variables are null or not to determine which ones should store what number)
            operator: store in operator variable
        ENDCASE
Pass Out: n/a
ENDFUNC
*/

/* Function clear values
Pass In: n/a
Action: SET the variables which store the user input (operands and operator) back to null
Pass Out: n/a
*/

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