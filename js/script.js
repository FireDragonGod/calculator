const helloWorld = 'Hello, World!';

const divide = (num1, num2) => num1 / num2;
const multiply = (num1, num2) => num1 * num2;
const subtract = (num1, num2) => num1 - num2;
const add = (num1, num2) => num1 + num2;

let number = '';
let operator = '';
let anotherNumber = '';

const operate = (operations, num1, num2) => {
  let sum = 0;
  let numOne = +num1;
  let numTwo = +num2;
  if (operations === '' && num1 === '' || num2 === '') {
    return sum = '';
  }
  if (operations.slice(-1) === '➗' && numOne === 0 && numTwo === 0) {
    return sum = alert(undefined),
      number = '',
      anotherNumber = '',
      operator = '';
  }
  if (operator.slice(-1) === '+') {
    sum += add(numOne, numTwo);
  }
  if (operations.slice(-1) === '-') {
    sum += subtract(numOne, numTwo);
  }
  if (operations.slice(-1) === 'x') {
    sum += multiply(numOne, numTwo);
  }
  if (operations.slice(-1) === '➗') {
    sum += divide(numOne, numTwo);
  }
  return Math.round(sum * 10000000000) / 10000000000;
};

const input = document.querySelector('#input');
const numberClass = document.querySelectorAll('.number');
const operationClass = document.querySelectorAll('.operation');
const equal = document.querySelector('#equal');
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const decimal = document.querySelector('#decimal');

const populateDisplay = (operationButtons, numberButtons, equalButton) => {

  numberButtons.forEach((button) => {

    button.addEventListener('click', e => {
      let display = '';
      if (operator === '') {
        number += e.target.textContent;
        display += number;
        input.textContent = display;
      }
      if (operator.slice(-1) === '+' || operator.slice(-1) === '-' || operator.slice(-1) === 'x' || operator.slice(-1) === '➗') {
        anotherNumber += e.target.textContent;
        display += anotherNumber;
        input.textContent = display;
      }
    });
  });

  let sumString = '';

  equalButton.addEventListener('click', (e) => {
    let display = '';
    let result = operate(operator, number, anotherNumber).toString();
    display += result;
    input.textContent = display;
    number = result;
    anotherNumber = sumString;
    operator = '';
    decimal.removeAttribute('disabled', '');

    let string = '';
    for (let i = 0; i < input.textContent.length; i++) {
      string += input.textContent[i];
    }

    let array = string.split('');
    for (let j = 0; j < array.length; j++) {
      if (array[j] === '.') {
        decimal.setAttribute('disabled', '');
      }
    }
  });

  operationButtons.forEach((button) => {

    button.addEventListener('click', e => {

      decimal.removeAttribute('disabled', '');
      operator += e.target.textContent;
      let display = '';
      if (operator.slice(-1) === e.target.textContent && operate(operator, number, anotherNumber)) {
        let twoOperation = operator.slice(-2).split('').reverse().join('').toString();
        operator = '';
        operator += twoOperation;
        let result = operate(operator, number, anotherNumber).toString();
        display += result;
        input.textContent = display;
        let anotherTwoOperation = operator.slice(-2).split('').reverse().join('').toString();
        operator += anotherTwoOperation;
        number = result;
        anotherNumber = sumString;
      }
    });
  });
};

populateDisplay(operationClass, numberClass, equal);