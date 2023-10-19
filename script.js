// display dom nodes.
let currentDisplay = document.querySelector('#current');
let output = document.querySelector('#results');

// buttons, operations, decimal and equal dom nodes.
const digits = document.querySelectorAll('.digit');
const operations = document.querySelectorAll('.operation');
const decimal = document.querySelector('.decimal');
const equal = document.querySelector('.eval');

//need to add a clear button to delete any operations or current value
const clear = document.querySelector('#clear');

//Create 3 variables for a number, an operator, and another number.
let firstNumber = '';
let symbol = '';
let secondNumber = '';

//add 4 functions for add, minus, multiply and divide.
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a ,b) => a * b;

const divide = (a, b) => a / b;

//create a function operate
  //i: 2 numbers and an operator to call operating functions
  //O: operating functions results.
function doMath(operator, a, b) {
  //use and if statement or switch case to check what type of operator is passsed.
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return substract(a, b)
    case 'x':
      return multiply(a, b)
    case '/':
      if(b === 0) {
        return "Error cannot divide by 0"
      }
      return divide(a, b)
    default:
      return null;
  }
}

digits.forEach(digit => {
  digit.addEventListener('click', function() {
    inputNumber(digit.textContent);
    currentDisplay.textContent = firstNumber;
  });
});

operations.forEach(mathSymbol => {
  mathSymbol.addEventListener('click', function() {
    handleOperator(mathSymbol.textContent);
    currentDisplay.textContent = secondNumber + ' ' + symbol;
    output.textContent = firstNumber;
  });
});

function inputNumber(num) {
  if(firstNumber.length <= 10) {
    firstNumber += num;
  }
}

function handleOperator(op) {
  symbol = op;
  secondNumber = firstNumber;
  firstNumber = '';
}

//clear the whole display.
clear.addEventListener('click', function() {
  currentDisplay.textContent = '';
  output.textContent = '';
  firstNumber = '';
  operator = '';
  secondNumber = '';
});

//need to add a click event listener to apply functionality when click on all 4 buttons.
  //if else statements to check type of buttons.
      //aka if plus, minus, multiply or divide  
      //and call correct functionality.

// need to add text display to one of my divs to display current steps.
  //when i choose a button number. display button 
  //when i choose an operation button. display operation
  //if i choose another button or equal sign no matter display current value.

//need to add a delete button to delete current step 
  //to display delete clear the current text display.