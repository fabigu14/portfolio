import { Component, } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  title = 'fabiangurth';
  burgerMenuActive: boolean;

  scroll(anchor: string): void {
    let el = document.getElementById(anchor);
    el.scrollIntoView({behavior:"smooth"});
  }

}
