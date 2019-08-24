import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-project-two', 
  templateUrl: './project-two.component.html',
  styleUrls: ['./project-two.component.css']
})
export class ProjectTwoComponent implements OnInit {

  constructor() { }
  show: boolean;
  ngOnInit() {
    this.show = false;
    $(".projTwoWrapper").mousemove(function(event) {
      this.wrapperWidth = $(".projTwoWrapper").width();
      this.wrapperHeight = $(".projTwoWrapper").height();
      this.mouseXpercentage = Math.round(event.pageX / this.wrapperWidth * 100);
      this.mouseYpercentage = Math.round(event.pageY / this.wrapperHeight * 100);
      $(".projTwoWrapper").css('background', 'radial-gradient(at ' + this.mouseXpercentage + '% ' + this.mouseYpercentage + '%, white, #e50915');
    })
    $(".projTwoTech").css("display", "none");
  }
  showTech() {
    console.log("window width: ", $(window).width());
    if($(window).width() >= 550) {
      if(this.show == false) {
        this.show = true;
        $(".buildH4").css("color", "white");
        $(".projTwoTech").css("display", "");
        $(".projTwoWrapper").css("height", "1400px");
      } else {
        this.show = false;
        $(".buildH4").css("color", "black");
        $(".projTwoTech").css("display", "none");
        $(".projTwoWrapper").css("height", "600px");
      }
    } else {
      if(this.show == false) {
        this.show = true;
        $(".buildH4").css("color", "white");
        $(".projTwoTech").css("display", "");
        $(".projTwoWrapper").css("height", "2800px");
      } else {
        this.show = false;
        $(".buildH4").css("color", "black");
        $(".projTwoTech").css("display", "none");
        $(".projTwoWrapper").css("height", "1000px");
      }
    }
  }
}