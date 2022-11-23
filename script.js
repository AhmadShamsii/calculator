'use strict';

const formInput = document.querySelector('.form-input');
const btnOperation = document.querySelectorAll('.btn-op');
const btnDigit = document.querySelectorAll('.btn-digit');
const btnClear = document.querySelector('.btn-clear');
const btnEqual = document.querySelector('.equal');

let expression = [];
let input;
for (let num = 0; num < btnDigit.length; num++) {
  btnDigit[num].addEventListener('click', function (e) {
    const digit = btnDigit[num].dataset.digit;
    expression.push(digit);
    const clickedNumbers = expression.join('');
    formInput.innerHTML = clickedNumbers;
    input = formInput.textContent;
  });
}

for (let op = 0; op < btnOperation.length; op++) {
  btnOperation[op].addEventListener('click', function (e) {
    const operation = btnOperation[op].dataset.op;
    expression.push(operation);
    const clickedOperation = expression.join('');
    formInput.innerHTML = clickedOperation;
  });
}

btnEqual.addEventListener('click', function (e) {
  input = eval(input);
  formInput.innerHTML = input;
});

btnClear.addEventListener('click', function () {
  expression = [];
  formInput.textContent = 0;
});
