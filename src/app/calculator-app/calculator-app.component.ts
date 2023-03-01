import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator-app.component.html',
  styleUrls: ['./calculator-app.component.css']
})
export class CalculatorComponent {
  display: string = '0';
  currentNumber: string = '';
  currentOperation: string = '';
  firstNumber: number = 0;
  result: number = 0;

  onNumberClick(num: string): void {
    if (this.currentNumber === '' && num === '0') {
      return;
    }
    this.currentNumber += num;
    this.display = this.currentNumber;
  }

  onDecimalClick(): void {
    if (this.currentNumber === '') {
      this.currentNumber = '0';
    }
    if (this.currentNumber.indexOf('.') === -1) {
      this.currentNumber += '.';
      this.display = this.currentNumber;
    }
  }

  onOperationClick(op: string): void {
    if (this.currentOperation === '') {
      this.firstNumber = Number(this.currentNumber);
      this.currentNumber = '';
      this.currentOperation = op;
      this.display = op;
    } else {
      this.calculateResult();
      this.currentOperation = op;
      this.display = op;
    }
  }

  onClearClick(): void {
    this.display = '0';
    this.currentNumber = '';
    this.currentOperation = '';
    this.firstNumber = 0;
    this.result = 0;
  }

  onEqualsClick(): void {
    if (this.currentOperation !== '') {
      this.calculateResult();
      this.currentOperation = '';
      this.currentNumber = this.result.toString();
      this.display = this.result.toString();
    }
  }

  calculateResult(): void {
    switch (this.currentOperation) {
    case '+':
    this.result = this.firstNumber + Number(this.currentNumber);
    break;
    case '-':
    this.result = this.firstNumber - Number(this.currentNumber);
    break;
    case '*':
    this.result = this.firstNumber * Number(this.currentNumber);
    break;
    case '/':
    this.result = this.firstNumber / Number(this.currentNumber);
    break;
    default:
    break;
    }
    }
    }
