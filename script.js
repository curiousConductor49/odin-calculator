/* 
PSEUDOCODE
- convert to comments and delete later
- 3 main sections: 
    - js logic functions
    - html calculator w/ display functions
    - js logic implementation into html calculator


***JS Logic Functions (steps 1-3)***

step 1: basic math operations
step 2: operation variables and function
step 3: operator function

***HTML Calculator w/ Display Functions (steps 4-5)***
step 4: basic html calculator using dom
step 5: display functions

***JS Logic Implementation into HTML Calculator (step 6)****
step 6: integrate js and html so the calculator works (user inputs an operation, calculator outputs the correct response)
*/

// JS Logic Functions (steps 1-3)
// step 1

/* Function add two numbers
Pass In: two numbers
Action: CALCULATE the sum of the numbers
Pass Out: sum of the numbers
ENDFUNC
*/

/* Function subtract two numbers
Pass In: two numbers
Action: CALCULATE the difference of the numbers
Pass Out: difference of the numbers
ENDFUNC
*/

/* Function multiply two numbers
Pass In: two numbers
Action: CALCULATE the product of the numbers
Pass Out: product of the numbers
ENDFUNC
*/

/* Function divide two numbers
Pass In: two numbers
Action: CALCULATE the quotient of the numbers
Pass Out: quotient of the numbers
ENDFUNC
*/

// step 2
// INIT let variables to store an operand, an operator, and an operand

// step 3
/* Function perform an operation
Pass In: two operands, one operator
Action: 
    CASE operator value OF
    +: call addition function and pass operands
    -: call subtraction function and pass operands
    *: call multiplication function and pass operands
    /: call addition function and pass operands
    ENDCASE
Pass Out: the result of the operation
ENDFUNC
*/

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
        SET a variable (initialized earlier outside the function as an empty array) to store the value for later use
Pass Out: n/a
ENDFUNC
*/

// JS Logic Implementation into HTML Calculator (step 6)
// step 6: integrate js and html so the calculator works (user inputs an operation, calculator outputs the correct response)
// CALL the display numbers function to show which operands the user clicks
// CALL the store values function to store which operands and operator the user clicks
// CALL the operator function (pass it the result of the store values function to calculate the right result when the user clicks on the equal sign
// CALL the display numbers function again to update the display with the result of the operator function
// CLEAR the variable array which stores the user input (operands and operator)