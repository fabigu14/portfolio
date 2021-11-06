import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() anchorElement = new EventEmitter<string>();
  @Input() state: boolean;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  setAnchor(anchor: string) {
    this.anchorElement.emit(anchor);
  }
}
