import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-project-three',
  templateUrl: './project-three.component.html',
  styleUrls: ['./project-three.component.css']
})
export class ProjectThreeComponent implements OnInit {
  show: boolean;

  constructor() { }

  ngOnInit() {
    this.show = false;
    $(".projThreeWrapper").mousemove(function(event) {
      this.wrapperWidth = $(".projThreeWrapper").width();
      this.wrapperHeight = $(".projThreeWrapper").height();
      this.mouseXpercentage = Math.round(event.pageX / this.wrapperWidth * 100);
      this.mouseYpercentage = Math.round(event.pageY / this.wrapperHeight * 100);
      $(".projThreeWrapper").css('background', 'radial-gradient(at ' + this.mouseXpercentage + '% ' + this.mouseYpercentage + '%, white, goldenrod');
    })
    $(".projThreeTech").css("display", "none");
  }

  showTech() {
    console.log("window width: ", $(window).width());
    if($(window).width() >= 550) {
      if(this.show == false) {
        this.show = true;
        $(".buildH4").css("color", "white");
        $(".projThreeTech").css("display", "");
        $(".projThreeWrapper").css("height", "1000px");
      } else {
        this.show = false;
        $(".buildH4").css("color", "black");
        $(".projThreeTech").css("display", "none");
        $(".projThreeWrapper").css("height", "600px");
      }
    } else {
      if(this.show == false) {
        this.show = true;
        $(".buildH4").css("color", "white");
        $(".projThreeTech").css("display", "");
        $(".projThreeWrapper").css("height", "1700px");
      } else {
        this.show = false;
        $(".buildH4").css("color", "black");
        $(".projThreeTech").css("display", "none");
        $(".projThreeWrapper").css("height", "700px");
      }
    }

  }
}
