import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  arr2: string[] = ['a', 'b', 'c', 'd'];
  constructor(private _rout: Router) { }

  ngOnInit(): void {
  }
  NavigateTo() {
this._rout.navigate(['/Page3'])
  }

}


