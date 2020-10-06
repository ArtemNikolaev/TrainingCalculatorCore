'use strict';

const buttons = document.querySelectorAll('[data-button]');
const allClearButton = document.querySelector('[data-all-clear]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new CalculatorCore();

buttons.forEach(button => {
  button.addEventListener("click", () => {
    calculator.in(button.innerHTML);
    currentOperandTextElement.innerHTML = calculator.view;
  })
});

allClearButton.addEventListener("click", () => {
  currentOperandTextElement.innerHTML = '';
  calculator.clear();
});