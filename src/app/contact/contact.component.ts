import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailSent = false;

  constructor() { }

  ngOnInit(): void {
  }

  setDeliveryState(){
    this.emailSent = true;
    localStorage.setItem('deliveryState', JSON.stringify(this.emailSent));
  }

}
