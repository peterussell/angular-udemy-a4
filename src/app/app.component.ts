import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Game';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onCounterTick(e: { counterVal: number }) {
    if (e.counterVal % 2 === 0) {
      this.evenNumbers.push(e.counterVal);
    } else {
      this.oddNumbers.push(e.counterVal);
    }
  }
}
