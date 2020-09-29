const operands = ['+', '-', '*', '/'];
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

class CalculatorCore {
  view = '0';

  num1 = '';
  num2 = '';

  operand = '';

  /*
    num1
    operand - num1
    num2 - operand
    = - num2
    +- - num1
    view - 0 || (num1 + operand) || num2
   */
  in(val) {
    // validation

    if (numbers.indexOf(val) !== -1) {
      if (this.operand) {
        this.num2 += val;
      } else {
        this.num1 += val;
      }
    } else if (operands.indexOf(val) !== -1) {
      if (this.operand) {
        this.compute();
      }

      this.operand = val;
    } else if (val === '.') {
      if (this.operand && this.num2.indexOf('.') === -1) {
        this.num2 += val;
      } else if (!this.operand && this.num1.indexOf('.') === -1) {
        this.num1 += val;
      }
    } else if (val === '=' && this.num2) {
      this.compute();
    }

    this.view = this.num1 + this.operand + this.num2;
  }

  compute() {
    this.num1 = String(eval(this.num1 + this.operand + this.num2));
    this.num2 = '';
    this.operand = '';
  }
}

module.exports = CalculatorCore;
