import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() navLink = new EventEmitter<string>();

  
  constructor() { }

  ngOnInit() {
  }

  callParent(string) {
      this.navLink.next(string);
  }

}
