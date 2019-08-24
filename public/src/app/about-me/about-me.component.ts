import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  @Output() someEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    $(".aboutWrapper").mousemove(function(event) {
      this.wrapperWidth = $(".aboutWrapper").width();
      this.wrapperHeight = $(".aboutWrapper").height();
      this.mouseXpercentage = Math.round(event.pageX / this.wrapperWidth * 100);
      console.log("posX: ", event.pageX);
      this.mouseYpercentage = Math.round(event.pageY / this.wrapperHeight * 100);
      console.log("posY: ", event.pageY);
      $(".aboutWrapper").css('background', 'radial-gradient(at ' + this.mouseXpercentage + '% ' + this.mouseYpercentage + '%, white, #5c5c5c)');
    })
  }

  callParent() {
      this.someEvent.next('contact');
  }

}
