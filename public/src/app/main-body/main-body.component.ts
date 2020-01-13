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
    this.fixedHeader();
    $(document).scroll(function(){
      var $nav = $(".fixedHeader");
      console.log("scrollTop: ", $(this).scrollTop());
      console.log("nav.height: ", $nav.height());
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
      $nav.toggleClass(() => {
        $(this).css("background", "pink")
      }, $(this).scrollTop() > $nav.height());
    });
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
  fixedHeader() {

  }
}
