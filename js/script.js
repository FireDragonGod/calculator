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