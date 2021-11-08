import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fabiangurth';
  burgerMenuActive: boolean;
  emailSent = false;

  constructor(public router: Router ) {}

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
