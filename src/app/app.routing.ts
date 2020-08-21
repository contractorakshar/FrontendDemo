import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page3Component } from './page3/page3.component';
import { Page2Component } from './page2/page2.component';
const arr: Routes = [
  { path: '', component: Page1Component },
  { path: 'Page2', component: Page2Component },
  { path: 'Page3', component: Page3Component },
];
export const routingArr = RouterModule.forRoot(arr);
