import { Component, } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  emailSent = false;
  title = 'fabiangurth';
  burgerMenuActive: boolean;

  ngOnInit(): void {
    let deliveryState  = JSON.parse(localStorage.getItem('deliveryState'));

    if (deliveryState) {
      this.showSnackbar();
    }
  }

  showSnackbar(){
    this.emailSent = true;

    setTimeout(() => {
      this.emailSent = false;
      localStorage.setItem('deliveryState', JSON.stringify(this.emailSent));
    }, 2500);
  }

  scroll(anchor: string): void {
    let el = document.getElementById(anchor);
    el.scrollIntoView({behavior:"smooth"});
  }

}
