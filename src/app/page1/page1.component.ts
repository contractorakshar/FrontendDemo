import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  arr: any[] = [];
  constructor(private _rout: Router) { }

  ngOnInit(): void {
    for (let i = 0; i <= 10; i++) {
      this.arr.push(i);

    }
    console.log(this.arr);
  }
  navigationto() {
this._rout.navigate(['/Page2']);
  }
}
