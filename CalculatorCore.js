'use strict';

const operands = ['+', '-', '*', '/'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

class CalculatorCore {
  view = '0';

  num1 = '';
  num2 = '';

  operand = '';

  in(val = '') {

    if (numbers.indexOf(val) !== -1) {
      if (this.operand) {
        this.num2 += val;
      } else {
        this.num1 += val;
      }
    } else if (operands.indexOf(val) !== -1) {
      this.operand = val;
    } else if (val === '.') {
      if (this.operand && this.num2.indexOf('.') === -1) {
        if (this.num2) {
          this.num2 += val;
        } else {
          this.num2 += ('0' + val);
        }
      } else if (!this.operand && this.num1.indexOf('.') === -1) {
        if (this.num1) {
          this.num1 += val;
        } else {
          this.num1 += ('0' + val);
        }
      }
    } else if (val === '=' && this.num2) {
      this.compute();
    }

    this.view = this.num1 + this.operand + this.num2;
  }

  compute() {
    this.num1 = String(eval(parseFloat(this.num1) + this.operand + parseFloat(this.num2)));
    this.num2 = '';
    this.operand = '';
  }

  clear() {
    this.view = '0';

    this.num1 = '';
    this.num2 = '';

    this.operand = '';
  }
}