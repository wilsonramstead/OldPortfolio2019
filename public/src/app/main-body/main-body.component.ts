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
    this.listToShow = 'about';
    this.pageToShow = 'aboutMe';
    $(function () {
      $(document).scroll(function(){
        var $nav = $(".responsiveNav");
        $nav.toggleClass("scrolled", $(this).scrollTop() > ($(window).height() + 10));
      });
    });
  }

  showList(string) {
    this.listToShow = string;
  }
  showPage(string) {
    this.pageToShow = string;
  }

}
