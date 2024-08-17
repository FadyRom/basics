import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  enteredInitialInvestment = signal<string>('0');
  enteredAnnualInvestment = signal<string>('0');
  enteredDuration = signal<string>('10');
  enteredExpectedRetrun = signal<string>('5');

  constructor(private investmentService: InvestmentService) {}

  onSubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedRetrun(),
      annualInvestment: +this.enteredAnnualInvestment(),
    });
  }
}
