import {Component} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})
export class HeroComponent {
  name = 'Green Lanter';
  age = 45;

  get nameCapitalized(): string {
    return this.name.toUpperCase();
  }

  getName(): string {
    return `${this.name} - ${this.age}`;
  }

  changeName(): void {
    this.name = 'Aquaman';
  }
  changeAge(): void {
    this.age = 30;
  }
}
