import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-project-four',
  templateUrl: './project-four.component.html',
  styleUrls: ['./project-four.component.css']
})
export class ProjectFourComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(".projFourWrapper").mousemove(function(event) {
      this.wrapperWidth = $(".projFourWrapper").width();
      this.wrapperHeight = $(".projFourWrapper").height();
      this.mouseXpercentage = Math.round(event.pageX / this.wrapperWidth * 100);
      this.mouseYpercentage = Math.round(event.pageY / this.wrapperHeight * 100);
      $(".projFourWrapper").css('background', 'radial-gradient(at ' + this.mouseXpercentage + '% ' + this.mouseYpercentage + '%, rgb(206, 206, 206), #5c5c5c');
    })
  }

}
