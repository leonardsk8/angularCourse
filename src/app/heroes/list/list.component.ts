import {Component} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes: string[] = ['Aquaman', 'Flash', 'Batman', 'Superman', 'Wonder Woman'];
  heroDeleted: string;

  constructor() {
    console.log('constructor');
    this.heroDeleted = '';
  }

  deleteHero(): void {
    this.heroDeleted = this.heroes.pop() || '';
  }
}
