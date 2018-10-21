import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  loanAmount = 1000000;
  roi = 8.5;
  term = 10;
  constructor() { }

  ngOnInit() {
  }

  getPayment(loan, intrest, time): any {
    return ((intrest / 1200.0 * loan) /
      (1.0 - Math.pow(1.0 + intrest / 1200.00, -1.0 * time * 12.0))).toFixed(2);
  }
  getTotal (loan, intrest, time): any{
    return this.getPayment(loan, intrest, time)*12*time;
  }

}
