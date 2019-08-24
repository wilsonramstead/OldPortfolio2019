import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main-head',
  templateUrl: './main-head.component.html',
  styleUrls: ['./main-head.component.css']
})
export class MainHeadComponent implements OnInit {
  period: boolean;
  constructor() { }

  ngOnInit() {
    // this.period = true;
    // this.blinker();
    // console.log('period: ', this.period);
    // $(document).ready(function(){

    //   $("h1").hover(function(){
    //     $(this).css("text-shadow", " 11px 7px 20px rgb(0, 0, 231)");
    //     $(".period").css("text-shadow", " 11px 7px 20px rgb(0, 0, 231)");
    //     $("h3").css("text-decoration", "underline");
    //   }, function(){
    //     $(this).css("text-shadow", "");
    //     $(".period").css("text-shadow", "");
    //     $("h3").css("text-decoration", "");
    //   });
    // });
  }
  // blinker() {
  //     setInterval(function(){ $(".period").hide() }, 1400);
  //     setInterval(function(){ $(".period").show() }, 2800);
  // }
}
