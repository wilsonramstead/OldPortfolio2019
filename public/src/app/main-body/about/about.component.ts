import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  @Output() navLink = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  callParent(string) {
    this.navLink.next(string);
  }
}
