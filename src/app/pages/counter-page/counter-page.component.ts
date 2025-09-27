import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  standalone: true, 
  imports: [],
  templateUrl: './counter-page.component.html',
})
export class CounterPageComponent {
  counter = signal(10);
  increaseBy(value: number = 1) {
    this.counter.update((counter) => counter + value);
  }
  decreaseBy(value: number = 1) {
    this.counter.update((counter) => counter - value);
  }
  constructor(){
    const saved = localStorage.getItem('counter');
    if (saved) {
      this.counter.set(Number(saved));
    }
    effect(() => {
      console.log('Counter changed: ', this.counter());
      localStorage.setItem('counter', this.counter().toString());
    });
  }
}
