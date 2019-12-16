import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {

  constructor() { }
  listToShow: any;
  pageToShow: any;

  ngOnInit() {
    this.pageToShow = 'intro';
  }
  showList(string) {
    if(this.listToShow === string) {
      this.listToShow = '';
    } else {
      this.listToShow = string;
    }
  }
  showPage(string) {
    $('.display').fadeOut(500);
    setTimeout(() => { this.pageToShow = string; }, 500);
    $('.display').fadeIn(500);
  }
}
