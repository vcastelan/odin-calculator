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
const deleted = document.querySelector('#delete')

//Create 3 variables for a number, an operator, and another number.
let firstNumber = '';
let symbol = '';
let secondNumber = '';
// keep track of decimal points
let decimalCounter = 0;

//add 4 functions for add, minus, multiply and divide.
const add = (a, b) => a + b;

const subtract = (a, b) => (a - b).toFixed(1);

const multiply = (a ,b) => a * b;

const divide = (a, b) => (a / b).toFixed(4);

//create a function operate
  //i: 2 numbers and an operator to call operating functions
  //O: operating functions results.
function doMath(operator, a, b) {
  //use and if statement or switch case to check what type of operator is passsed.
  a = parseFloat(firstNumber);
  b = parseFloat(secondNumber);
  switch (operator) {
    case '+':
      return add(a, b)
    case '-':
      return subtract(a, b)
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

// event listener when adding clicking numbers/digits. it will display on current display
digits.forEach(digit => {
  digit.addEventListener('click', function() {
    if(!currentDisplay.textContent.includes(symbol)) {
      inputNumber(digit.textContent);
      currentDisplay.textContent = firstNumber;
    } else {
      inputNumber(digit.textContent);
      currentDisplay.textContent = firstNumber + symbol + secondNumber;
      output.textContent = doMath(symbol, firstNumber, secondNumber);
    }
  });
});

// event listener for when adding operations. will add a symbol to our display
operations.forEach(mathSymbol => {
  mathSymbol.addEventListener('click', function() {
    if(!output.textContent) {
      handleOperator(mathSymbol.textContent);
      currentDisplay.textContent = firstNumber + symbol;
    } else {
      currentDisplay.textContent = output.textContent + mathSymbol.textContent;
      firstNumber = output.textContent;
      output.textContent = '';
      secondNumber = '';
      symbol = '';
      handleOperator(mathSymbol.textContent);
    }
  });
});

// function to add a number to display
function inputNumber(num) {
  if(firstNumber.length <= 10) {
    if(!symbol) {
      firstNumber += num;
    } else {
      secondNumber += num;
    }
  } else {
    return 'Input number less than 10 digits'
  }
}

// function to add an operator to our display. needs to add the value to our global variable, change our firstNum and remove the value of our firstNum
function handleOperator(op) {
  symbol = op;
  decimalCounter = 0;
}

//decimal event to add decimal point to the number
decimal.addEventListener('click', function() {
  decimalCounter++;
  if(decimalCounter === 1) {
    inputNumber(decimal.textContent); 
  }
})

// event listener to make the calculator evaluate after pressing equal button.
equal.addEventListener('click', function() {
  if(!secondNumber) {
    currentDisplay.textContent = firstNumber + symbol;
  }
    else if(currentDisplay.textContent) {
    output.textContent = doMath(symbol, firstNumber, secondNumber);
    currentDisplay.textContent = output.textContent;
    firstNumber = output.textContent;
    output.textContent = '';
    secondNumber = '';
    symbol = '';
  } 
})

//clear the whole display.
clear.addEventListener('click', function() {
  currentDisplay.textContent = '';
  output.textContent = '';
  firstNumber = '';
  symbol = '';
  secondNumber = '';
});

// delete event to delete last input
deleted.addEventListener('click', function() {
  if(firstNumber.length > 0) {
    output.textContent = '';
    currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
    firstNumber = firstNumber.slice(0,-1);
    // symbol = '';
    secondNumber = '';
  } else {
    firstNumber = '';
  }

  if(secondNumber > 0) {
    currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
    secondNumber = secondNumber.slice(0, -1);
    secondNumber = '';
  }

})