import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {
  counter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increaseCounter(): void {
    this.counter++;
  }

  decreaseCounter(): void {
    if (this.counter > 0) {
      this.counter--;
    }
  }
}
