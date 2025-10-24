import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pipes-page',
  imports: [UpperCasePipe, LowerCasePipe, JsonPipe, DatePipe, DecimalPipe, CurrencyPipe, PercentPipe],
  templateUrl: './pipes-page.html',
})
export class PipesPage {
  firstName = signal('john');
  lastName = signal('DOE');
  user = signal({
    id: 1,
    firstName: this.firstName(),
    lastName: this.lastName(),
    age: 30,
    email: 'john.doe@example.com'
  });
  currentDate = signal(new Date());
  birthDate = signal(new Date(2003, 2, 8));
  price = signal(1234.567);
  percent = signal(0.256);
 }
