//add 4 functions for add, minus, multiply and divide.
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a ,b) => a * b;

const divide = (a, b) => a / b;
// HOW TO UPDATE THE CURRENT VALUE IF WE USE SUM, MULTIPLY.
// const sum = function (array) {
//   return array.reduce((total, current) => total + current)
// };
// const product = function (array) {
//   return array.reduce((number, current) => number * current)
// };
// const division = function(array) {
//   return array.reduce((number, current) => number / current);
// };
// const subtraction = function(array) {
//   return array.reduce((number, current) => number - current)
// };

//Create 3 variables for a number, an operator, and another number.
let firstNumber = 0;
let operator;
let secondNumber;

//create a function operate
  //i: 2 numbers and an operator to call operating functions
  //O: operating functions results.
function operate(a, b, operator) {
  //use and if statement or switch case to check what type of operator is passsed.
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return substract(a, b)
    case 'x':
      return multiply(a, b)
    case '/':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}

//create a function that stores number. into a display value to use in next step
const displayValue = function(value) {
  return value;
}
 
// need to add buttons from 0 - 9 and add child nodes to parent calculator node.

//need to add a click event listener to apply functionality when click on all 4 buttons.
  //if else statements to check type of buttons.
      //aka if plus, minus, multiply or divide  
      //and call correct functionality.

// need to add text display to one of my divs to display current steps.
  //when i choose a button number. display button 
  //when i choose an operation button. display operation
  //if i choose another button or equal sign no matter display current value.
  
//need to add a clear button to delete any operations or current value.
  //clear the whole display.

//need to add a delete button to delete current step 
  //to display delete clear the current text display.