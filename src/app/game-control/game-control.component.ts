import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counterTick = new EventEmitter<{ counterVal: number }>();

  counter: number = 0;
  intervalHandle;

  constructor() { }

  ngOnInit() {
  }

  onStartClicked() {
    this.intervalHandle = setInterval(() => {
      this.counter++;
      this.counterTick.emit({ counterVal: this.counter });
    }, 1000);
  }

  onStopClicked() {
    clearInterval(this.intervalHandle);
    this.counter = 0;
  }
}
