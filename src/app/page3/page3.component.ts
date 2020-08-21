import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  arr: number[] = [];
  dig: number;//two binding
  constructor() { }

  ngOnInit(): void {

  }
  tablecalc() {
    for (let i = 1; i <= 10; i++) {
      this.arr.push(this.dig * i);
    }

  }
}
