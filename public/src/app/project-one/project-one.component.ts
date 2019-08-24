import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-project-one',
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.css']
})
export class ProjectOneComponent implements OnInit {

  constructor() { }
  show: boolean;

  ngOnInit() {
    this.show = false;
    $(".projOneWrapper").mousemove(function(event) {
      this.wrapperWidth = $(".projOneWrapper").width();
      this.wrapperHeight = $(".projOneWrapper").height();
      this.mouseXpercentage = Math.round(event.pageX / this.wrapperWidth * 100);
      this.mouseYpercentage = Math.round(event.pageY / this.wrapperHeight * 100);
      $(".projOneWrapper").css('background', 'radial-gradient(at ' + this.mouseXpercentage + '% ' + this.mouseYpercentage + '%, white, rgb(92, 215, 255)');
    })
    $(".projOneTech").css("display", "none");
  }

  showTech() {
    console.log("window width: ", $(window).width());
    if($(window).width() >= 550) {
      if(this.show == false) {
        this.show = true;
        $(".buildH4").css("color", "white");
        $(".projOneTech").css("display", "");
        $(".projOneWrapper").css("height", "1400px");
      } else {
        this.show = false;
        $(".buildH4").css("color", "black");
        $(".projOneTech").css("display", "none");
        $(".projOneWrapper").css("height", "600px");
      }
    } else {
      if(this.show == false) {
        this.show = true;
        $(".buildH4").css("color", "white");
        $(".projOneTech").css("display", "");
        $(".projOneWrapper").css("height", "2800px");
      } else {
        this.show = false;
        $(".buildH4").css("color", "black");
        $(".projOneTech").css("display", "none");
        $(".projOneWrapper").css("height", "925px");
      }
    }

  }

}
