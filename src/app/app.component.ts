import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fabiangurth';
  burgerMenuActive: boolean;

  constructor(public router: Router ) {}

  scroll(anchor: string): void {
    let el = document.getElementById(anchor);
    el.scrollIntoView({behavior:"smooth"});
  }

}
