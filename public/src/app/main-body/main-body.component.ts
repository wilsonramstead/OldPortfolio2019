import { Component, OnInit } from '@angular/core';

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
    this.listToShow = 'about';
    this.pageToShow = 'aboutMe';
  }

  showList(string) {
    this.listToShow = string;
  }
  showPage(string) {
    this.pageToShow = string;
  }
}
