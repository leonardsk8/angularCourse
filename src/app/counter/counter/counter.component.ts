import {Component} from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{title}}</h1>
    <h3>The base is: {{base}}</h3>
    <button (click)="accum(base)">+{{base}}</button>
    <span>{{number}}</span>
    <button (click)="accum(-base)">-{{base}}</button>
  `
})
export class CounterComponent {
  title = 'Counter App';
  number = 10;
  base = 5;

  accum(value: number): void {
    this.number += value;
  }
}
