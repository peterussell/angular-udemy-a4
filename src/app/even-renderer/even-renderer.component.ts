import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-renderer',
  templateUrl: './even-renderer.component.html',
  styleUrls: ['./even-renderer.component.css']
})
export class EvenRendererComponent implements OnInit {
  @Input() counterVal: number;

  constructor() {
  }

  ngOnInit() {
  }

}
