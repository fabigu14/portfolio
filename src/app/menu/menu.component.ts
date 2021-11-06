import { Component, EventEmitter, Input, OnInit, Output,} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  mobile = false;
  burgerMenuActive = false;

  @Input() darkmode = true;
  @Output() anchorElement = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if (document.body.clientWidth <= 900) { 
      this.mobile = true;
    }
  }

  setState(){
    if(!this.burgerMenuActive){
      this.burgerMenuActive = true;
      
    }
    else{
      this.burgerMenuActive = false;
    }
    
  }

  setAnchor(anchor: string) {
    this.anchorElement.emit(anchor);
  }

}
